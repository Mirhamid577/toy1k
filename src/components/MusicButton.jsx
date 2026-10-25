import { useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";

const AUDIO_SRC = "/music/oshiqman.m4a";

/**
 * Audio lives here and stays mounted for the whole page lifetime, so playback
 * can be started synchronously from the envelope's click handler (a real user
 * gesture, which browsers require for sound).
 */
export default function MusicButton({ ref, visible = true }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [blocked, setBlocked] = useState(false);

  const play = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const result = audio.play();
    if (!result || typeof result.catch !== "function") return;
    result.catch(() => {
      // Autoplay policy or iOS silent mode: retry on the next interaction.
      setBlocked(true);
    });
  }, []);

  useImperativeHandle(ref, () => ({ play }), [play]);

  useEffect(() => {
    if (!blocked) return undefined;
    const retry = () => {
      const audio = audioRef.current;
      if (!audio) return;
      audio.play().then(
        () => setBlocked(false),
        () => {}
      );
    };
    document.addEventListener("pointerdown", retry);
    return () => document.removeEventListener("pointerdown", retry);
  }, [blocked]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) play();
    else audio.pause();
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={AUDIO_SRC}
        loop
        preload="auto"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      {visible && (
        <div className="fixed bottom-8 right-8 z-[110]">
          <button
            type="button"
            aria-label="Toggle music"
            aria-pressed={playing}
            onClick={toggle}
            className="w-14 h-14 rounded-full shadow-2xl flex items-center justify-center border border-[#E1BC7C]/40 text-[#E1BC7C] backdrop-blur-md transition-transform hover:scale-105"
          >
            {playing ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"          className="lucide lucide-volume-2 animate-pulse"
            aria-hidden="true">
                <path d="M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z" />
                <path d="M16 9a5 5 0 0 1 0 6" />
                <path d="M19.366 6.207a8.5 8.5 0 0 1 0 11.586" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-volume-x" aria-hidden="true">
                <path d="M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z" />
                <path d="m16.5 14.5 5-5" />
                <path d="m16.5 9.5 5 5" />
              </svg>
            )}
          </button>
        </div>
      )}
    </>
  );
}
