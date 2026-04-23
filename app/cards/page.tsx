"use client";
import { motion } from "framer-motion";

const services = [
  { icon: "/images/01.png", img: "/images/1.png",  title: "Web Applications",      tag: "Web · Next.js",        color: "#F5A623", bg: "#FFF7E6", desc: "Fast, scalable web apps from MVP to enterprise.", points: ["SEO-optimised", "Sub-2s load time", "Mobile-first"] },
  { icon: "/images/02.png", img: "/images/3.png",  title: "Mobile Apps",            tag: "Flutter · React Native",color: "#6366F1", bg: "#EEF2FF", desc: "Cross-platform iOS & Android apps that feel native.", points: ["App Store ready", "Offline-first", "Push notifications"] },
  { icon: "/images/03.png", img: "/images/5.png",  title: "UI / UX Design",         tag: "Figma · Framer",       color: "#10B981", bg: "#ECFDF5", desc: "Conversion-focused interfaces, every pixel earns its place.", points: ["Interactive prototypes", "Design system", "Handoff-ready"] },
  { icon: "/images/04.png", img: "/images/7.png",  title: "AI & Automation",        tag: "OpenAI · LangChain",   color: "#3B82F6", bg: "#EFF6FF", desc: "GPT pipelines and automation saving real hours weekly.", points: ["RAG & fine-tuning", "API integrations", "ROI month 1"] },
  { icon: "/images/05.png", img: "/images/9.png",  title: "E-commerce",             tag: "Shopify · Stripe",     color: "#EC4899", bg: "#FDF2F8", desc: "Stores built to convert with seamless checkout flows.", points: ["One-page checkout", "Inventory mgmt", "Multi-currency"] },
  { icon: "/images/06.png", img: "/images/11.png", title: "Backend & APIs",         tag: "Node.js · PostgreSQL", color: "#F59E0B", bg: "#FFFBEB", desc: "Robust REST and GraphQL APIs built to scale.", points: ["99.9% uptime", "JWT & OAuth2", "Rate limiting"] },
  { icon: "/images/07.png", img: "/images/13.png", title: "Cloud & DevOps",         tag: "AWS · Docker · Vercel",color: "#8B5CF6", bg: "#F5F3FF", desc: "CI/CD pipelines and cloud infra that stays live.", points: ["Auto deployments", "Auto-scaling", "24h monitoring"] },
  { icon: "/images/08.png", img: "/images/15.png", title: "Strategy & Consulting",  tag: "Discovery · Roadmap",  color: "#14B8A6", bg: "#F0FDFA", desc: "Tech audits and roadmaps from founders who shipped.", points: ["Free 30-min audit", "Written roadmap", "NDA available"] },
];

function Label({ letter, title, sub }: { letter: string; title: string; sub: string }) {
  return (
    <div className="mb-5">
      <div className="flex items-center gap-3 mb-1">
        <span className="w-7 h-7 rounded-full bg-[#0A0A0A] text-white text-xs font-black flex items-center justify-center">{letter}</span>
        <p className="font-black text-base text-[#0A0A0A]">{title}</p>
      </div>
      <p className="text-xs text-[#9CA3AF] ml-10">{sub}</p>
    </div>
  );
}

/* ── F: Glassmorphism Dark ───────────────────────────────────── */
function StyleF() {
  return (
    <div>
      <Label letter="F" title="Glassmorphism Dark" sub="Full-bleed image, frosted glass content panel at bottom, icon in circle" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((s, i) => (
          <motion.div key={i} whileHover={{ y: -6, scale: 1.02 }}
            className="relative rounded-2xl overflow-hidden cursor-default"
            style={{ height: 240 }}>
            <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover" />
            {/* Glass panel */}
            <div className="absolute bottom-0 inset-x-0 p-4"
              style={{ background: "rgba(10,10,10,0.65)", backdropFilter: "blur(12px)", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: s.color, boxShadow: `0 0 16px ${s.color}88` }}>
                  <img src={s.icon} alt="" className="w-5 h-5 object-contain brightness-0 invert" />
                </div>
                <div>
                  <p className="font-black text-sm text-white leading-tight">{s.title}</p>
                  <p className="text-[10px] font-semibold mt-0.5" style={{ color: s.color }}>{s.tag}</p>
                </div>
              </div>
              <p className="text-[11px] text-white/60 leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ── G: Outlined / Border Accent ────────────────────────────── */
function StyleG() {
  return (
    <div>
      <Label letter="G" title="Outlined Border Accent" sub="White card, thick colored left border, icon floats on image thumbnail" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((s, i) => (
          <motion.div key={i} whileHover={{ x: 4, boxShadow: `4px 0 0 ${s.color}, 0 8px 32px ${s.color}18` }}
            className="flex flex-col gap-0 rounded-2xl bg-white overflow-hidden cursor-default transition-shadow"
            style={{ border: "1.5px solid #E5E7EB", borderLeft: `4px solid ${s.color}` }}>
            {/* Top image + floating icon */}
            <div className="relative h-32 overflow-hidden">
              <img src={s.img} alt="" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${s.color}33, transparent)` }} />
              <div className="absolute top-3 right-3 w-11 h-11 rounded-xl flex items-center justify-center border-2 border-white"
                style={{ background: s.bg, boxShadow: `0 4px 14px ${s.color}44` }}>
                <img src={s.icon} alt="" className="w-6 h-6 object-contain" />
              </div>
            </div>
            {/* Body */}
            <div className="px-4 py-4 flex flex-col gap-2">
              <p className="font-black text-sm text-[#0A0A0A] leading-tight">{s.title}</p>
              <p className="text-[11px] text-[#6B7280] leading-relaxed">{s.desc}</p>
              <div className="flex flex-wrap gap-1 mt-1">
                {s.points.map((pt, j) => (
                  <span key={j} className="text-[9px] font-bold px-2 py-0.5 rounded-full"
                    style={{ background: s.bg, color: s.color }}>✓ {pt}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ── H: Neon Glow Dark ──────────────────────────────────────── */
function StyleH() {
  return (
    <div>
      <Label letter="H" title="Neon Glow Dark" sub="Dark card, glowing icon ring, image as faded texture background" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((s, i) => (
          <motion.div key={i} whileHover={{ y: -5, boxShadow: `0 0 32px ${s.color}44` }}
            className="relative flex flex-col gap-3 p-5 rounded-2xl overflow-hidden cursor-default"
            style={{ background: "#0F0F14", border: `1px solid ${s.color}33` }}>
            {/* Faded image texture */}
            <img src={s.img} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.07] mix-blend-luminosity" />
            {/* Glow blob */}
            <div className="absolute top-0 right-0 w-28 h-28 rounded-full pointer-events-none"
              style={{ background: `radial-gradient(circle, ${s.color}22 0%, transparent 70%)` }} />
            {/* Icon */}
            <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ background: `${s.color}18`, border: `1.5px solid ${s.color}55`, boxShadow: `0 0 20px ${s.color}33` }}>
              <img src={s.icon} alt="" className="w-8 h-8 object-contain" style={{ filter: `drop-shadow(0 0 6px ${s.color})` }} />
            </div>
            <div className="relative flex flex-col gap-1.5">
              <span className="text-[9px] font-black uppercase tracking-widest" style={{ color: s.color }}>{s.tag}</span>
              <p className="font-black text-sm text-white leading-tight">{s.title}</p>
              <p className="text-[11px] leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{s.desc}</p>
            </div>
            <div className="relative flex flex-col gap-1 mt-1">
              {s.points.map((pt, j) => (
                <div key={j} className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full" style={{ background: s.color }} />
                  <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.45)" }}>{pt}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ── I: Magazine / Editorial ────────────────────────────────── */
function StyleI() {
  return (
    <div>
      <Label letter="I" title="Magazine / Editorial" sub="Large image dominates, number index, minimal type below" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((s, i) => (
          <motion.div key={i} whileHover={{ y: -6 }} className="flex flex-col rounded-2xl overflow-hidden bg-white cursor-default"
            style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.08)" }}>
            {/* Image */}
            <div className="relative overflow-hidden" style={{ height: 180 }}>
              <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              {/* Index number */}
              <div className="absolute top-3 left-3 font-display font-black text-4xl leading-none"
                style={{ color: "rgba(255,255,255,0.9)", textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              {/* Icon badge */}
              <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl flex items-center justify-center border-2 border-white"
                style={{ background: s.color, boxShadow: `0 4px 12px ${s.color}66` }}>
                <img src={s.icon} alt="" className="w-5 h-5 object-contain brightness-0 invert" />
              </div>
            </div>
            {/* Footer strip */}
            <div className="flex items-center justify-between px-4 py-3" style={{ borderTop: `3px solid ${s.color}` }}>
              <div>
                <p className="font-black text-xs text-[#0A0A0A] leading-tight">{s.title}</p>
                <p className="text-[9px] font-semibold mt-0.5" style={{ color: s.color }}>{s.tag}</p>
              </div>
              <span className="text-base font-black" style={{ color: s.color }}>→</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ── J: Soft Neumorphic ─────────────────────────────────────── */
function StyleJ() {
  return (
    <div>
      <Label letter="J" title="Soft Neumorphic" sub="Raised card on light grey surface, large icon, no image — stat highlights" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s, i) => (
          <motion.div key={i} whileHover={{ y: -4 }} className="flex flex-col gap-4 p-5 rounded-2xl cursor-default"
            style={{ background: "#F0F2F6", boxShadow: "6px 6px 16px rgba(0,0,0,0.08), -4px -4px 12px rgba(255,255,255,0.9)" }}>
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{ background: "#fff", boxShadow: `4px 4px 10px rgba(0,0,0,0.08), -3px -3px 8px rgba(255,255,255,1), 0 0 0 2px ${s.color}22` }}>
              <img src={s.icon} alt="" className="w-9 h-9 object-contain" />
            </div>
            {/* Text */}
            <div>
              <p className="font-black text-sm text-[#0A0A0A] leading-tight mb-1">{s.title}</p>
              <p className="text-[11px] text-[#6B7280] leading-relaxed">{s.desc}</p>
            </div>
            {/* Inset image strip */}
            <div className="rounded-xl overflow-hidden" style={{ height: 60, boxShadow: "inset 2px 2px 6px rgba(0,0,0,0.08)" }}>
              <img src={s.img} alt="" className="w-full h-full object-cover opacity-70" />
            </div>
            {/* Color tag */}
            <span className="self-start text-[10px] font-black px-3 py-1 rounded-full"
              style={{ background: s.bg, color: s.color, boxShadow: `inset 2px 2px 4px rgba(0,0,0,0.04)` }}>
              {s.tag}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function CardsDemo() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] px-8 lg:px-16 py-12">
      <div className="mx-auto max-w-[1440px]">

        {/* Page header */}
        <div className="mb-12 pb-8 border-b border-[#E5E7EB]">
          <p className="text-xs font-black uppercase tracking-widest text-[#F5A623] mb-2">localhost:3000/cards</p>
          <h1 className="font-display font-black text-4xl text-[#0A0A0A] mb-2">Card Design Demos</h1>
          <p className="text-[#6B7280]">5 new styles — F through J. Tell us which one you want.</p>
        </div>

        <div className="flex flex-col gap-16">
          <StyleF />
          <StyleG />
          <StyleH />
          <StyleI />
          <StyleJ />
        </div>

        <div className="mt-16 pt-8 border-t border-[#E5E7EB] text-center">
          <p className="text-sm text-[#9CA3AF]">← <a href="/" className="text-[#F5A623] font-bold hover:underline">Back to main site</a></p>
        </div>
      </div>
    </div>
  );
}
