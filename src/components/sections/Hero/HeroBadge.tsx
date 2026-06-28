import { Briefcase } from "lucide-react";

export default function HeroBadge() {
  return (
    <div
      className="
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        px-4
        py-2
        text-sm
      "
    >
      <Briefcase size={16} />
      Available for opportunities
    </div>
  );
}
