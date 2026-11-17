import { useState } from "react";
import {
  Menu, X, Stethoscope, Cpu, FileCheck2, Phone, Mail, MapPin,
  GraduationCap, CheckCircle2, BadgeCheck, ChevronDown, ArrowUpRight, Star,
} from "lucide-react";

const NAV = [
  { label: "Medical", href: "#medical" },
  { label: "Management", href: "#management" },
  { label: "Packages", href: "#packages" },
];

const ENGINEERING_OPTIONS = [
  { label: "Colleges", href: "#engineering" },
  { label: "Colleges Fees", href: "#packages" },
  { label: "Others", href: "#contact" },
];

const CARDS = [
  {
    id: "medical",
    icon: Stethoscope,
    title: "Medical Admissions",
    text: "Guidance for MBBS, BDS and MD seats, with step-by-step counseling support for NEET UG and NEET PG.",
    points: ["MBBS & BDS (NEET UG)", "MD / MS seats (NEET PG)", "Choice filling & round strategy"],
  },
  {
    id: "engineering",
    icon: Cpu,
    title: "Engineering Admissions",
    text: "Seats in top VTU-affiliated and private universities, with direct guidance for COMEDK and KCET.",
    points: ["KCET counseling", "COMEDK UGET counseling", "Branch & college shortlisting"],
  },
  {
    id: "packages",
    icon: FileCheck2,
    title: "Admission Packages",
    text: "One package covers the whole process, from the first document check to your seat confirmation.",
    points: ["End-to-end documentation", "Counseling assistance", "Certificate verification"],
  },
];

const STATS = [
  { value: "65000+", label: "Students Enrolled" },
  { value: "15000+", label: "Enrollments Till Date" },
  { value: "45000+", label: "Applications in 2025" },
  { value: "#1", label: "Ranked in South India" },
  { value: "#2", label: "Ranked in India" },
  { value: "32+", label: "Turn-key Projects" },
  { value: "350+", label: "Associated Institutions" },
  { value: "250+", label: "Dedicated Counselors" },
  { value: "7", label: "Regional Offices" },
  { value: "2", label: "International Offices" },
];

const REVIEWS = [
  { brand: "G", label: "2,350+ Reviews", rating: "4.8 Rating", tone: "google" },
  { brand: "f", label: "25+ Reviews", rating: "4.5 Rating", tone: "facebook" },
  { brand: "Jd", label: "2,678+ Reviews", rating: "4.7 Rating", tone: "jd" },
];

export default function App() {
  const [open, setOpen] = useState(false);
  const [engineeringOpen, setEngineeringOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", course: "Medical" });
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!/^[6-9]\d{9}$/.test(form.phone.trim())) {
      setError("Enter a valid 10-digit mobile number.");
      return;
    }
    setError("");
    // TODO: send `form` to your backend, Formspree, Google Sheet, etc.
    console.log("Lead:", form);
    setSent(true);
  };

  return (
    <>
      <header className="header">
        <div className="wrap header-row">
          <a href="#top" className="brand" onClick={() => setOpen(false)}>
            <span className="brand-mark"><GraduationCap size={22} /></span>
            <span>
              <span className="brand-name">EduKraft</span>
              <span className="brand-sub">Admissions Guide</span>
            </span>
          </a>

          <nav className={`nav ${open ? "is-open" : ""}`} aria-label="Main">
            <div className="nav-item dropdown">
              <button
                type="button"
                className={`nav-link dropdown-toggle ${engineeringOpen ? "is-open" : ""}`}
                aria-expanded={engineeringOpen}
                onClick={() => setEngineeringOpen((value) => !value)}
              >
                <span>Engineering</span>
                <ChevronDown size={16} />
              </button>
              <div className={`dropdown-menu ${engineeringOpen ? "is-open" : ""}`}>
                {ENGINEERING_OPTIONS.map((option) => (
                  <a
                    key={option.label}
                    href={option.href}
                    onClick={() => {
                      setEngineeringOpen(false);
                      setOpen(false);
                    }}
                  >
                    {option.label}
                  </a>
                ))}
              </div>
            </div>

            {NAV.map((n) => (
              <a key={n.label} href={n.href} onClick={() => setOpen(false)}>{n.label}</a>
            ))}
            <a href="#contact" className="btn btn-gold nav-cta-mobile" onClick={() => setOpen(false)}>
              Free Counseling
            </a>
          </nav>

          <a href="#contact" className="btn btn-gold nav-cta">Free Counseling</a>

          <button
            className="menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap hero-inner">
            <span className="badge"><BadgeCheck size={16} /> Trusted Guidance Since 2015</span>
            <h1>EduKraft · The Karnataka Admission Experts</h1>
            <p className="lead">
              Your direct gateway to premier Medical and Engineering colleges across
              Karnataka through KCET, COMEDK, and Management Quota.
            </p>
            <div className="hero-actions">
              <a href="#medical" className="btn btn-gold btn-lg">Explore Top Colleges</a>
              <a href="#packages" className="btn btn-ghost btn-lg">Check Eligibility / Packages</a>
            </div>
          </div>
        </section>

        <section className="wrap cards" aria-label="Admission categories">
          {CARDS.map(({ id, icon: Icon, title, text, points }) => (
            <article key={id} id={id} className="card">
              <span className="card-icon"><Icon size={26} /></span>
              <h2>{title}</h2>
              <p>{text}</p>
              <ul>
                {points.map((p) => (
                  <li key={p}><CheckCircle2 size={16} /> {p}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section id="management" className="wrap band">
          <h2>Management Quota seats</h2>
          <p>
            Not every seat comes through a rank list. We help you understand management and
            NRI quota options in Medical and Engineering colleges, and what each one costs.
          </p>
          <a href="#contact" className="btn btn-navy">Ask about management seats</a>
        </section>

        <section id="contact" className="contact">
          <div className="wrap contact-grid">
            <div>
              <h2>Talk to a counselor, free</h2>
              <p>
                Leave your number and we will call you back with options that match your rank
                and budget.
              </p>
            </div>

            {sent ? (
              <div className="form success" role="status">
                <CheckCircle2 size={34} />
                <h3>Thanks, {form.name.split(" ")[0] || "we have your request"}.</h3>
                <p>A counselor will call you on {form.phone} soon.</p>
              </div>
            ) : (
              <form className="form" onSubmit={submit} noValidate>
                <label>
                  Name
                  <input name="name" value={form.name} onChange={update} required placeholder="Student or parent name" />
                </label>
                <label>
                  Phone number
                  <input name="phone" value={form.phone} onChange={update} required inputMode="numeric" maxLength={10} placeholder="10-digit mobile number" />
                </label>
                <label>
                  Course interested in
                  <select name="course" value={form.course} onChange={update}>
                    <option>Medical</option>
                    <option>Engineering</option>
                  </select>
                </label>
                {error && <p className="error" role="alert">{error}</p>}
                <button type="submit" className="btn btn-gold btn-lg">Request Call Back</button>
              </form>
            )}
          </div>
        </section>

        <section className="trust">
          <div className="wrap trust-inner">
            <h2>Leading EdTech for Student Enrollment Since 2008</h2>
            <p>
              Trusted by Students, Parents, and Institutions for Expert Career Guidance and Transparent Admissions across Pan India.
            </p>

            <div className="stats-grid">
              {STATS.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <span className="stat-arrow"><ArrowUpRight size={18} /></span>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="reviews-row">
              {REVIEWS.map((review) => (
                <div key={review.brand} className={`review-pill ${review.tone}`}>
                  <span className="review-brand">{review.brand}</span>
                  <span className="review-copy">{review.label}</span>
                  <span className="review-stars" aria-label={`${review.rating}`}>
                    {[...Array(5)].map((_, index) => (
                      <Star key={index} size={12} fill="currentColor" />
                    ))}
                  </span>
                  <span className="review-rating">{review.rating}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-grid">
          <div>
            <strong>EduKraft</strong>
            <span>Admissions Guide</span>
          </div>
          <address>
            <p><MapPin size={16} /> Your office address, Bengaluru, Karnataka 560001</p>
            <p><Mail size={16} /> <a href="mailto:info@edukraft.in">info@edukraft.in</a></p>
            <p><Phone size={16} /> <a href="tel:+919999999999">+91 99999 99999</a></p>
          </address>
        </div>
        <p className="copy">© {new Date().getFullYear()} EduKraft. All rights reserved.</p>
      </footer>
    </>
  );
}
