import { heroData } from "@/data/hero";

export default function HeroStats() {
  return (
    <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl">
      {heroData.stats.map((stat) => (
        <div key={stat.label}>
          <div className="text-3xl font-bold">{stat.value}</div>

          <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
