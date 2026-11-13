"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

const links = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`${scrolled ? "scrolled" : ""} ${open ? "menu-open" : ""}`}>
      <nav className="wrap nav" aria-label="Main">
        <a href="#top" className="logo" onClick={close}>
          <span className="logo-mark">
            {site.initials[0]}
            <span>{site.initials[1]}</span>
          </span>
          {site.firstName}
        </a>
        <button
          className="menu-btn"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
        </button>
        <ul className="nav-links" id="menu">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={close}>{l.label}</a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn btn-primary" onClick={close}>Start a project</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
