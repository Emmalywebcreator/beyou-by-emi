"use client";

import { useActionState } from "react";
import { submitConsultation } from "@/app/actions/enquiries";
import FormShell from "@/components/forms/FormShell";
import { SelectField, TextAreaField, TextField } from "@/components/forms/Field";
import { eventTypes, initialFormState, MAX_MESSAGE_LENGTH } from "@/lib/enquiries";

export default function ConsultationForm() {
  const [state, formAction, pending] = useActionState(submitConsultation, initialFormState);
  const v = state.values ?? {};
  const e = state.errors ?? {};

  return (
    <FormShell
      state={state}
      formAction={formAction}
      pending={pending}
      submitLabel="Request Consultation"
      successMessage="Your request has been received. Our team will be in touch within two working days to arrange your consultation."
    >
      <TextField id="name" label="Full name" autoComplete="name" required defaultValue={v.name} error={e.name} />
      <TextField id="phone" label="Phone" type="tel" autoComplete="tel" required defaultValue={v.phone} error={e.phone} />
      <TextField id="email" label="Email" type="email" autoComplete="email" required defaultValue={v.email} error={e.email} />
      <SelectField
        id="eventType"
        label="Event type"
        options={eventTypes}
        required
        defaultValue={v.eventType ?? ""}
        error={e.eventType}
      />
      <TextField id="eventDate" label="Event date" type="date" className="sm:col-span-2" defaultValue={v.eventDate} error={e.eventDate} />
      <TextAreaField
        id="message"
        label="Message"
        placeholder="Tell us about your vision, colours, guest count, or anything else."
        maxLength={MAX_MESSAGE_LENGTH}
        className="sm:col-span-2"
        defaultValue={v.message}
        error={e.message}
      />
    </FormShell>
  );
}
