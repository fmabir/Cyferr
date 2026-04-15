"use client";
import { motion } from "framer-motion";

const services = [
  { emoji: "🌐", title: "Web Development",  desc: "Lightning-fast, SEO-optimised websites. From landing pages to complex portals.", tag: "Popular",  color: "#FFF3D9" },
  { emoji: "💻", title: "Web Application",   desc: "Full-stack apps with real-time features, auth, dashboards and custom logic.",        tag: null,       color: "#F0FFF4" },
  { emoji: "📱", title: "Mobile App",        desc: "Cross-platform iOS & Android apps with native feel — Flutter or React Native.",      tag: null,       color: "#F0F4FF" },
  { emoji: "🖥️", title: "Desktop App",       desc: "Windows, macOS & Linux software. Electron, Tauri or native — we cover it.",          tag: null,       color: "#FFF0F8" },
  { emoji: "🤖", title: "AI Automation",     desc: "Automate workflows with AI pipelines — saving your team hours every week.",           tag: "Trending", color: "#F5FFF0" },
  { emoji: "💬", title: "AI Chatbot",        desc: "Intelligent bots for customer support, lead capture & internal tools.",               tag: "Trending", color: "#FFFBF0" },
  { emoji: "🎨", title: "UI/UX Design",      desc: "Research-backed designs that convert. Wireframes, prototypes, design systems.",       tag: null,       color: "#FFF0F0" },
  { emoji: "📈", title: "Digital Strategy",  desc: "Tech consulting & road-mapping — build the right thing the first time.",              tag: null,       color: "#F0F8FF" },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
const item = {
  hidden: { opacity: 0, y: 32, rotate: -1 },
  show:   { opacity: 1, y: 0,  rotate: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const headingWords = ["Every", "Service", "You", "Need."];
const headingWords2 = ["One", "Lean", "Team."];

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-surface px-6 lg:px-10 overflow-hidden">

      {/* Floating hex decorations */}
      <motion.div animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-12 right-8 opacity-20 hidden lg:block pointer-events-none">
        <svg viewBox="0 0 80 92" fill="none" width="80">
          <path d="M40 4L74 22V58L40 76L6 58V22L40 4Z" fill="#F5A623" stroke="#F5A623" strokeWidth="2"/>
        </svg>
      </motion.div>
      <motion.div animate={{ y: [0, 14, 0], rotate: [0, -6, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-16 left-6 opacity-15 hidden lg:block pointer-events-none">
        <svg viewBox="0 0 60 69" fill="none" width="60">
          <path d="M30 3L55 17V45L30 59L5 45V17L30 3Z" fill="#F5A623" stroke="#F5A623" strokeWidth="2"/>
        </svg>
      </motion.div>
      {/* Sparkle stars */}
      {[
        { top: "8%",  left: "5%",  size: 14, delay: 0 },
        { top: "20%", right: "4%", size: 10, delay: 0.8 },
        { top: "70%", right: "7%", size: 12, delay: 1.6 },
        { top: "85%", left: "12%",size: 8,  delay: 0.4 },
      ].map((s, i) => (
        <motion.div key={i}
          animate={{ opacity: [1, 0.3, 1], scale: [1, 0.6, 1], rotate: [0, 45, 0] }}
          transition={{ duration: 2.5 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: s.delay }}
          className="absolute hidden lg:block pointer-events-none"
          style={{ top: s.top, left: (s as { left?: string }).left, right: (s as { right?: string }).right }}>
          <svg viewBox="0 0 20 20" fill="none" width={s.size}>
            <line x1="10" y1="0"  x2="10" y2="20" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="0"  y1="10" x2="20" y2="10" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="3"  y1="3"  x2="17" y2="17" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
            <line x1="17" y1="3"  x2="3"  y2="17" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
          </svg>
        </motion.div>
      ))}

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="mb-14 text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="section-pill mb-4">What We Build
          </motion.span>
          <h2 className="font-display font-black text-4xl lg:text-5xl tracking-tight text-txt mt-4">
            {headingWords.map((word, i) => (
              <motion.span key={word}
                initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 + i * 0.09, ease: "easeOut" as const }}
                className="inline-block mr-[0.2em]">{word}
              </motion.span>
            ))}{" "}
            {headingWords2.map((word, i) => (
              <motion.span key={word}
                initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.37 + i * 0.09, ease: "easeOut" as const }}
                className="inline-block mr-[0.2em] gradient-text">{word}
              </motion.span>
            ))}
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.55 }}
            className="text-txt-2 mt-4 max-w-lg mx-auto leading-relaxed">
            From a landing page to a full AI system — designed, built, and shipped by one team. No outsourcing, no handoffs, no excuses.
          </motion.p>
        </div>

        <motion.div
          variants={container} initial="hidden"
          whileInView="show" viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map((s) => (
            <motion.div
              key={s.title} variants={item} whileHover={{ y: -6, rotate: 0.5 }}
              className="relative flex flex-col gap-4 rounded-2xl border-2 border-border bg-surface p-6 cursor-default"
              style={{ boxShadow: "4px 6px 0px #F0DDB0" }}
            >
              {s.tag && (
                <span className="absolute -top-3 right-4 text-[10px] font-black tracking-widest uppercase bg-amber text-dark px-3 py-1 rounded-full border-2 border-amber-dark"
                  style={{ boxShadow: "2px 2px 0px #D4891A" }}>
                  {s.tag}
                </span>
              )}
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl border-2 border-border"
                style={{ background: s.color, boxShadow: "2px 3px 0px #F0DDB0" }}>
                {s.emoji}
              </div>
              <div>
                <h3 className="font-display font-black text-base text-txt mb-1.5">{s.title}</h3>
                <p className="text-sm text-txt-2 leading-relaxed">{s.desc}</p>
              </div>
              <a href="#contact"
                className="mt-auto text-xs font-black text-amber-dark hover:text-amber transition-colors flex items-center gap-1 group">
                Get a quote <span className="transition-transform group-hover:translate-x-1.5">→</span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
