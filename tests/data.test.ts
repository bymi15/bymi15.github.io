import { expect, test } from "vitest";
import { site } from "../src/data/site";
import { experience, earlier } from "../src/data/experience";
import { projects, moreProjects } from "../src/data/projects";
import { education } from "../src/data/education";
import { skills } from "../src/data/skills";

test("experience newest first, Squarepoint current", () => {
  expect(experience.map((e) => e.company)).toEqual(["Squarepoint Capital", "American Express", "Flowverse"]);
  expect(experience[0].end).toBe("Present");
  expect(experience[0].roles[0].title).toBe("Lead Software Engineer");
});

test("Amex roles in order, newest first", () => {
  expect(experience[1].roles.map((r) => r.title)).toEqual([
    "Senior Software Engineer",
    "Software Engineer",
    "Technology Graduate Engineer",
    "Technology Summer Intern",
  ]);
  expect(experience[1].start).toBe("Sep 2021");
  expect(experience[1].end).toBe("Sep 2025");
});

test("Flowverse ended Apr 2025", () => {
  expect(experience[2].start).toBe("Mar 2023");
  expect(experience[2].end).toBe("Apr 2025");
});

test("earlier roles", () => {
  expect(earlier.map((e) => e.company)).toEqual([
    "UCL",
    "Topolar",
    "Republic of Korea Marine Corps",
    "Maplace",
  ]);
});

test("Color is first and the only featured project", () => {
  expect(projects[0].title).toMatch(/^Color/);
  expect(projects[0].featured).toBe(true);
  expect(projects.filter((p) => p.featured)).toHaveLength(1);
  expect(projects[0].description).toContain("18K MAU");
  expect(projects[0].description).toContain("10K listings");
});

test("selected work list", () => {
  expect(projects.map((p) => p.url)).toEqual([
    "https://colormp.com",
    "https://nft.flowverse.co",
    "https://www.youtube.com/watch?v=bqh3O8WMJgE",
    "https://github.com/bymi15/react-edit-text",
    "https://github.com/bymi15/express-typeorm-rest-boilerplate",
  ]);
});

test("first four projects have an optimisable image with alt text", () => {
  for (const p of projects.slice(0, 4)) {
    expect(p.image?.width, p.title).toBeGreaterThan(0);
    expect(p.imageAlt, p.title).toBeTruthy();
  }
});

test("urls are https except known legacy http sites", () => {
  const urls = [
    ...projects.map((p) => p.url),
    ...moreProjects.flatMap((p) => (p.url ? [p.url] : [])),
    ...experience.flatMap((e) => (e.url ? [e.url] : [])),
  ];
  const legacy = ["http://maplace.co", "http://uclks.org"];
  for (const u of urls) expect(u.startsWith("https://") || legacy.includes(u), u).toBe(true);
});

test("moreProjects: 10 entries, newest first", () => {
  expect(moreProjects).toHaveLength(10);
  const years = moreProjects.map((p) => p.year);
  expect([...years].sort((a, b) => b - a)).toEqual(years);
});

test("education", () => {
  expect(education.map((e) => e.institution)).toEqual(["University College London", "Bangkok Patana School"]);
  expect(education[0].detail).toBe("First Class Honours");
  expect(education[1].detail).toContain("40/45");
});

test("skills: four groups, no ratings", () => {
  expect(skills.map((g) => g.name)).toEqual(["Languages", "Frontend", "Backend & data", "Infra"]);
  for (const g of skills) expect(g.items.length).toBeGreaterThan(0);
});

test("site constants", () => {
  expect(site.name).toBe("Brian Min");
  expect(site.title).toBe("Lead Software Engineer at Squarepoint Capital");
  expect(site.resumeUrl).toBe("/storage/BrianMin_Resume.pdf");
  expect(site.formspreeUrl).toBe("https://formspree.io/mrgyvnnj");
  expect(site.links.linkedin).toBe("https://www.linkedin.com/in/bymi15/");
  expect(site.links.github).toBe("https://github.com/bymi15");
});
