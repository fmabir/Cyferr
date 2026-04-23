"use client";
import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";

const services = [
  { icon: "/images/01.png", img: "/images/1.png",  title: "Web Applications",     tag: "Web · Next.js",         color: "#F5A623", bg: "#FFF7E6", desc: "Fast, scalable web apps from MVP to enterprise.", points: ["SEO-optimised", "Sub-2s load time", "Mobile-first"] },
  { icon: "/images/02.png", img: "/images/3.png",  title: "Mobile Apps",           tag: "Flutter · React Native", color: "#6366F1", bg: "#EEF2FF", desc: "Cross-platform iOS & Android that feel truly native.", points: ["App Store ready", "Offline-first", "Push notifications"] },
  { icon: "/images/03.png", img: "/images/5.png",  title: "UI / UX Design",        tag: "Figma · Framer",         color: "#10B981", bg: "#ECFDF5", desc: "Conversion-focused interfaces, every pixel counts.", points: ["Prototypes", "Design system", "Handoff-ready"] },
  { icon: "/images/04.png", img: "/images/7.png",  title: "AI & Automation",       tag: "OpenAI · LangChain",     color: "#3B82F6", bg: "#EFF6FF", desc: "GPT pipelines and automation saving real hours weekly.", points: ["RAG pipelines", "API integrations", "Month-1 ROI"] },
  { icon: "/images/05.png", img: "/images/9.png",  title: "E-commerce",            tag: "Shopify · Stripe",       color: "#EC4899", bg: "#FDF2F8", desc: "Stores built to convert with seamless checkout flows.", points: ["One-page checkout", "Inventory mgmt", "Multi-currency"] },
  { icon: "/images/06.png", img: "/images/11.png", title: "Backend & APIs",        tag: "Node.js · PostgreSQL",   color: "#F59E0B", bg: "#FFFBEB", desc: "Robust REST and GraphQL APIs built to scale.", points: ["99.9% uptime", "OAuth2 auth", "Rate limiting"] },
  { icon: "/images/07.png", img: "/images/13.png", title: "Cloud & DevOps",        tag: "AWS · Docker · Vercel",  color: "#8B5CF6", bg: "#F5F3FF", desc: "CI/CD pipelines and cloud infra that never goes down.", points: ["Auto deployments", "Auto-scaling", "24h monitoring"] },
  { icon: "/images/08.png", img: "/images/15.png", title: "Strategy & Consulting", tag: "Discovery · Roadmap",    color: "#14B8A6", bg: "#F0FDFA", desc: "Tech audits and roadmaps from founders who shipped.", points: ["Free 30-min audit", "Written roadmap", "NDA available"] },
];

function Label({ letter, title, sub }: { letter: string; title: string; sub: string }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-1">
        <span className="w-8 h-8 rounded-full bg-[#0A0A0A] text-white text-xs font-black flex items-center justify-center">{letter}</span>
        <p className="font-black text-lg text-[#0A0A0A]">{title}</p>
      </div>
      <p className="text-xs text-[#9CA3AF] ml-11">{sub}</p>
    </div>
  );
}

/* ── K: 3D Tilt on Hover ─────────────────────────────────────── */
function TiltCard({ s, i }: { s: typeof services[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-60, 60], [12, -12]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-60, 60], [-12, 12]), { stiffness: 200, damping: 20 });
  const glareX = useTransform(x, [-60, 60], ["-30%", "130%"]);
  const glareY = useTransform(y, [-60, 60], ["-30%", "130%"]);

  function onMouseMove(e: React.MouseEvent) {
    const rect = ref.current!.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }
  function onMouseLeave() { x.set(0); y.set(0); }

  return (
    <motion.div
      ref={ref} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
      style={{ rotateX, rotateY, transformPerspective: 800, transformStyle: "preserve-3d" }}
      className="relative rounded-2xl overflow-hidden cursor-default"
    >
      {/* Card body */}
      <div className="relative flex flex-col overflow-hidden rounded-2xl"
        style={{ background: "#0F0F14", border: `1px solid ${s.color}33`, boxShadow: `0 20px 60px rgba(0,0,0,0.35)` }}>
        {/* Image */}
        <div className="relative h-36 overflow-hidden">
          <img src={s.img} alt="" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, transparent 30%, #0F0F14 100%)` }} />
        </div>
        {/* Icon — floats at z-10 over image/body seam */}
        <div className="absolute left-4" style={{ top: 100, zIndex: 10 }}>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center border-2"
            style={{ background: s.color, borderColor: "#0F0F14", boxShadow: `0 0 24px ${s.color}99` }}>
            <img src={s.icon} alt="" className="w-6 h-6 object-contain brightness-0 invert" />
          </div>
        </div>
        <div className="p-4 pt-10 flex flex-col gap-1.5">
          <p className="font-black text-sm text-white leading-tight">{s.title}</p>
          <p className="text-[10px] font-bold" style={{ color: s.color }}>{s.tag}</p>
          <p className="text-[11px] leading-relaxed mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>{s.desc}</p>
        </div>
        {/* Glare overlay */}
        <motion.div className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{
            background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.08) 0%, transparent 60%)`,
          }} />
      </div>
    </motion.div>
  );
}
function StyleK() {
  return (
    <div>
      <Label letter="K" title="3D Tilt on Hover" sub="Cards tilt in 3D as you move your mouse — glare effect follows cursor" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s, i) => <TiltCard key={i} s={s} i={i} />)}
      </div>
    </div>
  );
}

/* ── L: Flip Card ────────────────────────────────────────────── */
function FlipCard({ s, i }: { s: typeof services[0]; i: number }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
      onHoverStart={() => setFlipped(true)} onHoverEnd={() => setFlipped(false)}
      style={{ perspective: 900, height: 220 }}
      className="relative cursor-default"
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: "preserve-3d", width: "100%", height: "100%", position: "relative" }}
      >
        {/* Front */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden" style={{ backfaceVisibility: "hidden" }}>
          <img src={s.img} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.7))" }} />
          <div className="absolute bottom-0 inset-x-0 p-4">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: s.color }}>
                <img src={s.icon} alt="" className="w-5 h-5 object-contain brightness-0 invert" />
              </div>
              <p className="font-black text-sm text-white leading-tight">{s.title}</p>
            </div>
            <p className="text-[10px] text-white/50 font-semibold ml-11">Hover to flip →</p>
          </div>
        </div>
        {/* Back */}
        <div className="absolute inset-0 rounded-2xl flex flex-col justify-between p-5"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)", background: s.color }}>
          <div>
            <img src={s.icon} alt="" className="w-10 h-10 object-contain brightness-0 invert mb-3" />
            <p className="font-black text-lg text-white leading-tight mb-1">{s.title}</p>
            <p className="text-[11px] text-white/75 leading-relaxed">{s.desc}</p>
          </div>
          <div className="flex flex-col gap-1.5">
            {s.points.map((pt, j) => (
              <span key={j} className="text-[10px] font-bold text-white/80 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />{pt}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
function StyleL() {
  return (
    <div>
      <Label letter="L" title="Flip Card" sub="Hover flips the card 180° to reveal details on the back" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s, i) => <FlipCard key={i} s={s} i={i} />)}
      </div>
    </div>
  );
}

/* ── M: Overlapping Layers ───────────────────────────────────── */
function StyleM() {
  return (
    <div>
      <Label letter="M" title="Overlapping Layers" sub="Image card stacked behind a floating content card — depth effect" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.07 }}
            whileHover={{ y: -8 }}
            className="relative cursor-default"
            style={{ height: 260 }}
          >
            {/* Back image card — slightly rotated */}
            <motion.div
              whileHover={{ rotate: -2 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 rounded-2xl overflow-hidden"
              style={{ transform: "rotate(3deg)", transformOrigin: "bottom center", boxShadow: "0 8px 30px rgba(0,0,0,0.15)" }}
            >
              <img src={s.img} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: `${s.color}44` }} />
            </motion.div>

            {/* Front content card — overlaps bottom */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-0 inset-x-2 rounded-2xl p-4 flex flex-col gap-2"
              style={{ background: "#fff", boxShadow: "0 -4px 32px rgba(0,0,0,0.12)", border: "1px solid #F0F0F0" }}
            >
              {/* Icon overlapping top */}
              <div className="absolute -top-6 left-4 w-12 h-12 rounded-xl flex items-center justify-center border-4 border-white"
                style={{ background: s.bg, boxShadow: `0 4px 16px ${s.color}44` }}>
                <img src={s.icon} alt="" className="w-7 h-7 object-contain" />
              </div>
              <div className="mt-4">
                <p className="font-black text-sm text-[#0A0A0A] leading-tight">{s.title}</p>
                <p className="text-[10px] font-bold mt-0.5" style={{ color: s.color }}>{s.tag}</p>
              </div>
              <p className="text-[11px] text-[#6B7280] leading-relaxed">{s.desc}</p>
              <div className="flex items-center justify-between mt-1">
                <div className="flex gap-1">
                  {s.points.slice(0, 2).map((pt, j) => (
                    <span key={j} className="text-[9px] font-black px-1.5 py-0.5 rounded-full"
                      style={{ background: s.bg, color: s.color }}>
                      {pt}
                    </span>
                  ))}
                </div>
                <span className="font-black text-sm" style={{ color: s.color }}>→</span>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ── N: Animated Gradient Border ─────────────────────────────── */
function StyleN() {
  return (
    <div>
      <Label letter="N" title="Animated Gradient Border" sub="Rotating conic gradient border, reveals image on hover" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
            className="group relative rounded-2xl p-[2px] cursor-default overflow-hidden"
          >
            {/* Spinning gradient border */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              style={{
                background: `conic-gradient(from 0deg, ${s.color}, transparent, ${s.color}88, transparent, ${s.color})`,
              }}
            />
            {/* Inner card */}
            <div className="relative rounded-[14px] overflow-hidden flex flex-col" style={{ background: "#fff" }}>
              {/* Image — slides down on hover */}
              <div className="relative overflow-hidden" style={{ height: 120 }}>
                <motion.img
                  src={s.img} alt=""
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.5))` }} />
                <span className="absolute bottom-2 left-2 text-[9px] font-black px-2 py-0.5 rounded-full text-white"
                  style={{ background: s.color }}>{s.tag}</span>
              </div>
              {/* Content */}
              <div className="p-4 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: s.bg, boxShadow: `0 2px 8px ${s.color}33` }}>
                    <img src={s.icon} alt="" className="w-5 h-5 object-contain" />
                  </div>
                  <p className="font-black text-sm text-[#0A0A0A] leading-tight">{s.title}</p>
                </div>
                <p className="text-[11px] text-[#6B7280] leading-relaxed">{s.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ── O: Expand on Hover ──────────────────────────────────────── */
function StyleO() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <div>
      <Label letter="O" title="Expand on Hover" sub="Cards expand to reveal details — others compress sideways" />
      <div className="flex gap-3" style={{ height: 320 }}>
        {services.map((s, i) => (
          <motion.div
            key={i}
            onHoverStart={() => setActive(i)}
            onHoverEnd={() => setActive(null)}
            animate={{ flex: active === i ? 4 : 1 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-2xl overflow-hidden cursor-default"
            style={{ minWidth: 0 }}
          >
            {/* Background image */}
            <img src={s.img} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: active === i ? "rgba(0,0,0,0.45)" : "rgba(0,0,0,0.6)" }} />

            {/* Collapsed state — vertical title */}
            <AnimatePresence>
              {active !== i && (
                <motion.div
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col items-center justify-end pb-5 gap-2"
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: s.color }}>
                    <img src={s.icon} alt="" className="w-4 h-4 object-contain brightness-0 invert" />
                  </div>
                  <p className="text-white text-[10px] font-black text-center leading-tight px-1"
                    style={{ writingMode: "vertical-rl", textOrientation: "mixed", transform: "rotate(180deg)" }}>
                    {s.title}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Expanded state */}
            <AnimatePresence>
              {active === i && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 inset-x-0 p-5 flex flex-col gap-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: s.color, boxShadow: `0 0 20px ${s.color}88` }}>
                      <img src={s.icon} alt="" className="w-7 h-7 object-contain brightness-0 invert" />
                    </div>
                    <div>
                      <p className="font-black text-base text-white leading-tight">{s.title}</p>
                      <p className="text-[10px] font-bold mt-0.5" style={{ color: s.color }}>{s.tag}</p>
                    </div>
                  </div>
                  <p className="text-[12px] text-white/70 leading-relaxed">{s.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {s.points.map((pt, j) => (
                      <span key={j} className="text-[10px] font-black px-2.5 py-1 rounded-full"
                        style={{ background: "rgba(255,255,255,0.15)", color: "#fff", backdropFilter: "blur(6px)" }}>
                        {pt}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Accent bar at bottom */}
            <div className="absolute bottom-0 inset-x-0 h-[3px]" style={{ background: s.color }} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function CardsDemo2() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] px-8 lg:px-16 py-12">
      <div className="mx-auto max-w-[1440px]">

        <div className="mb-12 pb-8 border-b border-[#E5E7EB]">
          <p className="text-xs font-black uppercase tracking-widest text-[#F5A623] mb-2">localhost:3000/cards2</p>
          <h1 className="font-display font-black text-4xl text-[#0A0A0A] mb-2">Advanced Card Demos</h1>
          <p className="text-[#6B7280] mb-4">5 animated & overlapping styles — K through O.</p>
          <div className="flex gap-3 flex-wrap">
            {["K — 3D Tilt", "L — Flip Card", "M — Overlapping Layers", "N — Gradient Border", "O — Expand on Hover"].map((t, i) => (
              <span key={i} className="text-xs font-black px-3 py-1.5 rounded-full bg-white border border-[#E5E7EB] text-[#6B7280]">{t}</span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-20">
          <StyleK />
          <StyleL />
          <StyleM />
          <StyleN />
          <StyleO />
        </div>

        <div className="mt-16 pt-8 border-t border-[#E5E7EB] text-center flex justify-center gap-8">
          <a href="/cards" className="text-sm text-[#F5A623] font-bold hover:underline">← Styles F–J</a>
          <a href="/" className="text-sm text-[#F5A623] font-bold hover:underline">← Main site</a>
        </div>
      </div>
    </div>
  );
}
