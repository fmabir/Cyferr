"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Check, Zap, Globe, Shield, RefreshCw, FileText, MessageSquare } from "lucide-react";

const plans = [
  {
    name: "Starter",
    tagline: "Perfect for small businesses",
    from: "$800",
    period: "one-time",
    color: "#10B981",
    darkColor: "#059669",
    bg: "linear-gradient(135deg, #F0FFF8 0%, #DCFCE7 100%)",
    accentBg: "#DCFCE7",
    popular: false,
    services: ["Business website", "Landing page", "Portfolio site", "Blog / CMS"],
    features: [
      "Up to 8 pages",
      "Mobile responsive",
      "Contact form",
      "Basic SEO setup",
      "2 rounds of revision",
      "1 month free support",
    ],
    cta: "Get Started",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Growth",
    tagline: "For growing businesses",
    from: "$2,500",
    period: "one-time",
    color: "#F5A623",
    darkColor: "#D4891A",
    bg: "linear-gradient(135deg, #FFFBF0 0%, #FEF3C7 100%)",
    accentBg: "#FEF3C7",
    popular: true,
    services: ["Web application", "Mobile app", "E-commerce store", "SaaS platform"],
    features: [
      "Custom UI/UX design",
      "Full-stack development",
      "Auth & user dashboard",
      "Payment integration",
      "3 rounds of revision",
      "3 months free support",
    ],
    cta: "Start a Project",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Enterprise",
    tagline: "Complex & AI-powered builds",
    from: "$6,000",
    period: "custom",
    color: "#6366F1",
    darkColor: "#4F46E5",
    bg: "linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%)",
    accentBg: "#EDE9FE",
    popular: false,
    services: ["AI automation", "AI chatbot", "Desktop app", "Multi-platform system"],
    features: [
      "AI / ML integration",
      "Custom API & microservices",
      "Advanced analytics",
      "CI/CD + cloud deploy",
      "Unlimited revisions",
      "6 months free support",
    ],
    cta: "Let's Talk",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const guarantees = [
  { Icon: Shield,      text: "NDA on request"            },
  { Icon: FileText,    text: "Fixed-scope contract"       },
  { Icon: RefreshCw,   text: "Revision rounds included"   },
  { Icon: MessageSquare, text: "24h response guarantee"   },
  { Icon: Globe,       text: "Remote-first, async-friendly" },
  { Icon: Zap,         text: "On-time delivery"           },
];

function PlanCard({ p, i }: { p: typeof plans[0]; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      className="relative flex flex-col rounded-3xl overflow-hidden"
      style={{
        background: p.popular ? p.bg : "#FFFFFF",
        boxShadow: p.popular
          ? `0 0 0 2px ${p.color}, 0 20px 60px ${p.color}28`
          : "0 1px 3px rgba(0,0,0,0.06), 0 8px 32px rgba(0,0,0,0.06)",
      }}
    >
      {/* Popular banner */}
      {p.popular && (
        <motion.div
          initial={{ opacity: 0, scaleX: 0.8 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.4, delay: i * 0.12 + 0.3 }}
          className="text-center text-[10px] font-black uppercase tracking-[0.2em] py-2"
          style={{ background: p.color, color: "#fff" }}
        >
          Most Popular
        </motion.div>
      )}

      <div className={`flex flex-col flex-1 p-2.5 lg:p-7 ${p.popular ? "pt-2.5 lg:pt-6" : ""}`}>

        {/* Header row */}
        <div className="flex items-start justify-between mb-2 lg:mb-6">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.12 + 0.15 }}
          >
            <p className="font-display font-black text-[11px] lg:text-2xl text-txt leading-tight">{p.name}</p>
            <p className="hidden lg:block text-xs text-txt-3 font-semibold mt-1">{p.tagline}</p>
          </motion.div>
          {/* Icon — desktop only */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -15 }}
            animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.45, delay: i * 0.12 + 0.2, type: "spring", stiffness: 180 }}
            className="hidden lg:flex w-11 h-11 rounded-2xl items-center justify-center shrink-0"
            style={{ background: p.accentBg, color: p.color }}
          >
            {p.icon}
          </motion.div>
        </div>

        {/* Price */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: i * 0.12 + 0.22 }}
          className="mb-2 lg:mb-6 pb-2 lg:pb-6 border-b border-border"
        >
          <p className="hidden lg:block text-[10px] font-black uppercase tracking-widest text-txt-3 mb-1.5">Starting from</p>
          <div className="flex items-end gap-1">
            <span className="font-display font-black leading-none" style={{ fontSize: "clamp(16px, 3.5vw, 42px)", color: p.color }}>{p.from}</span>
          </div>
          <p className="hidden lg:block text-[11px] text-txt-3 mt-1.5 font-semibold">
            {p.period === "custom" ? "Custom quote · scoped to your project" : "Fixed price · no surprise invoices"}
          </p>
        </motion.div>

        {/* Best for tags — desktop only */}
        <div className="hidden lg:block mb-5">
          <p className="text-[10px] font-black uppercase tracking-widest text-txt-3 mb-2.5">Best for</p>
          <div className="flex flex-wrap gap-1.5">
            {p.services.map((s, si) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: i * 0.12 + 0.3 + si * 0.05 }}
                className="text-[11px] font-bold px-2.5 py-1 rounded-lg"
                style={{ background: p.accentBg, color: p.color }}
              >
                {s}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Features — desktop only */}
        <ul className="hidden lg:flex flex-col gap-2.5 mb-8 flex-1">
          {p.features.map((f, fi) => (
            <motion.li
              key={f}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.35, delay: i * 0.12 + 0.35 + fi * 0.06 }}
              className="flex items-center gap-3 text-sm text-txt-2 font-semibold"
            >
              <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: p.accentBg }}>
                <Check size={10} strokeWidth={3} style={{ color: p.color }} />
              </span>
              {f}
            </motion.li>
          ))}
        </ul>

        {/* Mobile: short feature list (3 items) */}
        <ul className="lg:hidden flex flex-col gap-1 mb-2 flex-1">
          {p.features.slice(0, 3).map((f, fi) => (
            <li key={f} className="flex items-center gap-1 text-[9px] text-txt-2 font-medium">
              <span className="w-3 h-3 rounded-full flex items-center justify-center shrink-0" style={{ background: p.accentBg }}>
                <Check size={6} strokeWidth={3} style={{ color: p.color }} />
              </span>
              {f}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: i * 0.12 + 0.55 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center gap-1 lg:gap-2 rounded-lg lg:rounded-2xl py-1.5 lg:py-3.5 text-[9px] lg:text-sm font-black transition-all"
          style={
            p.popular
              ? { background: p.color, color: "#fff", boxShadow: `0 4px 20px ${p.color}50` }
              : { background: p.accentBg, color: p.color, border: `1.5px solid ${p.color}40` }
          }
        >
          {p.cta}
        </motion.a>
      </div>
    </motion.div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-8 lg:py-14 bg-bg-2 border-t border-border px-4 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-[1440px]">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }} transition={{ duration: 0.6 }}
          className="mb-6 sm:mb-10 lg:mb-14 text-center"
        >
          <span className="section-pill mb-4">Transparent Pricing</span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-txt mt-4">
            Transparent Pricing. <span className="gradient-text">No Surprises.</span>
          </h2>
          <p className="text-txt-2 mt-4 max-w-xl mx-auto leading-relaxed text-sm">
            You always know what you&apos;re paying before we write a single line of code. Fixed-scope contracts, no retainer traps, no scope creep invoices. These are typical starting ranges — every project gets a tailored quote.
          </p>
        </motion.div>

        {/* Plans */}
        <div className="grid grid-cols-3 gap-2 sm:gap-5 lg:gap-6 items-start">
          {plans.map((p, i) => <PlanCard key={p.name} p={p} i={i} />)}
        </div>

        {/* Guarantee strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-5 lg:mt-10 rounded-xl lg:rounded-2xl bg-white border border-border p-3 lg:p-6"
          style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
        >
          <div className="grid grid-cols-3 lg:flex lg:flex-wrap items-center justify-center gap-2 lg:gap-x-8 lg:gap-y-4">
            {guarantees.map(({ Icon, text }, i) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className="flex items-center gap-1.5 lg:gap-2"
              >
                <div className="w-5 h-5 lg:w-7 lg:h-7 rounded-md lg:rounded-lg flex items-center justify-center shrink-0" style={{ background: "#FFF7E6" }}>
                  <Icon size={10} className="lg:hidden" style={{ color: "#F5A623" }} strokeWidth={2.5} />
                  <Icon size={13} className="hidden lg:block" style={{ color: "#F5A623" }} strokeWidth={2.5} />
                </div>
                <span className="text-[9px] lg:text-xs font-black text-txt-2 leading-tight">{text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
