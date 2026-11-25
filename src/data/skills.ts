export type SkillGroup = { name: string; items: string[] };

export const skills: SkillGroup[] = [
  { name: "Languages", items: ["TypeScript", "JavaScript", "Go", "Python", "Java", "Solidity", "Cadence"] },
  { name: "Frontend", items: ["React", "Next.js", "Redux", "MUI", "Tailwind"] },
  { name: "Backend & data", items: ["Node.js", "Django", "FastAPI", "GraphQL", "Kafka", "PostgreSQL", "MongoDB"] },
  { name: "Infra", items: ["Docker", "Kubernetes", "CI/CD"] },
];
