"use client";

import Container from "../Container";
import FooterBottom from "./FooterBottom";
import FooterCTA from "./FooterCTA";
import FooterLinks from "./FooterLinks";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/50 bg-background">
      <Container>
        <FooterCTA />

        <div className="my-16 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <FooterLinks />

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <FooterBottom />
      </Container>
    </footer>
  );
}
