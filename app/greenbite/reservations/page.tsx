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

/* ── Shared Nav ──────────────────────────────────────────────────────────────── */
function Nav() {
  return (
    <nav style={{ background: G.dark, position: "sticky", top: 0, zIndex: 50, borderBottom: `1px solid ${G.mid}` }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/greenbite" style={{ fontFamily: G.serif, color: G.cream, fontSize: 20, fontWeight: 700, textDecoration: "none" }}>GreenBite</Link>
        <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
          {[["Menu", "/greenbite/menu"], ["Admin", "/greenbite/admin"]].map(([label, href]) => (
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

/* ── Calendar ────────────────────────────────────────────────────────────────── */
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const UNAVAILABLE_DATES = [3, 7, 14, 21, 22];

function Calendar({ selected, onSelect }: { selected: number | null; onSelect: (d: number) => void }) {
  const today = new Date();
  const [viewDate] = useState(today);
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const offset = firstDay === 0 ? 6 : firstDay - 1;

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
        <span style={{ fontFamily: G.serif, fontSize: 17, fontWeight: 700, color: G.text }}>{MONTHS[month]} {year}</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4, marginBottom: 8 }}>
        {DAYS.map(d => (
          <div key={d} style={{ textAlign: "center", fontSize: 11, fontWeight: 700, color: G.muted, padding: "6px 0", letterSpacing: "0.05em" }}>{d}</div>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4 }}>
        {Array.from({ length: offset }).map((_, i) => <div key={`e${i}`} />)}
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => {
          const isPast = day < today.getDate();
          const isUnavail = UNAVAILABLE_DATES.includes(day);
          const isSelected = selected === day;
          const isDisabled = isPast || isUnavail;
          return (
            <button key={day} disabled={isDisabled} onClick={() => onSelect(day)}
              style={{
                border: isSelected ? `2px solid ${G.gold}` : `1.5px solid ${isDisabled ? "transparent" : G.border}`,
                borderRadius: 10,
                padding: "10px 4px",
                fontSize: 13,
                fontWeight: isSelected ? 800 : 500,
                color: isDisabled ? G.border : isSelected ? G.dark : G.text,
                background: isSelected ? G.gold : isDisabled ? "transparent" : "#fff",
                cursor: isDisabled ? "not-allowed" : "pointer",
                textAlign: "center",
              }}>
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ── Time Slots ──────────────────────────────────────────────────────────────── */
const LUNCH_SLOTS  = ["12:00","12:30","13:00","13:30","14:00","14:30"];
const DINNER_SLOTS = ["18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30"];
const TAKEN = ["12:30","13:30","19:00","20:00","21:00"];

function TimeSlots({ selected, onSelect }: { selected: string | null; onSelect: (t: string) => void }) {
  const SlotGroup = ({ label, slots }: { label: string; slots: string[] }) => (
    <div style={{ marginBottom: 24 }}>
      <p style={{ fontSize: 11, fontWeight: 800, color: G.muted, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 12 }}>{label}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
        {slots.map(slot => {
          const isTaken = TAKEN.includes(slot);
          const isSelected = selected === slot;
          return (
            <button key={slot} disabled={isTaken} onClick={() => onSelect(slot)}
              style={{
                padding: "11px 8px",
                borderRadius: 10,
                border: isSelected ? `2px solid ${G.gold}` : `1.5px solid ${isTaken ? G.border : G.border}`,
                background: isSelected ? G.gold : isTaken ? G.creamDark : "#fff",
                color: isSelected ? G.dark : isTaken ? G.border : G.text,
                fontSize: 13,
                fontWeight: isSelected ? 800 : 600,
                cursor: isTaken ? "not-allowed" : "pointer",
                position: "relative",
              }}>
              {slot}
              {isTaken && <span style={{ display: "block", fontSize: 9, color: G.border, fontWeight: 600, marginTop: 2 }}>Full</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
  return (
    <>
      <SlotGroup label="Lunch Service" slots={LUNCH_SLOTS} />
      <SlotGroup label="Dinner Service" slots={DINNER_SLOTS} />
    </>
  );
}

/* ── Booking Flow ────────────────────────────────────────────────────────────── */
type FormData = { name: string; email: string; phone: string; requests: string };

export default function ReservationsPage() {
  const [step, setStep]         = useState(1);
  const [date, setDate]         = useState<number | null>(null);
  const [partySize, setPartySize] = useState<number | null>(null);
  const [time, setTime]         = useState<string | null>(null);
  const [form, setForm]         = useState<FormData>({ name: "", email: "", phone: "", requests: "" });
  const [confirmed, setConfirmed] = useState(false);

  const today = new Date();
  const monthName = MONTHS[today.getMonth()];

  const steps = ["Select Date", "Party Size", "Choose Time", "Your Details"];

  function handleConfirm() {
    setConfirmed(true);
  }

  if (confirmed) {
    return (
      <>
        <Nav />
        <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "60px 24px" }}>
          <div style={{ textAlign: "center", maxWidth: 520 }}>
            <div style={{ width: 80, height: 80, borderRadius: "50%", background: `${G.gold}20`, border: `3px solid ${G.gold}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 28px", fontSize: 32 }}>✓</div>
            <h2 style={{ fontFamily: G.serif, fontSize: 36, fontWeight: 900, color: G.text, margin: "0 0 12px" }}>You're confirmed.</h2>
            <p style={{ color: G.muted, fontSize: 16, lineHeight: 1.7, margin: "0 0 32px" }}>
              A confirmation email and SMS have been sent to <strong>{form.email}</strong>. Your slot is held — we look forward to seeing you.
            </p>
            <div style={{ background: "#fff", border: `1.5px solid ${G.border}`, borderRadius: 20, padding: "28px 32px", marginBottom: 32, textAlign: "left" }}>
              {[
                ["Date",       `${monthName} ${date}, ${today.getFullYear()}`],
                ["Party size", `${partySize} ${partySize === 1 ? "guest" : "guests"}`],
                ["Time",       time!],
                ["Name",       form.name],
              ].map(([label, val]) => (
                <div key={label} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: `1px solid ${G.border}` }}>
                  <span style={{ fontSize: 13, color: G.muted, fontWeight: 600 }}>{label}</span>
                  <span style={{ fontSize: 13, color: G.text, fontWeight: 700 }}>{val}</span>
                </div>
              ))}
            </div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: `${G.dark}08`, border: `1px solid ${G.dark}15`, borderRadius: 10, padding: "10px 18px", marginBottom: 32 }}>
              <span style={{ fontSize: 12, color: G.muted }}>⏱ Your table is held for <strong>8 minutes</strong> from time of booking</span>
            </div>
            <br/>
            <Link href="/greenbite" style={{ color: G.dark, fontSize: 14, fontWeight: 700, textDecoration: "none", borderBottom: `2px solid ${G.gold}`, paddingBottom: 3 }}>← Back to GreenBite</Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Nav />

      {/* Header */}
      <div style={{ background: G.dark, padding: "56px 40px 64px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p style={{ color: G.gold, fontSize: 11, fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 14 }}>Online Booking</p>
          <h1 style={{ fontFamily: G.serif, fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 900, color: G.cream, margin: 0, letterSpacing: "-0.02em" }}>
            Reserve Your Table
          </h1>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "56px 40px 80px", display: "grid", gridTemplateColumns: "1fr 380px", gap: 48, alignItems: "start" }}>

        {/* Left — step content */}
        <div>
          {/* Progress steps */}
          <div style={{ display: "flex", alignItems: "center", gap: 0, marginBottom: 48 }}>
            {steps.map((s, i) => {
              const n = i + 1;
              const done = step > n;
              const active = step === n;
              return (
                <div key={s} style={{ display: "flex", alignItems: "center", flex: i < steps.length - 1 ? 1 : "none" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: "50%",
                      background: done ? G.dark : active ? G.gold : G.creamDark,
                      border: `2px solid ${done ? G.dark : active ? G.gold : G.border}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 12, fontWeight: 800,
                      color: done ? G.cream : active ? G.dark : G.muted,
                      flexShrink: 0,
                    }}>
                      {done ? "✓" : n}
                    </div>
                    <span style={{ fontSize: 13, fontWeight: active ? 700 : 500, color: active ? G.text : G.muted, whiteSpace: "nowrap" }}>{s}</span>
                  </div>
                  {i < steps.length - 1 && <div style={{ flex: 1, height: 2, background: done ? G.dark : G.border, margin: "0 16px" }} />}
                </div>
              );
            })}
          </div>

          {/* Step 1 — Date */}
          {step === 1 && (
            <div>
              <h2 style={{ fontFamily: G.serif, fontSize: 28, fontWeight: 700, color: G.text, margin: "0 0 28px" }}>Choose a date</h2>
              <div style={{ background: "#fff", border: `1.5px solid ${G.border}`, borderRadius: 20, padding: "32px" }}>
                <Calendar selected={date} onSelect={setDate} />
              </div>
              <button onClick={() => setStep(2)} disabled={!date}
                style={{ marginTop: 24, background: date ? G.dark : G.border, color: date ? G.cream : "#fff", fontWeight: 800, fontSize: 15, padding: "14px 36px", borderRadius: 99, border: "none", cursor: date ? "pointer" : "not-allowed", width: "100%" }}>
                Continue →
              </button>
            </div>
          )}

          {/* Step 2 — Party size */}
          {step === 2 && (
            <div>
              <h2 style={{ fontFamily: G.serif, fontSize: 28, fontWeight: 700, color: G.text, margin: "0 0 8px" }}>How many guests?</h2>
              <p style={{ color: G.muted, fontSize: 14, margin: "0 0 32px" }}>We accommodate parties of up to 10. For larger groups, please call us directly.</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12, marginBottom: 24 }}>
                {Array.from({ length: 10 }, (_, i) => i + 1).map(n => (
                  <button key={n} onClick={() => setPartySize(n)}
                    style={{
                      padding: "20px 12px",
                      borderRadius: 16,
                      border: partySize === n ? `2px solid ${G.gold}` : `1.5px solid ${G.border}`,
                      background: partySize === n ? G.gold : "#fff",
                      color: partySize === n ? G.dark : G.text,
                      fontSize: 18, fontWeight: partySize === n ? 900 : 600,
                      cursor: "pointer",
                    }}>
                    {n}
                  </button>
                ))}
              </div>
              <div style={{ display: "flex", gap: 12 }}>
                <button onClick={() => setStep(1)} style={{ flex: 1, background: G.creamDark, color: G.text, fontWeight: 700, fontSize: 15, padding: "14px", borderRadius: 99, border: `1.5px solid ${G.border}`, cursor: "pointer" }}>← Back</button>
                <button onClick={() => setStep(3)} disabled={!partySize}
                  style={{ flex: 2, background: partySize ? G.dark : G.border, color: "#fff", fontWeight: 800, fontSize: 15, padding: "14px", borderRadius: 99, border: "none", cursor: partySize ? "pointer" : "not-allowed" }}>
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* Step 3 — Time */}
          {step === 3 && (
            <div>
              <h2 style={{ fontFamily: G.serif, fontSize: 28, fontWeight: 700, color: G.text, margin: "0 0 8px" }}>Choose a time</h2>
              <p style={{ color: G.muted, fontSize: 14, margin: "0 0 32px" }}>
                {monthName} {date} · {partySize} {partySize === 1 ? "guest" : "guests"} · Greyed slots are fully booked
              </p>
              <div style={{ background: "#fff", border: `1.5px solid ${G.border}`, borderRadius: 20, padding: "28px 32px" }}>
                <TimeSlots selected={time} onSelect={setTime} />
              </div>
              <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
                <button onClick={() => setStep(2)} style={{ flex: 1, background: G.creamDark, color: G.text, fontWeight: 700, fontSize: 15, padding: "14px", borderRadius: 99, border: `1.5px solid ${G.border}`, cursor: "pointer" }}>← Back</button>
                <button onClick={() => setStep(4)} disabled={!time}
                  style={{ flex: 2, background: time ? G.dark : G.border, color: "#fff", fontWeight: 800, fontSize: 15, padding: "14px", borderRadius: 99, border: "none", cursor: time ? "pointer" : "not-allowed" }}>
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* Step 4 — Details */}
          {step === 4 && (
            <div>
              <h2 style={{ fontFamily: G.serif, fontSize: 28, fontWeight: 700, color: G.text, margin: "0 0 8px" }}>Your details</h2>
              <p style={{ color: G.muted, fontSize: 14, margin: "0 0 32px" }}>We'll send confirmation to your email and phone within seconds of booking.</p>
              <div style={{ background: "#fff", border: `1.5px solid ${G.border}`, borderRadius: 20, padding: "32px", display: "flex", flexDirection: "column", gap: 20 }}>
                {([["Full name", "name", "text", "e.g. Sarah Thompson"], ["Email address", "email", "email", "you@example.com"], ["Phone number", "phone", "tel", "+44 7700 000000"]] as [string, keyof FormData, string, string][]).map(([label, field, type, ph]) => (
                  <div key={field}>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: G.text, marginBottom: 8, letterSpacing: "0.05em" }}>{label}</label>
                    <input type={type} placeholder={ph} value={form[field]} onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                      style={{ width: "100%", padding: "13px 16px", borderRadius: 12, border: `1.5px solid ${G.border}`, fontSize: 14, color: G.text, background: G.cream, outline: "none", boxSizing: "border-box" }} />
                  </div>
                ))}
                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: G.text, marginBottom: 8, letterSpacing: "0.05em" }}>Special requests <span style={{ color: G.muted, fontWeight: 400 }}>(optional)</span></label>
                  <textarea rows={3} placeholder="Dietary requirements, allergies, occasion..." value={form.requests} onChange={e => setForm(f => ({ ...f, requests: e.target.value }))}
                    style={{ width: "100%", padding: "13px 16px", borderRadius: 12, border: `1.5px solid ${G.border}`, fontSize: 14, color: G.text, background: G.cream, outline: "none", resize: "none", boxSizing: "border-box" }} />
                </div>
              </div>
              <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
                <button onClick={() => setStep(3)} style={{ flex: 1, background: G.creamDark, color: G.text, fontWeight: 700, fontSize: 15, padding: "14px", borderRadius: 99, border: `1.5px solid ${G.border}`, cursor: "pointer" }}>← Back</button>
                <button onClick={handleConfirm} disabled={!form.name || !form.email || !form.phone}
                  style={{ flex: 2, background: form.name && form.email && form.phone ? G.gold : G.border, color: form.name && form.email && form.phone ? G.dark : "#fff", fontWeight: 800, fontSize: 15, padding: "14px", borderRadius: 99, border: "none", cursor: form.name && form.email && form.phone ? "pointer" : "not-allowed" }}>
                  Confirm Reservation
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right — summary sidebar */}
        <div style={{ position: "sticky", top: 88 }}>
          <div style={{ background: G.dark, borderRadius: 24, padding: "32px", marginBottom: 16 }}>
            <p style={{ color: G.gold, fontSize: 10, fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 20 }}>Your Reservation</p>
            {[
              ["Date",       date ? `${monthName} ${date}` : "—"],
              ["Party size", partySize ? `${partySize} guests` : "—"],
              ["Time",       time ?? "—"],
              ["Name",       form.name || "—"],
            ].map(([label, val]) => (
              <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: `1px solid ${G.mid}` }}>
                <span style={{ fontSize: 13, color: `${G.cream}60`, fontWeight: 500 }}>{label}</span>
                <span style={{ fontSize: 13, color: val === "—" ? `${G.cream}30` : G.cream, fontWeight: 700 }}>{val}</span>
              </div>
            ))}
          </div>

          {/* 8-min hold notice */}
          <div style={{ background: `${G.gold}12`, border: `1.5px solid ${G.gold}30`, borderRadius: 16, padding: "18px 20px", display: "flex", gap: 14, alignItems: "flex-start" }}>
            <span style={{ fontSize: 20, flexShrink: 0 }}>⏱</span>
            <div>
              <p style={{ fontSize: 13, fontWeight: 800, color: G.text, margin: "0 0 6px" }}>8-minute slot hold</p>
              <p style={{ fontSize: 12, color: G.muted, margin: 0, lineHeight: 1.6 }}>Your chosen time is reserved for 8 minutes while you complete this form. It releases automatically if not confirmed.</p>
            </div>
          </div>

          <div style={{ marginTop: 16, background: `${G.dark}06`, border: `1.5px solid ${G.border}`, borderRadius: 16, padding: "18px 20px", display: "flex", gap: 14, alignItems: "flex-start" }}>
            <span style={{ fontSize: 20, flexShrink: 0 }}>📩</span>
            <p style={{ fontSize: 12, color: G.muted, margin: 0, lineHeight: 1.6 }}>Email and SMS confirmation sent within <strong>3 seconds</strong> of booking. Kitchen notified instantly.</p>
          </div>
        </div>
      </div>
    </>
  );
}
