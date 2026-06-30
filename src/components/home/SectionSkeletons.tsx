import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { Skeleton } from "@/components/ui/skeleton";

function SectionHeaderSkeleton() {
  return (
    <div className="mx-auto mb-20 max-w-3xl text-center">
      <Skeleton className="mx-auto h-9 w-32 rounded-full" />
      <Skeleton className="mx-auto mt-8 h-14 w-full max-w-lg" />
      <Skeleton className="mx-auto mt-4 h-14 w-full max-w-md" />
      <Skeleton className="mx-auto mt-8 h-6 w-full max-w-2xl" />
      <Skeleton className="mx-auto mt-3 h-6 w-full max-w-xl" />
    </div>
  );
}

function CardSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-3xl border border-border/50 bg-background/70 p-6 shadow-lg md:p-10 ${className ?? ""}`}
    >
      <div className="flex items-center gap-4">
        <Skeleton className="h-12 w-12 shrink-0 rounded-xl" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-7 w-2/3" />
          <Skeleton className="h-5 w-1/3" />
        </div>
      </div>
      <Skeleton className="mt-6 h-4 w-full" />
      <Skeleton className="mt-3 h-4 w-full" />
      <Skeleton className="mt-3 h-4 w-4/5" />
      <div className="mt-6 flex flex-wrap gap-2">
        <Skeleton className="h-7 w-16 rounded-full" />
        <Skeleton className="h-7 w-20 rounded-full" />
        <Skeleton className="h-7 w-14 rounded-full" />
      </div>
    </div>
  );
}

function ProjectCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-3xl border border-border/50 bg-background/60 shadow-lg">
      <Skeleton className="aspect-video w-full rounded-none" />
      <div className="space-y-4 p-6">
        <Skeleton className="h-7 w-2/3" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
        <div className="flex flex-wrap gap-2 pt-2">
          <Skeleton className="h-6 w-14 rounded-full" />
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-12 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export function AboutSectionSkeleton() {
  return (
    <Section className="relative overflow-hidden py-24 lg:py-32">
      <Container>
        <SectionHeaderSkeleton />
        <div className="grid items-start gap-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <Skeleton className="h-12 w-full max-w-md" />
            <Skeleton className="h-12 w-full max-w-sm" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-4/5" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-3/4" />
            <div className="grid gap-4 pt-4 sm:grid-cols-2">
              <Skeleton className="h-24 rounded-2xl" />
              <Skeleton className="h-24 rounded-2xl" />
            </div>
          </div>
          <div className="space-y-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex gap-4">
                <Skeleton className="h-10 w-10 shrink-0 rounded-full" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-5 w-1/3" />
                  <Skeleton className="h-4 w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function ExperienceSectionSkeleton() {
  return (
    <Section className="relative overflow-hidden py-28 lg:py-36">
      <Container>
        <SectionHeaderSkeleton />
        <div className="space-y-12">
          <CardSkeleton />
          <CardSkeleton />
        </div>
      </Container>
    </Section>
  );
}

export function ProjectsSectionSkeleton() {
  return (
    <Section className="relative overflow-hidden py-28 lg:py-36">
      <Container>
        <SectionHeaderSkeleton />
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          <ProjectCardSkeleton />
          <ProjectCardSkeleton />
          <ProjectCardSkeleton />
        </div>
      </Container>
    </Section>
  );
}

export function SkillsSectionSkeleton() {
  return (
    <Section>
      <Container>
        <SectionHeaderSkeleton />
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-3xl border border-border/50 bg-background/70 p-6 shadow-lg"
            >
              <Skeleton className="h-6 w-1/2" />
              <div className="mt-6 flex flex-wrap gap-2">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Skeleton key={j} className="h-8 w-20 rounded-full" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function ContactSectionSkeleton() {
  return (
    <Section>
      <Container>
        <SectionHeaderSkeleton />
        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          <div className="space-y-6 rounded-3xl border border-border/50 bg-background/70 p-8 shadow-lg">
            <Skeleton className="h-11 w-full rounded-lg" />
            <Skeleton className="h-11 w-full rounded-lg" />
            <Skeleton className="h-11 w-full rounded-lg" />
            <Skeleton className="h-32 w-full rounded-lg" />
            <Skeleton className="h-11 w-32 rounded-lg" />
          </div>
          <div className="space-y-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-2xl border border-border/50 p-6"
              >
                <Skeleton className="h-12 w-12 shrink-0 rounded-xl" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-1/4" />
                  <Skeleton className="h-5 w-2/3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
