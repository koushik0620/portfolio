"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  return (
    <div
      className="
        rounded-3xl
        border
        border-border/60
        bg-background/60
        p-8
        backdrop-blur-xl
      "
    >
      <h3 className="text-2xl font-bold">Send me a message</h3>

      <p className="mt-2 text-muted-foreground">
        Have an idea or opportunity? I'd love to hear from you.
      </p>

      <form className="mt-8 space-y-5">
        <Input placeholder="Your Name" />

        <Input type="email" placeholder="Your Email" />

        <Input placeholder="Subject" />

        <Textarea placeholder="Tell me about your project..." rows={6} />

        <Button className="w-full">Send Message</Button>
      </form>
    </div>
  );
}
