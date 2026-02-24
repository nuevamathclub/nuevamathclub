"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("nmc-theme");
    if (stored) setDark(stored === "dark");
  }, []);

  useEffect(() => {
    localStorage.setItem("nmc-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div className={dark ? "dark-mode" : "light-mode"}>

      {/* NAV */}
      <nav>
        <a href="https://nuevamath.club" className="nav-logo">Nueva Math Club</a>
        <div className="nav-right">
          <ul className="nav-links">
            <li><a href="https://about.nuevamath.club">About</a></li>
            <li><a href="https://events.nuevamath.club">Events</a></li>
            <li><a href="https://competitions.nuevamath.club">Competitions</a></li>
            <li><a href="https://join.nuevamath.club">Join</a></li>
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

      {/* HERO */}
      <div className="hero">

        {/* Left: text */}
        <div className="hero-text">
          <p className="hero-eyebrow">The Nueva School · San Mateo, CA</p>
          <h1 className="hero-title">
            Nueva
            <em>Math Club</em>
          </h1>
          <p className="hero-sub">
            A student-run, student-led club that aims to make math both fun and challenging for everyone.
          </p>
        </div>


      </div>

      <div className="divider" />

      {/* ABOUT */}
      <div className="about">
        <div className="about-grid">
          <div>
            <span className="section-tag">// About Us</span>
            <p className="section-body">
              The Nueva Math Club brings together students who share a love for mathematics and problem-solving. We meet weekly to solve difficult puzzles, connect students to competitions, and provide a supportive learning environment where all students can grow. All levels of experience are welcome!
              <br /><br />
              We are also proud to host the Nueva Math Tournament each year for local middle school students, inspiring young mathematicians to follow their curiosity and hone their skills.
            </p>
          </div>
          <div>
            <span className="section-tag">// Events & Projects</span>
            <div className="features">
              <div className="feature-card">
                <span className="feature-icon">🏆</span>
                <div className="feature-title">Competitions</div>
                <div className="feature-desc">AMC, AIME, ARML, HMMT, USAMO and more throughout the year.</div>
              </div>
              <div className="feature-card">
                <span className="feature-icon">📐</span>
                <div className="feature-title">Problem Sessions</div>
                <div className="feature-desc">Weekly meetings with challenging, collaborative problem sets.</div>
              </div>
              <div className="feature-card">
                <span className="feature-icon">📄</span>
                <div className="feature-title">Past Tests</div>
                <div className="feature-desc">A growing archive of competition problems and solutions.</div>
              </div>
              <div className="feature-card">
                <span className="feature-icon">🤝</span>
                <div className="feature-title">Community</div>
                <div className="feature-desc">A welcoming space for all levels, from beginners to Olympians.</div>
              </div>
            </div>
          </div>
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