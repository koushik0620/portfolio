import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Logo() {
  return (
    <Link href="/" className="text-2xl font-bold tracking-tight">
      {siteConfig.shortName}
    </Link>
  );
}
