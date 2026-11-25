import type { ImageMetadata } from "astro";
import colorImg from "../assets/projects/colormp1.png";
import flowverseImg from "../assets/projects/flowversenft1.png";
import uniworldImg from "../assets/projects/uniworld1.png";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  url: string;
  image?: ImageMetadata;
  imageAlt?: string;
  featured?: boolean;
  extraLink?: { label: string; url: string };
};

export type MoreProject = { title: string; year: number; url?: string };

export const projects: Project[] = [
  {
    title: "Color",
    description:
      "The first IP marketplace and launchpad on Story mainnet, with 18K MAU and 10K listings.",
    tags: ["Story Protocol", "Solidity", "React", "Go", "MongoDB"],
    url: "https://colormp.com",
    image: colorImg,
    imageAlt: "Color marketplace home page listing top IP collections",
    featured: true,
  },
  {
    title: "Flowverse NFT Marketplace",
    description:
      "NFT marketplace and launchpad on Flow mainnet with over 50 collections and more than 10,000 sales.",
    tags: ["Flow", "Cadence", "React", "Node.js", "MongoDB"],
    url: "https://nft.flowverse.co",
    image: flowverseImg,
    imageAlt: "Flowverse marketplace showing Flow Ordinal Inscriptions collections",
  },
  {
    title: "Uniworld 3D Environment",
    description:
      "A 3D virtual space for university lectures, conferences and showcases, with networked real-time avatars, embedded slides and a web editor for building rooms.",
    tags: ["Unity", "C#", "Azure", "Node.js", "React"],
    url: "https://www.youtube.com/watch?v=bqh3O8WMJgE",
    image: uniworldImg,
    imageAlt: "Virtual lecture hall with an avatar beside a presentation screen",
    extraLink: { label: "Watch demo", url: "https://www.youtube.com/watch?v=bqh3O8WMJgE" },
  },
  {
    title: "react-edit-text",
    description:
      "Open-source, lightweight editable text component for React, with over 79K downloads on npm.",
    tags: ["React", "TypeScript", "Open source", "npm"],
    url: "https://github.com/bymi15/react-edit-text",
  },
  {
    title: "express-typeorm-rest-boilerplate",
    description: "Boilerplate for REST APIs with Express and TypeORM.",
    tags: ["Node.js", "Express", "TypeORM", "TypeScript"],
    url: "https://github.com/bymi15/express-typeorm-rest-boilerplate",
  },
];

/** Newest first. */
export const moreProjects: MoreProject[] = [
  { title: "NFTMarketFlow", year: 2022, url: "https://brianmin.com/nftmarketflow" },
  { title: "Real Estate Management System", year: 2021 },
  { title: "Job Trackify", year: 2020, url: "https://brianmin.com/jobtrackify" },
  { title: "Coding Academy Platform", year: 2019, url: "https://topolar.co.kr" },
  { title: "UCL Korean Society Forum", year: 2019, url: "http://uclks.org" },
  { title: "NHS Health Care App (What's The Plan)", year: 2017, url: "https://github.com/bymi15/NHS-WhatsThePlan" },
  { title: "E-Commerce Platform", year: 2017, url: "https://github.com/bymi15/ShoppingPlatform" },
  { title: "Maplace Pre-order Landing Page", year: 2016, url: "http://maplace.co" },
  { title: "Music TV", year: 2015, url: "https://devpost.com/software/music-tv-music-videos-for-the-masses-finally" },
  { title: "2D Helicopter Game", year: 2015, url: "https://github.com/bymi15/EngduinoCopter" },
];
