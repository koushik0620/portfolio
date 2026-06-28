import { Project } from "@/types/projects";

export const projects: Project[] = [
  {
    id: 1,

    title: "AI Resume Builder",

    description:
      "Generate ATS-friendly resumes using AI with customizable templates, smart suggestions, and export options.",

    image: "/images/projects/placeholder.png",

    status: "In Progress",

    featured: true,

    github: "",

    live: "",

    caseStudy: "",

    year: "2026",

    category: "AI SaaS",

    technologies: ["Next.js", "React", "TypeScript", "Tailwind", "OpenAI"],
  },

  {
    id: 2,

    title: "Expense Tracker",

    description:
      "A personal finance dashboard with analytics, budgeting, recurring expenses, and reports.",

    image: "/images/projects/placeholder.png",

    status: "Coming Soon",

    featured: true,

    github: "",

    live: "",

    caseStudy: "",

    year: "2026",

    category: "Full Stack",

    technologies: ["React", "Node.js", "MongoDB", "Express"],
  },

  {
    id: 3,

    title: "AI Interview Coach",

    description:
      "Practice coding interviews with AI-generated questions, feedback, and personalized learning paths.",

    image: "/images/projects/placeholder.png",

    status: "Coming Soon",

    featured: true,

    github: "",

    live: "",

    caseStudy: "",

    year: "2026",

    category: "AI",

    technologies: ["Next.js", "OpenAI", "TypeScript"],
  },
];
