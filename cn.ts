import SectionLabel from "../components/SectionLabel";
import InquiryForm from "../components/InquiryForm";

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 md:pt-48 md:pb-20 bg-bone">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <SectionLabel>Contact</SectionLabel>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mt-6 leading-[1.02] max-w-3xl">
            Begin a private conversation.
          </h1>
          <p className="text-ink/60 mt-8 max-w-xl text-lg leading-relaxed">
            Whether you're searching, selling, or simply curious about the market — share a few details and an advisor will respond within one business day.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-7">
            <SectionLabel>Inquiry Form</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl mt-6 mb-12 leading-[1.15]">
              Send us a message.
            </h2>
            <InquiryForm />
          </div>

          <aside className="lg:col-span-5 lg:pl-12 lg:border-l border-black/10">
            <SectionLabel>Direct</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl mt-6 leading-[1.15]">
              Or reach us directly.
            </h2>

            <div className="mt-12 space-y-10">
              <div>
                <p className="text-[0.65rem] tracking-[0.28em] uppercase text-ink/50 mb-3">Studio</p>
                <p className="text-ink leading-relaxed">
                  914 N. Highland Avenue<br />
                  Los Angeles, CA 90038
                </p>
                <p className="text-sm text-ink/60 mt-2">By appointment only.</p>
              </div>

              <div>
                <p className="text-[0.65rem] tracking-[0.28em] uppercase text-ink/50 mb-3">Email</p>
                <a href="mailto:advisors@luxenest.com" className="text-ink hover:text-gold transition-colors">
                  advisors@luxenest.com
                </a>
              </div>

              <div>
                <p className="text-[0.65rem] tracking-[0.28em] uppercase text-ink/50 mb-3">Telephone</p>
                <a href="tel:+13105550199" className="text-ink hover:text-gold transition-colors">
                  +1 (310) 555-0199
                </a>
                <p className="text-sm text-ink/60 mt-2">Mon–Fri, 9am–7pm PT</p>
              </div>

              <div>
                <p className="text-[0.65rem] tracking-[0.28em] uppercase text-ink/50 mb-3">Regional Partners</p>
                <ul className="text-ink space-y-2">
                  <li>New York · Daniel Okafor</li>
                  <li>Miami · Sofia Reyes</li>
                  <li>Aspen · Henry Whitfield</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Map */}
      <section className="bg-bone">
        <div className="aspect-[21/8] w-full bg-cream">
          <iframe
            title="LuxeNest Studio Location"
            src="https://www.google.com/maps?q=914+N+Highland+Avenue+Los+Angeles+CA&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
            className="grayscale-[40%]"
            style={{ border: 0 }}
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
