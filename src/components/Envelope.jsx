import { useMemo } from "react";

const GOLD = "rgb(225, 188, 124)";

export default function Envelope({ onOpen, onExited, opening }) {
  const sparkles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => {
        const j = (i * 7919) % 101;
        return {
          key: `s${i}`,
          symbol: i % 3 === 0 ? "✧" : "✦",
          left: (j * 0.93 + 2) % 97,
          top: 4 + ((j * 37) % 90),
          size: i % 6 === 0 ? 20 + (i % 3) * 4 : 9 + (i % 4) * 3,
          duration: 2.6 + (j % 30) / 10,
          delay: (j % 50) / 10,
        };
      }),
    []
  );

  const petals = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => {
        const j = (i * 6151) % 101;
        return {
          key: `p${i}`,
          left: (j * 0.97 + 1) % 98,
          size: 7 + (i % 4) * 3,
          duration: 9 + (j % 9),
          delay: (j % 120) / 10,
          warm: i % 2 === 0,
        };
      }),
    []
  );

  const handleAnimationEnd = (e) => {
    if (opening && e.target === e.currentTarget && onExited) onExited();
  };

  return (
    <div
      dir="ltr"
      onAnimationEnd={handleAnimationEnd}
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden ${
        opening ? "envelope-exit" : ""
      }`}
      style={{ background: "radial-gradient(circle at 50% 38%, #5c0002 0%, #3e0001 46%, #240001 100%)" }}
    >
      {/* Warm halo that slowly breathes behind the card */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none gate-glow"
        style={{
          background:
            "radial-gradient(circle at 50% 42%, rgba(225,188,124,0.26) 0%, rgba(225,188,124,0.08) 35%, transparent 62%)",
        }}
      />

      {/* Twinkling gold sparkles */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        {sparkles.map((s) => (
          <span
            key={s.key}
            className="gate-sparkle absolute select-none"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              fontSize: `${s.size}px`,
              color: GOLD,
              filter: "drop-shadow(0 0 8px rgba(225,188,124,0.65))",
              animation: `gate-twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
            }}
          >
            {s.symbol}
          </span>
        ))}
      </div>

      {/* Falling petals */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        {petals.map((p) => (
          <span
            key={p.key}
            className="petal"
            style={{
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size * 1.4}px`,
              background: p.warm
                ? "linear-gradient(135deg, rgba(225,188,124,0.85), rgba(180,120,60,0.35))"
                : "linear-gradient(135deg, rgba(150,10,14,0.9), rgba(225,188,124,0.35))",
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <div className="relative gate-rise">
          {/* Heart seal with pulsing rings */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 z-30">
            <div className="relative">
              <span
                aria-hidden="true"
                className="seal-pulse absolute inset-0 rounded-full"
                style={{ border: "1px solid rgba(225,188,124,0.7)" }}
              />
              <span
                aria-hidden="true"
                className="seal-pulse absolute inset-0 rounded-full"
                style={{ border: "1px solid rgba(225,188,124,0.45)", animationDelay: "1.1s" }}
              />
              <button
                type="button"
                onClick={onOpen}
                aria-label="Taklifnomani ochish"
                style={{
                  width: 56,
                  height: 56,
                  background: "radial-gradient(circle at 30% 30%, #F3D9A4, #E1BC7C 45%, rgb(195, 158, 94))",
                }}
                className="seal-glow relative rounded-full flex items-center justify-center cursor-pointer border-none transition-transform duration-300 hover:scale-110 active:scale-95"
              >
                <svg style={{ fill: "#3E0001" }} viewBox="0 0 24 24" className="w-7 h-7">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="relative w-[310px] sm:w-[340px] md:w-[520px] lg:w-[600px] gate-bob">
            <div
              style={{
                boxShadow:
                  "0 25px 60px -12px rgba(0, 0, 0, 0.5), 0 8px 24px rgba(0, 0, 0, 0.25), 0 0 60px rgba(225, 188, 124, 0.18)",
              }}
              className="relative rounded-lg"
            >
              <div
                style={{
                  background: "linear-gradient(to bottom right, #3E0001, #7A0003, #3E0001)",
                  border: "1px solid rgba(225, 188, 124, 0.18)",
                  clipPath: "inset(0 round 8px)",
                }}
                className="absolute inset-0 rounded-lg overflow-hidden"
              >
                <img
                  src="/images/royal-red/flower.webp"
                  alt=""
                  aria-hidden="true"
                  className="absolute pointer-events-none w-[80%] top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"
                />
                <img
                  src="/images/royal-red/flower.webp"
                  alt=""
                  aria-hidden="true"
                  className="absolute pointer-events-none w-[80%] bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-20 -scale-y-100"
                />
                {/* Soft moving sheen across the card */}
                <span aria-hidden="true" className="card-sheen absolute inset-y-0 w-1/3 pointer-events-none" />
              </div>

              <div className="relative z-10 text-center px-6 pt-28 pb-14 md:pt-24 md:pb-8">
                <div className="mb-6">
                  <p
                    style={{ color: "rgba(225, 188, 124, 0.75)" }}
                    className="gate-fade text-[18px] font-light mb-2"
                  >
                    <span dir="auto">Assalomu alaykum, aziz mehmon</span>
                  </p>
                </div>

                <h1
                  style={{
                    color: "rgba(225, 188, 124, 0.75)",
                    fontSize: "clamp(28px, 7.5vw, 48px)",
                    lineHeight: 1.2,
                    animationDelay: "0.15s",
                  }}
                  className="gate-fade w-full max-w-full mx-auto font-light mb-4 px-2 tracking-wide break-words text-center font-times"
                >
                  Taklifnoma
                </h1>

                <h1
                  style={{
                    color: "#E1BC7C",
                    fontFamily: '"The Nautigal", "Great Vibes", "Fz Qellia", cursive',
                    animationDelay: "0.3s",
                    textShadow: "0 0 24px rgba(225, 188, 124, 0.35)",
                  }}
                  className="gate-fade mb-2 flex gap-2 flex-row justify-center items-center leading-tight font-nautigal text-5xl sm:text-6xl md:text-7xl"
                >
                  <span className="block text-center">Odilxon</span>
                  <span className="block text-center text-2xl leading-none sm:text-3xl">&amp;</span>
                  <span className="block text-center">Odinaxon</span>
                </h1>

                <div className="flex items-center justify-center gap-3 mb-2">
                  <div
                    style={{ background: "linear-gradient(to right, transparent, #E1BC7C)" }}
                    className="w-10 h-px"
                  />
                  <span style={{ color: "#E1BC7C", opacity: 0.7 }} className="text-sm">
                    ❦
                  </span>
                  <div
                    style={{ background: "linear-gradient(to left, transparent, #E1BC7C)" }}
                    className="w-10 h-px"
                  />
                </div>

                <div
                  style={{
                    color: "rgba(225, 188, 124, 0.75)",
                    fontFamily: '"Fz Qellia", "Cormorant Garamond", serif',
                    animationDelay: "0.45s",
                  }}
                  className="gate-fade text-[18px] mb-5 flex flex-col items-center"
                >
                  <span dir="auto">5-Noyabr 2026</span>
                </div>

                <div className="gate-fade flex justify-center" style={{ animationDelay: "0.6s" }}>
                  <button
                    type="button"
                    onClick={onOpen}
                    style={{
                      backgroundColor: "#E1BC7C",
                      color: "#3E0001",
                      boxShadow: "0 4px 14px rgba(225, 188, 124, 0.35)",
                      fontFamily: '"Fz Qellia", "Cormorant Garamond", serif',
                      WebkitTouchCallout: "none",
                      WebkitUserSelect: "none",
                      userSelect: "none",
                    }}
                    className="relative px-8 py-2.5 text-lg font-semibold sm:font-medium rounded-full shadow-lg no-underline cursor-pointer flex w-fit items-center justify-center overflow-hidden active:scale-95 transition-transform hover:scale-[1.03]"
                  >
                    <span dir="auto">Taklifnomani ochish</span>
                    <span
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(255,255,255,0.45), transparent)",
                      }}
                      className="shimmer absolute top-0 h-full w-8 pointer-events-none"
                    />
                  </button>
                </div>

                <p
                  style={{ color: "rgba(225, 188, 124, 0.45)", animationDelay: "0.85s" }}
                  className="gate-fade mt-4 text-[11px] tracking-[0.25em] uppercase"
                >
                  <span dir="auto">Yurakni bosing</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gold flash on open */}
      {opening && (
        <span
          aria-hidden="true"
          className="gate-flash absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(243,217,164,0.65) 0%, rgba(225,188,124,0.18) 30%, transparent 65%)",
          }}
        />
      )}
    </div>
  );
}
