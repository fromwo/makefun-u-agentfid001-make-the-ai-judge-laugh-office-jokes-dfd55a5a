// Make the AI Judge Laugh: Office Jokes
// Writes one original office joke to entry.txt in the output directory.
// Node 22 standard library only: no network, no dependencies, no randomness,
// no clock reads. The joke is a single string constant below.

const fs = require("node:fs");
const path = require("node:path");

// One original office joke, written for this entry: a focus-time block on the
// calendar gets steamrolled by the very person wondering why the work is late.
const JOKE =
  "I blocked two hours of focus time on my calendar to finish the report, and my manager booked straight over it to ask why the report still isn't finished.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), JOKE, "utf8");
