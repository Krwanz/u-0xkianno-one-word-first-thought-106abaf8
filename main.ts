// One Word, First Thought — u-0xkianno-one-word-first-thought-106abaf8
// Writes exactly one word to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt when the variable is unset).
// The word: "petrichor" — the smell of rain on dry earth.
// Surprising (few know the word, everyone knows the feeling),
// vivid (one breath calls up a whole summer storm), and with a
// sound that rewards a second look: petrichor.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "petrichor";

// The gate: entry.txt must be UTF-8 text of 1 to 24 characters,
// exactly one word, not only white space. Refuse to finish
// silently wrong: re-read what was written and check it.
function isValidEntry(text: string): boolean {
  if (text.length < 1 || text.length > 24) return false;
  if (text.trim().length === 0) return false;
  if (/\s/.test(text)) return false;
  return true;
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, WORD, "utf8");

const written = readFileSync(outPath, "utf8");
if (!isValidEntry(written) || written !== WORD) {
  console.error(`Invalid entry written to ${outPath}: ${JSON.stringify(written)}`);
  process.exit(1);
}
console.log(`Wrote one word (${written.length} chars) to ${outPath}: ${written}`);
