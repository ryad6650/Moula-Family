export function LogoCompact({ className }: { className?: string }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feFlood floodColor="#FF2D78" floodOpacity="0.6" result="color" />
          <feComposite in="color" in2="blur" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* F - blanc */}
      <path
        d="M6 6 L6 34 L10 34 L10 22 L20 22 L20 18.5 L10 18.5 L10 9.5 L22 9.5 L22 6 Z"
        fill="#F0F0F0"
      />
      {/* M - rose neon avec lueur */}
      <path
        d="M16 34 L16 12 L23 24 L30 12 L30 34 L26.5 34 L26.5 21 L23 28 L19.5 21 L19.5 34 Z"
        fill="#FF2D78"
        filter="url(#neonGlow)"
      />
    </svg>
  );
}

export function LogoFull({ className }: { className?: string }) {
  return (
    <svg
      width="200"
      height="60"
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <filter id="neonGlowFull" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feFlood floodColor="#FF2D78" floodOpacity="0.6" result="color" />
          <feComposite in="color" in2="blur" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Monogramme FM */}
      <g transform="translate(80, 0) scale(0.7)">
        <path
          d="M6 4 L6 32 L10 32 L10 20 L20 20 L20 16.5 L10 16.5 L10 7.5 L22 7.5 L22 4 Z"
          fill="#F0F0F0"
        />
        <path
          d="M16 32 L16 10 L23 22 L30 10 L30 32 L26.5 32 L26.5 19 L23 26 L19.5 19 L19.5 32 Z"
          fill="#FF2D78"
          filter="url(#neonGlowFull)"
        />
      </g>
      {/* FAMILLE - blanc */}
      <text
        x="100"
        y="42"
        fontFamily="'Bebas Neue', sans-serif"
        fontSize="12"
        fill="#F0F0F0"
        textAnchor="middle"
        letterSpacing="4"
      >
        FAMILLE
      </text>
      {/* MOULA - rose neon */}
      <text
        x="100"
        y="56"
        fontFamily="'Bebas Neue', sans-serif"
        fontSize="14"
        fill="#FF2D78"
        textAnchor="middle"
        letterSpacing="4"
        filter="url(#neonGlowFull)"
      >
        MOULA
      </text>
    </svg>
  );
}
