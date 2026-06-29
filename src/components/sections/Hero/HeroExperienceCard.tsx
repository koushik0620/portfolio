import { Briefcase } from "lucide-react";

export default function HeroExperienceCard() {
  return (
    <div
      className="
        rounded-2xl
        border
        border-border/60
        bg-background/80
        p-5
        shadow-xl
        backdrop-blur-sm
        md:backdrop-blur-xl
      "
    >
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-primary/10 p-2">
          <Briefcase className="h-5 w-5 text-primary" />
        </div>

        <div>
          <p className="font-semibold">Experience</p>

          <p className="text-sm text-muted-foreground">4+ Years</p>
        </div>
      </div>
    </div>
  );
}
