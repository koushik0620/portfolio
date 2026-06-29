export default function HeroStatusCard() {
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
        {/* Status Dot */}
        <div className="relative flex h-3 w-3 items-center justify-center">
          <span className="absolute inline-flex h-3 w-3 rounded-full bg-green-500 opacity-75 animate-ping" />

          <span className="relative h-3 w-3 rounded-full bg-green-500" />
        </div>

        <div>
          <p className="font-semibold">Available for Work</p>

          <p className="text-sm text-muted-foreground">
            Open to Full-Time & Freelance
          </p>
        </div>
      </div>
    </div>
  );
}
