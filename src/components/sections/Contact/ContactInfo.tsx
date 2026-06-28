"use client";

import { Mail, MapPin, Clock3, BadgeCheck } from "lucide-react";

import { contact } from "@/data/contact";
import ContactCard from "./ContactCard";
import ContactSocials from "./ContactSocials";



export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <ContactCard
        icon={<BadgeCheck className="h-5 w-5" />}
        title="Availability"
        value={contact.availability}
        success
      />

      <ContactCard
        icon={<Mail className="h-5 w-5" />}
        title="Email"
        value={contact.email}
      />

      <ContactCard
        icon={<MapPin className="h-5 w-5" />}
        title="Location"
        value={contact.location}
      />

      <ContactCard
        icon={<Clock3 className="h-5 w-5" />}
        title="Response Time"
        value={contact.responseTime}
      />

      <ContactSocials />
    </div>
  );
}
