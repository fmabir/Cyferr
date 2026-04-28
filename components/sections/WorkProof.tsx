"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "15+",  label: "Projects Delivered", sub: "across 5+ countries",      color: "#F5A623" },
  { value: "4.9★", label: "Client Rating",       sub: "avg. across all projects", color: "#F5A623" },
  { value: "10+",  label: "Clients Served",      sub: "startups to SMEs",         color: "#10B981" },
  { value: "3+",   label: "Countries",           sub: "BD · AU · UK & more",      color: "#6366F1" },
  { value: "60%",  label: "More Affordable",     sub: "vs. comparable agencies",  color: "#F5A623" },
  { value: "<24h", label: "Reply Guarantee",     sub: "on every enquiry",         color: "#3B82F6" },
];

const quotes = [
  {
    text: "Honestly didn't expect this level of quality at this price. They built our inventory system in under 5 weeks and it's been running without a single issue since day one.",
    name: "Rafi A.", role: "Founder", country: "🇧🇩 Bangladesh", initial: "RA", color: "#F5A623",
  },
  {
    text: "My e-commerce site was done in 3 weeks. Sales picked up right after launch. These guys actually care about what they're building, not just billing hours.",
    name: "Tanzila H.", role: "E-commerce Owner", country: "🇧🇩 Bangladesh", initial: "TH", color: "#6366F1",
  },
  {
    text: "We needed a custom CRM fast. Zbrainstorm had a working prototype in the first week. Communication was clear throughout and they delivered exactly what was scoped.",
    name: "Imran K.", role: "Managing Director", country: "🇧🇩 Bangladesh", initial: "IK", color: "#10B981",
  },
  {
    text: "Found them online, wasn't sure what to expect. Ended up being one of the best vendor decisions I've made. Solid work, great communication across time zones.",
    name: "James T.", role: "Product Lead", country: "🇦🇺 Australia", initial: "JT", color: "#3B82F6",
  },
  {
    text: "They asked the right questions upfront, flagged things we hadn't thought of, and delivered a product we're genuinely proud to show clients.",
    name: "Sarah M.", role: "CEO", country: "🇬🇧 UK", initial: "SM", color: "#F5A623",
  },
  {
    text: "The mobile app they built works exactly as promised. No scope creep, no surprises on the invoice. Refreshingly straightforward to work with.",
    name: "Kwame A.", role: "Product Manager", country: "🇬🇭 Ghana", initial: "KA", color: "#6366F1",
  },
  {
    text: "I've used other freelancers and agencies before. Zbrainstorm is the first team that felt like a real partner — proactive, honest, and technically sharp.",
    name: "Daniel R.", role: "CTO", country: "🇺🇸 USA", initial: "DR", color: "#10B981",
  },
  {
    text: "Landing page was live in under 2 weeks. Clean design, fast load time, and the whole process felt smooth from brief to handoff.",
    name: "Priya N.", role: "Marketing Director", country: "🇸🇬 Singapore", initial: "PN", color: "#3B82F6",
  },
  {
    text: "We had a tight deadline and a half-built product. They picked it up, cleaned it up, and got us to launch on time. No drama.",
    name: "Lena H.", role: "Operations Director", country: "🇩🇪 Germany", initial: "LH", color: "#F5A623",
  },
  {
    text: "Pricing was transparent from the start. What was quoted is what we paid. The quality genuinely surprised me for the budget.",
    name: "Tariq M.", role: "CEO", country: "🇦🇪 UAE", initial: "TM", color: "#6366F1",
  },
  {
    text: "Fast, communicative, and technically competent. The AI chatbot they built handles a solid chunk of our support tickets automatically now.",
    name: "Amara S.", role: "Head of Product", country: "🇸🇳 Senegal", initial: "AS", color: "#10B981",
  },
  {
    text: "Three weeks from kickoff to live site. They kept us in the loop the whole way. Would absolutely work with them again.",
    name: "Marcus L.", role: "Startup Founder", country: "🇨🇦 Canada", initial: "ML", color: "#3B82F6",
  },
];

const PER_PAGE = 4;

export default function WorkProof() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const swipeRef = useRef<HTMLDivElement>(null);
  const [activeQuote, setActiveQuote] = useState(0);
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(quotes.length / PER_PAGE);
  const visibleQuotes = quotes.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  function handleSwipeScroll() {
    if (!swipeRef.current) return;
    const idx = Math.round(swipeRef.current.scrollLeft / swipeRef.current.offsetWidth);
    setActiveQuote(idx);
  }

  function goToQuote(i: number) {
    swipeRef.current?.scrollTo({ left: i * swipeRef.current.offsetWidth, behavior: "smooth" });
    setActiveQuote(i);
  }

  return (
    <section className="py-6 sm:py-10 lg:py-14 bg-bg-2 border-t border-border px-4 sm:px-8 lg:px-16">
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
            className="lg:w-[300px] shrink-0 p-4 sm:p-6 lg:p-8 flex flex-col gap-4 sm:gap-6"
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
          <div className="flex-1 p-4 sm:p-6 lg:p-8">
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
                    {quotes.slice(0, 5).map((q, i) => (
                      <div key={i}
                        className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center font-black text-[9px] text-white"
                        style={{ background: q.color, zIndex: 5 - i }}>
                        {q.initial}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="font-black text-xs text-txt leading-none">4.9★</p>
                    <p className="text-[9px] text-txt-3 font-semibold">verified clients</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mobile: swipeable one-at-a-time */}
            <div
              ref={swipeRef}
              onScroll={handleSwipeScroll}
              className="sm:hidden flex overflow-x-auto snap-x snap-mandatory gap-0"
              style={{ scrollbarWidth: "none" }}
            >
              {quotes.map((q, i) => (
                <div key={i} className="snap-start shrink-0 w-full pr-0">
                  <div className="flex flex-col gap-2.5 p-4 rounded-2xl cursor-default"
                    style={{ background: "#F9FAFB", border: "1px solid #F0F0F0" }}>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-0.5">
                        {[1,2,3,4,5].map(s => <span key={s} style={{ color: "#F5A623", fontSize: 11 }}>★</span>)}
                      </div>
                      <span className="font-black text-4xl leading-none select-none" style={{ color: q.color, opacity: 0.1 }}>&ldquo;</span>
                    </div>
                    <p className="text-sm leading-relaxed font-medium text-txt flex-1">&ldquo;{q.text}&rdquo;</p>
                    <div className="flex items-center gap-2.5 pt-3" style={{ borderTop: "1px solid #EBEBEB" }}>
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black text-white shrink-0"
                        style={{ background: q.color }}>
                        {q.initial}
                      </div>
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
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile dot indicators */}
            <div className="sm:hidden flex justify-center gap-2 mt-4">
              {quotes.map((_, i) => (
                <button key={i} onClick={() => goToQuote(i)}
                  className="rounded-full transition-all duration-300"
                  style={{ width: i === activeQuote ? 20 : 8, height: 8, background: i === activeQuote ? "#F5A623" : "#E5E7EB" }} />
              ))}
            </div>

            {/* Desktop: paginated 2-col grid */}
            <div className="hidden sm:block">
              <div className="grid grid-cols-2 gap-4">
                {visibleQuotes.map((q, i) => (
                  <motion.div
                    key={`${page}-${i}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -3, boxShadow: `0 10px 28px ${q.color}18` }}
                    className="flex flex-col gap-2.5 p-5 rounded-2xl cursor-default"
                    style={{ background: "#F9FAFB", border: "1px solid #F0F0F0" }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex gap-0.5">
                        {[1,2,3,4,5].map(s => <span key={s} style={{ color: "#F5A623", fontSize: 11 }}>★</span>)}
                      </div>
                      <span className="font-black text-4xl leading-none select-none" style={{ color: q.color, opacity: 0.1 }}>&ldquo;</span>
                    </div>
                    <p className="text-sm leading-relaxed font-medium text-txt flex-1">&ldquo;{q.text}&rdquo;</p>
                    <div className="flex items-center gap-2.5 pt-3" style={{ borderTop: "1px solid #EBEBEB" }}>
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black text-white shrink-0"
                        style={{ background: q.color, boxShadow: `0 3px 10px ${q.color}40` }}>
                        {q.initial}
                      </div>
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
              {/* Page nav */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex gap-1.5">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button key={i} onClick={() => setPage(i)}
                      className="rounded-full transition-all duration-300"
                      style={{ width: i === page ? 20 : 8, height: 8, background: i === page ? "#F5A623" : "#E5E7EB" }} />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button onClick={() => setPage(p => Math.max(0, p - 1))}
                    disabled={page === 0}
                    className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-txt-2 hover:border-amber hover:text-amber transition-all disabled:opacity-30">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                  <button onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
                    disabled={page === totalPages - 1}
                    className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-txt-2 hover:border-amber hover:text-amber transition-all disabled:opacity-30">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
