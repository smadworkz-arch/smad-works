import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { recommendServices, type Recommendation } from "@/lib/service-recommender";

const WHATSAPP_NUMBER = "917439668751";

const TIER_STYLES: Record<Recommendation["tier"], { label: string; className: string }> = {
  strong: {
    label: "Strong match",
    className: "border-gold/60 bg-gold/15 text-gold",
  },
  good: {
    label: "Good match",
    className: "border-white/25 bg-white/10 text-white",
  },
  possible: {
    label: "Worth exploring",
    className: "border-white/15 bg-white/5 text-white/70",
  },
};

const textareaClass =
  "mt-2 w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm leading-relaxed text-white placeholder:text-white/30 outline-none focus:border-gold transition-colors";

function waLinkFor(rec: Recommendation, goals: string, challenges: string) {
  const context = [goals, challenges].filter(Boolean).join(" ").slice(0, 300);
  const text = `Hi SMad Works,\n\nI used your Service Finder and it suggested: ${rec.service.name}.\n\nAbout my business:\n${context}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function ServiceFinder() {
  const [goals, setGoals] = useState("");
  const [challenges, setChallenges] = useState("");
  const [result, setResult] = useState<{ recommendations: Recommendation[]; confident: boolean } | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setResult(recommendServices({ goals, challenges }));
  };

  const reset = () => {
    setGoals("");
    setChallenges("");
    setResult(null);
  };

  return (
    <section id="service-finder" className="relative border-t border-white/5">
      {/* soft gold glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_60%_at_50%_0%,rgba(212,175,55,0.07),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">Service Finder</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl text-white">
            Not sure what you need?{" "}
            <em className="text-gold not-italic">Tell us where you're headed.</em>
          </h2>
          <p className="mt-5 max-w-2xl text-white/60">
            Describe your goals and what's slowing you down. We match your words against our full
            service catalogue and point you to the right place. Everything stays on this page —
            nothing is sent anywhere until you choose to contact us.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 grid gap-6 lg:grid-cols-2"
        >
          <div className="rounded-3xl border border-white/20 bg-white/[0.06] p-6 backdrop-blur transition hover:border-gold/40">
            <label
              htmlFor="finder-goals"
              className="text-xs font-medium uppercase tracking-wider text-white/70"
            >
              What are your business goals?
            </label>
            <textarea
              id="finder-goals"
              rows={5}
              value={goals}
              onChange={(e) => setGoals(e.target.value)}
              placeholder="e.g. I want to grow my clinic online, get more appointment bookings and build a brand people trust."
              className={textareaClass}
            />
          </div>
          <div className="rounded-3xl border border-white/20 bg-white/[0.06] p-6 backdrop-blur transition hover:border-gold/40">
            <label
              htmlFor="finder-challenges"
              className="text-xs font-medium uppercase tracking-wider text-white/70"
            >
              What challenges are you facing?
            </label>
            <textarea
              id="finder-challenges"
              rows={5}
              value={challenges}
              onChange={(e) => setChallenges(e.target.value)}
              placeholder="e.g. We reply to WhatsApp messages too slowly, posts are inconsistent and I can't do everything myself."
              className={textareaClass}
            />
          </div>
          <div className="flex flex-wrap items-center gap-3 lg:col-span-2">
            <button
              type="submit"
              className="rounded-full bg-gold px-7 py-3 text-sm font-medium text-black shadow-[0_20px_60px_-15px_rgba(212,175,55,0.55)] transition hover:opacity-90"
            >
              Get my recommendations
            </button>
            {(result || goals || challenges) && (
              <button
                type="button"
                onClick={reset}
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/80 transition hover:border-gold/60 hover:text-gold"
              >
                Start over
              </button>
            )}
          </div>
        </motion.form>

        {result && (
          <div className="mt-12">
            {result.recommendations.length === 0 || !result.confident ? (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded-3xl border border-white/20 bg-white/[0.06] p-8 text-center backdrop-blur"
              >
                <h3 className="font-display text-2xl text-white">
                  Your situation sounds unique.
                </h3>
                <p className="mx-auto mt-3 max-w-lg text-sm text-white/60">
                  We couldn't pinpoint a service with confidence — and we'd rather talk to you than
                  guess. Tell us directly and we'll map the right approach together.
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    `Hi SMad Works,\n\nAbout my business:\n${[goals, challenges].filter(Boolean).join(" ").slice(0, 500)}`,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-medium text-black transition hover:opacity-90"
                >
                  Talk to us on WhatsApp <span aria-hidden>→</span>
                </a>
              </motion.div>
            ) : (
              <>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
                  Recommended for you
                </p>
                <div className="mt-6 grid gap-5 lg:grid-cols-3">
                  {result.recommendations.map((rec, i) => {
                    const tier = TIER_STYLES[rec.tier];
                    return (
                      <motion.div
                        key={rec.service.id}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col rounded-3xl border border-white/20 bg-white/[0.06] p-6 backdrop-blur transition hover:border-gold/50 hover:shadow-[0_0_40px_rgba(212,175,55,0.12)]"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span
                            className={`rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-wider ${tier.className}`}
                          >
                            {tier.label}
                          </span>
                          <span className="text-[11px] uppercase tracking-wider text-white/40">
                            {rec.service.category}
                          </span>
                        </div>
                        <h3 className="mt-4 font-display text-2xl text-white">
                          {rec.service.name}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-white/60">
                          {rec.service.tagline}
                        </p>
                        <ul className="mt-5 space-y-2.5">
                          {rec.reasons.map((reason) => (
                            <li key={reason} className="flex gap-2.5 text-sm text-white/70">
                              <span className="mt-0.5 text-gold" aria-hidden>
                                ✓
                              </span>
                              <span>{reason}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-auto flex flex-wrap gap-3 pt-6">
                          <Link
                            to={rec.service.route}
                            className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
                          >
                            Explore service <span aria-hidden>→</span>
                          </Link>
                          <a
                            href={waLinkFor(rec, goals, challenges)}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white/90 transition hover:border-gold/60 hover:text-gold"
                          >
                            Discuss this
                          </a>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
                <p className="mt-6 text-xs text-white/40">
                  Matches are based on the services SMad Works offers. A quick chat always sharpens
                  the picture — every result includes a direct line to the team.
                </p>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
