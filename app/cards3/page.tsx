"use client";

const services = [
  { icon: "/images/01.png", img: "/images/1.png",  title: "Web Applications",  tag: "Web · Next.js",        desc: "Fast, scalable web apps from MVP to enterprise.", points: ["SEO-optimised", "Sub-2s load time"] },
  { icon: "/images/02.png", img: "/images/3.png",  title: "Mobile Apps",        tag: "Flutter · React Native", desc: "Cross-platform iOS & Android that feel truly native.", points: ["App Store ready", "Offline-first"] },
  { icon: "/images/03.png", img: "/images/5.png",  title: "UI / UX Design",     tag: "Figma · Framer",       desc: "Conversion-focused interfaces, every pixel counts.", points: ["Prototypes", "Design system"] },
  { icon: "/images/04.png", img: "/images/7.png",  title: "AI & Automation",    tag: "OpenAI · LangChain",   desc: "GPT pipelines and automation saving real hours.", points: ["RAG pipelines", "API integrations"] },
];

function Label({ letter, title, sub }: { letter: string; title: string; sub: string }) {
  return (
    <div className="mb-5">
      <div className="flex items-center gap-3 mb-1">
        <span className="w-7 h-7 rounded-full bg-[#0A0A0A] text-white text-xs font-black flex items-center justify-center">{letter}</span>
        <p className="font-black text-base text-[#0A0A0A]">{title}</p>
      </div>
      <p className="text-xs text-[#9CA3AF] ml-10">{sub}</p>
    </div>
  );
}

function Card({ s, backStyle, topAccent }: { s: typeof services[0]; backStyle: React.CSSProperties; topAccent?: React.ReactNode }) {
  return (
    <div className="relative cursor-default" style={{ height: 310 }}>
      {/* Back image card */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden" style={backStyle}>
        <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.35)" }} />
      </div>
      {/* Front white card */}
      <div
        className="absolute bottom-0 inset-x-2 rounded-2xl flex flex-col"
        style={{ background: "#fff", boxShadow: "0 -4px 32px rgba(0,0,0,0.10)", border: "1px solid #F0F0F0" }}
      >
        {topAccent}
        <div className="p-4 flex flex-col gap-2">
          <div className="absolute -top-7 left-4">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center border-4 border-white"
              style={{ background: "#F5F5F5", boxShadow: "0 4px 20px rgba(245,166,35,0.35)" }}>
              <img src={s.icon} alt={s.title} className="w-9 h-9 object-contain" />
            </div>
          </div>
          <div className="mt-6">
            <p className="font-semibold text-[15px] tracking-tight text-[#0A0A0A] leading-snug">{s.title}</p>
            <p className="text-[11px] font-medium mt-0.5 tracking-wide uppercase" style={{ color: "#F5A623" }}>{s.tag}</p>
          </div>
          <div style={{ height: 1, background: "#F3F3F3" }} />
          <p className="text-[12px] text-[#6B7280] leading-relaxed">{s.desc}</p>
          <div className="flex items-center justify-between mt-1">
            <div className="flex gap-1">
              {s.points.map((pt, j) => (
                <span key={j} className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                  style={{ background: "#F5F5F5", color: "#0A0A0A", border: "1px solid #E5E5E5" }}>{pt}</span>
              ))}
            </div>
            <span className="text-xs font-semibold" style={{ color: "#F5A623" }}>View →</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── A: No border (current) ───────────────────────────── */
function StyleA() {
  return (
    <div>
      <Label letter="A" title="No border (current)" sub="Clean shadow only, no visible border on image card" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <Card key={i} s={s} backStyle={{ boxShadow: "0 10px 36px rgba(0,0,0,0.12)" }} />
        ))}
      </div>
    </div>
  );
}

/* ── B: Orange border ─────────────────────────────────── */
function StyleB() {
  return (
    <div>
      <Label letter="B" title="Orange border" sub="3px solid orange border on the image card" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <Card key={i} s={s} backStyle={{ border: "3px solid #F5A623", boxShadow: "0 10px 36px rgba(245,166,35,0.25)" }} />
        ))}
      </div>
    </div>
  );
}

/* ── C: Gradient border ───────────────────────────────── */
function StyleC() {
  return (
    <div>
      <Label letter="C" title="Gradient border" sub="Orange-to-black gradient border via outline + pseudo layer trick" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <div key={i} className="relative cursor-default" style={{ height: 310 }}>
            {/* Gradient border wrapper */}
            <div className="absolute inset-0 rounded-2xl p-[3px]"
              style={{ background: "linear-gradient(135deg, #F5A623, #0A0A0A, #F5A623)" }}>
              <div className="absolute inset-[3px] rounded-[13px] overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.35)" }} />
              </div>
            </div>
            {/* Front white card */}
            <div className="absolute bottom-0 inset-x-2 rounded-2xl flex flex-col"
              style={{ background: "#fff", boxShadow: "0 -4px 32px rgba(0,0,0,0.10)", border: "1px solid #F0F0F0" }}>
              <div style={{ height: 4, background: "linear-gradient(90deg, #F5A623, #0A0A0A)", borderRadius: "16px 16px 0 0" }} />
              <div className="p-4 flex flex-col gap-2">
                <div className="absolute -top-7 left-4">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center border-4 border-white"
                    style={{ background: "#F5F5F5", boxShadow: "0 4px 20px rgba(245,166,35,0.35)" }}>
                    <img src={s.icon} alt={s.title} className="w-9 h-9 object-contain" />
                  </div>
                </div>
                <div className="mt-6">
                  <p className="font-semibold text-[15px] tracking-tight text-[#0A0A0A] leading-snug">{s.title}</p>
                  <p className="text-[11px] font-medium mt-0.5 tracking-wide uppercase" style={{ color: "#F5A623" }}>{s.tag}</p>
                </div>
                <div style={{ height: 1, background: "#F3F3F3" }} />
                <p className="text-[12px] text-[#6B7280] leading-relaxed">{s.desc}</p>
                <div className="flex items-center justify-between mt-1">
                  <div className="flex gap-1">
                    {s.points.map((pt, j) => (
                      <span key={j} className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                        style={{ background: "#F5F5F5", color: "#0A0A0A", border: "1px solid #E5E5E5" }}>{pt}</span>
                    ))}
                  </div>
                  <span className="text-xs font-semibold" style={{ color: "#F5A623" }}>View →</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── D: White border ──────────────────────────────────── */
function StyleD() {
  return (
    <div>
      <Label letter="D" title="White border" sub="2px white border on image card, clean premium look" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <Card key={i} s={s} backStyle={{ border: "2px solid rgba(255,255,255,0.8)", boxShadow: "0 10px 36px rgba(0,0,0,0.18)" }} />
        ))}
      </div>
    </div>
  );
}

/* ── E: Orange glow border ────────────────────────────── */
function StyleE() {
  return (
    <div>
      <Label letter="E" title="Orange glow / neon border" sub="Thin orange border + strong color box-shadow glow" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <Card key={i} s={s} backStyle={{ border: "2px solid #F5A623", boxShadow: "0 0 0 4px rgba(245,166,35,0.18), 0 10px 36px rgba(0,0,0,0.14)" }} />
        ))}
      </div>
    </div>
  );
}

/* ── F: Black border ──────────────────────────────────── */
function StyleF() {
  return (
    <div>
      <Label letter="F" title="Black border" sub="Bold 3px black border, sharp and editorial" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <Card key={i} s={s} backStyle={{ border: "3px solid #0A0A0A", boxShadow: "0 10px 36px rgba(0,0,0,0.18)" }} />
        ))}
      </div>
    </div>
  );
}

/* ── G: Dashed orange border ──────────────────────────── */
function StyleG() {
  return (
    <div>
      <Label letter="G" title="Dashed orange border" sub="Dashed 2px orange border, playful yet structured" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <Card key={i} s={s} backStyle={{ border: "2px dashed #F5A623", boxShadow: "0 10px 36px rgba(0,0,0,0.12)" }} />
        ))}
      </div>
    </div>
  );
}

/* ── H: Double border ─────────────────────────────────── */
function StyleH() {
  return (
    <div>
      <Label letter="H" title="Double border" sub="Thin white inner + orange outer via outline, layered depth" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <Card key={i} s={s} backStyle={{
            border: "3px solid #F5A623",
            outline: "3px solid #0A0A0A",
            outlineOffset: "3px",
            boxShadow: "0 10px 36px rgba(0,0,0,0.14)",
          }} />
        ))}
      </div>
    </div>
  );
}

/* ── I: Frosted glass border ──────────────────────────── */
function StyleI() {
  return (
    <div>
      <Label letter="I" title="Frosted glass border" sub="Semi-transparent white border, soft and modern" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <Card key={i} s={s} backStyle={{
            border: "2px solid rgba(255,255,255,0.45)",
            boxShadow: "0 10px 36px rgba(0,0,0,0.18), inset 0 0 0 1px rgba(255,255,255,0.15)",
          }} />
        ))}
      </div>
    </div>
  );
}

/* ── J: Bottom accent only ────────────────────────────── */
function StyleJ() {
  return (
    <div>
      <Label letter="J" title="Bottom accent only" sub="No border on image, just a thick orange bottom edge" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <Card key={i} s={s} backStyle={{
            borderBottom: "4px solid #F5A623",
            boxShadow: "0 10px 36px rgba(0,0,0,0.12)",
          }} />
        ))}
      </div>
    </div>
  );
}

/* ── K: Rounded thick white ───────────────────────────── */
function StyleK() {
  return (
    <div>
      <Label letter="K" title="Thick white frame" sub="Heavy 4px white border, feels like a photo frame" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <Card key={i} s={s} backStyle={{
            border: "4px solid #ffffff",
            boxShadow: "0 12px 40px rgba(0,0,0,0.22)",
          }} />
        ))}
      </div>
    </div>
  );
}

/* ── L: Multi-color shadow border ────────────────────────── */
function StyleL() {
  return (
    <div>
      <Label letter="L" title="Layered shadow border" sub="No visible border — depth created with stacked box-shadows" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <Card key={i} s={s} backStyle={{
            boxShadow: "0 0 0 2px #F5A623, 0 0 0 5px #0A0A0A, 0 12px 36px rgba(0,0,0,0.20)",
          }} />
        ))}
      </div>
    </div>
  );
}

const backK = { border: "4px solid #ffffff", boxShadow: "0 12px 40px rgba(0,0,0,0.22)" };

/* ── M: Orange-to-black gradient strip (current) ─────── */
function StyleM() {
  const accent = <div style={{ height: 4, background: "linear-gradient(90deg, #F5A623, #0A0A0A)", borderRadius: "16px 16px 0 0" }} />;
  return (
    <div>
      <Label letter="M" title="Orange → black gradient strip (current)" sub="4px gradient bar across the top of the front card" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => <Card key={i} s={s} backStyle={backK} topAccent={accent} />)}
      </div>
    </div>
  );
}

/* ── N: Solid orange strip ────────────────────────────── */
function StyleN() {
  const accent = <div style={{ height: 4, background: "#F5A623", borderRadius: "16px 16px 0 0" }} />;
  return (
    <div>
      <Label letter="N" title="Solid orange strip" sub="Clean flat orange bar at top of front card" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => <Card key={i} s={s} backStyle={backK} topAccent={accent} />)}
      </div>
    </div>
  );
}

/* ── O: Solid black strip ─────────────────────────────── */
function StyleO() {
  const accent = <div style={{ height: 4, background: "#0A0A0A", borderRadius: "16px 16px 0 0" }} />;
  return (
    <div>
      <Label letter="O" title="Solid black strip" sub="Bold dark bar — minimal and sharp" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => <Card key={i} s={s} backStyle={backK} topAccent={accent} />)}
      </div>
    </div>
  );
}

/* ── P: Thick orange strip ────────────────────────────── */
function StyleP() {
  const accent = <div style={{ height: 8, background: "#F5A623", borderRadius: "16px 16px 0 0" }} />;
  return (
    <div>
      <Label letter="P" title="Thick orange strip" sub="8px tall orange bar — bolder accent" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => <Card key={i} s={s} backStyle={backK} topAccent={accent} />)}
      </div>
    </div>
  );
}

/* ── Q: No strip, border-top only ────────────────────── */
function StyleQ() {
  return (
    <div>
      <Label letter="Q" title="No strip — orange border-top on front card" sub="Front card gets a colored top border instead of a filled strip" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <div key={i} className="relative cursor-default" style={{ height: 310 }}>
            <div className="absolute inset-0 rounded-2xl overflow-hidden" style={backK}>
              <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.35)" }} />
            </div>
            <div className="absolute bottom-0 inset-x-2 rounded-2xl flex flex-col p-4 gap-2"
              style={{ background: "#fff", boxShadow: "0 -4px 32px rgba(0,0,0,0.10)", border: "1px solid #F0F0F0", borderTop: "3px solid #F5A623" }}>
              <div className="absolute -top-7 left-4">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center border-4 border-white"
                  style={{ background: "#F5F5F5", boxShadow: "0 4px 20px rgba(245,166,35,0.35)" }}>
                  <img src={s.icon} alt={s.title} className="w-9 h-9 object-contain" />
                </div>
              </div>
              <div className="mt-6">
                <p className="font-semibold text-[15px] tracking-tight text-[#0A0A0A] leading-snug">{s.title}</p>
                <p className="text-[11px] font-medium mt-0.5 tracking-wide uppercase" style={{ color: "#F5A623" }}>{s.tag}</p>
              </div>
              <div style={{ height: 1, background: "#F3F3F3" }} />
              <p className="text-[12px] text-[#6B7280] leading-relaxed">{s.desc}</p>
              <div className="flex items-center justify-between mt-1">
                <div className="flex gap-1">
                  {s.points.map((pt, j) => (
                    <span key={j} className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                      style={{ background: "#F5F5F5", color: "#0A0A0A", border: "1px solid #E5E5E5" }}>{pt}</span>
                  ))}
                </div>
                <span className="text-xs font-semibold" style={{ color: "#F5A623" }}>View →</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── R: No strip at all ───────────────────────────────── */
function StyleR() {
  return (
    <div>
      <Label letter="R" title="No strip at all" sub="Plain white front card — let the image speak" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => <Card key={i} s={s} backStyle={backK} topAccent={undefined} />)}
      </div>
    </div>
  );
}

export default function Cards3Demo() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] px-8 lg:px-16 py-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 pb-8 border-b border-[#E5E7EB]">
          <p className="text-xs font-black uppercase tracking-widest text-[#F5A623] mb-2">localhost:3000/cards3</p>
          <h1 className="font-display font-black text-4xl text-[#0A0A0A] mb-2">Card Border Demos</h1>
          <p className="text-[#6B7280]">A–L: image card borders &nbsp;·&nbsp; M–R: front card top accent</p>
        </div>
        <div className="flex flex-col gap-16">
          <StyleA />
          <StyleB />
          <StyleC />
          <StyleD />
          <StyleE />
          <StyleF />
          <StyleG />
          <StyleH />
          <StyleI />
          <StyleJ />
          <StyleK />
          <StyleL />
          <div className="pt-8 border-t-2 border-[#E5E7EB]">
            <p className="text-lg font-black text-[#0A0A0A] mb-10">Front card top accent (all using Style K image border)</p>
            <div className="flex flex-col gap-16">
              <StyleM />
              <StyleN />
              <StyleO />
              <StyleP />
              <StyleQ />
              <StyleR />
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-[#E5E7EB] text-center">
          <p className="text-sm text-[#9CA3AF]">← <a href="/" className="text-[#F5A623] font-bold hover:underline">Back to main site</a></p>
        </div>
      </div>
    </div>
  );
}
