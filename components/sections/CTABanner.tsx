"use client";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

export default function CTABanner() {
  return (
    <section id="contact" className="relative py-16 lg:py-28 px-6 lg:px-10 overflow-hidden" style={{ background: "#1A0F00" }}>
      <div className="absolute inset-0 hex-bg opacity-30" aria-hidden />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden>
        <div className="w-[500px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(245,166,35,0.18) 0%, transparent 70%)", filter: "blur(60px)" }} />
      </div>

      {/* Floating bee mascot */}
      <motion.div animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[8%] top-[15%] hidden lg:block opacity-70">
        <svg viewBox="0 0 80 90" fill="none" width="80" height="90">
          <ellipse cx="40" cy="52" rx="26" ry="32" fill="#F5A623" stroke="#D4891A" strokeWidth="3"/>
          <rect x="16" y="44" width="48" height="9" rx="4" fill="#D4891A" opacity="0.7"/>
          <rect x="16" y="55" width="48" height="9" rx="4" fill="#D4891A" opacity="0.5"/>
          <ellipse cx="16" cy="38" rx="14" ry="10" fill="white" stroke="#F5A623" strokeWidth="2" opacity="0.9" transform="rotate(-25 16 38)"/>
          <ellipse cx="64" cy="38" rx="14" ry="10" fill="white" stroke="#F5A623" strokeWidth="2" opacity="0.9" transform="rotate(25 64 38)"/>
          <circle cx="30" cy="34" r="5" fill="white" stroke="#1A0F00" strokeWidth="1.5"/>
          <circle cx="50" cy="34" r="5" fill="white" stroke="#1A0F00" strokeWidth="1.5"/>
          <circle cx="30" cy="34" r="2.5" fill="#1A0F00"/>
          <circle cx="50" cy="34" r="2.5" fill="#1A0F00"/>
          <line x1="28" y1="22" x2="22" y2="12" stroke="#1A0F00" strokeWidth="2" strokeLinecap="round"/>
          <line x1="52" y1="22" x2="58" y2="12" stroke="#1A0F00" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="22" cy="12" r="4" fill="#F5A623" stroke="#D4891A" strokeWidth="1.5"/>
          <circle cx="58" cy="12" r="4" fill="#F5A623" stroke="#D4891A" strokeWidth="1.5"/>
        </svg>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7, ease: "easeOut" as const }}>

          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border-2 border-amber/40 bg-amber/10 text-amber text-xs font-black uppercase tracking-widest mb-6">
            🚀 Ready When You Are
          </span>
          <h2 className="font-display font-black text-4xl lg:text-6xl tracking-tight text-white mt-4 mb-4 leading-[1.05]">
            Stop Overpaying<br />
            <span className="gradient-text">for Software.</span>
          </h2>
          <p className="text-base leading-relaxed mb-10 max-w-xl mx-auto" style={{ color: "#C4A070" }}>
            You deserve the same quality as companies with 10× your budget. Reach out — we&apos;ll reply within 24 hours with a free consultation and honest quote.
          </p>

          <p className="text-xs font-black uppercase tracking-widest mb-5" style={{ color: "#7A5C30" }}>
            Contact Us
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="mailto:hello@hivetech.dev"
              whileHover={{ y: -4 }}
              className="flex items-center gap-3 rounded-2xl border-2 px-6 py-4 group transition-colors"
              style={{ borderColor: "#3A2810", background: "#2A1A05" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#F5A623")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#3A2810")}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(245,166,35,0.12)", border: "1.5px solid rgba(245,166,35,0.3)" }}>
                <Mail size={18} className="text-amber" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-black uppercase tracking-widest mb-0.5" style={{ color: "#7A5C30" }}>Email</p>
                <p className="text-sm font-black text-white group-hover:text-amber transition-colors">hello@hivetech.dev</p>
              </div>
            </motion.a>

            <motion.a
              href="tel:+1234567890"
              whileHover={{ y: -4 }}
              className="flex items-center gap-3 rounded-2xl border-2 px-6 py-4 group transition-colors"
              style={{ borderColor: "#3A2810", background: "#2A1A05" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#F5A623")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#3A2810")}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(245,166,35,0.12)", border: "1.5px solid rgba(245,166,35,0.3)" }}>
                <Phone size={18} className="text-amber" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-black uppercase tracking-widest mb-0.5" style={{ color: "#7A5C30" }}>Phone</p>
                <p className="text-sm font-black text-white group-hover:text-amber transition-colors">+1 (234) 567-890</p>
              </div>
            </motion.a>
          </div>

          <p className="text-xs mt-8" style={{ color: "#7A5C30" }}>
            No commitment required · Free 30-min consultation · NDA available
          </p>
        </motion.div>
      </div>
    </section>
  );
}
