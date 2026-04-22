"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work",     href: "#work"     },
  { label: "Pricing",  href: "#pricing"  },
  { label: "About",    href: "#about"    },
  { label: "Contact",  href: "#contact"  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastY,    setLastY]    = useState(0);
  const [visible,  setVisible]  = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setVisible(y < lastY || y < 80);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        } ${scrolled ? "border-b border-gray-100 shadow-sm" : ""}`}
        style={{
          background: scrolled
            ? "rgba(255,243,220,0.97)"
            : "rgba(255,247,232,0.90)",
          backdropFilter: "blur(16px)",
        }}
      >
        <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-8 py-4 lg:px-16">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 flex items-center justify-center">
              <svg viewBox="0 0 40 46" fill="none" className="w-full h-full transition-transform duration-300 group-hover:rotate-[20deg]">
                <path d="M20 2L37 11.5V30.5L20 40L3 30.5V11.5L20 2Z"
                  fill="rgba(245,166,35,0.12)" stroke="#F5A623" strokeWidth="2.5"/>
                <text x="20" y="27" textAnchor="middle" fontSize="16" fontWeight="900"
                  fill="#F5A623" fontFamily="system-ui">H</text>
              </svg>
            </div>
            <span className="font-display font-black text-xl tracking-tight text-txt">
              Hive<span className="text-amber">Tech</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 text-txt-2 hover:text-txt hover:bg-bg-2"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:block">
            <a href="#contact" className="btn-primary px-5 py-2.5 text-sm">
              Start a Project →
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors text-txt-2 hover:text-txt hover:bg-bg-2"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" as const }}
            className="fixed inset-x-0 top-[69px] z-40 md:hidden border-b border-border bg-white"
          >
            <ul className="flex flex-col gap-1 p-4">
              {links.map((l, i) => (
                <motion.li key={l.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                >
                  <a
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-3.5 rounded-lg text-base font-semibold text-txt-2 hover:text-txt hover:bg-bg-2 transition-all"
                  >
                    {l.label}
                    <span className="text-txt-3">→</span>
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="p-4 pt-0">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="btn-primary w-full py-4 text-base justify-center block text-center"
              >
                Start a Project →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
