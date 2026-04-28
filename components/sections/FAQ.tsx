"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

export default function FAQ() {
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
    <section className="py-10 lg:py-16 bg-bg-2 border-t border-border px-4 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-[1440px]">
        <motion.h3
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }} transition={{ duration: 0.5 }}
          className="font-display font-black text-2xl sm:text-3xl text-txt text-center mb-8"
        >
          Common <span className="gradient-text">Questions</span>
        </motion.h3>

        <div
          ref={faqRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.4, delay: (i % cpp) * 0.08 }}
              whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(245,166,35,0.12)" }}
              className="snap-start shrink-0 w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] rounded-2xl bg-white border border-border p-6 cursor-default"
              style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}
            >
              <div className="w-6 h-6 rounded-lg flex items-center justify-center mb-3" style={{ background: "#FFF7E6" }}>
                <span className="font-black text-[11px]" style={{ color: "#F5A623" }}>Q</span>
              </div>
              <p className="font-black text-sm text-txt mb-2.5">{f.q}</p>
              <p className="text-sm text-txt-2 leading-relaxed">{f.a}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-6">
          <div className="flex gap-2">
            {Array.from({ length: faqPages }).map((_, i) => (
              <button key={i} onClick={() => goToFaqPage(i)}
                className="h-2 rounded-full transition-all duration-300"
                style={{ width: i === faqPage ? 24 : 8, background: i === faqPage ? "#F5A623" : "#E5E7EB" }} />
            ))}
          </div>
          <div className="flex gap-2">
            {[ChevronLeft, ChevronRight].map((Icon, d) => (
              <button key={d}
                onClick={() => goToFaqPage(faqPage + (d === 0 ? -1 : 1))}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-txt-2 hover:border-amber hover:text-amber transition-all"
                style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
                aria-label={d === 0 ? "Previous" : "Next"}
              >
                <Icon size={16} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
