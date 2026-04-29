"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "30+",  label: "Projects Delivered", sub: "across 5+ countries",      color: "#F5A623", bg: "#FFF7E6", grad: ["#F5A623","#FBBF24"] },
  { value: "4.9★", label: "Client Rating",       sub: "out of 5.0 · 30+ reviews", color: "#F5A623", bg: "#FFF7E6", grad: ["#F59E0B","#F5A623"] },
  { value: "85%",  label: "Repeat Client Rate",  sub: "clients keep coming back", color: "#10B981", bg: "#ECFDF5", grad: ["#10B981","#34D399"] },
  { value: "100%", label: "On-time Delivery",    sub: "zero missed deadlines",    color: "#6366F1", bg: "#EEF2FF", grad: ["#6366F1","#818CF8"] },
  { value: "60%",  label: "More Affordable",     sub: "vs. comparable agencies",  color: "#F5A623", bg: "#FFF7E6", grad: ["#F5A623","#FCD34D"] },
  { value: "<24h", label: "Reply Guarantee",     sub: "on every enquiry",         color: "#3B82F6", bg: "#EFF6FF", grad: ["#3B82F6","#60A5FA"] },
];

const quotes = [
  { text: "Best agency decision we've made. Delivered our fintech dashboard in 6 weeks — on budget, pixel-perfect.", name: "Sarah M.", role: "CEO", country: "🇬🇧 UK", initial: "SM", color: "#F5A623", bg: "#FFF7E6" },
  { text: "Quality on par with top-tier US agencies at a fraction of the cost. Rock-solid since launch.", name: "Kwame A.", role: "Product Manager", country: "🇬🇭 Ghana", initial: "KA", color: "#6366F1", bg: "#EEF2FF" },
  { text: "The AI automation saved our team real hours every week. ROI was obvious within the first month.", name: "Lena H.", role: "Operations Director", country: "🇩🇪 Germany", initial: "LH", color: "#10B981", bg: "#ECFDF5" },
  { text: "They flagged things we hadn't thought of, suggested smarter approaches, and hit every milestone.", name: "Daniel R.", role: "CTO", country: "🇺🇸 USA", initial: "DR", color: "#3B82F6", bg: "#EFF6FF" },
];

const Stars = () => (
  <div className="flex gap-0.5">
    {[1,2,3,4,5].map(s => <span key={s} style={{ color:"#F5A623", fontSize:11 }}>★</span>)}
  </div>
);

/* ─────────────────────────────────────────────
   STYLE A — Dark Panel
───────────────────────────────────────────── */
function StyleA() {
  return (
    <div>
      <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">Style A — Dark Panel</h3>
      <div style={{ background: "#0F0F0F", borderRadius: 20, overflow: "hidden" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left dark */}
          <div className="p-8 lg:p-10" style={{ borderRight: "1px solid #1F1F1F" }}>
            <p className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: "#F5A623" }}>By the Numbers</p>
            <h2 className="font-black text-2xl text-white mb-6">The Numbers Behind <span style={{ color: "#F5A623" }}>the Work</span></h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {stats.map((s, i) => (
                <div key={i} className="flex flex-col gap-0.5">
                  <span className="font-black leading-none" style={{ fontSize: "clamp(1.6rem,2.4vw,2rem)", color: s.color }}>{s.value}</span>
                  <p className="font-bold text-[11px] text-white leading-tight">{s.label}</p>
                  <p className="text-[10px] leading-tight" style={{ color: "#555" }}>{s.sub}</p>
                  <div className="mt-1.5 h-[2px] rounded-full w-8" style={{ background: s.color + "60" }} />
                </div>
              ))}
            </div>
          </div>
          {/* Right dark */}
          <div className="p-8 lg:p-10">
            <p className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: "#F5A623" }}>Client Voices</p>
            <h2 className="font-black text-2xl text-white mb-6">What Our Clients <span style={{ color: "#F5A623" }}>Say</span></h2>
            <div className="flex flex-col gap-0">
              {quotes.map((q, i) => (
                <div key={i} className="py-4 flex flex-col gap-2" style={{ borderBottom: i < quotes.length-1 ? "1px solid #1F1F1F" : "none" }}>
                  <Stars />
                  <p className="text-sm leading-relaxed font-medium" style={{ color: "#D1D5DB" }}>&ldquo;{q.text}&rdquo;</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-black text-white shrink-0" style={{ background: q.color }}>{q.initial}</div>
                    <div>
                      <p className="font-black text-[11px] text-white leading-none">{q.name}</p>
                      <p className="text-[9px] mt-0.5" style={{ color: "#6B7280" }}>{q.role} · {q.country}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   STYLE B — Gradient Tiles
───────────────────────────────────────────── */
function StyleB() {
  return (
    <div>
      <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">Style B — Gradient Tiles</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left */}
        <div>
          <p className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: "#F5A623" }}>By the Numbers</p>
          <h2 className="font-black text-2xl text-gray-900 mb-6">The Numbers Behind <span style={{ color: "#F5A623" }}>the Work</span></h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {stats.map((s, i) => (
              <div key={i} className="rounded-2xl p-4 flex flex-col gap-1"
                style={{ background: `linear-gradient(135deg, ${s.grad[0]}, ${s.grad[1]})` }}>
                <span className="font-black leading-none text-white" style={{ fontSize: "clamp(1.5rem,2.2vw,1.9rem)" }}>{s.value}</span>
                <p className="font-bold text-[11px] text-white/90 leading-tight">{s.label}</p>
                <p className="text-[10px] text-white/60 leading-tight">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Right */}
        <div>
          <p className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: "#F5A623" }}>Client Voices</p>
          <h2 className="font-black text-2xl text-gray-900 mb-6">What Our Clients <span style={{ color: "#F5A623" }}>Say</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {quotes.map((q, i) => (
              <div key={i} className="rounded-2xl p-4 flex flex-col gap-2.5 relative overflow-hidden"
                style={{ background: "#fff", borderTop: `4px solid ${q.color}`, boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
                <div className="absolute top-2 right-3 font-black select-none pointer-events-none"
                  style={{ fontSize: 52, color: q.color, opacity: 0.08, lineHeight: 1 }}>&ldquo;</div>
                <Stars />
                <p className="text-sm leading-relaxed font-medium text-gray-700 flex-1 relative z-10">&ldquo;{q.text}&rdquo;</p>
                <div className="flex items-center gap-2 pt-2 relative z-10" style={{ borderTop: "1px solid #F0F0F0" }}>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-black text-white shrink-0" style={{ background: q.color }}>{q.initial}</div>
                  <div>
                    <p className="font-black text-[11px] text-gray-900 leading-none">{q.name}</p>
                    <p className="text-[9px] text-gray-400 mt-0.5">{q.role} · {q.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   STYLE C — Minimal / Type-first
───────────────────────────────────────────── */
function StyleC() {
  return (
    <div>
      <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">Style C — Minimal / Type-first</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left */}
        <div>
          <p className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: "#F5A623" }}>By the Numbers</p>
          <h2 className="font-black text-2xl text-gray-900 mb-8">The Numbers Behind <span style={{ color: "#F5A623" }}>the Work</span></h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-7">
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col gap-1.5">
                <span className="font-black leading-none" style={{ fontSize: "clamp(2rem,3vw,2.6rem)", color: s.color }}>{s.value}</span>
                <div className="h-[1.5px] w-10 rounded-full" style={{ background: s.color }} />
                <p className="font-bold text-[12px] text-gray-800 leading-tight">{s.label}</p>
                <p className="text-[10px] text-gray-400 leading-tight">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Right */}
        <div>
          <p className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: "#F5A623" }}>Client Voices</p>
          <h2 className="font-black text-2xl text-gray-900 mb-8">What Our Clients <span style={{ color: "#F5A623" }}>Say</span></h2>
          <div className="flex flex-col">
            {quotes.map((q, i) => (
              <div key={i} className="flex gap-4 py-5" style={{ borderBottom: i < quotes.length-1 ? "1px solid #E5E7EB" : "none" }}>
                <div className="font-black shrink-0 leading-none" style={{ fontSize: 40, color: q.color, lineHeight: 0.9 }}>&ldquo;</div>
                <div className="flex flex-col gap-2">
                  <Stars />
                  <p className="text-sm leading-relaxed text-gray-700 font-medium">{q.text}</p>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-black text-white shrink-0" style={{ background: q.color }}>{q.initial}</div>
                    <p className="font-black text-[11px] text-gray-800">{q.name}</p>
                    <span className="text-gray-300 text-xs">·</span>
                    <p className="text-[10px] text-gray-400">{q.role} · {q.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   STYLE D — Glass / Frosted
───────────────────────────────────────────── */
function StyleD() {
  return (
    <div>
      <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">Style D — Glass / Frosted</h3>
      <div className="relative rounded-3xl overflow-hidden p-8 lg:p-12"
        style={{ background: "linear-gradient(135deg, #FFF8F0 0%, #F0F4FF 50%, #F0FDF8 100%)" }}>
        {/* mesh blobs */}
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(245,166,35,0.12) 0%, transparent 70%)", transform: "translate(-50%,-50%)" }} />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.10) 0%, transparent 70%)", transform: "translate(50%,50%)" }} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10">
          {/* Left */}
          <div>
            <p className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: "#F5A623" }}>By the Numbers</p>
            <h2 className="font-black text-2xl text-gray-900 mb-6">The Numbers Behind <span style={{ color: "#F5A623" }}>the Work</span></h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {stats.map((s, i) => (
                <div key={i} className="rounded-2xl p-4 flex flex-col gap-1"
                  style={{
                    background: "rgba(255,255,255,0.65)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.85)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.06)"
                  }}>
                  <span className="font-black leading-none" style={{ fontSize: "clamp(1.5rem,2.2vw,1.9rem)", color: s.color }}>{s.value}</span>
                  <p className="font-bold text-[11px] text-gray-800 leading-tight">{s.label}</p>
                  <p className="text-[10px] text-gray-400 leading-tight">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Right */}
          <div>
            <p className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: "#F5A623" }}>Client Voices</p>
            <h2 className="font-black text-2xl text-gray-900 mb-6">What Our Clients <span style={{ color: "#F5A623" }}>Say</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {quotes.map((q, i) => (
                <div key={i} className="rounded-2xl p-4 flex flex-col gap-2.5"
                  style={{
                    background: "rgba(255,255,255,0.65)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.85)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.06)"
                  }}>
                  <div className="flex items-center justify-between">
                    <Stars />
                    <span className="font-black text-2xl leading-none" style={{ color: q.color, opacity: 0.2 }}>&ldquo;</span>
                  </div>
                  <p className="text-[12px] leading-relaxed font-medium text-gray-700 flex-1">&ldquo;{q.text}&rdquo;</p>
                  <div className="flex items-center gap-2 pt-2" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-black text-white shrink-0"
                      style={{ background: q.color, boxShadow: `0 2px 8px ${q.color}50` }}>{q.initial}</div>
                    <div>
                      <p className="font-black text-[11px] text-gray-900 leading-none">{q.name}</p>
                      <p className="text-[9px] text-gray-400 mt-0.5">{q.role} · {q.country}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   STYLE E — Bento Grid
───────────────────────────────────────────── */
function StyleE() {
  const bento = [
    { ...stats[0], span: "col-span-2 row-span-1" },
    { ...stats[1], span: "col-span-1 row-span-2" },
    { ...stats[2], span: "col-span-1 row-span-1" },
    { ...stats[3], span: "col-span-1 row-span-1" },
    { ...stats[4], span: "col-span-1 row-span-1" },
    { ...stats[5], span: "col-span-1 row-span-1" },
  ];
  return (
    <div>
      <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">Style E — Bento Grid</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left bento */}
        <div>
          <p className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: "#F5A623" }}>By the Numbers</p>
          <h2 className="font-black text-2xl text-gray-900 mb-6">The Numbers Behind <span style={{ color: "#F5A623" }}>the Work</span></h2>
          <div className="grid grid-cols-3 auto-rows-[90px] gap-3">
            {bento.map((s, i) => (
              <div key={i} className={`${s.span} rounded-2xl p-4 flex flex-col justify-between`}
                style={{ background: s.bg }}>
                <span className="font-black leading-none" style={{ fontSize: i === 1 ? "clamp(2rem,3vw,2.6rem)" : "clamp(1.4rem,2vw,1.8rem)", color: s.color }}>{s.value}</span>
                <div>
                  <p className="font-bold text-[11px] text-gray-800 leading-tight">{s.label}</p>
                  <p className="text-[9px] text-gray-400 mt-0.5">{s.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right stacked */}
        <div>
          <p className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: "#F5A623" }}>Client Voices</p>
          <h2 className="font-black text-2xl text-gray-900 mb-6">What Our Clients <span style={{ color: "#F5A623" }}>Say</span></h2>
          <div className="flex flex-col gap-3">
            {quotes.map((q, i) => (
              <div key={i} className="flex gap-4 items-start p-4 rounded-2xl"
                style={{ background: "#fff", boxShadow: "0 1px 8px rgba(0,0,0,0.05)", border: `1px solid ${q.color}20` }}>
                <div className="w-8 h-8 rounded-xl flex items-center justify-center text-[9px] font-black text-white shrink-0 mt-0.5"
                  style={{ background: q.color }}>{q.initial}</div>
                <div className="flex-1 min-w-0">
                  <Stars />
                  <p className="text-[12px] leading-relaxed text-gray-700 font-medium mt-1.5">&ldquo;{q.text}&rdquo;</p>
                  <p className="text-[10px] text-gray-400 mt-1.5 font-semibold">{q.name} · {q.role} · {q.country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   STYLE F — Bold Outlined
───────────────────────────────────────────── */
function StyleF() {
  return (
    <div>
      <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">Style F — Bold Outlined</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left */}
        <div>
          <p className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: "#F5A623" }}>By the Numbers</p>
          <h2 className="font-black text-2xl text-gray-900 mb-6">The Numbers Behind <span style={{ color: "#F5A623" }}>the Work</span></h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {stats.map((s, i) => (
              <div key={i} className="rounded-2xl p-4 flex flex-col gap-1"
                style={{ border: `2px solid ${s.color}`, background: "#fff" }}>
                <span className="font-black leading-none" style={{ fontSize: "clamp(1.5rem,2.2vw,1.9rem)", color: s.color }}>{s.value}</span>
                <p className="font-bold text-[11px] text-gray-800 leading-tight">{s.label}</p>
                <p className="text-[10px] text-gray-400 leading-tight">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Right */}
        <div>
          <p className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: "#F5A623" }}>Client Voices</p>
          <h2 className="font-black text-2xl text-gray-900 mb-6">What Our Clients <span style={{ color: "#F5A623" }}>Say</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {quotes.map((q, i) => (
              <div key={i} className="rounded-2xl p-4 flex flex-col gap-2.5"
                style={{ border: `2px solid ${q.color}`, background: q.bg }}>
                <Stars />
                <p className="text-[12px] leading-relaxed font-medium text-gray-800 flex-1">&ldquo;{q.text}&rdquo;</p>
                <div className="flex items-center gap-2 pt-2" style={{ borderTop: `1px solid ${q.color}40` }}>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-black text-white shrink-0" style={{ background: q.color }}>{q.initial}</div>
                  <div>
                    <p className="font-black text-[11px] text-gray-900 leading-none">{q.name}</p>
                    <p className="text-[9px] text-gray-500 mt-0.5">{q.role} · {q.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   STYLE G — Split Color Background
───────────────────────────────────────────── */
function StyleG() {
  return (
    <div>
      <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">Style G — Split Color Background</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden">
        {/* Left orange */}
        <div className="p-8 lg:p-10" style={{ background: "linear-gradient(145deg, #F5A623, #F59E0B)" }}>
          <p className="text-xs font-black uppercase tracking-widest mb-1 text-white/60">By the Numbers</p>
          <h2 className="font-black text-2xl text-white mb-6">The Numbers Behind <span className="underline decoration-white/40">the Work</span></h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {stats.map((s, i) => (
              <div key={i} className="rounded-2xl p-4 flex flex-col gap-1"
                style={{ background: "rgba(255,255,255,0.18)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.25)" }}>
                <span className="font-black leading-none text-white" style={{ fontSize: "clamp(1.4rem,2vw,1.8rem)" }}>{s.value}</span>
                <p className="font-bold text-[11px] text-white/90 leading-tight">{s.label}</p>
                <p className="text-[10px] text-white/60 leading-tight">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Right white */}
        <div className="p-8 lg:p-10 bg-white">
          <p className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: "#F5A623" }}>Client Voices</p>
          <h2 className="font-black text-2xl text-gray-900 mb-6">What Our Clients <span style={{ color: "#F5A623" }}>Say</span></h2>
          <div className="flex flex-col">
            {quotes.map((q, i) => (
              <div key={i} className="py-4 flex flex-col gap-2" style={{ borderBottom: i < quotes.length - 1 ? "1px solid #F3F4F6" : "none" }}>
                <Stars />
                <p className="text-[12px] leading-relaxed font-medium text-gray-700">&ldquo;{q.text}&rdquo;</p>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-black text-white shrink-0" style={{ background: q.color }}>{q.initial}</div>
                  <p className="font-black text-[11px] text-gray-900">{q.name}</p>
                  <span className="text-gray-200">·</span>
                  <p className="text-[10px] text-gray-400">{q.role} · {q.country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   STYLE H — Neon / Glow (Dark)
───────────────────────────────────────────── */
function StyleH() {
  return (
    <div>
      <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">Style H — Neon / Glow</h3>
      <div className="rounded-3xl p-8 lg:p-10" style={{ background: "#080808" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left */}
          <div>
            <p className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: "#F5A623" }}>By the Numbers</p>
            <h2 className="font-black text-2xl text-white mb-6">The Numbers Behind <span style={{ color: "#F5A623" }}>the Work</span></h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {stats.map((s, i) => (
                <div key={i} className="rounded-2xl p-4 flex flex-col gap-1 relative overflow-hidden"
                  style={{ background: "#111", border: `1px solid ${s.color}30` }}>
                  <div className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{ boxShadow: `inset 0 0 20px ${s.color}08` }} />
                  <span className="font-black leading-none" style={{ fontSize: "clamp(1.5rem,2.2vw,1.9rem)", color: s.color, textShadow: `0 0 20px ${s.color}80` }}>{s.value}</span>
                  <p className="font-bold text-[11px] text-gray-300 leading-tight">{s.label}</p>
                  <p className="text-[10px] text-gray-600 leading-tight">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Right */}
          <div>
            <p className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: "#F5A623" }}>Client Voices</p>
            <h2 className="font-black text-2xl text-white mb-6">What Our Clients <span style={{ color: "#F5A623" }}>Say</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {quotes.map((q, i) => (
                <div key={i} className="rounded-2xl p-4 flex flex-col gap-2.5 relative overflow-hidden"
                  style={{ background: "#111", border: `1px solid ${q.color}25` }}>
                  <div className="absolute top-0 left-0 w-full h-[2px]" style={{ background: `linear-gradient(90deg, ${q.color}, transparent)` }} />
                  <Stars />
                  <p className="text-[12px] leading-relaxed font-medium text-gray-400 flex-1">&ldquo;{q.text}&rdquo;</p>
                  <div className="flex items-center gap-2 pt-2" style={{ borderTop: "1px solid #1f1f1f" }}>
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-black text-white shrink-0"
                      style={{ background: q.color, boxShadow: `0 0 12px ${q.color}60` }}>{q.initial}</div>
                    <div>
                      <p className="font-black text-[11px] text-gray-200 leading-none">{q.name}</p>
                      <p className="text-[9px] text-gray-600 mt-0.5">{q.role} · {q.country}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   STYLE I — Narrow Stats Sidebar + Wide Quotes
   Stats panel 1/3 · Quotes 2/3
───────────────────────────────────────────── */
function StyleI() {
  return (
    <div>
      <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">Style I — Narrow Stats Sidebar</h3>
      <div className="flex flex-col lg:flex-row rounded-3xl overflow-hidden" style={{ border: "1px solid #E5E7EB" }}>
        {/* Sidebar: stats */}
        <div className="lg:w-[280px] shrink-0 p-7 flex flex-col gap-5"
          style={{ background: "#0A0A0A", borderRight: "1px solid #1A1A1A" }}>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color: "#F5A623" }}>By the Numbers</p>
            <h2 className="font-black text-lg text-white leading-tight">The Numbers <span style={{ color: "#F5A623" }}>Behind</span> the Work</h2>
          </div>
          <div className="flex flex-col gap-0">
            {stats.map((s, i) => (
              <div key={i} className="flex items-center gap-3 py-3" style={{ borderBottom: i < stats.length - 1 ? "1px solid #1A1A1A" : "none" }}>
                <span className="font-black w-16 shrink-0 leading-none" style={{ fontSize: "1.3rem", color: s.color }}>{s.value}</span>
                <div>
                  <p className="font-bold text-[11px] text-white leading-tight">{s.label}</p>
                  <p className="text-[9px] mt-0.5" style={{ color: "#555" }}>{s.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Main: quotes */}
        <div className="flex-1 p-7 bg-white">
          <p className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color: "#F5A623" }}>Client Voices</p>
          <h2 className="font-black text-lg text-gray-900 mb-5">What Our Clients <span style={{ color: "#F5A623" }}>Say</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {quotes.map((q, i) => (
              <div key={i} className="flex flex-col gap-2 p-4 rounded-2xl"
                style={{ background: q.bg }}>
                <Stars />
                <p className="text-[12px] leading-relaxed font-medium text-gray-800 flex-1">&ldquo;{q.text}&rdquo;</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-black text-white shrink-0" style={{ background: q.color }}>{q.initial}</div>
                  <div>
                    <p className="font-black text-[11px] text-gray-900 leading-none">{q.name}</p>
                    <p className="text-[9px] text-gray-400 mt-0.5">{q.role} · {q.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   STYLE J — Wide Quotes + Right Stats Rail
   Quotes 2/3 · Stats panel 1/3
───────────────────────────────────────────── */
function StyleJ() {
  return (
    <div>
      <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">Style J — Right Stats Rail</h3>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main quotes */}
        <div className="flex-1">
          <p className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color: "#F5A623" }}>Client Voices</p>
          <h2 className="font-black text-2xl text-gray-900 mb-6">What Our Clients <span style={{ color: "#F5A623" }}>Say</span></h2>
          <div className="flex flex-col">
            {quotes.map((q, i) => (
              <div key={i} className="flex gap-4 py-5" style={{ borderBottom: i < quotes.length - 1 ? "1px solid #F0F0F0" : "none" }}>
                <div className="w-8 h-8 rounded-xl flex items-center justify-center text-[9px] font-black text-white shrink-0 mt-0.5" style={{ background: q.color }}>{q.initial}</div>
                <div className="flex flex-col gap-1.5">
                  <Stars />
                  <p className="text-sm leading-relaxed font-medium text-gray-700">&ldquo;{q.text}&rdquo;</p>
                  <p className="text-[11px] font-bold text-gray-800">{q.name} <span className="font-normal text-gray-400">· {q.role} · {q.country}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right stats rail */}
        <div className="lg:w-[220px] shrink-0 rounded-2xl p-5 flex flex-col gap-4 self-start lg:sticky lg:top-8"
          style={{ background: "#FFFBF5", border: "1px solid #F0E8D0" }}>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest mb-0.5" style={{ color: "#F5A623" }}>By the Numbers</p>
            <p className="text-xs font-bold text-gray-500 leading-tight">Real metrics from real projects.</p>
          </div>
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col gap-0.5 pb-3" style={{ borderBottom: i < stats.length - 1 ? "1px solid #F0E8D0" : "none" }}>
              <span className="font-black leading-none" style={{ fontSize: "1.5rem", color: s.color }}>{s.value}</span>
              <p className="font-bold text-[11px] text-gray-800 leading-tight">{s.label}</p>
              <p className="text-[9px] text-gray-400">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   STYLE K — Pill Stats Bar + Full-width Quotes
   Horizontal stat pills above, quotes below
───────────────────────────────────────────── */
function StyleK() {
  return (
    <div>
      <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">Style K — Pill Stats Bar + Quotes Below</h3>
      <div className="rounded-3xl overflow-hidden" style={{ border: "1px solid #E5E7EB" }}>
        {/* Top stat bar */}
        <div className="px-8 py-6 flex flex-wrap gap-3 items-center justify-between"
          style={{ background: "#0A0A0A", borderBottom: "1px solid #1A1A1A" }}>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest" style={{ color: "#F5A623" }}>By the Numbers</p>
            <h2 className="font-black text-xl text-white mt-0.5">The Numbers <span style={{ color: "#F5A623" }}>Behind</span> the Work</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {stats.map((s, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-full"
                style={{ background: "#161616", border: `1px solid ${s.color}30` }}>
                <span className="font-black text-[13px] leading-none" style={{ color: s.color }}>{s.value}</span>
                <span className="text-[10px] font-semibold text-gray-400">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Bottom quotes grid */}
        <div className="p-8 bg-white">
          <p className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color: "#F5A623" }}>Client Voices</p>
          <h2 className="font-black text-xl text-gray-900 mb-5">What Our Clients <span style={{ color: "#F5A623" }}>Say</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quotes.map((q, i) => (
              <div key={i} className="flex flex-col gap-2 p-4 rounded-2xl"
                style={{ background: "#F9F9F9", borderTop: `3px solid ${q.color}` }}>
                <Stars />
                <p className="text-[11px] leading-relaxed text-gray-700 font-medium flex-1">&ldquo;{q.text}&rdquo;</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-black text-white shrink-0" style={{ background: q.color }}>{q.initial}</div>
                  <div>
                    <p className="font-black text-[10px] text-gray-900 leading-none">{q.name}</p>
                    <p className="text-[9px] text-gray-400 mt-0.5">{q.role} · {q.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   STYLE L — Vertical Left Sidebar (Orange accent)
   Tall left panel with stacked stats, quotes on right
───────────────────────────────────────────── */
function StyleL() {
  return (
    <div>
      <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">Style L — Tall Orange Sidebar</h3>
      <div className="flex flex-col lg:flex-row rounded-3xl overflow-hidden" style={{ background: "#fff", border: "1px solid #E5E7EB" }}>
        {/* Sidebar */}
        <div className="lg:w-[260px] shrink-0 p-7 flex flex-col gap-6"
          style={{ background: "linear-gradient(160deg, #F5A623 0%, #F59E0B 100%)" }}>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-white/60 mb-1">By the Numbers</p>
            <h2 className="font-black text-xl text-white leading-tight">The Numbers <br />Behind the Work</h2>
            <p className="text-[11px] text-white/60 mt-2">Real metrics. No inflated claims.</p>
          </div>
          <div className="flex flex-col gap-0">
            {stats.map((s, i) => (
              <div key={i} className="py-3 flex items-center gap-3"
                style={{ borderBottom: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.15)" : "none" }}>
                <span className="font-black leading-none w-14 shrink-0 text-white" style={{ fontSize: "1.4rem" }}>{s.value}</span>
                <div>
                  <p className="font-bold text-[11px] text-white leading-tight">{s.label}</p>
                  <p className="text-[9px] text-white/55 mt-0.5">{s.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Main quotes */}
        <div className="flex-1 p-7">
          <p className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color: "#F5A623" }}>Client Voices</p>
          <h2 className="font-black text-xl text-gray-900 mb-5">What Our Clients <span style={{ color: "#F5A623" }}>Say</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
            {quotes.map((q, i) => (
              <div key={i} className="flex flex-col gap-2.5 p-4 rounded-2xl"
                style={{ background: "#F9FAFB", border: "1px solid #F0F0F0" }}>
                <div className="flex items-center justify-between">
                  <Stars />
                  <span className="font-black text-3xl leading-none" style={{ color: q.color, opacity: 0.12 }}>&ldquo;</span>
                </div>
                <p className="text-[12px] leading-relaxed font-medium text-gray-700 flex-1">&ldquo;{q.text}&rdquo;</p>
                <div className="flex items-center gap-2 pt-2" style={{ borderTop: "1px solid #EBEBEB" }}>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-black text-white shrink-0" style={{ background: q.color }}>{q.initial}</div>
                  <div>
                    <p className="font-black text-[11px] text-gray-900 leading-none">{q.name}</p>
                    <p className="text-[9px] text-gray-400 mt-0.5">{q.role} · {q.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   STYLE M — Diagonal Slash Sidebar
   Sidebar has a parallelogram clip-path cut
───────────────────────────────────────────── */
function StyleM() {
  return (
    <div>
      <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">Style M — Diagonal Slash Sidebar</h3>
      <div className="flex flex-col lg:flex-row min-h-[420px] rounded-3xl overflow-hidden" style={{ background: "#fff", border: "1px solid #E5E7EB" }}>
        {/* Slashed sidebar */}
        <div className="relative lg:w-[310px] shrink-0 p-8 pr-16 flex flex-col gap-5"
          style={{
            background: "linear-gradient(150deg, #0A0A0A 60%, #1A1A1A 100%)",
            clipPath: "polygon(0 0, 100% 0, 88% 100%, 0 100%)",
          }}>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color: "#F5A623" }}>By the Numbers</p>
            <h2 className="font-black text-xl text-white leading-snug">The Numbers <span style={{ color: "#F5A623" }}>Behind</span> the Work</h2>
          </div>
          {stats.map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="font-black leading-none shrink-0 w-14" style={{ fontSize: "1.35rem", color: s.color }}>{s.value}</span>
              <div>
                <p className="font-bold text-[11px] text-white leading-tight">{s.label}</p>
                <p className="text-[9px] mt-0.5" style={{ color: "#555" }}>{s.sub}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Quotes */}
        <div className="flex-1 p-8 -ml-8 lg:-ml-0">
          <p className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color: "#F5A623" }}>Client Voices</p>
          <h2 className="font-black text-xl text-gray-900 mb-5">What Our Clients <span style={{ color: "#F5A623" }}>Say</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {quotes.map((q, i) => (
              <div key={i} className="flex flex-col gap-2 p-4 rounded-2xl" style={{ background: "#F9F9F9", borderLeft: `3px solid ${q.color}` }}>
                <Stars />
                <p className="text-[12px] leading-relaxed font-medium text-gray-700 flex-1">&ldquo;{q.text}&rdquo;</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-black text-white shrink-0" style={{ background: q.color }}>{q.initial}</div>
                  <p className="font-black text-[10px] text-gray-900">{q.name} <span className="font-normal text-gray-400">· {q.role}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   STYLE N — Circular Badge Stats Sidebar
   Stats as large coloured rings in narrow sidebar
───────────────────────────────────────────── */
function StyleN() {
  return (
    <div>
      <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">Style N — Circular Badge Sidebar</h3>
      <div className="flex flex-col lg:flex-row gap-0 rounded-3xl overflow-hidden" style={{ border: "1px solid #E5E7EB", background: "#fff" }}>
        {/* Sidebar circles */}
        <div className="lg:w-[260px] shrink-0 p-6 flex flex-col gap-4" style={{ background: "#F8F9FA", borderRight: "1px solid #E5E7EB" }}>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest mb-0.5" style={{ color: "#F5A623" }}>By the Numbers</p>
            <h2 className="font-black text-base text-gray-900 leading-snug">The Numbers <span style={{ color: "#F5A623" }}>Behind</span> the Work</h2>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-1.5">
                <div className="w-14 h-14 rounded-full flex items-center justify-center font-black text-white"
                  style={{ background: `linear-gradient(135deg, ${s.color}, ${s.color}BB)`, boxShadow: `0 4px 14px ${s.color}40`, fontSize: "0.72rem" }}>
                  {s.value}
                </div>
                <p className="text-[9px] font-bold text-gray-600 text-center leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Quotes */}
        <div className="flex-1 p-6">
          <p className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color: "#F5A623" }}>Client Voices</p>
          <h2 className="font-black text-xl text-gray-900 mb-5">What Our Clients <span style={{ color: "#F5A623" }}>Say</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {quotes.map((q, i) => (
              <div key={i} className="flex flex-col gap-2 p-4 rounded-2xl relative overflow-hidden"
                style={{ background: q.bg }}>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full opacity-20"
                  style={{ background: q.color }} />
                <Stars />
                <p className="text-[12px] leading-relaxed font-medium text-gray-800 flex-1">&ldquo;{q.text}&rdquo;</p>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-black text-white shrink-0" style={{ background: q.color }}>{q.initial}</div>
                  <div>
                    <p className="font-black text-[11px] text-gray-900 leading-none">{q.name}</p>
                    <p className="text-[9px] text-gray-500 mt-0.5">{q.role} · {q.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   STYLE O — Wave Edge Sidebar
   SVG wave separates sidebar from content
───────────────────────────────────────────── */
function StyleO() {
  return (
    <div>
      <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">Style O — Wave Edge Sidebar</h3>
      <div className="relative flex flex-col lg:flex-row rounded-3xl overflow-hidden min-h-[400px]" style={{ background: "#fff", border: "1px solid #E5E7EB" }}>
        {/* Sidebar bg */}
        <div className="lg:w-[300px] shrink-0 relative z-10 p-8 flex flex-col gap-5"
          style={{ background: "linear-gradient(160deg,#F5A623,#F59E0B)" }}>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest mb-1 text-white/60">By the Numbers</p>
            <h2 className="font-black text-xl text-white leading-snug">The Numbers <br /><span className="underline decoration-white/40">Behind the Work</span></h2>
          </div>
          {stats.map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="font-black leading-none w-16 shrink-0 text-white" style={{ fontSize: "1.4rem", textShadow: "0 2px 8px rgba(0,0,0,0.15)" }}>{s.value}</span>
              <div>
                <p className="font-bold text-[11px] text-white leading-tight">{s.label}</p>
                <p className="text-[9px] text-white/60 mt-0.5">{s.sub}</p>
              </div>
            </div>
          ))}
          {/* Wave overlay on right */}
          <svg className="absolute top-0 right-0 h-full" style={{ width: 40 }} viewBox="0 0 40 400" preserveAspectRatio="none">
            <path d="M0 0 Q40 100 0 200 Q40 300 0 400 L40 400 L40 0 Z" fill="#ffffff" />
          </svg>
        </div>
        {/* Quotes */}
        <div className="flex-1 p-8">
          <p className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color: "#F5A623" }}>Client Voices</p>
          <h2 className="font-black text-xl text-gray-900 mb-5">What Our Clients <span style={{ color: "#F5A623" }}>Say</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {quotes.map((q, i) => (
              <div key={i} className="flex flex-col gap-2.5 p-4 rounded-2xl"
                style={{ background: "#F9F9F9", borderBottom: `3px solid ${q.color}` }}>
                <Stars />
                <p className="text-[12px] leading-relaxed font-medium text-gray-700 flex-1">&ldquo;{q.text}&rdquo;</p>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-black text-white shrink-0" style={{ background: q.color }}>{q.initial}</div>
                  <div>
                    <p className="font-black text-[11px] text-gray-900 leading-none">{q.name}</p>
                    <p className="text-[9px] text-gray-400 mt-0.5">{q.role} · {q.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   STYLE P — Rounded Pill Sidebar
   Very large border-radius on sidebar = pill shape
───────────────────────────────────────────── */
function StyleP() {
  return (
    <div>
      <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">Style P — Rounded Pill Sidebar</h3>
      <div className="flex flex-col lg:flex-row gap-4 items-stretch">
        {/* Pill sidebar */}
        <div className="lg:w-[260px] shrink-0 p-7 flex flex-col gap-5 rounded-[40px]"
          style={{ background: "#0A0A0A" }}>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color: "#F5A623" }}>By the Numbers</p>
            <h2 className="font-black text-lg text-white leading-snug">The Numbers <span style={{ color: "#F5A623" }}>Behind</span> the Work</h2>
          </div>
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col gap-0.5 pl-3" style={{ borderLeft: `2px solid ${s.color}` }}>
              <span className="font-black leading-none" style={{ fontSize: "1.4rem", color: s.color }}>{s.value}</span>
              <p className="font-bold text-[11px] text-white leading-tight">{s.label}</p>
              <p className="text-[9px]" style={{ color: "#555" }}>{s.sub}</p>
            </div>
          ))}
        </div>
        {/* Quotes */}
        <div className="flex-1 rounded-[40px] p-7" style={{ background: "#F8F9FA", border: "1px solid #E5E7EB" }}>
          <p className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color: "#F5A623" }}>Client Voices</p>
          <h2 className="font-black text-xl text-gray-900 mb-5">What Our Clients <span style={{ color: "#F5A623" }}>Say</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {quotes.map((q, i) => (
              <div key={i} className="flex flex-col gap-2.5 p-4 rounded-3xl bg-white"
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                <div className="flex items-center justify-between">
                  <Stars />
                  <div className="px-2 py-0.5 rounded-full text-[9px] font-black" style={{ background: q.bg, color: q.color }}>Verified ✓</div>
                </div>
                <p className="text-[12px] leading-relaxed font-medium text-gray-700 flex-1">&ldquo;{q.text}&rdquo;</p>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-black text-white shrink-0" style={{ background: q.color }}>{q.initial}</div>
                  <div>
                    <p className="font-black text-[11px] text-gray-900 leading-none">{q.name}</p>
                    <p className="text-[9px] text-gray-400 mt-0.5">{q.role} · {q.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   STYLE Q — Overlapping Floating Sidebar
   Stats panel floats & overlaps quote cards
───────────────────────────────────────────── */
function StyleQ() {
  return (
    <div>
      <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">Style Q — Overlapping Floating Sidebar</h3>
      <div className="relative flex flex-col lg:flex-row gap-0">
        {/* Background quotes area */}
        <div className="flex-1 rounded-3xl p-8 pb-8 lg:pl-64" style={{ background: "#F8F9FA", border: "1px solid #E5E7EB" }}>
          <p className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color: "#F5A623" }}>Client Voices</p>
          <h2 className="font-black text-xl text-gray-900 mb-5">What Our Clients <span style={{ color: "#F5A623" }}>Say</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {quotes.map((q, i) => (
              <div key={i} className="flex flex-col gap-2.5 p-4 rounded-2xl bg-white"
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)", borderTop: `3px solid ${q.color}` }}>
                <Stars />
                <p className="text-[12px] leading-relaxed font-medium text-gray-700 flex-1">&ldquo;{q.text}&rdquo;</p>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-black text-white shrink-0" style={{ background: q.color }}>{q.initial}</div>
                  <p className="font-black text-[10px] text-gray-900">{q.name} <span className="font-normal text-gray-400">· {q.role}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Floating sidebar — absolutely positioned on desktop */}
        <div className="lg:absolute lg:left-0 lg:top-0 lg:h-full lg:w-56 rounded-3xl p-6 flex flex-col gap-4 z-10"
          style={{ background: "linear-gradient(160deg,#111,#1A1A1A)", boxShadow: "6px 0 32px rgba(0,0,0,0.18)" }}>
          <div>
            <p className="text-[9px] font-black uppercase tracking-widest mb-1" style={{ color: "#F5A623" }}>By the Numbers</p>
            <h2 className="font-black text-sm text-white leading-snug">Numbers <span style={{ color: "#F5A623" }}>Behind</span> the Work</h2>
          </div>
          {stats.map((s, i) => (
            <div key={i} className="rounded-xl px-3 py-2.5 flex flex-col gap-0.5"
              style={{ background: "#222", border: `1px solid ${s.color}25` }}>
              <span className="font-black leading-none" style={{ fontSize: "1.2rem", color: s.color }}>{s.value}</span>
              <p className="font-bold text-[10px] text-gray-300 leading-tight">{s.label}</p>
              <p className="text-[9px]" style={{ color: "#555" }}>{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12 text-center">
          <h1 className="font-black text-3xl text-gray-900 mb-2">WorkProof — Style Demo</h1>
          <p className="text-gray-500 text-sm">Pick the style you want and tell me — I'll apply it to the real section.</p>
        </div>
        <div className="flex flex-col gap-20">
          <StyleA />
          <StyleB />
          <StyleC />
          <StyleD />
          <StyleE />
          <StyleF />
          <StyleG />
          <StyleH />
          <StyleI />
          <StyleJ />
          <StyleK />
          <StyleL />
          <StyleM />
          <StyleN />
          <StyleO />
          <StyleP />
          <StyleQ />

          {/* ══════════════════════════════════
              WHY ZBRAINSTORM — PARALLELOGRAM DEMOS
          ══════════════════════════════════ */}
          <div className="pt-10 border-t-2 border-gray-200">
            <h2 className="font-black text-2xl text-gray-900 mb-2">Why Brainstorm Web — Parallelogram Styles</h2>
            <p className="text-gray-400 text-sm mb-14">All keep the skewX parallelogram shape. Pick one to apply.</p>
            <div className="flex flex-col gap-20">
              <WHY_A />
              <WHY_B />
              <WHY_C />
              <WHY_D />
              <WHY_E />
              <WHY_F />
              <WHY_G />
              <WHY_H />
              <WHY_I />
              <WHY_J />
              <WHY_K />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* shared data */
const why = [
  { emoji:"💰", number:"60%", title:"More Affordable",         desc:"Agency-grade quality at startup-friendly prices. No inflated retainer fees.", color:"#F5A623", bg:"#FFF7E6", dark:"#D4891A" },
  { emoji:"⚡", number:"2×",  title:"Faster Delivery",         desc:"Tight timelines without cutting corners. Agile process, fast market entry.",  color:"#6366F1", bg:"#EEF2FF", dark:"#4F46E5" },
  { emoji:"🧩", number:"8+",  title:"Services Under One Roof", desc:"Design, dev, AI, strategy — one partner, not five vendors.",                  color:"#10B981", bg:"#ECFDF5", dark:"#059669" },
  { emoji:"🌍", number:"3+",  title:"Countries & Growing",     desc:"Clients across continents. Async across time zones with zero friction.",       color:"#3B82F6", bg:"#EFF6FF", dark:"#2563EB" },
];
const SK = -12;
const counterStyle = { transform: `skewX(${-SK}deg)` } as React.CSSProperties;

/* ── WHY A — Gradient fill, dark bg wrapper ── */
function WHY_A() {
  return (
    <div>
      <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">A — Gradient Fill on Dark</h3>
      <div className="rounded-3xl p-8 lg:p-10" style={{ background:"#0A0A0A" }}>
        <p className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color:"#F5A623" }}>Why Brainstorm Web</p>
        <h2 className="font-black text-2xl text-white mb-8">Why Pay More for the Same <span style={{ color:"#F5A623" }}>Quality?</span></h2>
        <div className="flex gap-4 items-stretch">
          {why.map((r,i) => (
            <div key={i} className="relative flex-1 min-h-[300px] rounded-xl overflow-hidden cursor-default"
              style={{ transform:`skewX(${SK}deg)`, background:`linear-gradient(170deg,${r.color},${r.dark})`, boxShadow:`0 8px 32px ${r.color}40` }}>
              <div className="absolute inset-0 flex flex-col justify-between p-5 py-7" style={counterStyle}>
                {/* Watermark number */}
                <div className="absolute -bottom-2 -right-2 font-black leading-none select-none pointer-events-none text-white/10"
                  style={{ fontSize:80 }}>{r.number}</div>
                <div className="flex flex-col gap-2 relative z-10">
                  <span style={{ fontSize:26 }}>{r.emoji}</span>
                  <span className="font-black leading-none text-white" style={{ fontSize:"2rem" }}>{r.number}</span>
                </div>
                <div className="flex flex-col gap-1.5 relative z-10">
                  <h3 className="font-black text-[13px] text-white leading-snug">{r.title}</h3>
                  <p className="text-[10px] text-white/65 leading-relaxed">{r.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── WHY B — Outlined with thick colored border + white bg ── */
function WHY_B() {
  return (
    <div>
      <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">B — Bold Outlined, White</h3>
      <div className="rounded-3xl p-8 lg:p-10" style={{ background:"#F8F9FA", border:"1px solid #E5E7EB" }}>
        <p className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color:"#F5A623" }}>Why Brainstorm Web</p>
        <h2 className="font-black text-2xl text-gray-900 mb-8">Why Pay More for the Same <span style={{ color:"#F5A623" }}>Quality?</span></h2>
        <div className="flex gap-4 items-stretch px-2">
          {why.map((r,i) => (
            <div key={i} className="relative flex-1 min-h-[300px] rounded-xl overflow-hidden cursor-default bg-white"
              style={{ transform:`skewX(${SK}deg)`, border:`2.5px solid ${r.color}`, boxShadow:`6px 6px 0px ${r.color}` }}>
              <div className="absolute inset-0 flex flex-col justify-between p-5 py-7" style={counterStyle}>
                <div className="flex flex-col gap-2">
                  <span style={{ fontSize:28 }}>{r.emoji}</span>
                  <span className="font-black leading-none" style={{ fontSize:"2rem", color:r.color }}>{r.number}</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-black text-[13px] text-gray-900 leading-snug">{r.title}</h3>
                  <p className="text-[10px] text-gray-500 leading-relaxed">{r.desc}</p>
                  <div className="w-6 h-1 rounded-full mt-1" style={{ background:r.color }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── WHY C — Overlapping with depth shadows ── */
function WHY_C() {
  return (
    <div>
      <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">C — Overlapping Depth</h3>
      <div className="rounded-3xl p-8 lg:p-10" style={{ background:"#fff", border:"1px solid #E5E7EB" }}>
        <p className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color:"#F5A623" }}>Why Brainstorm Web</p>
        <h2 className="font-black text-2xl text-gray-900 mb-8">Why Pay More for the Same <span style={{ color:"#F5A623" }}>Quality?</span></h2>
        <div className="flex items-stretch" style={{ gap:0 }}>
          {why.map((r,i) => (
            <div key={i} className="relative flex-1 min-h-[300px] rounded-xl overflow-hidden cursor-default"
              style={{
                transform:`skewX(${SK}deg)`,
                background:r.bg,
                border:`1.5px solid ${r.color}30`,
                marginLeft: i > 0 ? -18 : 0,
                zIndex: i,
                boxShadow:`8px 0 24px rgba(0,0,0,0.10)`,
              }}>
              <div className="absolute inset-0 flex flex-col justify-between p-5 py-7" style={counterStyle}>
                <div className="flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background:r.color, fontSize:18 }}>{r.emoji}</div>
                  <span className="font-black leading-none mt-1" style={{ fontSize:"2rem", color:r.color }}>{r.number}</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-black text-[13px] text-gray-900 leading-snug">{r.title}</h3>
                  <p className="text-[10px] text-gray-500 leading-relaxed">{r.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── WHY D — Frosted glass on gradient mesh ── */
function WHY_D() {
  return (
    <div>
      <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">D — Frosted Glass on Gradient Mesh</h3>
      <div className="relative rounded-3xl p-8 lg:p-10 overflow-hidden"
        style={{ background:"linear-gradient(135deg,#FFF3E0 0%,#E8F4FF 50%,#F0FFF8 100%)" }}>
        <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full pointer-events-none"
          style={{ background:"radial-gradient(circle,rgba(245,166,35,0.20) 0%,transparent 70%)",transform:"translate(-50%,-50%)" }}/>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full pointer-events-none"
          style={{ background:"radial-gradient(circle,rgba(99,102,241,0.15) 0%,transparent 70%)",transform:"translate(50%,50%)" }}/>
        <p className="text-[10px] font-black uppercase tracking-widest mb-1 relative z-10" style={{ color:"#F5A623" }}>Why Brainstorm Web</p>
        <h2 className="font-black text-2xl text-gray-900 mb-8 relative z-10">Why Pay More for the Same <span style={{ color:"#F5A623" }}>Quality?</span></h2>
        <div className="flex gap-4 items-stretch relative z-10">
          {why.map((r,i) => (
            <div key={i} className="relative flex-1 min-h-[300px] rounded-xl overflow-hidden cursor-default"
              style={{
                transform:`skewX(${SK}deg)`,
                background:"rgba(255,255,255,0.55)",
                backdropFilter:"blur(16px)",
                WebkitBackdropFilter:"blur(16px)",
                border:"1px solid rgba(255,255,255,0.85)",
                boxShadow:`0 8px 32px ${r.color}15`,
              }}>
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background:`linear-gradient(90deg,${r.color},${r.color}30)` }}/>
              <div className="absolute inset-0 flex flex-col justify-between p-5 py-7" style={counterStyle}>
                <div className="flex flex-col gap-2">
                  <span style={{ fontSize:28 }}>{r.emoji}</span>
                  <span className="font-black leading-none" style={{ fontSize:"2rem", color:r.color }}>{r.number}</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-black text-[13px] text-gray-900 leading-snug">{r.title}</h3>
                  <p className="text-[10px] text-gray-500 leading-relaxed">{r.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── WHY E — Neon glow on pitch black ── */
function WHY_E() {
  return (
    <div>
      <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">E — Neon Glow on Black</h3>
      <div className="rounded-3xl p-8 lg:p-10" style={{ background:"#060606" }}>
        <p className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color:"#F5A623" }}>Why Brainstorm Web</p>
        <h2 className="font-black text-2xl text-white mb-8">Why Pay More for the Same <span style={{ color:"#F5A623" }}>Quality?</span></h2>
        <div className="flex gap-4 items-stretch">
          {why.map((r,i) => (
            <div key={i} className="relative flex-1 min-h-[300px] rounded-xl overflow-hidden cursor-default"
              style={{
                transform:`skewX(${SK}deg)`,
                background:"#0F0F0F",
                border:`1px solid ${r.color}35`,
                boxShadow:`0 0 30px ${r.color}20, inset 0 0 30px ${r.color}05`,
              }}>
              <div className="absolute inset-0 flex flex-col justify-between p-5 py-7" style={counterStyle}>
                <div className="flex flex-col gap-2">
                  <span style={{ fontSize:28 }}>{r.emoji}</span>
                  <span className="font-black leading-none"
                    style={{ fontSize:"2rem", color:r.color, textShadow:`0 0 24px ${r.color}` }}>{r.number}</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-black text-[13px] text-gray-200 leading-snug">{r.title}</h3>
                  <p className="text-[10px] text-gray-500 leading-relaxed">{r.desc}</p>
                  <div className="w-8 h-[2px] rounded-full mt-1" style={{ background:r.color, boxShadow:`0 0 8px ${r.color}` }}/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── WHY F — Split: dark left heading + parallelogram cards ── */
function WHY_F() {
  return (
    <div>
      <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">F — Dark Sidebar + Tinted Cards</h3>
      <div className="flex flex-col lg:flex-row rounded-3xl overflow-hidden" style={{ border:"1px solid #E5E7EB" }}>
        {/* Sidebar */}
        <div className="lg:w-[240px] shrink-0 p-8 flex flex-col justify-between"
          style={{ background:"linear-gradient(160deg,#0A0A0A,#1A1A1A)" }}>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest mb-2" style={{ color:"#F5A623" }}>Why Brainstorm Web</p>
            <h2 className="font-black text-xl text-white leading-snug">Why Pay More <span style={{ color:"#F5A623" }}>for Less?</span></h2>
            <p className="text-[11px] text-gray-500 mt-3 leading-relaxed">Same quality. Honest price. Direct founder access.</p>
          </div>
          <div className="mt-6 flex flex-col gap-1 border-l-4 border-amber pl-4">
            <span className="font-black text-4xl text-white leading-none">60%</span>
            <span className="text-[10px] text-gray-500">cheaper than top agencies</span>
          </div>
        </div>
        {/* Cards */}
        <div className="flex-1 flex gap-3 p-6 items-stretch overflow-hidden bg-white">
          {why.map((r,i) => (
            <div key={i} className="relative flex-1 min-h-[260px] rounded-xl overflow-hidden cursor-default"
              style={{
                transform:`skewX(${SK}deg)`,
                background:r.bg,
                border:`1.5px solid ${r.color}20`,
                boxShadow:`4px 4px 16px ${r.color}15`,
              }}>
              <div className="absolute inset-0 flex flex-col justify-between p-4 py-6" style={counterStyle}>
                <div className="flex flex-col gap-1.5">
                  <span style={{ fontSize:24 }}>{r.emoji}</span>
                  <span className="font-black leading-none" style={{ fontSize:"1.8rem", color:r.color }}>{r.number}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-black text-[12px] text-gray-900 leading-snug">{r.title}</h3>
                  <p className="text-[10px] text-gray-500 leading-relaxed">{r.desc}</p>
                  <div className="w-5 h-[2px] rounded-full mt-1" style={{ background:r.color }}/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── WHY G — Staggered heights with large watermark ── */
function WHY_G() {
  const heights = [280, 340, 310, 260];
  return (
    <div>
      <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">G — Staggered Heights + Watermark</h3>
      <div className="rounded-3xl p-8 lg:p-10 bg-white" style={{ border:"1px solid #E5E7EB" }}>
        <p className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color:"#F5A623" }}>Why Brainstorm Web</p>
        <h2 className="font-black text-2xl text-gray-900 mb-10">Why Pay More for the Same <span style={{ color:"#F5A623" }}>Quality?</span></h2>
        <div className="flex gap-4 items-end">
          {why.map((r,i) => (
            <div key={i} className="relative flex-1 rounded-xl overflow-hidden cursor-default"
              style={{ transform:`skewX(${SK}deg)`, height:heights[i], background:r.bg, border:`1.5px solid ${r.color}20`, boxShadow:`0 4px 24px ${r.color}18` }}>
              <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none font-black"
                style={{ fontSize:100, color:r.color, opacity:0.07, transform:`skewX(${-SK}deg)` }}>{r.number}</div>
              <div className="absolute inset-0 flex flex-col justify-between p-5 py-6" style={{ transform:`skewX(${-SK}deg)` }}>
                <div className="flex flex-col gap-2">
                  <span style={{ fontSize:26 }}>{r.emoji}</span>
                  <span className="font-black leading-none" style={{ fontSize:"1.9rem", color:r.color }}>{r.number}</span>
                </div>
                <div>
                  <h3 className="font-black text-[12px] text-gray-900 leading-snug mb-1">{r.title}</h3>
                  <p className="text-[10px] text-gray-500 leading-relaxed">{r.desc}</p>
                  <div className="mt-3 w-8 h-[3px] rounded-full" style={{ background:r.color }}/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── WHY H — Monochrome amber progression ── */
function WHY_H() {
  const ambers = ["#F59E0B","#F5A623","#FBBF24","#FCD34D"];
  const textC  = ["#fff","#fff","#1a0f00","#1a0f00"];
  return (
    <div>
      <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">H — Monochrome Amber Progression</h3>
      <div className="rounded-3xl p-8 lg:p-10" style={{ background:"#1A0F00" }}>
        <p className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color:"#F5A623" }}>Why Brainstorm Web</p>
        <h2 className="font-black text-2xl text-white mb-10">Why Pay More for the Same <span style={{ color:"#F5A623" }}>Quality?</span></h2>
        <div className="flex gap-3 items-stretch">
          {why.map((r,i) => (
            <div key={i} className="relative flex-1 min-h-[300px] rounded-xl overflow-hidden cursor-default"
              style={{ transform:`skewX(${SK}deg)`, background:ambers[i], boxShadow:`0 8px 28px rgba(245,166,35,0.30)` }}>
              <div className="absolute inset-0 flex flex-col justify-between p-5 py-7" style={{ transform:`skewX(${-SK}deg)` }}>
                <div className="flex flex-col gap-1.5">
                  <span style={{ fontSize:26 }}>{r.emoji}</span>
                  <span className="font-black leading-none" style={{ fontSize:"2rem", color:textC[i] }}>{r.number}</span>
                </div>
                <div>
                  <h3 className="font-black text-[13px] leading-snug mb-1" style={{ color:textC[i] }}>{r.title}</h3>
                  <p className="text-[10px] leading-relaxed" style={{ color:i<2?"rgba(255,255,255,0.65)":"rgba(26,15,0,0.55)" }}>{r.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── WHY I — Half-fill horizon split ── */
function WHY_I() {
  return (
    <div>
      <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">I — Half-Fill Horizon Split</h3>
      <div className="rounded-3xl p-8 lg:p-10" style={{ background:"#F8F9FA", border:"1px solid #E5E7EB" }}>
        <p className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color:"#F5A623" }}>Why Brainstorm Web</p>
        <h2 className="font-black text-2xl text-gray-900 mb-10">Why Pay More for the Same <span style={{ color:"#F5A623" }}>Quality?</span></h2>
        <div className="flex gap-4 items-stretch">
          {why.map((r,i) => (
            <div key={i} className="relative flex-1 min-h-[300px] rounded-xl overflow-hidden cursor-default bg-white"
              style={{ transform:`skewX(${SK}deg)`, border:`1.5px solid ${r.color}25`, boxShadow:`0 4px 20px ${r.color}12` }}>
              <div className="absolute top-0 left-0 right-0 h-[48%]" style={{ background:r.color }}/>
              <div className="absolute inset-0 flex flex-col justify-between p-5 py-6" style={{ transform:`skewX(${-SK}deg)` }}>
                <div className="flex flex-col gap-1.5">
                  <span style={{ fontSize:26 }}>{r.emoji}</span>
                  <span className="font-black leading-none text-white" style={{ fontSize:"2.1rem" }}>{r.number}</span>
                </div>
                <div>
                  <h3 className="font-black text-[13px] text-gray-900 leading-snug mb-1">{r.title}</h3>
                  <p className="text-[10px] text-gray-500 leading-relaxed">{r.desc}</p>
                  <div className="mt-3 flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background:r.color }}/>
                    <div className="h-[1.5px] flex-1 rounded-full" style={{ background:`${r.color}40` }}/>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── WHY J — Soft 3D raised with colored base ── */
function WHY_J() {
  return (
    <div>
      <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">J — Soft 3D Raised Cards</h3>
      <div className="rounded-3xl p-8 lg:p-10" style={{ background:"#F1F3F5", border:"1px solid #E5E7EB" }}>
        <p className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color:"#F5A623" }}>Why Brainstorm Web</p>
        <h2 className="font-black text-2xl text-gray-900 mb-10">Why Pay More for the Same <span style={{ color:"#F5A623" }}>Quality?</span></h2>
        <div className="flex gap-5 items-stretch pb-3">
          {why.map((r,i) => (
            <div key={i} className="relative flex-1 min-h-[300px] cursor-default" style={{ transform:`skewX(${SK}deg)` }}>
              <div className="absolute inset-0 rounded-xl" style={{ background:r.color, opacity:0.5, transform:"translateY(6px)", borderRadius:12 }}/>
              <div className="relative rounded-xl overflow-hidden h-full" style={{ background:"#fff", border:`1.5px solid ${r.color}20` }}>
                <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background:r.color }}/>
                <div className="absolute inset-0 flex flex-col justify-between p-5 py-7" style={{ transform:`skewX(${-SK}deg)` }}>
                  <div className="flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg" style={{ background:r.bg }}>{r.emoji}</div>
                    <span className="font-black leading-none mt-1" style={{ fontSize:"2rem", color:r.color }}>{r.number}</span>
                  </div>
                  <div>
                    <h3 className="font-black text-[13px] text-gray-900 leading-snug mb-1.5">{r.title}</h3>
                    <p className="text-[10px] text-gray-500 leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── WHY K — Connected flow with arrow connectors ── */
function WHY_K() {
  return (
    <div>
      <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">K — Connected Flow with Arrows</h3>
      <div className="rounded-3xl p-8 lg:p-10" style={{ background:"#0A0A0A" }}>
        <p className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color:"#F5A623" }}>Why Brainstorm Web</p>
        <h2 className="font-black text-2xl text-white mb-10">Why Pay More for the Same <span style={{ color:"#F5A623" }}>Quality?</span></h2>
        <div className="flex items-center">
          {why.map((r,i) => (
            <div key={i} className="flex items-center flex-1 min-w-0">
              <div className="relative flex-1 min-h-[300px] rounded-xl overflow-hidden cursor-default"
                style={{ transform:`skewX(${SK}deg)`, background:`linear-gradient(170deg,${r.color}22,${r.color}08)`, border:`1px solid ${r.color}35`, boxShadow:`0 8px 32px ${r.color}15` }}>
                <div className="absolute inset-0 flex flex-col justify-between p-5 py-7" style={{ transform:`skewX(${-SK}deg)` }}>
                  <div className="flex flex-col gap-2">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm text-white" style={{ background:r.color }}>{i+1}</div>
                    <span className="font-black leading-none mt-1" style={{ fontSize:"1.9rem", color:r.color }}>{r.number}</span>
                  </div>
                  <div>
                    <h3 className="font-black text-[12px] text-gray-200 leading-snug mb-1">{r.title}</h3>
                    <p className="text-[10px] text-gray-500 leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              </div>
              {i < why.length - 1 && (
                <div className="shrink-0 flex items-center justify-center w-6 z-10">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
