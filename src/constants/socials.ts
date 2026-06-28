import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import { siteConfig } from "@/config/site";

export const socials = [
  {
    name: "GitHub",
    href: siteConfig.links.github,
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: siteConfig.links.linkedin,
    icon: FaLinkedin,
  },
  {
    name: "Email",
    href: siteConfig.links.email,
    icon: FaEnvelope,
  },
];
