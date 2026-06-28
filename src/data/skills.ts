import { Code2, Database, Smartphone, Sparkles, Wrench } from "lucide-react";

export const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Shadcn UI",
      "Framer Motion",
    ],
  },

  {
    title: "Backend",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    skills: [
      "Node.js",
      "Express",
      "REST APIs",
      "PostgreSQL",
      "MongoDB",
      "Firebase",
    ],
  },

  {
    title: "Mobile",
    icon: Smartphone,
    color: "from-purple-500 to-pink-500",
    skills: ["Kotlin", "Jetpack Compose", "Compose Multiplatform", "Android"],
  },

  {
    title: "AI",
    icon: Sparkles,
    color: "from-orange-500 to-red-500",
    skills: ["OpenAI", "Prompt Engineering", "AI Automation", "LLMs"],
  },

  {
    title: "Tools",
    icon: Wrench,
    color: "from-indigo-500 to-violet-500",
    skills: ["Git", "GitHub", "Docker", "Linux", "VS Code", "Figma"],
  },
];
