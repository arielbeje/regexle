export const PATTERN_FLAGS = "gi";
export const PATTERNS = [
  "a",
  ".*i",
  ".*c",
  "12.*",
  ".*ab",
  ".*a.*",
  "1..4",
  ".va",
  ".*i.*",
  "abc",
  ".*l",
];

export const FIRST_PATTERN_DAY = 19208;
export const STORAGE_LAST_SOLVED_DAY = "regexle_last_solved_day";

export const WINDOW_EXISTS = typeof window !== "undefined";
export const LOCALSTORAGE_AVAILABLE = WINDOW_EXISTS &&
  typeof window.localStorage !== "undefined";
