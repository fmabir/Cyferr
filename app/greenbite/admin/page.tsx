"use client";
import { useState } from "react";
import Link from "next/link";

const G = {
  dark:      "#1A3A2A",
  mid:       "#2D5A3D",
  light:     "#3D6B4F",
  gold:      "#C9A84C",
  goldDark:  "#A88030",
  cream:     "#FFF8F0",
  creamDark: "#F0E8D8",
  text:      "#1C1C14",
  muted:     "#5C5C48",
  border:    "#E0D4C0",
  serif:     "var(--gb-playfair), Georgia, serif",
};

type NavItem = "Dashboard" | "Reservations" | "Menu Manager" | "Settings";

const STATUS_STYLE: Record<string, [string, string]> = {
  Confirmed: ["#16A34A", "#DCFCE7"],
  Pending:   ["#D97706", "#FEF3C7"],
  "No-show": ["#DC2626", "#FEE2E2"],
  Seated:    ["#2563EB", "#DBEAFE"],
};

const RESERVATIONS = [
  { time: "12:00", name: "Thompson, J.",  party: 4, status: "Seated",    notes: "Window table requested" },
  { time: "12:30", name: "Patel, A.",     party: 2, status: "Confirmed", notes: "Anniversary dinner" },
  { time: "13:00", name: "Williams, S.",  party: 6, status: "Confirmed", notes: "—" },
  { time: "13:30", name: "Chen, L.",      party: 3, status: "Pending",   notes: "Nut allergy — confirm" },
  { time: "14:00", name: "Harris, M.",    party: 2, status: "Confirmed", notes: "—" },
  { time: "18:00", name: "Morrison, R.",  party: 2, status: "Confirmed", notes: "—" },
  { time: "18:30", name: "Davies, K.",    party: 8, status: "Confirmed", notes: "Birthday — arrange cake" },
  { time: "19:00", name: "O'Brien, M.",   party: 4, status: "Confirmed", notes: "Vegetarian x2" },
  { time: "19:30", name: "Singh, P.",     party: 5, status: "No-show",   notes: "Flagged at 19:45" },
  { time: "20:00", name: "Johnson, T.",   party: 2, status: "Confirmed", notes: "Gluten-free required" },
  { time: "20:30", name: "Brown, C.",     party: 3, status: "Confirmed", notes: "—" },
  { time: "21:00", name: "Evans, R.",     party: 4, status: "Confirmed", notes: "—" },
];

const MENU_ITEMS = [
  { name: "Slow-Roasted Lamb Shoulder",      category: "Mains",    price: "£28", status: "Active" },
  { name: "Pan-Seared Cornish Sea Bass",     category: "Mains",    price: "£26", status: "Active" },
  { name: "Wild Mushroom & Truffle Risotto", category: "Mains",    price: "£19", status: "Active" },
  { name: "Roasted Heritage Beetroot",       category: "Starters", price: "£9",  status: "Active" },
  { name: "Valrhona Dark Chocolate Fondant", category: "Desserts", price: "£9",  status: "Active" },
  { name: "Celeriac Velouté",               category: "Starters", price: "£7",  status: "Archived" },
];

const STATS = [
  { label: "Today's covers",   value: "47",  sub: "+12 vs last Tuesday",   color: G.gold },
  { label: "This week",        value: "312", sub: "Mon–Sun running total",  color: "#3B82F6" },
  { label: "Tonight — dinner", value: "Full", sub: "All slots confirmed",  color: "#16A34A" },
  { label: "No-shows today",   value: "1",   sub: "Auto-flagged at 19:45", color: "#DC2626" },
];

export default function AdminPage() {
  const [activeNav, setActiveNav] = useState<NavItem>("Reservations");
  const [editOpen, setEditOpen]   = useState(false);
  const [editItem, setEditItem]   = useState(MENU_ITEMS[0]);

  const NAV_ITEMS: NavItem[] = ["Dashboard", "Reservations", "Menu Manager", "Settings"];

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: G.creamDark }}>

      {/* ── Sidebar ── */}
      <div style={{ width: 240, background: G.dark, flexShrink: 0, display: "flex", flexDirection: "column", position: "fixed", top: 0, left: 0, height: "100vh", zIndex: 40 }}>
        {/* Logo */}
        <div style={{ padding: "24px 24px 20px", borderBottom: `1px solid ${G.mid}` }}>
          <Link href="/greenbite" style={{ textDecoration: "none" }}>
            <p style={{ fontFamily: G.serif, color: G.cream, fontSize: 18, fontWeight: 700, margin: 0 }}>GreenBite</p>
            <p style={{ color: `${G.cream}45`, fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", margin: "4px 0 0" }}>Staff Portal</p>
          </Link>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: "20px 12px" }}>
          {NAV_ITEMS.map(item => (
            <button key={item} onClick={() => setActiveNav(item)}
              style={{
                width: "100%", display: "flex", alignItems: "center", gap: 12,
                padding: "11px 16px", borderRadius: 12, border: "none", marginBottom: 4,
                background: activeNav === item ? `${G.gold}18` : "transparent",
                color: activeNav === item ? G.gold : `${G.cream}70`,
                fontSize: 14, fontWeight: activeNav === item ? 700 : 500,
                cursor: "pointer", textAlign: "left",
              }}>
              <span>{{ Dashboard: "📊", Reservations: "📋", "Menu Manager": "🍽️", Settings: "⚙️" }[item]}</span>
              {item}
              {item === "Reservations" && (
                <span style={{ marginLeft: "auto", background: G.gold, color: G.dark, fontSize: 10, fontWeight: 800, padding: "2px 8px", borderRadius: 99 }}>12</span>
              )}
            </button>
          ))}
        </nav>

        {/* Bottom user */}
        <div style={{ padding: "16px 24px", borderTop: `1px solid ${G.mid}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: G.gold, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, color: G.dark }}>MK</div>
            <div>
              <p style={{ color: G.cream, fontSize: 13, fontWeight: 700, margin: 0 }}>Maria K.</p>
              <p style={{ color: `${G.cream}50`, fontSize: 11, margin: "2px 0 0" }}>Owner</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div style={{ flex: 1, marginLeft: 240, overflow: "auto" }}>

        {/* Top bar */}
        <div style={{ background: "#fff", borderBottom: `1px solid ${G.border}`, padding: "16px 36px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 30 }}>
          <div>
            <h1 style={{ fontSize: 18, fontWeight: 800, color: G.text, margin: 0 }}>{activeNav}</h1>
            <p style={{ fontSize: 12, color: G.muted, margin: "3px 0 0" }}>
              {new Date().toLocaleDateString("en-GB", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <div style={{ background: `${G.gold}15`, border: `1px solid ${G.gold}30`, borderRadius: 10, padding: "8px 16px", fontSize: 13, fontWeight: 700, color: G.goldDark }}>
              🌱 Dinner tonight: Full
            </div>
            <button style={{ background: G.dark, color: G.cream, fontWeight: 700, fontSize: 13, padding: "9px 20px", borderRadius: 10, border: "none", cursor: "pointer" }}>
              + Add Booking
            </button>
          </div>
        </div>

        <div style={{ padding: "32px 36px" }}>

          {/* Stats row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 32 }}>
            {STATS.map(s => (
              <div key={s.label} style={{ background: "#fff", border: `1.5px solid ${G.border}`, borderRadius: 16, padding: "22px 24px", borderTop: `3px solid ${s.color}` }}>
                <p style={{ fontSize: 32, fontWeight: 900, color: G.text, margin: "0 0 4px", fontFamily: G.serif }}>{s.value}</p>
                <p style={{ fontSize: 12, fontWeight: 700, color: G.text, margin: "0 0 4px" }}>{s.label}</p>
                <p style={{ fontSize: 11, color: G.muted, margin: 0 }}>{s.sub}</p>
              </div>
            ))}
          </div>

          {/* ── Reservations view ── */}
          {activeNav === "Reservations" && (
            <div style={{ background: "#fff", border: `1.5px solid ${G.border}`, borderRadius: 20, overflow: "hidden" }}>
              <div style={{ padding: "20px 28px", borderBottom: `1px solid ${G.border}`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <h2 style={{ fontSize: 16, fontWeight: 800, color: G.text, margin: 0 }}>Today's Reservations</h2>
                  <p style={{ fontSize: 12, color: G.muted, margin: "4px 0 0" }}>12 bookings · 47 covers · Dinner service fully booked</p>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  {["All", "Lunch", "Dinner"].map(f => (
                    <button key={f} style={{ padding: "6px 16px", borderRadius: 99, border: `1.5px solid ${f === "All" ? G.dark : G.border}`, background: f === "All" ? G.dark : "transparent", color: f === "All" ? G.cream : G.muted, fontSize: 12, fontWeight: 700, cursor: "pointer" }}>{f}</button>
                  ))}
                </div>
              </div>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: G.creamDark }}>
                    {["Time", "Guest", "Party", "Status", "Notes", "Action"].map(h => (
                      <th key={h} style={{ padding: "12px 20px", textAlign: "left", fontSize: 11, fontWeight: 800, color: G.muted, letterSpacing: "0.1em", textTransform: "uppercase" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {RESERVATIONS.map((r, i) => (
                    <tr key={i} style={{ borderBottom: `1px solid ${G.border}` }}>
                      <td style={{ padding: "14px 20px", fontSize: 13, fontWeight: 800, color: G.text, fontFamily: "monospace" }}>{r.time}</td>
                      <td style={{ padding: "14px 20px", fontSize: 14, fontWeight: 700, color: G.text }}>{r.name}</td>
                      <td style={{ padding: "14px 20px" }}>
                        <span style={{ background: G.creamDark, border: `1px solid ${G.border}`, borderRadius: 8, padding: "4px 12px", fontSize: 13, fontWeight: 800, color: G.text }}>
                          {r.party} {r.party === 1 ? "guest" : "guests"}
                        </span>
                      </td>
                      <td style={{ padding: "14px 20px" }}>
                        <span style={{ fontSize: 11, fontWeight: 800, padding: "4px 12px", borderRadius: 99, background: STATUS_STYLE[r.status]?.[1], color: STATUS_STYLE[r.status]?.[0], letterSpacing: "0.06em" }}>{r.status}</span>
                      </td>
                      <td style={{ padding: "14px 20px", fontSize: 12, color: G.muted, maxWidth: 200 }}>{r.notes}</td>
                      <td style={{ padding: "14px 20px" }}>
                        <button style={{ fontSize: 12, fontWeight: 700, color: G.dark, background: "none", border: `1px solid ${G.border}`, borderRadius: 8, padding: "5px 14px", cursor: "pointer" }}>Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* ── Menu Manager view ── */}
          {activeNav === "Menu Manager" && (
            <div>
              <div style={{ background: "#fff", border: `1.5px solid ${G.border}`, borderRadius: 20, overflow: "hidden" }}>
                <div style={{ padding: "20px 28px", borderBottom: `1px solid ${G.border}`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <h2 style={{ fontSize: 16, fontWeight: 800, color: G.text, margin: 0 }}>Menu Items</h2>
                    <p style={{ fontSize: 12, color: G.muted, margin: "4px 0 0" }}>Manage dishes, prices, and availability</p>
                  </div>
                  <button style={{ background: G.dark, color: G.cream, fontWeight: 700, fontSize: 13, padding: "9px 20px", borderRadius: 10, border: "none", cursor: "pointer" }}>+ Add Dish</button>
                </div>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ background: G.creamDark }}>
                      {["Dish", "Category", "Price", "Status", "Actions"].map(h => (
                        <th key={h} style={{ padding: "12px 20px", textAlign: "left", fontSize: 11, fontWeight: 800, color: G.muted, letterSpacing: "0.1em", textTransform: "uppercase" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {MENU_ITEMS.map((item, i) => (
                      <tr key={i} style={{ borderBottom: `1px solid ${G.border}` }}>
                        <td style={{ padding: "14px 20px", fontSize: 14, fontWeight: 700, color: G.text }}>{item.name}</td>
                        <td style={{ padding: "14px 20px" }}>
                          <span style={{ background: G.creamDark, borderRadius: 8, padding: "4px 12px", fontSize: 12, fontWeight: 700, color: G.muted }}>{item.category}</span>
                        </td>
                        <td style={{ padding: "14px 20px", fontSize: 14, fontWeight: 800, color: G.dark, fontFamily: G.serif }}>{item.price}</td>
                        <td style={{ padding: "14px 20px" }}>
                          <span style={{ fontSize: 11, fontWeight: 800, padding: "4px 12px", borderRadius: 99, background: item.status === "Active" ? "#DCFCE7" : G.creamDark, color: item.status === "Active" ? "#16A34A" : G.muted }}>
                            {item.status}
                          </span>
                        </td>
                        <td style={{ padding: "14px 20px" }}>
                          <div style={{ display: "flex", gap: 8 }}>
                            <button onClick={() => { setEditItem(item); setEditOpen(true); }}
                              style={{ fontSize: 12, fontWeight: 700, color: G.dark, background: "none", border: `1px solid ${G.border}`, borderRadius: 8, padding: "5px 14px", cursor: "pointer" }}>Edit</button>
                            <button style={{ fontSize: 12, fontWeight: 700, color: "#DC2626", background: "none", border: `1px solid #FCA5A5`, borderRadius: 8, padding: "5px 14px", cursor: "pointer" }}>Archive</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ── Dashboard view ── */}
          {activeNav === "Dashboard" && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              <div style={{ background: "#fff", border: `1.5px solid ${G.border}`, borderRadius: 20, padding: "28px" }}>
                <h3 style={{ fontFamily: G.serif, fontSize: 18, fontWeight: 700, color: G.text, margin: "0 0 20px" }}>Tonight's Service</h3>
                {RESERVATIONS.slice(5, 10).map((r, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 16, padding: "10px 0", borderBottom: `1px solid ${G.border}` }}>
                    <span style={{ fontSize: 12, fontWeight: 800, color: G.muted, fontFamily: "monospace", minWidth: 42 }}>{r.time}</span>
                    <span style={{ fontSize: 14, fontWeight: 700, color: G.text, flex: 1 }}>{r.name}</span>
                    <span style={{ fontSize: 12, color: G.muted }}>{r.party} guests</span>
                    <span style={{ fontSize: 10, fontWeight: 800, padding: "3px 10px", borderRadius: 99, background: STATUS_STYLE[r.status]?.[1], color: STATUS_STYLE[r.status]?.[0] }}>{r.status}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div style={{ background: G.dark, borderRadius: 20, padding: "28px" }}>
                  <p style={{ color: G.gold, fontSize: 11, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>Weekly covers</p>
                  <p style={{ fontFamily: G.serif, fontSize: 48, fontWeight: 900, color: G.cream, margin: "0 0 4px" }}>312</p>
                  <p style={{ color: `${G.cream}50`, fontSize: 13, margin: 0 }}>↑ 18% vs same week last month</p>
                </div>
                <div style={{ background: "#fff", border: `1.5px solid ${G.border}`, borderRadius: 20, padding: "28px" }}>
                  <p style={{ fontSize: 14, fontWeight: 800, color: G.text, margin: "0 0 16px" }}>Upcoming this week</p>
                  {[["Wednesday", "43 covers", "3 slots left"], ["Thursday", "Full", "Waitlist open"], ["Friday", "Full", "Waitlist open"], ["Saturday", "Full", "Waitlist open"]].map(([day, covers, note]) => (
                    <div key={day} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 0", borderBottom: `1px solid ${G.border}` }}>
                      <span style={{ fontSize: 13, fontWeight: 700, color: G.text }}>{day}</span>
                      <span style={{ fontSize: 13, color: G.muted }}>{covers}</span>
                      <span style={{ fontSize: 11, color: covers === "Full" ? "#16A34A" : G.gold, fontWeight: 700 }}>{note}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Edit Modal ── */}
      {editOpen && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ background: "#fff", borderRadius: 24, padding: "36px", width: 480, boxShadow: "0 24px 60px rgba(0,0,0,0.2)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28 }}>
              <h2 style={{ fontFamily: G.serif, fontSize: 20, fontWeight: 700, color: G.text, margin: 0 }}>Edit Dish</h2>
              <button onClick={() => setEditOpen(false)} style={{ background: G.creamDark, border: "none", borderRadius: "50%", width: 32, height: 32, cursor: "pointer", fontSize: 14, color: G.muted }}>✕</button>
            </div>
            {[["Dish name", editItem.name], ["Price", editItem.price], ["Category", editItem.category]].map(([label, val]) => (
              <div key={label} style={{ marginBottom: 18 }}>
                <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: G.text, marginBottom: 8 }}>{label}</label>
                <input defaultValue={val} style={{ width: "100%", padding: "12px 14px", borderRadius: 12, border: `1.5px solid ${G.border}`, fontSize: 14, color: G.text, background: G.cream, boxSizing: "border-box", outline: "none" }} />
              </div>
            ))}
            <div style={{ marginBottom: 28 }}>
              <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: G.text, marginBottom: 8 }}>Description</label>
              <textarea rows={3} style={{ width: "100%", padding: "12px 14px", borderRadius: 12, border: `1.5px solid ${G.border}`, fontSize: 14, color: G.text, background: G.cream, resize: "none", boxSizing: "border-box", outline: "none" }} defaultValue="Dauphinoise potato, rosemary & red wine jus, tenderstem broccoli" />
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <button onClick={() => setEditOpen(false)} style={{ flex: 1, padding: "13px", borderRadius: 12, border: `1.5px solid ${G.border}`, background: "none", color: G.muted, fontWeight: 700, fontSize: 14, cursor: "pointer" }}>Cancel</button>
              <button onClick={() => setEditOpen(false)} style={{ flex: 2, padding: "13px", borderRadius: 12, border: "none", background: G.dark, color: G.cream, fontWeight: 800, fontSize: 14, cursor: "pointer" }}>Save Changes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
