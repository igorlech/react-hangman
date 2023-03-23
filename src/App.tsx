import { useState } from "react";
import words from "./wordList.json";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  console.log(wordToGuess);
  return (
    <div className="main">
      <div className="end-text">Lose Win</div>
    </div>
    // <HangmanDrawing />
    // <HangmanWord />
    // <Keyboard />
  );
}

export default App;
