"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Globe, LayoutDashboard, Smartphone, Monitor, Zap, Bot, Palette, TrendingUp } from "lucide-react";

/* ─── Types ──────────────────────────────────────────────────────────────────── */
interface Slide {
  src?: string;   // real image URL — leave undefined to show gradient placeholder
  g1: string;     // gradient start (placeholder only)
  g2: string;     // gradient end   (placeholder only)
}

interface ServiceItem {
  icon:    React.ElementType;
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
    icon: Globe, title: "Website",
    desc: "Lightning-fast, SEO-optimised websites. From landing pages to complex portals.",
    tag: "Popular", accent: "#F5A623", stripBg: "#FFF3D9",
    slides: [
      { src: "/images/1.png", g1: "#F5A623", g2: "#FFD580" },
      { src: "/images/2.png", g1: "#D4891A", g2: "#F5A623" },
    ],
  },
  {
    icon: LayoutDashboard, title: "Web Application",
    desc: "Full-stack apps with real-time features, auth, dashboards and custom logic.",
    tag: null, accent: "#F5A623", stripBg: "#FFF3D9",
    slides: [
      { src: "/images/3.png", g1: "#3B82F6", g2: "#93C5FD" },
      { src: "/images/4.png", g1: "#1D4ED8", g2: "#3B82F6" },
    ],
  },
  {
    icon: Smartphone, title: "Mobile App",
    desc: "Cross-platform iOS & Android apps with native feel — Flutter or React Native.",
    tag: null, accent: "#F5A623", stripBg: "#FFF3D9",
    slides: [
      { src: "/images/5.png", g1: "#8B5CF6", g2: "#C4B5FD" },
      { src: "/images/6.png", g1: "#6D28D9", g2: "#8B5CF6" },
    ],
  },
  {
    icon: Monitor, title: "Desktop App",
    desc: "Windows, macOS & Linux software. Electron, Tauri or native — we cover it.",
    tag: null, accent: "#F5A623", stripBg: "#FFF3D9",
    slides: [
      { src: "/images/7.png", g1: "#475569", g2: "#94A3B8" },
      { src: "/images/8.png", g1: "#334155", g2: "#475569" },
    ],
  },
  {
    icon: Zap, title: "AI Automation",
    desc: "Automate workflows with AI pipelines — saving your team hours every week.",
    tag: "Trending", accent: "#F5A623", stripBg: "#FFF3D9",
    slides: [
      { src: "/images/9.png",  g1: "#10B981", g2: "#6EE7B7" },
      { src: "/images/10.png", g1: "#059669", g2: "#10B981" },
    ],
  },
  {
    icon: Bot, title: "AI Chatbot",
    desc: "Intelligent bots for customer support, lead capture & internal tools.",
    tag: "Trending", accent: "#F5A623", stripBg: "#FFF3D9",
    slides: [
      { src: "/images/11.png", g1: "#06B6D4", g2: "#67E8F9" },
      { g1: "#0891B2", g2: "#06B6D4" },
    ],
  },
  {
    icon: Palette, title: "UI/UX Design",
    desc: "Research-backed designs that convert. Wireframes, prototypes, design systems.",
    tag: null, accent: "#F5A623", stripBg: "#FFF3D9",
    slides: [
      { src: "/images/13.png", g1: "#EC4899", g2: "#F9A8D4" },
      { g1: "#DB2777", g2: "#EC4899" },
    ],
  },
  {
    icon: TrendingUp, title: "Digital Strategy",
    desc: "Tech consulting & road-mapping — build the right thing the first time.",
    tag: null, accent: "#F5A623", stripBg: "#FFF3D9",
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
      className="group relative cursor-default"
      style={{ paddingTop: "20px" }}
    >
      {/* Title badge — straddles the top edge of the card */}
      <div className="absolute top-0 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white"
        style={{ border: "1px solid #E5E7EB", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
        <div className="w-5 h-5 rounded-md shrink-0 flex items-center justify-center"
          style={{ background: s.accent }}>
          <s.icon size={11} color="#fff" strokeWidth={2.5} />
        </div>
        <span className="font-display font-black text-[13px] leading-tight" style={{ color: "#1a1a1a" }}>{s.title}</span>
        {s.tag && (
          <span className="text-[9px] font-black tracking-widest uppercase px-2 py-0.5 rounded-full text-white"
            style={{ background: s.accent }}>
            {s.tag}
          </span>
        )}
      </div>

      {/* Card body */}
      <div className="relative overflow-hidden rounded-2xl"
        style={{
          height: 210,
          border: `1px solid #E5E7EB`,
          boxShadow: `0 2px 14px rgba(0,0,0,0.08)`,
        }}>

        {/* Full-card background — one-time zoom on scroll-in + hover zoom */}
        <motion.div
          className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110"
          style={{ background: bg }}
          initial={{ scale: 1 }}
          whileInView={{ scale: [1, 1.08, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 4, ease: "easeInOut", delay: delay * 0.5 }}
        >
          {slide.src
            ? <img src={slide.src} alt={s.title} className="w-full h-full object-cover" />
            : <div className="w-full h-full" />
          }
        </motion.div>

        {/* Subtle gradient — bottom only */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.65) 55%, rgba(0,0,0,0.15) 100%)" }} />

        {/* Description + CTA — bottom */}
        <div className="absolute inset-x-0 bottom-0 z-10 p-4 flex flex-col gap-1.5">
          <p className="text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>{s.desc}</p>
          <a href="#contact"
            className="inline-flex items-center gap-1 text-xs font-black transition-all duration-200 group-hover:gap-2"
            style={{ color: s.accent }}>
            Get a quote →
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Section ────────────────────────────────────────────────────────────────── */
const headingWords  = ["Every", "Service", "You", "Need."];
const headingWords2 = ["One", "Lean", "Team."];

export default function Services() {
  return (
    <section id="services" className="relative py-16 lg:py-24 bg-white px-8 lg:px-16 border-t border-border">

      <div className="mx-auto max-w-[1440px] relative z-10">

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
