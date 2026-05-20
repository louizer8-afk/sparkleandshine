import SectionLabel from "../components/SectionLabel";
import type { Route } from "../App";

type Props = { onNavigate: (route: Route) => void };

const team = [
  {
    name: "Eleanor Marsh",
    role: "Founder & Principal Advisor",
    bio: "Eighteen years representing architectural homes across California and the Mountain West.",
    image: "https://images.pexels.com/photos/31869537/pexels-photo-31869537.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=600",
  },
  {
    name: "Daniel Okafor",
    role: "Senior Advisor, East Coast",
    bio: "A background in real-estate law and a portfolio spanning Tribeca, Brooklyn Heights, and the Hamptons.",
    image: "https://images.pexels.com/photos/17049771/pexels-photo-17049771.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=600",
  },
  {
    name: "Sofia Reyes",
    role: "Director of Acquisitions",
    bio: "Leads our off-market program, with deep relationships in Miami, Coral Gables, and the Florida Keys.",
    image: "https://images.pexels.com/photos/29995581/pexels-photo-29995581.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=600",
  },
  {
    name: "Henry Whitfield",
    role: "Advisor, Mountain Region",
    bio: "Specializes in Aspen, Telluride, and Jackson Hole. Former architect with Studio Halcyon.",
    image: "https://images.pexels.com/photos/37148308/pexels-photo-37148308.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=600",
  },
];

const values = [
  {
    n: "Considered",
    d: "We take fewer engagements than we could. Every client receives the time their search deserves.",
  },
  {
    n: "Discreet",
    d: "Most of what we do is never visible from the outside. Privacy is a foundation, not a feature.",
  },
  {
    n: "Honest",
    d: "We tell our clients what we believe, not what is easiest to hear. The right home is worth waiting for.",
  },
  {
    n: "Architectural",
    d: "We read homes the way our clients do — as objects of design, light, and proportion.",
  },
];

export default function About({ onNavigate }: Props) {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-28 bg-bone">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <SectionLabel>Our Studio</SectionLabel>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mt-6 leading-[1.02]">
              A small studio, by intent.
            </h1>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <p className="text-ink/70 text-lg leading-relaxed">
              LuxeNest was founded in 2008 on a simple premise: the best homes deserve to be represented quietly, by people who treat them as more than transactions.
            </p>
          </div>
        </div>
      </section>

      {/* Story image + text */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-6 aspect-[4/5] overflow-hidden order-2 lg:order-1">
            <img
              src="https://images.pexels.com/photos/7031594/pexels-photo-7031594.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1000"
              alt="A LuxeNest represented property"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2">
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl mt-6 leading-[1.1]">
              Founded on the belief that great homes find great owners through conversation, not advertising.
            </h2>
            <div className="mt-10 space-y-5 text-ink/70 leading-relaxed">
              <p>
                When Eleanor Marsh established LuxeNest in 2008, the industry was racing toward volume. She wanted the opposite — a practice small enough to know every home it represented, and every client it served.
              </p>
              <p>
                Nearly two decades later, that hasn't changed. Our team of nine advisors operates from a single studio in Los Angeles, with regional partners in New York, Miami, and Aspen. We typically represent fewer than forty homes at any given time.
              </p>
              <p>
                The work that defines us — the off-market introductions, the long relationships, the quiet closings — is the work we choose to take.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-bone">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <SectionLabel>What We Value</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl mt-6 leading-[1.1]">
                Four principles, observed without exception.
              </h2>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-10">
              {values.map((v) => (
                <div key={v.n} className="border-t border-ink/20 pt-6">
                  <h3 className="font-display text-2xl text-ink">{v.n}</h3>
                  <p className="text-ink/60 leading-relaxed mt-3">{v.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 md:py-24 bg-ink text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { v: "18+", l: "Years Representing" },
            { v: "$2.4B", l: "Career Transaction Volume" },
            { v: "60%", l: "Of Homes Off-Market" },
            { v: "9", l: "Advisors, One Studio" },
          ].map((s) => (
            <div key={s.l}>
              <p className="font-display text-5xl md:text-6xl text-gold">{s.v}</p>
              <p className="text-[0.7rem] tracking-[0.28em] uppercase text-white/60 mt-4">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel align="center">The Team</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl mt-6 leading-[1.1]">
              The advisors behind every introduction.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {team.map((m) => (
              <div key={m.name} className="group">
                <div className="aspect-[3/4] overflow-hidden bg-cream mb-6">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                </div>
                <h3 className="font-display text-2xl text-ink">{m.name}</h3>
                <p className="text-[0.7rem] tracking-[0.25em] uppercase text-gold mt-2">{m.role}</p>
                <p className="text-ink/60 text-sm leading-relaxed mt-4">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-bone">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <SectionLabel align="center">An Invitation</SectionLabel>
          <h2 className="font-display text-4xl md:text-6xl mt-6 leading-[1.05]">
            Begin a private conversation with our studio.
          </h2>
          <button onClick={() => onNavigate({ name: "contact" })} className="btn-gold mt-10">
            Contact LuxeNest
            <span aria-hidden>→</span>
          </button>
        </div>
      </section>
    </>
  );
}
