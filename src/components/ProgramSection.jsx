import Reveal from "./Reveal";

export default function ProgramSection() {
  const items = [
    { time: "17:00", title: "Mehmonlarni kutib olish" },
    { time: "18:00", title: "Nikoh marosimi" },
    { time: "18:45", title: "Photo Session" },
    { time: "19:30", title: "Bazm va tantana" },
    { time: "20:30", title: "Cake Cutting & Farewell" },
  ];

  return (
    <div className="relative z-10 flex flex-col gap-6 md:gap-8 px-4 mb-10 md:mb-12">
      <div className="mt-6 w-full max-w-[432px] md:max-w-[600px] mx-auto">
        <img
          alt="Gold Divider"
          loading="lazy"
          className="w-full h-auto object-contain transition-transform duration-200 hover:scale-[1.03]"
          src="/images/royal-red/gold-divider.webp"
        />
      </div>
      <Reveal as="h2" className="uppercase font-bold text-[20px] md:text-[24px] text-center font-qellia" style={{ letterSpacing: "0.04em" }}>
        <span dir="auto">To'y kuni dasturi</span>
      </Reveal>
      <div
        className="relative mx-auto grid w-full max-w-[460px] grid-cols-[minmax(0,1fr)_16px_minmax(0,1fr)] items-center gap-x-6 md:gap-x-8 gap-y-8 md:gap-y-10"
        style={{ fontFamily: '"Times New Roman", serif' }}
      >
        {items.map((item, i) => (
          <div key={item.time} className="contents">
            <Reveal as="span" className="pt-0.5 text-right text-[16px] md:text-[17px] tabular-nums tracking-wide leading-snug font-medium" style={{ color: "rgb(225, 188, 124)" }}>
              {item.time}
            </Reveal>
            <Reveal as="span" aria-hidden="true" className="relative flex items-center justify-center self-stretch">
              <span
                className="absolute left-1/2 -translate-x-1/2 w-px"
                style={{
                  backgroundColor: "color-mix(in srgb, rgb(225, 188, 124) 40%, transparent)",
                  top: i === 0 ? "50%" : undefined,
                  bottom: i === items.length - 1 ? "50%" : undefined,
                  ...(i === 0
                    ? { bottom: "-2rem" }
                    : i === items.length - 1
                      ? { top: "-2rem" }
                      : { top: "-2rem", bottom: "-2rem" }),
                }}
              />
              <span
                className="relative block h-2.5 w-2.5 rounded-full z-10"
                style={{
                  backgroundColor: "rgb(225, 188, 124)",
                  boxShadow: "color-mix(in srgb, rgb(225, 188, 124) 13%, transparent) 0px 0px 0px 2px",
                }}
              />
            </Reveal>
            <Reveal as="span" className="pt-0.5 text-left text-[17px] md:text-[19px] font-medium leading-snug" style={{ color: "rgb(225, 188, 124)" }}>
              <span dir="auto">{item.title}</span>
            </Reveal>
          </div>
        ))}
      </div>
    </div>
  );
}
