import { useRef, useState } from "react";
import Reveal from "./components/Reveal";
import Envelope from "./components/Envelope";
import FrameBorder from "./components/FrameBorder";
import InviteIntro from "./components/InviteIntro";
import Gallery from "./components/Gallery";
import DateSection from "./components/DateSection";
import MapSection from "./components/MapSection";
import ProgramSection from "./components/ProgramSection";
import WishesSection from "./components/WishesSection";
import GiftSection from "./components/GiftSection";
import Footer from "./components/Footer";
import MusicButton from "./components/MusicButton";
import BackdropEffects from "./components/BackdropEffects";

export default function App() {
  const [opened, setOpened] = useState(false);
  const [gateGone, setGateGone] = useState(false);
  const musicRef = useRef(null);

  const openInvite = () => {
    // Start music inside the click gesture, otherwise browsers block the sound.
    musicRef.current?.play();
    setOpened(true);
  };

  return (
    <>
      {/* Always mounted so the audio element exists before the envelope opens */}
      <MusicButton ref={musicRef} visible={opened} />
      {!gateGone && (
        <Envelope
          onOpen={openInvite}
          opening={opened}
          onExited={() => setGateGone(true)}
        />
      )}
      {opened && (
        <>
          <BackdropEffects />
          <div
            className="relative min-h-screen w-full overflow-x-clip"
            style={{ backgroundColor: "rgb(62, 0, 1)", color: "rgb(225, 188, 124)" }}
          >
            {/* Background photo layer */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
              <img
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover block bg-drift"
                src="/images/royal-red/background.webp"
                style={{ opacity: 0.3, objectPosition: "top center" }}
              />
            </div>

            {/* Flower decoration at the top */}
            <div
              className="absolute pointer-events-none z-[1] top-0 overflow-visible"
              style={{ left: "50%", transform: "translateX(-50%) translateY(-50%)", width: "90%" }}
            >
              <div className="w-[95%] max-w-[480px] md:max-w-[900px] mx-auto flower-in">
                <img
                  alt=""
                  aria-hidden="true"
                  className="w-full h-auto block flower-sway"
                  src="/images/royal-red/flower.webp"
                />
              </div>
            </div>

            {/* Template card */}
            <div
              className="relative w-full overflow-hidden md:border md:border-[#E1BC7C22]"
              style={{ backgroundColor: "rgb(62, 0, 1)", color: "rgb(225, 188, 124)" }}
            >
              {/* Hero: label + names */}
              <header
                className="relative z-10 flex flex-col items-center text-center pb-[83px] md:pb-[146px]"
                style={{ paddingTop: "clamp(208px, 43vw, 358px)", color: "rgb(225, 188, 124)" }}
              >
                <RevealLabel className="whitespace-pre-line" style={{ fontSize: "clamp(13px, 2.2vw, 18px)", letterSpacing: "0.25em" }}>
                  NIKOH TO'YI
                </RevealLabel>
                <div className="mt-[4%] w-full font-serif flex flex-col items-center">
                  <RevealLabel
                    className="font-the-nautigal w-full"
                    style={{
                      fontFamily: '"The Nautigal", "Great Vibes", cursive',
                      fontSize: "clamp(57px, 11.8vw, 107px)",
                      lineHeight: 1.45,
                    }}
                  >
                    Odilxon
                  </RevealLabel>
                  <RevealLabel style={{ fontSize: "clamp(29px, 6vw, 53px)", lineHeight: 1.3 }}>&</RevealLabel>
                  <RevealLabel
                    className="font-the-nautigal w-full"
                    style={{
                      fontFamily: '"The Nautigal", "Great Vibes", cursive',
                      fontSize: "clamp(57px, 11.8vw, 107px)",
                      lineHeight: 1.45,
                    }}
                  >
                    Odinaxon
                  </RevealLabel>
                </div>
              </header>

              {/* Gold frame around all content */}
              <div className="relative w-[95%] max-w-[480px] md:max-w-[900px] mx-auto z-10">
                <FrameBorder />
                {/* Top block gets the same padding as the frame corners, so the first heading sits below the gold border */}
                <div style={{ padding: "clamp(56px, 11.9vw, 91px) calc(0.3 * clamp(56px, 11.9vw, 91px))" }}>
                  <InviteIntro />
                  <Gallery />
                  <DateSection />
                </div>
                <MapSection />
                <ProgramSection />
                <WishesSection />
                <GiftSection />
                <div className="relative flex flex-col items-center pt-6 z-10">
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

/* Small helper for hero texts: fades in with the same reveal effect */
function RevealLabel({ children, className = "", style }) {
  return (
    <Reveal className={className} style={style}>
      <span dir="auto">{children}</span>
    </Reveal>
  );
}
