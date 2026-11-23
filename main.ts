// Six Words, One Story — make.fun entry.
// The program writes one original six-word story to /output/entry.txt:
// a lifetime of waiting, answered yesterday — he waited forever,
// and she married someone else. The twist is the clock: forever
// against yesterday, a whole life lost in a single day.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const STORY =
  "He waited forever. She married yesterday.";

const out = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, STORY);
