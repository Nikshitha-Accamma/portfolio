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
    liveUrl: "https://misty-hills-homestay.vercel.app", // TODO: update after deploy
    codeUrl: "https://github.com/your-username/nikshitha-web/tree/main/projects/misty-hills-homestay",
    concept: true,
    theme: "forest",
    featured: true,
  },
  {
    title: "Brew & Bloom Café",
    kind: "Restaurant website",
    summary:
      "A warm, appetising website for a fictional café, with a filterable menu, opening hours, location and a table-booking call to action.",
    highlights: ["Filterable menu", "Sticky mobile call-to-action", "SEO-ready metadata"],
    tags: ["Next.js", "React", "CSS Grid"],
    liveUrl: "https://brew-bloom-cafe.vercel.app", // TODO: update after deploy
    codeUrl: "https://github.com/your-username/nikshitha-web/tree/main/projects/brew-bloom-cafe",
    concept: true,
    theme: "coffee",
  },
  {
    title: "TaskFlow",
    kind: "Web app",
    summary:
      "A demo task manager with priorities, search, filters and progress tracking — saved in the browser so it works like a real app.",
    highlights: ["React state & TypeScript types", "Saves tasks locally", "Adapts from phone to desktop"],
    tags: ["React", "TypeScript", "Web app"],
    liveUrl: "https://taskflow-demo.vercel.app", // TODO: update after deploy
    codeUrl: "https://github.com/your-username/nikshitha-web/tree/main/projects/taskflow",
    concept: true,
    theme: "indigo",
  },
];
