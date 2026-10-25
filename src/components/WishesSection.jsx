import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import { subscribeWishes, publishWishes } from "../lib/wishesStore";

const IDEAS = [
  "Baxtingiz abadiy bo'lsin!",
  "Oilangiz doimo mehr va quvonchga to'la bo'lsin!",
  "Sizlarga uzoq umr va sog'lik tilayman!",
  "Hayotingiz har kuni yangi baxtli lahzalarga boy bo'lsin!",
];

const formatDate = (value) => {
  const d = value ? new Date(value) : new Date();
  return Number.isNaN(d.getTime()) ? new Date().toLocaleDateString("en-US") : d.toLocaleDateString("en-US");
};

const PAGE_SIZE = 10;

const Arrow = ({ direction, disabled, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    aria-label={direction === "left" ? "Oldingi tilaklar" : "Keyingi tilaklar"}
    className="h-10 w-10 shrink-0 rounded-full text-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:scale-100"
    style={{
      background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(225,188,124,0.35)",
      color: "rgb(225, 188, 124)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
    }}
  >
    {direction === "left" ? "‹" : "›"}
  </button>
);

export default function WishesSection() {
  const [wishes, setWishes] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(0);

  useEffect(() => subscribeWishes(setWishes), []);

  const submit = async (e) => {
    e.preventDefault();
    const cleanName = name.trim();
    const cleanText = text.trim();
    if (!cleanName || !cleanText || sending) return;

    setError(false);
    const wish = { name: cleanName, text: cleanText, created_at: new Date().toISOString() };
    const next = [wish, ...wishes];

    setSending(true);
    setWishes(next);
    setPage(0);
    setName("");
    setText("");
    try {
      await publishWishes(next);
    } catch {
      setError(true);
    }
    setSending(false);
  };

  const all = wishes;
  const totalPages = Math.max(1, Math.ceil(all.length / PAGE_SIZE));
  const current = Math.min(page, totalPages - 1);
  const visible = all.slice(current * PAGE_SIZE, current * PAGE_SIZE + PAGE_SIZE);

  return (
    <section className="relative z-10 px-6 md:px-10 pt-10 md:pt-12 pb-8 md:pb-10" style={{ backgroundColor: "transparent", color: "rgb(225, 188, 124)" }}>
      <div className="text-center">
        <h2 className="uppercase font-bold text-[20px] md:text-[26px] font-qellia" style={{ fontWeight: 700, letterSpacing: "0.04em" }}>
          <span dir="auto">Tilaklar</span>
        </h2>
      </div>
      <form onSubmit={submit} className="max-w-lg mx-auto rounded-2xl border p-6 shadow-xl backdrop-blur-xl" style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(225,188,124,0.3)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}>
        <div className="mb-4">
          <input
            type="text"
            required
            placeholder="Ismingiz*"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border px-4 py-3 text-sm focus:outline-none placeholder:text-[#E1BC7C]/60"
            style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(225,188,124,0.3)", color: "rgb(225,188,124)" }}
          />
        </div>
        <textarea
          rows="4"
          required
          placeholder="Kelin-kuyovga tilagingiz...*"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full rounded-lg border px-4 py-3 text-sm focus:outline-none resize-none placeholder:text-[#E1BC7C]/60"
          style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(225,188,124,0.3)", color: "rgb(225,188,124)" }}
        />
        <div className="mt-4 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setText(IDEAS[Math.floor(Math.random() * IDEAS.length)])}
            className="rounded-lg p-2 transition-all hover:scale-110"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(225,188,124,0.3)", color: "rgb(225,188,124)" }}
          >
            🪄
          </button>
          <button type="submit" disabled={sending} className="rounded-full px-6 py-2.5 font-semibold transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60" style={{ background: "rgb(225,188,124)", color: "#2b2b2b" }}>
            {sending ? "Yuborilmoqda..." : "Tilak yuborish"}
          </button>
        </div>
        {error && (
          <p className="mt-3 text-center text-xs" style={{ color: "#ff9b9b" }}>
            <span dir="auto">Xatolik yuz berdi. Birozdan so'ng qayta urinib ko'ring.</span>
          </p>
        )}
      </form>
      <Reveal className="wishes-scroll mt-8 mx-auto max-h-[500px] w-full max-w-full space-y-3 overflow-y-auto pr-2 md:max-w-lg">
        <div key={current} className="gate-fade space-y-3">
          {visible.map((w, i) => (
            <div
              key={w.id ?? w.created_at ?? `${w.name}-${i}`}
              className="rounded-xl border p-4 shadow-xl backdrop-blur-xl transition-all hover:scale-[1.01]"
              style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(225,188,124,0.25)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}
            >
              <div className="flex items-start justify-between">
                <span className="text-base font-semibold" style={{ color: "rgb(225, 188, 124)" }}>{w.name}</span>
                <span className="text-xs" style={{ color: "rgba(225,188,124,0.65)" }}>{formatDate(w.created_at || w.date)}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgb(225, 188, 124)" }}>{w.text}</p>
            </div>
          ))}
        </div>
      </Reveal>
      {totalPages > 1 && (
        <div className="mt-4 flex items-center justify-center gap-4">
          <Arrow direction="left" disabled={current === 0} onClick={() => setPage(Math.max(0, current - 1))} />
          <span className="text-xs tracking-widest" style={{ color: "rgba(225,188,124,0.75)" }}>
            {current + 1} / {totalPages}
          </span>
          <Arrow direction="right" disabled={current >= totalPages - 1} onClick={() => setPage(Math.min(totalPages - 1, current + 1))} />
        </div>
      )}
    </section>
  );
}
