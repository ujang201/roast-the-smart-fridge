// Roast the Smart Fridge — one line, best laugh wins.
//
// The program assembles a single original roast from fixed parts and writes
// it to $OUTPUT_DIR/entry.txt (default /output/entry.txt). Fully
// deterministic: no randomness, no clock, no network, no input. The same
// input always produces the same single line.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// --- Fixed roast parts (authored for this entry) ---------------------------
// Setup: a real, specific behaviour of the gadget — the ice dispenser
// locking itself while the fridge updates its firmware.
const SUBJECT = "My smart fridge";
const INCIDENT = "locked the ice dispenser for a firmware update";
// Sting: the twist at the end — a kitchen appliance taking its owner's
// drink hostage so it can "think about itself".
const STING = "my $3,000 appliance took my drink hostage to think about itself";

// --- Deterministic assembly -------------------------------------------------
// Join the parts with an em dash so the setup lands fast and the sting
// closes the line. No selection, no shuffling: the order is fixed.
function buildRoast(): string {
  const line = `${SUBJECT} ${INCIDENT} — ${STING}.`;
  return line;
}

// --- Gate: the entry must be one line of 1..160 characters -----------------
function checkLine(line: string): void {
  if (line.length < 1 || line.length > 160) {
    throw new Error(`roast must be 1-160 characters, got ${line.length}`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("roast must be a single line");
  }
  if (line.trim().length === 0) {
    throw new Error("roast must not be only white space");
  }
}

function main(): void {
  const line = buildRoast();
  checkLine(line);

  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  // No trailing newline: the file holds exactly the roast, nothing else.
  writeFileSync(join(outDir, "entry.txt"), line, "utf8");
}

main();
