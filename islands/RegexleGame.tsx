/** @jsx h */

import { createRef, h, JSX } from "preact";
import { useState } from "preact/hooks";

import { GameEnded, Pattern } from "../utils/context.ts";
import {
  FIRST_PATTERN_DAY,
  PATTERN_FLAGS,
  PATTERNS,
  STORAGE_LAST_SOLVED_DAY,
} from "../utils/consts.ts";
import SentenceGuessing from "./SenteceGuessing.tsx";
import PatternGuessing from "./PatternGuessing.tsx";
import { GameEndMessage } from "../components/GameEndMessage.tsx";

const TODAY_ID = Math.floor(Date.now() / 86400000);
const DAILY_PATTERN_INDEX = (TODAY_ID - FIRST_PATTERN_DAY) % PATTERNS.length;

const PATTERN = new RegExp(
  PATTERNS[DAILY_PATTERN_INDEX],
  PATTERN_FLAGS,
);

export default function RegexleGame(): JSX.Element {
  const [foundPattern, setFoundPattern] = useState<boolean>(false);
  const gameEndMessage = createRef<HTMLDivElement>();
  const lastSolvedDay = localStorage.getItem(STORAGE_LAST_SOLVED_DAY);

  if (lastSolvedDay && Number.parseInt(lastSolvedDay) === TODAY_ID) {
    setFoundPattern(true);
  }

  const endGame = () => {
    setFoundPattern(true);
    gameEndMessage.current!.scrollIntoView({ block: "center" });
    localStorage.setItem(STORAGE_LAST_SOLVED_DAY, TODAY_ID.toString());
  };

  return (
    <div>
      <Pattern.Provider value={PATTERN}>
        <GameEnded.Provider value={foundPattern}>
          <div ref={gameEndMessage}>
            {foundPattern && <GameEndMessage />}
          </div>

          <SentenceGuessing />

          <PatternGuessing
            onCorrectGuess={endGame}
          />
        </GameEnded.Provider>
      </Pattern.Provider>
    </div>
  );
}
