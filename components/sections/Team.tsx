"use client";
import { motion } from "framer-motion";

const team = [
  {
    name: "F. M Abir Hossain",
    role: "Co-Founder & CEO",
    bio: "Full-stack engineer who leads strategy, architecture, and every client delivery.",
    linkedin: "#",
    email: "hello@hivetech.dev",
    image: "/images/abir.png",
    color: "#F5A623",
    bg: "#FFF3D9",
  },
  {
    name: "Safwan-Ul-Islam",
    role: "Co-Founder & CTO",
    bio: "Full-stack developer who drives technical decisions, system architecture, and ensures every build ships production-ready.",
    linkedin: "#",
    email: "hello@hivetech.dev",
    image: "/images/safwan.png",
    color: "#6366F1",
    bg: "#F0F4FF",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-14 lg:py-24 px-6 lg:px-10 bg-surface">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
          className="mb-10 lg:mb-14 text-center"
        >
          <span className="section-pill mb-4">The Team</span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-txt mt-4">
            You Work With <span className="gradient-text">the Founders</span>
          </h2>
          <p className="text-txt-2 mt-4 max-w-md mx-auto leading-relaxed text-sm">
            Every project is owned end-to-end by the founders — from first brief to final deployment, with no middlemen in between.
          </p>
        </motion.div>

        <div className="flex flex-col max-w-2xl mx-auto">
          {team.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" as const }}
            >
              {i > 0 && <div className="border-t-2 border-border my-8" />}

              <div className={`flex items-center gap-8 ${i % 2 === 1 ? "flex-row-reverse" : ""}`}>
                {/* Photo */}
                <div
                  className="shrink-0 w-32 h-32 rounded-full border-4 overflow-hidden"
                  style={{ borderColor: p.color, boxShadow: `0 0 0 6px ${p.color}20` }}
                >
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover object-top" />
                </div>

                {/* Text */}
                <div className={`flex-1 min-w-0 ${i % 2 === 1 ? "text-right" : ""}`}>
                  <h3 className="font-display font-black text-xl text-txt leading-tight">{p.name}</h3>
                  <p className="text-[11px] font-black uppercase tracking-widest mt-1" style={{ color: p.color }}>{p.role}</p>
                  <p className="text-sm text-txt-2 leading-relaxed mt-2">{p.bio}</p>

                  <div className={`flex items-center gap-4 mt-3 ${i % 2 === 1 ? "justify-end" : ""}`}>
                    <a
                      href={p.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold transition-opacity hover:opacity-60"
                      style={{ color: p.color }}
                    >
                      LinkedIn ↗
                    </a>
                    <a
                      href={`mailto:${p.email}`}
                      className="text-xs font-bold transition-opacity hover:opacity-60"
                      style={{ color: p.color }}
                    >
                      {p.email}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
