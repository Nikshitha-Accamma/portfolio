import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <span className="badge"><span className="dot" /> Available for new projects</span>
          <h1>
            Websites that look great on <em>every screen.</em>
          </h1>
          <p className="lead">
            I&apos;m {site.name}, a {site.role.toLowerCase()}. I design and build fast, responsive websites
            for small businesses, startups and creators — so your customers get a smooth experience
            whether they&apos;re on a phone, tablet or desktop.
          </p>
          <div className="hero-ctas">
            <a href="#contact" className="btn btn-primary">Get a free quote →</a>
            <a href="#work" className="btn btn-ghost">See sample work</a>
          </div>
          <div className="stats">
            <div className="stat"><b>100%</b><span>Mobile-first builds</span></div>
            <div className="stat"><b>90+</b><span>Lighthouse score target</span></div>
            <div className="stat"><b>24h</b><span>Reply time</span></div>
          </div>
        </div>

        <div className="devices" aria-hidden="true">
          <div className="dev laptop">
            <div className="scr">
              <div className="bar" />
              <div className="row"><div className="blk a" /><div className="blk" /></div>
              <div className="row"><div className="blk" /><div className="blk" /><div className="blk a" /></div>
            </div>
          </div>
          <div className="dev tablet">
            <div className="scr">
              <div className="bar" />
              <div className="blk a" style={{ flex: 1.3 }} />
              <div className="row"><div className="blk" /><div className="blk" /></div>
              <div className="blk" style={{ flex: 0.8 }} />
            </div>
          </div>
          <div className="dev phone">
            <div className="scr">
              <div className="bar" />
              <div className="blk a" style={{ flex: 1.2 }} />
              <div className="blk" />
              <div className="blk" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
