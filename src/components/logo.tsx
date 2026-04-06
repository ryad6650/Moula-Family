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
        <linearGradient id="sunsetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#FF6B35" }} />
          <stop offset="100%" style={{ stopColor: "#F7C948" }} />
        </linearGradient>
        <filter id="glowNav">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <polygon points="20,3 37,20 20,37 3,20" fill="none" stroke="url(#sunsetGrad)" strokeWidth="1.8" />
      <g filter="url(#glowNav)">
        <path
          d="M12,25 L12,15 L16,20 L20,14 L24,20 L28,15 L28,25"
          fill="none"
          stroke="url(#sunsetGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
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
        <linearGradient id="sunsetFull" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#FF6B35" }} />
          <stop offset="50%" style={{ stopColor: "#F7C948" }} />
          <stop offset="100%" style={{ stopColor: "#E84393" }} />
        </linearGradient>
      </defs>
      <g transform="translate(80, 0) scale(0.7)">
        <polygon points="20,2 38,20 20,38 2,20" fill="none" stroke="url(#sunsetFull)" strokeWidth="2" />
        <path
          d="M12,26 L12,14 L16,20 L20,13 L24,20 L28,14 L28,26"
          fill="none"
          stroke="url(#sunsetFull)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <text
        x="100"
        y="42"
        fontFamily="'Oswald', sans-serif"
        fontSize="10"
        fill="#F5F0EB"
        textAnchor="middle"
        letterSpacing="4"
        opacity="0.5"
      >
        FAMILLE
      </text>
      <text
        x="100"
        y="56"
        fontFamily="'Oswald', sans-serif"
        fontSize="14"
        fill="url(#sunsetFull)"
        textAnchor="middle"
        letterSpacing="4"
        fontWeight="700"
      >
        MOULA
      </text>
    </svg>
  );
}
