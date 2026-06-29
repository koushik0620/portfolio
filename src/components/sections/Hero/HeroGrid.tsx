export default function HeroGrid() {
  return (
    <div
      aria-hidden
      className="
        pointer-events-none
        absolute
        inset-0
        -z-20
        opacity-30
        [background-size:40px_40px]
        [background-image:
          linear-gradient(to_right,rgba(120,120,120,.08)_1px,transparent_1px),
          linear-gradient(to_bottom,rgba(120,120,120,.08)_1px,transparent_1px)]
      "
    />
  );
}
