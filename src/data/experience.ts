export type Role = { title: string; start: string; end: string; summary?: string };

export type Experience = {
  company: string;
  url?: string;
  location: string;
  start: string;
  end: string;
  /** Newest first. */
  roles: Role[];
};

export type EarlierRole = { company: string; title: string; dates: string; line: string };

/** Newest first. */
export const experience: Experience[] = [
  {
    company: "Squarepoint Capital",
    location: "London, UK",
    start: "Sep 2025",
    end: "Present",
    roles: [
      {
        title: "Lead Software Engineer",
        start: "Sep 2025",
        end: "Present",
        summary:
          "Managing a small team of engineers as their line manager and leading projects end to end, while building data-heavy internal full-stack web applications.",
      },
    ],
  },
  {
    company: "American Express",
    location: "London, UK",
    start: "Sep 2021",
    end: "Sep 2025",
    roles: [
      {
        title: "Senior Software Engineer",
        start: "Nov 2024",
        end: "Sep 2025",
        summary:
          "Led a team of engineers, drove system architecture design, delivered new features and enhancements to the platform, and mentored junior engineers.",
      },
      {
        title: "Software Engineer",
        start: "Jun 2022",
        end: "Nov 2024",
        summary:
          "Worked on distributed event-driven microservices with Go, PostgreSQL, Kafka, BDD testing and Kubernetes, and built internal UI applications with React, TypeScript, Node.js and MongoDB.",
      },
      { title: "Technology Graduate Engineer", start: "Sep 2021", end: "Jun 2022" },
      {
        title: "Technology Summer Intern",
        start: "Jul 2020",
        end: "Aug 2020",
        summary:
          "Built a React and Redux module for customer care professionals to find supplier information, with predictive search, infinite scrolling and lazy loading.",
      },
    ],
  },
  {
    company: "Flowverse",
    url: "https://nft.flowverse.co",
    location: "Remote",
    start: "Mar 2023",
    end: "Apr 2025",
    roles: [
      {
        title: "Technical Advisor & Lead Developer",
        start: "Mar 2023",
        end: "Apr 2025",
        summary:
          "Led development and maintenance of the Flowverse NFT platform and marketplace, implemented smart contracts, and gave technical guidance on new initiatives.",
      },
    ],
  },
];

export const earlier: EarlierRole[] = [
  {
    company: "UCL",
    title: "Senior Programming Tutor",
    dates: "Sep 2020 – Mar 2021",
    line: "Recruited, inducted and trained 24 programming tutors supporting first-year computer science students.",
  },
  {
    company: "Topolar",
    title: "Software Developer",
    dates: "Jul – Aug 2019",
    line: "Built a remote coding-tuition app with screen sharing, remote control and voice chat (React, Electron, Django, Docker).",
  },
  {
    company: "Republic of Korea Marine Corps",
    title: "Paratrooper",
    dates: "Aug 2017 – Apr 2019",
    line: "Rifleman and squad leader in the 21st Airborne Battalion.",
  },
  {
    company: "Maplace",
    title: "Web Developer",
    dates: "Oct 2016 – Jun 2017",
    line: "Built the pre-order landing page with PayPal payments.",
  },
];
