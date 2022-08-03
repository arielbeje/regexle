/** @jsx h */
import { h } from "preact";

import { tw } from "@twind";

const MATCH_CLASS = "bg-green-700";
const MATCH_CLASS_EMPTY_TEXT = `px-0.5 ${MATCH_CLASS}`;

interface MatchProps {
  text: string;
}

export function Match({ text }: MatchProps): h.JSX.Element {
  return (
    <em
      class={tw`${text ? MATCH_CLASS : MATCH_CLASS_EMPTY_TEXT}`}
    >
      {text}
    </em>
  );
}
