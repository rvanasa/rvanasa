import type { ReactElement, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": true } as const;

export const icons: Record<string, (props: IconProps) => ReactElement> = {
  LinkedIn: (p) => (
    <svg {...base} {...p}><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11.5H3V9.75Zm6.5 0h3.8v1.6h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1v5.85h-4v-5.19c0-1.24-.02-2.83-1.73-2.83-1.73 0-2 1.35-2 2.74v5.28h-4V9.75Z" /></svg>
  ),
  GitHub: (p) => (
    <svg {...base} {...p}><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" /></svg>
  ),
  Instagram: (p) => (
    <svg {...base} fill="none" stroke="currentColor" strokeWidth={2} {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
  ),
  X: (p) => (
    <svg {...base} {...p}><path d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.78L17.75 3Zm-1.08 16.16h1.7L7.4 4.74H5.58l11.09 14.42Z" /></svg>
  ),
  Bluesky: (p) => (
    <svg {...base} {...p}><path d="M6.34 4.6C8.69 6.36 11.22 9.93 12 11.85c.78-1.92 3.31-5.49 5.66-7.25C19.36 3.33 22 2.35 22 5.48c0 .63-.36 5.24-.57 5.99-.73 2.6-3.38 3.26-5.74 2.86 4.13.7 5.18 3.02 2.91 5.35-4.31 4.42-6.19-1.11-6.67-2.52-.09-.26-.13-.38-.13-.28 0-.1-.04.02-.13.28-.48 1.41-2.36 6.94-6.67 2.52-2.27-2.33-1.22-4.65 2.91-5.35-2.36.4-5.01-.26-5.74-2.86C2.36 10.72 2 6.11 2 5.48c0-3.13 2.64-2.15 4.34-.88Z" /></svg>
  ),
  Location: (p) => (
    <svg {...base} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 21s-7-6.2-7-11.5a7 7 0 1 1 14 0C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
  ),
  Image: (p) => (
    <svg {...base} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="9" cy="10" r="1.75" /><path d="m21 16-5-5-8 8" /></svg>
  ),
  Arrow: (p) => (
    <svg {...base} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
  ),
};
