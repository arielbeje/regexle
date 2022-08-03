/** @jsx h */
import { h, JSX } from "preact";
import { useContext } from "preact/hooks";
import { tw } from "@twind";

import { HighlightMatch } from "./HighlightMatch.tsx";
import { GUESS_CLASS, GuessProps } from "./Guess.tsx";
import { Pattern } from "../utils/context.ts";

export function RegexMatchingGuess(
  { text }: GuessProps,
): JSX.Element {
  const pattern = useContext(Pattern);

  return (
    <p class={tw`${GUESS_CLASS}`}>
      <HighlightMatch text={text} pattern={pattern} />
    </p>
  );
}
