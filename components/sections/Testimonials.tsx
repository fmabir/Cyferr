"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  { name: "Sarah M.",   role: "CEO",                  country: "🇬🇧 UK",         initial: "SM", quote: "Brainstorm Web delivered our fintech dashboard in 6 weeks — on budget, pixel-perfect, and with features we didn't even know we needed. Best agency decision we've made.", rating: 5 },
  { name: "Kwame A.",   role: "Product Manager",      country: "🇬🇭 Ghana",      initial: "KA", quote: "Went cross-platform on Brainstorm Web's recommendation. Quality on par with top-tier US agencies at a fraction of the cost. The app has been rock-solid since launch.", rating: 5 },
  { name: "Lena H.",    role: "Operations Director",  country: "🇩🇪 Germany",    initial: "LH", quote: "The AI automation they built saved our team real hours every week on inventory management. The ROI was obvious within the first month of using it.", rating: 5 },
  { name: "James O.",   role: "Founder",              country: "🇨🇦 Canada",     initial: "JO", quote: "I've worked with three other agencies before Brainstorm Web. None of them communicated as clearly or delivered as consistently. They felt like a true extension of our team.", rating: 5 },
  { name: "Amara S.",   role: "Head of Product",      country: "🇸🇳 Senegal",    initial: "AS", quote: "Our e-commerce site went from concept to live in under 3 weeks. The team asked the right questions upfront and barely needed back-and-forth during the build.", rating: 5 },
  { name: "Daniel R.",  role: "CTO",                  country: "🇺🇸 USA",        initial: "DR", quote: "We handed Brainstorm Web a rough spec and they handed back a polished product. They flagged things we hadn't thought of, suggested smarter approaches, and hit every milestone.", rating: 5 },
  { name: "Priya N.",   role: "Marketing Director",   country: "🇸🇬 Singapore",  initial: "PN", quote: "The landing page they built for our product launch converted better than anything we'd run before. Clean design, fast load time, and delivered ahead of schedule.", rating: 5 },
  { name: "Tariq M.",   role: "CEO",                  country: "🇦🇪 UAE",        initial: "TM", quote: "What impressed me most was how honestly they scoped the project. No upselling, no scope creep — just a clear plan and clean execution. Will work with them again.", rating: 5 },
];

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const [cpp, setCpp] = useState(3); // cards per page
  const scrollRef = useRef<HTMLDivElement>(null);

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

  const totalPages = Math.ceil(testimonials.length / cpp);

  function goToPage(p: number) {
    const next = ((p % totalPages) + totalPages) % totalPages;
    setPage(next);
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: next * scrollRef.current.offsetWidth, behavior: "smooth" });
    }
  }

  // card width class per breakpoint
  const cardClass = "shrink-0 snap-start w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]";

  return (
    <section className="relative py-10 lg:py-14 bg-bg-2 border-t border-border px-4 sm:px-8 lg:px-16 overflow-hidden">

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="mb-6 sm:mb-10 lg:mb-14 text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }} transition={{ duration: 0.5 }}
            className="section-pill mb-3 sm:mb-4">Client Stories
          </motion.span>
          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-5xl tracking-tight text-txt mt-2 sm:mt-4">
            {["What", "Our", "Clients"].map((word, i) => (
              <motion.span key={word}
                initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }} transition={{ duration: 0.5, delay: 0.1 + i * 0.09, ease: "easeOut" as const }}
                className="inline-block mr-[0.2em]">{word}
              </motion.span>
            ))}{" "}
            <motion.span
              initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }} transition={{ duration: 0.5, delay: 0.37, ease: "easeOut" as const }}
              className="inline-block gradient-text">Say
            </motion.span>
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            {[
              { icon: "⭐", label: "4.9/5.0", sub: "Average Rating" },
              { icon: "💬", label: "30+",     sub: "Client Reviews" },
              { icon: "🔁", label: "85%",     sub: "Repeat Clients" },
              { icon: "🌍", label: "5+",      sub: "Countries" },
            ].map((b) => (
              <div key={b.label}
                className="flex items-center gap-2 bg-white border border-border rounded-xl px-4 py-2"
                style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
                <span className="text-base">{b.icon}</span>
                <div className="text-left">
                  <p className="text-xs font-black text-txt leading-none">{b.label}</p>
                  <p className="text-[10px] text-txt-3 font-semibold">{b.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll track */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          {testimonials.map((t, i) => (
            <motion.div key={i}
              whileHover={{ y: -4 }}
              className={`${cardClass} rounded-2xl border border-border bg-white p-6 lg:p-7 relative`}
              style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
            >
              <div className="font-display font-black text-7xl text-amber/15 leading-none absolute top-3 left-5 select-none" aria-hidden>&ldquo;</div>
              <div className="flex gap-1 mb-4 relative z-10">
                {Array.from({ length: t.rating }).map((_, j) => <span key={j} className="text-amber text-base">★</span>)}
              </div>
              <blockquote className="text-sm text-txt leading-relaxed mb-6 font-semibold relative z-10">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-full bg-amber/15 border-2 border-amber flex items-center justify-center font-display font-black text-xs text-amber shrink-0"
                  style={{ boxShadow: "2px 3px 0px #F0DDB0" }}>
                  {t.initial}
                </div>
                <div>
                  <p className="font-black text-sm text-txt leading-none">{t.name}</p>
                  <p className="text-xs text-txt-2 font-semibold mt-0.5">{t.role} · {t.country}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between mt-6">
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button key={i} onClick={() => goToPage(i)}
                className={`h-2 rounded-full transition-all duration-300 border-2 border-amber ${i === page ? "w-8 bg-amber" : "w-2 bg-transparent hover:bg-amber/30"}`} />
            ))}
          </div>
          <div className="flex gap-2">
            {[ChevronLeft, ChevronRight].map((Icon, d) => (
              <button key={d}
                onClick={() => goToPage(page + (d === 0 ? -1 : 1))}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-txt-2 hover:border-amber hover:text-amber transition-all"
                style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
                <Icon size={16} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
