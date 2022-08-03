/** @jsx h */

import { h } from "preact";
import { useContext, useState } from "preact/hooks";
import GuessInput from "./GuessInput.tsx";
import GuessList, { GUESS_TYPE } from "./GuessList.tsx";
import { GameEnded, Pattern } from "../utils/context.ts";

interface PatternGuessingProps {
  onCorrectGuess: () => void;
}

export default function PatternGuessing(
  { onCorrectGuess }: PatternGuessingProps,
) {
  const [guesses, setGuesses] = useState<Set<string>>(new Set());
  const pattern = useContext(Pattern);
  const gameEnded = useContext(GameEnded);

  const handleGuess = (guess: string, pattern: RegExp) => {
    if (guess === pattern.source) {
      onCorrectGuess();
    } else {
      setGuesses(new Set([...guesses, guess]));
    }
  };

  return (
    <div>
      <GuessInput
        disabled={gameEnded}
        placeholder="Enter pattern"
        onSubmit={(guess) => handleGuess(guess, pattern)}
      />
      <GuessList
        header="Wrong patterns"
        guesses={guesses}
        guessType={GUESS_TYPE.DEFAULT}
      />
    </div>
  );
}
