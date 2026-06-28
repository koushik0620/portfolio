"use client";

interface Props {
  icon: React.ReactNode;
  title: string;
  value: string;
  success?: boolean;
}

export default function ContactCard({ icon, title, value, success }: Props) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-border/60
        bg-background/60
        p-5
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-primary/30
        hover:shadow-xl
      "
    >
      <div className="flex items-center gap-4">
        <div
          className={`
            flex h-12 w-12 items-center justify-center rounded-2xl
            ${
              success
                ? "bg-green-500/15 text-green-500"
                : "bg-primary/10 text-primary"
            }
          `}
        >
          {icon}
        </div>

        <div>
          <p className="text-sm text-muted-foreground">{title}</p>

          <p className="font-semibold">{value}</p>
        </div>
      </div>
    </div>
  );
}
