"use client";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import ContactForm from "./ContactForm";
import ContactHeader from "./ContactHeader";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
    <Section id="contact">
      <Container>
        <ContactHeader />

        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          <ContactForm />

          <ContactInfo />
        </div>
      </Container>
    </Section>
  );
}
