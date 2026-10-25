const GOLD = "rgb(225, 188, 124)";

function Dot({ size = 6, margin = false }) {
  return (
    <div
      className={`shrink-0 rounded-full ${margin ? "mx-[3px]" : ""}`}
      style={{ width: size, height: size, backgroundColor: GOLD }}
    />
  );
}

function HorizontalEdge({ flip = false }) {
  return (
    <div
      className={`flex flex-col w-full h-full overflow-hidden ${flip ? "justify-end" : "justify-start"}`}
    >
      <div className="flex items-center w-full px-[5px] gap-[4px] shrink-0">
        <Dot />
        <Dot size={3} margin />
        <div className="flex-1 h-px" style={{ backgroundColor: GOLD }} />
        <Dot size={3} margin />
        <Dot />
        <img
          alt=""
          aria-hidden="true"
          className="shrink-0 h-auto"
          src="/images/royal-red/frame-middle-horizontal.webp"
          style={{
            width: "clamp(65px, 13.8vw, 106px)",
            transform: flip ? "scaleY(-1)" : undefined,
          }}
        />
        <Dot />
        <Dot size={3} margin />
        <div className="flex-1 h-px" style={{ backgroundColor: GOLD }} />
        <Dot size={3} margin />
        <Dot />
      </div>
    </div>
  );
}

function VerticalEdge({ flip = false }) {
  return (
    <div className={`flex flex-row h-full w-full overflow-hidden ${flip ? "justify-end" : "justify-start"}`}>
      <div className="flex flex-col items-center h-full min-h-0 py-[5px] gap-[4px] shrink-0">
        <Dot />
        <Dot size={3} margin />
        <div className="min-h-0 w-px" style={{ flex: "0.4 1 0px", backgroundColor: GOLD }} />
        <Dot size={3} margin />
        <Dot />
        <img
          alt=""
          aria-hidden="true"
          className="shrink-0 max-w-none"
          src="/images/royal-red/frame-middle-vertical.webp"
          style={{
            width: "clamp(21px, 4.55vw, 35px)",
            height: "auto",
            aspectRatio: "35 / 106",
            objectFit: "contain",
            transform: flip ? "scaleX(-1)" : undefined,
          }}
        />
        <Dot />
        <Dot size={3} margin />
        <div className="min-h-0 w-px" style={{ flex: "1 1 0px", backgroundColor: GOLD }} />
        <Dot size={3} margin />
        <Dot />
      </div>
    </div>
  );
}

const cornerSize = "clamp(56px, 11.9vw, 91px)";

export default function FrameBorder() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        display: "grid",
        gridTemplateRows: `${cornerSize} 1fr ${cornerSize}`,
        gridTemplateColumns: `${cornerSize} 1fr ${cornerSize}`,
      }}
    >
      <img
        alt=""
        aria-hidden="true"
        className="block h-auto max-h-full w-full self-start justify-self-start"
        src="/images/royal-red/frame-corner-top-left.webp"
      />
      <HorizontalEdge />
      <img
        alt=""
        aria-hidden="true"
        className="block h-auto max-h-full w-full self-start justify-self-end"
        src="/images/royal-red/frame-corner-top-left.webp"
        style={{ transform: "scaleX(-1)" }}
      />
      <VerticalEdge />
      <div />
      <VerticalEdge flip />
      <img
        alt=""
        aria-hidden="true"
        className="block h-auto max-h-full w-full self-end justify-self-start"
        src="/images/royal-red/frame-corner-top-left.webp"
        style={{ transform: "scaleY(-1)" }}
      />
      <HorizontalEdge flip />
      <img
        alt=""
        aria-hidden="true"
        className="block h-auto max-h-full w-full self-end justify-self-end"
        src="/images/royal-red/frame-corner-top-left.webp"
        style={{ transform: "scale(-1)" }}
      />
    </div>
  );
}
