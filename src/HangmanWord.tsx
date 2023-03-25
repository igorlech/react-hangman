export function HangmanWord() {
  const word = "hangman";
  const guessedLetters = ["a", "n", "g", "m"];
  return (
    <div className="hangman-word">
      {word.split("").map((letter, index) => {
        return (
          <span className="letter-cont" key={index}>
            <span
              className="letter"
              style={{
                visibility: guessedLetters.includes(letter)
                  ? "visible"
                  : "hidden",
              }}
            >
              {letter}
            </span>
          </span>
        );
      })}
    </div>
  );
}
