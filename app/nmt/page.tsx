"use client";
import { useState, useEffect } from "react";

export default function NMT() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("nmc-theme");
    if (stored) setDark(stored === "dark");
  }, []);

  useEffect(() => {
    localStorage.setItem("nmc-theme", dark ? "dark" : "light");
  }, [dark]);

  const btnStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    padding: "0.9rem 2.4rem",
    background: "var(--gold)",
    color: "var(--bg)",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.85rem",
    fontWeight: 500,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    textDecoration: "none",
    transition: "background 0.2s, transform 0.15s",
  };

  const monoTagStyle: React.CSSProperties = {
    fontFamily: "'DM Mono', monospace",
    fontSize: "0.68rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "var(--gold)",
    display: "block",
    marginBottom: "0.3rem",
  };

  const badgeStyle: React.CSSProperties = {
    fontSize: "0.7rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    padding: "0.3rem 0.8rem",
    border: "1px solid var(--border)",
    color: "var(--muted)",
    whiteSpace: "nowrap",
  };

  // ── PAST TESTS ──
  // Replace href values with real PDF paths when ready.
  // Set href to "" to show the button as disabled.
  const pastTests = [
    {
      year: "NMT 2025",
      tests: [
        { name: "Individual", href: "/nmt/2025/individual-test.pdf" },
        { name: "Team",       href: "/nmt/2025/team-test.pdf" },
        { name: "Puzzle",     href: "/nmt/2025/puzzle-test.pdf" },
      ],
      solutions: [
        { name: "Individual", href: "/nmt/2025/individual-solutions.pdf" },
        { name: "Team",       href: "/nmt/2025/team-solutions.pdf" },
        { name: "Puzzle",     href: "/nmt/2025/puzzle-solutions.pdf" },
      ],
    },
    {
      year: "NMT 2024",
      tests: [
        { name: "Individual", href: "/nmt/2024/individual-test.pdf" },
        { name: "Team",       href: "/nmt/2024/team-test.pdf" },
        { name: "Puzzle",     href: "/nmt/2024/puzzle-test.pdf" },
      ],
      solutions: [
        { name: "Individual", href: "/nmt/2024/individual-solutions.pdf" },
        { name: "Team",       href: "/nmt/2024/team-solutions.pdf" },
        { name: "Puzzle",     href: "/nmt/2024/puzzle-solutions.pdf" },
      ],
    },
  ];

  // ── PAST RESULTS ──
  const pastResults = [
    {
      year: "NMT 2025",
      individual: [
        { place: "1st",   name: "Dylan Shao",   school: "Bayside Academy" },
        { place: "2nd",   name: "Kevin Lu",     school: "Bayside Academy" },
        { place: "3rd",   name: "Aanik Chara",  school: "The Nueva School" },
      ],
      team: [
        { place: "1st", name: "Bayside Quasars",        school: "Bayside Academy" },
        { place: "2nd", name: "The Broken Calculators",  school: "The Nueva School" },
        { place: "3rd", name: "Team Bryan",              school: "Bowditch Middle School" },
      ],
      puzzle: [
        { place: "T-1st", name: "Bayside Quasars",  school: "Bayside Academy" },
        { place: "T-1st", name: "Nueva 8",          school: "The Nueva School" },
        { place: "T-1st", name: "New Wave, Uh?",    school: "The Nueva School" },
      ],
    },
    {
      year: "NMT 2024",
      individual: [
        { place: "1st", name: "Kevin Lu",           school: "Bayside Academy" },
        { place: "2nd", name: "Arya Srikar-Reddy",  school: "The Nueva School" },
        { place: "3rd", name: "Jayden Hong",         school: "Bowditch Middle School" },
      ],
      team: [
        { place: "1st", name: "Bayside Team A",                  school: "Bayside Academy" },
        { place: "2nd", name: "Burlingame Intermediate School",  school: "Burlingame Intermediate School" },
        { place: "3rd", name: "Nueva Mavemagicians",             school: "The Nueva School" },
      ],
      puzzle: [
        { place: "1st", name: "KLS Mathletes",                   school: "Khan Lab School" },
        { place: "2nd", name: "Nueva Megamathletes",             school: "The Nueva School" },
        { place: "3rd", name: "Burlingame Intermediate School",  school: "Burlingame Intermediate School" },
      ],
    },
  ];

  const placeColor: Record<string, string> = {
    "1st":   "#c9a84c",
    "T-1st": "#c9a84c",
    "2nd":   "#a0a8b8",
    "T-2nd": "#a0a8b8",
    "3rd":   "#b08060",
    "T-3rd": "#b08060",
  };

  // Reusable download button
  const DownloadBtn = ({ name, href, label }: { name: string; href: string; label?: string }) => (
    <a
      href={href || undefined}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex", alignItems: "center", gap: "0.4rem",
        padding: "0.45rem 1rem", border: "1px solid var(--border)",
        background: "transparent",
        color: href ? "var(--cream)" : "var(--muted)",
        fontFamily: "'DM Mono', monospace", fontSize: "0.75rem",
        letterSpacing: "0.08em", textDecoration: "none",
        cursor: href ? "pointer" : "default",
        opacity: href ? 1 : 0.45,
        transition: "border-color 0.2s, color 0.2s, background 0.2s",
        pointerEvents: href ? "auto" : "none",
      } as React.CSSProperties}
      onMouseEnter={e => {
        if (!href) return;
        (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)";
        (e.currentTarget as HTMLElement).style.color = "var(--gold-lt)";
        (e.currentTarget as HTMLElement).style.background = "var(--icon-hv)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
        (e.currentTarget as HTMLElement).style.color = href ? "var(--cream)" : "var(--muted)";
        (e.currentTarget as HTMLElement).style.background = "transparent";
      }}
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
      {label ?? name}
    </a>
  );

  return (
    <div className={dark ? "dark-mode" : "light-mode"}>

      {/* NAV */}
      <nav>
        <a href="https://nuevamath.club" className="nav-logo">Nueva Math Club</a>
        <div className="nav-right">
          <ul className="nav-links">
            <li><a href="https://nuevamath.club">Home</a></li>
            <li><a href="https://nuevamath.club/nmt" style={{color: "var(--gold)"}}>NMT</a></li>
            <li><a href="https://events.nuevamath.club">Events</a></li>
            <li><a href="https://competitions.nuevamath.club">Competitions</a></li>
          </ul>
          <button className="theme-btn" aria-label="Toggle dark mode" onClick={() => setDark(d => !d)}>
            {dark ? "☀" : "☽"}
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <div style={{
        minHeight: "70vh", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", textAlign: "center",
        padding: "10rem 3rem 5rem", position: "relative", overflow: "hidden",
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
          marginBottom: "1.5rem", opacity: 0, animation: "fadeUp 0.8s ease 0.2s forwards",
          position: "relative", zIndex: 1,
        }}>
          Nueva Math Club · Nueva Math Tournament
        </p>

        <h1 style={{
          fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
          fontWeight: 900, lineHeight: 1.05, color: "var(--cream)",
          letterSpacing: "0.04em", textTransform: "uppercase",
          marginBottom: "2rem", opacity: 0, animation: "fadeUp 0.8s ease 0.4s forwards",
          position: "relative", zIndex: 1, maxWidth: "20ch",
        }}>
          Nueva Math Tournament
        </h1>

        <p style={{
          fontSize: "1.05rem", lineHeight: 1.8, color: "var(--muted)",
          maxWidth: "70ch", marginBottom: "2.5rem", fontWeight: 400,
          opacity: 0, animation: "fadeUp 0.8s ease 0.6s forwards",
          position: "relative", zIndex: 1,
        }}>
          Registration for NMT 2026 is open! If you are a coach and would like to register teams from your school/organization, please fill out the two forms below by March 25th.
        </p>

        <div style={{
          display: "flex", gap: 12, justifyContent: "center",
          alignItems: "center", flexWrap: "wrap",
        }}>
          <div style={{ opacity: 0, animation: "fadeUp 0.8s ease 0.8s forwards", position: "relative", zIndex: 1 }}>
            <a
              href="https://forms.gle/SFnEVeXCWZ5Uu6P37"
              target="_blank" rel="noopener noreferrer"
              style={{ ...btnStyle, display: "inline-block" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "var(--gold-lt)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "var(--gold)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Registration Form
            </a>
          </div>
          <div style={{ opacity: 0, animation: "fadeUp 0.8s ease 0.8s forwards", position: "relative", zIndex: 1 }}>
            <a
              href="https://forms.gle/r3pSPaDHrnAUoenr9"
              target="_blank" rel="noopener noreferrer"
              style={{ ...btnStyle, display: "inline-block" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "var(--gold-lt)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "var(--gold)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Student Info Form
            </a>
          </div>
        </div>
      </div>

      <div className="divider" />

      {/* ── ABOUT ── */}
      <div className="about">
        <span className="section-tag">About NMT</span>
        <div style={{display: "flex", flexDirection: "column", gap: "1.25rem", alignItems: "center", justifyContent: "center"}}>
          <p className="section-body">
            Founded in 2024, the Nueva Math Tournament (NMT) is an annual math competition organized and hosted entirely by members of the Nueva Math Club. Each spring, we invite middle schoolers from across the Bay Area to The Nueva School's San Mateo campus to compete in individual and team rounds covering a range of topics and difficulty levels. Whether you're a first-time competitor or a seasoned mathlete, NMT offers an exciting environment to test your skills and connect with other mathematicians. We hope our competition can foster a love for problem-solving and create a supportive community where students can grow and thrive in mathematics!
          </p>
          <p className="section-body">
            The competition lasts from 4:30pm to 9:30pm and consists of an individual round, a puzzle round, and a team round. Participants are provided a pizza dinner, and we also offer activities and tiebreakers between the final round and the award ceremony. Participation costs $10 per student, which will be handled shortly after registration and is to be paid by the participating school/organization. Each team must have a responsible adult (coach or parent) on site for the duration of the contest. One coach can be responsible for two teams, but if a school is bringing more than two teams, they need to bring enough adults to have one adult for every two teams.
          </p>
        </div>
      </div>

      <div className="divider" />

      {/* ── PAST TESTS ── */}
      <div className="about" style={{paddingTop: "5rem", paddingBottom: "5rem"}}>
        <span className="section-tag">Past Tests</span>
        <p className="section-body" style={{marginTop: "0.25rem", marginBottom: "2rem"}}>
          We design our tournament problems after other middle school contests such as AMC 8, MathCounts, and Math Kangaroo. We've received feedback that our problems are slightly too difficult, and are working to strike a better balance in future competitions to ensure an enjoyable experience for all participants, regardless of their prior math background. Nonetheless, we have attached past tests here for reference and practice for future competitors who are looking for an extra challenge!
        </p>

        <div style={{display: "flex", flexDirection: "column", gap: "1px", background: "var(--border)"}}>
          {pastTests.map(t => (
            <div key={t.year} style={{
              background: "var(--bg-mid)", padding: "1.75rem 2rem",
              display: "grid",
              gridTemplateColumns: "100px 1fr",
              gap: "1.25rem",
              alignItems: "center",
            }}>
              {/* Year label spanning both rows */}
              <div style={{
                fontFamily: "'Playfair Display', serif", fontWeight: 700,
                fontSize: "1.05rem", color: "var(--cream)",
                gridRow: "1 / 3", alignSelf: "center",
              }}>
                {t.year}
              </div>

              {/* Row 1: Tests */}
              <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.75rem", flexWrap: "wrap"}}>
                <span style={{...monoTagStyle, marginBottom: 0}}>Tests</span>
                <div style={{display: "flex", gap: "0.6rem", flexWrap: "wrap"}}>
                  {t.tests.map(r => (
                    <DownloadBtn key={r.name} name={r.name} href={r.href} />
                  ))}
                </div>
              </div>

              {/* Row 2: Solutions */}
              <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.75rem", flexWrap: "wrap"}}>
                <span style={{...monoTagStyle, marginBottom: 0}}>Solutions</span>
                <div style={{display: "flex", gap: "0.6rem", flexWrap: "wrap"}}>
                  {t.solutions.map(r => (
                    <DownloadBtn key={r.name} name={r.name} href={r.href} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="divider" />

      {/* ── PAST RESULTS ── */}
      <div className="about" style={{paddingTop: "5rem", paddingBottom: "5rem"}}>
        <span className="section-tag">Past Results</span>
        <p className="section-body" style={{marginTop: "0.25rem", marginBottom: "2.5rem"}}>
          Each year, we reward the top 3 scores in each category with awards and certificates. Below are the results from previous competitions; congratulations to all the amazing mathletes who participated!
        </p>
        <div style={{display: "flex", flexDirection: "column", gap: "3rem"}}>
          {pastResults.map(yr => (
            <div key={yr.year}>
              <div style={{
                fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", fontWeight: 700,
                color: "var(--gold)", marginBottom: "1rem", paddingBottom: "0.5rem",
                borderBottom: "1px solid var(--border)",
              }}>
                {yr.year}
              </div>
              <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "var(--border)"}}>
                {([
                  { label: "Individual", entries: yr.individual },
                  { label: "Team",       entries: yr.team },
                  { label: "Puzzle",     entries: yr.puzzle },
                ] as const).map(col => (
                  <div key={col.label} style={{background: "var(--bg-mid)", padding: "1.5rem"}}>
                    <div style={{...monoTagStyle, marginBottom: "1rem"}}>{col.label}</div>
                    <div style={{display: "flex", flexDirection: "column", gap: "0.75rem"}}>
                      {col.entries.map((e, i) => (
                        <div key={i} style={{display: "flex", alignItems: "baseline", gap: "0.6rem"}}>
                          <span style={{
                            fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", fontWeight: 500,
                            color: placeColor[e.place] ?? "var(--muted)", minWidth: "36px",
                          }}>
                            {e.place}
                          </span>
                          <div>
                            <div style={{fontSize: "0.88rem", color: "var(--cream)", fontWeight: 400, lineHeight: 1.3}}>{e.name}</div>
                            <div style={{fontSize: "0.75rem", color: "var(--muted)", fontFamily: "'DM Mono', monospace"}}>{e.school}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="divider" />

      {/* SOCIALS */}
      <div className="socials-wrap">
        <div className="socials-inner">
          <div className="socials-grid">
            <a href="mailto:mathclub@nuevaschool.org" className="social-link">
              <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              Email Us
            </a>
            <a href="https://instagram.com/nuevamathclub" target="_blank" rel="noreferrer" className="social-link">
              <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
              Instagram
            </a>
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