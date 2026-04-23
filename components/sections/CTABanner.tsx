"use client";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

export default function CTABanner() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-dark-bd" style={{ background: "#0A0A0A" }}>
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] hex-bg" aria-hidden />

      {/* Subtle amber glow */}
      <div className="pointer-events-none absolute left-1/4 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full hidden lg:block"
        style={{ background: "radial-gradient(ellipse, rgba(245,166,35,0.15) 0%, transparent 70%)", filter: "blur(60px)" }} aria-hidden />

      <div className="relative z-10 mx-auto max-w-[1440px] px-8 lg:px-16 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: headline ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7, ease: "easeOut" as const }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-amber text-xs font-black uppercase tracking-widest mb-6">
              🚀 Ready When You Are
            </span>
            <h2 className="font-display font-black text-4xl lg:text-5xl tracking-tight text-white leading-[1.05] mb-5">
              Stop Overpaying<br />
              <span className="gradient-text">for Software.</span>
            </h2>
            <p className="text-base leading-relaxed max-w-md mb-8" style={{ color: "#9CA3AF" }}>
              You deserve the same quality as companies with 10× your budget. Reach out — we&apos;ll reply within 24 hours with a free consultation and honest quote.
            </p>
            <p className="text-xs font-semibold" style={{ color: "#4B5563" }}>
              No commitment required · Free 30-min consultation · NDA available
            </p>
          </motion.div>

          {/* ── Right: contact cards ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" as const }}
            className="flex flex-col gap-4"
          >
            <p className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: "#4B5563" }}>
              Contact Us
            </p>

            <motion.a
              href="mailto:hello@hivetech.dev"
              whileHover={{ y: -3 }}
              className="flex items-center gap-4 rounded-2xl border p-5 group transition-colors"
              style={{ borderColor: "#222222", background: "#111111" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#F5A623")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#222222")}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(245,166,35,0.10)", border: "1px solid rgba(245,166,35,0.25)" }}>
                <Mail size={18} className="text-amber" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-black uppercase tracking-widest mb-0.5" style={{ color: "#4B5563" }}>Email</p>
                <p className="text-sm font-black text-white group-hover:text-amber transition-colors">hello@hivetech.dev</p>
              </div>
            </motion.a>

            <motion.a
              href="tel:+1234567890"
              whileHover={{ y: -3 }}
              className="flex items-center gap-4 rounded-2xl border p-5 group transition-colors"
              style={{ borderColor: "#222222", background: "#111111" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#F5A623")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#222222")}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(245,166,35,0.10)", border: "1px solid rgba(245,166,35,0.25)" }}>
                <Phone size={18} className="text-amber" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-black uppercase tracking-widest mb-0.5" style={{ color: "#4B5563" }}>Phone</p>
                <p className="text-sm font-black text-white group-hover:text-amber transition-colors">+1 (234) 567-890</p>
              </div>
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
