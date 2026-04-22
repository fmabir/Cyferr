"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

/* ── Config ─────────────────────────── */
const INTERVAL   = 3000;  // ms per slide
const FAST_INT   = 1200;
const CX = 260, CY = 260;
const RING_R     = 165;
const STROKE     = 64;
const TIMER_R    = RING_R + STROKE / 2 + 10;
const GAP_DEG    = 5;
const CIRC       = 2 * Math.PI * RING_R;
const TIMER_CIRC = 2 * Math.PI * TIMER_R;

/* ── Data ───────────────────────────── */
const reasons = [
  { number:"60%", title:"More Affordable",         desc:"Agency-grade quality at startup-friendly prices. No inflated retainer fees.",    color:"#F5A623", bg:"#FFF7E6", pct:0.28 },
  { number:"2×",  title:"Faster Delivery",          desc:"Tight timelines without cutting corners. Agile process, fast market entry.",      color:"#6366F1", bg:"#EEF2FF", pct:0.24 },
  { number:"8+",  title:"Services Under One Roof",  desc:"Design, dev, AI, strategy — one partner, not five vendors.",                      color:"#10B981", bg:"#ECFDF5", pct:0.26 },
  { number:"3+",  title:"Countries & Growing",      desc:"Clients across continents. We work async across time zones with zero friction.", color:"#3B82F6", bg:"#EFF6FF", pct:0.22 },
];

/* ── Geometry ───────────────────────── */
function toRad(d: number) { return d * Math.PI / 180; }

function buildSegments() {
  const total    = reasons.reduce((a, r) => a + r.pct, 0);
  const spanPool = 360 - GAP_DEG * reasons.length;
  let cursor     = -90;
  return reasons.map(r => {
    const deg    = (r.pct / total) * spanPool;
    const start  = cursor, end = start + deg;
    cursor       = end + GAP_DEG;
    const midDeg = (start + end) / 2;
    const midRad = toRad(midDeg);
    const arcLen = (deg / 360) * CIRC;
    const LR     = RING_R + STROKE / 2 + 38;
    return {
      ...r, start, end, arcLen, midDeg,
      labelX: CX + LR * Math.cos(midRad),
      labelY: CY + LR * Math.sin(midRad),
      tickX1: CX + (RING_R + STROKE / 2 + 4)  * Math.cos(midRad),
      tickY1: CY + (RING_R + STROKE / 2 + 4)  * Math.sin(midRad),
      tickX2: CX + (RING_R + STROKE / 2 + 20) * Math.cos(midRad),
      tickY2: CY + (RING_R + STROKE / 2 + 20) * Math.sin(midRad),
    };
  });
}
const segments = buildSegments();

/* ── Icons ──────────────────────────── */
const IconPrev = () => <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const IconNext = () => <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const IconPlay  = () => <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M4 3l10 5-10 5V3z"/></svg>;
const IconPause = () => <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><rect x="3" y="3" width="4" height="10" rx="1"/><rect x="9" y="3" width="4" height="10" rx="1"/></svg>;

/* ── Component ──────────────────────── */
export default function WhyHiveTech() {
  const [active,   setActive]   = useState(0);
  const [paused,   setPaused]   = useState(false);
  const [fast,     setFast]     = useState(false);
  const [timerKey, setTimerKey] = useState(0);
  const [hovered,  setHovered]  = useState<number | null>(null);

  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const interval = fast ? FAST_INT : INTERVAL;

  const goTo = useCallback((i: number) => {
    setActive(i);
    setTimerKey(k => k + 1);
  }, []);

  const next = useCallback(() => goTo((active + 1) % segments.length), [active, goTo]);
  const prev = useCallback(() => goTo((active - 1 + segments.length) % segments.length), [active, goTo]);

  /* Auto-rotate */
  useEffect(() => {
    if (!inView || paused) return;
    const id = setTimeout(() => { next(); }, interval);
    return () => clearTimeout(id);
  }, [inView, paused, active, interval, next]);

  /* Keyboard nav */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") { next(); setPaused(true); }
      if (e.key === "ArrowLeft")  { prev(); setPaused(true); }
      if (e.key === " ")          { setPaused(p => !p); e.preventDefault(); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  const seg     = segments[active];
  const display = hovered !== null ? segments[hovered] : seg;

  return (
    <section id="about" className="py-12 lg:py-16 px-8 lg:px-16 bg-bg-2 border-t border-border">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">

          {/* Left heading */}
          <div className="lg:col-span-2 lg:sticky lg:top-28">
            <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ duration:0.6 }}>
              <span className="section-pill mb-3 inline-flex">Why HiveTech</span>
              <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight text-txt mt-3 leading-[1.08]">
                Why Pay More<br />for the Same<br /><span className="gradient-text">Quality?</span>
              </h2>
              <p className="text-txt-2 mt-3 leading-relaxed text-sm max-w-sm">
                Top agencies charge a premium for the brand name. We charge for the work. Same quality, honest price, direct access to the founders on every project.
              </p>
              <div className="mt-6 hidden lg:block border-l-4 border-amber pl-5 flex flex-col gap-1">
                <span className="font-display font-black text-4xl text-txt leading-none">60%</span>
                <span className="text-sm font-semibold text-txt-3">less than a top agency<br />for the same output</span>
              </div>
            </motion.div>
          </div>

          {/* Right: chart panel */}
          <div ref={ref} className="lg:col-span-3 flex flex-col gap-3">

            {/* Chart + detail side by side */}
            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">

            {/* Chart SVG */}
            <div className="relative w-full sm:w-[310px] shrink-0">
              {/* Ambient glow */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div animate={{ background:`radial-gradient(circle, ${seg.color}1A 0%, transparent 68%)` }}
                  transition={{ duration:0.7 }} className="w-[420px] h-[420px] rounded-full"/>
              </div>

              <svg viewBox="0 0 520 520" className="w-full" style={{ overflow:"visible" }}>
                <defs>
                  {segments.map((s,i) => (
                    <filter key={i} id={`glw-${i}`} x="-50%" y="-50%" width="200%" height="200%">
                      <feDropShadow dx="0" dy="0" stdDeviation="14" floodColor={s.color} floodOpacity="0.7"/>
                    </filter>
                  ))}
                  <filter id="cshadow">
                    <feDropShadow dx="0" dy="2" stdDeviation="10" floodColor="rgba(0,0,0,0.10)"/>
                  </filter>
                  <radialGradient id="centerGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#ffffff"/>
                    <stop offset="100%" stopColor="#f9fafb"/>
                  </radialGradient>
                </defs>

                {/* BG track */}
                <circle cx={CX} cy={CY} r={RING_R} fill="none" stroke="#EFEFEF" strokeWidth={STROKE}/>

                {/* Dashed decorative rings */}
                <circle cx={CX} cy={CY} r={RING_R - STROKE/2 - 8} fill="none" stroke="#E5E7EB" strokeWidth={1} strokeDasharray="3 7"/>
                <circle cx={CX} cy={CY} r={RING_R + STROKE/2 + 8} fill="none" stroke="#E5E7EB" strokeWidth={1} strokeDasharray="3 7"/>

                {/* Timer ring */}
                <motion.circle
                  key={`timer-${timerKey}-${paused}`}
                  cx={CX} cy={CY} r={TIMER_R}
                  fill="none" stroke={seg.color} strokeWidth={3} strokeLinecap="round"
                  strokeDasharray={`${TIMER_CIRC} ${TIMER_CIRC}`}
                  initial={{ strokeDashoffset: TIMER_CIRC }}
                  animate={paused ? { strokeDashoffset: TIMER_CIRC * 0.6 } : { strokeDashoffset: 0 }}
                  transition={paused ? { duration:0.3 } : { duration: interval / 1000, ease:"linear" }}
                  transform={`rotate(-90 ${CX} ${CY})`}
                  style={{ opacity: 0.7 }}
                />

                {/* Segments */}
                {segments.map((s,i) => {
                  const isActive  = active === i;
                  const isHovered = hovered === i;
                  return (
                    <motion.circle key={i}
                      cx={CX} cy={CY} r={RING_R} fill="none"
                      stroke={s.color}
                      strokeLinecap="round"
                      strokeDasharray={`${s.arcLen} ${CIRC}`}
                      filter={(isActive || isHovered) ? `url(#glw-${i})` : undefined}
                      initial={{ strokeDashoffset: CIRC, opacity:0 }}
                      animate={inView ? {
                        strokeDashoffset: 0,
                        opacity: isActive ? 1 : isHovered ? 0.75 : 0.25,
                        strokeWidth: isActive ? STROKE + 12 : isHovered ? STROKE + 4 : STROKE,
                      } : { strokeDashoffset: CIRC, opacity: 0 }}
                      transition={{ duration:0.65, delay: i * 0.1, ease:[0.22,1,0.36,1] }}
                      transform={`rotate(${s.start} ${CX} ${CY})`}
                      style={{ cursor:"pointer" }}
                      onMouseEnter={() => setHovered(i)}
                      onMouseLeave={() => setHovered(null)}
                      onClick={() => { goTo(i); setPaused(true); }}
                    />
                  );
                })}

                {/* Outer tick lines + label pills */}
                {segments.map((s,i) => {
                  const isActive = active === i;
                  return (
                    <motion.g key={i}
                      initial={{ opacity:0 }}
                      animate={inView ? { opacity:1 } : { opacity:0 }}
                      transition={{ duration:0.4, delay:0.55 + i*0.1 }}>
                      <line x1={s.tickX1} y1={s.tickY1} x2={s.tickX2} y2={s.tickY2}
                        stroke={isActive ? s.color : "#CBD5E1"} strokeWidth={isActive ? 2 : 1.5} strokeLinecap="round"/>
                      {/* Pill bg */}
                      <rect x={s.labelX - 30} y={s.labelY - 12} width={60} height={24} rx={12}
                        fill={isActive ? s.color : "#F1F5F9"}
                        style={{ filter: isActive ? `drop-shadow(0 2px 6px ${s.color}50)` : "none" }}/>
                      {/* Pill text */}
                      <text x={s.labelX} y={s.labelY + 5}
                        textAnchor="middle" fontFamily="system-ui" fontWeight="800" fontSize={11}
                        fill={isActive ? "#fff" : "#94A3B8"}>
                        {s.number}
                      </text>
                    </motion.g>
                  );
                })}

                {/* Center disc */}
                <circle cx={CX} cy={CY} r={RING_R - STROKE/2 - 10} fill="url(#centerGrad)" filter="url(#cshadow)"/>
                <circle cx={CX} cy={CY} r={RING_R - STROKE/2 - 10} fill="none" stroke="#F0F0F0" strokeWidth={1.5}/>

                {/* Center content — animated on change */}
                <AnimatePresence mode="wait">
                  <motion.g key={`center-${active}`}
                    initial={{ opacity:0, scale:0.8 }}
                    animate={{ opacity:1, scale:1 }}
                    exit={{ opacity:0, scale:0.9 }}
                    transition={{ duration:0.3, ease:[0.22,1,0.36,1] }}
                    style={{ transformOrigin:`${CX}px ${CY}px` }}>
                    {/* number */}
                    <text x={CX} y={CY + 18} textAnchor="middle"
                      fontFamily="system-ui" fontWeight="900" fontSize={44} fill={display.color}>{display.number}</text>
                    {/* title */}
                    <text x={CX} y={CY + 36} textAnchor="middle"
                      fontFamily="system-ui" fontWeight="600" fontSize={9} fill="#9CA3AF" letterSpacing="1">
                      {display.title.toUpperCase()}
                    </text>
                  </motion.g>
                </AnimatePresence>
              </svg>

              {/* Controls under chart */}
              <motion.div initial={{ opacity:0 }} animate={inView ? { opacity:1 } : {}}
                transition={{ duration:0.4, delay:0.5 }}
                className="flex items-center justify-between gap-2 px-1 mt-1">
                <div className="flex items-center gap-1.5">
                  <button onClick={() => { prev(); setPaused(true); }}
                    className="w-7 h-7 rounded-full flex items-center justify-center transition-all hover:scale-110"
                    style={{ background:"#F1F5F9", color:"#64748B" }}><IconPrev/></button>
                  <button onClick={() => { next(); setPaused(true); }}
                    className="w-7 h-7 rounded-full flex items-center justify-center transition-all hover:scale-110"
                    style={{ background:"#F1F5F9", color:"#64748B" }}><IconNext/></button>
                </div>
                <div className="flex items-center gap-1">
                  {segments.map((s,i) => (
                    <button key={i} onClick={() => { goTo(i); setPaused(true); }}
                      className="rounded-full transition-all duration-300"
                      style={{ width: active===i ? 18 : 6, height:6, background: active===i ? s.color : "#D1D5DB" }}/>
                  ))}
                </div>
                <div className="flex items-center gap-1.5">
                  <button onClick={() => setFast(f => !f)}
                    className="px-2 py-0.5 rounded-full text-[9px] font-black transition-all"
                    style={{ background: fast ? seg.color : "#F1F5F9", color: fast ? "#fff" : "#94A3B8" }}>
                    {fast ? "FAST" : "NORM"}
                  </button>
                  <button onClick={() => setPaused(p => !p)}
                    className="w-7 h-7 rounded-full flex items-center justify-center transition-all hover:scale-110"
                    style={{ background: paused ? seg.color : "#F1F5F9", color: paused ? "#fff" : "#64748B" }}>
                    {paused ? <IconPlay/> : <IconPause/>}
                  </button>
                </div>
              </motion.div>
            </div>{/* end chart div */}

            {/* Detail card — beside chart on sm+ */}
            <div className="flex-1 flex flex-col gap-3 min-w-0">
              <AnimatePresence mode="wait">
                <motion.div key={`detail-${active}`}
                  initial={{ opacity:0, x:8 }} animate={{ opacity:1, x:0 }} exit={{ opacity:0, x:-6 }}
                  transition={{ duration:0.3 }}
                  className="rounded-2xl p-4 flex flex-col gap-2 flex-1"
                  style={{ background: seg.bg, border:`1.5px solid ${seg.color}30` }}>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-display font-black text-xl" style={{ color:seg.color }}>{seg.number}</span>
                      <span className="text-[9px] font-black px-1.5 py-0.5 rounded-full"
                        style={{ background:`${seg.color}20`, color:seg.color }}>
                        {Math.round(seg.pct * 100)}% weight
                      </span>
                    </div>
                    <p className="font-black text-xs text-txt mb-1">{seg.title}</p>
                    <p className="text-[11px] text-txt-3 leading-relaxed">{seg.desc}</p>
                    <div className="mt-2 h-1 rounded-full bg-white overflow-hidden">
                      <motion.div key={active} className="h-full rounded-full"
                        style={{ background:seg.color }}
                        initial={{ width:0 }} animate={{ width:`${seg.pct * 100}%` }}
                        transition={{ duration:0.6, ease:[0.22,1,0.36,1] }}/>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Legend */}
              <motion.div initial={{ opacity:0, y:8 }} animate={inView ? { opacity:1, y:0 } : {}}
                transition={{ duration:0.4, delay:0.6 }}
                className="grid grid-cols-2 gap-1.5">
                {segments.map((s,i) => (
                  <button key={i} onClick={() => { goTo(i); setPaused(true); }}
                    className="flex items-center gap-2 p-2 rounded-xl transition-all duration-200"
                    style={{ background: active===i ? s.bg : "#fff", border:`1.5px solid ${active===i ? s.color+"55" : "#F0F0F0"}` }}>
                    <div className="w-2 h-2 rounded-full shrink-0" style={{ background:s.color }}/>
                    <span className="font-black text-[10px] text-txt leading-tight truncate">{s.title}</span>
                  </button>
                ))}
              </motion.div>

              <p className="text-[9px] text-txt-3 text-center">← → navigate · Space pause</p>
            </div>

            </div>{/* end side-by-side */}

          </div>
        </div>
      </div>
    </section>
  );
}
