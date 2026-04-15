import React, { useState } from "react";
import { useLang } from "../context/LanguageContext";

const anchors = ["#home", "#about", "#experience", "#skills", "#projects", "#contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { lang, t, toggleLang } = useLang();
  const navLinks = anchors.map((href, i) => ({ href, label: t.nav[i] }));

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-dark-900/70 border-b border-white/5">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-semibold tracking-tight">
          <span className="text-accent-light">J</span>oel
          <span className="text-accent-light">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted hover:text-white transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={toggleLang}
              className="text-xs px-3 py-1.5 rounded-full border border-accent/30 text-accent-light hover:bg-accent/10 transition-all duration-300"
            >
              {lang === "es" ? "EN" : "ES"}
            </button>
          </li>
        </ul>

        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="text-xs px-2.5 py-1 rounded-full border border-accent/30 text-accent-light"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96 border-t border-white/5" : "max-h-0"}`}>
        <ul className="flex flex-col items-center gap-4 py-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
