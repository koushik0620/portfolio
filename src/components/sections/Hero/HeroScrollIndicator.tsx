import { ChevronDown, Mouse } from "lucide-react";

export default function HeroScrollIndicator() {
  return (
    <div
      className="
        absolute
        bottom-8
        left-1/2
        hidden
        -translate-x-1/2
        flex-col
        items-center
        gap-2
        text-muted-foreground
        lg:flex
        opacity-0
        animate-fade-in
        animation-delay-[0.8s]
      "
    >
      <Mouse className="h-6 w-6" />

      <div className="animate-bounce">
        <ChevronDown className="h-5 w-5" />
      </div>
    </div>
  );
}
