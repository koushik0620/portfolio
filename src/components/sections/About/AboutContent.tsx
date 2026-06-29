import { aboutData } from "@/data/about";

import AboutHighlights from "./AboutHighlights";

export default function AboutContent() {
  return (
    <div className="max-w-2xl">
      <h2 className="mt-6 text-5xl font-black leading-tight tracking-tight">
        {aboutData.heading}
      </h2>

      <p className="mt-8 text-lg leading-8 text-muted-foreground">
        {aboutData.description}
      </p>

      <p className="mt-6 text-lg leading-8 text-muted-foreground">
        {aboutData.description2}
      </p>

      <div>
        <AboutHighlights />
      </div>
    </div>
  );
}
