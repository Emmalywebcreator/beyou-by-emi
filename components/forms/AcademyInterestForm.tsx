"use client";

import { useActionState } from "react";
import { registerAcademyInterest } from "@/app/actions/enquiries";
import FormShell from "@/components/forms/FormShell";
import { SelectField, TextAreaField, TextField } from "@/components/forms/Field";
import { academyInterests, initialFormState, MAX_MESSAGE_LENGTH } from "@/lib/enquiries";

export default function AcademyInterestForm() {
  const [state, formAction, pending] = useActionState(registerAcademyInterest, initialFormState);
  const v = state.values ?? {};
  const e = state.errors ?? {};

  return (
    <FormShell
      state={state}
      formAction={formAction}
      pending={pending}
      submitLabel="Register Interest"
      successMessage="Thank you for your interest. We will contact you as soon as admissions open."
    >
      <TextField id="name" label="Full name" autoComplete="name" required defaultValue={v.name} error={e.name} />
      <TextField id="phone" label="Phone" type="tel" autoComplete="tel" required defaultValue={v.phone} error={e.phone} />
      <TextField id="email" label="Email" type="email" autoComplete="email" required defaultValue={v.email} error={e.email} />
      <SelectField id="interest" label="Area of interest" options={academyInterests} defaultValue={v.interest ?? ""} error={e.interest} />
      <TextAreaField
        id="message"
        label="Message"
        placeholder="Tell us about your experience and goals."
        maxLength={MAX_MESSAGE_LENGTH}
        className="sm:col-span-2"
        defaultValue={v.message}
        error={e.message}
      />
    </FormShell>
  );
}
