interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-bold tracking-tight md:text-5xl">{title}</h2>

      {subtitle && (
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}
