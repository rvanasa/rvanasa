import Link from "next/link";
import type { ReactNode } from "react";
import type { ContactInfo } from "../lib/content";
import { icons } from "./Icons";
import SocialLinks from "./SocialLinks";

const nav = [
  { href: "/#about", label: "About" },
  { href: "/#weather", label: "Weather" },
  { href: "/#software", label: "Software" },
  { href: "/#connect", label: "Contact" },
];

export default function Layout({ contactInfo, children }: { contactInfo: ContactInfo; children: ReactNode }) {
  const Pin = icons.Location;

  return (
    <div className="min-h-screen bg-base text-slate-200">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-base/60 backdrop-blur-lg">
        <div className="container-shell flex h-16 items-center justify-between">
          <Link href="/" className="text-sm font-semibold tracking-wide text-white">Ryan Vandersmith</Link>
          <nav aria-label="Primary" className="flex gap-5 text-sm text-slate-300 sm:gap-8">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-accent">{item.label}</Link>
            ))}
          </nav>
        </div>
      </header>
      {children}
      <footer id="connect" className="border-t border-white/10 bg-black/30 py-16">
        <div className="container-shell flex flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-bold text-white">Let&apos;s get in contact</h2>
          <SocialLinks links={contactInfo.links} className="justify-center" />
          <p className="flex items-center gap-2 text-sm text-slate-400">
            <Pin className="h-4 w-4" /> {contactInfo.location.text}
          </p>
        </div>
      </footer>
    </div>
  );
}
