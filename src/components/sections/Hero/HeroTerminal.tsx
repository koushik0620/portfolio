import { Circle } from "lucide-react";

const lines = [
  "$ npm install",
  "✓ React",
  "✓ Next.js",
  "✓ TypeScript",
  "✓ Tailwind CSS",
  "✓ Framer Motion",
  "✓ Portfolio Ready",
];

export default function HeroTerminal() {
  return (
    <div
      className="
        w-[420px]
        overflow-hidden
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-950
        shadow-2xl
      "
    >
      {/* Header */}
      <div className="flex items-center gap-2 border-b border-zinc-800 p-4">
        <Circle className="h-3 w-3 fill-red-500 text-red-500" />
        <Circle className="h-3 w-3 fill-yellow-500 text-yellow-500" />
        <Circle className="h-3 w-3 fill-green-500 text-green-500" />

        <span className="ml-4 text-sm text-zinc-400">terminal</span>
      </div>

      {/* Terminal Body */}
      <div className="space-y-2 p-6 font-mono text-sm">
        {lines.map((line) => (
          <p key={line} className="text-green-400">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
