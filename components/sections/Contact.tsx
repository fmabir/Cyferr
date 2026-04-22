"use client";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-10 bg-bg-2 relative overflow-hidden">
      {/* Top wave */}
      <div className="absolute top-0 inset-x-0">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block rotate-180">
          <path d="M0,40 C240,10 480,55 720,35 C960,15 1200,50 1440,30 L1440,60 L0,60 Z" fill="#FFFFFF"/>
        </svg>
      </div>

      <div className="mx-auto max-w-4xl pt-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="section-pill mb-4">Get In Touch</span>
          <h2 className="font-display font-black text-4xl lg:text-5xl tracking-tight text-txt mt-4">
            Let&apos;s Build Something <span className="gradient-text">Great</span>
          </h2>
          <p className="text-txt-2 mt-4 max-w-md mx-auto leading-relaxed text-sm">
            Reach out directly — we respond within 24 hours and always start with a free discovery call.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Email */}
          <motion.a
            href="mailto:hello@hivetech.dev"
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -6 }}
            className="flex flex-col items-center gap-4 rounded-2xl border-2 border-border bg-surface p-8 text-center group"
            style={{ boxShadow: "4px 6px 0px #F0DDB0" }}
          >
            <div className="w-16 h-16 rounded-2xl bg-amber/10 border-2 border-amber/30 flex items-center justify-center">
              <Mail size={28} className="text-amber" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-txt-3 mb-1">Email Us</p>
              <p className="font-black text-lg text-txt group-hover:text-amber transition-colors">hello@hivetech.dev</p>
              <p className="text-xs text-txt-3 font-semibold mt-1">We reply within 24 hours</p>
            </div>
          </motion.a>

          {/* Phone */}
          <motion.a
            href="tel:+1234567890"
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -6 }}
            className="flex flex-col items-center gap-4 rounded-2xl border-2 border-border bg-surface p-8 text-center group"
            style={{ boxShadow: "4px 6px 0px #F0DDB0" }}
          >
            <div className="w-16 h-16 rounded-2xl bg-amber/10 border-2 border-amber/30 flex items-center justify-center">
              <Phone size={28} className="text-amber" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-txt-3 mb-1">Call Us</p>
              <p className="font-black text-lg text-txt group-hover:text-amber transition-colors">+1 (234) 567-890</p>
              <p className="text-xs text-txt-3 font-semibold mt-1">Mon – Fri, 9am – 7pm</p>
            </div>
          </motion.a>
        </div>

        {/* What happens next */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 rounded-2xl border-2 border-border bg-surface p-7 max-w-2xl mx-auto"
          style={{ boxShadow: "4px 6px 0px #F0DDB0" }}
        >
          <p className="text-xs font-black uppercase tracking-widest text-txt-3 mb-5 text-center">What happens next</p>
          <ol className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {[
              { step: "01", title: "You reach out", sub: "Email or call us anytime." },
              { step: "02", title: "Discovery call", sub: "Free 30-min chat about your goals." },
              { step: "03", title: "Scope & quote", sub: "Clear deliverables, fixed price." },
              { step: "04", title: "We build it", sub: "Kick off within days." },
            ].map((item) => (
              <li key={item.step} className="flex flex-col items-center text-center gap-2">
                <span
                  className="w-9 h-9 rounded-full border-2 border-amber flex items-center justify-center font-display font-black text-xs text-amber shrink-0"
                  style={{ background: "rgba(245,166,35,0.12)" }}
                >
                  {item.step}
                </span>
                <div>
                  <p className="text-xs font-black text-txt leading-tight">{item.title}</p>
                  <p className="text-[10px] text-txt-3 font-semibold mt-0.5 leading-tight">{item.sub}</p>
                </div>
              </li>
            ))}
          </ol>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 inset-x-0">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block">
          <path d="M0,30 C360,55 720,5 1080,40 C1260,58 1380,20 1440,35 L1440,60 L0,60 Z" fill="#0A0A0A"/>
        </svg>
      </div>
    </section>
  );
}
