"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PROJECTS = [
  {
    id: 1, name: "GreenBite", type: "Restaurant Website", color: "#22C55E",
    desc: "Farm-to-table restaurant — automated reservations, CMS-managed seasonal menu, and first-page local SEO.",
    slides: [
      { img:"/images/a1.png", a:"#DCFCE7", b:"#16A34A" },
      { img:"/images/a2.png", a:"#4ADE80", b:"#166534" },
      { img:"/images/a3.png", a:"#BBF7D0", b:"#15803D" },
    ],
    details: {
      timeline: "11 days",
      tagline: "A full digital overhaul for a farm-to-table brand — reservations, content, and search, all in under two weeks.",
      overview: "GreenBite had been operating with an outdated website that hadn't been touched in three years. No booking system, no way to update their menu, and zero presence on Google for local searches. They were losing customers to competitors with a stronger digital footprint — people were calling to reserve tables, and calls were being missed during busy service hours.\n\nWe came in with a clear plan: rebuild everything from scratch, prioritise mobile experience, and make sure staff could manage their own content without ever opening a code editor. The result was a custom Next.js site backed by Sanity CMS, a fully automated reservation system, and an SEO audit that pushed them to the first page of Google within weeks of launch.",
      problem: "Peak-season reservations were handled entirely over the phone. Staff were manually updating a PDF menu and emailing it to the web agency for every change — a process that took days and cost money each time. Meanwhile, competitors with basic booking widgets were capturing the digital-first customers GreenBite was missing entirely.",
      approach: "We started with a content audit and a competitor SEO analysis to identify the exact keywords their target customers were searching. The site architecture was rebuilt around those keywords before a single line of code was written. For the reservation system, we chose a lightweight custom solution over off-the-shelf tools — giving us full control over the confirmation flow, calendar integration, and admin view. Sanity CMS was chosen specifically because its Studio interface is intuitive enough for non-technical staff to use confidently on day one.",
      highlights: [
        "Custom reservation system with real-time calendar sync and automated email + SMS confirmation to guests",
        "Sanity-powered CMS giving staff full control over menus, hours, and seasonal specials — no developer needed",
        "On-page SEO restructure targeting 12 high-intent local keywords, resulting in first-page Google rankings",
        "Mobile-first design with sub-2-second load time measured on a 4G connection",
        "Admin reservation dashboard showing upcoming bookings, no-shows, and weekly covers at a glance",
        "Structured data (schema.org) for restaurant type, hours, and menu items to boost Google rich results",
      ],
      tech: ["Next.js 14", "Sanity CMS", "Resend (email)", "Twilio (SMS)", "Tailwind CSS", "Vercel", "Google Analytics 4"],
      outcome: "Within 30 days of launch, GreenBite ranked on page one of Google for all 12 target keywords. Reservation volume tripled compared to the prior month. The kitchen team stopped missing phone bookings during service, and the manager was updating the seasonal menu herself within 10 minutes of the CMS handover.",
      metrics: [
        { label: "Days to ship",   value: "11" },
        { label: "Google ranking", value: "#1" },
        { label: "Page load",      value: "<2s" },
        { label: "Monthly covers", value: "3×" },
      ],
      gallery: ["/images/a1.png", "/images/a2.png", "/images/a3.png"],
    },
  },
  {
    id: 2, name: "LuxStay", type: "Hotel Landing Page", color: "#F97316",
    desc: "Boutique hotel with direct booking, live room availability, and Stripe deposits — cutting Booking.com dependency.",
    slides: [
      { img:"/images/a4.png", a:"#FED7AA", b:"#EA580C" },
      { img:"/images/a4.png", a:"#FB923C", b:"#C2410C" },
      { img:"/images/a4.png", a:"#FFEDD5", b:"#F97316" },
    ],
    details: {
      timeline: "3 weeks",
      tagline: "Killed a 30% OTA commission by building a fully owned direct-booking platform in three weeks.",
      overview: "LuxStay is a boutique hotel that had become entirely dependent on Booking.com and Airbnb for reservations. Every booking was costing them 30% in commission — and worse, they had no access to their guests' contact details, no ability to run promotions, and no way to build the repeat-guest relationships that drive long-term revenue for boutique properties.\n\nWe replaced that dependency with a fully owned direct-booking platform: a custom Next.js site with live room availability, Stripe deposit checkout, and a lightweight admin panel their staff uses daily. Within two months of launch, direct bookings had doubled and the owner described it as the best investment the hotel had made.",
      problem: "The hotel was paying Booking.com 30% per reservation with no recourse. During peak season that translated to thousands in lost revenue every week. They couldn't run early-bird promotions, couldn't email past guests about availability, and couldn't offer add-ons (late checkout, airport transfer) without the OTA taking a cut of those too.",
      approach: "We mapped out the full booking journey before building anything — from the moment a guest lands on the site to the confirmation email hitting their inbox. The availability calendar was built on a custom data model so it could be managed entirely from the admin panel without any third-party booking engine subscription. Stripe was integrated for deposit collection with automatic balance-due reminders sent via Resend. SEO-optimised room landing pages were built to capture travellers searching for the hotel by name or by area.",
      highlights: [
        "Live room availability calendar synced in real-time with the hotel's admin panel",
        "Stripe deposit collection at booking with automated balance-due email reminders",
        "Custom admin dashboard: manage availability, view upcoming reservations, and track revenue by room",
        "SEO-optimised landing pages per room type targeting high-intent traveller searches",
        "Guest email capture on every booking for post-stay campaigns and repeat promotions",
        "Mobile-optimised booking flow designed to convert on phone — where 70% of hotel searches happen",
      ],
      tech: ["Next.js 14", "Stripe", "Resend", "Prisma", "PostgreSQL", "Tailwind CSS", "Vercel"],
      outcome: "In the first two months post-launch, direct bookings doubled compared to the same period the prior year. The hotel recovered the full platform cost in saved OTA commission within six weeks. The owner now runs seasonal promotions directly to past guests and has full visibility into revenue and occupancy for the first time.",
      metrics: [
        { label: "OTA commission",   value: "0%" },
        { label: "Direct bookings",  value: "2× up" },
        { label: "Cost recovered in", value: "6 wks" },
        { label: "Time to ship",     value: "3 wks" },
      ],
      gallery: ["/images/a4.png", "/images/a4.png", "/images/a4.png"],
    },
  },
  {
    id: 3, name: "TaskFlow", type: "SaaS Web App", color: "#3B82F6",
    desc: "Custom PM dashboard for a 12-person agency — real-time collaboration, client portal, and automated status emails.",
    slides: [
      { img:"/images/a7.png", a:"#DBEAFE", b:"#1D4ED8" },
      { img:"/images/a8.png", a:"#93C5FD", b:"#1E40AF" },
      { img:"/images/a9.png", a:"#BFDBFE", b:"#2563EB" },
    ],
    details: {
      timeline: "5 weeks",
      tagline: "One platform to replace Notion, Slack threads, and spreadsheets — built for how a creative agency actually works.",
      overview: "A 12-person creative agency was drowning in tool fragmentation. Projects lived in Notion, conversations happened in Slack threads, timelines were tracked in spreadsheets, and client updates were written manually every Friday afternoon. Nobody had a single view of what was happening across accounts, and clients had no visibility at all unless someone wrote them an email.\n\nTaskFlow is the custom PM platform we built to fix all of that. Real-time task management, a read-only client portal, role-based access control, and an automated weekly digest that goes to every stakeholder without anyone needing to write a single word.",
      problem: "The agency's project managers were spending over six hours each week manually writing status update emails. New team members took several days to onboard because context was scattered across three tools. Clients were emailing to ask for updates, which was interrupting work and eroding trust. Two clients had churned in the previous quarter citing 'lack of visibility'.",
      approach: "We ran a two-day discovery session with the agency team before writing any code — mapping their actual workflow step by step and identifying where information was falling through the gaps. The decision to build custom rather than configure an existing tool came down to one requirement: the client portal. No off-the-shelf PM tool offered a white-labelled, read-only view they could send to clients without giving them access to internal discussions.\n\nWebSockets were chosen over polling for the real-time updates because the team is always in the app during working hours and latency matters when multiple people are on the same project simultaneously.",
      highlights: [
        "Real-time task updates, comments, and status changes via WebSockets — no page refresh needed",
        "Read-only client portal with live project progress, milestones, and file deliverables",
        "Automated weekly status digest email generated from task data — sent every Monday at 8am without human input",
        "Role-based access control with three tiers: Admin, Team Member, and Client",
        "File attachment support on tasks with Cloudinary storage and version history",
        "Workload view showing each team member's active tasks and capacity at a glance",
        "Time-to-completion tracking per task type to help the team improve future estimates",
      ],
      tech: ["Next.js 14", "Socket.io", "Resend", "Prisma", "PostgreSQL", "Cloudinary", "Tailwind CSS", "Vercel"],
      outcome: "Within the first month, manual status reporting dropped to zero. The two clients who had churned citing lack of visibility were re-engaged with the client portal as a selling point. Onboarding time for new team members dropped from three days to half a day. The agency has since added two new client accounts without adding headcount.",
      metrics: [
        { label: "Manual hrs saved/wk", value: "6+" },
        { label: "Tools replaced",      value: "4" },
        { label: "Onboarding time",     value: "−80%" },
        { label: "Client NPS delta",    value: "+42" },
      ],
      gallery: ["/images/a7.png", "/images/a8.png", "/images/a9.png"],
    },
  },
  {
    id: 4, name: "ShopEase", type: "E-commerce Platform", color: "#A855F7",
    desc: "Own-brand storefront with Stripe + bKash checkout, custom admin, and full inventory — off Daraz in 4 weeks.",
    slides: [
      { img:"/images/a13.png", a:"#EDE9FE", b:"#7C3AED" },
      { img:"/images/a13.png", a:"#C084FC", b:"#6D28D9" },
      { img:"/images/a13.png", a:"#F3E8FF", b:"#9333EA" },
    ],
    details: {
      timeline: "4 weeks",
      tagline: "A fully owned e-commerce brand — off Daraz's 15% commission, with their own checkout, admin, and customer data.",
      overview: "ShopEase's client had been selling exclusively through Daraz for three years. Every sale cost 15% in platform commission. They had no access to their customers' contact details, no control over how their products were displayed, and no way to offer promotions without going through Daraz's paid advertising system. The business was growing, but Daraz was capturing an increasingly large share of the upside.\n\nWe built them a fully owned e-commerce storefront with dual payment checkout (Stripe for international customers, bKash for Bangladesh), a custom product and inventory admin panel, and an order management system — all live in four weeks.",
      problem: "Beyond the 15% per-sale commission, the client had deeper structural problems: zero customer data meant no repeat-purchase campaigns, no control over search placement meant newer competitors were outranking them, and reliance on Daraz's fulfilment notifications meant customers sometimes got confused about order status. The platform was a ceiling on the business.",
      approach: "We scoped the project tightly to get them live fast: a clean product catalogue, a two-step checkout with dual payment, and a functional admin panel for the owner to manage everything. bKash integration required working directly with their merchant API — we handled the sandbox testing, callback verification, and edge-case payment state management. The admin panel was built with the owner's technical comfort level in mind: visual, minimal, and opinionated rather than flexible.",
      highlights: [
        "Dual-payment checkout: Stripe for international cards and bKash for local Bangladeshi mobile payments",
        "Custom admin panel: add/edit products, manage variants and stock levels, view and fulfil orders",
        "Discount codes and time-limited coupon engine built into the product and checkout flow",
        "Automated order confirmation, payment receipt, and shipping update notifications via SMS",
        "Customer accounts with full order history, saved addresses, and re-order functionality",
        "Cloudinary-powered image management with automatic optimisation and responsive delivery",
        "Product variant system supporting size, colour, and custom attribute combinations",
      ],
      tech: ["Next.js 14", "Stripe", "bKash Merchant API", "Prisma", "PostgreSQL", "Cloudinary", "Resend", "Vercel"],
      outcome: "The client moved their full catalogue off Daraz within 60 days of launch. In the first quarter of operating their own store, they retained the equivalent of six months of platform commissions. They now run a monthly email promotion to their growing customer list — something that simply wasn't possible before.",
      metrics: [
        { label: "Platform commission", value: "15% → 0" },
        { label: "Time to ship",        value: "4 wks" },
        { label: "SKUs live at launch", value: "200+" },
        { label: "Repeat purchase rate", value: "+60%" },
      ],
      gallery: ["/images/a13.png", "/images/a13.png", "/images/a13.png"],
    },
  },
  {
    id: 5, name: "MediBook", type: "Healthcare App", color: "#0D9488",
    desc: "Flutter app connecting patients with 40+ verified doctors for appointments and video consultations in Ghana.",
    slides: [
      { img:"/images/a13.png", a:"#CCFBF1", b:"#0F766E" },
      { img:"/images/a14.png", a:"#5EEAD4", b:"#0D9488" },
      { img:"/images/a14.png", a:"#99F6E4", b:"#115E59" },
    ],
    details: {
      timeline: "8 weeks",
      tagline: "Digitising doctor discovery and appointment booking in Ghana — from phone calls to a sub-3-minute booking flow.",
      overview: "MediBook was founded to solve a real infrastructure problem in Ghana's healthcare system: finding and booking a verified specialist could take days of phone calls, word-of-mouth referrals, and physical visits to multiple clinics. Patients outside major cities had almost no access to specialist consultations at all.\n\nWe built a cross-platform Flutter application for both iOS and Android covering the full patient journey — browse verified doctors by specialty and location, check real-time availability, book and pay for in-person or video consultations, and access past appointment records. A companion web admin gives doctors full control over their profile, availability, and patient history.",
      problem: "There was no reliable digital directory of verified doctors in Ghana. Patients relied on personal referrals or walked into clinics hoping a specialist was available. For patients outside Accra or Kumasi, accessing a specialist meant a full day of travel. Doctors had no unified tool to manage appointments — most were using paper calendars or phone calls to coordinate.",
      approach: "Flutter was chosen over separate native apps because it allowed a single codebase to ship on iOS and Android simultaneously — critical for an 8-week timeline. Firebase handled real-time availability updates and push notifications without the complexity of a custom backend. Agora's SDK was integrated for video consultations after evaluating three alternatives on call quality and SDK maturity for Flutter. Paystack was the obvious payment choice for the Ghanaian market, with their reliable mobile money and card support.",
      highlights: [
        "Verified doctor directory with specialty, location, language, and availability filters",
        "Real-time appointment booking with live calendar availability pulled from each doctor's schedule",
        "In-app Agora-powered video consultations with waiting room UI and session recording consent",
        "Paystack payment integration supporting card and mobile money for the Ghanaian market",
        "Patient dashboard with appointment history, upcoming bookings, and downloadable consultation notes",
        "Push notifications for booking confirmations, reminders 24 hours before appointments, and follow-up prompts",
        "Doctor admin: manage availability slots, view patient history, and update profile and credentials",
      ],
      tech: ["Flutter 3", "Dart", "Firebase (Auth, Firestore, FCM)", "Agora SDK", "Paystack", "Cloud Functions", "Google Maps SDK"],
      outcome: "MediBook launched with 40 verified doctors across 8 specialties. Average booking time on the app is under 3 minutes. The video consultation feature has been used by patients from 6 regions outside Accra who previously had no access to specialist care. The team is now expanding to a second country in West Africa.",
      metrics: [
        { label: "Doctors at launch", value: "40+" },
        { label: "Avg booking time",  value: "<3 min" },
        { label: "Platforms",         value: "iOS + Android" },
        { label: "Time to ship",      value: "8 wks" },
      ],
      gallery: ["/images/a13.png", "/images/a14.png", "/images/a14.png"],
    },
  },
  {
    id: 6, name: "NexusBot", type: "AI Support Agent", color: "#6366F1",
    desc: "GPT-4 RAG pipeline trained on client docs — resolves 78% of tier-1 tickets autonomously, embeds in one script tag.",
    slides: [
      { img:"/images/a14.png", a:"#E0E7FF", b:"#4338CA" },
      { img:"/images/a14.png", a:"#A5B4FC", b:"#3730A3" },
      { img:"/images/a14.png", a:"#C7D2FE", b:"#4F46E5" },
    ],
    details: {
      timeline: "3 weeks",
      tagline: "An AI support agent that knows your product better than most support reps — trained on your own docs and live in one script tag.",
      overview: "NexusBot started as a solution to a very specific pain: the client's support team was spending 70% of their time answering the same 20 questions. Average first response time was over four hours. The knowledge base existed — it was just sitting in a documentation site nobody read.\n\nWe built a GPT-4 retrieval-augmented generation pipeline trained exclusively on the client's product documentation, FAQs, and historical support tickets. NexusBot handles tier-1 queries autonomously, detects when it's uncertain, and escalates to a human agent with the full conversation context attached — so customers never have to repeat themselves.",
      problem: "The support team had 3 agents fielding 200+ tickets per week. 78% of those tickets were variations of the same questions covered in the documentation. Response times were averaging 4 hours despite the answers being readily available. Training new support agents took two weeks and still resulted in inconsistent answers for edge-case queries.",
      approach: "The architecture is a classic RAG pipeline: documentation is chunked, embedded using OpenAI's embedding model, and stored in Pinecone vector storage. Each incoming query is embedded and matched against the knowledge base before being passed to GPT-4 with the retrieved context. A confidence scoring layer determines whether the bot should answer directly, ask a clarifying question, or escalate — with the escalation threshold tuned over the first week of production monitoring.\n\nThe embed script was a deliberate product decision: any customer success or operations person should be able to install NexusBot without involving engineering. The script tag handles widget injection, session management, and the connection to the backend API.",
      highlights: [
        "GPT-4 RAG pipeline retrieves relevant documentation chunks before every response — answers are grounded, not hallucinated",
        "Confidence-based escalation: when the model is uncertain, it hands off to a human agent with full conversation history attached",
        "One-line embed script deploys NexusBot on any website without engineering involvement",
        "Admin dashboard for reviewing conversations, flagging incorrect answers, and triggering knowledge base retraining",
        "Multi-language support: auto-detects the customer's query language and responds in kind",
        "Support analytics: ticket deflection rate, most common queries, escalation triggers, and average resolution time",
        "Webhooks to push escalated conversations directly into the client's existing helpdesk (Intercom, Zendesk)",
      ],
      tech: ["GPT-4 (OpenAI)", "LangChain", "Pinecone", "FastAPI", "Next.js 14", "Python 3.11", "Vercel", "Resend"],
      outcome: "In the first month of deployment, NexusBot resolved 78% of incoming tickets without human intervention. Average response time dropped from 4 hours to under 2 seconds. The client reduced their support team's ticket volume by 55%, allowing them to redeploy two agents to proactive customer success work. The knowledge base has since been expanded to cover the full product suite.",
      metrics: [
        { label: "Tickets resolved",   value: "78%" },
        { label: "Avg response time",  value: "<2s" },
        { label: "Support cost cut",   value: "55%" },
        { label: "Time to ship",       value: "3 wks" },
      ],
      gallery: ["/images/a14.png", "/images/a14.png", "/images/a14.png"],
    },
  },
];

const IMG_V = 2;
function imgSrc(s: string) { return `${s}?v=${IMG_V}`; }
type Slide = { img?: string; a?: string; b?: string };
function slideBg(s: Slide) { return s.a ? `linear-gradient(140deg,${s.a},${s.b})` : "transparent"; }

const N_SLIDES = 3;
const IMG_MS   = 3200;

/* ─── Section label ─────────────────────────────────────────────────────────── */
function SectionLabel({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-1 h-5 rounded-full shrink-0" style={{ background: color }} />
      <p className="font-display font-black text-base text-txt">{children}</p>
    </div>
  );
}

/* ─── Case Study Modal ──────────────────────────────────────────────────────── */
function CaseStudyModal({ project, onClose }: { project: typeof PROJECTS[0]; onClose: () => void }) {
  const [activeImg, setActiveImg] = useState(0);
  const d = project.details;
  const c = project.color;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute inset-0 bg-dark/70 backdrop-blur-sm" onClick={onClose} />

      <motion.div
        className="relative z-10 w-full sm:max-w-3xl max-h-[96vh] sm:max-h-[90vh] flex flex-col bg-surface rounded-t-3xl sm:rounded-3xl overflow-hidden"
        style={{ boxShadow: `0 -3px 0 0 ${c}, 0 40px 100px rgba(0,0,0,0.3)` }}
        initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Sticky header */}
        <div className="shrink-0 flex items-center justify-between px-6 py-4 border-b-2 border-border">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full shrink-0" style={{ background: c }} />
            <h2 className="font-display font-black text-lg text-txt">{project.name}</h2>
            <span className="hidden sm:inline text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border-2"
              style={{ color: c, borderColor: `${c}35`, background: `${c}10` }}>
              {project.type}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-txt-2 font-bold hidden sm:inline">⏱ {d.timeline}</span>
            <button onClick={onClose}
              className="w-9 h-9 rounded-full border-2 border-border flex items-center justify-center text-txt-2 hover:border-txt transition-colors text-sm font-bold">
              ✕
            </button>
          </div>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto">

          {/* Hero image */}
          <div className="relative w-full bg-border" style={{ aspectRatio: "16/8" }}>
            <AnimatePresence mode="wait">
              <motion.div key={activeImg} className="absolute inset-0"
                style={{ background: slideBg(project.slides[activeImg]) }}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}>
                <img src={imgSrc(d.gallery[activeImg])} alt={project.name}
                  className="absolute inset-0 w-full h-full object-cover object-top" />
              </motion.div>
            </AnimatePresence>
            {/* Gradient overlay */}
            <div className="absolute inset-0" style={{ background: `linear-gradient(to top,${c}25 0%,transparent 55%)` }} />
            {/* Thumbnails */}
            <div className="absolute bottom-3 right-4 flex gap-2">
              {d.gallery.map((img, i) => (
                <button key={i} onClick={() => setActiveImg(i)}
                  className="w-14 h-9 rounded-lg overflow-hidden border-2 transition-all"
                  style={{ borderColor: i === activeImg ? c : "rgba(255,255,255,0.35)", opacity: i === activeImg ? 1 : 0.6 }}>
                  <img src={imgSrc(img)} alt="" className="w-full h-full object-cover object-top" />
                </button>
              ))}
            </div>
          </div>

          <div className="px-6 sm:px-8 py-7 flex flex-col gap-8">

            {/* Tagline + metrics */}
            <div>
              <p className="text-base font-bold text-txt leading-snug mb-5">{d.tagline}</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {d.metrics.map(m => (
                  <div key={m.label} className="rounded-2xl border-2 border-border p-4 text-center" style={{ background: `${c}08` }}>
                    <p className="font-display font-black text-2xl leading-tight" style={{ color: c }}>{m.value}</p>
                    <p className="text-[11px] text-txt-2 font-semibold mt-1 leading-tight">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Overview */}
            <div>
              <SectionLabel color={c}>Overview</SectionLabel>
              {d.overview.split("\n\n").map((para, i) => (
                <p key={i} className={`text-sm text-txt-2 leading-relaxed ${i > 0 ? "mt-3" : ""}`}>{para}</p>
              ))}
            </div>

            {/* Problem */}
            <div>
              <SectionLabel color={c}>The Problem</SectionLabel>
              <p className="text-sm text-txt-2 leading-relaxed">{d.problem}</p>
            </div>

            {/* Approach */}
            <div>
              <SectionLabel color={c}>How We Approached It</SectionLabel>
              {d.approach.split("\n\n").map((para, i) => (
                <p key={i} className={`text-sm text-txt-2 leading-relaxed ${i > 0 ? "mt-3" : ""}`}>{para}</p>
              ))}
            </div>

            {/* What we built */}
            <div>
              <SectionLabel color={c}>What We Built</SectionLabel>
              <ul className="flex flex-col gap-3">
                {d.highlights.map(h => (
                  <li key={h} className="flex items-start gap-3">
                    <span className="mt-0.5 w-5 h-5 rounded-full shrink-0 flex items-center justify-center text-[9px] font-black text-white"
                      style={{ background: c }}>✓</span>
                    <span className="text-sm text-txt-2 leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech stack */}
            <div>
              <SectionLabel color={c}>Tech Stack</SectionLabel>
              <div className="flex flex-wrap gap-2">
                {d.tech.map(t => (
                  <span key={t} className="text-[11px] font-bold font-mono px-3 py-1.5 rounded-full border-2"
                    style={{ borderColor: `${c}35`, color: c, background: `${c}08` }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Outcome */}
            <div className="rounded-2xl border-2 border-border p-5" style={{ background: `${c}06` }}>
              <SectionLabel color={c}>The Outcome</SectionLabel>
              <p className="text-sm text-txt-2 leading-relaxed">{d.outcome}</p>
            </div>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Main section ───────────────────────────────────────────────────────────── */
export default function FeaturedWork() {
  const [pi,     setPi]     = useState(0);
  const [si,     setSi]     = useState(0);
  const [dir,    setDir]    = useState<1|-1>(1);
  const [openId, setOpenId] = useState<number|null>(null);

  const openProject = PROJECTS.find(p => p.id === openId) ?? null;
  const p = PROJECTS[pi];

  useEffect(() => {
    setSi(0);
    const t = setInterval(() => { setDir(1); setSi(prev => (prev + 1) % N_SLIDES); }, IMG_MS);
    return () => clearInterval(t);
  }, [pi]);

  function jumpTo(idx: number) { setDir(idx >= pi ? 1 : -1); setPi(idx); }

  const slideVariants = {
    enter: (d: number) => ({ x: d * 48, opacity: 0, scale: 0.97 }),
    show:  { x: 0, opacity: 1, scale: 1 },
    exit:  (d: number) => ({ x: d * -36, opacity: 0, scale: 1.02 }),
  };
  const left  = p.slides[(si - 1 + N_SLIDES) % N_SLIDES];
  const ctr   = p.slides[si];
  const right = p.slides[(si + 1) % N_SLIDES];

  return (
    <>
      <section id="work" className="py-12 lg:py-20 bg-bg overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="mb-8 text-center"
          >
            <span className="section-pill mb-3">Our Work</span>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-txt mt-3">
              Work That <span className="gradient-text">Speaks for Itself</span>
            </h2>
          </motion.div>

          {/* Two-column: project list left | carousel + info right */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">

            {/* ── Left: project list ── */}
            <div className="w-full lg:w-56 shrink-0 flex flex-row lg:flex-col gap-1.5 overflow-x-auto pb-1 lg:pb-0">
              {PROJECTS.map((proj, i) => (
                <button
                  key={proj.id}
                  onClick={() => jumpTo(i)}
                  className="flex items-center gap-2.5 px-3.5 py-3 rounded-xl border-2 text-left transition-all duration-200 shrink-0 lg:shrink lg:w-full"
                  style={{
                    borderColor: i === pi ? proj.color    : "#F0DDB0",
                    background:  i === pi ? `${proj.color}10` : "transparent",
                    boxShadow:   i === pi ? `3px 3px 0 ${proj.color}50` : "none",
                  }}
                >
                  <div className="w-2 h-2 rounded-full shrink-0 transition-colors"
                    style={{ background: i === pi ? proj.color : "#D4B483" }} />
                  <div className="min-w-0">
                    <p className="font-display font-black text-sm truncate leading-tight"
                      style={{ color: i === pi ? proj.color : "#6B4E1A" }}>
                      {proj.name}
                    </p>
                    <p className="text-[10px] text-txt-2 truncate hidden lg:block mt-0.5">{proj.type}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* ── Right: carousel + info strip + button ── */}
            <div className="flex-1 min-w-0 flex flex-col">

              {/* Carousel */}
              <div className="relative overflow-hidden rounded-2xl" style={{ height: 400 }}>
                {/* Left partial */}
                <div className="absolute hidden lg:block rounded-xl overflow-hidden"
                  style={{ width:"40%", height:"80%", top:"10%", left:"-19%" }}>
                  <AnimatePresence mode="sync">
                    <motion.div key={`L-${pi}-${si}`} className="absolute inset-0"
                      initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
                      transition={{ duration:0.5 }} style={{ background: slideBg(left) }}>
                      {left.img && <img src={imgSrc(left.img)} alt="" className="absolute inset-0 w-full h-full object-cover object-top" />}
                    </motion.div>
                  </AnimatePresence>
                  <div className="absolute inset-y-0 right-0 w-16 pointer-events-none"
                    style={{ background:"linear-gradient(to right,transparent,#FFFBF0)" }} />
                  <div className="absolute inset-0 bg-bg/50 pointer-events-none" />
                </div>

                {/* Center */}
                <div className="absolute inset-0 lg:inset-auto lg:top-0 lg:left-[18%] lg:w-[64%] lg:h-full overflow-hidden rounded-2xl z-10"
                  style={{ boxShadow:`0 0 0 2px ${p.color}22, 0 8px 32px rgba(0,0,0,0.14), 0 24px 60px ${p.color}38` }}>
                  <AnimatePresence mode="sync" custom={dir}>
                    <motion.div key={`C-${pi}-${si}`} className="absolute inset-0" custom={dir}
                      variants={slideVariants} initial="enter" animate="show" exit="exit"
                      transition={{ duration:0.5, ease:[0.25,0.46,0.45,0.94] }}
                      style={{ background: slideBg(ctr) }}>
                      {ctr.img && <img src={imgSrc(ctr.img)} alt={p.name} className="absolute inset-0 w-full h-full object-cover object-top" />}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Right partial */}
                <div className="absolute hidden lg:block rounded-xl overflow-hidden"
                  style={{ width:"40%", height:"80%", top:"10%", left:"79%" }}>
                  <AnimatePresence mode="sync">
                    <motion.div key={`R-${pi}-${si}`} className="absolute inset-0"
                      initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
                      transition={{ duration:0.5 }} style={{ background: slideBg(right) }}>
                      {right.img && <img src={imgSrc(right.img)} alt="" className="absolute inset-0 w-full h-full object-cover object-top" />}
                    </motion.div>
                  </AnimatePresence>
                  <div className="absolute inset-y-0 left-0 w-16 pointer-events-none"
                    style={{ background:"linear-gradient(to left,transparent,#FFFBF0)" }} />
                  <div className="absolute inset-0 bg-bg/50 pointer-events-none" />
                </div>
              </div>

              {/* Dots + progress */}
              <div className="flex items-center justify-center gap-2 mt-3">
                {Array.from({ length: N_SLIDES }).map((_, i) => (
                  <button key={i} onClick={() => { setDir(i > si ? 1 : -1); setSi(i); }}
                    className="rounded-full transition-all duration-300"
                    style={{ width: i===si ? 20 : 7, height: 7, background: i===si ? p.color : `${p.color}35` }} />
                ))}
              </div>
              <div className="mt-2 h-[2px] rounded-full overflow-hidden bg-border">
                <motion.div key={`${pi}-${si}`} className="h-full rounded-full" style={{ background: p.color }}
                  initial={{ width:"0%" }} animate={{ width:"100%" }}
                  transition={{ duration: IMG_MS/1000, ease:"linear" }} />
              </div>

              {/* Info strip — project name + desc on left, button on right */}
              <AnimatePresence mode="wait">
                <motion.div key={pi}
                  className="mt-5 flex items-end justify-between gap-6"
                  initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-6 }}
                  transition={{ duration:0.3 }}>
                  <div className="min-w-0">
                    <span className="inline-block text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border-2 mb-2"
                      style={{ color: p.color, borderColor:`${p.color}35`, background:`${p.color}10` }}>
                      {p.type}
                    </span>
                    <h3 className="font-display font-black text-xl text-txt leading-tight">{p.name}</h3>
                    <p className="text-sm text-txt-2 mt-1 leading-relaxed max-w-md">{p.desc}</p>
                  </div>
                  <button
                    onClick={() => setOpenId(p.id)}
                    className="btn-cartoon shrink-0 px-5 py-2.5 text-sm rounded-xl whitespace-nowrap"
                  >
                    Case Study →
                  </button>
                </motion.div>
              </AnimatePresence>

            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {openProject && <CaseStudyModal project={openProject} onClose={() => setOpenId(null)} />}
      </AnimatePresence>
    </>
  );
}
