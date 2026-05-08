"use client";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function CTABanner() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-dark-bd" style={{ background: "#0A0A0A" }}>
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] hex-bg" aria-hidden />

      {/* Subtle amber glow */}
      <div className="pointer-events-none absolute left-1/4 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full hidden lg:block"
        style={{ background: "radial-gradient(ellipse, rgba(245,166,35,0.15) 0%, transparent 70%)", filter: "blur(60px)" }} aria-hidden />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-16 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: headline ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }} transition={{ duration: 0.7, ease: "easeOut" as const }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-amber text-xs font-black uppercase tracking-widest mb-6">
              🚀 Ready When You Are
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-5xl tracking-tight text-white leading-[1.05] mb-3 sm:mb-5">
              Stop Overpaying<br />
              <span className="gradient-text">for Software.</span>
            </h2>
            <p className="text-sm sm:text-base leading-relaxed max-w-md mb-5 sm:mb-8" style={{ color: "#9CA3AF" }}>
              You deserve the same quality as companies with 10× your budget. Reach out — we&apos;ll reply within 24 hours with a free consultation and honest quote.
            </p>
            <p className="text-xs font-semibold" style={{ color: "#4B5563" }}>
              No commitment required · Free 30-min consultation · NDA available
            </p>
          </motion.div>

          {/* ── Right: contact cards ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }} transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" as const }}
            className="flex flex-col gap-4"
          >
            <p className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: "#4B5563" }}>
              Contact Us
            </p>

            <motion.a
              href="mailto:hello@cyferr.com"
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
                <p className="text-sm font-black text-white group-hover:text-amber transition-colors">hello@cyferr.com</p>
              </div>
            </motion.a>

            <motion.a
              href="https://wa.me/8801708708876"
              target="_blank" rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="flex items-center gap-4 rounded-2xl border p-5 group transition-colors"
              style={{ borderColor: "#222222", background: "#111111" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#F5A623")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#222222")}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(245,166,35,0.10)", border: "1px solid rgba(245,166,35,0.25)" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
              </div>
              <div className="text-left">
                <p className="text-[10px] font-black uppercase tracking-widest mb-0.5" style={{ color: "#4B5563" }}>WhatsApp</p>
                <p className="text-sm font-black text-white group-hover:text-amber transition-colors">+880 1708-708876</p>
              </div>
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
