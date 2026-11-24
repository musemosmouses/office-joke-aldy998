// Make the AI Judge Laugh: The Office Joke (Open) — one original line
// of office comedy. The setup is the reply-all thread everyone dreads;
// the turn lands in the last few words, when the cure for the thread
// becomes twelve new copies of the same request.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I replied-all \"please remove me from this thread\" — and got twelve replies-all asking to be removed too.";

// One line for one joke: it must fit, 1 to 200 characters, the kit's
// gate. Counted by code points so the em dash counts as one character.
// Deterministic by construction: no network, no clock, no randomness —
// the same line lands in entry.txt on every run.
const charCount = [...ENTRY].length;
if (charCount < 1 || charCount > 200) {
  throw new Error(
    `office joke must be 1-200 characters (kit gate), got ${charCount}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");
console.log(`wrote office joke to ${outPath} (${charCount} characters)`);
