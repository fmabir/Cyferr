"use client";
import { useState, useEffect, useRef } from "react";
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
    icon: "/images/01.png", title: "Web Development",
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
      { g1: "#06B6D4", g2: "#67E8F9" },
      { g1: "#0891B2", g2: "#06B6D4" },
    ],
  },
  {
    icon: "/images/07.png", title: "UI/UX Design",
    desc: "Research-backed designs that convert. Wireframes, prototypes, design systems.",
    tag: null, accent: "#EC4899", stripBg: "#FDF2F8",
    slides: [
      { g1: "#EC4899", g2: "#F9A8D4" },
      { g1: "#DB2777", g2: "#EC4899" },
    ],
  },
  {
    icon: "/images/08.png", title: "Digital Strategy",
    desc: "Tech consulting & road-mapping — build the right thing the first time.",
    tag: null, accent: "#F97316", stripBg: "#FFF7ED",
    slides: [
      { g1: "#F97316", g2: "#FED7AA" },
      { g1: "#EA580C", g2: "#F97316" },
    ],
  },
];

/* ─── Image Slider ───────────────────────────────────────────────────────────── */
function ImageSlider({ slides, accent }: { slides: Slide[]; accent: string }) {
  const [idx, setIdx]       = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx(i => (i + 1) % slides.length), 3000);
    return () => clearInterval(t);
  }, [paused, slides.length]);

  const go = (next: number) =>
    setIdx(((next % slides.length) + slides.length) % slides.length);

  return (
    <div
      className="relative overflow-hidden rounded-b-3xl"
      style={{ height: 156 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={e => { touchX.current = e.touches[0].clientX; }}
      onTouchEnd={e => {
        if (touchX.current === null) return;
        const d = touchX.current - e.changedTouches[0].clientX;
        if (Math.abs(d) > 40) go(idx + (d > 0 ? 1 : -1));
        touchX.current = null;
      }}
    >
      {/* Sliding strip */}
      <div
        className="flex h-full"
        style={{
          width: `${slides.length * 100}%`,
          transform: `translateX(-${(idx * 100) / slides.length}%)`,
          transition: "transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="h-full relative overflow-hidden"
            style={{ width: `${100 / slides.length}%` }}
          >
            {slide.src ? (
              <img
                src={slide.src}
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            ) : (
              /* Gradient placeholder — remove once real images are provided */
              <div
                className="w-full h-full transition-transform duration-700 group-hover:scale-110 relative"
                style={{ background: `linear-gradient(135deg, ${slide.g1} 0%, ${slide.g2} 100%)` }}
              >
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg,transparent,transparent 20px,rgba(255,255,255,.35) 20px,rgba(255,255,255,.35) 21px)," +
                      "repeating-linear-gradient(90deg,transparent,transparent 20px,rgba(255,255,255,.35) 20px,rgba(255,255,255,.35) 21px)",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/30 text-[10px] font-black uppercase tracking-[0.2em]">
                    Image {i + 1}
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-2.5 inset-x-0 flex justify-center gap-1.5 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            style={{
              width: i === idx ? 18 : 6,
              height: 6,
              borderRadius: 99,
              background: i === idx ? "#fff" : "rgba(255,255,255,0.45)",
              transition: "width 0.3s ease, background 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Border style demo — 4 options, 2 cards each ───────────────────────────
   Once you pick a style, tell Claude which letter (A/B/C/D) and it will
   apply that one to all 8 cards and remove this demo code.
   ─────────────────────────────────────────────────────────────────────────── */
function getBorderStyle(accent: string, hovered: boolean) {
  return {
    border: "1.5px solid rgba(240,221,176,0.45)",
    borderBottom: `6px solid ${accent}`,
    boxShadow: hovered
      ? `0 20px 50px ${accent}28, 0 6px 18px rgba(0,0,0,0.08)`
      : "0 4px 14px rgba(0,0,0,0.06)",
  };
}

/* ─── Icon top designs — 4 styles, pick one ─────────────────────────────────
   A (0,1): White box float — clean, minimal
   B (2,3): Filled accent circle — bold, colourful
   C (4,5): Glassmorphism panel — frosted, premium
   D (6,7): Bare icon, no container — ultra minimal, editorial
   ─────────────────────────────────────────────────────────────────────────── */
function FloatingIcon({ style, icon, accent, title, hovered }: {
  style: "A" | "B" | "C" | "D";
  icon: string;
  accent: string;
  title: string;
  hovered: boolean;
}) {
  const lift = `translateX(-50%) ${hovered ? "translateY(-6px) scale(1.1)" : "translateY(0) scale(1)"}`;

  if (style === "A") return (
    <div className="absolute top-0 left-1/2 z-20" style={{ transform: lift, transition: "transform 0.35s ease" }}>
      <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center"
        style={{
          border: `1.5px solid ${accent}30`,
          boxShadow: hovered ? `0 14px 36px ${accent}50, 0 4px 12px rgba(0,0,0,0.1)` : `0 6px 20px ${accent}28, 0 2px 8px rgba(0,0,0,0.07)`,
          transition: "box-shadow 0.35s ease",
        }}>
        <img src={icon} alt={title} className="w-9 h-9 object-contain" />
      </div>
    </div>
  );

  if (style === "B") return (
    <div className="absolute top-0 left-1/2 z-20" style={{ transform: lift, transition: "transform 0.35s ease" }}>
      <div className="w-16 h-16 rounded-full flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, ${accent}, ${accent}99)`,
          boxShadow: hovered ? `0 14px 36px ${accent}70, 0 0 0 4px ${accent}20` : `0 6px 22px ${accent}50, 0 0 0 3px ${accent}15`,
          transition: "box-shadow 0.35s ease",
        }}>
        <img src={icon} alt={title} className="w-9 h-9 object-contain brightness-0 invert" />
      </div>
    </div>
  );

  if (style === "C") return (
    <div className="absolute top-0 left-1/2 z-20" style={{ transform: lift, transition: "transform 0.35s ease" }}>
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
        style={{
          background: "rgba(255,255,255,0.55)",
          backdropFilter: "blur(12px)",
          border: `2px solid transparent`,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.6),rgba(255,255,255,0.6)) padding-box, linear-gradient(135deg,${accent},${accent}44) border-box`,
          boxShadow: hovered ? `0 14px 36px ${accent}40, 0 4px 16px rgba(0,0,0,0.12)` : `0 6px 22px ${accent}22, 0 2px 8px rgba(0,0,0,0.08)`,
          transition: "box-shadow 0.35s ease",
        }}>
        <img src={icon} alt={title} className="w-9 h-9 object-contain" />
      </div>
    </div>
  );

  // D — bare icon, no container, just layered glow rings
  return (
    <div className="absolute top-0 left-1/2 z-20" style={{ transform: lift, transition: "transform 0.35s ease" }}>
      <div className="relative w-16 h-16 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full opacity-20" style={{ background: accent, filter: "blur(10px)", transform: "scale(1.3)" }} />
        <div className="absolute inset-1 rounded-full opacity-10" style={{ background: accent }} />
        <img src={icon} alt={title} className="w-10 h-10 object-contain relative z-10 drop-shadow-lg" />
      </div>
    </div>
  );
}

function getTitleBlock(style: "A" | "B" | "C" | "D", title: string, accent: string) {
  if (style === "A") return (
    <div className="pt-10 px-5 pb-2 text-center">
      <h3 className="font-display font-black text-[15px] text-txt leading-snug">{title}</h3>
      <div className="mx-auto mt-1.5 rounded-full" style={{ width: 28, height: 2.5, background: accent, opacity: 0.7 }} />
    </div>
  );
  if (style === "B") return (
    <div className="pt-10 px-5 pb-2 text-center">
      <h3 className="font-display font-black text-[15px] leading-snug" style={{ color: accent }}>{title}</h3>
    </div>
  );
  if (style === "C") return (
    <div className="pt-10 px-5 pb-2 text-center">
      <h3 className="font-display font-black text-[15px] text-txt leading-snug">{title}</h3>
      <div className="mx-auto mt-1.5 rounded-full" style={{ width: 40, height: 1.5, background: `linear-gradient(90deg,transparent,${accent},transparent)` }} />
    </div>
  );
  // D
  return (
    <div className="pt-10 px-5 pb-2 text-center">
      <h3 className="font-display font-black text-[15px] text-txt leading-snug tracking-tight">{title}</h3>
      <span className="inline-block mt-1 text-[10px] font-black uppercase tracking-[0.18em]" style={{ color: `${accent}99` }}>● ● ●</span>
    </div>
  );
}

/* ─── Card ───────────────────────────────────────────────────────────────────── */
function ServiceCard({ s, delay }: { s: ServiceItem; delay: number }) {
  const [hovered, setHovered] = useState(false);
  const { border, borderBottom, boxShadow } = getBorderStyle(s.accent, hovered);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" as const }}
      whileHover={{ y: -8 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative cursor-default"
      style={{ paddingTop: "2rem" }}
    >
      {/* Floating icon — Style C: glassmorphism */}
      <FloatingIcon style="C" icon={s.icon} accent={s.accent} title={s.title} hovered={hovered} />

      {/* Card body */}
      <div className="flex flex-col rounded-3xl overflow-hidden bg-white"
        style={{ border, borderBottom, boxShadow, transition: "box-shadow 0.35s ease" }}>

        {s.tag && (
          <span className="absolute top-10 right-3 z-10 text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full text-white"
            style={{ background: s.accent, boxShadow: `0 2px 10px ${s.accent}55` }}>
            {s.tag}
          </span>
        )}

        {getTitleBlock("C", s.title, s.accent)}

        <div className="flex flex-col gap-3 px-5 py-4 flex-1">
          <p className="text-[12.5px] text-txt-2 leading-relaxed">{s.desc}</p>
          <a href="#contact" className="mt-auto inline-flex items-center gap-1 text-xs font-black" style={{ color: s.accent }}>
            <span className="transition-transform duration-200 group-hover:translate-x-1">Get a quote →</span>
          </a>
        </div>

        <ImageSlider slides={s.slides} accent={s.accent} />
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
