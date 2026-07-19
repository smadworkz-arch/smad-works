import { createFileRoute } from "@tanstack/react-router";
import { serviceHead } from "@/lib/service-head";
import { ImmersiveServicePage } from "@/components/ImmersiveServicePage";
import { QABugHuntScene } from "@/components/three/PageScenes";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/motion/SectionEyebrow";
import { useState } from "react";

const cases = [
  { name: "FinTech mobile app", metric: "127 bugs found", detail: "Pre-launch audit across iOS + Android; 98% crash-free after ship." },
  { name: "Healthcare SaaS", metric: "99.9% uptime", detail: "Load & security testing for HIPAA-adjacent platform." },
  { name: "E-commerce checkout", metric: "+18% conversion", detail: "Regression + A/B test harness eliminated silent failures." },
  { name: "EdTech LMS", metric: "0 P1 in 6 months", detail: "Automated E2E suite + release gates deployed." },
  { name: "Logistics dashboard", metric: "5× faster QA", detail: "Cypress + Playwright rewrite of manual test cycles." },
];

function CaseStudies() {
  return (
    <section className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading eyebrow="Case studies" title={<>Real engagements. <span className="text-gold">Measurable outcomes.</span></>} />
        <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {cases.map((c) => (
            <StaggerItem key={c.name}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition hover:border-gold/40">
                <div className="text-[11px] uppercase tracking-[0.24em] text-gold">{c.metric}</div>
                <div className="mt-2 text-lg font-semibold text-white">{c.name}</div>
                <p className="mt-2 text-sm text-white/60">{c.detail}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function AuditForm() {
  const [state, setState] = useState({ name: "", product: "", stage: "MVP", timeline: "2–4 weeks", contact: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi SMad Works, I want a QA audit.\nName: ${state.name}\nProduct: ${state.product}\nStage: ${state.stage}\nTimeline: ${state.timeline}\nContact: ${state.contact}`;
    window.open(`https://wa.me/917439668751?text=${encodeURIComponent(text)}`, "_blank");
  };
  return (
    <section className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeading eyebrow="Request an audit" title={<>Get a <span className="text-gold">free QA audit.</span></>} subtitle="Tell us about your product — we'll get back within 24 hours with an initial assessment." />
        <Reveal>
          <form onSubmit={submit} className="mt-10 grid gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur md:grid-cols-2">
            <input required placeholder="Your name" value={state.name} onChange={(e) => setState({ ...state, name: e.target.value })} className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none" />
            <input required placeholder="Product / URL" value={state.product} onChange={(e) => setState({ ...state, product: e.target.value })} className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none" />
            <select value={state.stage} onChange={(e) => setState({ ...state, stage: e.target.value })} className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white focus:border-gold focus:outline-none">
              <option>MVP</option><option>Beta</option><option>Live in production</option><option>Scale-up</option>
            </select>
            <select value={state.timeline} onChange={(e) => setState({ ...state, timeline: e.target.value })} className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white focus:border-gold focus:outline-none">
              <option>Under 2 weeks</option><option>2–4 weeks</option><option>1–2 months</option><option>Flexible</option>
            </select>
            <input required placeholder="Email or WhatsApp" value={state.contact} onChange={(e) => setState({ ...state, contact: e.target.value })} className="md:col-span-2 rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none" />
            <button className="md:col-span-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-black transition hover:bg-white">Request audit →</button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export const Route = createFileRoute("/qa-testing-services")({
  head: () =>
    serviceHead({
      path: "/qa-testing-services",
      title: "QA & Software Testing Services | Manual, Automation, Security | SMad Works",
      description: "Enterprise QA services — manual, automation, performance, security and API testing. Ship reliable software with confidence.",
      serviceType: "QA & Software Testing",
    }),
  component: () => (
    <ImmersiveServicePage
      eyebrow="Quality Assurance"
      title={<>Catch bugs before <span className="text-gold">your users do.</span></>}
      subtitle="Full-stack QA — manual, automation, performance, API and security testing — engineered for reliability at scale."
      primaryCta={{ label: "Request a QA audit", whatsappMessage: "Hi SMad Works, I need QA & software testing." }}
      scene={<QABugHuntScene />}
      metrics={[
        { k: "99.9%", v: "Uptime" },
        { k: "5×", v: "QA speed" },
        { k: "P1: 0", v: "Post-release" },
        { k: "24h", v: "Audit turnaround" },
      ]}
      capabilities={[
        { t: "Manual Testing", d: "Exploratory, functional and UAT by senior QAs." },
        { t: "Automation", d: "Cypress, Playwright and Selenium suites." },
        { t: "Performance", d: "Load, stress and scalability testing." },
        { t: "Security", d: "OWASP-based assessments and pen-testing." },
        { t: "API Testing", d: "Postman, RestAssured contract validation." },
        { t: "Mobile QA", d: "iOS, Android, cross-device compatibility." },
      ]}
      process={[
        { n: "01", t: "Audit", d: "Assess current state, risks and coverage." },
        { n: "02", t: "Plan", d: "Test strategy, tooling and release gates." },
        { n: "03", t: "Automate", d: "Build reusable regression suites." },
        { n: "04", t: "Execute", d: "Run cycles, log defects, retest fixes." },
        { n: "05", t: "Report", d: "Dashboards, coverage and severity metrics." },
      ]}
      tools={[
        { name: "Cypress", domain: "cypress.io" },
        { name: "Playwright", domain: "playwright.dev" },
        { name: "Selenium", domain: "selenium.dev" },
        { name: "Postman", domain: "postman.com" },
        { name: "JMeter", domain: "jmeter.apache.org" },
        { name: "Appium", domain: "appium.io" },
        { name: "BrowserStack", domain: "browserstack.com" },
        { name: "Jira", domain: "atlassian.com" },
        { name: "TestRail", domain: "testrail.com" },
      ]}
      industries={["FinTech", "Healthcare", "E-commerce", "EdTech", "SaaS", "Logistics"]}
      extraSections={<CaseStudies />}
      beforeFaq={<AuditForm />}
      faqs={[
        { q: "How do you charge?", a: "Fixed-scope audits, project-based cycles or monthly retainer." },
        { q: "Can you integrate into our CI/CD?", a: "Yes — GitHub Actions, GitLab CI, Jenkins, CircleCI." },
        { q: "Do you handle security testing?", a: "Yes — OWASP top-10, pen-testing and remediation guidance." },
        { q: "How large is your QA team?", a: "Flexible pods from 1 to 8 QAs based on project scale." },
      ]}
      finalCtaTitle={<>Ship without <span className="text-gold">regressions.</span></>}
      related={[
        { to: "/business-automation", title: "Business Automation" },
        { to: "/operations-management-services", title: "Operations Management" },
        { to: "/academic-research-services", title: "Academic Research" },
      ]}
    />
  ),
});
