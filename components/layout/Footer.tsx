"use client";
import { MapPin } from "lucide-react";

const services = ["Web Development","Web Application","Mobile App","Desktop App","AI Automation","AI Chatbot","UI/UX Design","Digital Strategy"];
const company  = ["About Us","Our Work","Blog","Careers","Contact"];

export default function Footer() {
  return (
    <footer style={{ background: "#120A00" }} className="border-t-2 border-amber/20">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-10 lg:px-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-5">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <a href="/" className="inline-flex items-center gap-2.5 group mb-5">
              <div className="relative w-8 h-8">
                <svg viewBox="0 0 40 46" fill="none" className="w-full h-full">
                  <path d="M20 2L37 11.5V30.5L20 40L3 30.5V11.5L20 2Z" fill="rgba(245,166,35,0.15)" stroke="#F5A623" strokeWidth="2.5"/>
                  <text x="20" y="27" textAnchor="middle" fontSize="16" fontWeight="900" fill="#F5A623" fontFamily="system-ui">H</text>
                </svg>
              </div>
              <span className="font-display font-black text-xl tracking-tight text-white">
                Hive<span className="text-amber">Tech</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed max-w-xs mb-6" style={{ color: "#C4A070" }}>
              Top-tier software, honest pricing. We build what big agencies charge 3× for — without the bloat, the hand-offs, or the surprises.
            </p>
            <div className="flex flex-col gap-2.5 text-sm" style={{ color: "#C4A070" }}>
              <span className="flex items-center gap-2">
                <MapPin size={14} className="text-amber" /> Available Worldwide
              </span>
            </div>
            <div className="flex gap-3 mt-6">
              {["X","in","gh","ig"].map((l) => (
                <a key={l} href="#"
                  className="w-9 h-9 rounded-full border-2 flex items-center justify-center text-[11px] font-black transition-all duration-200"
                  style={{ borderColor: "#3A2810", color: "#7A5C30" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#F5A623"; e.currentTarget.style.color = "#F5A623"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#3A2810"; e.currentTarget.style.color = "#7A5C30"; }}>
                  {l}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: "#7A5C30" }}>Services</h4>
            <ul className="flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm transition-colors hover:text-amber" style={{ color: "#C4A070" }}>{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: "#7A5C30" }}>Company</h4>
            <ul className="flex flex-col gap-2.5">
              {company.map((c) => (
                <li key={c}>
                  <a href="#" className="text-sm transition-colors hover:text-amber" style={{ color: "#C4A070" }}>{c}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: "#7A5C30" }}>Stay Updated</h4>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#C4A070" }}>
              Tech tips & project insights straight to your inbox.
            </p>
            <form className="flex flex-col gap-2" action="#" method="POST">
              <input type="email" placeholder="your@email.com"
                className="w-full rounded-xl px-4 py-2.5 text-sm focus:outline-none transition-colors"
                style={{ background: "#2A1A05", border: "2px solid #3A2810", color: "#FFFFFF" }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#F5A623")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#3A2810")}
              />
              <button type="submit"
                className="w-full rounded-xl bg-amber text-dark text-sm font-black py-2.5 border-2 border-amber-dark transition-all hover:-translate-y-0.5"
                style={{ boxShadow: "2px 3px 0px #D4891A" }}>
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Trust badges row */}
        <div className="mt-10 pt-8 flex flex-wrap justify-center gap-3" style={{ borderTop: "2px solid #2A1A05" }}>
          {[
            { icon: "🔒", title: "NDA Protected",     sub: "IP safety guaranteed" },
            { icon: "⚡", title: "Fast Delivery",      sub: "Agile & on-schedule" },
            { icon: "🌍", title: "Global Ready",       sub: "5+ countries served" },
            { icon: "💬", title: "24h Support",        sub: "Always reachable" },
            { icon: "⭐", title: "4.9 / 5.0",          sub: "Client satisfaction" },
            { icon: "🔁", title: "85% Repeat Rate",   sub: "Clients come back" },
          ].map((b) => (
            <div key={b.title}
              className="flex items-center gap-2 px-4 py-2 rounded-xl"
              style={{ border: "1.5px solid #2A1A05", background: "#1A1005" }}>
              <span className="text-sm">{b.icon}</span>
              <div>
                <p className="text-[10px] font-black leading-none" style={{ color: "#C4A070" }}>{b.title}</p>
                <p className="text-[9px] font-semibold" style={{ color: "#7A5C30" }}>{b.sub}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "#7A5C30" }}>
            © {new Date().getFullYear()} HiveTech. All rights reserved. 🐝
          </p>
          <div className="flex gap-4">
            {["Privacy Policy","Terms of Service"].map((l) => (
              <a key={l} href="#" className="text-xs transition-colors hover:text-amber" style={{ color: "#7A5C30" }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
