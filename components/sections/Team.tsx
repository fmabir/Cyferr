"use client";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

const abir = {
  name: "F. M Abir Hossain",
  role: "Co-Founder & CEO",
  quote: "Every project we take on, I treat like it's my own startup. If it doesn't work for you, it doesn't work for us.",
  image: "/images/Ab.png",
  linkedin: "https://www.linkedin.com/in/f-m-abir-hossain-2aa832242/",
  email: "fmabir2015@gmail.com",
};

const safwan = {
  name: "Safwan-Ul-Islam",
  role: "Co-Founder & CTO",
  quote: "We build quietly with purpose and precision, so when the product reaches you, it speaks clearly on its own.",
  image: "/images/sa.PNG",
  linkedin: "https://www.linkedin.com/in/safwan-ul-islam-a70b4439a/",
  email: "safwanislam0000@gmail.com",
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
    <div className="relative flex items-center justify-center py-4">
      {/* decorative glow behind */}
      <div className="absolute inset-0 rounded-full opacity-20 blur-2xl"
        style={{ background: "radial-gradient(circle, #F5A623 0%, #6366F1 100%)" }} />

      {/* card */}
      <div className="relative w-full" style={{ transform: "rotate(-1.5deg)" }}>
        {/* top label */}
        <div className="flex items-center justify-between px-1 pb-1.5">
          <span className="text-[9px] font-black uppercase tracking-widest" style={{ color: "#aaa" }}>Founders · Intro</span>
          <button onClick={toggleMute}
            className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-semibold transition-all hover:opacity-70"
            style={{ background: "rgba(0,0,0,0.08)", color: "#555" }}>
            {muted ? (
              <><svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>Muted</>
            ) : (
              <><svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>Sound</>
            )}
          </button>
        </div>

        {/* video */}
        <div className="rounded-xl overflow-hidden"
          style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.15), 0 0 0 1.5px rgba(0,0,0,0.08)" }}>
          <video ref={ref} src="/videos/founders-intro.mp4"
            autoPlay muted loop playsInline className="w-full h-auto block" style={{ background: "#111" }} />
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <section id="team" className="py-8 sm:py-10 lg:py-16 px-4 sm:px-8 lg:px-16 bg-[#F9F9F9] border-t border-border overflow-hidden">
      <div className="mx-auto max-w-[1440px]">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }} transition={{ duration: 0.5 }}
          className="mb-4 sm:mb-6 text-center"
        >
          <span className="section-pill mb-3 sm:mb-4 inline-flex">The Team</span>
          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-5xl tracking-tight text-txt mt-2 sm:mt-3">
            You Work With <span className="gradient-text">the Founders</span>
          </h2>
          <p className="text-txt-2 mt-2 sm:mt-3 max-w-md mx-auto text-xs sm:text-sm leading-relaxed">
            Every client works directly with the people who designed and built the product — no intermediaries, full accountability.
          </p>
        </motion.div>

        <div className="flex flex-col max-w-2xl mx-auto w-full">

          {/* Abir — photo left, text right */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }} transition={{ duration: 0.55, delay: 0.1 }}
            className="flex flex-row items-center gap-6 sm:gap-10 py-5 sm:py-6"
          >
            <div className="w-28 h-28 sm:w-36 sm:h-36 shrink-0 rounded-full overflow-hidden">
              <img src={abir.image} alt={abir.name} className="w-full h-full object-cover object-center" />
            </div>
            <div>
              <p className="text-[11px] sm:text-[13px] lg:text-[14px] text-[#444] leading-relaxed italic">&ldquo;{abir.quote}&rdquo;</p>
              <p className="mt-3 font-semibold text-[12px] sm:text-[14px] lg:text-[15px] text-[#0A0A0A]">{abir.name}</p>
              <p className="text-[9px] sm:text-[10px] lg:text-[11px] font-medium uppercase tracking-widest mt-0.5" style={{ color: "#F5A623" }}>{abir.role}</p>
              <div className="flex items-center gap-2 mt-3">
                <a href={abir.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                  className="flex items-center justify-center rounded-full transition-opacity hover:opacity-70"
                  style={{ width: 22, height: 22, background: "#0A66C2" }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href={`https://mail.google.com/mail/?view=cm&to=${abir.email}`} target="_blank" rel="noopener noreferrer" aria-label="Email"
                  className="flex items-center justify-center rounded-full transition-opacity hover:opacity-70"
                  style={{ width: 22, height: 22, background: "#F5A623" }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* divider */}
          <div className="w-full h-px" style={{ background: "linear-gradient(to right, transparent, #e5e5e5 20%, #e5e5e5 80%, transparent)" }} />

          {/* Safwan — text left, photo right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }} transition={{ duration: 0.55, delay: 0.15 }}
            className="flex flex-row-reverse items-center gap-6 sm:gap-10 py-5 sm:py-6"
          >
            <div className="w-28 h-28 sm:w-36 sm:h-36 shrink-0 rounded-full overflow-hidden">
              <img src={safwan.image} alt={safwan.name} className="w-full h-full object-cover object-top" />
            </div>
            <div>
              <p className="text-[11px] sm:text-[13px] lg:text-[14px] text-[#444] leading-relaxed italic">&ldquo;{safwan.quote}&rdquo;</p>
              <p className="mt-3 font-semibold text-[12px] sm:text-[14px] lg:text-[15px] text-[#0A0A0A]">{safwan.name}</p>
              <p className="text-[9px] sm:text-[10px] lg:text-[11px] font-medium uppercase tracking-widest mt-0.5" style={{ color: "#6366F1" }}>{safwan.role}</p>
              <div className="flex items-center gap-2 mt-3">
                <a href={safwan.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                  className="flex items-center justify-center rounded-full transition-opacity hover:opacity-70"
                  style={{ width: 22, height: 22, background: "#0A66C2" }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href={`https://mail.google.com/mail/?view=cm&to=${safwan.email}`} target="_blank" rel="noopener noreferrer" aria-label="Email"
                  className="flex items-center justify-center rounded-full transition-opacity hover:opacity-70"
                  style={{ width: 22, height: 22, background: "#6366F1" }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </a>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Company contact */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }} transition={{ duration: 0.4, delay: 0.2 }}
          className="flex justify-center mt-2"
        >
          <a href="https://wa.me/8801708708876" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full transition-opacity hover:opacity-75"
            style={{ background: "#f0f0f0" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
            <span className="text-[11px] sm:text-[12px] font-medium text-[#333]">+880 1708-708876</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
