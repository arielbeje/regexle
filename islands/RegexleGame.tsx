/** @jsx h */

import { h, JSX } from "preact";
import { useState } from "preact/hooks";

import { GameEnded, Pattern } from "../utils/context.ts";
import { PATTERN_FLAGS, PATTERNS } from "../utils/consts.ts";
import SentenceGuessing from "./SenteceGuessing.tsx";
import PatternGuessing from "./PatternGuessing.tsx";
import { GameEndMessage } from "../components/GameEndMessage.tsx";

const PATTERN = new RegExp(
  PATTERNS[Math.floor(Math.random() * PATTERNS.length)],
  PATTERN_FLAGS,
);

export default function RegexleGame(): JSX.Element {
  const [foundPattern, setFoundPattern] = useState<boolean>(false);

  return (
    <div>
      <Pattern.Provider value={PATTERN}>
        <GameEnded.Provider value={foundPattern}>
          {foundPattern && <GameEndMessage />}

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
