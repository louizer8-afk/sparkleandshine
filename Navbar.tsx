import { useState } from "react";
import { properties } from "../data/properties";

type Props = {
  defaultPropertyInterest?: string;
  variant?: "light" | "dark";
};

type Status = "idle" | "submitting" | "success" | "error";

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");

export default function InquiryForm({ defaultPropertyInterest = "", variant = "light" }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    propertyInterest: defaultPropertyInterest,
    message: "",
    "bot-field": "",
  });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [k]: e.target.value });
  };

  const validate = (): string | null => {
    if (!form.fullName.trim()) return "Please enter your name.";
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) return "Please enter a valid email address.";
    if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 7) return "Please enter a valid phone number.";
    if (!form.message.trim() || form.message.trim().length < 10) return "Please share a little more about your inquiry (at least 10 characters).";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validation = validate();
    if (validation) {
      setStatus("error");
      setErrorMsg(validation);
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    try {
      // Honeypot trick: if filled, silently "succeed" without posting.
      if (form["bot-field"]) {
        setStatus("success");
        return;
      }

      // Real Netlify Forms submission. The static form in index.html
      // (with data-netlify="true" and matching field names) registers
      // the form at build time. This urlencoded POST to "/" is the
      // standard pattern used in SPA contexts.
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "inquiry",
          fullName: form.fullName,
          email: form.email,
          phone: form.phone,
          propertyInterest: form.propertyInterest || "General inquiry",
          message: form.message,
        }),
      });

      if (!response.ok) {
        // In local/dev (no Netlify backend), the POST to "/" returns
        // the index HTML with a 200 — so this branch typically only
        // triggers in true error conditions.
        throw new Error(`Request failed with status ${response.status}`);
      }

      setStatus("success");
      setForm({
        fullName: "",
        email: "",
        phone: "",
        propertyInterest: defaultPropertyInterest,
        message: "",
        "bot-field": "",
      });
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? "We couldn't submit your inquiry. Please try again or email advisors@luxenest.com."
          : "Something went wrong."
      );
    }
  };

  const isDark = variant === "dark";
  const labelColor = isDark ? "text-white/50" : "text-ink/50";
  const fieldStyle: React.CSSProperties = isDark
    ? { color: "white", borderColor: "rgba(255,255,255,0.2)" }
    : {};

  if (status === "success") {
    return (
      <div className={`text-center py-16 ${isDark ? "text-white" : "text-ink"}`}>
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-gold mb-8">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-gold">
            <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-display text-3xl md:text-4xl">Your inquiry has been received.</h3>
        <p className={`mt-5 max-w-md mx-auto leading-relaxed ${isDark ? "text-white/60" : "text-ink/60"}`}>
          A LuxeNest advisor will be in touch within one business day. For time-sensitive matters, please call{" "}
          <a href="tel:+13105550199" className="text-gold hover:underline">+1 (310) 555-0199</a>.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-10 text-[0.75rem] tracking-[0.22em] uppercase text-gold hover:underline"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      name="inquiry"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      noValidate
      className="space-y-7"
    >
      {/* Required hidden inputs for Netlify */}
      <input type="hidden" name="form-name" value="inquiry" />
      <p className="hidden">
        <label>
          Don't fill this out if you're human:{" "}
          <input name="bot-field" value={form["bot-field"]} onChange={update("bot-field")} />
        </label>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <div>
          <label htmlFor="fullName" className={`block text-[0.65rem] tracking-[0.28em] uppercase mb-2 ${labelColor}`}>
            Full Name *
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            value={form.fullName}
            onChange={update("fullName")}
            placeholder="Jane Doe"
            className="field"
            style={fieldStyle}
          />
        </div>
        <div>
          <label htmlFor="email" className={`block text-[0.65rem] tracking-[0.28em] uppercase mb-2 ${labelColor}`}>
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={update("email")}
            placeholder="you@example.com"
            className="field"
            style={fieldStyle}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <div>
          <label htmlFor="phone" className={`block text-[0.65rem] tracking-[0.28em] uppercase mb-2 ${labelColor}`}>
            Phone *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={update("phone")}
            placeholder="+1 (___) ___-____"
            className="field"
            style={fieldStyle}
          />
        </div>
        <div>
          <label htmlFor="propertyInterest" className={`block text-[0.65rem] tracking-[0.28em] uppercase mb-2 ${labelColor}`}>
            Property Interest
          </label>
          <select
            id="propertyInterest"
            name="propertyInterest"
            value={form.propertyInterest}
            onChange={update("propertyInterest")}
            className="field bg-transparent"
            style={fieldStyle}
          >
            <option value="">General inquiry</option>
            <option value="Off-market listings">Off-market listings</option>
            <option value="Selling a residence">Selling a residence</option>
            <option value="Relocation advisory">Relocation advisory</option>
            {properties.map((p) => (
              <option key={p.id} value={p.title}>{p.title}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={`block text-[0.65rem] tracking-[0.28em] uppercase mb-2 ${labelColor}`}>
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={update("message")}
          placeholder="Tell us a little about what you're searching for, your timeline, and how we can help."
          className="field resize-none"
          style={fieldStyle}
        />
      </div>

      {status === "error" && errorMsg && (
        <div
          role="alert"
          className={`text-sm py-3 px-4 border-l-2 border-red-500 ${
            isDark ? "bg-red-500/10 text-red-200" : "bg-red-50 text-red-700"
          }`}
        >
          {errorMsg}
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-gold disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Sending…" : "Send Inquiry"}
          {status !== "submitting" && <span aria-hidden>→</span>}
        </button>
        <p className={`text-xs ${isDark ? "text-white/40" : "text-ink/40"}`}>
          By submitting, you agree to be contacted by a LuxeNest advisor.
        </p>
      </div>
    </form>
  );
}
