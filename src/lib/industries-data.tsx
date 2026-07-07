import {
  Heart, GraduationCap, Home, ShoppingBag, Landmark, Factory,
  UtensilsCrossed, Rocket, type LucideIcon,
} from "lucide-react";

export type IndustrySolution = { title: string; to?: string };
export type IndustryData = {
  slug: string;
  name: string;
  icon: LucideIcon;
  eyebrow: string;
  headline: string;
  description: string;
  challenges: { title: string; desc: string }[];
  howWeSolve: { title: string; desc: string }[];
  solutions: IndustrySolution[];
  benefits: string[];
  process: { step: string; title: string; desc?: string }[];
  related: { to: string; title: string }[];
  faqs: { q: string; a: string }[];
  whatsappMessage: string;
};

const commonProcess = [
  { step: "01", title: "Discover", desc: "Understand your workflows, tools and goals." },
  { step: "02", title: "Design", desc: "Map the automation blueprint tailored to your business." },
  { step: "03", title: "Build", desc: "Implement, integrate and configure the systems." },
  { step: "04", title: "Launch", desc: "Go live with training and monitoring." },
  { step: "05", title: "Optimize", desc: "Continuously improve for measurable ROI." },
];

export const industries: IndustryData[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: Heart,
    eyebrow: "Healthcare Automation",
    headline: "Automate Patient Care, Communication & Operations",
    description:
      "Free your clinical and admin teams from repetitive work. We build AI and automation systems for clinics, hospitals and healthcare providers.",
    challenges: [
      { title: "Missed appointments", desc: "Manual reminders lead to no-shows and lost revenue." },
      { title: "Slow patient communication", desc: "Delayed replies impact patient experience." },
      { title: "Fragmented records", desc: "Data spread across tools slows down care." },
      { title: "Overloaded front-desk", desc: "Repetitive queries consume most of the day." },
    ],
    howWeSolve: [
      { title: "WhatsApp & AI Chatbots", desc: "Answer patient queries 24/7 with instant, accurate responses." },
      { title: "Appointment Automation", desc: "Booking, reminders and rescheduling — fully automated." },
      { title: "CRM & Follow-ups", desc: "Central patient records with automatic follow-ups." },
      { title: "AI Voice Calling", desc: "Confirm, follow-up and re-engage patients with AI agents." },
    ],
    solutions: [
      { title: "WhatsApp Automation", to: "/business-automation" },
      { title: "AI Calling Agents", to: "/business-automation" },
      { title: "Patient Appointment Automation", to: "/business-automation" },
      { title: "CRM Automation", to: "/business-automation" },
      { title: "Lead Management", to: "/lead-conversion-services" },
      { title: "Follow-up Automation", to: "/lead-conversion-services" },
      { title: "Healthcare Operations Automation", to: "/operations-management-services" },
    ],
    benefits: ["Fewer no-shows", "Faster response time", "Higher patient satisfaction", "Reduced admin overhead"],
    process: commonProcess,
    related: [
      { to: "/business-automation", title: "Business Automation" },
      { to: "/operations-management-services", title: "Operations Management" },
      { to: "/lead-conversion-services", title: "Lead Conversion" },
    ],
    faqs: [
      { q: "Is patient data secure?", a: "Yes — we use encrypted channels, role-based access and industry-standard practices." },
      { q: "Do you integrate with existing EMR/CRM?", a: "Yes, we integrate with most modern systems via APIs or webhooks." },
      { q: "Can you support multiple clinics?", a: "Absolutely — our systems scale across multiple locations and teams." },
    ],
    whatsappMessage: "Hi SMad Works, I'd like to automate my healthcare business.",
  },
  {
    slug: "education",
    name: "Education",
    icon: GraduationCap,
    eyebrow: "Education Automation",
    headline: "Grow Admissions & Engage Students with AI Automation",
    description:
      "Automate admissions, student communication and learning workflows for schools, coaching institutes, colleges and edtech brands.",
    challenges: [
      { title: "Slow admissions funnel", desc: "Manual counselling delays enrollments." },
      { title: "Low student engagement", desc: "Broadcast messaging often goes unread." },
      { title: "Repetitive queries", desc: "Fees, timetable and syllabus questions overwhelm staff." },
      { title: "Fragmented lead tracking", desc: "Leads lost across calls, forms and DMs." },
    ],
    howWeSolve: [
      { title: "Admission Automation", desc: "Capture, qualify and convert student leads automatically." },
      { title: "AI Chatbots", desc: "Instant answers on courses, fees and schedules 24/7." },
      { title: "Student Communication", desc: "WhatsApp & email flows for updates and reminders." },
      { title: "AI Learning Solutions", desc: "AI-assisted content, assessments and course material." },
    ],
    solutions: [
      { title: "Student Lead Management", to: "/lead-generation-services" },
      { title: "Admission Automation", to: "/business-automation" },
      { title: "AI Chatbots", to: "/business-automation" },
      { title: "Student Communication", to: "/business-automation" },
      { title: "Email Automation", to: "/business-automation" },
      { title: "AI Learning Solutions", to: "/ai-course-content-generation" },
    ],
    benefits: ["Higher enrollment rate", "Faster admission cycle", "Better student experience", "Reduced staff workload"],
    process: commonProcess,
    related: [
      { to: "/ai-course-content-generation", title: "AI Course Content" },
      { to: "/lead-generation-services", title: "Lead Generation" },
      { to: "/business-automation", title: "Business Automation" },
    ],
    faqs: [
      { q: "Do you support multiple campuses?", a: "Yes — a single system can manage multiple branches and departments." },
      { q: "Can you integrate with our LMS?", a: "Yes, we integrate with most LMS platforms and CRMs." },
      { q: "Can parents receive updates too?", a: "Absolutely — parent WhatsApp and email flows can be enabled." },
    ],
    whatsappMessage: "Hi SMad Works, I'd like to automate my education business.",
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: Home,
    eyebrow: "Real Estate Automation",
    headline: "Convert Every Property Enquiry into a Site Visit",
    description:
      "Qualify leads, follow up instantly and book site visits automatically — built for developers, brokers and property consultants.",
    challenges: [
      { title: "Delayed lead response", desc: "Leads go cold before agents reach out." },
      { title: "Unqualified enquiries", desc: "Teams waste time on non-serious buyers." },
      { title: "Missed follow-ups", desc: "No structured drip means lost deals." },
      { title: "Scattered listings", desc: "Property info spread across portals and sheets." },
    ],
    howWeSolve: [
      { title: "AI Lead Qualification", desc: "Score and route leads based on intent and budget." },
      { title: "AI Calling Agents", desc: "Call, qualify and book site visits automatically." },
      { title: "WhatsApp Follow-ups", desc: "Send property details and reminders instantly." },
      { title: "CRM Automation", desc: "Track every lead, agent and deal in one pipeline." },
    ],
    solutions: [
      { title: "Lead Qualification", to: "/lead-conversion-services" },
      { title: "AI Calling Agents", to: "/business-automation" },
      { title: "WhatsApp Follow-ups", to: "/business-automation" },
      { title: "CRM Automation", to: "/business-automation" },
      { title: "Property Inquiry Automation", to: "/business-automation" },
      { title: "Appointment Scheduling", to: "/business-automation" },
    ],
    benefits: ["Faster response", "Higher site-visit rate", "More qualified leads", "Complete pipeline visibility"],
    process: commonProcess,
    related: [
      { to: "/lead-generation-services", title: "Lead Generation" },
      { to: "/lead-conversion-services", title: "Lead Conversion" },
      { to: "/business-automation", title: "Business Automation" },
    ],
    faqs: [
      { q: "Can you integrate with property portals?", a: "Yes — we capture leads from major portals via APIs and forms." },
      { q: "Do AI agents sound natural?", a: "Yes — our voice agents use modern AI voices and dynamic scripts." },
      { q: "Do you support multi-agent teams?", a: "Absolutely — round-robin assignment and performance tracking included." },
    ],
    whatsappMessage: "Hi SMad Works, I'd like to automate my real estate business.",
  },
  {
    slug: "retail-ecommerce",
    name: "Retail & E-commerce",
    icon: ShoppingBag,
    eyebrow: "Retail & E-commerce Automation",
    headline: "Sell More, Support Faster, Retain Longer",
    description:
      "Automate customer support, order updates and marketing so your store runs efficiently at any scale.",
    challenges: [
      { title: "High support volume", desc: "Repetitive questions on orders and shipping." },
      { title: "Cart abandonment", desc: "Lost revenue from unfinished checkouts." },
      { title: "Manual order updates", desc: "Confirmation, shipping and delivery notifications." },
      { title: "Low repeat sales", desc: "No structured re-engagement of past buyers." },
    ],
    howWeSolve: [
      { title: "Customer Support Automation", desc: "AI chatbots handle FAQs across WhatsApp and web." },
      { title: "Order Notifications", desc: "Automated updates across every order stage." },
      { title: "WhatsApp Marketing", desc: "Broadcasts, abandoned cart flows and campaigns." },
      { title: "Inventory Workflow Automation", desc: "Sync stock, orders and vendors seamlessly." },
    ],
    solutions: [
      { title: "Customer Support Automation", to: "/business-automation" },
      { title: "Order Notifications", to: "/business-automation" },
      { title: "WhatsApp Marketing", to: "/business-automation" },
      { title: "Inventory Workflow Automation", to: "/operations-management-services" },
      { title: "Email Campaign Automation", to: "/business-automation" },
    ],
    benefits: ["Higher conversions", "Faster support", "Reduced returns", "Increased repeat sales"],
    process: commonProcess,
    related: [
      { to: "/business-automation", title: "Business Automation" },
      { to: "/lead-conversion-services", title: "Lead Conversion" },
      { to: "/operations-management-services", title: "Operations Management" },
    ],
    faqs: [
      { q: "Do you integrate with Shopify/WooCommerce?", a: "Yes — plus custom stores and major marketplaces." },
      { q: "Can we run promotional campaigns?", a: "Yes — via WhatsApp Business API and email automation." },
      { q: "Do you handle payment reminders?", a: "Yes — abandoned cart and COD confirmation flows included." },
    ],
    whatsappMessage: "Hi SMad Works, I'd like to automate my retail or e-commerce store.",
  },
  {
    slug: "finance-insurance",
    name: "Finance & Insurance",
    icon: Landmark,
    eyebrow: "Finance & Insurance Automation",
    headline: "Onboard Customers Faster and Serve Them Smarter",
    description:
      "Automate lead management, KYC, onboarding and customer support for banks, NBFCs, insurance brokers and advisors.",
    challenges: [
      { title: "Slow onboarding", desc: "Manual KYC and document collection delay deals." },
      { title: "Lead leakage", desc: "Prospects lost between channels and agents." },
      { title: "High support cost", desc: "Repetitive queries flood the call center." },
      { title: "Compliance overhead", desc: "Manual documentation is time-consuming." },
    ],
    howWeSolve: [
      { title: "Lead Management Automation", desc: "Capture, qualify and assign leads instantly." },
      { title: "Onboarding Automation", desc: "Guided WhatsApp and email flows for KYC and documents." },
      { title: "AI Support", desc: "24/7 chatbots for policy, EMI and account queries." },
      { title: "Document Automation", desc: "Auto-request, collect and organize documents." },
    ],
    solutions: [
      { title: "Lead Management", to: "/lead-conversion-services" },
      { title: "Customer Onboarding", to: "/business-automation" },
      { title: "Document Collection Automation", to: "/business-automation" },
      { title: "AI Support", to: "/business-automation" },
      { title: "Email & WhatsApp Automation", to: "/business-automation" },
    ],
    benefits: ["Faster onboarding", "Higher conversion", "Lower support cost", "Better compliance"],
    process: commonProcess,
    related: [
      { to: "/business-automation", title: "Business Automation" },
      { to: "/lead-generation-services", title: "Lead Generation" },
      { to: "/lead-conversion-services", title: "Lead Conversion" },
    ],
    faqs: [
      { q: "Is customer data secure?", a: "Yes — encrypted flows, role-based access and audit trails." },
      { q: "Do you support multi-product cross-selling?", a: "Yes, we build campaign flows tailored to each product line." },
      { q: "Can you integrate with our CRM?", a: "Yes — we support most CRMs and core banking APIs." },
    ],
    whatsappMessage: "Hi SMad Works, I'd like to automate my finance or insurance business.",
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    icon: Factory,
    eyebrow: "Manufacturing Automation",
    headline: "Streamline Operations Across the Shop Floor and Back Office",
    description:
      "Digitize workflows, automate reporting and improve internal communication for manufacturers and industrial businesses.",
    challenges: [
      { title: "Manual reporting", desc: "Daily reports take hours across teams." },
      { title: "Siloed processes", desc: "Production, QA and dispatch don't sync." },
      { title: "Slow approvals", desc: "Emails and paperwork delay decisions." },
      { title: "Poor visibility", desc: "No real-time view of operations." },
    ],
    howWeSolve: [
      { title: "Workflow Automation", desc: "Automate purchase orders, approvals and internal handoffs." },
      { title: "Reporting Automation", desc: "Real-time dashboards and daily digest reports." },
      { title: "QA Support", desc: "Structured QA reporting, tracking and follow-ups." },
      { title: "Employee Communication", desc: "WhatsApp-based announcements and shift updates." },
    ],
    solutions: [
      { title: "Workflow Automation", to: "/business-automation" },
      { title: "Internal Process Automation", to: "/operations-management-services" },
      { title: "Reporting Automation", to: "/operations-management-services" },
      { title: "Quality Assurance Support", to: "/qa-testing-services" },
      { title: "Employee Communication", to: "/business-automation" },
    ],
    benefits: ["Faster reporting", "Fewer errors", "Better visibility", "Higher productivity"],
    process: commonProcess,
    related: [
      { to: "/operations-management-services", title: "Operations Management" },
      { to: "/business-automation", title: "Business Automation" },
      { to: "/qa-testing-services", title: "QA Testing Services" },
    ],
    faqs: [
      { q: "Do you integrate with ERPs?", a: "Yes — SAP, Oracle, Zoho, Odoo and custom ERPs via APIs." },
      { q: "Can we automate compliance reports?", a: "Yes — scheduled reports and audit logs are supported." },
      { q: "Do you support factory-floor devices?", a: "We integrate with IoT and scanner-based workflows where feasible." },
    ],
    whatsappMessage: "Hi SMad Works, I'd like to automate my manufacturing business.",
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    icon: UtensilsCrossed,
    eyebrow: "Hospitality Automation",
    headline: "Delight Guests with Seamless Automated Experiences",
    description:
      "Automate bookings, guest communication and reviews for hotels, restaurants, resorts and travel businesses.",
    challenges: [
      { title: "Manual bookings", desc: "Emails and calls slow the reservation process." },
      { title: "Slow guest response", desc: "Queries at odd hours go unanswered." },
      { title: "Missed follow-ups", desc: "Post-stay engagement is inconsistent." },
      { title: "Low review volume", desc: "Great experiences don't reach online platforms." },
    ],
    howWeSolve: [
      { title: "Booking Automation", desc: "Real-time reservations across channels." },
      { title: "24/7 Guest Support", desc: "AI chatbots for menu, amenities and directions." },
      { title: "WhatsApp Communication", desc: "Pre-arrival, in-stay and post-stay messaging." },
      { title: "Review Collection", desc: "Automated Google & platform review requests." },
    ],
    solutions: [
      { title: "Booking Automation", to: "/business-automation" },
      { title: "Customer Support", to: "/business-automation" },
      { title: "WhatsApp Communication", to: "/business-automation" },
      { title: "Guest Follow-ups", to: "/lead-conversion-services" },
      { title: "Review Collection", to: "/business-automation" },
    ],
    benefits: ["More bookings", "Better guest experience", "Higher review count", "Improved retention"],
    process: commonProcess,
    related: [
      { to: "/business-automation", title: "Business Automation" },
      { to: "/lead-conversion-services", title: "Lead Conversion" },
      { to: "/operations-management-services", title: "Operations Management" },
    ],
    faqs: [
      { q: "Do you integrate with PMS systems?", a: "Yes — we integrate with major PMS and booking engines." },
      { q: "Can we send multi-language messages?", a: "Yes, WhatsApp and email flows support multiple languages." },
      { q: "Do you help with review recovery?", a: "Yes — negative feedback is routed to management for quick action." },
    ],
    whatsappMessage: "Hi SMad Works, I'd like to automate my hospitality business.",
  },
  {
    slug: "startups-smes",
    name: "Startups & SMEs",
    icon: Rocket,
    eyebrow: "Startups & SMEs",
    headline: "Automation Built for Speed, Growth and Lean Teams",
    description:
      "Everything a growing business needs to run smoothly — from lead generation to CRM, calling, email and workflow automation.",
    challenges: [
      { title: "Small teams, big goals", desc: "Founders wear too many hats." },
      { title: "Inconsistent leads", desc: "No repeatable acquisition system." },
      { title: "Manual workflows", desc: "Ops eats up 40% of the week." },
      { title: "Poor conversion", desc: "Leads slip through the cracks." },
    ],
    howWeSolve: [
      { title: "Business Automation", desc: "Automate ops, sales and communication end-to-end." },
      { title: "Lead Generation", desc: "Targeted, verified leads matched to your ICP." },
      { title: "CRM & AI Calling", desc: "AI-powered pipeline and outbound follow-ups." },
      { title: "Workflow Optimization", desc: "Ready-to-run playbooks for scaling teams." },
    ],
    solutions: [
      { title: "Business Automation", to: "/business-automation" },
      { title: "Lead Generation", to: "/lead-generation-services" },
      { title: "CRM Automation", to: "/business-automation" },
      { title: "AI Calling", to: "/business-automation" },
      { title: "Email Automation", to: "/business-automation" },
      { title: "Workflow Optimization", to: "/operations-management-services" },
    ],
    benefits: ["Grow without hiring", "Predictable pipeline", "Higher productivity", "Lower cost per lead"],
    process: commonProcess,
    related: [
      { to: "/business-automation", title: "Business Automation" },
      { to: "/lead-generation-services", title: "Lead Generation" },
      { to: "/lead-conversion-services", title: "Lead Conversion" },
    ],
    faqs: [
      { q: "Is this affordable for early-stage startups?", a: "Yes — we offer scalable packages built for lean teams." },
      { q: "How fast can we launch?", a: "Most core automations go live in 1–3 weeks." },
      { q: "Can you scale with us?", a: "Absolutely — the systems are modular and grow with your business." },
    ],
    whatsappMessage: "Hi SMad Works, I run a startup/SME and want to automate.",
  },
];

export const industryBySlug = Object.fromEntries(
  industries.map((i) => [i.slug, i] as const),
);
