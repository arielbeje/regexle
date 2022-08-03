/** @jsx h */

import { Fragment, h, JSX } from "preact";

import { Match } from "./Match.tsx";

interface HighlightProps {
  text: string;
  pattern: RegExp;
}

export function HighlightMatch({ text, pattern }: HighlightProps): JSX.Element {
  const ret: (string | JSX.Element)[] = [];

  if (!pattern) return <Fragment>{text}</Fragment>;

  let lastOffset = 0;

  // TODO: Fix this when the types are updated.
  // @ts-ignore: The string prototype's replace function's types aren't properly defined.
  // TODO: This matches an empty string at the end if the pattern is `.*`.
  text.replace(pattern, (match: string, offset: number) => {
    // Push both the last part of the string, and the new part with the highlight
    ret.push(
      text.substring(lastOffset, offset),
      <Match text={match} />,
    );
    lastOffset = offset + match.length;
  });

  // Push the last non-highlighted string
  ret.push(text.slice(lastOffset));

  return (
    // Must wrap everything in fragments in order to return
    // a valid JSX element.
    <Fragment>
      {ret.map((value) => <Fragment>{value}</Fragment>)}
    </Fragment>
  );
}
