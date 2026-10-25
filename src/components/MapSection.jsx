import Reveal from "./Reveal";

export default function MapSection() {
  return (
    <div className="pt-10 md:pt-12">
      <section className="relative flex flex-col gap-6 md:gap-8 px-6 md:px-10 pb-12 md:pb-16">
        <Reveal className="relative text-center">
          <h3 className="uppercase font-bold text-[20px] md:text-[24px] text-center font-qellia" style={{ color: "rgb(225, 188, 124)", letterSpacing: "0.04em" }}>
            <span dir="auto">To'y manzili</span>
          </h3>
          <div
            className="mx-auto mt-3 max-w-sm md:max-w-[500px] text-center text-sm md:text-base tracking-wide whitespace-pre-line flex flex-col items-center pb-3 border-b border-[#E1BC7C20]"
            style={{ backgroundColor: "transparent", color: "rgb(225, 188, 124)", fontFamily: '"Times New Roman", serif' }}
          >
            <span dir="auto">Malika Tantanalar Saroyi</span>
            <span dir="auto" className="mt-1 text-xs opacity-75">
              Oqqorgon tumani
            </span>
          </div>
        </Reveal>
        <Reveal className="relative flex flex-col items-center gap-4 md:gap-5 w-full">
          <iframe
            title="map"
            className="h-[280px] md:h-[380px] w-full max-w-[340px] md:max-w-[560px] rounded-2xl overflow-hidden shadow-lg"
            src="https://yandex.uz/map-widget/v1/?ll=69.047870%2C40.879430&z=16&pt=69.047870,40.879430,pm2rdm"
            loading="lazy"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: "1px solid rgb(225, 188, 124)" }}
          />
        </Reveal>
      </section>
    </div>
  );
}
