import {
  MessageCircle, Bot, PhoneCall, Users, Mail, Workflow, CalendarClock,
  UserPlus, BarChart3, Cog, Sparkles, Zap, TrendingUp, ShieldCheck,
  Headphones, Target, Heart, GraduationCap, Home, ShoppingBag, Landmark,
  Factory, UtensilsCrossed, Rocket, Clock, DollarSign, Smile, ArrowUpRight,
  Repeat, Users2, CheckCircle2,
} from "lucide-react";

const WHATSAPP_NUMBER = "917439668751";
const waUrl = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

const automations = [
  { icon: MessageCircle, title: "WhatsApp Automation", desc: "Lead capture, follow-ups, reminders, notifications." },
  { icon: Bot, title: "AI Chatbots", desc: "24/7 customer support and lead qualification." },
  { icon: PhoneCall, title: "AI Calling Agents", desc: "Outbound and inbound AI voice calls." },
  { icon: Users, title: "CRM Automation", desc: "Customer data management and pipeline updates." },
  { icon: Mail, title: "Email Automation", desc: "Welcome emails, follow-ups, campaigns." },
  { icon: Workflow, title: "Workflow Automation", desc: "Automate repetitive business tasks." },
  { icon: CalendarClock, title: "Appointment Automation", desc: "Scheduling, reminders, calendar sync." },
  { icon: UserPlus, title: "Lead Management", desc: "Capture, qualify and assign leads automatically." },
  { icon: BarChart3, title: "Reporting & Analytics", desc: "Automated dashboards and reports." },
  { icon: Cog, title: "Business Process Automation", desc: "Streamline internal operations." },
];

const whyChoose = [
  { icon: Sparkles, title: "Custom AI Solutions", desc: "Tailored automation built around your business." },
  { icon: Zap, title: "Faster Operations", desc: "Reduce manual work and improve productivity." },
  { icon: TrendingUp, title: "Scalable Systems", desc: "Automation that grows with your business." },
  { icon: ShieldCheck, title: "Secure & Reliable", desc: "Built using trusted technologies and best practices." },
  { icon: Headphones, title: "Dedicated Support", desc: "Continuous guidance and optimization." },
  { icon: Target, title: "Measurable Results", desc: "Focus on ROI, efficiency and business growth." },
];

const technologies = [
  "OpenAI", "Claude", "Gemini", "n8n", "Make", "Zapier",
  "WhatsApp Business API", "Google Workspace", "Meta API", "Python", "Docker", "GitHub",
];

const industries = [
  { icon: Heart, name: "Healthcare", desc: "Patient engagement & appointment automation." },
  { icon: GraduationCap, name: "Education", desc: "Admissions, enrollments & student support." },
  { icon: Home, name: "Real Estate", desc: "Lead capture, follow-ups & site visits." },
  { icon: ShoppingBag, name: "Retail", desc: "Order updates, WhatsApp catalog & support." },
  { icon: Landmark, name: "Finance", desc: "KYC reminders, onboarding & advisory workflows." },
  { icon: Factory, name: "Manufacturing", desc: "Order tracking, inventory & vendor workflows." },
  { icon: UtensilsCrossed, name: "Hospitality", desc: "Bookings, confirmations & guest experience." },
  { icon: Rocket, name: "Startups", desc: "Go-to-market automation from day one." },
];

const benefits = [
  { icon: Clock, title: "Save Time" },
  { icon: DollarSign, title: "Reduce Operational Costs" },
  { icon: Smile, title: "Improve Customer Experience" },
  { icon: ArrowUpRight, title: "Increase Lead Conversion" },
  { icon: Repeat, title: "Eliminate Repetitive Tasks" },
  { icon: Users2, title: "Scale Without Hiring More Staff" },
];

export function BusinessAutomationSections() {
  return (
    <>
      {/* What Can We Automate */}
      <section className="border-b border-black/5 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.18em] text-gold">Capabilities</span>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">What Can We Automate?</h2>
            <p className="mt-3 text-black/60">From conversations to operations — automate every repetitive layer of your business.</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {automations.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group rounded-2xl border border-black/10 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-[0_20px_50px_-25px_rgba(0,0,0,0.25)]"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-black text-gold transition group-hover:bg-gold group-hover:text-black">
                  <Icon size={18} />
                </span>
                <h3 className="mt-4 text-base font-semibold">{title}</h3>
                <p className="mt-1.5 text-sm text-black/60">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose SMad Works */}
      <section className="relative overflow-hidden border-b border-black/5 bg-black py-20 text-white">
        <div className="absolute inset-0 -z-0 bg-[radial-gradient(60%_60%_at_80%_10%,rgba(212,175,55,0.18),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-5">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.18em] text-gold">Why SMad Works</span>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Built for outcomes, not overhead</h2>
            <p className="mt-3 text-white/65">Enterprise-grade automation delivered with startup speed.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-white/[0.06]"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 text-gold transition group-hover:bg-gold group-hover:text-black">
                  <Icon size={18} />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-white/65">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="border-b border-black/5 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.18em] text-gold">Stack</span>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Technologies we use</h2>
            <p className="mt-3 text-black/60">Best-in-class AI, automation and integration platforms.</p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {technologies.map((t) => (
              <div
                key={t}
                className="group flex items-center justify-center rounded-xl border border-black/10 bg-white px-4 py-5 text-center text-sm font-medium text-black/75 transition duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-black hover:shadow-[0_15px_40px_-25px_rgba(0,0,0,0.25)]"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="border-b border-black/5 bg-[#fafafa] py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.18em] text-gold">Industries</span>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Industries we serve</h2>
            <p className="mt-3 text-black/60">Automation tailored to the workflows of every sector we work with.</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map(({ icon: Icon, name, desc }) => (
              <Link
                key={name}
                to="/business-automation"
                hash={name.toLowerCase()}
                className="group rounded-2xl border border-black/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-[0_20px_50px_-25px_rgba(0,0,0,0.25)]"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-black text-gold transition group-hover:bg-gold group-hover:text-black">
                  <Icon size={18} />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{name}</h3>
                <p className="mt-1.5 text-sm text-black/60">{desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-gold opacity-0 transition group-hover:opacity-100">
                  Explore <ArrowUpRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="border-b border-black/5 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.18em] text-gold">Benefits</span>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Why businesses automate</h2>
            <p className="mt-3 text-black/60">Real, measurable impact across every part of the business.</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map(({ icon: Icon, title }) => (
              <div
                key={title}
                className="group flex items-start gap-4 rounded-2xl border border-black/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-[0_20px_50px_-25px_rgba(0,0,0,0.25)]"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-black text-gold transition group-hover:bg-gold group-hover:text-black">
                  <CheckCircle2 size={18} />
                </span>
                <div>
                  <h3 className="text-base font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-black/60 inline-flex items-center gap-2">
                    <Icon size={14} className="text-gold" /> Automation-driven advantage
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function BusinessAutomationCta() {
  return (
    <section className="border-b border-black/5 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-black to-black/90 p-10 text-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5)] md:p-14">
          <div className="absolute inset-0 -z-0 bg-[radial-gradient(60%_60%_at_20%_20%,rgba(212,175,55,0.25),transparent_60%)]" />
          <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-gold">Get started</span>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                Ready to Automate Your Business?
              </h2>
              <p className="mt-4 max-w-xl text-white/70">
                Let's discuss how AI and automation can help your business save time, reduce costs, and grow faster.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a
                href="#contact"
                className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-black transition hover:bg-white"
              >
                Book Free Consultation
              </a>
              <a
                href={waUrl("Hi SMad Works, I want to automate my business.")}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-gold hover:text-gold"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
