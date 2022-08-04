/** @jsx h */

import { Fragment, h } from "preact";
import { useContext, useState } from "preact/hooks";
import { tw } from "@twind";
import GuessInput from "./GuessInput.tsx";
import GuessList, { GUESS_TYPE } from "./GuessList.tsx";
import { GameEnded, Pattern } from "../utils/context.ts";

export default function SentenceGuessing() {
  const [matchingGuesses, setMatchingGuesses] = useState<Set<string>>(
    new Set(),
  );
  const [nonMatchingGuesses, setNonMatchingGuesses] = useState<Set<string>>(
    new Set(),
  );

  const pattern = useContext(Pattern);
  const gameEnded = useContext(GameEnded);

  const handleGuess = (guess: string, pattern: RegExp) => {
    if (pattern.exec(guess)) {
      setMatchingGuesses(new Set([...matchingGuesses, guess]));
    } else {
      setNonMatchingGuesses(new Set([...nonMatchingGuesses, guess]));
    }
  };

  return (
    <Fragment>
      <GuessInput
        disabled={gameEnded}
        placeholder="Enter sentence"
        onSubmit={(guess) => handleGuess(guess, pattern)}
      />
      <div class={tw`container m-full flex flex-row flex-wrap mx-auto`}>
        <div class={tw`w-1/2`}>
        <GuessList
          header="Matching sentences"
          guesses={matchingGuesses}
          guessType={GUESS_TYPE.REGEX_MATCHING}
        />
        </div>
        <div class={tw`w-1/2`}>
          <GuessList
            header="Non-matching sentences"
            guesses={nonMatchingGuesses}
            guessType={GUESS_TYPE.REGEX_MATCHING}
          />
        </div>
      </div>
    </Fragment>
  );
}
