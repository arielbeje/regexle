/** @jsx h */

import { h, JSX } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";

import { GameEnded, Pattern } from "../utils/context.ts";
import { PATTERNS } from "../utils/consts.ts";
import SentenceGuessing from "./SenteceGuessing.tsx";
import PatternGuessing from "./PatternGuessing.tsx";

const PATTERN = PATTERNS[Math.floor(Math.random() * PATTERNS.length)];

export default function RegexleGame(): JSX.Element {
  const [foundPattern, setFoundPattern] = useState<boolean>(false);

  return (
    <div>
      <Pattern.Provider value={PATTERN}>
        <GameEnded.Provider value={foundPattern}>
          {foundPattern && (
            <div class={tw`p-5`}>
              <h1>
                You have found the pattern: <pre>{PATTERN.source}</pre>
              </h1>
              <p>Feel free to reload the page and keep playing!</p>
            </div>
          )}

          <SentenceGuessing />

          <PatternGuessing
            onCorrectGuess={() => {
              setFoundPattern(true);
            }}
          />
        </GameEnded.Provider>
      </Pattern.Provider>
    </div>
  );
}
