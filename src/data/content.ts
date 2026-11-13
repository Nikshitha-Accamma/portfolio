export type Service = { title: string; text: string; icon: IconName };
export type IconName = "devices" | "layout" | "refresh" | "cart" | "bolt" | "shield";

export const services: Service[] = [
  { icon: "devices", title: "Responsive Websites", text: "Custom business websites that adapt perfectly to any screen size, browser and device." },
  { icon: "layout", title: "Landing Pages", text: "Focused, high-converting pages for launches, campaigns, events and lead generation." },
  { icon: "refresh", title: "Website Redesign", text: "Turn an outdated or desktop-only site into a modern, mobile-friendly experience." },
  { icon: "cart", title: "Store Front-Ends", text: "Beautiful, fast storefronts — product, cart and checkout screens — built on Shopify, WooCommerce or your existing backend." },
  { icon: "bolt", title: "Speed & SEO", text: "Performance tuning, clean code and on-page SEO so you load fast and get found on Google." },
  { icon: "shield", title: "Care & Maintenance", text: "Ongoing updates, backups, fixes and content changes — so your site stays healthy." },
];

export const steps = [
  { title: "Discover", text: "A free call to understand your business, goals, audience and budget." },
  { title: "Design", text: "Layout and visual direction for mobile and desktop, shared for your feedback." },
  { title: "Build", text: "Clean, fast, responsive code — tested on phones, tablets and all major browsers." },
  { title: "Launch & support", text: "Go live on your domain, with a walkthrough and support after launch." },
];

export type Package = { name: string; for: string; features: string[]; popular?: boolean; cta: string };

export const packages: Package[] = [
  {
    name: "Starter",
    for: "For personal brands, freelancers and new businesses.",
    features: ["1–3 page responsive website", "Contact form & social links", "Basic on-page SEO", "Launch on your domain"],
    cta: "Get a quote",
  },
  {
    name: "Business",
    for: "For growing businesses that need a full online presence.",
    features: [
      "Up to 8 custom pages",
      "Mobile-first custom design",
      "Speed optimisation & SEO setup",
      "Google Maps, analytics & WhatsApp chat",
      "30 days of post-launch support",
    ],
    popular: true,
    cta: "Get a quote",
  },
  {
    name: "Custom",
    for: "For store front-ends, web app interfaces and bigger builds.",
    features: [
      "Storefront UI on Shopify, WooCommerce or your backend",
      "Interactive features like filters, booking & calculators",
      "Connecting to your existing APIs and tools",
      "Ongoing maintenance plans",
    ],
    cta: "Let's talk",
  },
];

export const skills = [
  "Next.js", "React", "TypeScript", "JavaScript", "HTML5", "CSS3 / Flexbox / Grid",
  "Responsive design", "UI design", "SEO basics", "Web performance", "Accessibility", "Git & GitHub",
];

export const faqs = [
  { q: "How long does a website take?", a: "A simple site usually takes 1–2 weeks; a full business website 3–5 weeks, depending on content and feedback rounds. You'll get a clear timeline before we start." },
  { q: "Will my website work on phones?", a: "Yes — every site I build is mobile-first and tested on phones, tablets, laptops and large desktops across Chrome, Safari, Firefox and Edge." },
  { q: "Do you help with domain and hosting?", a: "Yes. I can recommend and set up a domain and hosting, or deploy to the ones you already have." },
  { q: "Can I update the website myself?", a: "Absolutely. If you'd like to edit content yourself, I'll set up an easy editing option and show you how to use it." },
  { q: "Do you build complete online stores?", a: "I specialise in the front-end: the part your customers see and use, like product pages, cart and checkout screens. The store engine (products, payments, orders) runs on a platform such as Shopify or WooCommerce, or on a backend your team already has, and I connect the design to it." },
  { q: "How do payments work?", a: "Typically 50% upfront to book your slot and 50% on completion, before launch. Larger projects can be split into milestones." },
];
