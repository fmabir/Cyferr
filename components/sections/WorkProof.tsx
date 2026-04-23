"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "30+",  label: "Projects Delivered", sub: "across 5+ countries",       color: "#F5A623" },
  { value: "4.9★", label: "Client Rating",       sub: "out of 5.0 · 30+ reviews",  color: "#F5A623" },
  { value: "85%",  label: "Repeat Client Rate",  sub: "clients keep coming back",  color: "#10B981" },
  { value: "100%", label: "On-time Delivery",    sub: "zero missed deadlines",     color: "#6366F1" },
  { value: "60%",  label: "More Affordable",     sub: "vs. comparable agencies",   color: "#F5A623" },
  { value: "<24h", label: "Reply Guarantee",     sub: "on every enquiry",          color: "#3B82F6" },
];

const quotes = [
  {
    text: "Honestly didn't expect this level of quality at this price. They built our inventory system in under 5 weeks and it's been running without a single issue since day one.",
    name: "Rafi Ahmed", role: "Founder, StockBD", country: "🇧🇩 Bangladesh", initial: "RA", color: "#F5A623",
  },
  {
    text: "My e-commerce site was done in 3 weeks. Sales went up almost immediately after launch. These guys actually care about what they're building.",
    name: "Tanzila Hoque", role: "Owner, Shades & Co.", country: "🇧🇩 Bangladesh", initial: "TH", color: "#6366F1",
  },
  {
    text: "We needed a custom CRM fast. HiveTech had a working prototype in the first week. The communication throughout was clear and they never missed a deadline.",
    name: "Imran Khan", role: "MD, LogiTrack BD", country: "🇧🇩 Bangladesh", initial: "IK", color: "#10B981",
  },
  {
    text: "Found them online, wasn't sure what to expect. Ended up being one of the best vendor decisions I've made. Solid work, great communication across time zones.",
    name: "James T.", role: "Product Lead", country: "🇦🇺 Australia", initial: "JT", color: "#3B82F6",
  },
];

export default function WorkProof() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="py-16 lg:py-24 bg-bg-2 border-t border-border px-8 lg:px-16">
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row rounded-3xl overflow-hidden"
          style={{ background: "#fff", border: "1px solid #E5E7EB", boxShadow: "0 4px 32px rgba(0,0,0,0.06)" }}
        >
          {/* ── Orange sidebar ── */}
          <div
            className="lg:w-[300px] shrink-0 p-8 flex flex-col gap-6"
            style={{ background: "linear-gradient(160deg, #F5A623 0%, #F59E0B 100%)" }}
          >
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              <p className="text-[10px] font-black uppercase tracking-widest text-white/60 mb-1">By the Numbers</p>
              <h2 className="font-display font-black text-2xl text-white leading-tight">
                The Numbers<br />Behind the Work
              </h2>
              <p className="text-[11px] text-white/60 mt-2 leading-relaxed">
                Real metrics from real projects. No inflated claims.
              </p>
            </motion.div>

            <div className="flex flex-col gap-0">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.38, delay: 0.18 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="py-3 flex items-center gap-3"
                  style={{ borderBottom: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.18)" : "none" }}
                >
                  <span
                    className="font-display font-black leading-none w-16 shrink-0 text-white"
                    style={{ fontSize: "1.45rem" }}
                  >
                    {s.value}
                  </span>
                  <div>
                    <p className="font-bold text-[11px] text-white leading-tight">{s.label}</p>
                    <p className="text-[9px] mt-0.5 leading-tight" style={{ color: "rgba(255,255,255,0.55)" }}>{s.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Quote cards ── */}
          <div className="flex-1 p-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="mb-6"
            >
              <p className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color: "#F5A623" }}>Client Voices</p>
              <div className="flex items-end justify-between gap-4">
                <h2 className="font-display font-black text-2xl text-txt">
                  What Our Clients <span className="gradient-text">Say</span>
                </h2>
                <div className="flex items-center gap-2 shrink-0">
                  <div className="flex -space-x-2">
                    {quotes.map((q, i) => (
                      <div key={i}
                        className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center font-black text-[9px] text-white"
                        style={{ background: q.color, zIndex: quotes.length - i }}>
                        {q.initial}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="font-black text-xs text-txt leading-none">4.9★</p>
                    <p className="text-[9px] text-txt-3 font-semibold">30+ reviews</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quotes.map((q, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.25 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -3, boxShadow: `0 10px 28px ${q.color}18` }}
                  className="flex flex-col gap-2.5 p-5 rounded-2xl cursor-default"
                  style={{ background: "#F9FAFB", border: "1px solid #F0F0F0" }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map(s => (
                        <span key={s} style={{ color: "#F5A623", fontSize: 11 }}>★</span>
                      ))}
                    </div>
                    <span className="font-black text-4xl leading-none select-none" style={{ color: q.color, opacity: 0.1 }}>&ldquo;</span>
                  </div>

                  <p className="text-sm leading-relaxed font-medium text-txt flex-1">
                    &ldquo;{q.text}&rdquo;
                  </p>

                  <div className="flex items-center gap-2.5 pt-3" style={{ borderTop: "1px solid #EBEBEB" }}>
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={inView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.3 + i * 0.09, type: "spring", stiffness: 220 }}
                      className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black text-white shrink-0"
                      style={{ background: q.color, boxShadow: `0 3px 10px ${q.color}40` }}
                    >
                      {q.initial}
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <p className="font-black text-xs text-txt leading-none">{q.name}</p>
                      <p className="text-[10px] text-txt-3 font-semibold mt-0.5">{q.role} · {q.country}</p>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 rounded-full text-[9px] font-black shrink-0"
                      style={{ background: "#F0F0F0", color: "#9CA3AF" }}>
                      <svg width="7" height="7" viewBox="0 0 12 12" fill="none">
                        <path d="M10 3L5 9L2 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Verified
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
