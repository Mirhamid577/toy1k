import { useMemo } from "react";

/*
 * Background ambience: golden sparkles slowly falling behind the content
 * and hearts that pulse (grow big -> shrink), like on the original site.
 */
export default function BackdropEffects() {
  const sparkles = useMemo(() => {
    const symbols = ["✦", "✧", "✦", "✦", "✧"];
    return Array.from({ length: 16 }, (_, i) => {
      const j = (i * 7919) % 101;
      const big = i % 5 === 0;
      return {
        key: i,
        symbol: symbols[i % symbols.length],
        left: (j * 0.9 + 3) % 96,
        size: big ? 22 + (i % 3) * 4 : 9 + (i % 4) * 3,
        duration: 9 + (j % 8),
        delay: (j % 140) / 10,
        big,
      };
    });
  }, []);

  const hearts = useMemo(() => {
    return Array.from({ length: 7 }, (_, i) => {
      const j = (i * 6151) % 101;
      return {
        key: `h${i}`,
        left: 6 + (j % 88),
        top: 10 + (j % 75),
        size: i % 3 === 0 ? 22 + (i % 2) * 6 : 13 + (i % 4) * 3,
        duration: 3.4 + (j % 26) / 10,
        delay: (j % 40) / 10,
        big: i % 3 === 0,
      };
    });
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[2] overflow-hidden">
      {sparkles.map((s) => (
        <span
          key={s.key}
          className={`sparkle ${s.big ? "sparkle-big" : ""}`}
          style={{
            left: `${s.left}%`,
            fontSize: `${s.size}px`,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
          }}
        >
          {s.symbol}
        </span>
      ))}
      {hearts.map((h) => (
        <span
          key={h.key}
          className={`heart-float ${h.big ? "heart-big" : ""}`}
          style={{
            left: `${h.left}%`,
            top: `${h.top}%`,
            fontSize: `${h.size}px`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
          }}
        >
          ♥
        </span>
      ))}
    </div>
  );
}
