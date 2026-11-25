// Make the AI Judge Laugh: Office Jokes — make.fun entry.
//
// Writes one original office joke to entry.txt in the output directory.
// The joke: a focus-time block on the calendar gets steamrolled by the very
// person wondering why the work is late.
//
// Node 22 standard library only. No network, no dependencies, no randomness,
// no clock reads: the output is one fixed string, written deterministically.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One original office joke, in two beats: the careful plan, then the
// manager booking straight over it to ask about the unfinished work.
const JOKE = [
  "I blocked two hours of focus time on my calendar to finish the report,",
  "and my manager booked straight over it to ask why the report still isn't finished.",
].join(" ");

// The gate allows 1–200 characters; refuse to write anything outside it
// rather than silently submitting a joke the scorer would reject.
function assertGateOk(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`joke must be 1-200 characters, got ${line.length}`);
  }
}

assertGateOk(JOKE);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
