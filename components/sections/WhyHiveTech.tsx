"use client";
import { motion } from "framer-motion";

const reasons = [
  { emoji: "💰", number: "60%", title: "More Affordable",         desc: "Agency-grade quality at startup-friendly prices. No inflated retainer fees." },
  { emoji: "⚡", number: "2×",  title: "Faster Delivery",         desc: "Tight timelines without cutting corners. Agile process, fast market entry." },
  { emoji: "🧩", number: "8+",  title: "Services Under One Roof", desc: "Design, dev, AI, strategy — one partner, not five vendors." },
  { emoji: "🌍", number: "3+",  title: "Countries & Growing",     desc: "Clients across continents. We work async across time zones with zero friction." },
];

const floatingDots = [
  { cx: "8%",  cy: "20%", r: 60,  opacity: 0.07, delay: 0   },
  { cx: "92%", cy: "30%", r: 80,  opacity: 0.06, delay: 1.2 },
  { cx: "15%", cy: "75%", r: 50,  opacity: 0.08, delay: 0.7 },
  { cx: "85%", cy: "70%", r: 70,  opacity: 0.05, delay: 2   },
];

export default function WhyHiveTech() {
  return (
    <section id="about" className="relative py-24 px-6 lg:px-10 bg-bg-2 overflow-hidden">
      {/* Wave top */}
      <div className="absolute top-0 inset-x-0">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block rotate-180">
          <path d="M0,40 C240,10 480,55 720,35 C960,15 1200,50 1440,30 L1440,60 L0,60 Z" fill="#FFFFFF"/>
        </svg>
      </div>

      {/* Vector art background */}
      <img
        src="/images/vector.png"
        alt=""
        aria-hidden
        className="absolute right-[-4%] top-1/2 -translate-y-1/2 w-[52%] max-w-[680px] pointer-events-none select-none opacity-[0.07] object-contain hidden lg:block"
      />

      {/* Floating amber orbs */}
      {floatingDots.map((d, i) => (
        <motion.div key={i}
          animate={{ scale: [1, 1.15, 1], opacity: [d.opacity, d.opacity * 1.6, d.opacity] }}
          transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: d.delay }}
          className="absolute rounded-full pointer-events-none hidden lg:block"
          style={{ left: d.cx, top: d.cy, width: d.r * 2, height: d.r * 2, background: "#F5A623", filter: "blur(40px)", opacity: d.opacity }}
        />
      ))}

      {/* Small floating hex */}
      <motion.div animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 right-16 opacity-20 hidden lg:block pointer-events-none">
        <svg viewBox="0 0 50 58" fill="none" width="50">
          <path d="M25 3L47 15V39L25 51L3 39V15L25 3Z" fill="#F5A623" stroke="#F5A623" strokeWidth="2"/>
        </svg>
      </motion.div>
      <motion.div animate={{ y: [0, 16, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-20 left-12 opacity-15 hidden lg:block pointer-events-none">
        <svg viewBox="0 0 40 46" fill="none" width="40">
          <path d="M20 2L37 11.5V30.5L20 40L3 30.5V11.5L20 2Z" fill="#F5A623" stroke="#F5A623" strokeWidth="2"/>
        </svg>
      </motion.div>

      <div className="mx-auto max-w-7xl pt-8 relative z-10">
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="section-pill mb-4">Why HiveTech
          </motion.span>
          <h2 className="font-display font-black text-4xl lg:text-5xl tracking-tight text-txt mt-4">
            {["Why", "Pay", "More"].map((word, i) => (
              <motion.span key={word}
                initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 + i * 0.09, ease: "easeOut" as const }}
                className="inline-block mr-[0.2em]">{word}
              </motion.span>
            ))}{" "}
            {["for", "the", "Same", "Quality?"].map((word, i) => (
              <motion.span key={word}
                initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.28 + i * 0.09, ease: "easeOut" as const }}
                className="inline-block mr-[0.2em] gradient-text">{word}
              </motion.span>
            ))}
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.55 }}
            className="text-txt-2 mt-4 max-w-md mx-auto leading-relaxed">
            Top agencies charge a premium for the brand name. We charge for the work. Same quality, honest price.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" as const }}
              whileHover={{ y: -5, rotate: i % 2 === 0 ? 0.8 : -0.8 }}
              className="flex flex-col gap-5 rounded-2xl border-2 border-border bg-surface p-7"
              style={{ boxShadow: "4px 6px 0px #F0DDB0" }}
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl">{r.emoji}</span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 + i * 0.1, type: "spring", bounce: 0.4 }}
                  className="font-display font-black text-4xl text-amber leading-none">
                  {r.number}
                </motion.span>
              </div>
              <div>
                <h3 className="font-display font-black text-lg text-txt mb-2">{r.title}</h3>
                <p className="text-sm text-txt-2 leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 inset-x-0">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block">
          <path d="M0,30 C360,55 720,5 1080,40 C1260,58 1380,20 1440,35 L1440,60 L0,60 Z" fill="#FFFFFF"/>
        </svg>
      </div>
    </section>
  );
}
