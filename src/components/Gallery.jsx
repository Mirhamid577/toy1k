import { useState } from "react";
import Reveal from "./Reveal";

const modules = import.meta.glob("../assets/gallery/*.{webp,jpg,jpeg,png,avif}", {
  eager: true,
  import: "default",
});

const ALL_PHOTOS = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, src]) => src);

const PHOTOS = ALL_PHOTOS.slice(0, 5);
const EXTRA = Math.max(0, ALL_PHOTOS.length - 5);
const photo = (i) => PHOTOS[i] ?? ALL_PHOTOS[0] ?? "";

function Lightbox({ index, setIndex, onClose }) {
  if (index === null) return null;
  return (
    <div className="fixed inset-0 z-[200] bg-black/85 flex flex-col items-center justify-center">
      <button
        onClick={onClose}
        className="absolute right-2 sm:right-4 top-2 sm:top-4 z-10 w-10 h-10 rounded-full text-xl sm:text-2xl flex items-center justify-center transition-transform hover:scale-110"
        style={{ background: "rgba(225,188,124,0.18)", border: "1px solid rgba(225,188,124,0.55)", color: "#E1BC7C" }}
        aria-label="Close lightbox"
      >
        ✕
      </button>
      <div className="absolute top-2 sm:top-4 left-2 sm:left-4 text-white text-sm sm:text-lg bg-black/40 px-2 sm:px-3 py-1 rounded-full shadow-md z-10">
        {index + 1} / {ALL_PHOTOS.length}
      </div>
      <div className="relative flex flex-1 w-full max-w-5xl items-center justify-center px-8 sm:px-12 min-h-0">
        <button
          onClick={() => setIndex((index - 1 + ALL_PHOTOS.length) % ALL_PHOTOS.length)}
          className="absolute left-0 sm:left-2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl sm:text-4xl flex items-center justify-center"
          aria-label="Previous image"
        >
          ‹
        </button>
        <img
          className="max-h-full max-w-full rounded-xl sm:rounded-2xl object-contain shadow-2xl select-none"
          src={ALL_PHOTOS[index]}
          alt=""
        />
        <button
          onClick={() => setIndex((index + 1) % ALL_PHOTOS.length)}
          className="absolute right-0 sm:right-2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl sm:text-4xl flex items-center justify-center"
          aria-label="Next image"
        >
          ›
        </button>
      </div>
      <div className="flex gap-2 sm:gap-3 overflow-x-auto px-2 sm:px-4 py-2 sm:py-3 mt-3 sm:mt-4 bg-black/30 rounded-lg backdrop-blur-sm max-w-[90vw] sm:max-w-[80vw] scrollbar-none">
        {ALL_PHOTOS.map((src, i) => (
          <button
            key={src}
            onClick={() => setIndex(i)}
            className={`flex-shrink-0 h-12 w-12 sm:h-16 sm:w-16 rounded-md sm:rounded-lg overflow-hidden transition-all duration-200 ${
              i === index ? "scale-105 shadow-lg" : "opacity-60 hover:opacity-100"
            }`}
            style={
              i === index
                ? { outline: "rgb(225, 188, 124) solid 2px", outlineOffset: "2px" }
                : undefined
            }
          >
            <img className="h-full w-full object-cover" src={src} alt="" draggable="false" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  if (ALL_PHOTOS.length === 0) return null;

  return (
    <div className="relative flex flex-col items-center z-10 pt-[36px] md:pt-[56px] pb-[48px] md:pb-[72px] mb-4 md:mb-8">
      <div className="w-full max-w-[432px] md:max-w-[600px] mb-6">
        <img alt="Divider decoration" className="w-full" src="/images/royal-red/gold-divider-up.webp" />
      </div>
      <Reveal as="h2" className="uppercase font-bold text-[20px] md:text-[24px] text-center mb-6 font-qellia" style={{ letterSpacing: "0.04em" }}>
        <span dir="auto">Foto albom</span>
      </Reveal>
      <div className="mt-6 w-full max-w-[432px] md:max-w-[600px]">
        <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gridTemplateRows: "1fr 1fr 0.8fr", gap: 8, aspectRatio: "3 / 4" }}>
          <Reveal
            className="group relative cursor-pointer overflow-hidden rounded-xl border bg-[#E1BC7C08]"
            style={{ gridColumn: "1 / auto", gridRow: "1 / 3", minHeight: 0, borderColor: "#E1BC7C33" }}
            onClick={() => setLightbox(0)}
          >
            <img alt="Story photo 1" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]" src={photo(0)} />
          </Reveal>
          <Reveal
            className="group relative cursor-pointer overflow-hidden rounded-xl border bg-[#E1BC7C08]"
            style={{ gridColumn: "2 / auto", gridRow: "1 / auto", minHeight: 0, borderColor: "#E1BC7C33" }}
            onClick={() => setLightbox(1)}
          >
            <img alt="Story photo 2" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]" src={photo(1)} />
          </Reveal>
          <Reveal
            className="group relative cursor-pointer overflow-hidden rounded-xl border bg-[#E1BC7C08]"
            style={{ gridColumn: "2 / auto", gridRow: "2 / auto", minHeight: 0, borderColor: "#E1BC7C33" }}
            onClick={() => setLightbox(2)}
          >
            <img alt="Story photo 3" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]" src={photo(2)} />
          </Reveal>
          <div style={{ gridColumn: "1 / 3", gridRow: "3 / auto", display: "grid", gridTemplateColumns: "2fr 3fr", gap: 8, minHeight: 0 }}>
            <Reveal
              className="group relative cursor-pointer overflow-hidden rounded-xl border bg-[#E1BC7C08]"
              style={{ minHeight: 0, borderColor: "#E1BC7C33" }}
              onClick={() => setLightbox(3)}
            >
              <img alt="Story photo 4" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]" src={photo(3)} />
            </Reveal>
            <Reveal
              className="group relative cursor-pointer overflow-hidden rounded-xl border bg-[#E1BC7C08]"
              style={{ minHeight: 0, borderColor: "#E1BC7C33" }}
              onClick={() => setLightbox(4)}
            >
              <img alt="Story photo 5" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]" src={photo(4)} />
              {EXTRA > 0 && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-[1px]">
                  <span className="text-lg font-bold" style={{ color: "rgb(225, 188, 124)" }}>
                    +{EXTRA}
                  </span>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[432px] md:max-w-[600px] mt-8">
        <img alt="Divider decoration bottom" className="rotate-180 w-full" src="/images/royal-red/gold-divider-up.webp" />
      </div>
      <Lightbox index={lightbox} setIndex={setLightbox} onClose={() => setLightbox(null)} />
    </div>
  );
}
