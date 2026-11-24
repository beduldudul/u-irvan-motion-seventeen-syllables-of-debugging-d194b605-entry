import { mkdirSync, writeFileSync } from "node:fs";

const haiku = [
  "Cursor blinks at three",
  "the log swears nothing is wrong",
  "yet the bug blinks back",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", haiku + "\n");
