"use client";
import { useState } from "react";
import Link from "next/link";

const G = {
  dark:      "#1A3A2A",
  mid:       "#2D5A3D",
  gold:      "#C9A84C",
  goldDark:  "#A88030",
  cream:     "#FFF8F0",
  creamDark: "#F0E8D8",
  text:      "#1C1C14",
  muted:     "#5C5C48",
  border:    "#E0D4C0",
  serif:     "var(--gb-playfair), Georgia, serif",
};

function Nav() {
  return (
    <nav style={{ background: G.dark, position: "sticky", top: 0, zIndex: 50, borderBottom: `1px solid ${G.mid}` }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/greenbite" style={{ fontFamily: G.serif, color: G.cream, fontSize: 20, fontWeight: 700, textDecoration: "none" }}>GreenBite</Link>
        <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
          {[["Reservations", "/greenbite/reservations"], ["Admin", "/greenbite/admin"]].map(([label, href]) => (
            <Link key={label} href={href} style={{ color: `${G.cream}AA`, fontSize: 14, fontWeight: 500, textDecoration: "none" }}>{label}</Link>
          ))}
        </div>
        <Link href="/greenbite/reservations" style={{ background: G.gold, color: G.dark, fontWeight: 800, fontSize: 13, padding: "10px 22px", borderRadius: 99, textDecoration: "none" }}>
          Reserve a Table
        </Link>
      </div>
    </nav>
  );
}

/* ── Data ────────────────────────────────────────────────────────────────────── */
type Dish = { name: string; desc: string; price: string; tags: string[]; highlight?: boolean };
type Category = "Starters" | "Mains" | "Desserts" | "Drinks";

const MENU: Record<Category, Dish[]> = {
  Starters: [
    { name: "Roasted Heritage Beetroot",     desc: "Whipped goat's cheese, candied walnut, micro herbs, aged balsamic",       price: "£9",  tags: ["V", "GF"] },
    { name: "Wild Mushroom Bruschetta",       desc: "Sourdough toast, truffle oil, shaved aged parmesan, chervil",             price: "£8",  tags: ["V"], highlight: true },
    { name: "Smoked Salmon Blini",            desc: "Crème fraîche, cucumber ribbons, dill oil, pickled shallot",              price: "£12", tags: [] },
    { name: "Courgette & Ricotta Tart",       desc: "Slow-roasted cherry tomato, fresh basil, pine nut crumb",                 price: "£10", tags: ["V", "GF"] },
    { name: "Game Terrine",                   desc: "House-made pheasant & rabbit terrine, cornichon, toasted sourdough",      price: "£11", tags: [] },
    { name: "Celeriac Velouté",               desc: "Hazelnut cream, crispy sage, apple oil — seasonal soup of the week",      price: "£7",  tags: ["V", "GF"] },
  ],
  Mains: [
    { name: "Slow-Roasted Lamb Shoulder",      desc: "Dauphinoise potato, rosemary & red wine jus, tenderstem broccoli",       price: "£28", tags: ["GF"], highlight: true },
    { name: "Pan-Seared Cornish Sea Bass",     desc: "Saffron risotto, samphire, lemon & brown butter sauce, capers",          price: "£26", tags: ["GF"] },
    { name: "Wild Mushroom & Truffle Risotto", desc: "Aged parmesan, toasted pine nut, herb oil — also available vegan",       price: "£19", tags: ["V", "GF"] },
    { name: "Free-Range Chicken Supreme",      desc: "Butter bean & chorizo cassoulet, crispy skin, tarragon cream sauce",     price: "£23", tags: ["GF"] },
    { name: "Riverfield Farm Beef Rump",       desc: "24-hour aged rump, triple-cooked chips, béarnaise, watercress",          price: "£32", tags: ["GF"] },
    { name: "Butternut Squash Wellington",     desc: "Roasted squash, spinach & walnut en croûte, red wine reduction",         price: "£21", tags: ["V"] },
  ],
  Desserts: [
    { name: "Valrhona Dark Chocolate Fondant", desc: "70% cacao, vanilla bean ice cream, sea salt caramel, cocoa soil",        price: "£9",  tags: [], highlight: true },
    { name: "Seasonal Berry Pavlova",          desc: "Hand-whipped cream, local berry coulis, fresh mint",                     price: "£8",  tags: ["V", "GF"] },
    { name: "Artisan British Cheese Board",    desc: "Three cheeses, quince jelly, oat crackers, celery, grapes",              price: "£14", tags: ["V"] },
    { name: "Poached Williams Pear",           desc: "Spiced red wine poaching liquor, vanilla custard, almond tuile",         price: "£8",  tags: ["V"] },
    { name: "Lemon Posset",                    desc: "Shortbread biscuit, candied lemon zest, raspberry sorbet",               price: "£7",  tags: ["V", "GF"] },
  ],
  Drinks: [
    { name: "House Red — Côtes du Rhône",      desc: "Grenache-Syrah blend, France. Bottle £28 · Glass £7",                   price: "£7",  tags: [] },
    { name: "House White — Picpoul de Pinet",  desc: "Crisp & citrus, Languedoc. Bottle £28 · Glass £7",                     price: "£7",  tags: [] },
    { name: "Craft Pale Ale",                  desc: "Local brewery, 4.2% — brewed 8 miles from our kitchen",                 price: "£6",  tags: [], highlight: true },
    { name: "Elderflower & Cucumber Pressé",   desc: "House-made, lightly sparkling, no added sugar",                         price: "£4.5",tags: ["V"] },
    { name: "Seasonal Fruit Mocktail",         desc: "Changes weekly — ask your server for today's recipe",                   price: "£5.5",tags: ["V"] },
    { name: "Artisan Coffee",                  desc: "Single-origin espresso, oat or whole milk, served with petit four",     price: "£3.5",tags: ["V"] },
  ],
};

const CATEGORIES: Category[] = ["Starters", "Mains", "Desserts", "Drinks"];

const TAG_COLOURS: Record<string, [string, string]> = {
  V:  ["#16A34A", "#DCFCE7"],
  GF: ["#D97706", "#FEF3C7"],
};

/* ── Page ────────────────────────────────────────────────────────────────────── */
export default function MenuPage() {
  const [active, setActive] = useState<Category>("Starters");
  const dishes = MENU[active];

  return (
    <>
      <Nav />

      {/* Header */}
      <div style={{ background: G.dark, padding: "56px 40px 72px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p style={{ color: G.gold, fontSize: 11, fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 14 }}>Seasonal Menu</p>
          <h1 style={{ fontFamily: G.serif, fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 900, color: G.cream, margin: "0 0 18px", letterSpacing: "-0.02em" }}>
            What's on today
          </h1>
          <p style={{ color: `${G.cream}70`, fontSize: 15, maxWidth: 520, lineHeight: 1.7, margin: 0 }}>
            Our menu changes weekly as ingredients come in from the farms. Everything is prepared fresh each morning.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 40px 96px" }}>

        {/* Tab switcher */}
        <div style={{ display: "flex", gap: 8, marginBottom: 48, borderBottom: `2px solid ${G.border}`, paddingBottom: 0 }}>
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setActive(cat)}
              style={{
                padding: "13px 28px",
                background: "none",
                border: "none",
                borderBottom: active === cat ? `3px solid ${G.gold}` : "3px solid transparent",
                cursor: "pointer",
                fontSize: 14,
                fontWeight: active === cat ? 800 : 600,
                color: active === cat ? G.dark : G.muted,
                marginBottom: -2,
                transition: "all 0.15s",
              }}>
              {cat}
            </button>
          ))}
        </div>

        {/* Dish grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, marginBottom: 64 }}>
          {dishes.map((dish, i) => (
            <div key={i} style={{
              background: "#fff",
              border: `1.5px solid ${dish.highlight ? G.gold : G.border}`,
              borderRadius: 20,
              padding: "28px 32px",
              display: "flex",
              justifyContent: "space-between",
              gap: 20,
              position: "relative",
            }}>
              {dish.highlight && (
                <div style={{ position: "absolute", top: -1, right: 20, background: G.gold, color: G.dark, fontSize: 9, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", padding: "4px 12px", borderRadius: "0 0 10px 10px" }}>
                  Chef's Pick
                </div>
              )}
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 8 }}>
                  <h3 style={{ fontFamily: G.serif, fontSize: 17, fontWeight: 700, color: G.text, margin: 0 }}>{dish.name}</h3>
                  {dish.tags.map(tag => (
                    <span key={tag} style={{ fontSize: 9, fontWeight: 800, padding: "3px 8px", borderRadius: 6, background: TAG_COLOURS[tag]?.[1], color: TAG_COLOURS[tag]?.[0], letterSpacing: "0.08em" }}>{tag}</span>
                  ))}
                </div>
                <p style={{ color: G.muted, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{dish.desc}</p>
              </div>
              <div style={{ fontFamily: G.serif, fontSize: 20, fontWeight: 700, color: G.dark, whiteSpace: "nowrap", paddingTop: 2 }}>{dish.price}</div>
            </div>
          ))}
        </div>

        {/* Dietary key */}
        <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 64, paddingTop: 24, borderTop: `1px solid ${G.border}` }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: G.muted }}>Dietary:</span>
          {[["V", "Vegetarian"], ["GF", "Gluten-free available"]].map(([tag, label]) => (
            <div key={tag} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 10, fontWeight: 800, padding: "3px 8px", borderRadius: 6, background: TAG_COLOURS[tag]?.[1], color: TAG_COLOURS[tag]?.[0] }}>{tag}</span>
              <span style={{ fontSize: 12, color: G.muted }}>{label}</span>
            </div>
          ))}
          <span style={{ fontSize: 12, color: G.muted, marginLeft: "auto" }}>Please inform us of any allergies when booking.</span>
        </div>

        {/* Chef's note */}
        <div style={{ background: G.dark, borderRadius: 24, padding: "48px 56px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
          <div>
            <p style={{ color: G.gold, fontSize: 11, fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 16 }}>A Note from the Kitchen</p>
            <h2 style={{ fontFamily: G.serif, fontSize: 28, fontWeight: 900, color: G.cream, margin: "0 0 20px", lineHeight: 1.2 }}>
              "We don't plan the menu until Monday morning."
            </h2>
            <p style={{ color: `${G.cream}70`, fontSize: 14, lineHeight: 1.85, margin: "0 0 24px" }}>
              Every week we walk the market and visit three farms before we decide what's on the menu. The lamb shoulder stays because it always will. Everything else is whatever the land is offering right now.
            </p>
            <p style={{ color: `${G.cream}50`, fontSize: 13, fontStyle: "italic", margin: 0 }}>— Head Chef, GreenBite Kitchen</p>
          </div>
          <div style={{ textAlign: "right" }}>
            <Link href="/greenbite/reservations"
              style={{ background: G.gold, color: G.dark, fontWeight: 800, fontSize: 15, padding: "15px 32px", borderRadius: 99, textDecoration: "none", display: "inline-block", boxShadow: `0 8px 24px ${G.gold}40` }}>
              Reserve Your Table →
            </Link>
            <p style={{ color: `${G.cream}40`, fontSize: 12, marginTop: 14 }}>Table held for 8 minutes · Confirmation in seconds</p>
          </div>
        </div>
      </div>
    </>
  );
}
