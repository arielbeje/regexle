/** @jsx h */
import { Component, h, JSX } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";

import { RegexMatchingGuess } from "../components/RegexMatchingGuess.tsx";
import { Guess } from "../components/Guess.tsx";

export enum GUESS_TYPE {
  DEFAULT,
  REGEX_MATCHING,
}

// To get around not being able to pass component constructors
const getGuessComponent = (guessType: GUESS_TYPE) => {
  switch (guessType) {
    case GUESS_TYPE.REGEX_MATCHING:
      return RegexMatchingGuess;
    default:
      return Guess;
  }
};

interface GuessListProps {
  header?: string;
  guesses: Set<string>;
  guessType?: GUESS_TYPE;
}

export default function GuessList(
  { header, guesses, guessType = GUESS_TYPE.DEFAULT }: GuessListProps,
) {
  const GuessComponent = getGuessComponent(guessType);

  return (
    <div class={tw`flex flex-col`}>
      {header && <h2 class={tw`self-center`}>{header}</h2>}
      <div
        class={tw`h-2/3 flex flex-col justify-center ites-center gap-3 p-0.5`}
      >
        {/* TODO: Use a non-hardcoded height */}
        <ul class={tw`flex flex-col gap-2 overflow-y-auto h-96`}>
          {[...guesses].map((guess_text) => (
            <li key={guess_text} class={tw`flex gap-2`}>
              <GuessComponent text={guess_text} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
