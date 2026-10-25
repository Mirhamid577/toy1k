import { useState } from "react";
import Reveal from "./Reveal";

export default function RsvpSection() {
  const [name, setName] = useState("");
  const [answer, setAnswer] = useState(null);
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!name.trim() || !answer) return;
    setSent(true);
  };

  const btnStyle = (selected) => ({
    border: "1px solid rgba(225, 188, 124, 0.3)",
    backgroundColor: selected ? "rgb(225, 188, 124)" : "transparent",
    color: selected ? "rgb(62, 0, 1)" : "rgb(225, 188, 124)",
    fontFamily: '"Fz Qellia", "Cormorant Garamond", serif',
  });

  return (
    <section id="attendance" className="relative z-10 px-6 md:px-10 pt-10 md:pt-12 pb-8 md:pb-10">
      <div className="mx-auto w-full max-w-lg">
        <Reveal className="text-center">
          <h2 className="font-bold text-[20px] md:text-[26px] uppercase tracking-[0.04em] font-qellia" style={{ color: "rgb(225, 188, 124)" }}>
            <span dir="auto">Kelasizmi?</span>
          </h2>
          <p className="mx-auto mt-2 max-w-md text-[13px] md:text-[15px] italic" style={{ color: "rgba(225, 188, 124, 0.85)" }}>
            Iltimos, javobingizni bildiring.
          </p>
        </Reveal>
        <Reveal className="mt-6">
          <div className="rounded-2xl border p-5 md:p-6" style={{ backgroundColor: "rgba(255, 255, 255, 0.06)", borderColor: "rgba(225, 188, 124, 0.3)" }}>
            {sent ? (
              <p className="text-center py-6 text-lg font-qellite" style={{ color: "rgb(225, 188, 124)", fontFamily: '"Cormorant Garamond", serif' }}>
                Rahmat! Javobingiz qabul qilindi.
              </p>
            ) : (
              <form onSubmit={submit} className="text-left">
                <input
                  type="text"
                  maxLength="100"
                  aria-label="Ismingiz"
                  placeholder="Ismingiz*"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border px-4 py-3 text-sm focus:outline-none transition-colors placeholder:text-current placeholder:opacity-60"
                  style={{ borderColor: "rgba(225, 188, 124, 0.3)", borderStyle: "solid", color: "rgb(225, 188, 124)", backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                />
                <div className="mt-4 grid grid-cols-2 gap-3" role="radiogroup" aria-label="Javobingiz">
                  <button type="button" role="radio" aria-checked={answer === "yes"} onClick={() => setAnswer("yes")} className="min-h-[46px] rounded-full border px-3 py-2 text-sm font-semibold transition-colors" style={btnStyle(answer === "yes")}>
                    <span dir="auto">Kelaman</span>
                  </button>
                  <button type="button" role="radio" aria-checked={answer === "no"} onClick={() => setAnswer("no")} className="min-h-[46px] rounded-full border px-3 py-2 text-sm font-semibold transition-colors" style={btnStyle(answer === "no")}>
                    <span dir="auto">Kela olmayman</span>
                  </button>
                </div>
                <div className="mt-5 flex justify-center">
                  <button
                    type="submit"
                    disabled={!name.trim() || !answer}
                    className="rounded-full px-8 py-2 text-sm font-semibold transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60 shadow-sm font-qellia"
                    style={{ backgroundColor: "rgb(225, 188, 124)", color: "#2b2b2b" }}
                  >
                    <span dir="auto">Yuborish</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
