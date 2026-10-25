import Reveal from "./Reveal";

export default function InviteIntro() {
  return (
    <div className="flex flex-col gap-6 md:gap-8 pb-6">
      <Reveal
        className="text-center text-[14px] md:text-[18px] flex flex-col gap-2 mx-auto md:max-w-[560px]"
        style={{ whiteSpace: "pre-line", fontFamily: '"Times New Roman", serif' }}
      >
        <span dir="auto">Ikki qalbning muhabbat ila bir taqdirga aylanish onlari</span>
      </Reveal>

      <Reveal
        className="relative flex flex-col items-center text-center gap-3 md:gap-4"
        style={{ fontFamily: '"Fz Qellia", "Cormorant Garamond", "Times New Roman", serif' }}
      >
        <h3
          className="w-[80%] min-h-[80px] flex items-center justify-center leading-[55px] md:leading-[80px] whitespace-nowrap"
          style={{ fontSize: "40px" }}
        >
          <span dir="auto">Odilxon</span>
        </h3>
        <div className="text-[35px] md:text-[42px]" style={{ color: "rgb(225, 188, 124)" }}>
          &amp;
        </div>
        <h3
          className="w-[80%] min-h-[80px] flex items-center justify-center leading-[55px] md:leading-[80px] whitespace-nowrap"
          style={{ fontSize: "40px" }}
        >
          <span dir="auto">Odinaxon</span>
        </h3>
      </Reveal>

      <Reveal
        className="text-center text-[14px] md:text-[18px] flex flex-col gap-2 mx-auto md:max-w-[560px] px-4 font-normal mt-2 leading-relaxed"
        style={{ whiteSpace: "pre-line", fontFamily: '"Times New Roman", serif' }}
      >
        <span dir="auto">Sizni hayotimizdagi eng baxtli kun — to'yimizga taklif qilamiz</span>
      </Reveal>

      <Reveal
        className="relative flex flex-col items-center gap-2 text-center mt-2"
        style={{ fontFamily: '"Times New Roman", serif', color: "rgb(225, 188, 124)" }}
      ><span className="text-xs uppercase tracking-[0.2em] opacity-80 mb-1">To'y Sanasi</span>
        <div className="text-lg md:text-xl font-medium tracking-wider">5-Noyabr 2026 17:00</div>
      </Reveal>

      <Reveal
        className="flex flex-col items-center px-5 md:px-8 mt-2"
        style={{ fontFamily: '"Times New Roman", serif', color: "rgb(225, 188, 124)" }}
      >
        <span className="text-[16px] text-center uppercase whitespace-pre-line leading-relaxed font-medium">
          <span dir="auto">Kamolovlar oilasi</span>
        </span>
      </Reveal>
    </div>
  );
}
