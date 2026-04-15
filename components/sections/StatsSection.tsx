"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

interface CounterProps { target: number; suffix?: string; duration?: number; }

function Counter({ target, suffix = "", duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  {
    value: 15, suffix: "+",
    label: "Projects Shipped",
    sub: "Across all platforms",
    emoji: "📦",
    color: "#3B82F6",
    bg: "#EFF6FF",
  },
  {
    value: 10, suffix: "+",
    label: "Happy Clients",
    sub: "Local & international",
    emoji: "😊",
    color: "#10B981",
    bg: "#ECFDF5",
  },
  {
    value: 3, suffix: "+",
    label: "Countries Served",
    sub: "Working globally",
    emoji: "🌍",
    color: "#8B5CF6",
    bg: "#F5F3FF",
  },
  {
    value: 100, suffix: "%",
    label: "On-time Delivery",
    sub: "Zero missed deadlines",
    emoji: "⏰",
    color: "#F5A623",
    bg: "#FFFBEB",
  },
  {
    value: 24, suffix: "h",
    label: "Response Time",
    sub: "Always reachable",
    emoji: "💬",
    color: "#EF4444",
    bg: "#FEF2F2",
  },
  {
    value: 5, suffix: "★",
    label: "Client Rating",
    sub: "Rated 4.9 / 5.0",
    emoji: "⭐",
    color: "#F59E0B",
    bg: "#FFFBEB",
  },
];

export default function StatsSection() {
  return (
    <section className="relative py-24 px-6 lg:px-10 overflow-hidden bg-bg-2">
      {/* Top wave */}
      <div className="absolute top-0 inset-x-0">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block" style={{ transform: "rotate(180deg)" }}>
          <path d="M0,30 C360,55 720,5 1080,40 C1260,58 1380,20 1440,35 L1440,60 L0,60 Z" fill="#FFFFFF"/>
        </svg>
      </div>

      <div className="mx-auto max-w-7xl pt-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="section-pill mb-4">By the Numbers</span>
          <h2 className="font-display font-black text-4xl lg:text-5xl tracking-tight text-txt mt-4">
            The Numbers <span className="gradient-text">Behind the Work</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 28, rotate: -1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" as const }}
              whileHover={{ y: -6, rotate: i % 2 === 0 ? 1 : -1 }}
              className="flex flex-col items-center text-center rounded-2xl border-2 bg-surface p-5"
              style={{ borderColor: `${s.color}55`, boxShadow: `3px 5px 0px ${s.color}33` }}
            >
              {/* Emoji in coloured circle */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-3 border-2"
                style={{ background: s.bg, borderColor: `${s.color}44` }}
              >
                {s.emoji}
              </div>
              {/* Animated number */}
              <div
                className="font-display font-black text-3xl leading-none mb-1"
                style={{ color: s.color }}
              >
                <Counter target={s.value} suffix={s.suffix} />
              </div>
              <p className="font-black text-xs text-txt leading-tight mb-1">{s.label}</p>
              <p className="text-[10px] text-txt-3 font-semibold">{s.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 inset-x-0">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block">
          <path d="M0,40 C240,10 480,55 720,35 C960,15 1200,50 1440,30 L1440,60 L0,60 Z" fill="#FFFFFF"/>
        </svg>
      </div>
    </section>
  );
}
