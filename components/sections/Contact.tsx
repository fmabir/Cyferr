"use client";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-12 px-6 lg:px-10 bg-bg-2 relative overflow-hidden">
      {/* Top wave */}
      <div className="absolute top-0 inset-x-0">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block rotate-180">
          <path d="M0,40 C240,10 480,55 720,35 C960,15 1200,50 1440,30 L1440,60 L0,60 Z" fill="#FFFFFF"/>
        </svg>
      </div>

      <div className="mx-auto max-w-4xl pt-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }} transition={{ duration: 0.6 }}
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
            href="mailto:hello@zbrainstrom.com"
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -6 }}
            className="flex flex-col items-center gap-4 rounded-2xl border-2 border-border bg-surface p-8 text-center group"
            style={{ boxShadow: "4px 6px 0px #F0DDB0" }}
          >
            <div className="w-16 h-16 rounded-2xl bg-amber/10 border-2 border-amber/30 flex items-center justify-center">
              <Mail size={28} className="text-amber" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-txt-3 mb-1">Email Us</p>
              <p className="font-black text-lg text-txt group-hover:text-amber transition-colors">hello@zbrainstrom.com</p>
              <p className="text-xs text-txt-3 font-semibold mt-1">We reply within 24 hours</p>
            </div>
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/8801708708876"
            target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -6 }}
            className="flex flex-col items-center gap-4 rounded-2xl border-2 border-border bg-surface p-8 text-center group"
            style={{ boxShadow: "4px 6px 0px #F0DDB0" }}
          >
            <div className="w-16 h-16 rounded-2xl bg-amber/10 border-2 border-amber/30 flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-txt-3 mb-1">WhatsApp</p>
              <p className="font-black text-lg text-txt group-hover:text-amber transition-colors">+880 1708-708876</p>
              <p className="text-xs text-txt-3 font-semibold mt-1">Message us anytime</p>
            </div>
          </motion.a>
        </div>

        {/* What happens next */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
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
