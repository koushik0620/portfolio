import Link from "next/link";
import { socials } from "@/constants/socials";

interface SocialLinksProps {
  className?: string;
}

export default function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-4 ${className ?? ""}`}>
      {socials.map((social) => {
        const Icon = social.icon;

        return (
          <Link
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
          >
            <Icon className="h-5 w-5 transition hover:scale-110" />
          </Link>
        );
      })}
    </div>
  );
}
