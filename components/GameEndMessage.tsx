/** @jsx h */
import { h, JSX } from "preact";
import { useContext } from "preact/hooks";
import { tw } from "@twind";
import { Pattern } from "../utils/context.ts";

export function GameEndMessage(): JSX.Element {
  const pattern = useContext(Pattern);
  return (
    <div class={tw`bg-green-200 p-5`}>
      <h1>
        You have found the pattern: <pre>{pattern.source}</pre>
      </h1>
      <p>Feel free to reload the page and keep playing!</p>
    </div>
  );
}
