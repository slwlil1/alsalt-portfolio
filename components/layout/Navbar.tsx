"use client";

import { useEffect, useState } from "react";

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass py-3 shadow-lg shadow-black/20" : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold tracking-tight">
          Alsalt<span className="text-accent">.</span>
        </a>

        <ul className="hidden md:flex gap-8">
          {links.map((l) => (
            <li key={l.name}>
              <a
                href={l.href}
                className="text-sm font-medium text-gray-300 hover:text-accent transition-colors relative group"
              >
                {l.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/cv/ALSALT_ALI_ALSALTI_CV.pdf"
          download
          className="hidden md:block px-5 py-2 rounded-full bg-accent hover:bg-accent-dark transition text-sm font-semibold"
        >
          Download CV
        </a>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass mt-3 mx-6 rounded-2xl p-6">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.name}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-200 hover:text-accent transition block"
                >
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}