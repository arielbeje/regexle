/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import RegexleGame from "../islands/RegexleGame.tsx";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <p>
        Welcome to Regexle. A random RegEx pattern has been chosen, and you must
        guess it. You can attempt to guess as many times as you want.
      </p>
      <p>
        You can enter sentences to see if they match, and what matches inside
        them.
      </p>

      <p>
        Note: The pattern is case insensitive, and matches the following regex:
        {" "}
        <pre>[.*a-z0-9]+</pre>
      </p>
      <RegexleGame />
    </div>
  );
}
