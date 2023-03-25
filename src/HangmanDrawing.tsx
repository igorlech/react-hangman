const HEAD = (
  <div
    style={{
      width: "35px",
      height: "35px",
      borderRadius: "100%",
      border: "8px solid black",
      position: "absolute",
      top: "40px",
      right: "-22px",
    }}
  />
);

const BODY = (
  <div
    style={{
      width: "8px",
      height: "90px",
      background: "black",
      position: "absolute",
      top: "90px",
      right: 0,
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      width: "70px",
      height: "8px",
      background: "black",
      position: "absolute",
      top: "120px",
      right: "-70px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      width: "70px",
      height: "8px",
      background: "black",
      position: "absolute",
      top: "120px",
      right: "7px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      width: "70px",
      height: "8px",
      background: "black",
      position: "absolute",
      top: "170px",
      right: "-62px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      width: "70px",
      height: "8px",
      background: "black",
      position: "absolute",
      top: "170px",
      right: 0,
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  />
);

const ALL_BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div className="hangman-drawing">
      {ALL_BODY_PARTS.slice(0, numberOfGuesses)}
      <div id="drawing-line1"></div>
      <div id="drawing-line2"></div>
      <div id="drawing-line3"></div>
      <div id="drawing-line4"></div>
    </div>
  );
}
