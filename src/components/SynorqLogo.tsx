/**
 * SynorqLogo — inline SVG bileşeni
 *
 * variant="mark"  → sadece ikon (kare, 176x176 viewBox)
 * variant="full"  → ikon + "Synorq" wordmark + tagline (yatay)
 *
 * theme="color"   → açık zemin
 * theme="white"   → koyu zemin (wordmark beyaz)
 */

interface SynorqLogoProps {
  variant?: "mark" | "full";
  theme?: "color" | "white";
  /** Ikon yüksekliği px cinsinden. Full variant'ta wordmark orantılı ölçeklenir. */
  height?: number;
  className?: string;
}

/* Paylaşılan defs — her iki varyant kullanır */
function Defs({ prefix }: { prefix: string }) {
  return (
    <defs>
      <linearGradient
        id={`${prefix}-bg`}
        x1="28" y1="24" x2="154" y2="152"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#7C3AED" />
        <stop offset="55%" stopColor="#5B5CF0" />
        <stop offset="100%" stopColor="#3B82F6" />
      </linearGradient>
      <linearGradient
        id={`${prefix}-stroke`}
        x1="52" y1="44" x2="132" y2="124"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#C4B5FD" />
      </linearGradient>
      <linearGradient
        id={`${prefix}-glow`}
        x1="72" y1="60" x2="118" y2="106"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#E9D5FF" />
        <stop offset="100%" stopColor="#FFFFFF" />
      </linearGradient>
      <filter
        id={`${prefix}-shadow`}
        x="-30%" y="-30%"
        width="160%" height="160%"
      >
        <feDropShadow
          dx="0" dy="8" stdDeviation="14"
          floodColor="#4F46E5" floodOpacity="0.25"
        />
      </filter>
      <filter
        id={`${prefix}-node-glow`}
        x="-50%" y="-50%"
        width="200%" height="200%"
      >
        <feGaussianBlur stdDeviation="6" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  );
}

/* Ikon sembolü — her iki varyant aynı yolu kullanır (koordinatlar 0 0 176 176 içinde) */
function IconSymbol({ p }: { p: string }) {
  return (
    <>
      <g filter={`url(#${p}-shadow)`}>
        <rect x="24" y="24" width="128" height="128" rx="32" fill={`url(#${p}-bg)`} />
      </g>
      <g opacity={0.22}>
        <path d="M52 88C52 68.1177 68.1177 52 88 52C107.882 52 124 68.1177 124 88" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M52 88C52 107.882 68.1177 124 88 124C107.882 124 124 107.882 124 88" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M88 52V44" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M124 88H132" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M88 124V132" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M52 88H44" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      </g>
      <g>
        <path d="M88 54L122 88L88 122L54 88L88 54Z" stroke={`url(#${p}-stroke)`} strokeWidth="5" strokeLinejoin="round" fill="none" />
        <path d="M88 65L111 88L88 111L65 88L88 65Z" stroke="white" strokeOpacity="0.24" strokeWidth="3" strokeLinejoin="round" fill="none" />
        <circle cx="88" cy="88" r="11" fill={`url(#${p}-glow)`} filter={`url(#${p}-node-glow)`} />
        <path d="M88 54V69" stroke="white" strokeWidth="5" strokeLinecap="round" />
        <path d="M122 88H107" stroke="white" strokeWidth="5" strokeLinecap="round" />
        <path d="M88 122V107" stroke="white" strokeWidth="5" strokeLinecap="round" />
        <path d="M54 88H69" stroke="white" strokeWidth="5" strokeLinecap="round" />
        <circle cx="88" cy="50" r="4.5" fill="#EDE9FE" />
        <circle cx="126" cy="88" r="4.5" fill="#EDE9FE" />
        <circle cx="88" cy="126" r="4.5" fill="#EDE9FE" />
        <circle cx="50" cy="88" r="4.5" fill="#EDE9FE" />
        <path d="M70 70L76 76" stroke="white" strokeOpacity="0.85" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M106 70L100 76" stroke="white" strokeOpacity="0.85" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M106 106L100 100" stroke="white" strokeOpacity="0.85" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M70 106L76 100" stroke="white" strokeOpacity="0.85" strokeWidth="3.5" strokeLinecap="round" />
      </g>
    </>
  );
}

export default function SynorqLogo({
  variant = "full",
  theme = "color",
  height = 40,
  className = "",
}: SynorqLogoProps) {
  /* ── Mark only ─────────────────────────────────── */
  if (variant === "mark") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={height}
        height={height}
        viewBox="0 0 176 176"
        fill="none"
        className={className}
        aria-label="Synorq"
        role="img"
      >
        <Defs prefix="mk" />
        <IconSymbol p="mk" />
      </svg>
    );
  }

  /* ── Full logo ──────────────────────────────────────
   * Orijinal viewBox: 0 0 900 240
   * İkon: x=0..176, y=32..208 (176px mark, 32px padding üstten)
   * Wordmark "Synorq": x=200, y=130 @ font-size 86 (orantılı)
   * Tagline: x=202, y=166
   * Crop: viewBox 0 0 570 240  (text ~x=540 bitiyor)
   * height prop: render height; width orantılı hesaplanır
   */
  const vbW = 590;
  const vbH = 240;
  const renderW = Math.round((height / vbH) * vbW);

  const wordmarkFill = theme === "white" ? "#FFFFFF" : "#0F172A";
  const taglineFill  = theme === "white" ? "#94A3B8" : "#64748B";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={renderW}
      height={height}
      viewBox={`0 0 ${vbW} ${vbH}`}
      fill="none"
      className={className}
      aria-label="Synorq — AI Operations Control Layer"
      role="img"
    >
      <Defs prefix="fl" />

      {/* Mark — orijinal koordinatlar (24,24,128,128 içinde 88,88 merkez) */}
      <IconSymbol p="fl" />

      {/* Wordmark */}
      <text
        x="184"
        y="120"
        fill={wordmarkFill}
        fontFamily="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif"
        fontSize="78"
        fontWeight="700"
        letterSpacing="-2.8"
      >
        Synorq
      </text>

      {/* Tagline */}
      <text
        x="186"
        y="155"
        fill={taglineFill}
        fontFamily="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif"
        fontSize="17"
        fontWeight="600"
        letterSpacing="3.6"
      >
        AI OPERATIONS CONTROL LAYER
      </text>
    </svg>
  );
}
