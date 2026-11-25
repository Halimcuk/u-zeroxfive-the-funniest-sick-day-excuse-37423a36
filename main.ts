// The Funniest Sick-Day Excuse — u-zeroxfive-the-funniest-sick-day-excuse-37423a36
//
// Writes a single fixed sick-day excuse line to entry.txt.
// The text is a constant: no randomness, no network, no clock, so every
// run produces byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line a person could plausibly text their boss: absurd enough to
// laugh at, specific enough (40kg sack, satsuma-sized toe) to sound
// almost true for a beat, with the punch landing before the last word.
const ENTRY =
  "Hi, I won't be in today — a 40kg sack of rice fell on my foot this morning and my big toe is now the size of a satsuma, and I can't get a shoe on it.";

// The competition gate: entry.txt must be 1 to 200 characters and not
// only white space.
const MAX_CHARS = 200;

if (ENTRY.length === 0 || ENTRY.length > MAX_CHARS || ENTRY.trim().length === 0) {
  throw new Error(
    `Entry must be 1 to ${MAX_CHARS} non-whitespace characters, got ${ENTRY.length}.`,
  );
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
