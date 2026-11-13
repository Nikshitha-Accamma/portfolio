import type { ReactNode } from "react";
import type { IconName } from "@/data/content";

const paths: Record<IconName | "mail" | "linkedin" | "pin" | "github", ReactNode> = {
  devices: (<><rect x="2" y="4" width="14" height="10" rx="2" /><rect x="17" y="8" width="5" height="12" rx="1" /><path d="M6 18h6" /></>),
  layout: (<><path d="M4 4h16v16H4z" /><path d="M4 9h16M9 20V9" /></>),
  refresh: (<><path d="M3 12a9 9 0 1 0 3-6.7" /><path d="M3 4v5h5" /></>),
  cart: (<><circle cx="9" cy="20" r="1.5" /><circle cx="18" cy="20" r="1.5" /><path d="M2 3h3l2.6 12.4a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.5L22 7H6" /></>),
  bolt: <path d="M13 2 3 14h9l-1 8 10-12h-9z" />,
  shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  mail: (<><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 6-10 7L2 6" /></>),
  linkedin: (<><rect x="2" y="2" width="20" height="20" rx="4" /><path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 10v7" /></>),
  pin: (<><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z" /><circle cx="12" cy="10" r="2.5" /></>),
  github: <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />,
};

export default function Icon({ name }: { name: keyof typeof paths }) {
  return (
    <span className="icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">{paths[name]}</svg>
    </span>
  );
}
