import { Badge } from "@/components/ui/badge";

interface Props {
  technologies: string[];
}

export default function ProjectTech({ technologies }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech) => (
        <Badge
          key={tech}
          variant="secondary"
          className="
            rounded-full
            px-3
            py-1
            transition-all
            hover:bg-primary/10
          "
        >
          {tech}
        </Badge>
      ))}
    </div>
  );
}
