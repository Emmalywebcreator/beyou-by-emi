import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import FormShell from "@/components/forms/FormShell";
import { SelectField, TextAreaField, TextField } from "@/components/forms/Field";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description: "Request a bespoke consultation with BEYOU by Emi.",
};

const eventTypes = [
  "White wedding",
  "Traditional wedding",
  "Aso ebi (family & friends)",
  "Engagement / introduction",
  "Evening / red carpet",
  "Other",
] as const;

export default function BookConsultationPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 md:px-10 md:py-28">
      <SectionTitle
        as="h1"
        eyebrow="Bespoke Appointments"
        title="Book a Consultation"
        intro="Share a few details about your occasion and our team will be in touch to arrange your appointment, in the studio or by video call."
      />
      <div className="mt-16">
        <FormShell submitLabel="Request Consultation">
          <TextField id="name" label="Full name" autoComplete="name" required />
          <TextField id="phone" label="Phone" type="tel" autoComplete="tel" required />
          <TextField id="email" label="Email" type="email" autoComplete="email" required />
          <SelectField id="eventType" label="Event type" options={eventTypes} required />
          <TextField id="eventDate" label="Event date" type="date" className="sm:col-span-2" />
          <TextAreaField
            id="message"
            label="Message"
            placeholder="Tell us about your vision, colours, guest count, or anything else."
            className="sm:col-span-2"
          />
        </FormShell>
      </div>
    </section>
  );
}
