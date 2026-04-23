"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery & Planning",
    desc: "We deep-dive into your goals, users, and constraints. You get a clear project scope, timeline, and cost estimate — before a single line of code.",
    outcome: "Aligned Vision",
    color: "#3B82F6",
    bg: "#EFF6FF",
    illustration: (
      <svg viewBox="0 0 120 100" fill="none" className="w-full h-full">
        <rect x="20" y="10" width="60" height="75" rx="8" fill="white" stroke="#3B82F6" strokeWidth="2.5"/>
        <rect x="30" y="25" width="40" height="5" rx="2.5" fill="#3B82F6" opacity="0.6"/>
        <rect x="30" y="35" width="30" height="5" rx="2.5" fill="#3B82F6" opacity="0.4"/>
        <rect x="30" y="45" width="36" height="5" rx="2.5" fill="#3B82F6" opacity="0.5"/>
        <rect x="30" y="55" width="24" height="5" rx="2.5" fill="#3B82F6" opacity="0.3"/>
        <rect x="30" y="65" width="34" height="5" rx="2.5" fill="#3B82F6" opacity="0.45"/>
        <circle cx="85" cy="65" r="18" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="2.5"/>
        <circle cx="85" cy="65" r="11" fill="white" stroke="#3B82F6" strokeWidth="2"/>
        <line x1="96" y1="76" x2="108" y2="90" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="62" cy="15" r="8" fill="#3B82F6"/>
        <path d="M58 15 L61 18 L67 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Design & Prototype",
    desc: "Our designers craft wireframes and high-fidelity prototypes. You interact with your product before development starts — zero surprises.",
    outcome: "Approved Design",
    color: "#8B5CF6",
    bg: "#F5F3FF",
    illustration: (
      <svg viewBox="0 0 120 100" fill="none" className="w-full h-full">
        <rect x="10" y="15" width="75" height="65" rx="8" fill="white" stroke="#8B5CF6" strokeWidth="2.5"/>
        <rect x="18" y="23" width="59" height="12" rx="4" fill="#8B5CF6" opacity="0.2" stroke="#8B5CF6" strokeWidth="1.5"/>
        <rect x="18" y="40" width="27" height="30" rx="4" fill="#8B5CF6" opacity="0.15" stroke="#8B5CF6" strokeWidth="1.5"/>
        <rect x="50" y="40" width="27" height="13" rx="4" fill="#8B5CF6" opacity="0.1" stroke="#8B5CF6" strokeWidth="1.5"/>
        <rect x="50" y="58" width="27" height="12" rx="4" fill="#8B5CF6" opacity="0.1" stroke="#8B5CF6" strokeWidth="1.5"/>
        <g transform="translate(75, 10) rotate(35)">
          <rect x="0" y="0" width="10" height="45" rx="3" fill="#8B5CF6"/>
          <polygon points="0,45 10,45 5,58" fill="#F5F3FF" stroke="#8B5CF6" strokeWidth="1.5"/>
          <rect x="0" y="0" width="10" height="8" rx="3" fill="#DDD6FE"/>
        </g>
        <circle cx="98" cy="60" r="7" fill="#F5A623" stroke="#D4891A" strokeWidth="1.5"/>
        <circle cx="110" cy="68" r="6" fill="#8B5CF6" stroke="#7C3AED" strokeWidth="1.5"/>
        <circle cx="98" cy="76" r="5" fill="#10B981" stroke="#059669" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Build & Develop",
    desc: "Clean code, automated tests, and CI/CD pipelines. We deliver in iterative sprints so you see progress weekly — not just at the finish line.",
    outcome: "Working Product",
    color: "#F5A623",
    bg: "#FFFBEB",
    illustration: (
      <svg viewBox="0 0 120 100" fill="none" className="w-full h-full">
        <rect x="10" y="10" width="80" height="58" rx="8" fill="#1A0F00" stroke="#F5A623" strokeWidth="2.5"/>
        <rect x="18" y="18" width="64" height="42" rx="5" fill="#0D0700"/>
        <rect x="23" y="24" width="28" height="5" rx="2.5" fill="#F5A623" opacity="0.8"/>
        <rect x="27" y="33" width="38" height="4" rx="2" fill="#F5A623" opacity="0.5"/>
        <rect x="27" y="41" width="22" height="4" rx="2" fill="#FFB84D" opacity="0.6"/>
        <rect x="23" y="49" width="32" height="4" rx="2" fill="#F5A623" opacity="0.7"/>
        <rect x="56" y="49" width="4" height="10" rx="1" fill="#F5A623"/>
        <rect x="42" y="68" width="16" height="8" rx="2" fill="#1A0F00" stroke="#F5A623" strokeWidth="2"/>
        <rect x="28" y="74" width="44" height="6" rx="3" fill="#1A0F00" stroke="#F5A623" strokeWidth="2"/>
        <g transform="translate(88, 20)">
          <circle cx="14" cy="14" r="10" fill="#FFFBEB" stroke="#F5A623" strokeWidth="2.5"/>
          <circle cx="14" cy="14" r="4" fill="#F5A623"/>
          {[0,45,90,135,180,225,270,315].map((deg, i) => (
            <rect key={i} x="12.5" y="2" width="3" height="6" rx="1.5" fill="#F5A623" transform={`rotate(${deg} 14 14)`}/>
          ))}
        </g>
        <circle cx="100" cy="72" r="12" fill="#F5A623" stroke="#D4891A" strokeWidth="2"/>
        <path d="M95 72 L99 76 L106 67" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Launch & Support",
    desc: "We deploy to production, monitor performance, and fix issues fast. Post-launch support so you're never left alone after go-live.",
    outcome: "Live & Growing",
    color: "#10B981",
    bg: "#ECFDF5",
    illustration: (
      <svg viewBox="0 0 120 100" fill="none" className="w-full h-full">
        <g transform="translate(20, 5)">
          <path d="M40 5 C25 5 10 25 10 50 L10 70 L70 70 L70 50 C70 25 55 5 40 5Z" fill="#ECFDF5" stroke="#10B981" strokeWidth="2.5"/>
          <circle cx="40" cy="38" r="12" fill="white" stroke="#10B981" strokeWidth="2"/>
          <circle cx="40" cy="38" r="6" fill="#10B981" opacity="0.3"/>
          <path d="M10 65 L0 85 L20 75 Z" fill="#10B981" opacity="0.6"/>
          <path d="M70 65 L80 85 L60 75 Z" fill="#10B981" opacity="0.6"/>
          <ellipse cx="40" cy="78" rx="12" ry="16" fill="#F5A623" opacity="0.9"/>
          <ellipse cx="40" cy="82" rx="7" ry="10" fill="#FFB84D"/>
          <ellipse cx="40" cy="85" rx="4" ry="6" fill="white" opacity="0.6"/>
        </g>
        {[[8,12],[100,18],[110,55],[15,70],[105,80]].map(([x,y], i) => (
          <g key={i} transform={`translate(${x},${y})`}>
            <line x1="4" y1="0" x2="4" y2="8" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="0" y1="4" x2="8" y2="4" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round"/>
          </g>
        ))}
      </svg>
    ),
  },
];

const HEX = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";
const W = 230;
const H = 266;

function HexCard({ step, idx }: { step: typeof steps[0]; idx: number }) {
  const [hovered, setHovered] = useState(false);
  const down = idx % 2 === 1;

  return (
    <div className="flex flex-col items-center" style={{ marginTop: down ? 64 : 0 }}>

      {/* Step label above hex */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: idx * 0.13 }}
        className="mb-3 flex items-center gap-2"
      >
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center font-display font-black text-[11px] text-white"
          style={{ background: step.color, boxShadow: `0 3px 10px ${step.color}55` }}
        >
          {idx + 1}
        </div>
        <span className="text-[10px] font-black uppercase tracking-[0.18em]" style={{ color: step.color }}>
          Step {step.number}
        </span>
      </motion.div>

      {/* Hexagon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, delay: idx * 0.13, ease: "easeOut" as const }}
        whileHover={{ scale: 1.05, y: -6 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          filter: hovered
            ? `drop-shadow(0 20px 40px ${step.color}50)`
            : `drop-shadow(0 8px 20px ${step.color}28)`,
          transition: "filter 0.35s ease",
          cursor: "default",
        }}
      >
        {/* Border ring */}
        <div style={{ clipPath: HEX, width: W, height: H, background: hovered ? `${step.color}35` : `${step.color}20`, transition: "background 0.35s ease", display: "flex", alignItems: "center", justifyContent: "center" }}>
          {/* Fill */}
          <div
            style={{
              clipPath: HEX,
              width: W - 6,
              height: H - 7,
              background: `linear-gradient(160deg, white 0%, ${step.bg} 100%)`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              padding: "50px 34px 36px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Watermark step number */}
            <span
              className="absolute font-display font-black select-none pointer-events-none"
              style={{
                fontSize: 80,
                color: step.color,
                opacity: 0.05,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                lineHeight: 1,
              }}
            >
              {step.number}
            </span>

            {/* Illustration */}
            <div style={{ width: 90, height: 72, flexShrink: 0, position: "relative", zIndex: 1 }}>
              {step.illustration}
            </div>

            {/* Title */}
            <h3
              className="font-display font-black text-center leading-snug relative z-10"
              style={{ fontSize: 13, color: "#1A0F00", maxWidth: 140 }}
            >
              {step.title}
            </h3>
          </div>
        </div>
      </motion.div>

      {/* Outcome badge */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: idx * 0.13 + 0.25 }}
        className="mt-4 text-center"
        style={{ maxWidth: W }}
      >
        <div
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full mb-3"
          style={{
            background: step.bg,
            border: `1.5px solid ${step.color}40`,
            boxShadow: `0 2px 8px ${step.color}18`,
          }}
        >
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: step.color }} />
          <span className="text-[11px] font-black tracking-wide" style={{ color: step.color }}>
            {step.outcome}
          </span>
        </div>
        <p className="text-[11.5px] text-txt-2 leading-relaxed">{step.desc}</p>
      </motion.div>
    </div>
  );
}

export default function HowWeWork() {
  return (
    <section className="py-8 lg:py-14 bg-surface px-8 lg:px-16 overflow-hidden">
      <div className="mx-auto max-w-[1440px]">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
          className="mb-10 lg:mb-20 text-center"
        >
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-txt">
            From First Call to <span className="gradient-text">Live Product</span>
          </h2>
          <p className="text-txt-2 mt-4 max-w-lg mx-auto leading-relaxed text-sm">
            No black boxes, no agency theatre. A clear four-step process so you always know exactly where your project stands and what comes next.
          </p>
        </motion.div>

        {/* ── Desktop hex row ── */}
        <div className="hidden lg:block relative">

          {/* Wavy connecting path */}
          <svg
            className="absolute inset-x-0 pointer-events-none z-0"
            style={{ top: 72, height: 180, width: "100%" }}
            viewBox="0 0 1000 180"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="flowGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%"   stopColor="#3B82F6" stopOpacity="0.4"/>
                <stop offset="33%"  stopColor="#8B5CF6" stopOpacity="0.4"/>
                <stop offset="66%"  stopColor="#F5A623" stopOpacity="0.4"/>
                <stop offset="100%" stopColor="#10B981" stopOpacity="0.4"/>
              </linearGradient>
            </defs>
            <path
              d="M 0,60 C 130,60 120,120 250,120 C 380,120 370,60 500,60 C 630,60 620,120 750,120 C 880,120 870,60 1000,60"
              fill="none"
              stroke="url(#flowGrad)"
              strokeWidth="2"
              strokeDasharray="10 6"
            />
            {[
              { x: 175, y: 93, r: -15 },
              { x: 425, y: 87, r: 15  },
              { x: 675, y: 93, r: -15 },
            ].map((a, i) => (
              <g key={i} transform={`translate(${a.x},${a.y}) rotate(${a.r})`}>
                <polyline
                  points="-5,-4 0,0 -5,4"
                  fill="none"
                  stroke="#D4891A"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.5"
                />
              </g>
            ))}
          </svg>

          <div className="relative flex justify-center items-start gap-4 z-10">
            <img
              src="/images/v3.png"
              alt=""
              aria-hidden
              className="absolute pointer-events-none select-none object-contain object-bottom"
              style={{
                left: "calc(50% - 650px)",
                bottom: 0,
                height: 320,
                width: "auto",
                opacity: 0.92,
              }}
            />
            {steps.map((s, i) => (
              <HexCard key={s.number} step={s} idx={i} />
            ))}
          </div>
        </div>

        {/* ── Mobile: vertical stack with connecting line ── */}
        <div className="lg:hidden relative">
          <div className="absolute left-[calc(50%-1px)] top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-green-200 z-0" />
          <div className="flex flex-col items-center gap-8 relative z-10">
            {steps.map((s, i) => (
              <motion.div
                key={s.number}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div style={{ filter: `drop-shadow(0 6px 16px ${s.color}35)` }}>
                  <div style={{ clipPath: HEX, width: 170, height: 196, background: `${s.color}18`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ clipPath: HEX, width: 164, height: 190, background: `linear-gradient(160deg, white 0%, ${s.bg} 100%)`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6, padding: "36px 24px 28px" }}>
                      <div style={{ width: 66, height: 54 }}>{s.illustration}</div>
                      <h3 className="font-display font-black text-center text-[11.5px] leading-snug" style={{ color: "#1A0F00" }}>{s.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mt-3"
                  style={{ background: s.bg, border: `1.5px solid ${s.color}40` }}>
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: s.color }} />
                  <span className="text-[10px] font-black" style={{ color: s.color }}>{s.outcome}</span>
                </div>
                <p className="text-[11px] text-txt-2 text-center mt-2 max-w-[220px] leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
