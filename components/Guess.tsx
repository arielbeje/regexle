/** @jsx h */
import { h, JSX } from "preact";
import { tw } from "@twind";

export const GUESS_CLASS = "flex-grow-1";
export const GUESS_CLASS_EMPTY_TEXT = "flex-grow-1";

export interface GuessProps {
    text: string;
}

export function Guess(
    { text }: GuessProps,
  ): JSX.Element {
    return (
      <p class={tw`${GUESS_CLASS}`}>
        {text}
      </p>
    );
  }
