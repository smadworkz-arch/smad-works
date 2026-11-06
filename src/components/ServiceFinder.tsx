import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { recommendServices, type Recommendation } from "@/lib/service-recommender";

const WHATSAPP_NUMBER = "917439668751";

const TIER_STYLES: Record<Recommendation["tier"], string> = {
  strong: "border-gold/60 bg-gold/15 text-gold",
  good: "border-white/25 bg-white/10 text-white",
  possible: "border-white/15 bg-white/5 text-white/70",
};

function waLinkFor(rec: Recommendation, message: string) {
  const text = `Hi SMad Works,\n\nI used your Service Finder and it suggested: ${rec.service.name}.\n\nAbout my business:\n${message.slice(0, 300)}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function ServiceFinder() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [submittedMessage, setSubmittedMessage] = useState("");
  const [result, setResult] = useState<ReturnType<typeof recommendServices> | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const prompt = message.trim();
    if (!prompt) return;
    setSubmittedMessage(prompt);
    setResult(recommendServices({ goals: prompt, challenges: "" }));
    setMessage("");
  };

  const startAgain = () => {
    setSubmittedMessage("");
    setResult(null);
    setMessage("");
  };

  return (
    <div className="fixed bottom-24 right-4 z-[55] sm:right-6">
      <AnimatePresence>
        {open && (
          <motion.section
            role="dialog"
            aria-label="SMad Works service finder chat"
            initial={{ opacity: 0, y: 14, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="absolute bottom-[4.5rem] right-0 flex h-[min(34rem,calc(100dvh-12rem))] w-[min(24rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-white/20 bg-black/95 text-white shadow-2xl backdrop-blur-xl"
          >
            <header className="flex items-center justify-between border-b border-white/15 px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full border border-gold/50 bg-gold/15 text-gold">
                  <MessageCircle size={17} aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-display text-lg leading-tight">Service Finder</h2>
                  <p className="text-xs text-white/55">SMad Works · here to help</p>
                </div>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                aria-label="Close service finder chat"
                onClick={() => setOpen(false)}
                className="text-white/70 hover:text-white"
              >
                <X aria-hidden="true" />
              </Button>
            </header>

            <div className="flex-1 space-y-4 overflow-y-auto p-4" role="log" aria-live="polite">
              <div className="max-w-[90%] rounded-2xl rounded-tl-sm border border-white/20 bg-white/[0.08] px-3.5 py-3 text-sm leading-relaxed text-white/85">
                Hi! Tell me what you’re hoping to improve and what’s getting in the way. I’ll suggest services that may fit.
              </div>

              {submittedMessage && (
                <div className="ml-auto max-w-[90%] rounded-2xl rounded-tr-sm border border-gold/40 bg-gold/15 px-3.5 py-3 text-sm leading-relaxed text-white">
                  {submittedMessage}
                </div>
              )}

              {result && (
                result.recommendations.length === 0 || !result.confident ? (
                  <div className="max-w-[95%] rounded-2xl rounded-tl-sm border border-white/20 bg-white/[0.08] p-3.5 text-sm leading-relaxed text-white/80">
                    I couldn’t confidently match that to one service. Let’s talk it through and find the right approach.
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi SMad Works,\n\nAbout my business:\n${submittedMessage.slice(0, 500)}`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-2 font-medium text-gold hover:underline"
                    >
                      Continue on WhatsApp <ArrowRight size={15} aria-hidden="true" />
                    </a>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <p className="max-w-[95%] rounded-2xl rounded-tl-sm border border-white/20 bg-white/[0.08] px-3.5 py-3 text-sm text-white/85">
                      Based on what you shared, these services could help:
                    </p>
                    {result.recommendations.map((rec) => (
                      <article
                        key={rec.service.id}
                        className="rounded-xl border border-white/20 bg-white/[0.07] p-3.5 transition hover:border-gold/50"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className={`rounded-full border px-2 py-1 text-[10px] font-medium uppercase ${TIER_STYLES[rec.tier]}`}>
                            {rec.tier === "strong" ? "Strong match" : rec.tier === "good" ? "Good match" : "Worth exploring"}
                          </span>
                          <span className="text-[10px] uppercase text-white/45">{rec.service.category}</span>
                        </div>
                        <h3 className="mt-2 font-display text-xl">{rec.service.name}</h3>
                        <p className="mt-1 text-xs leading-relaxed text-white/65">{rec.service.tagline}</p>
                        <ul className="mt-2 space-y-1 text-xs leading-relaxed text-white/75">
                          {rec.reasons.slice(0, 2).map((reason) => (
                            <li key={reason} className="flex gap-2">
                              <span className="text-gold" aria-hidden="true">✓</span>
                              <span>{reason}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium">
                          <Link to={rec.service.route} className="inline-flex items-center gap-1.5 text-gold hover:underline">
                            Explore service <ArrowRight size={13} aria-hidden="true" />
                          </Link>
                          <a href={waLinkFor(rec, submittedMessage)} target="_blank" rel="noreferrer" className="text-white/80 hover:text-gold">
                            Discuss this
                          </a>
                        </div>
                      </article>
                    ))}
                    <Button type="button" variant="ghost" onClick={startAgain} className="h-auto px-1 py-1 text-xs text-white/60 hover:text-gold">
                      Ask about something else
                    </Button>
                  </div>
                )
              )}
            </div>

            {!result && (
              <form onSubmit={handleSubmit} className="flex items-end gap-2 border-t border-white/15 p-3">
                <label className="sr-only" htmlFor="service-finder-message">Your goals and challenges</label>
                <textarea
                  id="service-finder-message"
                  rows={2}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" && !event.shiftKey) {
                      event.preventDefault();
                      event.currentTarget.form?.requestSubmit();
                    }
                  }}
                  placeholder="Type your goals or challenges…"
                  className="max-h-28 min-h-11 flex-1 resize-none rounded-xl border border-white/20 bg-white/[0.06] px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/40 focus:border-gold/60"
                />
                <Button
                  type="submit"
                  size="icon"
                  aria-label="Send message"
                  disabled={!message.trim()}
                  className="h-11 w-11 shrink-0 rounded-xl bg-gold text-black hover:bg-gold/90"
                >
                  <Send aria-hidden="true" />
                </Button>
              </form>
            )}
          </motion.section>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-[4.25rem] right-0 w-[min(20rem,calc(100vw-2rem))]"
          >
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(true)}
              className="h-auto w-full justify-start gap-3 whitespace-normal rounded-xl border border-white/20 bg-black/95 px-4 py-3 text-left text-white shadow-xl transition hover:border-gold/60 hover:bg-black"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gold/50 bg-gold/15 text-gold">
                <MessageCircle size={17} aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold">Need help finding the right service?</span>
                <span className="mt-1 block text-xs leading-relaxed text-white/65">Tell us what you’re working toward. Let’s chat.</span>
              </span>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        type="button"
        aria-expanded={open}
        aria-label={open ? "Close service finder chat" : "Open service finder chat"}
        onClick={() => setOpen((isOpen) => !isOpen)}
        className="h-12 rounded-full border border-gold/50 bg-black px-4 text-white shadow-xl ring-1 ring-white/10 transition hover:border-gold hover:bg-black hover:shadow-[0_0_28px_rgba(212,175,55,0.25)]"
      >
        {open ? <X aria-hidden="true" /> : <MessageCircle className="text-gold" aria-hidden="true" />}
        <span className="text-sm font-semibold">{open ? "Close" : "Find a service"}</span>
      </Button>
    </div>
  );
}