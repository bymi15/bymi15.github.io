import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";
import { parse, type HTMLElement } from "node-html-parser";

const DIST = "dist";

export function loadPage(route: string): HTMLElement {
  const file = route === "/" ? "index.html" : `${route.replace(/^\//, "")}.html`;
  return parse(readFileSync(join(DIST, file), "utf8"));
}

export function walk(dir: string, exts: string[]): string[] {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) return walk(p, exts);
    return exts.some((e) => p.endsWith(e)) ? [p] : [];
  });
}

/** All CSS shipped with the built site: external stylesheets plus inline <style> blocks. */
export function readBuiltCss(): string {
  const external = walk(DIST, [".css"]).map((f) => readFileSync(f, "utf8"));
  const inline = walk(DIST, [".html"]).flatMap((f) =>
    parse(readFileSync(f, "utf8")).querySelectorAll("style").map((s) => s.text),
  );
  return [...external, ...inline].join("\n");
}
