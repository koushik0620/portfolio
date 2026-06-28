import Link from "next/link";

import PrimaryButton from "@/components/common/PrimaryButton";
import { heroData } from "@/data/hero";

export default function HeroCTA() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <PrimaryButton size="lg" asChild>
        <Link href={heroData.primaryButton.href}>
          {heroData.primaryButton.text}
        </Link>
      </PrimaryButton>

      <PrimaryButton variant="outline" size="lg" asChild>
        <Link href={heroData.secondaryButton.href} target="_blank">
          {heroData.secondaryButton.text}
        </Link>
      </PrimaryButton>
    </div>
  );
}
