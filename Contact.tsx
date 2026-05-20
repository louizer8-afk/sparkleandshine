@import "tailwindcss";

@theme {
  --font-display: "Cormorant Garamond", ui-serif, Georgia, serif;
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;

  --color-ink: #0c0c0d;
  --color-charcoal: #1a1a1c;
  --color-graphite: #2a2a2d;
  --color-bone: #f7f5f1;
  --color-cream: #efece5;
  --color-gold: #c8a96a;
  --color-gold-soft: #d9bd87;
  --color-gold-deep: #a88747;
}

html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

body {
  font-family: var(--font-sans);
  color: var(--color-ink);
  background-color: #ffffff;
}

.font-display {
  font-family: var(--font-display);
  letter-spacing: -0.01em;
}

/* Hairline gold separator */
.hairline {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(200, 169, 106, 0.6), transparent);
}

/* Subtle entrance animation */
@keyframes rise {
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-rise {
  animation: rise 0.8s ease-out both;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
.animate-fade-in {
  animation: fade-in 1s ease-out both;
}

/* Slow ken-burns for hero */
@keyframes kenburns {
  from { transform: scale(1.05); }
  to { transform: scale(1.15); }
}
.animate-kenburns {
  animation: kenburns 18s ease-out forwards;
}

/* Custom underline for nav links */
.nav-link {
  position: relative;
}
.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 0;
  height: 1px;
  background-color: var(--color-gold);
  transition: width 0.35s ease;
}
.nav-link:hover::after,
.nav-link.is-active::after {
  width: 100%;
}

/* Property card image zoom */
.card-image {
  transition: transform 1.2s cubic-bezier(0.2, 0.6, 0.2, 1);
}
.group:hover .card-image {
  transform: scale(1.06);
}

/* Form field shared style */
.field {
  width: 100%;
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid #d8d4cb;
  padding: 14px 0;
  font-size: 0.95rem;
  color: var(--color-ink);
  outline: none;
  transition: border-color 0.3s ease;
}
.field:focus {
  border-color: var(--color-gold);
}
.field::placeholder {
  color: #9a958a;
}

/* Buttons */
.btn-gold {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background-color: var(--color-gold);
  color: #0c0c0d;
  padding: 0.95rem 1.75rem;
  font-size: 0.78rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  font-weight: 500;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
}
.btn-gold:hover {
  background-color: #b89657;
}
.btn-outline {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  border: 1px solid currentColor;
  padding: 0.9rem 1.75rem;
  font-size: 0.78rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  font-weight: 500;
  transition: background-color 0.3s ease, color 0.3s ease;
}
.btn-outline:hover {
  background-color: currentColor;
}
.btn-outline:hover > * {
  color: white;
  mix-blend-mode: difference;
}

/* Hide scrollbar on horizontal scrollers */
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
