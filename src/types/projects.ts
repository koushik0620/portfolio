export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;

  status: "Coming Soon" | "In Progress" | "Completed";

  featured: boolean;

  github?: string;
  live?: string;
  caseStudy?: string;

  technologies: string[];

  year: string;
  category: string;
}
