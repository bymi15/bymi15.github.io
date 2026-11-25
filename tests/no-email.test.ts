import { readFileSync } from "node:fs";
import { expect, test } from "vitest";
import { walk } from "./helpers";

const TEXT_EXTS = [".astro", ".ts", ".mjs", ".js", ".css", ".html", ".txt", ".json", ".xml", ".svg", ".md", ".yml"];
const EMAIL = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;

test("no email address in source, docs, public assets, build output or README", () => {
  const files = [
    ...walk("src", TEXT_EXTS),
    ...walk("public", TEXT_EXTS),
    ...walk("dist", TEXT_EXTS),
    ...walk(".github", TEXT_EXTS),
    ...walk("docs", TEXT_EXTS),
    "README.md",
  ];
  expect(files.length).toBeGreaterThan(1);
  const offenders = files.flatMap((f) => {
    const m = readFileSync(f, "utf8").match(EMAIL);
    return m ? [`${f}: ${m[0]}`] : [];
  });
  expect(offenders).toEqual([]);
});
