// SMad Works Service Recommender
// A curated "learning" of every service SMad Works offers. Each service carries
// signals — words and phrases real clients use when describing goals or pains —
// weighted by how strongly they indicate that service. The scorer matches a
// prospect's own words against this catalogue and returns the best-fit services.
// Runs entirely in the browser; nothing is sent anywhere.

export type ServiceSignal = {
  /** Phrase (or single word) a prospect might use */
  phrase: string;
  /** 1–6; 6 = near-certain indicator, 1 = weak supporting signal */
  weight: number;
  /** Human-readable "why this fits" line shown in the results */
  reason: string;
};

export type KnownService = {
  id: string;
  name: string;
  tagline: string;
  /** Internal route for the "Explore service" link */
  route: string;
  category: "Automation & Ops" | "Growth" | "Creative & Media" | "Learning" | "Quality & Research";
  signals: ServiceSignal[];
};

export const KNOWN_SERVICES: KnownService[] = [
  {
    id: "business-automation",
    name: "Business Automation",
    tagline:
      "Automate WhatsApp, calls, CRM and everyday workflows with AI agents — save time, cut cost and scale faster.",
    route: "/business-automation",
    category: "Automation & Ops",
    signals: [
      { phrase: "whatsapp", weight: 6, reason: "WhatsApp is at the centre of our automation stack — replies, follow-ups and bookings, all automatic." },
      { phrase: "repetitive tasks", weight: 5, reason: "Repetitive manual work is exactly what our automations take off your team's plate." },
      { phrase: "manual work", weight: 4, reason: "Manual processes slow teams down — we replace them with reliable automated workflows." },
      { phrase: "too much time", weight: 4, reason: "Automations reclaim hours your team currently spends on routine tasks." },
      { phrase: "save time", weight: 4, reason: "Time savings is the core promise of our automation systems." },
      { phrase: "cut costs", weight: 3, reason: "Automation cuts operating cost by reducing manual labour per task." },
      { phrase: "crm", weight: 4, reason: "We set up and automate CRMs so no lead or task slips through." },
      { phrase: "ai agent", weight: 6, reason: "AI agents that answer, qualify and act are our speciality." },
      { phrase: "chatbot", weight: 5, reason: "We build smart chat agents that handle real conversations, not canned replies." },
      { phrase: "appointment booking", weight: 5, reason: "Automated booking and reminders remove the back-and-forth from scheduling." },
      { phrase: "scheduling", weight: 3, reason: "We automate scheduling, reminders and confirmations end to end." },
      { phrase: "follow up", weight: 4, reason: "Automated follow-ups mean no enquiry goes cold again." },
      { phrase: "missed calls", weight: 6, reason: "AI call agents answer every call, even after hours." },
      { phrase: "receptionist", weight: 6, reason: "An AI receptionist can answer calls and route them 24/7." },
      { phrase: "workflows", weight: 4, reason: "We design and automate end-to-end workflows across your tools." },
      { phrase: "spreadsheets", weight: 4, reason: "We move spreadsheet-driven processes into automated systems." },
      { phrase: "slow response", weight: 5, reason: "Instant automated replies fix slow response times permanently." },
      { phrase: "replying to messages", weight: 5, reason: "Automated replies and agents handle messages the moment they arrive." },
      { phrase: "scale faster", weight: 2, reason: "Automation is the lever that lets you grow without growing headcount." },
      { phrase: "n8n", weight: 6, reason: "n8n is one of our core automation platforms." },
      { phrase: "zapier", weight: 5, reason: "We build automations on Zapier, Make and n8n." },
      { phrase: "make.com", weight: 5, reason: "We build automations on Make, Zapier and n8n." },
      { phrase: "reminders", weight: 3, reason: "Automated reminders and confirmations reduce no-shows and chasing." },
    ],
  },
  {
    id: "operations-management",
    name: "Operations Management",
    tagline:
      "Enterprise-grade operations consulting — SOPs, KPI dashboards, tooling and change management for predictable delivery.",
    route: "/operations-management-services",
    category: "Automation & Ops",
    signals: [
      { phrase: "sop", weight: 6, reason: "We document SOPs so your team delivers the same quality every time, without you." },
      { phrase: "standard operating procedures", weight: 6, reason: "SOPs are the backbone of the operations systems we build." },
      { phrase: "chaotic", weight: 4, reason: "Chaos in day-to-day running is what our operations systems are built to fix." },
      { phrase: "messy processes", weight: 5, reason: "We untangle messy processes into clear, documented workflows." },
      { phrase: "disorganised", weight: 4, reason: "We bring structure with SOPs, owners and dashboards." },
      { phrase: "disorganized", weight: 4, reason: "We bring structure with SOPs, owners and dashboards." },
      { phrase: "kpi", weight: 5, reason: "We build KPI dashboards so you see exactly where the business stands." },
      { phrase: "dashboard", weight: 4, reason: "Live dashboards replace guesswork with numbers you trust." },
      { phrase: "delivery delays", weight: 5, reason: "Predictable delivery comes from process design — our core work." },
      { phrase: "missing deadlines", weight: 5, reason: "We fix deadline slips with ownership maps and delivery systems." },
      { phrase: "project management", weight: 4, reason: "We set up project management systems your team actually uses." },
      { phrase: "process improvement", weight: 5, reason: "Process improvement is the heart of our operations consulting." },
      { phrase: "operations", weight: 3, reason: "We design the operating system of your business — people, process and tools." },
      { phrase: "team alignment", weight: 4, reason: "We align teams around clear roles, SOPs and shared metrics." },
      { phrase: "scaling team", weight: 4, reason: "Scaling a team only works when processes scale with it — that's our job." },
      { phrase: "can't do everything", weight: 4, reason: "Delegation-ready systems mean the business doesn't depend on you for everything." },
      { phrase: "everything depends on me", weight: 6, reason: "We build systems so the business runs without depending on one person." },
      { phrase: "documentation", weight: 4, reason: "We document how your business runs so quality stops living in people's heads." },
      { phrase: "change management", weight: 4, reason: "We manage the people side of change so new systems actually get adopted." },
    ],
  },
  {
    id: "lead-generation",
    name: "Lead Generation",
    tagline:
      "Targeted B2B lead generation — verified databases, LinkedIn leads, outreach and landing pages that fill your pipeline.",
    route: "/lead-generation-services",
    category: "Growth",
    signals: [
      { phrase: "lead generation", weight: 6, reason: "Lead generation is what this service does — verified databases and outreach that fill your pipeline." },
      { phrase: "more leads", weight: 6, reason: "We source verified, targeted leads and put them in front of your offer." },
      { phrase: "need more customers", weight: 4, reason: "New customers start with consistent, targeted outreach — our lead engine." },
      { phrase: "find clients", weight: 4, reason: "We find and qualify the clients who match your ideal profile." },
      { phrase: "b2b", weight: 5, reason: "B2B prospecting — databases, LinkedIn and outreach — is our speciality." },
      { phrase: "linkedin", weight: 5, reason: "LinkedIn outreach and lead sourcing is a core channel we run." },
      { phrase: "outreach", weight: 4, reason: "We run structured outreach campaigns across email and LinkedIn." },
      { phrase: "cold email", weight: 5, reason: "Cold email campaigns with verified lists are part of our lead service." },
      { phrase: "pipeline is empty", weight: 6, reason: "We refill empty pipelines with qualified, verified leads." },
      { phrase: "no sales", weight: 3, reason: "No sales usually starts at the top of the funnel — we fix lead flow first." },
      { phrase: "prospect", weight: 4, reason: "We build prospect lists matched to your ideal customer profile." },
      { phrase: "appointment setting", weight: 4, reason: "We book qualified appointments straight into your calendar." },
      { phrase: "landing page", weight: 3, reason: "We build landing pages that turn ad and outreach traffic into leads." },
      { phrase: "lead database", weight: 6, reason: "Verified lead databases, filtered to your market, are included." },
      { phrase: "sales target", weight: 3, reason: "Hitting sales targets starts with a consistent flow of fresh leads." },
    ],
  },
  {
    id: "lead-conversion",
    name: "Lead Conversion",
    tagline:
      "Convert leads into paying customers — sales funnels, WhatsApp automation, CRM setup and AI sales agents.",
    route: "/lead-conversion-services",
    category: "Growth",
    signals: [
      { phrase: "leads not converting", weight: 6, reason: "Leads that don't convert need a follow-up and funnel system — exactly what we build." },
      { phrase: "not converting", weight: 6, reason: "We fix conversion with funnels, fast follow-ups and AI sales agents." },
      { phrase: "closing deals", weight: 5, reason: "We build the follow-up machine that turns conversations into closed deals." },
      { phrase: "sales funnel", weight: 6, reason: "Sales funnels are a core deliverable of this service." },
      { phrase: "follow up", weight: 4, reason: "Automated, timely follow-ups recover leads most businesses lose." },
      { phrase: "conversion rate", weight: 5, reason: "We raise conversion rates with structured funnels and response automation." },
      { phrase: "lose leads", weight: 6, reason: "Leads get lost in the gap between interest and reply — automation closes that gap." },
      { phrase: "leads going cold", weight: 6, reason: "Automated nurture sequences keep leads warm until they buy." },
      { phrase: "no-show", weight: 5, reason: "Reminder automations cut no-shows on booked calls dramatically." },
      { phrase: "quotation", weight: 4, reason: "Automated quoting and follow-up speed up the path to a signed deal." },
      { phrase: "crm setup", weight: 5, reason: "We set up CRMs so every lead is tracked from first touch to close." },
      { phrase: "sales agent", weight: 5, reason: "AI sales agents reply, qualify and follow up around the clock." },
      { phrase: "too slow to reply", weight: 5, reason: "Speed-to-lead decides deals — our automations reply in seconds." },
    ],
  },
  {
    id: "social-media-management",
    name: "Social Media Management",
    tagline:
      "Grow your brand with monthly analytics, AI content, AI video and Meta Ads campaigns that bring in leads.",
    route: "/social-media-management",
    category: "Creative & Media",
    signals: [
      { phrase: "social media", weight: 6, reason: "We run social media end to end — content calendar, posting, engagement and analytics." },
      { phrase: "instagram", weight: 5, reason: "We manage Instagram — reels, posts, stories and engagement." },
      { phrase: "facebook", weight: 5, reason: "We manage Facebook pages and run Meta ad campaigns." },
      { phrase: "followers", weight: 4, reason: "Consistent, quality posting grows a real following." },
      { phrase: "engagement", weight: 4, reason: "We grow engagement with a deliberate content and interaction strategy." },
      { phrase: "meta ads", weight: 6, reason: "We plan and run Meta Ads campaigns designed to bring in leads." },
      { phrase: "facebook ads", weight: 6, reason: "Meta Ads campaigns are part of this service." },
      { phrase: "instagram ads", weight: 6, reason: "Meta Ads campaigns across Instagram are part of this service." },
      { phrase: "posting regularly", weight: 5, reason: "We keep posting consistent with a monthly content calendar." },
      { phrase: "content calendar", weight: 5, reason: "Monthly content calendars are a core deliverable here." },
      { phrase: "social media presence", weight: 5, reason: "We build an active, professional presence across your social channels." },
      { phrase: "no time to post", weight: 5, reason: "We take posting, scheduling and engagement completely off your hands." },
      { phrase: "grow audience", weight: 4, reason: "A steady content engine plus ads grows your audience month over month." },
      { phrase: "manage my pages", weight: 5, reason: "We manage your pages, profiles and ad accounts for you." },
      { phrase: "online presence", weight: 3, reason: "An active social presence is how we make your brand visible where customers scroll." },
    ],
  },
  {
    id: "ai-content-generation",
    name: "AI Content Generation",
    tagline:
      "High-quality AI videos, images, reels and marketing creatives for brands, creators and businesses.",
    route: "/ai-content-generation",
    category: "Creative & Media",
    signals: [
      { phrase: "content creation", weight: 5, reason: "We generate scroll-stopping content at scale — images, reels and videos." },
      { phrase: "ai images", weight: 6, reason: "AI-generated imagery — product shots, scenes, posters — is what we produce daily." },
      { phrase: "ai video", weight: 6, reason: "AI video generation is the heart of this service." },
      { phrase: "reels", weight: 5, reason: "Short-form reels built for reach are a core deliverable." },
      { phrase: "ad creatives", weight: 6, reason: "Ad creatives that actually convert are what we generate." },
      { phrase: "creatives", weight: 5, reason: "Marketing creatives at volume — without expensive shoots — is this service." },
      { phrase: "product images", weight: 5, reason: "We create polished product visuals without studio shoots." },
      { phrase: "posters", weight: 4, reason: "Posters, banners and visual assets — generated fast, on brand." },
      { phrase: "thumbnails", weight: 4, reason: "Thumbnails and visual hooks that lift clicks are part of the package." },
      { phrase: "short form", weight: 5, reason: "Short-form video content, built for reels and shorts, at scale." },
      { phrase: "too expensive to shoot", weight: 5, reason: "AI content replaces costly shoots with studio-quality generated visuals." },
      { phrase: "need content", weight: 4, reason: "We produce a steady stream of on-brand content so you never run dry." },
      { phrase: "marketing visuals", weight: 5, reason: "Marketing visuals — generated, edited and delivered on schedule." },
    ],
  },
  {
    id: "video-production-ai-studio",
    name: "Video Production & AI Studio",
    tagline:
      "Professional video editing, AI video generation, reels, ads and corporate videos that capture attention.",
    route: "/video-production-ai-studio",
    category: "Creative & Media",
    signals: [
      { phrase: "video editing", weight: 6, reason: "Professional editing is our studio's core — footage in, polished story out." },
      { phrase: "edit my videos", weight: 6, reason: "Send us footage; our editors return polished, ready-to-post videos." },
      { phrase: "youtube", weight: 5, reason: "Long-form YouTube production — from edit to publish-ready files." },
      { phrase: "corporate video", weight: 6, reason: "Corporate videos — brand films, interviews, explainers — are studio work." },
      { phrase: "promo video", weight: 6, reason: "Promo videos that sell are a studio speciality." },
      { phrase: "explainer", weight: 5, reason: "Explainer videos that make complex offers instantly clear." },
      { phrase: "video ads", weight: 6, reason: "Video ads — cut for every placement, made to convert." },
      { phrase: "voice over", weight: 4, reason: "Scripting, voice-over and sound design are handled in production." },
      { phrase: "filming", weight: 4, reason: "Production support from shoot planning to final master." },
      { phrase: "video content", weight: 5, reason: "We produce video content that holds attention and drives growth." },
      { phrase: "professional video", weight: 6, reason: "Studio-grade production, edit and finishing for every format." },
      { phrase: "make videos for me", weight: 5, reason: "Our studio produces videos for you end to end — concept to final cut." },
    ],
  },
  {
    id: "content-management-for-creators",
    name: "Content Management for Creators",
    tagline:
      "Content planning, scheduling, publishing and channel management — so you can focus on creating.",
    route: "/content-management-for-creators",
    category: "Creative & Media",
    signals: [
      { phrase: "creator", weight: 5, reason: "We run the back office of creator channels — planning, scheduling, publishing." },
      { phrase: "content calendar", weight: 5, reason: "A managed content calendar keeps your channel consistent without you." },
      { phrase: "upload schedule", weight: 6, reason: "We own your upload schedule so publishing never slips." },
      { phrase: "publishing", weight: 5, reason: "Publishing, titles, thumbnails and descriptions — handled for you." },
      { phrase: "channel management", weight: 6, reason: "Full channel management is exactly this service." },
      { phrase: "focus on creating", weight: 6, reason: "We take everything off your plate except the creating itself." },
      { phrase: "consistency", weight: 4, reason: "Consistent publishing is the growth lever we manage for you." },
      { phrase: "editing takes too long", weight: 5, reason: "We handle the production and publishing pipeline so editing stops eating your week." },
      { phrase: "monetization", weight: 4, reason: "Consistent, well-packaged publishing is what grows watch time and monetization." },
      { phrase: "inconsistent posting", weight: 5, reason: "We make posting consistent — planned, scheduled and shipped." },
    ],
  },
  {
    id: "logo-creative-design",
    name: "Logo & Creative Design",
    tagline:
      "Premium logos, brand systems, business profiles and marketing creatives that build a brand people remember.",
    route: "/logo-creative-design-services",
    category: "Creative & Media",
    signals: [
      { phrase: "logo", weight: 6, reason: "We design premium logos that make the brand instantly credible." },
      { phrase: "brand identity", weight: 6, reason: "Complete brand identity systems — mark, colours, type, guidelines." },
      { phrase: "branding", weight: 6, reason: "Branding — logo to brand system — is the core of this service." },
      { phrase: "rebrand", weight: 6, reason: "Rebrands are a studio speciality: new identity, same equity." },
      { phrase: "business profile", weight: 5, reason: "Company profiles and collateral that win trust with clients." },
      { phrase: "brochure", weight: 4, reason: "Brochures, profiles and print collateral, designed premium." },
      { phrase: "design assets", weight: 4, reason: "A full design system your team can use everywhere." },
      { phrase: "brand guidelines", weight: 5, reason: "Brand guidelines so everything stays consistent as you grow." },
      { phrase: "look professional", weight: 4, reason: "A premium visual identity is the fastest way to look established." },
      { phrase: "new business", weight: 2, reason: "New businesses start right with a proper identity from day one." },
      { phrase: "stationery", weight: 4, reason: "Business cards, stationery and collateral designed with the brand." },
    ],
  },
  {
    id: "qa-testing",
    name: "QA Testing Services",
    tagline:
      "Enterprise QA — manual, automation, API, mobile, performance and security testing for confident releases.",
    route: "/qa-testing-services",
    category: "Quality & Research",
    signals: [
      { phrase: "bugs", weight: 6, reason: "We find bugs before your users do — structured QA on every release." },
      { phrase: "app crashes", weight: 6, reason: "Crash triage and regression testing keep your app stable." },
      { phrase: "testing", weight: 6, reason: "Manual, automated, API, mobile and performance testing — under one roof." },
      { phrase: "qa", weight: 6, reason: "QA engineers who test like users and automate like developers." },
      { phrase: "quality assurance", weight: 6, reason: "Quality assurance processes that make releases predictable." },
      { phrase: "software testing", weight: 6, reason: "Full-cycle software testing before every ship." },
      { phrase: "test automation", weight: 5, reason: "Automated test suites that guard every future release." },
      { phrase: "performance testing", weight: 5, reason: "Load and performance testing so launch day isn't a gamble." },
      { phrase: "security testing", weight: 5, reason: "Security testing catches vulnerabilities before attackers do." },
      { phrase: "users complaining", weight: 5, reason: "User-reported issues get traced, fixed and regression-tested." },
      { phrase: "before launch", weight: 4, reason: "Pre-launch QA is the cheapest insurance you'll ever buy." },
      { phrase: "release confidence", weight: 5, reason: "We ship confidence: documented test coverage on every release." },
    ],
  },
  {
    id: "academic-research",
    name: "Academic Research Services",
    tagline:
      "Research support for students and researchers — AI/ML projects, dissertation guidance, implementation and publication.",
    route: "/academic-research-services",
    category: "Quality & Research",
    signals: [
      { phrase: "thesis", weight: 6, reason: "Thesis support from topic shaping to implementation and review." },
      { phrase: "dissertation", weight: 6, reason: "Dissertation guidance — structure, methodology and implementation." },
      { phrase: "research paper", weight: 6, reason: "We support research papers end to end, including publication prep." },
      { phrase: "phd", weight: 6, reason: "PhD-level research support — literature, experiments and writing." },
      { phrase: "machine learning", weight: 6, reason: "AI/ML model implementation is a core strength of this service." },
      { phrase: "deep learning", weight: 6, reason: "Deep learning project implementation, from architecture to results." },
      { phrase: "academic", weight: 5, reason: "Academic-grade rigor — methodology, citations and reproducibility." },
      { phrase: "publication", weight: 6, reason: "Publication support: targeting journals, formatting and revisions." },
      { phrase: "journal", weight: 6, reason: "Journal submission support, from selection to response letters." },
      { phrase: "college project", weight: 5, reason: "College and university projects built to impress evaluators." },
      { phrase: "student", weight: 4, reason: "Student-friendly mentoring through every project milestone." },
      { phrase: "project implementation", weight: 5, reason: "We implement the code and models your research needs." },
    ],
  },
  {
    id: "ai-automation-course",
    name: "AI Automation Course",
    tagline:
      "Learn to build AI automation systems — n8n workflows, AI agents, WhatsApp & CRM automations, real projects.",
    route: "/ai-automation-course",
    category: "Learning",
    signals: [
      { phrase: "learn automation", weight: 6, reason: "We teach you to build automations yourself — n8n, agents, real projects." },
      { phrase: "training", weight: 4, reason: "Hands-on training that leaves your team able to build, not just watch." },
      { phrase: "upskill", weight: 5, reason: "Upskilling your team on AI automation is what the course delivers." },
      { phrase: "n8n course", weight: 6, reason: "n8n workflow building is taught hands-on, with real business projects." },
      { phrase: "learn ai", weight: 5, reason: "Practical AI skills your team can apply the next day." },
      { phrase: "teach my team", weight: 5, reason: "We train teams to build and own their automations in-house." },
      { phrase: "in-house capability", weight: 4, reason: "The goal of the course: capability that stays in your company." },
      { phrase: "want to learn", weight: 3, reason: "Structured, project-based learning beats scattered tutorials." },
      { phrase: "ai agents course", weight: 6, reason: "Building AI agents is taught step by step with working examples." },
    ],
  },
  {
    id: "ai-course-content-generation",
    name: "AI Course Content Generation",
    tagline:
      "Build complete courses faster with AI — planning, modules, lessons, PPTs, quizzes and study materials.",
    route: "/ai-course-content-generation",
    category: "Learning",
    signals: [
      { phrase: "online course", weight: 6, reason: "We help you build complete online courses — structure to study materials." },
      { phrase: "course content", weight: 6, reason: "Course content — modules, lessons, PPTs, quizzes — generated with AI, refined by educators." },
      { phrase: "create a course", weight: 6, reason: "From outline to finished materials, we accelerate the whole course build." },
      { phrase: "curriculum", weight: 6, reason: "Curriculum planning and module design, done in days not months." },
      { phrase: "ppt", weight: 5, reason: "Presentation decks for every lesson, on brand and ready to teach." },
      { phrase: "quizzes", weight: 5, reason: "Quizzes and assessments generated per module, aligned to learning goals." },
      { phrase: "study material", weight: 6, reason: "Study materials, notes and handouts produced at scale." },
      { phrase: "training material", weight: 6, reason: "Training material for internal enablement, built fast with AI." },
      { phrase: "modules", weight: 5, reason: "Complete module sets — planned, written and packaged." },
      { phrase: "e-learning", weight: 6, reason: "E-learning content production is exactly this service." },
    ],
  },
  {
    id: "ai-video-generation-course",
    name: "AI Video Generation Course",
    tagline:
      "Learn to create professional videos with AI — tools, prompts, image-to-video, editing and monetization.",
    route: "/ai-video-generation-course",
    category: "Learning",
    signals: [
      { phrase: "learn video", weight: 6, reason: "Learn professional video creation with AI tools, hands-on." },
      { phrase: "video editing course", weight: 6, reason: "AI-assisted editing workflows are taught end to end." },
      { phrase: "learn to make videos", weight: 6, reason: "The course takes you from prompts to publish-ready videos." },
      { phrase: "ai video course", weight: 6, reason: "This is the AI video creation course — tools, prompts, editing, monetization." },
      { phrase: "image to video", weight: 6, reason: "Image-to-video generation is covered hands-on." },
      { phrase: "video monetization", weight: 5, reason: "Monetization strategies are part of the curriculum." },
      { phrase: "prompt engineering", weight: 4, reason: "Prompt craft for consistent, usable AI video output." },
      { phrase: "content creation course", weight: 5, reason: "A creation-focused course: make real videos, not watch demos." },
    ],
  },
];

/* ---------------- Scoring ---------------- */

function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function matchesPhrase(text: string, phrase: string): boolean {
  const escaped = phrase
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  // Allow a simple plural on the final word ("leads", "funnels", "dashboards").
  return new RegExp(`\\b${escaped}(?:es|s)?\\b`).test(text);
}

export type Recommendation = {
  service: KnownService;
  score: number;
  /** Human-readable reasons why this service fits, best first */
  reasons: string[];
  /** Strong >= 8, Good >= 4, Possible < 4 */
  tier: "strong" | "good" | "possible";
};

const NO_MATCH_THRESHOLD = 2;

export function recommendServices(input: {
  goals: string;
  challenges: string;
}): { recommendations: Recommendation[]; confident: boolean } {
  const text = normalize(`${input.goals} ${input.challenges}`);
  if (!text) return { recommendations: [], confident: false };

  const scored: Recommendation[] = [];
  for (const service of KNOWN_SERVICES) {
    let score = 0;
    const matched: ServiceSignal[] = [];
    for (const signal of service.signals) {
      if (matchesPhrase(text, signal.phrase)) {
        score += signal.weight;
        matched.push(signal);
      }
    }
    if (score > 0) {
      matched.sort((a, b) => b.weight - a.weight);
      scored.push({
        service,
        score,
        reasons: matched.slice(0, 3).map((m) => m.reason),
        tier: score >= 8 ? "strong" : score >= 4 ? "good" : "possible",
      });
    }
  }

  scored.sort((a, b) => b.score - a.score);
  const top = scored.slice(0, 3);
  return { recommendations: top, confident: top.length > 0 && top[0].score >= NO_MATCH_THRESHOLD };
}
