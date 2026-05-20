import Logo from "./Logo";
import type { Route } from "../App";

type FooterProps = {
  onNavigate: (route: Route) => void;
};

export default function Footer({ onNavigate }: FooterProps) {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-24 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10">
          <div className="md:col-span-5">
            <Logo variant="light" />
            <p className="mt-6 text-white/60 text-sm leading-relaxed max-w-sm">
              An independent advisory representing exceptional homes across the
              United States. Discreet, considered, and entirely tailored to the
              way our clients live.
            </p>
            <div className="mt-8 flex items-center gap-4">
              {["Instagram", "LinkedIn", "Journal"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-xs tracking-[0.22em] uppercase text-white/60 hover:text-gold transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="text-[0.7rem] tracking-[0.3em] uppercase text-gold mb-5">Explore</p>
            <ul className="space-y-3 text-sm text-white/70">
              <li><button onClick={() => onNavigate({ name: "home" })} className="hover:text-white">Home</button></li>
              <li><button onClick={() => onNavigate({ name: "properties" })} className="hover:text-white">Properties</button></li>
              <li><button onClick={() => onNavigate({ name: "about" })} className="hover:text-white">About</button></li>
              <li><button onClick={() => onNavigate({ name: "contact" })} className="hover:text-white">Contact</button></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-[0.7rem] tracking-[0.3em] uppercase text-gold mb-5">Services</p>
            <ul className="space-y-3 text-sm text-white/70">
              <li>Private Acquisitions</li>
              <li>Estate Representation</li>
              <li>Off-Market Listings</li>
              <li>Relocation Advisory</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-[0.7rem] tracking-[0.3em] uppercase text-gold mb-5">Studio</p>
            <address className="not-italic text-sm text-white/70 leading-relaxed">
              914 N. Highland Avenue<br />
              Los Angeles, CA 90038
            </address>
            <p className="mt-4 text-sm text-white/70">
              <a href="mailto:advisors@luxenest.com" className="hover:text-white">advisors@luxenest.com</a><br />
              <a href="tel:+13105550199" className="hover:text-white">+1 (310) 555-0199</a>
            </p>
          </div>
        </div>

        <div className="hairline mt-16" />
        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-white/40">
          <p>© {year} LuxeNest Properties. All rights reserved. DRE #02148877.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/70">Privacy</a>
            <a href="#" className="hover:text-white/70">Terms</a>
            <a href="#" className="hover:text-white/70">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
