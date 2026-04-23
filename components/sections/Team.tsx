"use client";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

const abir = {
  name: "F. M Abir Hossain",
  role: "Co-Founder & CEO",
  quote: "Every project we take on, I treat like it's my own startup. If it doesn't work for you, it doesn't work for us.",
  image: "/images/ab.PNG",
};

const safwan = {
  name: "Safwan-Ul-Islam",
  role: "Co-Founder & CTO",
  quote: "We build quietly with purpose and precision, so when the product reaches you, it speaks clearly on its own.",
  image: "/images/sa.PNG",
};

function FoundersVideo() {
  const [muted, setMuted] = useState(true);
  const ref = useRef<HTMLVideoElement>(null);

  function toggleMute() {
    if (!ref.current) return;
    ref.current.muted = !muted;
    setMuted(!muted);
  }

  return (
    <div className="relative rounded-2xl overflow-hidden"
      style={{ boxShadow: "0 8px 48px rgba(0,0,0,0.12)" }}>
      <video ref={ref} src="/videos/founders-intro.mp4"
        autoPlay muted loop playsInline className="w-full h-auto block" />
      <button onClick={toggleMute}
        className="absolute bottom-4 right-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all hover:opacity-80"
        style={{ background: "rgba(0,0,0,0.40)", color: "#fff", backdropFilter: "blur(8px)" }}>
        {muted ? (
          <><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>Sound off</>
        ) : (
          <><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>Sound on</>
        )}
      </button>
    </div>
  );
}

export default function Team() {
  return (
    <section id="team" className="py-16 lg:py-24 px-8 lg:px-16 bg-[#F9F9F9] border-t border-border overflow-hidden">
      <div className="mx-auto max-w-[1440px]">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="section-pill mb-4 inline-flex">The Team</span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-txt mt-3">
            You Work With <span className="gradient-text">the Founders</span>
          </h2>
          <p className="text-txt-2 mt-3 max-w-sm mx-auto text-sm leading-relaxed">
            No account managers. No juniors. Just the two people who built this.
          </p>
        </motion.div>

        {/* Desktop: 3-column layout */}
        <div className="hidden lg:grid grid-cols-[240px_1fr_240px] gap-12 items-stretch">

          {/* Left col — Abir: image top, quote below */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }}
            className="flex flex-col justify-start gap-5 pt-4"
          >
            <img src={abir.image} alt={abir.name} className="w-full rounded-2xl object-cover" />
            <div>
              <p className="text-[16px] text-[#444] leading-relaxed italic">&ldquo;{abir.quote}&rdquo;</p>
              <p className="mt-3 font-semibold text-[14px] text-[#0A0A0A]">{abir.name}</p>
              <p className="text-[11px] font-medium uppercase tracking-widest mt-0.5" style={{ color: "#F5A623" }}>{abir.role}</p>
            </div>
          </motion.div>

          {/* Center — Video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55 }}
            className="flex items-center"
          >
            <div className="w-full">
              <FoundersVideo />
            </div>
          </motion.div>

          {/* Right col — Safwan: quote top, image below */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }}
            className="flex flex-col justify-end gap-5 pb-4"
          >
            <div>
              <p className="text-[16px] text-[#444] leading-relaxed italic">&ldquo;{safwan.quote}&rdquo;</p>
              <p className="mt-3 font-semibold text-[14px] text-[#0A0A0A]">{safwan.name}</p>
              <p className="text-[11px] font-medium uppercase tracking-widest mt-0.5" style={{ color: "#6366F1" }}>{safwan.role}</p>
            </div>
            <img src={safwan.image} alt={safwan.name} className="w-full rounded-2xl object-cover" />
          </motion.div>

        </div>

        {/* Mobile: stacked */}
        <div className="flex flex-col gap-10 lg:hidden">
          <div className="flex gap-4 items-start">
            <img src={abir.image} alt={abir.name} className="w-24 rounded-xl object-cover shrink-0" />
            <div>
              <p className="font-semibold text-[13px] text-[#0A0A0A]">{abir.name}</p>
              <p className="text-[10px] font-medium uppercase tracking-widest mt-0.5" style={{ color: "#F5A623" }}>{abir.role}</p>
              <p className="text-[12px] text-[#6B7280] leading-relaxed mt-2 italic">&ldquo;{abir.quote}&rdquo;</p>
            </div>
          </div>
          <FoundersVideo />
          <div className="flex gap-4 items-start">
            <img src={safwan.image} alt={safwan.name} className="w-24 rounded-xl object-cover shrink-0" />
            <div>
              <p className="font-semibold text-[13px] text-[#0A0A0A]">{safwan.name}</p>
              <p className="text-[10px] font-medium uppercase tracking-widest mt-0.5" style={{ color: "#6366F1" }}>{safwan.role}</p>
              <p className="text-[12px] text-[#6B7280] leading-relaxed mt-2 italic">&ldquo;{safwan.quote}&rdquo;</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
