import { useEffect, useState } from "react";
import Logo from "./Logo";
import type { Route } from "../App";

type NavbarProps = {
  current: Route;
  onNavigate: (route: Route) => void;
};

const links: { label: string; route: Route }[] = [
  { label: "Home", route: { name: "home" } },
  { label: "Properties", route: { name: "properties" } },
  { label: "About", route: { name: "about" } },
  { label: "Contact", route: { name: "contact" } },
];

export default function Navbar({ current, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (route: Route) => {
    onNavigate(route);
    setOpen(false);
  };

  const isActive = (route: Route) => {
    if (route.name === "properties" && (current.name === "properties" || current.name === "property")) return true;
    return route.name === current.name;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-black/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between">
        <button onClick={() => handleNav({ name: "home" })} className="flex items-center" aria-label="LuxeNest home">
          <Logo variant={scrolled || current.name !== "home" ? "dark" : current.name === "home" ? "dark" : "light"} />
        </button>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => handleNav(l.route)}
              className={`nav-link text-[0.78rem] tracking-[0.22em] uppercase font-medium text-ink/80 hover:text-ink transition-colors ${
                isActive(l.route) ? "is-active text-ink" : ""
              }`}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <button onClick={() => handleNav({ name: "contact" })} className="btn-gold">
            Schedule a Viewing
          </button>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-ink transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
          <span className={`block w-6 h-px bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-ink transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 bg-white ${
          open ? "max-h-[420px] border-t border-black/5" : "max-h-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => handleNav(l.route)}
              className={`text-left text-sm tracking-[0.22em] uppercase font-medium ${
                isActive(l.route) ? "text-gold" : "text-ink/80"
              }`}
            >
              {l.label}
            </button>
          ))}
          <button onClick={() => handleNav({ name: "contact" })} className="btn-gold justify-center mt-2">
            Schedule a Viewing
          </button>
        </div>
      </div>
    </header>
  );
}
