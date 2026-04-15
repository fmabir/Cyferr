"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, ChevronLeft, ChevronRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    emoji: "🌱",
    tagline: "Perfect for small businesses",
    from: "$800",
    period: "one-time",
    color: "#10B981",
    bg: "#F0FFF4",
    border: "#22C55E",
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
  },
  {
    name: "Growth",
    emoji: "🚀",
    tagline: "For growing businesses",
    from: "$2,500",
    period: "one-time",
    color: "#F5A623",
    bg: "#FFF3D9",
    border: "#F5A623",
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
    cta: "Most Popular →",
  },
  {
    name: "Enterprise",
    emoji: "🤖",
    tagline: "Complex & AI-powered builds",
    from: "$6,000",
    period: "custom",
    color: "#6366F1",
    bg: "#F0F4FF",
    border: "#6366F1",
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
  },
];

const faqs = [
  { q: "Do you work with international clients?", a: "Yes — we work with clients across the UK, Germany, Ghana, Canada, and more. All communication is async-friendly and in English. Time zone differences have never caused a project delay." },
  { q: "How long does a typical project take?", a: "Starter sites: 1–2 weeks. Web apps: 4–8 weeks. AI/complex systems: 8–16 weeks. Every project gets an agreed timeline upfront — and we don't miss it." },
  { q: "What if I need something not listed?", a: "These are starting points. Every project is scoped individually — reach out and we'll put together a clear quote within 24 hours, no obligation." },
  { q: "Do you sign NDAs?", a: "Absolutely. We sign NDAs before any project discussion if required. Your IP, data, and business ideas are fully protected from day one." },
  { q: "How does payment work?", a: "We typically split into two milestones: 50% upfront to begin, 50% on delivery. For larger projects we can structure into 3–4 milestone payments. We accept bank transfer, Wise, and card." },
  { q: "Will I own the code and design?", a: "Yes, 100%. Once the final payment is made, all source code, assets, and design files belong to you. No licensing fees, no lock-in." },
  { q: "Do you offer ongoing maintenance after launch?", a: "Every plan includes a free support window after launch. After that, we offer flexible retainer options for ongoing updates, hosting management, and feature additions." },
  { q: "Can you work with an existing codebase or partially built project?", a: "Yes. We regularly take on projects that have been started elsewhere or internally. We'll do a code review first so we can give you an honest assessment and a realistic quote." },
  { q: "How do we communicate during the project?", a: "Primarily through a shared Slack channel or WhatsApp group. You'll get regular updates, design previews for feedback, and a staging link to review before launch. No surprises." },
  { q: "What if I'm not happy with the result?", a: "Every plan includes revision rounds, and we don't consider a project done until you're satisfied. We've never had a client leave without a finished product they were happy with." },
];

export default function Pricing() {
  const faqRef = useRef<HTMLDivElement>(null);
  const [faqPage, setFaqPage] = useState(0);
  const [cpp, setCpp] = useState(3);

  useEffect(() => {
    function update() {
      if (window.innerWidth < 640) setCpp(1);
      else if (window.innerWidth < 1024) setCpp(2);
      else setCpp(3);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const faqPages = Math.ceil(faqs.length / cpp);

  function goToFaqPage(p: number) {
    const next = ((p % faqPages) + faqPages) % faqPages;
    setFaqPage(next);
    if (faqRef.current) {
      faqRef.current.scrollTo({ left: next * faqRef.current.offsetWidth, behavior: "smooth" });
    }
  }

  return (
    <section id="pricing" className="py-24 bg-bg px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="section-pill mb-4">Transparent Pricing</span>
          <h2 className="font-display font-black text-4xl lg:text-5xl tracking-tight text-txt mt-4">
            Transparent Pricing. <span className="gradient-text">No Surprises.</span>
          </h2>
          <p className="text-txt-2 mt-4 max-w-xl mx-auto leading-relaxed text-sm">
            You always know what you&apos;re paying before we write a single line of code. Fixed-scope contracts, no retainer traps, no scope creep invoices. These are typical starting ranges — every project gets a tailored quote.
          </p>
        </motion.div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" as const }}
              whileHover={{ y: -6 }}
              className="relative flex flex-col rounded-2xl border-2 overflow-hidden"
              style={{
                borderColor: p.popular ? p.border : "#F0DDB0",
                boxShadow: p.popular ? `5px 7px 0px ${p.border}` : "4px 6px 0px #F0DDB0",
                background: p.popular ? p.bg : "#FFFFFF",
              }}
            >
              {p.popular && (
                <div
                  className="absolute top-0 inset-x-0 text-center text-[10px] font-black uppercase tracking-widest py-1.5"
                  style={{ background: p.color, color: "#1A0F00" }}
                >
                  ⭐ Most Popular
                </div>
              )}

              <div className={`p-7 ${p.popular ? "pt-10" : ""}`}>
                {/* Plan header */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl border-2 flex items-center justify-center text-2xl"
                    style={{ background: p.bg, borderColor: `${p.color}55` }}
                  >
                    {p.emoji}
                  </div>
                  <div>
                    <p className="font-display font-black text-lg text-txt leading-none">{p.name}</p>
                    <p className="text-xs text-txt-3 font-semibold mt-0.5">{p.tagline}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-5">
                  <div className="flex items-end gap-1.5">
                    <span className="text-xs font-bold text-txt-3 mb-1.5">Starting from</span>
                    <span className="font-display font-black text-4xl leading-none" style={{ color: p.color }}>{p.from}</span>
                  </div>
                  <p className="text-xs text-txt-3 mt-1 font-semibold capitalize">{p.period === "custom" ? "Custom quote available" : "Fixed price, no surprises"}</p>
                </div>

                {/* Best for */}
                <div className="mb-5 rounded-xl border-2 border-border bg-bg p-3">
                  <p className="text-[10px] font-black uppercase tracking-widest text-txt-3 mb-2">Best for</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.services.map((s) => (
                      <span key={s} className="text-[11px] font-bold text-txt-2 bg-surface border border-border rounded-lg px-2 py-0.5">{s}</span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-2.5 mb-7">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-txt-2 font-semibold">
                      <span
                        className="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0"
                        style={{ borderColor: p.color, color: p.color }}
                      >
                        <Check size={11} strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-black border-2 transition-all hover:-translate-y-0.5"
                  style={
                    p.popular
                      ? { background: p.color, borderColor: "#D4891A", color: "#1A0F00", boxShadow: `2px 3px 0px #D4891A` }
                      : { background: "transparent", borderColor: p.color, color: p.color }
                  }
                >
                  {p.cta} <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 rounded-2xl border-2 border-border bg-surface p-6 flex flex-wrap items-center justify-center gap-6 text-center"
          style={{ boxShadow: "4px 6px 0px #F0DDB0" }}
        >
          {[
            { icon: "🔒", text: "NDA on request" },
            { icon: "📄", text: "Fixed-scope contract" },
            { icon: "🔁", text: "Revision rounds included" },
            { icon: "💬", text: "24h response guarantee" },
            { icon: "🌍", text: "Remote-first, async-friendly" },
          ].map((b) => (
            <div key={b.text} className="flex items-center gap-2">
              <span className="text-base">{b.icon}</span>
              <span className="text-xs font-black text-txt-2">{b.text}</span>
            </div>
          ))}
        </motion.div>

        {/* FAQs */}
        <div className="mt-16">
          <h3 className="font-display font-black text-2xl text-txt text-center mb-8">
            Common Questions
          </h3>

          <div
            ref={faqRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory"
            style={{ scrollbarWidth: "none" }}
          >
            {faqs.map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, boxShadow: "3px 8px 0px #F0DDB0" }}
                className="snap-start shrink-0 w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] rounded-2xl border-2 border-border bg-surface p-6 cursor-default"
                style={{ boxShadow: "3px 4px 0px #F0DDB0" }}
              >
                <p className="font-black text-sm text-txt mb-2">{f.q}</p>
                <p className="text-sm text-txt-2 leading-relaxed">{f.a}</p>
              </motion.div>
            ))}
          </div>

          {/* Nav */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-2">
              {Array.from({ length: faqPages }).map((_, i) => (
                <button key={i} onClick={() => goToFaqPage(i)}
                  className={`h-2 rounded-full transition-all duration-300 border-2 border-amber ${i === faqPage ? "w-8 bg-amber" : "w-2 bg-transparent hover:bg-amber/30"}`} />
              ))}
            </div>
            <div className="flex gap-2">
              {[ChevronLeft, ChevronRight].map((Icon, d) => (
                <button key={d}
                  onClick={() => goToFaqPage(faqPage + (d === 0 ? -1 : 1))}
                  className="w-10 h-10 rounded-full border-2 border-border flex items-center justify-center text-txt-2 hover:border-amber hover:text-amber transition-all"
                  style={{ boxShadow: "2px 3px 0px #F0DDB0" }}
                  aria-label={d === 0 ? "Previous" : "Next"}
                >
                  <Icon size={16} />
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
