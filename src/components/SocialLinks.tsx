import type { ContactInfo } from "../lib/content";
import { icons } from "./Icons";

export default function SocialLinks({ links, className = "" }: { links: ContactInfo["links"]; className?: string }) {
  return (
    <ul className={`flex flex-wrap items-center gap-3 ${className}`}>
      {links.filter((link) => link.surfaces.includes("resume") && icons[link.label]).map((link) => {
        const Icon = icons[link.label];
        return (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              title={link.label}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-slate-200 backdrop-blur transition hover:border-accent hover:bg-accent hover:text-slate-950"
            >
              <Icon className="h-5 w-5" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
