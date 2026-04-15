"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";

interface Project {
  id: number;
  emoji: string;
  name: string;
  type: string;
  tagline: string;
  bg: string;
  border: string;
  color: string;
  duration: string;
  platform: string;
  industry: string;
  overview: string;
  challenge: string;
  approach: string;
  outcome: string;
  tags: string[];
  features: string[];
}

const projects: Project[] = [
  {
    id: 1,
    emoji: "🍃",
    name: "GreenBite",
    type: "Restaurant Website",
    tagline: "Online presence & reservation system for a local restaurant",
    bg: "#F0FFF4",
    border: "#22C55E",
    color: "#16A34A",
    duration: "11 days",
    platform: "Web",
    industry: "F&B / Restaurant",
    overview: "GreenBite is a farm-to-table restaurant in Dhaka that had been operating for 3 years purely on word-of-mouth and social media DMs. The owner came to us wanting a proper website that could handle reservations automatically and reflect the quality of their food.",
    challenge: "The owner was manually confirming every reservation over WhatsApp — often missing messages during busy hours and losing bookings as a result. They also had no way to showcase their seasonal menu online. Competitors with basic websites were visibly outperforming them in Google searches.",
    approach: "We started with a 2-hour discovery session to understand the brand, their peak hours, and what the typical customer journey looked like. We designed a warm, photography-forward layout using their existing food photos. The menu was built on Sanity CMS so the owner can update it from a phone. The reservation system sends automatic confirmation emails and reminders to both the guest and the kitchen. We optimised the site for local SEO with structured data and Google Business integration.",
    outcome: "The site went live in 11 days. The owner stopped managing reservations manually within the first week. The kitchen team now gets a daily digest of upcoming bookings each morning. The site ranks on the first page for relevant local searches in their area.",
    tags: ["Next.js", "Tailwind CSS", "Sanity CMS", "Framer Motion", "Resend"],
    features: ["Online table booking with confirmation emails", "CMS-managed seasonal menu", "Mobile-first responsive design", "Photo gallery with lazy loading", "Local SEO & structured data", "Daily kitchen booking digest"],
  },
  {
    id: 2,
    emoji: "🏨",
    name: "LuxStay",
    type: "Hotel Landing Page",
    tagline: "Premium hotel website with live availability & direct booking",
    bg: "#FFF7ED",
    border: "#F97316",
    color: "#EA580C",
    duration: "3 weeks",
    platform: "Web",
    industry: "Hospitality",
    overview: "LuxStay is a 24-room boutique hotel in Cox's Bazar. Despite being highly rated on Booking.com and Airbnb, the owner was handing over a significant cut of every reservation to third-party platforms and had no direct relationship with guests.",
    challenge: "The hotel had zero owned digital presence — no website, no direct booking channel. Every booking came through a platform, meaning the hotel paid commission on each one, had no guest data, and couldn't offer loyalty perks or early-bird deals. The owner wanted to change this but had a tight budget and a non-technical team.",
    approach: "We designed a premium, image-forward site that communicates the boutique feel of the property. Room pages include photo carousels, amenity breakdowns, and a comparison view. The availability checker connects to a simple backend calendar the staff manages via a protected dashboard. Stripe handles deposits for direct bookings, and guests get a welcome email with local recommendations we curated with the owner.",
    outcome: "The site launched on time before peak season. The front desk team was trained on the dashboard in under an hour. The hotel now promotes their direct booking link across all their social platforms and has started offering exclusive rates to direct bookers that platforms cannot match.",
    tags: ["Next.js", "Stripe", "Sanity CMS", "Tailwind CSS", "Resend"],
    features: ["Room showcase with photo carousels", "Live availability calendar", "Direct booking with Stripe deposit", "Staff-managed booking dashboard", "Guest welcome email with local tips", "Mobile responsive & fast-loading"],
  },
  {
    id: 3,
    emoji: "📋",
    name: "TaskFlow",
    type: "SaaS Web Application",
    tagline: "Custom project management dashboard for a remote agency",
    bg: "#EFF6FF",
    border: "#3B82F6",
    color: "#2563EB",
    duration: "6 weeks",
    platform: "Web Application",
    industry: "Creative Agency",
    overview: "TaskFlow was built for a 12-person creative agency in the UK that was struggling to coordinate across time zones using a mix of Trello, Notion, and spreadsheets. They needed a single tool built around their specific delivery workflow — not a generic solution.",
    challenge: "The team was spending a disproportionate amount of time on coordination instead of actual work. Project status was scattered across tools, clients had to chase for updates, and the owner had no reliable way to see delivery health across all active projects at once. Off-the-shelf tools either didn't fit their workflow or required expensive per-seat licensing.",
    approach: "We ran a 3-day discovery sprint to map their exact workflow before writing any code. TaskFlow was built on React with a Node.js backend and PostgreSQL for reliability. WebSocket connections power real-time updates so the board reflects changes instantly without refreshing. We built a separate client-facing portal — clients log in and see only their project's status, removing the need for manual update emails. Automated weekly summary emails go out to clients every Friday.",
    outcome: "The agency migrated off all their previous tools within 2 weeks of launch. The client portal alone eliminated the weekly update email back-and-forth that was consuming nearly an hour per project manager per week. The owner now reviews a single dashboard each morning to get a full picture of delivery health.",
    tags: ["React", "Node.js", "PostgreSQL", "WebSockets", "TypeScript", "Resend"],
    features: ["Drag-and-drop kanban with custom stages", "Real-time multi-user collaboration", "Time tracking per task & project", "Role-based access (staff vs. client)", "Automated weekly client status emails", "Project health dashboard for owner"],
  },
  {
    id: 4,
    emoji: "🛍️",
    name: "ShopEase",
    type: "E-commerce Platform",
    tagline: "Custom online store replacing marketplace dependency",
    bg: "#FDF4FF",
    border: "#A855F7",
    color: "#9333EA",
    duration: "4 weeks",
    platform: "Web",
    industry: "Retail / Fashion",
    overview: "ShopEase was built for a Dhaka-based clothing brand that had been selling exclusively through Facebook and Daraz. After years of paying platform fees and having no control over the customer experience, they decided to invest in their own store.",
    challenge: "The brand had a loyal following on social media but no owned storefront. Every sale on Daraz came with a commission and strict rules on packaging and pricing. On Facebook, managing orders through DMs was chaotic — products sold out without notice, payment collection was manual, and there was no order history. The founders had no technical background and needed a system they could run themselves after handover.",
    approach: "We built the store on Next.js with a MongoDB backend and a Cloudinary-powered image pipeline so product photos are automatically optimised. The checkout uses Stripe for card payments and bKash for local mobile payments. We built a custom admin panel from scratch — the team can add products, manage inventory, process orders, and issue refunds without touching any code. We ran 2 full training sessions before handover and wrote a plain-language operations guide.",
    outcome: "The store launched with the full product catalogue migrated from Daraz. The founders handled the first 50 orders independently without any support from our team. The brand now runs social media campaigns that drive directly to their own checkout instead of a marketplace page.",
    tags: ["Next.js", "Stripe", "bKash API", "MongoDB", "Cloudinary", "TypeScript"],
    features: ["Product catalogue with variants & stock", "Stripe + bKash payment integration", "Order management & fulfilment tracking", "Customer accounts & order history", "Admin panel for non-technical team", "Automated low-stock notifications"],
  },
  {
    id: 5,
    emoji: "🏥",
    name: "MediBook",
    type: "Healthcare Mobile App",
    tagline: "Cross-platform app for doctor discovery, appointments & teleconsultation",
    bg: "#F0FFF4",
    border: "#14B8A6",
    color: "#0D9488",
    duration: "8 weeks",
    platform: "iOS & Android",
    industry: "Healthcare",
    overview: "MediBook was built for a healthcare startup in Ghana that wanted to reduce the barrier to specialist care in underserved areas. The app connects patients with verified doctors across the country for both in-person appointments and video consultations.",
    challenge: "In many parts of Ghana, patients spend hours traveling to see a specialist, only to find the doctor is unavailable or the appointment slot is taken. The startup had a network of 40+ verified doctors willing to offer teleconsultations but no platform to connect them with patients. They needed a cross-platform mobile app that worked reliably on mid-range Android phones with inconsistent connectivity.",
    approach: "We chose Flutter for a single codebase that runs on both iOS and Android without performance compromise. Firebase handles real-time appointment state and push notifications. WebRTC powers the video call layer with automatic quality degradation on poor connections. Doctors manage their availability through a separate web-based admin panel we built alongside the app. Stripe processes consultation fees in multiple currencies. We conducted user testing sessions with 8 patients and 3 doctors before launch to validate the booking flow.",
    outcome: "The app launched on the Google Play Store and Apple App Store simultaneously. The onboarding flow was revised twice based on user testing feedback before release. Doctors reported that the availability management tool saved them significant back-and-forth with patients. The startup used the app as the core demo in their next funding round.",
    tags: ["Flutter", "Firebase", "WebRTC", "Stripe", "Dart", "Node.js"],
    features: ["Doctor discovery with specialty filters", "Real-time appointment booking", "Video consultations with adaptive quality", "Digital prescription generation", "Multi-currency payment processing", "Doctor web panel for availability"],
  },
  {
    id: 6,
    emoji: "🤖",
    name: "NexusBot",
    type: "AI Customer Support Agent",
    tagline: "GPT-4 support agent trained on product docs, with human handoff",
    bg: "#F0F4FF",
    border: "#6366F1",
    color: "#4F46E5",
    duration: "5 weeks",
    platform: "Web",
    industry: "SaaS / Support",
    overview: "NexusBot was built for a UK-based SaaS company whose 3-person support team was spending most of their day answering the same questions that were already documented in their help centre. They needed an AI agent that could answer confidently — and know when not to.",
    challenge: "The support team was drowning in tier-1 queries: password resets, billing questions, feature explanations — all answerable from the docs. Response SLAs were slipping. The team had tried a basic FAQ chatbot before but it gave wrong answers confidently, which made customers angrier than no bot at all. The new solution had to be accurate and know its own limits.",
    approach: "We built a RAG (retrieval-augmented generation) pipeline that ingests and indexes the client's full help centre and internal docs using LangChain and OpenAI embeddings. The agent retrieves the most relevant documentation chunks before generating a response, keeping answers grounded in real content rather than hallucinating. We built a confidence scoring layer — below a defined threshold, the bot tells the user it's not certain and offers to escalate to a human agent via an in-chat handoff. The chat widget embeds on any page with a single script tag. An admin panel lets the client re-index docs, review conversation logs, and tune the escalation threshold.",
    outcome: "The bot was deployed on their support page and in-app help widget. The support team reviewed the first 200 conversations and flagged 4 incorrect responses — all edge cases that led to doc updates. The team now focuses almost entirely on complex, relationship-sensitive tickets. The admin has re-indexed the docs twice as the product has evolved, taking under 5 minutes each time.",
    tags: ["OpenAI GPT-4", "LangChain", "FastAPI", "Next.js", "Python", "Pinecone"],
    features: ["RAG pipeline on custom documentation", "Confidence-based escalation to human", "In-chat human handoff flow", "Embeddable widget (1 script tag)", "Admin panel with conversation logs", "Doc re-indexing without developer help"],
  },
  {
    id: 7,
    emoji: "📸",
    name: "LensWork",
    type: "Photography Portfolio",
    tagline: "Minimal portfolio site for a professional photographer",
    bg: "#FFF7ED",
    border: "#FB923C",
    color: "#EA580C",
    duration: "8 days",
    platform: "Web",
    industry: "Photography",
    overview: "LensWork was built for a freelance photographer in Toronto who had been sharing work through Instagram alone. She needed a professional online home she could send to clients and agencies — something that looked as good as her photos.",
    challenge: "The photographer had tried Squarespace but found the templates too generic and the loading too slow for high-resolution images. She wanted something that put her photography front and centre without any visual clutter, and that she could update herself after handover.",
    approach: "We designed a minimal, full-bleed layout where the photos do all the talking. Images are served through Cloudinary with automatic WebP conversion and lazy loading so the site stays fast even with large files. A Sanity CMS powers the gallery, allowing her to add, remove, and reorder photos from her phone. The contact page integrates with her existing email so enquiries land directly in her inbox.",
    outcome: "The site launched in 8 days. She updated the gallery herself within the first hour of handover. She has since shared the URL in two agency applications and a commercial pitch deck.",
    tags: ["Next.js", "Sanity CMS", "Cloudinary", "Tailwind CSS"],
    features: ["Full-bleed photo gallery", "Mobile CMS updates", "WebP auto-optimisation", "Project category filtering", "Contact + booking enquiry", "Fast loading on all devices"],
  },
  {
    id: 8,
    emoji: "🏠",
    name: "EstateView",
    type: "Real Estate Platform",
    tagline: "Property listing site with search, filters & agent dashboard",
    bg: "#ECFDF5",
    border: "#34D399",
    color: "#059669",
    duration: "5 weeks",
    platform: "Web",
    industry: "Real Estate",
    overview: "EstateView was built for a mid-sized real estate agency in Bangladesh that was managing listings through Facebook posts and a shared spreadsheet. They needed a proper platform where clients could search properties and agents could manage their listings.",
    challenge: "The agency had 3 agents each posting listings independently on social media, leading to duplicates, outdated information, and no central view. Clients had no way to filter by location, price, or type — they had to scroll through hundreds of Facebook posts. The agency owner had no visibility into which listings were getting interest.",
    approach: "We built a full property listing platform with a public search interface and a private agent dashboard. Agents log in to add and manage their own listings with photo uploads, pricing, and availability status. The search page supports filtering by type, price range, location, and bedrooms. Each listing has a detail page with a photo carousel and a contact form that routes enquiries directly to the responsible agent.",
    outcome: "All three agents migrated their listings onto the platform within the first week. The owner now has a single dashboard showing all active listings, enquiry counts, and agent activity. Clients searching for properties now get a curated, up-to-date experience instead of Facebook scrolling.",
    tags: ["Next.js", "PostgreSQL", "Cloudinary", "Node.js", "TypeScript"],
    features: ["Property search with advanced filters", "Individual agent dashboards", "Photo carousel per listing", "Enquiry routing to agents", "Owner analytics dashboard", "Mobile responsive"],
  },
  {
    id: 9,
    emoji: "🍔",
    name: "QuickServe",
    type: "Food Ordering App",
    tagline: "Mobile app for food ordering, tracking & kitchen management",
    bg: "#FEF2F2",
    border: "#F87171",
    color: "#DC2626",
    duration: "5 weeks",
    platform: "iOS & Android",
    industry: "Food & Beverage",
    overview: "QuickServe was built for a cloud kitchen in Dhaka operating three food brands out of a single location. They were taking orders through phone calls and Facebook DMs, which was chaotic at peak hours and error-prone.",
    challenge: "Managing orders across three brands simultaneously through informal channels meant orders were missed, wrong items were sent, and the kitchen had no real-time visibility into what was coming in. Peak hours were stressful and the brand reputation was suffering from order errors.",
    approach: "We built a customer-facing Flutter app where users browse menus, place orders, and track delivery in real time. A separate kitchen display app shows incoming orders sorted by brand and urgency. Order state (received, preparing, ready, out for delivery) is managed through Firebase Realtime Database so all screens update instantly. The owner has a web dashboard for reviewing daily order history and revenue per brand.",
    outcome: "The kitchen adopted the system fully within 3 days. Order errors dropped significantly once the kitchen display replaced verbal communication. The three brands now operate clearly separated order streams from a single kitchen.",
    tags: ["Flutter", "Firebase", "Node.js", "Google Maps API", "Dart"],
    features: ["Multi-brand menu & ordering", "Real-time order tracking", "Kitchen display system", "Delivery status updates", "Push notifications", "Owner revenue dashboard"],
  },
  {
    id: 10,
    emoji: "🎓",
    name: "LearnLoop",
    type: "EdTech Platform",
    tagline: "Online learning platform with courses, video lessons & progress tracking",
    bg: "#EFF6FF",
    border: "#60A5FA",
    color: "#2563EB",
    duration: "6 weeks",
    platform: "Web",
    industry: "EdTech",
    overview: "LearnLoop was built for an independent educator in Egypt who had been selling online courses through Gumroad and sharing video links manually. She wanted a branded platform where students could learn progressively and she could track their progress.",
    challenge: "Selling through Gumroad meant the educator had no relationship with her students — she couldn't see who had watched what, couldn't send targeted follow-ups, and had no way to build a community. Students had no sense of progression and drop-off rates were high after the first few lessons.",
    approach: "We built a course platform on Next.js where the educator can create structured courses with modules and video lessons. Video is hosted on Mux for adaptive streaming. Students have accounts with progress tracking and completion badges. The educator's dashboard shows per-student progress, completion rates per lesson, and revenue by course. Stripe handles one-time and subscription payment models.",
    outcome: "The educator launched her first course on the platform with an existing audience. The progress tracking and completion badges visibly increased engagement compared to her previous setup. She has since added two more courses independently using the content management tools.",
    tags: ["Next.js", "Mux Video", "Stripe", "PostgreSQL", "Prisma"],
    features: ["Structured course & module builder", "Adaptive video streaming via Mux", "Student progress tracking", "Completion certificates", "Stripe one-time & subscription", "Educator analytics dashboard"],
  },
  {
    id: 11,
    emoji: "📊",
    name: "PulseHR",
    type: "HR Management System",
    tagline: "Internal HR tool for leave management, payroll tracking & org structure",
    bg: "#F5F3FF",
    border: "#A78BFA",
    color: "#7C3AED",
    duration: "8 weeks",
    platform: "Web Application",
    industry: "HR / Operations",
    overview: "PulseHR was built for a 60-person company in Nigeria that was managing HR entirely through spreadsheets and WhatsApp groups. Leave requests, payroll calculations, and org charts were all manual — consuming significant time from a 2-person HR team.",
    challenge: "The HR team was spending most of their time on administrative tasks that could be automated. Leave approvals required WhatsApp messages to managers, payroll required manually checking spreadsheets, and there was no self-service option for employees to view their own data. With the company growing, the manual process was becoming unsustainable.",
    approach: "We built a role-based HR platform with three access levels: employee, manager, and HR admin. Employees can apply for leave, view their remaining days, and see payslips. Managers get a dashboard to approve or reject requests for their team. HR admin can manage the full org chart, run payroll calculations, export reports, and manage employee records. Everything runs on a PostgreSQL database with an audit trail of all HR actions.",
    outcome: "The HR team reported a dramatic reduction in WhatsApp-based admin in the first month. Leave approvals now happen through the platform with email notifications. The company has since grown to 80 people without adding HR headcount.",
    tags: ["React", "Node.js", "PostgreSQL", "TypeScript", "Resend"],
    features: ["Employee self-service portal", "Leave request & approval flow", "Manager approval dashboard", "Payroll calculation & payslips", "Org chart with hierarchy", "HR audit trail & reporting"],
  },
  {
    id: 12,
    emoji: "🔐",
    name: "VaultPass",
    type: "Security Desktop App",
    tagline: "Cross-platform password manager & secure notes app for teams",
    bg: "#FFF1F2",
    border: "#FB7185",
    color: "#E11D48",
    duration: "7 weeks",
    platform: "Desktop (Win/Mac/Linux)",
    industry: "IT Security",
    overview: "VaultPass was built for a small IT consultancy that needed a self-hosted, team-wide password manager they could trust. Commercial tools like 1Password were either too expensive per seat or didn't allow on-premise deployment — which their clients required.",
    challenge: "The team was sharing credentials through encrypted notes and shared spreadsheets — neither secure nor practical. Several client engagements had been complicated by credential confusion when multiple team members needed access to the same system. A self-hosted solution was non-negotiable for their security policy.",
    approach: "We built a cross-platform desktop app using Tauri (Rust backend, React frontend) for native performance on Windows, macOS, and Linux. All vault data is AES-256 encrypted before leaving the app. The server component is a self-hosted FastAPI backend that the client deploys on their own infrastructure. Team features include shared vaults, access roles, and an audit log of who accessed what and when. The app supports biometric unlock on supported devices.",
    outcome: "The app is deployed on the consultancy's own server and used daily across the full team. The IT lead conducted an internal security review before adoption and confirmed the encryption implementation met their policy requirements. The consultancy has since offered it as an optional tool to two of their enterprise clients.",
    tags: ["Tauri", "React", "Rust", "FastAPI", "Python", "AES-256"],
    features: ["AES-256 encrypted local vault", "Self-hosted server deployment", "Shared team vaults with roles", "Biometric unlock support", "Full audit log of access events", "Cross-platform: Windows, macOS, Linux"],
  },
];

function Modal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 lg:p-8"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Panel */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.97 }}
        transition={{ duration: 0.4, ease: "easeOut" as const }}
        className="relative z-10 w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl border-2 bg-white"
        style={{ borderColor: project.border, boxShadow: `0 24px 80px rgba(0,0,0,0.25), 0 0 0 1px ${project.border}30` }}
      >
        {/* ── Hero Header ──────────────────────────────────────────── */}
        <div className="relative overflow-hidden rounded-t-3xl sm:rounded-t-3xl" style={{ background: project.bg }}>
          {/* Subtle hex pattern overlay */}
          <div className="absolute inset-0 hex-bg opacity-20" aria-hidden />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm border-2 flex items-center justify-center transition-all hover:bg-white hover:scale-110"
            style={{ borderColor: `${project.color}50` }}
            aria-label="Close"
          >
            <X size={15} style={{ color: project.color }} />
          </button>

          <div className="relative z-10 px-5 pt-7 pb-5 sm:px-7 sm:pt-9 sm:pb-7">
            {/* Type badge */}
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.18em] px-3 py-1 rounded-full border-2 mb-5"
              style={{ borderColor: `${project.color}55`, color: project.color, background: `${project.color}12` }}>
              {project.type}
            </span>

            {/* Emoji + Name */}
            <div className="flex items-center gap-4 mb-3">
              <span className="text-5xl drop-shadow-sm">{project.emoji}</span>
              <h3 className="font-display font-black text-[1.75rem] leading-tight text-txt">{project.name}</h3>
            </div>

            {/* Tagline */}
            <p className="text-[15px] font-semibold leading-snug mb-6 max-w-lg" style={{ color: `${project.color}BB` }}>
              {project.tagline}
            </p>

            {/* Metadata pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { icon: "⏱", label: "Duration", val: project.duration },
                { icon: "📱", label: "Platform", val: project.platform },
                { icon: "🏷", label: "Industry", val: project.industry },
              ].map((m) => (
                <div key={m.label}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/75 border-2"
                  style={{ borderColor: `${project.color}30` }}>
                  <span className="text-sm leading-none">{m.icon}</span>
                  <div>
                    <p className="text-[8px] font-black uppercase tracking-widest leading-none mb-0.5" style={{ color: `${project.color}80` }}>{m.label}</p>
                    <p className="text-[11px] font-black leading-none" style={{ color: project.color }}>{m.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Body ─────────────────────────────────────────────────── */}
        <div className="bg-white px-5 py-6 sm:px-7 sm:py-8 flex flex-col gap-8">

          {/* Overview — lead paragraph */}
          <p className="text-[15px] text-txt leading-relaxed font-medium border-l-[3px] pl-5"
            style={{ borderColor: project.color }}>
            {project.overview}
          </p>

          {/* Challenge & Approach — numbered */}
          {[
            { num: "01", label: "The Challenge", text: project.challenge },
            { num: "02", label: "Our Approach",  text: project.approach  },
          ].map((s) => (
            <div key={s.num} className="flex gap-5">
              <span className="font-display font-black text-[2rem] leading-none shrink-0 mt-0.5 select-none"
                style={{ color: `${project.color}20` }}>
                {s.num}
              </span>
              <div>
                <h4 className="font-display font-black text-[15px] text-txt mb-2">{s.label}</h4>
                <p className="text-sm text-txt-2 leading-relaxed">{s.text}</p>
              </div>
            </div>
          ))}

          {/* Outcome — highlighted callout */}
          <div className="rounded-2xl p-6 border-2" style={{ background: project.bg, borderColor: `${project.color}45` }}>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-display font-black text-[2rem] leading-none select-none"
                style={{ color: `${project.color}22` }}>03</span>
              <h4 className="font-display font-black text-[15px]" style={{ color: project.color }}>The Outcome</h4>
            </div>
            <p className="text-sm leading-relaxed font-medium text-txt">{project.outcome}</p>
          </div>

          {/* Features delivered */}
          <div>
            <h4 className="font-display font-black text-xs uppercase tracking-[0.15em] text-txt mb-4">Key Features Delivered</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((f) => (
                <div key={f}
                  className="flex items-start gap-3 rounded-xl px-4 py-3 border-2"
                  style={{ background: project.bg, borderColor: `${project.color}28` }}>
                  <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[11px] font-black mt-px"
                    style={{ background: project.color, color: "white" }}>✓</span>
                  <span className="text-[13px] text-txt font-semibold leading-snug">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech stack */}
          <div>
            <h4 className="font-display font-black text-xs uppercase tracking-[0.15em] text-txt mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span key={t}
                  className="text-[12px] font-bold font-mono px-3.5 py-1.5 rounded-xl border-2"
                  style={{ borderColor: `${project.color}50`, color: project.color, background: project.bg }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a href="#contact"
            onClick={onClose}
            className="btn-cartoon w-full py-4 text-sm justify-center inline-flex items-center gap-2 rounded-2xl mt-1">
            Build something similar <ArrowUpRight size={15} />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function FeaturedWork() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="work" className="py-24 bg-surface px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="section-pill mb-4">Our Work</span>
          <h2 className="font-display font-black text-4xl lg:text-5xl tracking-tight text-txt mt-4">
            Work That <span className="gradient-text">Speaks for Itself</span>
          </h2>
          <p className="text-txt-2 mt-3 text-sm max-w-md mx-auto leading-relaxed">
            Real problems. Real solutions. Click any project to read the full story.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.button
                key={p.id}
                layout
                onClick={() => setSelected(p)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" as const }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative flex flex-col items-center gap-3 rounded-2xl border-2 p-5 text-center cursor-pointer group"
                style={{ background: p.bg, borderColor: p.border, boxShadow: `3px 5px 0px ${p.border}55` }}
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                  className="text-4xl"
                >
                  {p.emoji}
                </motion.div>
                <div>
                  <p className="font-display font-black text-base text-txt leading-tight">{p.name}</p>
                  <p className="text-[11px] font-black uppercase tracking-widest mt-0.5" style={{ color: p.color }}>{p.type}</p>
                </div>
                <span className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: p.color }}>
                  <ArrowUpRight size={14} />
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>

        {/* See more / less */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <button
            onClick={() => setShowAll((v) => !v)}
            className="btn-outline px-8 py-3 text-sm inline-flex items-center gap-2"
          >
            {showAll ? "Show less ↑" : `See all ${projects.length} projects ↓`}
          </button>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
