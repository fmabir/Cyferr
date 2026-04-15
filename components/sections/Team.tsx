"use client";
import { motion } from "framer-motion";

const team = [
  {
    name: "Fahim Abrar",
    role: "Co-Founder & CEO",
    bio: "Full-stack engineer with a passion for building products that solve real problems. Leads client strategy, architecture decisions, and oversees every delivery.",
    tags: ["React", "Next.js", "Node.js", "System Design"],
    linkedin: "#",
    initials: "FA",
    color: "#F5A623",
    bg: "#FFF3D9",
  },
  {
    name: "Your Cofounder",
    role: "Co-Founder & CTO",
    bio: "Placeholder — replace with your cofounder's actual bio. Highlight their speciality, years of experience, and what they bring to the team.",
    tags: ["Flutter", "AI/ML", "Python", "Cloud"],
    linkedin: "#",
    initials: "CF",
    color: "#6366F1",
    bg: "#F0F4FF",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 px-6 lg:px-10 bg-surface">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="section-pill mb-4">The Team</span>
          <h2 className="font-display font-black text-4xl lg:text-5xl tracking-tight text-txt mt-4">
            You Work With <span className="gradient-text">the Founders</span>
          </h2>
          <p className="text-txt-2 mt-4 max-w-md mx-auto leading-relaxed text-sm">
            No account managers, no junior handoffs. When you hire HiveTech, you work directly with the people who built it — and who stay accountable to every line of code.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {team.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" as const }}
              whileHover={{ y: -6 }}
              className="flex flex-col rounded-2xl border-2 border-border bg-surface overflow-hidden"
              style={{ boxShadow: "4px 6px 0px #F0DDB0" }}
            >
              {/* Avatar area */}
              <div
                className="relative flex items-center justify-center py-10"
                style={{ background: p.bg }}
              >
                <div className="hex-bg absolute inset-0 opacity-30" />
                {/* Avatar circle — replace with <img> once you have a photo */}
                <div
                  className="relative z-10 w-28 h-28 rounded-full border-4 flex items-center justify-center font-display font-black text-3xl"
                  style={{ background: p.bg, borderColor: p.color, color: p.color, boxShadow: `0 0 0 6px ${p.color}22` }}
                >
                  {p.initials}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 p-6 flex-1">
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-display font-black text-xl text-txt leading-tight">{p.name}</h3>
                      <p className="text-xs font-black uppercase tracking-widest mt-0.5" style={{ color: p.color }}>{p.role}</p>
                    </div>
                    <a
                      href={p.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-xl border-2 flex items-center justify-center shrink-0 transition-all hover:-translate-y-0.5 text-[11px] font-black"
                      style={{ borderColor: `${p.color}44`, color: p.color }}
                      aria-label={`${p.name} on LinkedIn`}
                    >
                      in
                    </a>
                  </div>
                  <p className="text-sm text-txt-2 leading-relaxed mt-3">{p.bio}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-bold font-mono px-2.5 py-1 rounded-xl border-2"
                      style={{ borderColor: `${p.color}44`, color: p.color, background: p.bg }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
