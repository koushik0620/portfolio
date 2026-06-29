import Link from "next/link";
import { ArrowUpRight, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Project } from "@/types/projects";

interface Props {
  project: Project;
}

export default function ProjectActions({ project }: Props) {
  return (
    <div className="flex gap-3 pt-2">
      <Button asChild disabled={!project.live} className="flex-1">
        <Link
          href={project.live || "#"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>

      <Button asChild variant="outline" disabled={!project.github}>
        <Link href={project.github || "#"}>
          <GitBranch className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
}
