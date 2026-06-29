
import { Badge } from "@/components/ui/badge";
import { Clock3, CheckCircle2, Hammer } from "lucide-react";

interface Props {
  status: string;
}

export default function ProjectStatus({ status }: Props) {
  if (status === "Completed") {
    return (
      <Badge className="gap-1">
        <CheckCircle2 size={14} />
        Completed
      </Badge>
    );
  }

  if (status === "In Progress") {
    return (
      <Badge variant="secondary" className="gap-1">
        <Hammer size={14} />
        In Progress
      </Badge>
    );
  }

  return (
    <Badge variant="outline" className="gap-1">
      <Clock3 size={14} />
      Coming Soon
    </Badge>
  );
}
