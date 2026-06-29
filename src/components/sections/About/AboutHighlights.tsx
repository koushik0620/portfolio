import { aboutData } from "@/data/about";

export default function AboutHighlights() {
  return (
    <div className="mt-12 grid grid-cols-2 gap-5">
      {aboutData.highlights.map((item) => (
        <div
          key={item.subtitle}
          className="
            rounded-3xl
            border
            bg-background/60
            p-6
            backdrop-blur-xl
            shadow-lg
            transition-transform
            duration-300
            hover:-translate-y-1
            hover:scale-[1.02]
          "
        >
          <div className="text-4xl font-black">{item.title}</div>

          <p className="mt-2 text-muted-foreground">{item.subtitle}</p>
        </div>
      ))}
    </div>
  );
}
