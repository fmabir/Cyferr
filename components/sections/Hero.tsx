"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

/* ── Slide 1: Animated Code Editor ─────────────────────────────────────────── */
const CODE_LINES = [
  { tokens: [{ t: "const ", c: "#8B5CF6" }, { t: "app", c: "#F5A623" }, { t: " = ", c: "#9CA3AF" }, { t: "createApp()", c: "#10B981" }] },
  { tokens: [{ t: "  .use(", c: "#9CA3AF" }, { t: "AuthModule", c: "#3B82F6" }, { t: ")", c: "#9CA3AF" }] },
  { tokens: [{ t: "  .use(", c: "#9CA3AF" }, { t: "PaymentsAPI", c: "#3B82F6" }, { t: ")", c: "#9CA3AF" }] },
  { tokens: [{ t: "  .use(", c: "#9CA3AF" }, { t: "AIAssistant", c: "#EC4899" }, { t: ")", c: "#9CA3AF" }] },
  { tokens: [{ t: "  .deploy(", c: "#9CA3AF" }, { t: "\"production\"", c: "#10B981" }, { t: ")", c: "#9CA3AF" }] },
];

const FLOATING_CHIPS = [
  { label: "React",      color: "#61DAFB", x: "88%",  y: "8%",  delay: 0.2 },
  { label: "TypeScript", color: "#3178C6", x: "80%",  y: "78%", delay: 0.5 },
  { label: "Node.js",    color: "#339933", x: "-4%",  y: "72%", delay: 0.8 },
  { label: "AI / ML",    color: "#F5A623", x: "-2%",  y: "14%", delay: 1.1 },
];

function CodeEditorIllustration() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [cursorOn, setCursorOn] = useState(true);

  useEffect(() => {
    setVisibleLines(0);
    const timers: ReturnType<typeof setTimeout>[] = [];
    CODE_LINES.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleLines(i + 1), 400 + i * 500));
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setCursorOn(v => !v), 530);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative w-full max-w-[480px]" style={{ height: 340 }}>
      {/* Floating tech chips */}
      {FLOATING_CHIPS.map((chip, i) => (
        <motion.div key={i}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
          transition={{ opacity: { delay: chip.delay, duration: 0.4 }, scale: { delay: chip.delay, duration: 0.4 }, y: { delay: chip.delay + 0.4, duration: 2.5 + i * 0.4, repeat: Infinity, ease: "easeInOut" } }}
          className="absolute flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-black bg-white border border-border"
          style={{ left: chip.x, top: chip.y, boxShadow: `0 2px 10px ${chip.color}25`, color: chip.color, zIndex: 20 }}
        >
          <span className="w-2 h-2 rounded-full" style={{ background: chip.color }} />
          {chip.label}
        </motion.div>
      ))}

      {/* Editor window */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-x-6 top-8 bottom-4 rounded-2xl overflow-hidden border border-[#2A2A3A]"
        style={{ background: "#0F0F1A", boxShadow: "0 20px 60px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.05)" }}
      >
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1E1E2E]" style={{ background: "#141420" }}>
          <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <span className="w-3 h-3 rounded-full bg-[#28C840]" />
          <span className="ml-3 text-[11px] font-mono" style={{ color: "#4B4B6A" }}>hivetech/app.ts</span>
          <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full font-bold" style={{ background: "#10B98120", color: "#10B981" }}>● live</span>
        </div>

        {/* Line numbers + code */}
        <div className="p-4 font-mono text-sm leading-7">
          {CODE_LINES.map((line, i) => (
            <div key={i} className="flex gap-4"
              style={{ opacity: i < visibleLines ? 1 : 0, transition: "opacity 0.3s" }}>
              <span style={{ color: "#2A2A4A", minWidth: 16, userSelect: "none" }}>{i + 1}</span>
              <span>
                {line.tokens.map((tok, j) => (
                  <span key={j} style={{ color: tok.c }}>{tok.t}</span>
                ))}
                {i === visibleLines - 1 && (
                  <span style={{ borderRight: `2px solid ${cursorOn ? "#F5A623" : "transparent"}`, marginLeft: 1 }}>&nbsp;</span>
                )}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom status bar */}
        <div className="absolute bottom-0 inset-x-0 px-4 py-1.5 flex items-center gap-3 text-[10px] font-mono border-t border-[#1E1E2E]"
          style={{ background: "#0A0A14", color: "#4B4B6A" }}>
          <span style={{ color: "#10B981" }}>✓ TypeScript</span>
          <span>·</span>
          <span>UTF-8</span>
          <span>·</span>
          <motion.span style={{ color: "#F5A623" }}
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}>
            ⬡ HiveTech
          </motion.span>
        </div>
      </motion.div>
    </div>
  );
}

/* ── Slide 2: Simple Column Chart ───────────────────────────────────────────── */
function PriceChartIllustration() {
  const [go, setGo] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setGo(true), 200);
    return () => clearTimeout(t);
  }, []);

  const cols = [
    { label: "Agency", value: "$15k", height: 180, color: "#E5E7EB" },
    { label: "HiveTech", value: "$6k", height: 72, color: "#F5A623" },
  ];

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-[320px]">
      {/* Bars */}
      <div className="flex items-end justify-center gap-10 w-full" style={{ height: 200 }}>
        {cols.map((c, i) => (
          <div key={i} className="relative flex items-end" style={{ height: 180, width: 72 }}>
            {/* Value label pinned just above bar top */}
            <motion.span
              className="absolute font-black text-base w-full text-center"
              style={{ color: i === 1 ? "#F5A623" : "#9CA3AF", bottom: c.height + 8 }}
              initial={{ opacity: 0 }} animate={{ opacity: go ? 1 : 0 }}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.3 }}
            >
              {c.value}
            </motion.span>
            {/* Bar */}
            <motion.div
              className="w-full rounded-t-xl"
              style={{ background: c.color }}
              initial={{ height: 0 }}
              animate={{ height: go ? c.height : 0 }}
              transition={{ delay: 0.1 + i * 0.15, duration: 0.6, ease: [0.34, 1.1, 0.64, 1] }}
            />
          </div>
        ))}
      </div>

      {/* X-axis line */}
      <div className="w-full h-px bg-border" />

      {/* Labels */}
      <div className="flex justify-center gap-16 w-full">
        {cols.map((c, i) => (
          <motion.span
            key={i}
            className="text-xs font-black"
            style={{ color: i === 1 ? "#F5A623" : "#9CA3AF" }}
            initial={{ opacity: 0 }} animate={{ opacity: go ? 1 : 0 }}
            transition={{ delay: 0.7 + i * 0.1, duration: 0.3 }}
          >
            {c.label}
          </motion.span>
        ))}
      </div>

      {/* Save badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: go ? 1 : 0, scale: go ? 1 : 0.8 }}
        transition={{ delay: 1.0, duration: 0.35, type: "spring", stiffness: 200 }}
        className="px-5 py-2 rounded-full font-black text-sm"
        style={{ background: "#FFF7E6", color: "#D4891A", border: "1.5px solid #F5A623" }}
      >
        Save 60% with HiveTech
      </motion.div>
    </div>
  );
}

/* ── Slide 3: Soft UI Dashboard ─────────────────────────────────────────────── */
const NEU_CARD = {
  background: "#FFFFFF",
  borderRadius: 16,
  boxShadow: "6px 6px 16px rgba(0,0,0,0.07), -3px -3px 10px rgba(255,255,255,0.95), inset 0 1px 0 rgba(255,255,255,0.8)",
} as const;

const NEU_RAISED = {
  background: "#F0F2F6",
  borderRadius: 20,
  boxShadow: "inset 3px 3px 8px rgba(0,0,0,0.06), inset -3px -3px 8px rgba(255,255,255,0.9)",
} as const;

function NeuCard({ delay, className, style, children }: {
  delay: number; className?: string; style?: React.CSSProperties; children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -3, boxShadow: "8px 8px 24px rgba(0,0,0,0.10), -4px -4px 14px rgba(255,255,255,1)" }}
      transition={{ default: { duration: 0.42, delay, ease: "easeOut" }, whileHover: { duration: 0.2 } }}
      className={className}
      style={{ ...NEU_CARD, padding: "14px 16px", ...style }}
    >
      {children}
    </motion.div>
  );
}

function FloatingCardsIllustration() {
  return (
    <div className="w-full max-w-[500px]" style={{ ...NEU_RAISED, padding: 14 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "auto auto auto auto", gap: 10 }}>

        {/* ── Card 1: Projects stat (tall, spans 2 rows) ── */}
        <NeuCard delay={0.1} style={{ gridRow: "span 2", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 200 }}>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest mb-3" style={{ color: "#9CA3AF" }}>Delivered</p>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 4 }}>
              <span className="font-display font-black leading-none" style={{ fontSize: 52, color: "#0A0A0A" }}>30</span>
              <span className="font-display font-black text-2xl mb-2" style={{ color: "#F5A623" }}>+</span>
            </div>
            <p className="text-xs font-semibold mt-1" style={{ color: "#6B7280" }}>Projects delivered worldwide</p>
          </div>

          <div style={{ borderTop: "1px solid #F0F0F0", paddingTop: 12, marginTop: 12 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { label: "Countries", value: "5+",  accent: false },
                { label: "On-time",   value: "100%", accent: true  },
              ].map(s => (
                <div key={s.label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span className="text-[10px] font-semibold" style={{ color: "#9CA3AF" }}>{s.label}</span>
                  <span className="font-black text-sm" style={{ color: s.accent ? "#F5A623" : "#0A0A0A" }}>{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </NeuCard>

        {/* ── Card 2: Rating ── */}
        <NeuCard delay={0.2} style={{ background: "#FFFBF2", boxShadow: "6px 6px 16px rgba(245,166,35,0.10), -3px -3px 10px rgba(255,255,255,0.95)" }}>
          <p className="text-[10px] font-black uppercase tracking-widest mb-2" style={{ color: "#D4891A" }}>Client Rating</p>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 3 }}>
            <span className="font-display font-black leading-none" style={{ fontSize: 34, color: "#F5A623" }}>4.9</span>
            <span className="font-bold text-sm mb-1" style={{ color: "#D4891A" }}>/5.0</span>
          </div>
          <div style={{ display: "flex", gap: 2, marginTop: 4 }}>
            {[1,2,3,4,5].map(i => <span key={i} style={{ color: "#F5A623", fontSize: 11 }}>★</span>)}
          </div>
          <p className="text-[9px] font-semibold mt-2" style={{ color: "#D4891A" }}>30+ verified reviews</p>
        </NeuCard>

        {/* ── Card 3: Founders / no middlemen ── */}
        <NeuCard delay={0.3}>
          <p className="text-[10px] font-black uppercase tracking-widest mb-2.5" style={{ color: "#9CA3AF" }}>You work with</p>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
            {["A","S"].map((l, i) => (
              <div key={i} style={{
                width: 30, height: 30, borderRadius: "50%",
                background: i === 0 ? "#FFF3D9" : "#EEF0FF",
                border: `2px solid ${i === 0 ? "#F5A623" : "#6366F1"}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontWeight: 900, fontSize: 12,
                color: i === 0 ? "#F5A623" : "#6366F1",
                marginLeft: i > 0 ? -8 : 0, zIndex: 2 - i,
                boxShadow: "2px 2px 6px rgba(0,0,0,0.08)",
              }}>{l}</div>
            ))}
            <div style={{ width: 30, height: 30, borderRadius: "50%", background: "#F0F2F6", border: "2px solid #E5E7EB", display: "flex", alignItems: "center", justifyContent: "center", marginLeft: -8, fontSize: 13, color: "#9CA3AF", fontWeight: 900, zIndex: 0 }}>+</div>
            <div style={{ marginLeft: 4 }}>
              <p className="font-black text-xs text-txt leading-none">The Founders</p>
              <p className="text-[9px] font-semibold mt-0.5" style={{ color: "#9CA3AF" }}>No middlemen</p>
            </div>
          </div>
          <div style={{ background: "#F8F9FA", borderRadius: 8, padding: "5px 8px" }}>
            <p className="text-[9px] font-semibold leading-relaxed" style={{ color: "#6B7280" }}>CEO + CTO on every project, from brief to deployment.</p>
          </div>
        </NeuCard>

        {/* ── Card 4: USP strip (full width) ── */}
        <NeuCard delay={0.4} style={{ gridColumn: "span 2", padding: "12px 16px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            {[
              { icon: "📄", label: "Fixed Price",   sub: "No surprises"    },
              { icon: "⚡", label: "2× Faster",     sub: "vs agencies"     },
              { icon: "🔒", label: "NDA Ready",     sub: "IP protected"    },
              { icon: "🌍", label: "Remote-first",  sub: "Async-friendly"  },
            ].map((u, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3, flex: 1 }}>
                <span style={{ fontSize: 16 }}>{u.icon}</span>
                <p className="font-black text-[11px] text-txt leading-none">{u.label}</p>
                <p className="text-[9px] font-semibold" style={{ color: "#9CA3AF" }}>{u.sub}</p>
              </div>
            ))}
          </div>
        </NeuCard>

        {/* ── Card 5: Repeat rate with progress bar ── */}
        <NeuCard delay={0.5}>
          <p className="text-[10px] font-black uppercase tracking-widest mb-2" style={{ color: "#9CA3AF" }}>Repeat Rate</p>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 3 }}>
            <span className="font-display font-black leading-none" style={{ fontSize: 34, color: "#0A0A0A" }}>85</span>
            <span className="font-display font-black text-xl mb-1" style={{ color: "#F5A623" }}>%</span>
          </div>
          <p className="text-[9px] font-semibold mt-1 mb-3" style={{ color: "#6B7280" }}>clients come back</p>
          <div style={{ height: 5, borderRadius: 99, background: "#F0F2F6", overflow: "hidden", boxShadow: "inset 2px 2px 4px rgba(0,0,0,0.07)" }}>
            <motion.div
              initial={{ width: 0 }} animate={{ width: "85%" }}
              transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
              style={{ height: "100%", borderRadius: 99, background: "linear-gradient(90deg, #F5A623, #FFB84D)" }}
            />
          </div>
        </NeuCard>

        {/* ── Card 6: CTA ── */}
        <NeuCard delay={0.6} style={{ background: "#0A0A0A", boxShadow: "6px 6px 18px rgba(0,0,0,0.20), -2px -2px 8px rgba(255,255,255,0.05)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ADE80", boxShadow: "0 0 0 3px rgba(74,222,128,0.2)", flexShrink: 0 }}
            />
            <p className="text-[10px] font-semibold" style={{ color: "#6B7280" }}>Available now</p>
          </div>
          <p className="font-black text-white leading-tight mb-1" style={{ fontSize: 14 }}>Free 30-min Call</p>
          <p className="text-[9px] mb-3" style={{ color: "#6B7280" }}>No commitment. Reply within 24h.</p>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{ background: "#F5A623", borderRadius: 10, padding: "7px 12px", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", boxShadow: "0 4px 12px rgba(245,166,35,0.35)" }}
          >
            <span className="text-[11px] font-black" style={{ color: "#0A0A0A" }}>Book Free Call</span>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M2 6.5h9M7 2.5l4 4-4 4" stroke="#0A0A0A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </NeuCard>

      </div>
    </div>
  );
}

/* ── Slide data ─────────────────────────────────────────────────────────────── */
const slides = [
  {
    badge: "Web · Mobile · AI · Always Affordable",
    headline: ["We Build Digital Products", "Without Overcharging You."],
    accentLine: 1,
    sub: "We build websites, apps, and AI products that rival what top agencies deliver — at a fraction of what they charge. Scoped clearly, delivered fast, zero surprise invoices.",
    ctas: [
      { label: "Start a Project", href: "#contact", primary: true  },
      { label: "See Our Work",    href: "#work",    primary: false },
    ],
    right: "code" as const,
  },
  {
    badge: "Why HiveTech",
    headline: ["60% More Affordable.", "2× Faster Delivery."],
    accentLine: 1,
    sub: "Same quality as top agencies. Half the price. We charge for the work, not the brand name. One lean team, zero hand-offs, no surprises.",
    ctas: [
      { label: "See Pricing",  href: "#pricing", primary: true  },
      { label: "Why HiveTech", href: "#about",   primary: false },
    ],
    right: "chart" as const,
  },
  {
    badge: "Free Consultation",
    headline: ["Stop Overpaying", "for Software."],
    accentLine: 1,
    sub: "Free 30-min consultation. We reply within 24 hours with an honest quote. NDA available on request. No commitment required.",
    ctas: [
      { label: "Book Free Call", href: "#contact", primary: true  },
      { label: "See Our Work",   href: "#work",    primary: false },
    ],
    right: "cards" as const,
  },
];

const SLIDE_MS = 8000;

const textVariants = {
  enter: (_dir: number) => ({ opacity: 0, y: 28 }),
  show:  { opacity: 1, y: 0 },
  exit:  (_dir: number) => ({ opacity: 0, y: -16 }),
};

const stats = [
  { value: "15+",  label: "Projects"  },
  { value: "10+",  label: "Clients"   },
  { value: "3+",   label: "Countries" },
  { value: "100%", label: "On-time"   },
];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const goTo = useCallback((next: number) => {
    setIdx(cur => {
      const n = ((next % slides.length) + slides.length) % slides.length;
      setDir(n >= cur ? 1 : -1);
      return n;
    });
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setDir(1);
      setIdx(cur => (cur + 1) % slides.length);
    }, SLIDE_MS);
    return () => clearInterval(id);
  }, []);

  const s = slides[idx];

  return (
    <section
      className="relative min-h-screen flex flex-col bg-white pt-16 overflow-hidden"
    >
      {/* Subtle dot grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, #0A0A0A 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} aria-hidden />

      {/* ── Curved diagonal orange stripe (SVG bezier) ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradient runs along the stripe direction (bottom-left → top-right) */}
            <linearGradient id="stripeGrad1" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#F5A623" stopOpacity="0"    />
              <stop offset="20%"  stopColor="#F5A623" stopOpacity="0.20" />
              <stop offset="50%"  stopColor="#F5A623" stopOpacity="0.24" />
              <stop offset="80%"  stopColor="#FFB84D" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#FFB84D" stopOpacity="0"    />
            </linearGradient>
            <linearGradient id="stripeGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#F5A623" stopOpacity="0"    />
              <stop offset="25%"  stopColor="#F5A623" stopOpacity="0.10" />
              <stop offset="60%"  stopColor="#F5A623" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#F5A623" stopOpacity="0"    />
            </linearGradient>
          </defs>

          {/* Primary curved band */}
          <path
            d="M -60 720 C 320 980 1080 350 1500 110 L 1500 340 C 1080 580 320 1210 -60 950 Z"
            fill="url(#stripeGrad1)"
          />

          {/* Secondary thinner band */}
          <path
            d="M -60 920 C 380 1100 1100 620 1500 360 L 1500 450 C 1100 710 380 1190 -60 1010 Z"
            fill="url(#stripeGrad2)"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] w-full px-8 lg:px-16 flex-1 flex items-center py-12 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">

          {/* ── Left: text ── */}
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div key={`slide-${idx}`} custom={dir}
              variants={textVariants}
              initial="enter" animate="show" exit="exit"
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <span className="section-pill mb-6 inline-flex">{s.badge}</span>

              <h1 className="font-display font-black leading-[1.06] tracking-tight text-txt mb-5"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.6rem)" }}>
                {s.headline.map((line, i) => (
                  <span key={i} className={`block ${i === s.accentLine ? "gradient-text" : ""}`}>
                    {line}
                  </span>
                ))}
              </h1>

              <p className="text-base lg:text-lg text-txt-2 leading-relaxed max-w-xl mb-8">
                {s.sub}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                {s.ctas.map((cta, i) => (
                  <a key={i} href={cta.href}
                    className={`${cta.primary ? "btn-primary" : "btn-outline"} px-7 py-3.5 text-base w-full sm:w-auto justify-center`}>
                    {cta.label} {cta.primary && <ArrowRight size={16} />}
                  </a>
                ))}
              </div>

              {/* Slide controls */}
              <div className="flex items-center gap-3">
                <button onClick={() => goTo(idx - 1)}
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-txt-3 hover:border-amber hover:text-amber transition-all">
                  <ChevronLeft size={16} />
                </button>
                <div className="flex gap-2">
                  {slides.map((_, i) => (
                    <button key={i} onClick={() => goTo(i)}
                      className="rounded-full transition-all duration-300"
                      style={{ width: i === idx ? 24 : 8, height: 8, background: i === idx ? "#F5A623" : "#E5E7EB" }} />
                  ))}
                </div>
                <button onClick={() => goTo(idx + 1)}
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-txt-3 hover:border-amber hover:text-amber transition-all">
                  <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ── Right: visual ── */}
          <div className="hidden lg:flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div key={`right-${idx}`}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full flex items-center justify-center"
              >
                {s.right === "code"  && (
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="w-full flex items-center justify-center"
                  >
                    <img
                      src="/images/v6.png"
                      alt="HiveTech — Digital Product Development"
                      className="w-full max-w-[520px] h-auto object-contain drop-shadow-xl"
                    />
                  </motion.div>
                )}
                {s.right === "chart" && <PriceChartIllustration />}
                {s.right === "cards" && <FloatingCardsIllustration />}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* Progress bar */}
      <div className="relative z-10 mx-auto max-w-[1440px] w-full px-8 lg:px-16 pb-5">
        <div className="h-[2px] bg-border rounded-full overflow-hidden max-w-xs">
          <motion.div key={idx} className="h-full bg-amber rounded-full"
            initial={{ width: "0%" }} animate={{ width: "100%" }}
            transition={{ duration: SLIDE_MS / 1000, ease: "linear" }} />
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative z-10 border-t border-border bg-bg-2">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16 py-4 flex flex-wrap gap-6 items-center justify-between">
          <div className="flex flex-wrap gap-6">
            {stats.map((st, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="font-display font-black text-xl text-amber">{st.value}</span>
                <span className="text-sm text-txt-3 font-semibold">{st.label}</span>
              </div>
            ))}
          </div>
          <div className="hidden sm:flex items-center gap-3 text-xs font-semibold text-txt-3">
            <span>⭐ 4.9/5.0</span>
            <span className="text-border">·</span>
            <span>🔒 NDA Ready</span>
            <span className="text-border">·</span>
            <span>💬 24h Reply</span>
          </div>
        </div>
      </div>
    </section>
  );
}
