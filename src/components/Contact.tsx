"use client";

import { useState, type FormEvent } from "react";
import Icon from "./Icon";
import { site } from "@/data/site";

type Status = "idle" | "sending" | "sent" | "preview" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!site.formEndpoint) {
      setStatus("preview");
      form.reset();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      setStatus(res.ok ? "sent" : "error");
      if (res.ok) form.reset();
    } catch {
      setStatus("error");
    }
  }

  const messages: Record<Status, string> = {
    idle: "",
    sending: "Sending…",
    sent: "Thanks! Your message is on its way — I'll reply within 24 hours.",
    preview: "Thanks! (Preview mode — add your Formspree endpoint in src/data/site.ts to receive messages.)",
    error: `Something went wrong. Please email me at ${site.email}.`,
  };

  return (
    <section id="contact" className="contact">
      <div className="wrap contact-grid">
        <div>
          <span className="eyebrow">Contact</span>
          <h2 className="h2">Let&apos;s build your website.</h2>
          <p className="lead">Tell me a little about your project and I&apos;ll reply within 24 hours with ideas and a free quote.</p>
          <ul className="c-list">
            <li><Icon name="mail" /><div><small>Email</small><a href={`mailto:${site.email}`}>{site.email}</a></div></li>
            <li><Icon name="linkedin" /><div><small>LinkedIn</small><a href={site.linkedin} target="_blank" rel="noopener noreferrer">{site.linkedin.replace("https://www.", "")}</a></div></li>
            <li><Icon name="pin" /><div><small>Based in</small>{site.location}</div></li>
          </ul>
        </div>

        <form onSubmit={handleSubmit}>
          <label>Your name<input name="name" required autoComplete="name" /></label>
          <div className="f2">
            <label>Email<input name="email" type="email" required autoComplete="email" /></label>
            <label>Phone number<input name="phone" type="tel" inputMode="tel" required autoComplete="tel" placeholder="+91 98765 43210" /></label>
          </div>
          <div className="f2">
            <label>Project type
              <select name="type" defaultValue="New website">
                <option>New website</option><option>Landing page</option><option>Redesign</option>
                <option>Store front-end</option><option>Something else</option>
              </select>
            </label>
            <label>Budget
              <select name="budget" defaultValue="Not sure yet">
                <option>Not sure yet</option><option>Starter</option><option>Business</option><option>Custom</option>
              </select>
            </label>
          </div>
          <label>About your project
            <textarea name="message" required placeholder="What does your business do, and what would you like your website to achieve?" />
          </label>
          <button className="btn btn-primary" type="submit" disabled={status === "sending"}>Send message →</button>
          <p className={`f-note ${status === "error" ? "err" : ""}`} role="status">{messages[status]}</p>
        </form>
      </div>
    </section>
  );
}
