type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const color = variant === "dark" ? "text-ink" : "text-white";
  const accent = "text-gold";
  return (
    <div className={`flex items-center gap-2 ${color} ${className}`}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className={accent}>
        <path
          d="M12 2 L22 9 V22 H14 V15 H10 V22 H2 V9 Z"
          stroke="currentColor"
          strokeWidth="1.4"
          fill="none"
        />
      </svg>
      <span className="font-display text-[1.45rem] leading-none font-medium tracking-tight">
        LuxeNest
      </span>
      <span className={`text-[0.65rem] tracking-[0.35em] uppercase font-medium mt-[2px] ${accent}`}>
        Properties
      </span>
    </div>
  );
}
