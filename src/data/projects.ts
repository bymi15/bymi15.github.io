import type { ImageMetadata } from "astro";

export type Shot = ImageMetadata;

const files = import.meta.glob<{ default: ImageMetadata }>("../assets/projects/*/*.png", { eager: true });

/** Screenshots in src/assets/projects/<prefix>/, in numeric order. Image 1 is the cover. */
export function shots(prefix: string): Shot[] {
  const num = (path: string) => Number(path.match(/(\d+)\.png$/)?.[1] ?? 0);
  const list = Object.keys(files)
    .filter((path) => path.split("/").at(-2) === prefix)
    .sort((a, b) => num(a) - num(b))
    .map((path) => files[path].default);
  if (!list.length) throw new Error(`No screenshots for "${prefix}"`);
  return list;
}

export type Project = {
  title: string;
  description: string;
  tags: string[];
  url: string;
  /** First image is the card cover. */
  gallery?: Shot[];
  imageAlt?: string;
  featured?: boolean;
  extraLink?: { label: string; url: string };
};

export type MoreProject = { title: string; year: number; url?: string; gallery?: Shot[] };

export const projects: Project[] = [
  {
    title: "Color",
    description:
      "The first IP marketplace and launchpad on Story mainnet, with 18K MAU and 10K listings.",
    tags: ["Story Protocol", "Solidity", "React", "Go", "MongoDB"],
    url: "https://colormp.com",
    gallery: shots("colormp"),
    imageAlt: "Color marketplace home page listing top IP collections",
    featured: true,
  },
  {
    title: "Flowverse NFT Marketplace",
    description:
      "NFT marketplace and launchpad on Flow mainnet with over 50 collections and more than 10,000 sales.",
    tags: ["Flow", "Cadence", "React", "Node.js", "MongoDB"],
    url: "https://nft.flowverse.co",
    gallery: shots("flowversenft"),
    imageAlt: "Flowverse marketplace showing Flow Ordinal Inscriptions collections",
  },
  {
    title: "Uniworld 3D Environment",
    description:
      "A 3D virtual space for university lectures, conferences and showcases, with networked real-time avatars, embedded slides and a web editor for building rooms.",
    tags: ["Unity", "C#", "Azure", "Node.js", "React"],
    url: "https://www.youtube.com/watch?v=bqh3O8WMJgE",
    gallery: shots("uniworld"),
    imageAlt: "Virtual lecture hall with an avatar beside a presentation screen",
    extraLink: { label: "Watch demo", url: "https://www.youtube.com/watch?v=bqh3O8WMJgE" },
  },
  {
    title: "react-edit-text",
    description:
      "Open-source, lightweight editable text component for React, with over 79K downloads on npm.",
    tags: ["React", "TypeScript", "Open source", "npm"],
    url: "https://github.com/bymi15/react-edit-text",
    gallery: shots("react-edit-text"),
    imageAlt: "react-edit-text demo",
  },
  {
    title: "Job Trackify",
    description:
      "A platform for managing and organising job applications, notes and interview processes on an interactive Kanban board.",
    tags: ["React", "TypeScript", "Redux", "Node.js", "Express", "MongoDB"],
    url: "https://brianmin.com/jobtrackify",
    gallery: shots("jobtrackify"),
    imageAlt: "Job Trackify welcome page",
  },
];

/** Newest first. */
export const moreProjects: MoreProject[] = [
  { title: "NFTMarketFlow", year: 2022, url: "https://brianmin.com/nftmarketflow", gallery: shots("nftmarketflow") },
  { title: "Real Estate Management System", year: 2021, gallery: shots("property") },
  {
    title: "express-typeorm-rest-boilerplate",
    year: 2020,
    url: "https://github.com/bymi15/express-typeorm-rest-boilerplate",
  },
  { title: "OTMEDU College Website", year: 2020, gallery: shots("otmedu") },
  { title: "Coding Academy Platform", year: 2019, gallery: shots("tocol") },
  { title: "UCL Korean Society Forum", year: 2019, gallery: shots("uclks") },
  { title: "NHS Health Care App (What's The Plan)", year: 2017, url: "https://github.com/bymi15/NHS-WhatsThePlan", gallery: shots("nhs") },
  { title: "E-Commerce Platform", year: 2017, url: "https://github.com/bymi15/ShoppingPlatform", gallery: shots("ecom") },
  { title: "Maplace Pre-order Landing Page", year: 2016, url: "http://maplace.co", gallery: shots("maplace") },
  { title: "Music TV", year: 2015, url: "https://devpost.com/software/music-tv-music-videos-for-the-masses-finally", gallery: shots("musicTV") },
  { title: "2D Helicopter Game", year: 2015, url: "https://github.com/bymi15/EngduinoCopter", gallery: shots("copter") },
];
