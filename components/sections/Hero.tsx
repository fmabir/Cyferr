"use client";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const stats = [
  { value: "15+",  label: "Projects" },
  { value: "10+",  label: "Clients"  },
  { value: "3+",   label: "Countries"},
  { value: "100%", label: "On-time"  },
];

/* ── Illustrated workspace SVG ─────────────────────────────────────────────── */
function WorkspaceIllustration() {
  return (
    <svg viewBox="0 0 520 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">

      {/* ── Background blob ── */}
      <ellipse cx="270" cy="250" rx="200" ry="180"
        fill="#FFF3D9" opacity="0.8"/>

      {/* ── Main laptop body ── */}
      {/* Screen outer */}
      <rect x="120" y="100" width="280" height="200" rx="16"
        fill="#1A0F00" stroke="#F5A623" strokeWidth="3"/>
      {/* Screen bezel inner */}
      <rect x="132" y="112" width="256" height="176" rx="10"
        fill="#0D0700"/>
      {/* Screen glow */}
      <rect x="140" y="120" width="240" height="160" rx="8"
        fill="#F5A623" opacity="0.08"/>

      {/* Code lines on screen */}
      <rect x="158" y="140" width="90" height="7" rx="3.5" fill="#F5A623" opacity="0.7"/>
      <rect x="158" y="155" width="140" height="7" rx="3.5" fill="#F5A623" opacity="0.45"/>
      <rect x="168" y="170" width="70"  height="7" rx="3.5" fill="#FFB84D" opacity="0.5"/>
      <rect x="168" y="185" width="110" height="7" rx="3.5" fill="#F5A623" opacity="0.35"/>
      <rect x="158" y="200" width="60"  height="7" rx="3.5" fill="#FFB84D" opacity="0.6"/>
      <rect x="168" y="215" width="130" height="7" rx="3.5" fill="#F5A623" opacity="0.4"/>
      <rect x="158" y="230" width="80"  height="7" rx="3.5" fill="#F5A623" opacity="0.55"/>
      <rect x="168" y="245" width="50"  height="7" rx="3.5" fill="#FFB84D" opacity="0.4"/>

      {/* Cursor blink */}
      <rect x="158" y="260" width="8" height="14" rx="2" fill="#F5A623" opacity="0.9"/>

      {/* Laptop base / keyboard */}
      <rect x="95"  y="298" width="330" height="22" rx="8"
        fill="#2A1A05" stroke="#F5A623" strokeWidth="2"/>
      {/* Keyboard detail */}
      <rect x="175" y="294" width="170" height="6" rx="3"
        fill="#1A0F00" opacity="0.6"/>
      {/* Trackpad */}
      <rect x="220" y="306" width="80" height="8" rx="4"
        fill="#1A0F00" opacity="0.4"/>

      {/* ── Floating hex bubbles ── */}

      {/* Hex 1 — top right (Web) */}
      <g transform="translate(390, 70)">
        <path d="M28 0L52 14V42L28 56L4 42V14L28 0Z"
          fill="#FFF3D9" stroke="#F5A623" strokeWidth="2.5"/>
        {/* Globe icon */}
        <circle cx="28" cy="28" r="10" stroke="#F5A623" strokeWidth="1.8" fill="none"/>
        <ellipse cx="28" cy="28" rx="5" ry="10" stroke="#F5A623" strokeWidth="1.5" fill="none"/>
        <line x1="18" y1="28" x2="38" y2="28" stroke="#F5A623" strokeWidth="1.5"/>
      </g>

      {/* Hex 2 — left (Mobile) */}
      <g transform="translate(52, 160)">
        <path d="M24 0L44 11.5V34.5L24 46L4 34.5V11.5L24 0Z"
          fill="#FFF3D9" stroke="#F5A623" strokeWidth="2.5"/>
        {/* Phone icon */}
        <rect x="16" y="16" width="16" height="24" rx="3" stroke="#F5A623" strokeWidth="1.8" fill="none"/>
        <circle cx="24" cy="35" r="1.5" fill="#F5A623"/>
      </g>

      {/* Hex 3 — bottom right (AI) */}
      <g transform="translate(400, 310)">
        <path d="M26 0L48 13V39L26 52L4 39V13L26 0Z"
          fill="#FFF3D9" stroke="#F5A623" strokeWidth="2.5"/>
        {/* Brain/AI icon — simplified */}
        <circle cx="26" cy="26" r="9" stroke="#F5A623" strokeWidth="1.8" fill="none"/>
        <line x1="26" y1="17" x2="26" y2="22" stroke="#F5A623" strokeWidth="1.5"/>
        <line x1="26" y1="30" x2="26" y2="35" stroke="#F5A623" strokeWidth="1.5"/>
        <line x1="17" y1="26" x2="22" y2="26" stroke="#F5A623" strokeWidth="1.5"/>
        <line x1="30" y1="26" x2="35" y2="26" stroke="#F5A623" strokeWidth="1.5"/>
        <circle cx="26" cy="26" r="3" fill="#F5A623" opacity="0.6"/>
      </g>

      {/* Hex 4 — top left small (Design) */}
      <g transform="translate(75, 70)">
        <path d="M18 0L33 8.5V25.5L18 34L3 25.5V8.5L18 0Z"
          fill="#FFF3D9" stroke="#F5A623" strokeWidth="2"/>
        <circle cx="18" cy="17" r="5" stroke="#F5A623" strokeWidth="1.5" fill="none"/>
        <circle cx="18" cy="17" r="2" fill="#F5A623" opacity="0.7"/>
      </g>

      {/* ── Decorative stars / sparkles ── */}
      {/* Star 1 */}
      <g transform="translate(350, 55)">
        <line x1="8" y1="0"  x2="8"  y2="16" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="0" y1="8"  x2="16" y2="8"  stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="2" y1="2"  x2="14" y2="14" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        <line x1="14" y1="2" x2="2"  y2="14" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      </g>
      {/* Star 2 */}
      <g transform="translate(60, 280)">
        <line x1="6" y1="0"  x2="6"  y2="12" stroke="#D4891A" strokeWidth="2" strokeLinecap="round"/>
        <line x1="0" y1="6"  x2="12" y2="6"  stroke="#D4891A" strokeWidth="2" strokeLinecap="round"/>
      </g>
      {/* Star 3 */}
      <g transform="translate(460, 160)">
        <line x1="5" y1="0" x2="5"  y2="10" stroke="#F5A623" strokeWidth="2" strokeLinecap="round"/>
        <line x1="0" y1="5" x2="10" y2="5"  stroke="#F5A623" strokeWidth="2" strokeLinecap="round"/>
      </g>
      {/* Dot accents */}
      <circle cx="440" cy="100" r="5" fill="#F5A623" opacity="0.4"/>
      <circle cx="100" cy="350" r="4" fill="#F5A623" opacity="0.35"/>
      <circle cx="480" cy="280" r="3" fill="#D4891A" opacity="0.5"/>
      <circle cx="90"  cy="130" r="3" fill="#F5A623" opacity="0.3"/>
      <circle cx="430" cy="390" r="6" fill="#FFF3D9" stroke="#F5A623" strokeWidth="2"/>
      <circle cx="140" cy="400" r="5" fill="#FFF3D9" stroke="#F5A623" strokeWidth="2"/>

      {/* ── Connecting dotted lines ── */}
      <line x1="175" y1="126" x2="418" y2="98"
        stroke="#F5A623" strokeWidth="1.2" strokeDasharray="4 6" opacity="0.35"/>
      <line x1="120" y1="200" x2="96" y2="194"
        stroke="#F5A623" strokeWidth="1.2" strokeDasharray="4 6" opacity="0.35"/>
      <line x1="400" y1="296" x2="426" y2="336"
        stroke="#F5A623" strokeWidth="1.2" strokeDasharray="4 6" opacity="0.35"/>

      {/* ── Small bee / mascot hint ── */}
      <g transform="translate(305, 380)">
        {/* Body */}
        <ellipse cx="20" cy="22" rx="14" ry="18" fill="#F5A623" stroke="#D4891A" strokeWidth="2"/>
        {/* Stripes */}
        <rect x="7"  y="18" width="26" height="5" rx="2" fill="#D4891A" opacity="0.6"/>
        <rect x="7"  y="25" width="26" height="5" rx="2" fill="#D4891A" opacity="0.4"/>
        {/* Wings */}
        <ellipse cx="6"  cy="16" rx="8"  ry="6"  fill="white" stroke="#F5A623" strokeWidth="1.5" opacity="0.85" transform="rotate(-20 6 16)"/>
        <ellipse cx="34" cy="16" rx="8"  ry="6"  fill="white" stroke="#F5A623" strokeWidth="1.5" opacity="0.85" transform="rotate(20 34 16)"/>
        {/* Eyes */}
        <circle cx="15" cy="14" r="3" fill="white" stroke="#1A0F00" strokeWidth="1.2"/>
        <circle cx="25" cy="14" r="3" fill="white" stroke="#1A0F00" strokeWidth="1.2"/>
        <circle cx="15" cy="14" r="1.5" fill="#1A0F00"/>
        <circle cx="25" cy="14" r="1.5" fill="#1A0F00"/>
        {/* Antennae */}
        <line x1="14" y1="7"  x2="10" y2="2"  stroke="#1A0F00" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="26" y1="7"  x2="30" y2="2"  stroke="#1A0F00" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="10" cy="2" r="2" fill="#F5A623" stroke="#D4891A" strokeWidth="1"/>
        <circle cx="30" cy="2" r="2" fill="#F5A623" stroke="#D4891A" strokeWidth="1"/>
      </g>
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
              <WorkspaceIllustration />
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
