"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

/*
  ── EMAIL SETUP ──
  This form uses EmailJS to send emails directly from the browser — no server needed.

  1. Go to https://emailjs.com and create a free account
  2. Create an Email Service (Gmail works great) → copy the Service ID
  3. Create an Email Template with these variables:
       {{from_email}}  — the sender's email address
       {{subject}}     — the subject line
       {{message}}     — the message body
     Set the "To Email" in the template to: mathclub@nuevaschool.org
  4. Copy your Public Key from Account → API Keys
  5. Fill in the three constants below:
*/
const EMAILJS_SERVICE_ID  = "service_s0fkcr6";   // ← replace
const EMAILJS_TEMPLATE_ID = "template_24k7srt";  // ← replace
const EMAILJS_PUBLIC_KEY  = "clQATy7S7s5EzUt10";    // ← replace

const CONTACT_EMAIL = "nuevamathclub@nuevaschool.org";

export default function Contact() {
  const [dark, setDark] = useState(true);
  const [form, setForm] = useState({ email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.email || !form.subject || !form.message) return;

    setStatus("sending");
    try {
      // Dynamically import EmailJS so it doesn't break if not installed
      const emailjs = (await import("@emailjs/browser")).default;
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_email: form.email,
          subject:    form.subject,
          message:    form.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm({ email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "var(--bg-mid)",
    border: "1px solid var(--border)",
    borderRadius: 0,
    color: "var(--cream)",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.95rem",
    fontWeight: 400,
    padding: "0.85rem 1rem",
    outline: "none",
    transition: "border-color 0.2s",
    appearance: "none" as const,
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'DM Mono', monospace",
    fontSize: "0.68rem",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--gold)",
    display: "block",
    marginBottom: "0.5rem",
  };

  return (
    <div className={dark ? "dark-mode" : "light-mode"}>

      {/* NAV */}
      <nav>
        <a href="https://nuevamath.club" className="nav-logo">Nueva Math Club</a>
        <div className="nav-right">
          <ul className="nav-links">
            <li><a href="https://nuevamath.club">Home</a></li>
            <li><a href="https://nuevamath.club/nmt">NMT</a></li>
            <li><a href="https://nuevamath.club/contact" style={{color: "var(--gold)"}}>Contact Us</a></li>
          </ul>
          <button
            className="theme-btn"
            aria-label="Toggle dark mode"
            onClick={() => setDark(d => !d)}
          >
            {dark ? "☀" : "☽"}
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <div style={{
        minHeight: "42vh",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", textAlign: "center",
        padding: "9rem 3rem 4rem",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 80%)",
          opacity: 0.6, pointerEvents: "none",
        }} />

        <p style={{
          fontFamily: "'DM Mono', monospace", fontSize: "0.72rem",
          letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)",
          marginBottom: "1.25rem", opacity: 0, animation: "fadeUp 0.8s ease 0.2s forwards",
          position: "relative", zIndex: 1,
        }}>
          Nueva Math Club
        </p>

        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
          fontWeight: 900, lineHeight: 1.05, color: "var(--cream)",
          marginBottom: "1rem", opacity: 0, animation: "fadeUp 0.8s ease 0.4s forwards",
          position: "relative", zIndex: 1,
        }}>
          CONTACT US
        </h1>

        <p style={{
          fontSize: "1rem", lineHeight: 1.8, color: "var(--muted)",
          maxWidth: "46ch", fontWeight: 400,
          opacity: 0, animation: "fadeUp 0.8s ease 0.6s forwards",
          position: "relative", zIndex: 1,
        }}>
          Want to get involved? Have a question? Send us a message and we'll get back to you as soon as we can!
        </p>
      </div>

      <div className="divider" />

      {/* ── CONTACT FORM + SIDEBAR ── */}
      <div className="about">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 380px",
          gap: "5rem",
          alignItems: "start",
        }}>

          {/* Left: form */}
          <div>
            <span className="section-tag">Send a Message</span>

            <div style={{display: "flex", flexDirection: "column", gap: "1.5rem", marginTop: "1.75rem"}}>

              {/* Email */}
              <div>
                <label style={labelStyle}>Your Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = "var(--gold)")}
                  onBlur={e => (e.target.style.borderColor = "var(--border)")}
                />
              </div>

              {/* Subject */}
              <div>
                <label style={labelStyle}>Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="What's this about?"
                  value={form.subject}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = "var(--gold)")}
                  onBlur={e => (e.target.style.borderColor = "var(--border)")}
                />
              </div>

              {/* Message */}
              <div>
                <label style={labelStyle}>Message</label>
                <textarea
                  name="message"
                  placeholder="Your message..."
                  rows={7}
                  value={form.message}
                  onChange={handleChange}
                  style={{...inputStyle, resize: "vertical", lineHeight: 1.7}}
                  onFocus={e => (e.target.style.borderColor = "var(--gold)")}
                  onBlur={e => (e.target.style.borderColor = "var(--border)")}
                />
              </div>

              {/* Submit */}
              <div style={{display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap"}}>
                <button
                  onClick={handleSubmit}
                  disabled={status === "sending" || !form.email || !form.subject || !form.message}
                  style={{
                    padding: "0.9rem 2.4rem",
                    background: status === "sending" ? "var(--muted)" : "var(--gold)",
                    color: "var(--bg)",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    border: "none",
                    cursor: status === "sending" || !form.email || !form.subject || !form.message ? "not-allowed" : "pointer",
                    opacity: !form.email || !form.subject || !form.message ? 0.5 : 1,
                    transition: "background 0.2s, transform 0.15s, opacity 0.2s",
                  }}
                  onMouseEnter={e => {
                    if (status !== "sending" && form.email && form.subject && form.message)
                      (e.currentTarget as HTMLElement).style.background = "var(--gold-lt)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = status === "sending" ? "var(--muted)" : "var(--gold)";
                  }}
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                </button>

                {status === "success" && (
                  <span style={{
                    fontFamily: "'DM Mono', monospace", fontSize: "0.78rem",
                    letterSpacing: "0.1em", color: "var(--gold)",
                  }}>
                    ✓ Message sent!
                  </span>
                )}
                {status === "error" && (
                  <span style={{
                    fontFamily: "'DM Mono', monospace", fontSize: "0.78rem",
                    letterSpacing: "0.1em", color: "#fca5a5",
                  }}>
                    ✗ Something went wrong. Try emailing us directly.
                  </span>
                )}
              </div>

            </div>
          </div>

          {/* Right: contact info sidebar */}
          <div style={{display: "flex", flexDirection: "column", gap: "1.5rem", paddingTop: "3.5rem"}}>

            <div style={{
              background: "var(--bg-mid)",
              border: "1px solid var(--border)",
              borderTop: "2px solid var(--gold)",
              padding: "1.75rem",
            }}>
              <div style={{
                fontFamily: "'DM Mono', monospace", fontSize: "0.68rem",
                letterSpacing: "0.18em", textTransform: "uppercase",
                color: "var(--gold)", marginBottom: "0.6rem",
              }}>
                Email
              </div>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem",
                  color: "var(--cream)", textDecoration: "none", fontWeight: 400,
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--gold-lt)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--cream)"}
              >
                {CONTACT_EMAIL}
              </a>
            </div>

            <div style={{
              background: "var(--bg-mid)",
              border: "1px solid var(--border)",
              borderTop: "2px solid var(--gold)",
              padding: "1.75rem",
            }}>
              <div style={{
                fontFamily: "'DM Mono', monospace", fontSize: "0.68rem",
                letterSpacing: "0.18em", textTransform: "uppercase",
                color: "var(--gold)", marginBottom: "0.6rem",
              }}>
                Instagram
              </div>
              <a
                href="https://instagram.com/nuevamathclub"
                target="_blank" rel="noreferrer"
                style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem",
                  color: "var(--cream)", textDecoration: "none", fontWeight: 400,
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--gold-lt)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--cream)"}
              >
                @nuevamathclub
              </a>
            </div>

            <div style={{
              background: "var(--bg-mid)",
              border: "1px solid var(--border)",
              borderTop: "2px solid var(--gold)",
              padding: "1.75rem",
            }}>
              <div style={{
                fontFamily: "'DM Mono', monospace", fontSize: "0.68rem",
                letterSpacing: "0.18em", textTransform: "uppercase",
                color: "var(--gold)", marginBottom: "0.6rem",
              }}>
                Location
              </div>
              <p style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem",
                color: "var(--cream)", fontWeight: 400, lineHeight: 1.6,
              }}>
                The Nueva School<br />
                131 E 28th Ave<br />
                San Mateo, CA 94403
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">Nueva Math Club</div>
        <p className="footer-copy">© {new Date().getFullYear()} Nueva Math Club · nuevamath.club</p>
      </footer>

    </div>
  );
}