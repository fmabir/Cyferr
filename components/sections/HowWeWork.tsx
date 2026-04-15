"use client";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    emoji: "🔍",
    title: "Discovery & Planning",
    desc: "We deep-dive into your goals, users, and constraints. You get a clear project scope, timeline, and cost estimate — before a single line of code.",
    outcome: "✅ Aligned vision",
    color: "#3B82F6",
    bg: "#EFF6FF",
    illustration: (
      <svg viewBox="0 0 120 100" fill="none" className="w-full h-full">
        {/* Document */}
        <rect x="20" y="10" width="60" height="75" rx="8" fill="white" stroke="#3B82F6" strokeWidth="2.5"/>
        <rect x="30" y="25" width="40" height="5" rx="2.5" fill="#3B82F6" opacity="0.6"/>
        <rect x="30" y="35" width="30" height="5" rx="2.5" fill="#3B82F6" opacity="0.4"/>
        <rect x="30" y="45" width="36" height="5" rx="2.5" fill="#3B82F6" opacity="0.5"/>
        <rect x="30" y="55" width="24" height="5" rx="2.5" fill="#3B82F6" opacity="0.3"/>
        <rect x="30" y="65" width="34" height="5" rx="2.5" fill="#3B82F6" opacity="0.45"/>
        {/* Magnifying glass */}
        <circle cx="85" cy="65" r="18" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="2.5"/>
        <circle cx="85" cy="65" r="11" fill="white" stroke="#3B82F6" strokeWidth="2"/>
        <line x1="96" y1="76" x2="108" y2="90" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round"/>
        {/* Tick on document */}
        <circle cx="62" cy="15" r="8" fill="#3B82F6"/>
        <path d="M58 15 L61 18 L67 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
  },
  {
    number: "02",
    emoji: "🎨",
    title: "Design & Prototype",
    desc: "Our designers craft wireframes and high-fidelity prototypes. You interact with your product before development starts — zero surprises.",
    outcome: "✅ Approved design",
    color: "#8B5CF6",
    bg: "#F5F3FF",
    illustration: (
      <svg viewBox="0 0 120 100" fill="none" className="w-full h-full">
        {/* Canvas */}
        <rect x="10" y="15" width="75" height="65" rx="8" fill="white" stroke="#8B5CF6" strokeWidth="2.5"/>
        {/* Layout wireframe on canvas */}
        <rect x="18" y="23" width="59" height="12" rx="4" fill="#8B5CF6" opacity="0.2" stroke="#8B5CF6" strokeWidth="1.5"/>
        <rect x="18" y="40" width="27" height="30" rx="4" fill="#8B5CF6" opacity="0.15" stroke="#8B5CF6" strokeWidth="1.5"/>
        <rect x="50" y="40" width="27" height="13" rx="4" fill="#8B5CF6" opacity="0.1" stroke="#8B5CF6" strokeWidth="1.5"/>
        <rect x="50" y="58" width="27" height="12" rx="4" fill="#8B5CF6" opacity="0.1" stroke="#8B5CF6" strokeWidth="1.5"/>
        {/* Pencil */}
        <g transform="translate(75, 10) rotate(35)">
          <rect x="0" y="0" width="10" height="45" rx="3" fill="#8B5CF6"/>
          <polygon points="0,45 10,45 5,58" fill="#F5F3FF" stroke="#8B5CF6" strokeWidth="1.5"/>
          <rect x="0" y="0" width="10" height="8" rx="3" fill="#DDD6FE"/>
          <line x1="5" y1="54" x2="5" y2="58" stroke="#1A0F00" strokeWidth="1.5" strokeLinecap="round"/>
        </g>
        {/* Colour swatches */}
        <circle cx="98" cy="60" r="7" fill="#F5A623" stroke="#D4891A" strokeWidth="1.5"/>
        <circle cx="110" cy="68" r="6" fill="#8B5CF6" stroke="#7C3AED" strokeWidth="1.5"/>
        <circle cx="98" cy="76" r="5" fill="#10B981" stroke="#059669" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    number: "03",
    emoji: "⚙️",
    title: "Build & Develop",
    desc: "Clean code, automated tests, and CI/CD pipelines. We deliver in iterative sprints so you see progress weekly — not just at the finish line.",
    outcome: "✅ Working product",
    color: "#F5A623",
    bg: "#FFFBEB",
    illustration: (
      <svg viewBox="0 0 120 100" fill="none" className="w-full h-full">
        {/* Monitor */}
        <rect x="10" y="10" width="80" height="58" rx="8" fill="#1A0F00" stroke="#F5A623" strokeWidth="2.5"/>
        <rect x="18" y="18" width="64" height="42" rx="5" fill="#0D0700"/>
        {/* Code */}
        <rect x="23" y="24" width="28" height="5" rx="2.5" fill="#F5A623" opacity="0.8"/>
        <rect x="27" y="33" width="38" height="4" rx="2" fill="#F5A623" opacity="0.5"/>
        <rect x="27" y="41" width="22" height="4" rx="2" fill="#FFB84D" opacity="0.6"/>
        <rect x="23" y="49" width="32" height="4" rx="2" fill="#F5A623" opacity="0.7"/>
        {/* Cursor */}
        <rect x="56" y="49" width="4" height="10" rx="1" fill="#F5A623"/>
        {/* Stand */}
        <rect x="42" y="68" width="16" height="8" rx="2" fill="#1A0F00" stroke="#F5A623" strokeWidth="2"/>
        <rect x="28" y="74" width="44" height="6" rx="3" fill="#1A0F00" stroke="#F5A623" strokeWidth="2"/>
        {/* Gear */}
        <g transform="translate(88, 20)">
          <circle cx="14" cy="14" r="10" fill="#FFFBEB" stroke="#F5A623" strokeWidth="2.5"/>
          <circle cx="14" cy="14" r="4" fill="#F5A623"/>
          {[0,45,90,135,180,225,270,315].map((deg, i) => (
            <rect key={i} x="12.5" y="2" width="3" height="6" rx="1.5" fill="#F5A623"
              transform={`rotate(${deg} 14 14)`}/>
          ))}
        </g>
        {/* Checkmark badge */}
        <circle cx="100" cy="72" r="12" fill="#F5A623" stroke="#D4891A" strokeWidth="2"/>
        <path d="M95 72 L99 76 L106 67" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
  },
  {
    number: "04",
    emoji: "🚀",
    title: "Launch & Support",
    desc: "We deploy to production, monitor performance, and fix issues fast. Post-launch support so you're never left alone after go-live.",
    outcome: "✅ Live & growing",
    color: "#10B981",
    bg: "#ECFDF5",
    illustration: (
      <svg viewBox="0 0 120 100" fill="none" className="w-full h-full">
        {/* Rocket */}
        <g transform="translate(20, 5)">
          {/* Body */}
          <path d="M40 5 C25 5 10 25 10 50 L10 70 L70 70 L70 50 C70 25 55 5 40 5Z"
            fill="#ECFDF5" stroke="#10B981" strokeWidth="2.5"/>
          {/* Window */}
          <circle cx="40" cy="38" r="12" fill="white" stroke="#10B981" strokeWidth="2"/>
          <circle cx="40" cy="38" r="6" fill="#10B981" opacity="0.3"/>
          {/* Fins */}
          <path d="M10 65 L0 85 L20 75 Z" fill="#10B981" opacity="0.6"/>
          <path d="M70 65 L80 85 L60 75 Z" fill="#10B981" opacity="0.6"/>
          {/* Flame */}
          <ellipse cx="40" cy="78" rx="12" ry="16" fill="#F5A623" opacity="0.9"/>
          <ellipse cx="40" cy="82" rx="7"  ry="10" fill="#FFB84D"/>
          <ellipse cx="40" cy="85" rx="4"  ry="6"  fill="white" opacity="0.6"/>
        </g>
        {/* Stars */}
        {[[8,12],[100,18],[110,55],[15,70],[105,80]].map(([x,y], i) => (
          <g key={i} transform={`translate(${x},${y})`}>
            <line x1="4" y1="0" x2="4" y2="8" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="0" y1="4" x2="8" y2="4" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round"/>
          </g>
        ))}
        {/* Speed lines */}
        <line x1="2"   y1="40" x2="16"  y2="40" stroke="#10B981" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
        <line x1="2"   y1="48" x2="12"  y2="48" stroke="#10B981" strokeWidth="2" strokeLinecap="round" opacity="0.35"/>
        <line x1="106" y1="40" x2="118" y2="40" stroke="#10B981" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
        <line x1="108" y1="48" x2="118" y2="48" stroke="#10B981" strokeWidth="2" strokeLinecap="round" opacity="0.35"/>
      </svg>
    ),
  },
];

export default function HowWeWork() {
  return (
    <section className="py-24 bg-surface px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="section-pill mb-4">Our Process</span>
          <h2 className="font-display font-black text-4xl lg:text-5xl tracking-tight text-txt mt-4">
            From First Call to <span className="gradient-text">Live Product</span>
          </h2>
          <p className="text-txt-2 mt-4 max-w-lg mx-auto leading-relaxed">
            No black boxes, no agency theatre. A clear four-step process so you always know exactly where your project stands and what comes next.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting dashed line — desktop only */}
          <div className="hidden xl:block absolute top-[88px] left-[calc(12.5%+30px)] right-[calc(12.5%+30px)] h-0.5 border-t-2 border-dashed border-border-2 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative z-10">
            {steps.map((s, i) => (
              <motion.div
                key={s.number}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: i * 0.13, ease: "easeOut" as const }}
                className="flex flex-col items-center text-center gap-5"
              >
                {/* Number circle + illustration */}
                <div className="relative">
                  {/* Step number badge */}
                  <div
                    className="w-14 h-14 rounded-full border-2 flex items-center justify-center font-display font-black text-lg z-10 relative bg-surface"
                    style={{ borderColor: s.color, color: s.color, boxShadow: `3px 4px 0px ${s.color}44` }}
                  >
                    {s.number}
                  </div>
                  {/* Arrow between steps (desktop) */}
                  {i < steps.length - 1 && (
                    <span className="hidden lg:block absolute -right-[calc(50%+16px)] top-1/2 -translate-y-1/2 text-txt-3 text-lg select-none">
                      →
                    </span>
                  )}
                </div>

                {/* Illustration box */}
                <motion.div
                  whileHover={{ y: -5, rotate: 1 }}
                  className="w-full rounded-2xl border-2 p-4 overflow-hidden"
                  style={{ background: s.bg, borderColor: `${s.color}55`, boxShadow: `3px 5px 0px ${s.color}33`, height: "130px" }}
                >
                  {s.illustration}
                </motion.div>

                {/* Text */}
                <div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-xl">{s.emoji}</span>
                    <h3 className="font-display font-black text-base text-txt">{s.title}</h3>
                  </div>
                  <p className="text-sm text-txt-2 leading-relaxed mb-3">{s.desc}</p>
                  <span
                    className="inline-block text-xs font-black px-3 py-1 rounded-full border-2"
                    style={{ background: s.bg, borderColor: `${s.color}55`, color: s.color }}
                  >
                    {s.outcome}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
      </div>
    </section>
  );
}
