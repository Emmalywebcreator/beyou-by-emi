import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import ConsultationForm from "@/components/forms/ConsultationForm";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description: "Request a bespoke consultation with BEYOU by Emi.",
};

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
        <ConsultationForm />
      </div>
    </section>
  );
}
