"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PROJECTS = [
  {
    id: 1, name: "GreenBite", type: "Restaurant Website",
    desc: "Farm-to-table restaurant — automated reservations, CMS-managed seasonal menu, and first-page local SEO. Built and shipped in 11 days.",
    color: "#22C55E",
    slides: [
      { img:"/images/a1.png",  a: "#DCFCE7", b: "#16A34A" },
      { img:"/images/a2.png",  a: "#4ADE80", b: "#166534" },
      { img:"/images/a3.png",  a: "#BBF7D0", b: "#15803D" },
    ],
  },
  {
    id: 2, name: "LuxStay", type: "Hotel Landing Page",
    desc: "Boutique hotel with direct booking, live room availability, and Stripe deposit payments — cutting Booking.com dependency.",
    color: "#F97316",
    slides: [
      { img:"/images/a4.png",  a: "#FED7AA", b: "#EA580C" },
      { img:"/images/a5.png",  a: "#FB923C", b: "#C2410C" },
      { img:"/images/a6.png",  a: "#FFEDD5", b: "#F97316" },
    ],
  },
  {
    id: 3, name: "TaskFlow", type: "SaaS Web App",
    desc: "Custom PM dashboard for a 12-person agency — real-time collaboration, client-facing portal, and automated weekly status emails.",
    color: "#3B82F6",
    slides: [
      { img:"/images/a7.png",  a: "#DBEAFE", b: "#1D4ED8" },
      { img:"/images/a8.png",  a: "#93C5FD", b: "#1E40AF" },
      { img:"/images/a9.png",  a: "#BFDBFE", b: "#2563EB" },
    ],
  },
  {
    id: 4, name: "ShopEase", type: "E-commerce Platform",
    desc: "Own-brand storefront with Stripe + bKash checkout, custom admin panel, and full inventory — moved off Daraz in 4 weeks.",
    color: "#A855F7",
    slides: [
      { img:"/images/a10.png", a: "#EDE9FE", b: "#7C3AED" },
      { img:"/images/a11.png", a: "#C084FC", b: "#6D28D9" },
      { img:"/images/a12.png", a: "#F3E8FF", b: "#9333EA" },
    ],
  },
  {
    id: 5, name: "MediBook", type: "Healthcare App",
    desc: "Cross-platform Flutter app connecting patients with 40+ verified doctors for in-person appointments and video consultations in Ghana.",
    color: "#0D9488",
    slides: [
      { img:"/images/a13.png", a: "#CCFBF1", b: "#0F766E" },
      { img:"/images/a14.png", a: "#5EEAD4", b: "#0D9488" },
      { img:"/images/a15.png", a: "#99F6E4", b: "#115E59" },
    ],
  },
  {
    id: 6, name: "NexusBot", type: "AI Support Agent",
    desc: "GPT-4 RAG pipeline trained on client docs — handles tier-1 support, escalates when unsure, and embeds in one script tag.",
    color: "#6366F1",
    slides: [
      { img:"/images/a16.png", a: "#E0E7FF", b: "#4338CA" },
      { img:"/images/a17.png", a: "#A5B4FC", b: "#3730A3" },
      { img:"/images/a18.png", a: "#C7D2FE", b: "#4F46E5" },
    ],
  },
];

const IMG_V = 2; // bump this number whenever you replace image files
function imgSrc(src: string) { return `${src}?v=${IMG_V}`; }

type Slide = { img?: string; a?: string; b?: string };
function slideBg(s: Slide) {
  return s.a ? `linear-gradient(140deg, ${s.a}, ${s.b})` : "transparent";
}

const N_PROJECTS = PROJECTS.length;
const N_SLIDES   = 3;
const IMG_MS     = 3000;



export default function FeaturedWork() {
  const [pi,  setPi]  = useState(0);
  const [si,  setSi]  = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);

  /* ── auto-advance ── */
  useEffect(() => {
    const t = setInterval(() => {
      setDir(1);
      setSi(prev => {
        const next = (prev + 1) % N_SLIDES;
        if (next === 0) setPi(p => (p + 1) % N_PROJECTS);
        return next;
      });
    }, IMG_MS);
    return () => clearInterval(t);
  }, []);

  function jumpTo(idx: number) {
    setDir(idx >= pi ? 1 : -1);
    setPi(idx);
    setSi(0);
  }

  const p     = PROJECTS[pi];
  const left  = p.slides[(si - 1 + N_SLIDES) % N_SLIDES];
  const ctr   = p.slides[si];
  const right = p.slides[(si + 1) % N_SLIDES];

  /* slide variants for center panel */
  const slideVariants = {
    enter: (d: number) => ({ x: d * 56, opacity: 0, scale: 0.97 }),
    show:  { x: 0, opacity: 1, scale: 1 },
    exit:  (d: number) => ({ x: d * -40, opacity: 0, scale: 1.02 }),
  };

  return (
    <section id="work" className="py-14 lg:py-24 bg-bg overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mb-8 lg:mb-10 text-center"
        >
          <span className="section-pill mb-4">Our Work</span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-txt mt-4">
            Work That <span className="gradient-text">Speaks for Itself</span>
          </h2>
          <p className="text-txt-2 mt-3 text-sm max-w-md mx-auto leading-relaxed">
            Real problems. Real solutions. Six of our favourite builds.
          </p>
        </motion.div>

        {/* ── Project nav ── */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
          {PROJECTS.map((proj, i) => (
            <button
              key={proj.id}
              onClick={() => jumpTo(i)}
              className="px-4 py-1.5 rounded-full text-xs font-black border-2 transition-all duration-300"
              style={{
                background:   i === pi ? proj.color : "transparent",
                color:        i === pi ? "#fff"     : "#8B5A2B",
                borderColor:  i === pi ? proj.color : "#F0DDB0",
                boxShadow:    i === pi ? `0 4px 16px ${proj.color}45` : "none",
                transform:    i === pi ? "scale(1.06)" : "scale(1)",
              }}
            >
              {proj.name}
            </button>
          ))}
        </div>

        {/* ── Three-panel carousel ── */}
        <div className="relative overflow-hidden" style={{ height: 520 }}>

          {/* Left partial — desktop only */}
          <div
            className="absolute hidden lg:block rounded-2xl overflow-hidden"
            style={{ width: "40%", height: "70%", top: "15%", left: "-19%" }}
          >
            <AnimatePresence mode="sync">
              <motion.div
                key={`L-${pi}-${si}`}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.55 }}
                style={{ background: slideBg(left) }}
              >
                {left.img && (
                  <img src={imgSrc(left.img)} alt="" className="absolute inset-0 w-full h-full object-cover object-top" />
                )}
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-y-0 right-0 w-20 pointer-events-none"
              style={{ background: "linear-gradient(to right, transparent, #FFFBF0)" }} />
            <div className="absolute inset-0 bg-bg/50 pointer-events-none" />
          </div>

          {/* Center — main */}
          <div className="absolute overflow-hidden rounded-3xl z-10" style={{ width: "100%", height: "100%" }}>
            <div className="absolute inset-0 lg:inset-auto lg:top-0 lg:left-[18%] lg:w-[64%] lg:h-full overflow-hidden rounded-3xl"
              style={{ boxShadow: `0 0 0 1px ${p.color}22, 0 8px 32px rgba(0,0,0,0.18), 0 32px 90px ${p.color}45, 0 2px 8px rgba(0,0,0,0.14)` }}>
              <AnimatePresence mode="sync" custom={dir}>
                <motion.div
                  key={`C-${pi}-${si}`}
                  className="absolute inset-0"
                  custom={dir}
                  variants={slideVariants}
                  initial="enter"
                  animate="show"
                  exit="exit"
                  transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
                  style={{ background: slideBg(ctr) }}
                >
                  {ctr.img && (
                    <img src={imgSrc(ctr.img)} alt={p.name} className="absolute inset-0 w-full h-full object-cover object-top" />
                  )}
                  {!ctr.img && (
                    <>
                      <div className="absolute inset-0"
                        style={{ background: "radial-gradient(ellipse at 28% 22%, rgba(255,255,255,0.40) 0%, transparent 58%)" }} />
                      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                        <span className="font-display font-black text-white select-none pointer-events-none leading-none text-center px-4"
                          style={{ fontSize: "clamp(2.5rem, 5vw, 6rem)", opacity: 0.07 }}>{p.name}</span>
                      </div>
                      <div className="absolute inset-0 opacity-[0.06]"
                        style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right partial — desktop only */}
          <div
            className="absolute hidden lg:block rounded-2xl overflow-hidden"
            style={{ width: "40%", height: "70%", top: "15%", left: "79%" }}
          >
            <AnimatePresence mode="sync">
              <motion.div
                key={`R-${pi}-${si}`}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.55 }}
                style={{ background: slideBg(right) }}
              >
                {right.img && (
                  <img src={imgSrc(right.img)} alt="" className="absolute inset-0 w-full h-full object-cover object-top" />
                )}
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-y-0 left-0 w-20 pointer-events-none"
              style={{ background: "linear-gradient(to left, transparent, #FFFBF0)" }} />
            <div className="absolute inset-0 bg-bg/50 pointer-events-none" />
          </div>

        </div>

        {/* ── Project info ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={pi}
            className="mt-7 text-center"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
          >
            <span
              className="inline-block text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-3 border-2"
              style={{ background: `${p.color}12`, color: p.color, borderColor: `${p.color}30` }}
            >
              {p.type}
            </span>
            <h3 className="font-display font-black text-2xl lg:text-3xl text-txt">{p.name}</h3>
            <p className="text-sm text-txt-2 mt-2 max-w-lg mx-auto leading-relaxed">{p.desc}</p>
          </motion.div>
        </AnimatePresence>

        {/* ── Slide dots ── */}
        <div className="flex justify-center items-center gap-2 mt-5">
          {Array.from({ length: N_SLIDES }).map((_, i) => (
            <div
              key={i}
              className="rounded-full transition-all duration-300"
              style={{
                width:      i === si ? 24 : 8,
                height:     8,
                background: i === si ? p.color : `${p.color}35`,
              }}
            />
          ))}
        </div>

        {/* ── Progress bar ── */}
        <div className="mt-4 max-w-xs mx-auto h-[2px] rounded-full overflow-hidden bg-border">
          <motion.div
            key={`${pi}-${si}`}
            className="h-full rounded-full"
            style={{ background: p.color }}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: IMG_MS / 1000, ease: "linear" }}
          />
        </div>

      </div>
    </section>
  );
}
