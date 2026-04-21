import Link from "next/link";

const G = {
  dark:       "#1A3A2A",
  mid:        "#2D5A3D",
  light:      "#4A7C59",
  pale:       "#EAF4EE",
  cream:      "#FFF8F0",
  creamDark:  "#F0E8D8",
  gold:       "#C9A84C",
  goldDark:   "#A88030",
  text:       "#1C1C14",
  muted:      "#5C5C48",
  border:     "#E0D4C0",
  serif:      "var(--gb-playfair), Georgia, serif",
};

/* ── Nav ─────────────────────────────────────────────────────────────────────── */
function Nav() {
  return (
    <nav style={{ background: G.dark, position: "sticky", top: 0, zIndex: 50, borderBottom: `1px solid ${G.mid}` }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C8 2 4 6 4 10c0 5 8 12 8 12s8-7 8-12c0-4-4-8-8-8z" fill={G.gold} opacity="0.9"/>
            <path d="M12 6c0 0-4 3-4 7s4 7 4 7" stroke={G.dark} strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span style={{ fontFamily: G.serif, color: G.cream, fontSize: 20, fontWeight: 700, letterSpacing: "-0.01em" }}>GreenBite</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
          {[["Menu", "/greenbite/menu"], ["Reservations", "/greenbite/reservations"], ["Admin", "/greenbite/admin"]].map(([label, href]) => (
            <Link key={label} href={href} style={{ color: `${G.cream}AA`, fontSize: 14, fontWeight: 500, textDecoration: "none" }}>
              {label}
            </Link>
          ))}
        </div>
        <Link href="/greenbite/reservations" style={{ background: G.gold, color: G.dark, fontWeight: 800, fontSize: 13, padding: "10px 22px", borderRadius: 99, textDecoration: "none" }}>
          Reserve a Table
        </Link>
      </div>
    </nav>
  );
}

/* ── Hero ────────────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section style={{ background: G.dark, minHeight: "100vh", position: "relative", overflow: "hidden", display: "flex", alignItems: "center" }}>
      {/* Subtle organic background pattern */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.035 }} preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="gbpat" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <circle cx="40" cy="40" r="28" fill="none" stroke="#C9A84C" strokeWidth="1"/>
            <path d="M40 12 Q58 40 40 68 Q22 40 40 12Z" fill="#C9A84C" opacity="0.4"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#gbpat)"/>
      </svg>

      {/* Radial glow */}
      <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translate(-50%,-50%)", width: 700, height: 700, background: `radial-gradient(circle, ${G.mid}60 0%, transparent 70%)`, pointerEvents: "none" }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px", width: "100%", position: "relative", zIndex: 1, paddingTop: 120, paddingBottom: 160 }}>
        <div style={{ maxWidth: 720 }}>
          {/* Eyebrow */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: `${G.gold}18`, border: `1px solid ${G.gold}40`, borderRadius: 99, padding: "6px 18px", marginBottom: 36 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: G.gold }} />
            <span style={{ color: G.gold, fontSize: 11, fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase" }}>Farm to Table · Est. 2018</span>
          </div>

          <h1 style={{ fontFamily: G.serif, color: G.cream, fontSize: "clamp(48px, 6.5vw, 88px)", fontWeight: 900, lineHeight: 1.04, margin: "0 0 28px", letterSpacing: "-0.02em" }}>
            Honest Food.<br/>
            <em style={{ color: G.gold, fontStyle: "italic" }}>Grown Close.</em><br/>
            Served Simply.
          </h1>

          <p style={{ color: `${G.cream}80`, fontSize: 18, lineHeight: 1.75, margin: "0 0 52px", maxWidth: 520 }}>
            Every dish tells the story of the land it came from. We source within 30 miles, cook with the seasons, and put the ingredient first — always.
          </p>

          <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
            <Link href="/greenbite/reservations" style={{ background: G.gold, color: G.dark, fontWeight: 800, fontSize: 15, padding: "15px 34px", borderRadius: 99, textDecoration: "none", display: "inline-block", boxShadow: `0 8px 24px ${G.gold}40` }}>
              Reserve a Table →
            </Link>
            <Link href="/greenbite/menu" style={{ color: `${G.cream}CC`, fontWeight: 600, fontSize: 15, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, border: `1.5px solid ${G.cream}25`, borderRadius: 99, padding: "13px 28px" }}>
              View Menu
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom gradient to cream */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 140, background: `linear-gradient(to top, ${G.cream}, transparent)` }} />
    </section>
  );
}

/* ── Trust Strip ─────────────────────────────────────────────────────────────── */
function TrustStrip() {
  const items = [
    { icon: "🌱", label: "Locally Sourced",  sub: "Everything within 30 miles" },
    { icon: "🍽️", label: "Seasonal Menu",    sub: "Changes weekly with the harvest" },
    { icon: "🤝", label: "Direct from Farms", sub: "No wholesalers, no middlemen" },
    { icon: "♻️", label: "Zero Waste Kitchen", sub: "Committed to sustainable practice" },
  ];
  return (
    <div style={{ background: G.creamDark, borderTop: `1px solid ${G.border}`, borderBottom: `1px solid ${G.border}` }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
        {items.map((item, i) => (
          <div key={i} style={{ padding: "28px 24px", display: "flex", alignItems: "center", gap: 16, borderRight: i < 3 ? `1px solid ${G.border}` : "none" }}>
            <span style={{ fontSize: 26 }}>{item.icon}</span>
            <div>
              <p style={{ fontWeight: 700, fontSize: 14, color: G.text, margin: 0 }}>{item.label}</p>
              <p style={{ fontSize: 12, color: G.muted, margin: "3px 0 0" }}>{item.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Menu Preview ────────────────────────────────────────────────────────────── */
const DISHES = [
  { name: "Slow-Roasted Lamb Shoulder",     desc: "Dauphinoise potato, rosemary jus, tenderstem broccoli", price: "£28", tag: "Chef's Pick" },
  { name: "Pan-Seared Cornish Sea Bass",    desc: "Saffron risotto, samphire, brown butter & caper sauce", price: "£26", tag: null },
  { name: "Wild Mushroom & Truffle Risotto",desc: "Aged parmesan, herb oil, toasted pine nut — V, GF",    price: "£19", tag: "Popular" },
  { name: "Valrhona Chocolate Fondant",     desc: "Vanilla bean ice cream, sea salt caramel, cocoa soil",  price: "£9",  tag: null },
];

function MenuPreview() {
  return (
    <section style={{ padding: "96px 40px", maxWidth: 1280, margin: "0 auto" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 56 }}>
        <div>
          <p style={{ color: G.gold, fontSize: 11, fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12 }}>This Season</p>
          <h2 style={{ fontFamily: G.serif, fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 900, color: G.text, margin: 0, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            What's on<br/>the table
          </h2>
        </div>
        <Link href="/greenbite/menu" style={{ color: G.dark, fontWeight: 700, fontSize: 14, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, borderBottom: `2px solid ${G.gold}`, paddingBottom: 4 }}>
          Full menu →
        </Link>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
        {DISHES.map((d, i) => (
          <div key={i} style={{ background: "#fff", border: `1.5px solid ${G.border}`, borderRadius: 20, padding: "32px 36px", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 24 }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <h3 style={{ fontFamily: G.serif, fontSize: 18, fontWeight: 700, color: G.text, margin: 0 }}>{d.name}</h3>
                {d.tag && (
                  <span style={{ background: `${G.gold}18`, color: G.goldDark, fontSize: 9, fontWeight: 800, padding: "3px 10px", borderRadius: 99, letterSpacing: "0.12em", textTransform: "uppercase", whiteSpace: "nowrap" }}>{d.tag}</span>
                )}
              </div>
              <p style={{ color: G.muted, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{d.desc}</p>
            </div>
            <div style={{ fontFamily: G.serif, fontSize: 22, fontWeight: 700, color: G.dark, whiteSpace: "nowrap" }}>{d.price}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Story ───────────────────────────────────────────────────────────────────── */
function Story() {
  return (
    <section style={{ background: G.dark, padding: "100px 40px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        {/* Image placeholder */}
        <div style={{ borderRadius: 24, overflow: "hidden", aspectRatio: "4/5", background: G.mid, position: "relative" }}>
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16 }}>
            <div style={{ width: 80, height: 80, borderRadius: "50%", background: `${G.gold}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36 }}>🌿</div>
            <p style={{ color: `${G.cream}40`, fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>The farm</p>
          </div>
          <div style={{ position: "absolute", bottom: 28, left: 28, background: `${G.dark}CC`, backdropFilter: "blur(8px)", borderRadius: 16, padding: "18px 24px", border: `1px solid ${G.mid}` }}>
            <p style={{ color: G.gold, fontSize: 13, fontWeight: 800, margin: "0 0 4px" }}>Riverfield Farm</p>
            <p style={{ color: `${G.cream}80`, fontSize: 12, margin: 0 }}>Our primary supplier · 6 miles away</p>
          </div>
        </div>

        {/* Text */}
        <div>
          <p style={{ color: G.gold, fontSize: 11, fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 20 }}>Our Philosophy</p>
          <h2 style={{ fontFamily: G.serif, fontSize: "clamp(32px, 3.5vw, 52px)", fontWeight: 900, color: G.cream, margin: "0 0 28px", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            We know every farm<br/>by its first name.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {[
              "GreenBite was founded on a single belief: the best ingredient needs the shortest journey. We work with fourteen farms within thirty miles of this kitchen — farms we visit, farms whose owners eat here, farms whose names are on our menu.",
              "The menu changes every week because the harvest does. We don't engineer a dish around an ingredient we've ordered in. We walk the market on Monday morning and cook what we find.",
              "Our kitchen produces almost no food waste. Stocks are made from what would otherwise be discarded. Bread comes from spent brewing grain. Every element on the plate has a reason to be there.",
            ].map((para, i) => (
              <p key={i} style={{ color: `${G.cream}80`, fontSize: 15, lineHeight: 1.85, margin: 0 }}>{para}</p>
            ))}
          </div>
          <div style={{ marginTop: 48, display: "flex", gap: 40 }}>
            {[["14", "Farm partners"], ["30mi", "Max supply radius"], ["6yrs", "In the community"]].map(([val, lab]) => (
              <div key={lab}>
                <p style={{ fontFamily: G.serif, fontSize: 36, fontWeight: 900, color: G.gold, margin: "0 0 4px" }}>{val}</p>
                <p style={{ color: `${G.cream}60`, fontSize: 12, fontWeight: 600, margin: 0, letterSpacing: "0.05em" }}>{lab}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Testimonials ────────────────────────────────────────────────────────────── */
const TESTIMONIALS = [
  { text: "The best meal I've had in years. You can taste the difference when ingredients are this fresh — there's no hiding behind sauces and seasoning.", name: "Rebecca T.", detail: "Regular guest since 2020" },
  { text: "We came for a birthday dinner and left having booked our next three visits. The lamb shoulder alone is worth a special trip.", name: "Marcus & Claire D.", detail: "Anniversary dinner" },
  { text: "I've been to farm-to-table restaurants all over the country. GreenBite is the only one where the provenance story actually shows up on the plate.", name: "Jonathan W.", detail: "Food writer" },
];

function Testimonials() {
  return (
    <section style={{ padding: "96px 40px", background: G.creamDark }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{ color: G.gold, fontSize: 11, fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 14 }}>Guest Experiences</p>
          <h2 style={{ fontFamily: G.serif, fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 900, color: G.text, margin: 0, letterSpacing: "-0.02em" }}>Straight from the table</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} style={{ background: "#fff", border: `1.5px solid ${G.border}`, borderRadius: 20, padding: "36px" }}>
              <p style={{ fontFamily: G.serif, fontSize: 40, color: `${G.gold}30`, margin: "0 0 8px", lineHeight: 1 }}>"</p>
              <p style={{ fontStyle: "italic", fontSize: 15, lineHeight: 1.8, color: G.text, margin: "0 0 28px" }}>{t.text}</p>
              <div style={{ borderTop: `1px solid ${G.border}`, paddingTop: 20 }}>
                <p style={{ fontWeight: 700, fontSize: 14, color: G.text, margin: 0 }}>{t.name}</p>
                <p style={{ fontSize: 12, color: G.muted, margin: "4px 0 0" }}>{t.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CTA Banner ──────────────────────────────────────────────────────────────── */
function CTABanner() {
  return (
    <section style={{ background: G.dark, padding: "80px 40px", textAlign: "center" }}>
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <h2 style={{ fontFamily: G.serif, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 900, color: G.cream, margin: "0 0 18px", letterSpacing: "-0.02em" }}>
          Ready to join us at the table?
        </h2>
        <p style={{ color: `${G.cream}70`, fontSize: 16, lineHeight: 1.7, margin: "0 0 40px" }}>
          We hold slots for just 8 minutes — book now and get your confirmation within seconds.
        </p>
        <Link href="/greenbite/reservations" style={{ background: G.gold, color: G.dark, fontWeight: 800, fontSize: 16, padding: "16px 40px", borderRadius: 99, textDecoration: "none", display: "inline-block", boxShadow: `0 8px 32px ${G.gold}50` }}>
          Reserve Your Table →
        </Link>
      </div>
    </section>
  );
}

/* ── Footer ──────────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{ background: "#0F2419", padding: "56px 40px 32px", borderTop: `1px solid ${G.mid}` }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <span style={{ fontFamily: G.serif, color: G.cream, fontSize: 18, fontWeight: 700 }}>GreenBite</span>
            </div>
            <p style={{ color: `${G.cream}55`, fontSize: 13, lineHeight: 1.7, margin: "0 0 20px", maxWidth: 260 }}>Farm-to-table dining rooted in honest ingredients and seasonal cooking.</p>
          </div>
          <div>
            <p style={{ color: G.gold, fontSize: 10, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 16 }}>Visit</p>
            {["14 Harvest Lane", "Ashford, Kent", "TN23 4GR"].map(l => <p key={l} style={{ color: `${G.cream}60`, fontSize: 13, margin: "0 0 6px" }}>{l}</p>)}
          </div>
          <div>
            <p style={{ color: G.gold, fontSize: 10, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 16 }}>Hours</p>
            {[["Tue–Fri", "12:00 – 22:00"], ["Sat", "11:00 – 22:30"], ["Sun", "11:00 – 17:00"], ["Mon", "Closed"]].map(([d, h]) => (
              <p key={d} style={{ color: `${G.cream}60`, fontSize: 13, margin: "0 0 6px" }}><span style={{ fontWeight: 600, color: `${G.cream}90` }}>{d}</span> · {h}</p>
            ))}
          </div>
          <div>
            <p style={{ color: G.gold, fontSize: 10, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 16 }}>Contact</p>
            {["reservations@greenbite.co.uk", "+44 1233 456 789"].map(c => <p key={c} style={{ color: `${G.cream}60`, fontSize: 13, margin: "0 0 6px" }}>{c}</p>)}
          </div>
        </div>
        <div style={{ borderTop: `1px solid ${G.mid}`, paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ color: `${G.cream}35`, fontSize: 12, margin: 0 }}>© 2024 GreenBite. All rights reserved.</p>
          <p style={{ color: `${G.cream}35`, fontSize: 12, margin: 0 }}>Sourced locally. Cooked honestly.</p>
        </div>
      </div>
    </footer>
  );
}

/* ── Page ────────────────────────────────────────────────────────────────────── */
export default function GreenBiteHome() {
  return (
    <>
      <Nav />
      <Hero />
      <TrustStrip />
      <MenuPreview />
      <Story />
      <Testimonials />
      <CTABanner />
      <Footer />
    </>
  );
}
