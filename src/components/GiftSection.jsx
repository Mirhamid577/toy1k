import { useState } from "react";
import Reveal from "./Reveal";

const CARD_NUMBER = "5614681814533729";

export default function GiftSection() {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  const formatted = CARD_NUMBER.replace(/(\d{4})(?=\d)/g, "$1 ");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CARD_NUMBER);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center py-8 relative z-10 px-6 md:px-10 pb-10 md:pb-14">
      <Reveal
        as="h2"
        className="mb-8 uppercase font-bold text-[20px] md:text-[24px] flex flex-col items-center font-qellia"
        style={{ fontWeight: 700, letterSpacing: "0.04em" }}
      >
        <span dir="auto">Sovg'a yuborish</span>
      </Reveal>

      <Reveal className="relative flex flex-col items-center">
        <button
          type="button"
          onClick={() => setRevealed((v) => !v)}
          aria-label="Open gift box"
          className="group relative cursor-pointer outline-none border-none bg-transparent flex flex-col items-center justify-center transition-transform hover:scale-[1.03]"
          style={{ width: "260px", height: "280px" }}
        >
          <div className="relative w-full h-full flex items-end justify-center pb-[26px]">
            <span className="absolute pointer-events-none z-20 animate-pulse text-[#E1BC7C]" style={{ top: "8%", left: "14%", fontSize: "22px" }}>
              ✦
            </span>
            <span className="absolute pointer-events-none z-20 animate-pulse text-[#E1BC7C]" style={{ top: "18%", right: "10%", fontSize: "16px", animationDelay: "0.4s" }}>
              ✦
            </span>
            <span className="absolute pointer-events-none z-20 animate-pulse text-[#E1BC7C]" style={{ top: "32%", left: "5%", fontSize: "14px", animationDelay: "0.8s" }}>
              ✦
            </span>
            <span className="absolute pointer-events-none z-20 animate-pulse text-[#E1BC7C]" style={{ top: "26%", right: "5%", fontSize: "14px", animationDelay: "1.2s" }}>
              ✦
            </span>

            <div className="relative gift-float" style={{ width: "200px", height: "220px" }}>
              <div
                className="absolute pointer-events-none"
                style={{
                  left: "50%",
                  marginLeft: "-72px",
                  bottom: "-8px",
                  width: "144px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(0, 0, 0, 0.45)",
                  filter: "blur(4px)",
                  zIndex: 0,
                }}
              />
              <img
                alt=""
                aria-hidden="true"
                className="absolute pointer-events-none"
                src="/images/royal-red/dragon_phoenix.webp"
                style={{ left: "-20px", top: "10px", width: "34px", zIndex: 1, filter: "drop-shadow(rgba(0, 0, 0, 0.25) 0px 2px 3px)" }}
              />
              <img
                alt=""
                aria-hidden="true"
                className="absolute pointer-events-none"
                src="/images/royal-red/dragon_phoenix_v2.webp"
                style={{ left: "168px", top: "2px", width: "38px", zIndex: 1, filter: "drop-shadow(rgba(0, 0, 0, 0.25) 0px 2px 3px)" }}
              />
              <img
                alt=""
                aria-hidden="true"
                className="absolute pointer-events-none"
                src="/images/royal-red/baroque_gold.webp"
                style={{ left: "-16px", top: "120px", width: "26px", zIndex: 1, filter: "drop-shadow(rgba(0, 0, 0, 0.25) 0px 2px 3px)" }}
              />
              <img
                alt=""
                aria-hidden="true"
                className="absolute pointer-events-none"
                src="/images/royal-red/song_hy_green.webp"
                style={{ left: "182px", top: "114px", width: "24px", zIndex: 1, filter: "drop-shadow(rgba(0, 0, 0, 0.25) 0px 2px 3px)" }}
              />
              <img
                alt="Gift box"
                loading="lazy"
                width="170"
                height="220"
                className="absolute pointer-events-none top-0 left-0 transition-transform duration-300 group-hover:scale-105"
                style={{ color: "transparent" }}
                src="/images/royal-red/royal_red.webp"
              />
              <img
                alt=""
                aria-hidden="true"
                className="absolute pointer-events-none"
                src="/images/royal-red/chateau_green.webp"
                style={{ left: "-8px", top: "172px", width: "44px", zIndex: 3, filter: "drop-shadow(rgba(0, 0, 0, 0.25) 0px 2px 3px)" }}
              />
              <img
                alt=""
                aria-hidden="true"
                className="absolute pointer-events-none"
                src="/images/royal-red/chateau_blue.webp"
                style={{ left: "26px", top: "182px", width: "26px", zIndex: 3, filter: "drop-shadow(rgba(0, 0, 0, 0.25) 0px 2px 3px)" }}
              />
              <img
                alt=""
                aria-hidden="true"
                className="absolute pointer-events-none"
                src="/images/royal-red/double_phoenix_red.webp"
                style={{ left: "118px", top: "176px", width: "40px", zIndex: 3, filter: "drop-shadow(rgba(0, 0, 0, 0.25) 0px 2px 3px)" }}
              />
            </div>
          </div>

          <div className="mt-2">
            <span
              className="mx-auto text-sm md:text-base tracking-wider flex items-center justify-center rounded-full px-6 py-2 font-semibold transition-transform group-hover:scale-[1.03] shadow-md"
              style={{ backgroundColor: "rgb(225, 188, 124)", color: "rgb(62, 0, 1)" }}
            >
              <span dir="auto">{revealed ? "Yopish uchun bosing" : "Ochish uchun bosing"}</span>
            </span>
          </div>
        </button>
      </Reveal>

      {revealed && (
        <Reveal className="relative z-10 mt-6 w-full max-w-[340px]">
          <div
            className="flex flex-col items-center gap-3 rounded-2xl border px-6 py-5 text-center backdrop-blur-xl"
            style={{
              background: "rgba(255,255,255,0.06)",
              borderColor: "rgba(225,188,124,0.3)",
              color: "rgb(225,188,124)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            <span className="text-xs uppercase tracking-[0.15em] opacity-80 font-qellia">
              <span dir="auto">Karta raqami</span>
            </span>
            <span className="text-xl md:text-2xl font-semibold tracking-wider tabular-nums font-times">
              {formatted}
            </span>
            <button
              type="button"
              onClick={copy}
              className="mt-1 rounded-full px-6 py-2 text-sm font-semibold transition-transform hover:scale-105"
              style={{ backgroundColor: "rgb(225, 188, 124)", color: "rgb(62, 0, 1)" }}
            >
              <span dir="auto">{copied ? "Nusxalandi ✓" : "Nusxalash"}</span>
            </button>
          </div>
        </Reveal>
      )}
    </section>
  );
}
