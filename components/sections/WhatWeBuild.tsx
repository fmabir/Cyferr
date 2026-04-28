"use client";

const C = "#0A0A0A";
const BG = "#F1F1F1";

const services = [
  { icon: "/images/01.png", img: "/images/1.png",  title: "Website",         tag: "Web · Next.js",         color: C, bg: BG, desc: "Fast, scalable web apps from MVP to enterprise.", points: ["SEO-optimised", "Sub-2s load time", "Mobile-first"] },
  { icon: "/images/02.png", img: "/images/3.png",  title: "Web Application", tag: "Flutter · React Native", color: C, bg: BG, desc: "Cross-platform iOS & Android that feel truly native.", points: ["App Store ready", "Offline-first", "Push notifications"] },
  { icon: "/images/03.png", img: "/images/5.png",  title: "Mobile App",      tag: "Figma · Framer",         color: C, bg: BG, desc: "Conversion-focused interfaces, every pixel counts.", points: ["Prototypes", "Design system", "Handoff-ready"] },
  { icon: "/images/04.png", img: "/images/7.png",  title: "Desktop App",     tag: "OpenAI · LangChain",     color: C, bg: BG, desc: "GPT pipelines and automation saving real hours weekly.", points: ["RAG pipelines", "API integrations", "Month-1 ROI"] },
  { icon: "/images/05.png", img: "/images/9.png",  title: "AI Automation",   tag: "Shopify · Stripe",       color: C, bg: BG, desc: "Stores built to convert with seamless checkout flows.", points: ["One-page checkout", "Inventory mgmt", "Multi-currency"] },
  { icon: "/images/06.png", img: "/images/11.png", title: "AI Chatbot",      tag: "Node.js · PostgreSQL",   color: C, bg: BG, desc: "Robust REST and GraphQL APIs built to scale.", points: ["99.9% uptime", "OAuth2 auth", "Rate limiting"] },
  { icon: "/images/07.png", img: "/images/13.png", title: "UI/UX Design",    tag: "AWS · Docker · Vercel",  color: C, bg: BG, desc: "CI/CD pipelines and cloud infra that never goes down.", points: ["Auto deployments", "Auto-scaling", "24h monitoring"] },
  { icon: "/images/08.png", img: "/images/15.png", title: "Digital Strategy",tag: "Discovery · Roadmap",    color: C, bg: BG, desc: "Tech audits and roadmaps from founders who shipped.", points: ["Free 30-min audit", "Written roadmap", "NDA available"] },
];

export default function WhatWeBuild() {
  return (
    <section className="py-4 sm:py-6 lg:py-8 bg-bg-2 px-4 sm:px-8 lg:px-16 border-t border-border">
      <div className="mx-auto max-w-[1440px]">

        {/* Header */}
        <div className="mb-4 sm:mb-6 lg:mb-6 text-center">
          <span className="section-pill mb-2 sm:mb-3 inline-flex">What We Build</span>
          <h2 className="font-display font-black text-xl sm:text-2xl lg:text-3xl tracking-tight text-txt mt-1 sm:mt-2">
            Everything Your Product <span className="gradient-text">Needs</span>
          </h2>
          <p className="mt-1 sm:mt-2 text-txt-2 text-xs sm:text-sm max-w-xl mx-auto">
            One team. Eight capabilities. No vendor juggling.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {services.map((s, i) => (
            <div key={i} className="relative cursor-default h-[190px] sm:h-[220px] lg:h-[240px]">

              {/* Back: rotated image card */}
              <div
                className="absolute inset-0 rounded-2xl overflow-hidden"
                style={{
                  border: "4px solid #ffffff",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.22)",
                }}
              >
                <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.35)" }} />
              </div>

              {/* Front: white content card */}
              <div
                className="absolute bottom-0 inset-x-1 sm:inset-x-2 rounded-2xl p-2.5 sm:p-3 flex flex-col gap-1 sm:gap-1.5"
                style={{
                  background: "#fff",
                  boxShadow: "0 -4px 32px rgba(0,0,0,0.10), 0 8px 24px rgba(0,0,0,0.06)",
                  border: "1px solid #F0F0F0",
                  borderTop: "3px solid #F5A623",
                }}
              >
                {/* Icon overlapping top edge */}
                <div className="absolute -top-4 sm:-top-5 left-3">
                  <div
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border-2 border-white"
                    style={{ background: "#F5F5F5", boxShadow: "0 4px 20px rgba(245,166,35,0.35)" }}
                  >
                    <img src={s.icon} alt={s.title} className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
                  </div>
                </div>

                {/* Title + tag */}
                <div className="mt-4 sm:mt-5">
                  <p className="font-semibold text-[11px] sm:text-[13px] tracking-tight text-txt leading-snug">{s.title}</p>
                  <p className="text-[8px] sm:text-[10px] font-medium mt-0.5 tracking-wide uppercase" style={{ color: "#F5A623" }}>{s.tag}</p>
                </div>

                {/* Divider */}
                <div style={{ height: 1, background: "#F3F3F3" }} />

                {/* Description */}
                <p className="text-[9px] sm:text-[11px] font-normal text-txt-2 leading-relaxed">{s.desc}</p>

                {/* Pills + arrow */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-0.5">
                    {s.points.slice(0, 2).map((pt, j) => (
                      <span key={j}
                        className="text-[7px] sm:text-[9px] font-medium px-1.5 py-0.5 rounded-full tracking-wide"
                        style={{ background: "#F5F5F5", color: "#0A0A0A", border: "1px solid #E5E5E5" }}
                      >
                        {pt}
                      </span>
                    ))}
                  </div>
                  <span className="text-[9px] sm:text-xs font-semibold shrink-0 ml-1 tracking-wide" style={{ color: "#F5A623" }}>→</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
