"use client";
import { useState } from "react";
import { motion } from "framer-motion";

/* ─── Types ──────────────────────────────────────────────────────────────────── */
interface Slide {
  src?: string;   // real image URL — leave undefined to show gradient placeholder
  g1: string;     // gradient start (placeholder only)
  g2: string;     // gradient end   (placeholder only)
}

interface ServiceItem {
  icon:    string;
  title:   string;
  desc:    string;
  tag:     string | null;
  accent:  string;   // primary accent colour (tag, dots, glow)
  stripBg: string;   // header strip background
  slides:  Slide[];
}

/* ─── Data ────────────────────────────────────────────────────────────────────
   Replace each slide's `src` with a real image URL when you have them.
   ─────────────────────────────────────────────────────────────────────────── */
const services: ServiceItem[] = [
  {
    icon: "/images/01.png", title: "Website",
    desc: "Lightning-fast, SEO-optimised websites. From landing pages to complex portals.",
    tag: "Popular", accent: "#F5A623", stripBg: "#FFF3D9",
    slides: [
      { src: "/images/1.png", g1: "#F5A623", g2: "#FFD580" },
      { src: "/images/2.png", g1: "#D4891A", g2: "#F5A623" },
    ],
  },
  {
    icon: "/images/02.png", title: "Web Application",
    desc: "Full-stack apps with real-time features, auth, dashboards and custom logic.",
    tag: null, accent: "#3B82F6", stripBg: "#EFF6FF",
    slides: [
      { src: "/images/3.png", g1: "#3B82F6", g2: "#93C5FD" },
      { src: "/images/4.png", g1: "#1D4ED8", g2: "#3B82F6" },
    ],
  },
  {
    icon: "/images/03.png", title: "Mobile App",
    desc: "Cross-platform iOS & Android apps with native feel — Flutter or React Native.",
    tag: null, accent: "#8B5CF6", stripBg: "#F5F3FF",
    slides: [
      { src: "/images/5.png", g1: "#8B5CF6", g2: "#C4B5FD" },
      { src: "/images/6.png", g1: "#6D28D9", g2: "#8B5CF6" },
    ],
  },
  {
    icon: "/images/04.png", title: "Desktop App",
    desc: "Windows, macOS & Linux software. Electron, Tauri or native — we cover it.",
    tag: null, accent: "#475569", stripBg: "#F1F5F9",
    slides: [
      { src: "/images/7.png", g1: "#475569", g2: "#94A3B8" },
      { src: "/images/8.png", g1: "#334155", g2: "#475569" },
    ],
  },
  {
    icon: "/images/05.png", title: "AI Automation",
    desc: "Automate workflows with AI pipelines — saving your team hours every week.",
    tag: "Trending", accent: "#10B981", stripBg: "#ECFDF5",
    slides: [
      { src: "/images/9.png",  g1: "#10B981", g2: "#6EE7B7" },
      { src: "/images/10.png", g1: "#059669", g2: "#10B981" },
    ],
  },
  {
    icon: "/images/06.png", title: "AI Chatbot",
    desc: "Intelligent bots for customer support, lead capture & internal tools.",
    tag: "Trending", accent: "#06B6D4", stripBg: "#ECFEFF",
    slides: [
      { src: "/images/11.png", g1: "#06B6D4", g2: "#67E8F9" },
      { g1: "#0891B2", g2: "#06B6D4" },
    ],
  },
  {
    icon: "/images/07.png", title: "UI/UX Design",
    desc: "Research-backed designs that convert. Wireframes, prototypes, design systems.",
    tag: null, accent: "#EC4899", stripBg: "#FDF2F8",
    slides: [
      { src: "/images/13.png", g1: "#EC4899", g2: "#F9A8D4" },
      { g1: "#DB2777", g2: "#EC4899" },
    ],
  },
  {
    icon: "/images/08.png", title: "Digital Strategy",
    desc: "Tech consulting & road-mapping — build the right thing the first time.",
    tag: null, accent: "#F97316", stripBg: "#FFF7ED",
    slides: [
      { src: "/images/15.png", g1: "#F97316", g2: "#FED7AA" },
      { g1: "#EA580C", g2: "#F97316" },
    ],
  },
];

/* ─── Card Visual ────────────────────────────────────────────────────────────── */
function CardVisual({ slide, accent, icon }: {
  slide: Slide;
  accent: string;
  icon: string;
}) {
  const bg = slide.src
    ? undefined
    : `linear-gradient(135deg, ${slide.g1} 0%, ${slide.g2} 100%)`;

  return (
    <div className="relative overflow-hidden rounded-b-3xl" style={{ height: 160 }}>
      <motion.div
        className="absolute inset-0"
        style={{ background: bg }}
        animate={{ scale: [1.05, 1.15, 1.05] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        {slide.src ? (
          <img src={slide.src} alt="" className="w-full h-full object-cover" />
        ) : (
          /* Gradient placeholder — centred icon */
          <div className="w-full h-full flex items-center justify-center">
            <img src={icon} alt="" className="w-12 h-12 object-contain brightness-0 invert opacity-25" />
          </div>
        )}
      </motion.div>

      {/* Accent overlay */}
      {slide.src && (
        <div className="absolute inset-0 opacity-15 mix-blend-multiply" style={{ background: accent }} />
      )}

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-10 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(255,255,255,0.2), transparent)" }} />
    </div>
  );
}

/* ─── Card ───────────────────────────────────────────────────────────────────── */
function ServiceCard({ s, delay }: { s: ServiceItem; delay: number }) {
  const slide = s.slides[0];
  const bg = slide.src ? undefined : `linear-gradient(135deg, ${slide.g1} 0%, ${slide.g2} 100%)`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" as const }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-3xl cursor-default"
      style={{
        height: 300,
        border: `2px solid ${s.accent}35`,
        boxShadow: `4px 6px 0px ${s.accent}40`,
      }}
    >
      {/* Full-card animated background — zoom in/out */}
      <motion.div
        className="absolute inset-0"
        style={{ background: bg }}
        animate={{ scale: [1.05, 1.15, 1.05] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        {slide.src
          ? <img src={slide.src} alt={s.title} className="w-full h-full object-cover" />
          : <div className="w-full h-full" />
        }
      </motion.div>

      {/* Header strip overlay — top */}
      <div className="absolute inset-x-0 top-0 z-10 flex items-center gap-2.5 px-4 py-3"
        style={{ background: `${s.stripBg}e8`, borderBottom: `1px solid ${s.accent}30` }}>
        <div className="w-7 h-7 rounded-lg shrink-0 flex items-center justify-center"
          style={{ background: s.accent, boxShadow: `0 2px 8px ${s.accent}60` }}>
          <img src={s.icon} alt="" className="w-3.5 h-3.5 object-contain brightness-0 invert" />
        </div>
        <h3 className="font-display font-black text-[14px] leading-tight flex-1" style={{ color: "#1a1a1a" }}>{s.title}</h3>
        {s.tag && (
          <span className="text-[9px] font-black tracking-widest uppercase px-2.5 py-0.5 rounded-full text-white shrink-0"
            style={{ background: s.accent, boxShadow: `0 2px 8px ${s.accent}66` }}>
            {s.tag}
          </span>
        )}
      </div>

      {/* Dark gradient — bottom-heavy for text legibility */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0) 70%)" }} />

      {/* Description + CTA — bottom */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-4 flex flex-col gap-1.5">
        <p className="text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.80)" }}>{s.desc}</p>
        <a href="#contact"
          className="inline-flex items-center gap-1 text-xs font-black transition-all duration-200 group-hover:gap-2"
          style={{ color: s.accent }}>
          Get a quote →
        </a>
      </div>
    </motion.div>
  );
}

/* ─── Section ────────────────────────────────────────────────────────────────── */
const headingWords  = ["Every", "Service", "You", "Need."];
const headingWords2 = ["One", "Lean", "Team."];

export default function Services() {
  return (
    <section id="services" className="relative py-14 lg:py-24 bg-surface px-6 lg:px-10">

      {/* Sitting boy on top border */}
      <img
        src="/images/v4.png"
        alt=""
        aria-hidden
        className="absolute hidden lg:block pointer-events-none select-none z-10"
        style={{ bottom: "calc(100% + 180px)", right: "6%", height: 190, width: "auto" }}
      />

      {/* Floating hex decorations */}
      <motion.div
        animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-12 right-8 opacity-20 hidden lg:block pointer-events-none"
      >
        <svg viewBox="0 0 80 92" fill="none" width="80">
          <path d="M40 4L74 22V58L40 76L6 58V22L40 4Z" fill="#F5A623" stroke="#F5A623" strokeWidth="2"/>
        </svg>
      </motion.div>
      <motion.div
        animate={{ y: [0, 14, 0], rotate: [0, -6, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-16 left-6 opacity-15 hidden lg:block pointer-events-none"
      >
        <svg viewBox="0 0 60 69" fill="none" width="60">
          <path d="M30 3L55 17V45L30 59L5 45V17L30 3Z" fill="#F5A623" stroke="#F5A623" strokeWidth="2"/>
        </svg>
      </motion.div>

      {/* Sparkle stars */}
      {([
        { top: "8%",  left: "5%",   size: 14, delay: 0   },
        { top: "20%", right: "4%",  size: 10, delay: 0.8 },
        { top: "70%", right: "7%",  size: 12, delay: 1.6 },
        { top: "85%", left: "12%",  size: 8,  delay: 0.4 },
      ] as { top: string; left?: string; right?: string; size: number; delay: number }[]).map((s, i) => (
        <motion.div key={i}
          animate={{ opacity: [1, 0.3, 1], scale: [1, 0.6, 1], rotate: [0, 45, 0] }}
          transition={{ duration: 2.5 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: s.delay }}
          className="absolute hidden lg:block pointer-events-none"
          style={{ top: s.top, left: s.left, right: s.right }}
        >
          <svg viewBox="0 0 20 20" fill="none" width={s.size}>
            <line x1="10" y1="0"  x2="10" y2="20" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="0"  y1="10" x2="20" y2="10" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="3"  y1="3"  x2="17" y2="17" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
            <line x1="17" y1="3"  x2="3"  y2="17" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
          </svg>
        </motion.div>
      ))}

      <div className="mx-auto max-w-7xl relative z-10">

        {/* Section header */}
        <div className="mb-10 lg:mb-14 text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="section-pill mb-4"
          >
            What We Build
          </motion.span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-txt mt-4">
            {headingWords.map((word, i) => (
              <motion.span key={word}
                initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.09, ease: "easeOut" as const }}
                className="inline-block mr-[0.2em]"
              >
                {word}
              </motion.span>
            ))}{" "}
            {headingWords2.map((word, i) => (
              <motion.span key={word}
                initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.37 + i * 0.09, ease: "easeOut" as const }}
                className="inline-block mr-[0.2em] gradient-text"
              >
                {word}
              </motion.span>
            ))}
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.55 }}
            className="text-txt-2 mt-4 max-w-lg mx-auto leading-relaxed text-sm"
          >
            From a landing page to a full AI system — designed, built, and shipped by one team.
            No outsourcing, no handoffs, no excuses.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.title} s={s} delay={i * 0.07} />
          ))}
        </div>

      </div>
    </section>
  );
}
