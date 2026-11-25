import { expect, test } from "vitest";
import { loadPage } from "./helpers";

const page = loadPage("/");

test("page has the name as its h1", () => {
  expect(page.querySelector("h1")?.text).toBe("Brian Min");
});
