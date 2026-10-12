"use client";

import { useState } from "react";
import { WhatsAppIcon } from "@/components/icons";
import { whatsappUrl } from "@/lib/site";

type FormShellProps = {
  submitLabel: string;
  children: React.ReactNode;
};

// UI-only form wrapper: there is no backend yet, so submitting shows a notice
// pointing visitors to WhatsApp instead of sending data anywhere.
export default function FormShell({ submitLabel, children }: FormShellProps) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div role="status" className="border border-gold/60 px-6 py-12 text-center sm:px-10">
        <p className="font-serif text-3xl font-light">Thank you.</p>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink/70">
          Online requests are launching soon. In the meantime, please send us a message on
          WhatsApp and our team will respond personally.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-3 border-b border-gold pb-1 text-sm"
        >
          <WhatsAppIcon className="h-5 w-5 text-gold" />
          Message us on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
      className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2"
    >
      {children}
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="inline-flex min-h-12 w-full items-center justify-center bg-ink px-10 py-3.5 text-[0.7rem] font-medium uppercase tracking-[0.25em] text-ivory transition-colors duration-300 hover:bg-gold hover:text-ink sm:w-auto"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
