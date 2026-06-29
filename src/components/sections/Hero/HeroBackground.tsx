export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
      {/* Left Glow */}
      <div
        className="
          absolute
          -left-24
          top-20
          h-72
          w-72
          rounded-full
          bg-violet-500/20
          blur-3xl

          md:h-[420px]
          md:w-[420px]
          md:blur-[100px]
        "
      />

      {/* Center Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-80
          w-80
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-500/20
          blur-3xl

          md:h-[500px]
          md:w-[500px]
          md:blur-[120px]
        "
      />

      {/* Right Glow */}
      <div
        className="
          absolute
          -right-20
          bottom-10
          h-64
          w-64
          rounded-full
          bg-fuchsia-500/20
          blur-3xl

          md:h-[380px]
          md:w-[380px]
          md:blur-[100px]
        "
      />

      {/* Top Accent Glow */}
      <div
        className="
          absolute
          left-1/2
          top-0
          h-40
          w-40
          -translate-x-1/2
          rounded-full
          bg-primary/10
          blur-3xl
        "
      />

      {/* Radial Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.12)_100%)]
        "
      />

      {/* Bottom Fade */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-40
          bg-gradient-to-t
          from-background
          to-transparent
        "
      />
    </div>
  );
}
