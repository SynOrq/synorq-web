/**
 * SynorqLogo — inline SVG bileşeni
 *
 * variant="mark"  → sadece S ikon (kare)
 * variant="full"  → ikon + "Synorq" wordmark (yatay)
 *
 * theme="color"   → açık zemin (dark wordmark)
 * theme="white"   → koyu zemin (beyaz wordmark)
 */

interface SynorqLogoProps {
  variant?: "mark" | "full";
  theme?: "color" | "white";
  height?: number;
  className?: string;
}

export default function SynorqLogo({
  variant = "full",
  theme = "color",
  height = 36,
  className = "",
}: SynorqLogoProps) {
  const markSize = height;
  const wordmarkColor = theme === "white" ? "#ffffff" : "#111827";
  const accentColor = theme === "white" ? "#a5b4fc" : "#6366f1";

  /* ── Mark only ───────────────────────────────────────────── */
  if (variant === "mark") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={markSize}
        height={markSize}
        viewBox="0 0 48 48"
        fill="none"
        className={className}
        aria-label="Synorq"
        role="img"
      >
        <defs>
          <linearGradient id="sq-bg" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6366f1" />
            <stop offset="1" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <rect width="48" height="48" rx="12" fill="url(#sq-bg)" />
        <path
          d="M 31 15 C 31 9 12 9 12 19 C 12 26 36 22 36 29 C 36 39 17 39 17 37"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    );
  }

  /* ── Full logo (mark + wordmark) ─────────────────────────── */
  // viewBox: mark 44px wide + 12px gap + text ~110px = 166px wide, 44px tall
  const totalWidth = Math.round((height / 44) * 166);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={totalWidth}
      height={height}
      viewBox="0 0 166 44"
      fill="none"
      className={className}
      aria-label="Synorq"
      role="img"
    >
      <defs>
        <linearGradient id="fl-bg" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366f1" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>

      {/* Mark */}
      <rect width="44" height="44" rx="11" fill="url(#fl-bg)" />
      <path
        d="M 28.5 13.5 C 28.5 8 11 8 11 17.5 C 11 24 33 20 33 27 C 33 36 15.5 36 15.5 34"
        stroke="white"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Wordmark */}
      <text
        x="56"
        y="30"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
        fontSize="23"
        fontWeight="700"
        letterSpacing="-0.5"
      >
        <tspan fill={wordmarkColor}>Syn</tspan>
        <tspan fill={accentColor}>orq</tspan>
      </text>
    </svg>
  );
}
