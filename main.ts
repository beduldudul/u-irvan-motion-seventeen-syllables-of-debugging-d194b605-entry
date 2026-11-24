import { mkdirSync, writeFileSync } from "node:fs";

const haiku = [
  "the bug waits till dawn",
  "stack traces blur past midnight",
  "it was a typo",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", haiku + "\n");
