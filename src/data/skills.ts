export type SkillGroup = { name: string; items: string[] };

export const skills: SkillGroup[] = [
  { name: "Languages", items: ["TypeScript", "JavaScript", "Go", "Python", "Java", "Solidity", "Cadence"] },
  { name: "Frontend", items: ["React", "Redux", "Tailwind"] },
  { name: "Backend & data", items: ["Node.js", "Kafka", "PostgreSQL", "MongoDB"] },
  { name: "Infra", items: ["Docker", "Kubernetes", "CI/CD"] },
];
