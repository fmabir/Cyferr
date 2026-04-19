"use client";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const stats = [
  { value: "15+",  label: "Projects" },
  { value: "10+",  label: "Clients"  },
  { value: "3+",   label: "Countries"},
  { value: "100%", label: "On-time"  },
];

/* ── Hive Network illustration ─────────────────────────────────────────────── */
const NODES = [
  { cx: 405, cy: 240, label: "Web App",  dur: "1.8", begin: "0s"    },
  { cx: 333, cy: 114, label: "Mobile",   dur: "2.2", begin: "0.4s"  },
  { cx: 188, cy: 114, label: "AI / ML",  dur: "1.5", begin: "0.8s"  },
  { cx: 115, cy: 240, label: "Commerce", dur: "2.5", begin: "1.2s"  },
  { cx: 188, cy: 366, label: "SaaS",     dur: "2.0", begin: "1.6s"  },
  { cx: 333, cy: 366, label: "Design",   dur: "1.7", begin: "2.0s"  },
];

/* outer hexagon edges: each adjacent pair */
const EDGES = [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0]];

function HiveNetworkIllustration() {
  return (
    <svg viewBox="0 0 520 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="hglow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#F5A623" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#F5A623" stopOpacity="0"    />
        </radialGradient>
      </defs>

      {/* Ambient glow */}
      <circle cx="260" cy="240" r="210" fill="url(#hglow)" />

      {/* Outer hexagon edges */}
      {EDGES.map(([a, b], i) => (
        <line key={`edge-${i}`}
          x1={NODES[a].cx} y1={NODES[a].cy} x2={NODES[b].cx} y2={NODES[b].cy}
          stroke="#F5A623" strokeWidth="1" strokeDasharray="4 7" opacity="0.18" />
      ))}

      {/* Spokes — center to each node */}
      {NODES.map((n, i) => (
        <line key={`spoke-${i}`}
          x1="260" y1="240" x2={n.cx} y2={n.cy}
          stroke="#F5A623" strokeWidth="1.5" strokeDasharray="5 8" opacity="0.28" />
      ))}

      {/* Flowing dots along spokes */}
      {NODES.map((n, i) => (
        <circle key={`dot-${i}`} r="3.5" fill="#F5A623" opacity="0.85">
          <animateMotion
            dur={`${n.dur}s`}
            repeatCount="indefinite"
            begin={n.begin}
            path={`M 260 240 L ${n.cx} ${n.cy}`}
          />
        </circle>
      ))}

      {/* Pulsing rings around center */}
      <circle cx="260" cy="240" r="58" fill="none" stroke="#F5A623" strokeWidth="1.5" opacity="0.2">
        <animate attributeName="r" values="55;72;55" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.22;0;0.22" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="260" cy="240" r="80" fill="none" stroke="#F5A623" strokeWidth="1" opacity="0.1">
        <animate attributeName="r" values="76;96;76" dur="4.2s" repeatCount="indefinite" begin="0.6s" />
        <animate attributeName="opacity" values="0.12;0;0.12" dur="4.2s" repeatCount="indefinite" begin="0.6s" />
      </circle>

      {/* Center hexagon */}
      <path d="M260 188 L305 214 L305 266 L260 292 L215 266 L215 214 Z"
        fill="#FFF3D9" stroke="#F5A623" strokeWidth="3" />
      {/* Inner mini hex */}
      <path d="M260 210 L278 220 L278 240 L260 250 L242 240 L242 220 Z"
        fill="none" stroke="#F5A623" strokeWidth="1.5" opacity="0.45" />
      {/* Center code symbol */}
      <text x="260" y="246" textAnchor="middle" fontSize="18"
        fontWeight="900" fill="#F5A623" fontFamily="monospace" opacity="0.95">
        {'</>'}
      </text>

      {/* Satellite nodes */}
      {NODES.map((n, i) => {
        const labelY = n.cy < 240 ? n.cy - 38 : n.cy + 40;
        return (
          <g key={`node-${i}`}>
            <circle cx={n.cx} cy={n.cy} r="34" fill="#F5A623" opacity="0.07" />
            <circle cx={n.cx} cy={n.cy} r="26" fill="#FFF3D9" stroke="#F5A623" strokeWidth="2.5" />
            <text x={n.cx} y={labelY} textAnchor="middle"
              fontSize="10" fontWeight="700" fill="#6B4E1A" fontFamily="system-ui, sans-serif">
              {n.label}
            </text>
          </g>
        );
      })}

      {/* Node icons — Web (globe) */}
      <g transform="translate(393,228)">
        <circle cx="12" cy="12" r="9" stroke="#F5A623" strokeWidth="1.8" fill="none"/>
        <ellipse cx="12" cy="12" rx="4.5" ry="9" stroke="#F5A623" strokeWidth="1.4" fill="none"/>
        <line x1="3" y1="12" x2="21" y2="12" stroke="#F5A623" strokeWidth="1.4"/>
        <line x1="5" y1="7"  x2="19" y2="7"  stroke="#F5A623" strokeWidth="1" opacity="0.5"/>
        <line x1="5" y1="17" x2="19" y2="17" stroke="#F5A623" strokeWidth="1" opacity="0.5"/>
      </g>

      {/* Mobile (phone) */}
      <g transform="translate(323,103)">
        <rect x="5" y="2" width="14" height="22" rx="3" stroke="#F5A623" strokeWidth="1.8" fill="none"/>
        <circle cx="12" cy="20" r="1.5" fill="#F5A623"/>
        <line x1="9" y1="5" x2="15" y2="5" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round"/>
      </g>

      {/* AI (neural dots) */}
      <g transform="translate(176,102)">
        <circle cx="12" cy="12" r="3.5" fill="#F5A623" opacity="0.85"/>
        <circle cx="3"  cy="6"  r="2.5" fill="none" stroke="#F5A623" strokeWidth="1.5"/>
        <circle cx="21" cy="6"  r="2.5" fill="none" stroke="#F5A623" strokeWidth="1.5"/>
        <circle cx="3"  cy="18" r="2.5" fill="none" stroke="#F5A623" strokeWidth="1.5"/>
        <circle cx="21" cy="18" r="2.5" fill="none" stroke="#F5A623" strokeWidth="1.5"/>
        <line x1="5.5" y1="7"  x2="9"  y2="10" stroke="#F5A623" strokeWidth="1.2"/>
        <line x1="18.5" y1="7" x2="15" y2="10" stroke="#F5A623" strokeWidth="1.2"/>
        <line x1="5.5" y1="17" x2="9"  y2="14" stroke="#F5A623" strokeWidth="1.2"/>
        <line x1="18.5" y1="17" x2="15" y2="14" stroke="#F5A623" strokeWidth="1.2"/>
      </g>

      {/* Commerce (bag) */}
      <g transform="translate(103,228)">
        <path d="M3 9 L3 22 Q3 24 5 24 L19 24 Q21 24 21 22 L21 9 Z" stroke="#F5A623" strokeWidth="1.8" fill="none"/>
        <path d="M8 9 C8 4 16 4 16 9" stroke="#F5A623" strokeWidth="1.8" fill="none"/>
        <line x1="9" y1="15" x2="15" y2="15" stroke="#F5A623" strokeWidth="1.4" opacity="0.55"/>
      </g>

      {/* SaaS (stack of layers) */}
      <g transform="translate(176,354)">
        <rect x="2" y="4"  width="20" height="5" rx="1.5" stroke="#F5A623" strokeWidth="1.5" fill="none"/>
        <rect x="2" y="11" width="20" height="5" rx="1.5" stroke="#F5A623" strokeWidth="1.5" fill="none" opacity="0.7"/>
        <rect x="2" y="18" width="20" height="5" rx="1.5" stroke="#F5A623" strokeWidth="1.5" fill="none" opacity="0.4"/>
      </g>

      {/* Design (pen nib) */}
      <g transform="translate(321,354)">
        <path d="M4 20 L12 6 L20 20 Z" stroke="#F5A623" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
        <line x1="7" y1="15" x2="17" y2="15" stroke="#F5A623" strokeWidth="1.4"/>
        <circle cx="12" cy="5" r="2" fill="#F5A623" opacity="0.8"/>
        <line x1="12" y1="20" x2="12" y2="24" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round"/>
      </g>

      {/* Ambient sparkle dots */}
      {[
        { cx: 350, cy: 52,  r: 4,   dur: "2.1s",  begin: "0s"   },
        { cx: 466, cy: 178, r: 3,   dur: "2.9s",  begin: "0.5s" },
        { cx: 62,  cy: 318, r: 3,   dur: "3.4s",  begin: "1s"   },
        { cx: 468, cy: 382, r: 3.5, dur: "2.6s",  begin: "0.7s" },
        { cx: 78,  cy: 138, r: 2.5, dur: "3.1s",  begin: "1.4s" },
        { cx: 440, cy: 72,  r: 2.5, dur: "2.4s",  begin: "1.8s" },
      ].map((s, i) => (
        <circle key={`spark-${i}`} cx={s.cx} cy={s.cy} r={s.r} fill="#F5A623" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0.08;0.4" dur={s.dur} repeatCount="indefinite" begin={s.begin}/>
        </circle>
      ))}

      {/* Node pulse animations — one ring per node */}
      {NODES.map((n, i) => (
        <circle key={`pulse-${i}`} cx={n.cx} cy={n.cy} r="28" fill="none" stroke="#F5A623" strokeWidth="1" opacity="0">
          <animate attributeName="r" values="28;46;28" dur="3.5s" repeatCount="indefinite" begin={`${i * 0.6}s`}/>
          <animate attributeName="opacity" values="0.25;0;0.25" dur="3.5s" repeatCount="indefinite" begin={`${i * 0.6}s`}/>
        </circle>
      ))}
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-bg hex-bg pt-16">

      {/* Blob bg decoration */}
      <div
        className="pointer-events-none absolute right-0 top-0 w-[55%] h-full opacity-40 blob"
        style={{ background: "radial-gradient(ellipse at 70% 40%, #FFF3D9 0%, #FFEEC2 50%, transparent 75%)" }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 lg:px-10 py-8 lg:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* ── Left: text ── */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4"
            >
              <span className="section-pill">
                <Sparkles size={11} fill="currentColor" />
                Web · Mobile · AI · Always Affordable
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-display font-black leading-[1.06] tracking-tight text-txt mb-5"
              style={{ fontSize: "clamp(2rem, 4.8vw, 3.8rem)" }}
            >
              We Build Digital Products
              <br />
              <span className="gradient-text relative inline-block">
                Without Overcharging You.
                {/* Underline squiggle */}
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 520 12" fill="none">
                  <path d="M2 8 C80 2, 180 12, 260 6 S440 2, 518 8" stroke="#F5A623" strokeWidth="3" strokeLinecap="round" fill="none"/>
                </svg>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-txt-2 leading-relaxed max-w-xl mb-5"
            >
              We build websites, apps, and AI products that rival what top agencies
              deliver — at a fraction of what they charge. Scoped clearly,
              delivered fast, zero surprise invoices.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 mb-6"
            >
              <a href="#contact" className="btn-cartoon px-7 py-3.5 text-base w-full sm:w-auto justify-center">
                Start a Project <ArrowRight size={16} />
              </a>
              <a href="#work" className="btn-outline px-7 py-3.5 text-base w-full sm:w-auto justify-center">
                See Our Work
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="flex flex-wrap gap-4 mb-5"
            >
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center bg-surface border-2 border-border rounded-2xl px-5 py-3"
                  style={{ boxShadow: "3px 4px 0px #F0DDB0" }}
                >
                  <span className="font-display font-black text-2xl text-amber leading-none">{s.value}</span>
                  <span className="text-xs text-txt-3 font-semibold mt-0.5">{s.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Trust bar */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="border-t-2 border-border pt-6"
            >
              {/* Rating badges */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-1.5 bg-surface border-2 border-border rounded-xl px-3 py-1.5"
                  style={{ boxShadow: "2px 3px 0px #F0DDB0" }}>
                  <span className="text-sm">⭐</span>
                  <div>
                    <p className="text-[10px] font-black text-txt leading-none">4.9 / 5.0</p>
                    <p className="text-[9px] text-txt-3 font-semibold">Client Rating</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 bg-surface border-2 border-border rounded-xl px-3 py-1.5"
                  style={{ boxShadow: "2px 3px 0px #F0DDB0" }}>
                  <span className="text-sm">🕐</span>
                  <div>
                    <p className="text-[10px] font-black text-txt leading-none">24h Reply</p>
                    <p className="text-[9px] text-txt-3 font-semibold">Response time</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 bg-surface border-2 border-border rounded-xl px-3 py-1.5"
                  style={{ boxShadow: "2px 3px 0px #F0DDB0" }}>
                  <span className="text-sm">🔒</span>
                  <div>
                    <p className="text-[10px] font-black text-txt leading-none">NDA Ready</p>
                    <p className="text-[9px] text-txt-3 font-semibold">IP protected</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Right: illustration ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            {/* Floating hex bubbles behind */}
            <motion.div
              animate={{ y: [0, -14, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-4 w-16 h-16 opacity-60 hidden lg:block"
            >
              <svg viewBox="0 0 60 68" fill="none">
                <path d="M30 2L56 16.5V45.5L30 60L4 45.5V16.5L30 2Z"
                  fill="#FFF3D9" stroke="#F5A623" strokeWidth="2.5"/>
              </svg>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0], rotate: [0, -4, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-6 w-12 h-12 opacity-50 hidden lg:block"
            >
              <svg viewBox="0 0 48 54" fill="none">
                <path d="M24 2L44 13.5V36.5L24 48L4 36.5V13.5L24 2Z"
                  fill="#FFF3D9" stroke="#F5A623" strokeWidth="2.5"/>
              </svg>
            </motion.div>

            {/* Main illustration */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="w-full max-w-[520px]"
            >
              <HiveNetworkIllustration />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Wave bottom divider */}
      <div className="absolute bottom-0 inset-x-0 wave-top">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
          <path d="M0,40 C240,10 480,55 720,35 C960,15 1200,50 1440,30 L1440,60 L0,60 Z"
            fill="#FFFFFF"/>
        </svg>
      </div>
    </section>
  );
}
