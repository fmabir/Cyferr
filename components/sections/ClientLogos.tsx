/* Scrolling client + partner strip */

const clients = [
  { name: "NovaPay",     tag: "Fintech",     color: "#3B82F6" },
  { name: "HealthBridge",tag: "Healthcare",  color: "#10B981" },
  { name: "RetailMax",   tag: "Retail",      color: "#8B5CF6" },
  { name: "TechForge",   tag: "SaaS",        color: "#F59E0B" },
  { name: "DataPeak",    tag: "Analytics",   color: "#EF4444" },
  { name: "CloudNext",   tag: "Cloud",       color: "#06B6D4" },
  { name: "SwiftApps",   tag: "Mobile",      color: "#EC4899" },
  { name: "BrightAI",    tag: "AI / ML",     color: "#84CC16" },
  { name: "BuildBase",   tag: "PropTech",    color: "#F97316" },
  { name: "LinkSphere",  tag: "Social",      color: "#6366F1" },
];

const partners = [
  "AWS", "Google Cloud", "OpenAI", "Vercel", "Firebase",
  "Supabase", "Stripe", "Flutter", "MongoDB", "Docker",
];

/* One row of client pills — duplicated for seamless loop */
function ClientStrip({ items }: { items: typeof clients }) {
  const doubled = [...items, ...items];
  return (
    <div className="flex gap-4 animate-ticker" style={{ width: "max-content" }}>
      {doubled.map((c, i) => (
        <span
          key={i}
          className="inline-flex items-center gap-2 shrink-0 px-4 py-2 rounded-xl border-2 bg-surface font-bold text-sm text-txt cursor-default select-none"
          style={{ borderColor: `${c.color}55`, boxShadow: `2px 3px 0px ${c.color}22` }}
        >
          {/* Coloured dot */}
          <span className="w-2 h-2 rounded-full shrink-0" style={{ background: c.color }} />
          {c.name}
          <span className="text-[10px] font-black uppercase tracking-wider" style={{ color: c.color }}>
            {c.tag}
          </span>
        </span>
      ))}
    </div>
  );
}

/* One row of tech partner pills — reversed scroll direction */
function PartnerStrip({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div
      className="flex gap-4"
      style={{
        width: "max-content",
        animation: "ticker 25s linear infinite reverse",
      }}
    >
      {doubled.map((p, i) => (
        <span
          key={i}
          className="inline-flex items-center shrink-0 px-4 py-2 rounded-xl border-2 border-border bg-bg font-black text-xs text-txt-3 uppercase tracking-widest cursor-default select-none hover:border-amber hover:text-amber transition-colors duration-200"
        >
          {p}
        </span>
      ))}
    </div>
  );
}

export default function ClientLogos() {
  return (
    <section className="py-16 border-y-2 border-border bg-surface overflow-hidden">
      {/* Header row */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 mb-8 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-xs font-black uppercase tracking-widest text-txt-3">
          🏆 Trusted by Growing Companies
        </p>
        <p className="text-xs font-black uppercase tracking-widest text-txt-3">
          🤝 Technology Partners
        </p>
      </div>

      {/* Fade masks */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-surface to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-surface to-transparent" />

        <div className="flex flex-col gap-4">
          <ClientStrip items={clients} />
          <PartnerStrip items={partners} />
        </div>
      </div>
    </section>
  );
}
