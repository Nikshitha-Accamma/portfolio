import Icon from "./Icon";
import Reveal from "./Reveal";
import { faqs, packages, services, skills, steps } from "@/data/content";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export function TrustStrip() {
  const items = ["Responsive on all devices", "Fast loading", "SEO-ready structure", "Accessible & cross-browser", "Easy for you to update"];
  return (
    <div className="strip">
      <ul className="wrap">{items.map((i) => <li key={i}>{i}</li>)}</ul>
    </div>
  );
}

export function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <span className="eyebrow">Services</span>
        <h2 className="h2">Everything you need to look professional online</h2>
        <p className="lead">
          From a one-page site to a full business website, every project is built mobile-first and
          tested on real phones, tablets and desktops.
        </p>
        <div className="grid-3">
          {services.map((s) => (
            <Reveal className="card" key={s.title}>
              <Icon name={s.icon} />
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" className="process">
      <div className="wrap">
        <span className="eyebrow">How I work</span>
        <h2 className="h2">A simple, transparent process</h2>
        <p className="lead">You&apos;ll always know what&apos;s happening, what&apos;s next and when your site goes live.</p>
        <div className="steps">
          {steps.map((s) => (
            <Reveal className="step" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Work() {
  return (
    <section id="work">
      <div className="wrap">
        <div className="work-head">
          <div>
            <span className="eyebrow">Sample work</span>
            <h2 className="h2">Sample projects</h2>
            <p className="lead">Concept websites I designed and built to show my process and quality — each one is a live, fully responsive build you can try on your phone and desktop.</p>
          </div>
          <a href="#contact" className="btn btn-ghost">Discuss your project</a>
        </div>
        <div className="projects">
          {projects.map((p) => (
            <Reveal className={`project ${p.featured ? "wide" : ""}`} key={p.title}>
              <div className={`thumb theme-${p.theme}`}>
                <div className="browser">
                  <div className="browser-bar"><i /><i /><i /></div>
                  <div className="browser-body">
                    <strong>{p.title}</strong>
                    <span>{p.kind}</span>
                  </div>
                </div>
              </div>
              <div className="p-body">
                <div className="tags">
                  {p.concept && <span className="tag tag-concept">Sample project</span>}
                  {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
                <h3>{p.title}</h3>
                <p>{p.summary}</p>
                <ul className="highlights">{p.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
                <div className="p-links">
                  <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">View live →</a>
                  <a href={p.codeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">Code</a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Packages() {
  return (
    <section id="packages" className="pt-0">
      <div className="wrap">
        <span className="eyebrow">Packages</span>
        <h2 className="h2">Pick a starting point</h2>
        <p className="lead">Every project is quoted individually — these packages show what&apos;s typically included.</p>
        <div className="packages">
          {packages.map((p) => (
            <Reveal className={`pkg ${p.popular ? "pop" : ""}`} key={p.name}>
              <h3>{p.name}</h3>
              <p className="for">{p.for}</p>
              <ul>{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
              <a href="#contact" className={`btn ${p.popular ? "btn-primary" : "btn-ghost"}`}>{p.cta}</a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="pt-0">
      <div className="wrap about-grid">
        <Reveal className="portrait">
          <img src="/profile.jpeg" alt={site.profilePhoto} className="portrait-img" />
        </Reveal>
        <Reveal>
          <span className="eyebrow">About me</span>
          <h2 className="h2">Hi, I&apos;m {site.firstName}.</h2>
          <p className="lead">
            I build websites that work for real people on real devices. Most web traffic now comes from
            phones, so I design mobile-first — then make sure everything scales up beautifully to tablets
            and large screens.
          </p>
          <p className="lead mt">
            When you work with me, you work directly with the person building your site: clear
            communication, honest timelines and a website you&apos;re proud to share.
          </p>
          <div className="skills">{skills.map((s) => <span className="tag" key={s}>{s}</span>)}</div>
        </Reveal>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" className="pt-0">
      <div className="wrap">
        <div className="center">
          <span className="eyebrow">FAQ</span>
          <h2 className="h2">Questions clients often ask</h2>
        </div>
        <div className="faq">
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <span>© {new Date().getFullYear()} {site.name} · {site.role}</span>
        <span>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="#top">Back to top ↑</a>
        </span>
      </div>
    </footer>
  );
}
