import { useEffect, useState } from "react";
import Reveal from "./Reveal";

const WEDDING_DATE = new Date(2026, 10, 5, 17, 0, 0);

function useCountdown() {
  const [left, setLeft] = useState(() => WEDDING_DATE - new Date());
  useEffect(() => {
    const t = setInterval(() => setLeft(WEDDING_DATE - new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const s = Math.max(0, Math.floor(left / 1000));
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    min: Math.floor((s % 3600) / 60),
    sec: s % 60,
  };
}

function Calendar() {
  const cells = [];
  for (let i = 0; i < 6; i++) cells.push(<div key={`e${i}`} className="flex items-center justify-center h-[30px] md:h-[34px]" />);
  for (let d = 1; d <= 31; d++) {
    cells.push(
      <div key={d} className="flex items-center justify-center h-[30px] md:h-[34px]">
        {d === 5 ? (
          <div className="relative w-[26px] h-[24px] md:w-[30px] md:h-[28px] flex items-center justify-center">
            <svg viewBox="0 0 24 22" className="absolute inset-0 w-full h-full drop-shadow-sm" fill="#E1BC7C">
              <path d="M12 21C12 21 1.5 13.5 1.5 7.5C1.5 4.46 3.96 2 7 2C8.76 2 10.35 2.81 11.4 4.09L12 4.8L12.6 4.09C13.65 2.81 15.24 2 17 2C20.04 2 22.5 4.46 22.5 7.5C22.5 13.5 12 21 12 21Z" />
            </svg>
            <span className="relative z-10 text-[11px] md:text-[12px] font-bold" style={{ color: "rgb(62, 0, 1)" }}>
              5
            </span>
          </div>
        ) : (
          <span className="text-[12px] md:text-[13px]">{d}</span>
        )}
      </div>
    );
  }
  return (
    <div className="mt-2 w-[296px] md:w-[352px] max-w-full mx-auto">
      <div
        className="w-full rounded-lg overflow-hidden border w-full"
        style={{ borderColor: "color-mix(in srgb, rgb(225, 188, 124) 27%, transparent)", color: "rgb(225, 188, 124)", maxWidth: "none" }}
      >
        <div
          className="text-center py-2.5 text-[13px] md:text-[14px] font-semibold tracking-wide border-b"
          style={{ borderColor: "color-mix(in srgb, rgb(225, 188, 124) 27%, transparent)" }}
        >
          NOYABR 2026
        </div>
        <div className="grid grid-cols-7 border-b-2" style={{ borderColor: "rgb(225, 188, 124)" }}>
          {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
            <div key={d} className="text-center py-1.5 text-[10px] md:text-[11px] font-medium opacity-60">
              {d}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-y-0.5 px-1 py-2">{cells}</div>
      </div>
    </div>
  );
}

export default function DateSection() {
  const { days, hours, min, sec } = useCountdown();
  const pad = (n) => String(n).padStart(2, "0");

  return (
    <div className="flex flex-col gap-10 md:gap-14">
      <Reveal as="h2" className="uppercase font-bold text-[20px] md:text-[24px] text-center font-qellia" style={{ letterSpacing: "0.04em" }}>
        <span dir="auto">To'y Sanasi</span>
      </Reveal>
      <div className="flex flex-col items-center gap-4 md:gap-5 text-center" style={{ color: "rgb(225, 188, 124)", fontFamily: '"Times New Roman", serif' }}>
        <Reveal as="h3" className="font-normal uppercase text-[15px] md:text-[26px] flex flex-col items-center font-qellia" style={{ fontWeight: 700, letterSpacing: "0.04em" }}>
          <span dir="auto">Sizni tantanamizga taklif etamiz:</span>
        </Reveal>
        <Reveal className="text-[20px] md:text-[30px]">17:00</Reveal>
        <Reveal className="flex items-center gap-6">
          <span className="text-[12px] md:text-[16px] uppercase" style={{ textAlign: "right" }}>
            <span dir="auto">PAYSHANBA</span>
          </span>
          <div className="w-[2px] h-6 md:h-8" style={{ backgroundColor: "rgb(225, 188, 124)" }} />
          <span className="text-[30px] md:text-[40px]">5</span>
          <div className="w-[2px] h-6 md:h-8" style={{ backgroundColor: "rgb(225, 188, 124)" }} />
          <span className="text-[12px] md:text-[16px] uppercase" style={{ textAlign: "left" }}>
            <span dir="auto">NOYABR</span>
          </span>
        </Reveal>
        <Reveal className="text-[18px] md:text-[24px]">2026</Reveal>
        <Reveal className="flex flex-col items-center mt-6 px-8 py-5 rounded-2xl border w-full max-w-[320px] md:max-w-[420px] mx-auto" style={{ borderColor: "rgba(225, 188, 124, 0.3)", backdropFilter: "blur(4px)" }}>
          <h2 className="uppercase tracking-[0.15em] font-semibold mb-2 opacity-80 font-qellia">
            <span dir="auto">Sanoq boshlandi</span>
          </h2>
          <div className="text-center text-lg md:text-xl font-bold tabular-nums tracking-wide flex justify-center gap-3" style={{ color: "rgb(225, 188, 124)" }}>
            <div>
              <span>{pad(days)}</span>
              <span className="text-[10px] md:text-xs uppercase block font-normal opacity-75 mt-0.5">days</span>
            </div>
            <span className="opacity-40 pt-1">:</span>
            <div>
              <span>{pad(hours)}</span>
              <span className="text-[10px] md:text-xs uppercase block font-normal opacity-75 mt-0.5">hours</span>
            </div>
            <span className="opacity-40 pt-1">:</span>
            <div>
              <span>{pad(min)}</span>
              <span className="text-[10px] md:text-xs uppercase block font-normal opacity-75 mt-0.5">min</span>
            </div>
            <span className="opacity-40 pt-1">:</span>
            <div>
              <span>{pad(sec)}</span>
              <span className="text-[10px] md:text-xs uppercase block font-normal opacity-75 mt-0.5">sec</span>
            </div>
          </div>
        </Reveal>
        <Calendar />
        <a
          href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Odilxon%20%26%20Odinaxon&dates=20261105T170000/20261105T190000&location=Malika%20Tantanalar%20Saroyi%2C%20Oqqorgon%20tumani"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center text-sm tracking-wider underline underline-offset-4 decoration-1 transition-opacity hover:opacity-70"
          style={{ color: "rgb(225, 188, 124)", background: "none" }}
        >
          <button
            type="button"
            className="text-sm md:text-base tracking-wider inline-flex items-center justify-center rounded-full px-6 py-2 font-semibold transition-transform hover:scale-[1.03]"
            style={{ backgroundColor: "rgb(225, 188, 124)", color: "rgb(62, 0, 1)" }}
          >
            <span className="relative z-10 flex min-h-0 items-center justify-center gap-2">
              <span dir="auto">Kalendariga qo'shish</span>
            </span>
          </button>
        </a>
      </div>
    </div>
  );
}
