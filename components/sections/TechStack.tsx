const row1 = [
  { name: "React",       color: "#61DAFB", bg: "#E0F7FD", category: "Frontend"  },
  { name: "Next.js",     color: "#000000", bg: "#F0F0F0", category: "Frontend"  },
  { name: "TypeScript",  color: "#3178C6", bg: "#DBEAFE", category: "Frontend"  },
  { name: "Flutter",     color: "#0553B1", bg: "#DBEAFE", category: "Mobile"    },
  { name: "Python",      color: "#3776AB", bg: "#DBEAFE", category: "Backend"   },
  { name: "Node.js",     color: "#339933", bg: "#DCFCE7", category: "Backend"   },
  { name: "FastAPI",     color: "#009688", bg: "#CCFBF1", category: "Backend"   },
  { name: "OpenAI",      color: "#10A37F", bg: "#CCFBF1", category: "AI"        },
  { name: "LangChain",   color: "#6B21A8", bg: "#F3E8FF", category: "AI"        },
];

const row2 = [
  { name: "PostgreSQL",  color: "#336791", bg: "#DBEAFE", category: "Database"  },
  { name: "MongoDB",     color: "#47A248", bg: "#DCFCE7", category: "Database"  },
  { name: "Supabase",    color: "#3ECF8E", bg: "#CCFBF1", category: "Database"  },
  { name: "Firebase",    color: "#FFCA28", bg: "#FEF9C3", category: "Database"  },
  { name: "Tailwind CSS",color: "#06B6D4", bg: "#ECFEFF", category: "Frontend"  },
  { name: "Docker",      color: "#2496ED", bg: "#DBEAFE", category: "DevOps"    },
  { name: "AWS",         color: "#FF9900", bg: "#FFF7ED", category: "Cloud"     },
  { name: "Vercel",      color: "#000000", bg: "#F0F0F0", category: "Cloud"     },
  { name: "Figma",       color: "#F24E1E", bg: "#FEE2E2", category: "Design"    },
];

function Pill({ name, color, bg, category }: { name: string; color: string; bg: string; category: string }) {
  return (
    <span className="inline-flex items-center gap-2.5 shrink-0 px-4 py-2.5 rounded-xl border select-none cursor-default bg-white"
      style={{ borderColor: "#E5E7EB", boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
      <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: color }} />
      <span className="font-black text-sm whitespace-nowrap text-txt">{name}</span>
      <span className="text-[10px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-md"
        style={{ background: `${color}15`, color }}>
        {category}
      </span>
    </span>
  );
}

function Strip({ items, reverse }: { items: typeof row1; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="flex gap-3"
      style={{
        width: "max-content",
        animation: `ticker ${reverse ? "30s" : "25s"} linear infinite ${reverse ? "reverse" : ""}`,
      }}>
      {doubled.map((t, i) => <Pill key={`${t.name}-${i}`} {...t} />)}
    </div>
  );
}

export default function TechStack() {
  return (
    <section className="py-20 border-y border-border bg-bg-2 relative">

      <div className="mx-auto max-w-[1440px] px-8 lg:px-16 mb-10 text-center">
        <span className="section-pill mb-4">Tech Stack</span>
        <h2 className="font-display font-black text-4xl lg:text-5xl tracking-tight text-txt mt-4">
          Technologies We <span className="gradient-text">Work With</span>
        </h2>
      </div>

      {/* Strips in their own overflow-hidden container */}
      <div className="relative flex flex-col gap-3 overflow-hidden">
        {/* Fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-bg-2 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-bg-2 to-transparent" />
        <Strip items={row1} />
        <Strip items={row2} reverse />
      </div>
    </section>
  );
}
