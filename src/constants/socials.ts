import { ExternalLink, Link2, Mail } from "lucide-react";

import { siteConfig } from "@/config/site";

export const socials = [
  {
    name: "GitHub",
    href: siteConfig.links.github,
    icon: ExternalLink,
  },
  {
    name: "LinkedIn",
    href: siteConfig.links.linkedin,
    icon: Link2,
  },
  {
    name: "Email",
    href: siteConfig.links.email,
    icon: Mail,
  },
];
