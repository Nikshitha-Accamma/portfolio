// ✏️ After you deploy each sample project, paste its live URL into `liveUrl`.
// When you get real client work, add it here (set `concept: false` to remove the "Sample project" label).
export type Project = {
  title: string;
  kind: string;
  summary: string;
  highlights: string[];
  tags: string[];
  liveUrl: string;
  codeUrl: string;
  concept: boolean;
  theme: "coffee" | "forest" | "indigo";
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Misty Hills Homestay",
    kind: "Hospitality website",
    summary:
      "A booking-focused website for a fictional Coorg coffee-estate homestay, with room listings, local experiences and an instant stay-cost estimator.",
    highlights: ["Live price estimator by dates & guests", "Mobile-first room cards", "Enquiry form with validation"],
    tags: ["Next.js", "TypeScript", "Responsive"],
    liveUrl: "https://misty-hills-homestay.vercel.app",
    codeUrl: "https://github.com/Nikshitha-Accamma/misty-hills-homestay",
    concept: true,
    theme: "forest",
  },
  {
    title: "Brew & Bloom Café",
    kind: "Restaurant website",
    summary:
      "A warm, appetising website for a fictional café, with a filterable menu, opening hours, location and a table-booking call to action.",
    highlights: ["Filterable menu", "Sticky mobile call-to-action", "SEO-ready metadata"],
    tags: ["Next.js", "React", "CSS Grid"],
    liveUrl: "https://brew-bloom-cafe-phi.vercel.app", 
    codeUrl: "https://github.com/Nikshitha-Accamma/brew-bloom-cafe",
    concept: true,
    theme: "coffee",
  },
];
