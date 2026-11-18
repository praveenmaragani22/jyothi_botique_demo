/**
 * PalluDivider — CSS/SVG woven-border inspired divider
 * Mimics the repeating geometric border found on saree pallus.
 */
export default function PalluDivider({ className = '', inverted = false }) {
  const stroke = inverted ? '#fdf8e0' : '#6b1414';
  const accent  = inverted ? '#f5b800' : '#d4a017';

  return (
    <div className={`pallu-divider w-full ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 32"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background band */}
        <rect width="1200" height="32" fill="none" />

        {/* Top thin rule */}
        <line x1="0" y1="4" x2="1200" y2="4" stroke={stroke} strokeWidth="1" strokeOpacity="0.4" />
        {/* Bottom thin rule */}
        <line x1="0" y1="28" x2="1200" y2="28" stroke={stroke} strokeWidth="1" strokeOpacity="0.4" />

        {/* Repeating diamond + chevron pattern */}
        {Array.from({ length: 60 }).map((_, i) => {
          const x = i * 20 + 10;
          return (
            <g key={i} transform={`translate(${x}, 16)`}>
              {/* Diamond */}
              <polygon
                points="0,-7 5,0 0,7 -5,0"
                fill={i % 3 === 0 ? accent : 'none'}
                stroke={stroke}
                strokeWidth="0.8"
                strokeOpacity="0.7"
              />
              {/* Tiny centre dot */}
              {i % 3 === 0 && (
                <circle cx="0" cy="0" r="1.2" fill={stroke} fillOpacity="0.6" />
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
