// Shared form definitions and validation for the consultation and academy
// forms. Used by the server actions (authoritative) and the form components.

export const eventTypes = [
  "White wedding",
  "Traditional wedding",
  "Aso ebi (family & friends)",
  "Engagement / introduction",
  "Evening / red carpet",
  "Other",
] as const;

export const academyInterests = [
  "Beginner fashion design",
  "Advanced tailoring",
  "Bridal couture",
  "Not sure yet",
] as const;

export type FieldErrors = Partial<Record<string, string>>;

export type FormState = {
  status: "idle" | "success" | "error";
  /** Form-level message, e.g. when delivery fails. */
  message?: string;
  errors?: FieldErrors;
  /** Submitted values, echoed back so the form keeps them after an error. */
  values?: Record<string, string>;
  /** Increments on every submission so the form can re-mount with fresh defaults. */
  submissionId: number;
};

export const initialFormState: FormState = { status: "idle", submissionId: 0 };

export const MAX_MESSAGE_LENGTH = 2000;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^\+?[\d\s()-]{7,20}$/;

export function readFields(formData: FormData, names: readonly string[]) {
  return Object.fromEntries(
    names.map((name) => {
      const value = formData.get(name);
      return [name, typeof value === "string" ? value.trim() : ""];
    }),
  ) as Record<string, string>;
}

function validateContact(values: Record<string, string>, errors: FieldErrors) {
  if (values.name.length < 2) errors.name = "Please enter your full name.";
  else if (values.name.length > 100) errors.name = "Please keep your name under 100 characters.";

  const digits = values.phone.replace(/\D/g, "");
  if (!values.phone) errors.phone = "Please enter your phone number.";
  else if (!PHONE_PATTERN.test(values.phone) || digits.length < 7)
    errors.phone = "Please enter a valid phone number, e.g. +234 803 000 0000.";

  if (!values.email) errors.email = "Please enter your email address.";
  else if (values.email.length > 254 || !EMAIL_PATTERN.test(values.email))
    errors.email = "Please enter a valid email address.";

  if (values.message.length > MAX_MESSAGE_LENGTH)
    errors.message = `Please keep your message under ${MAX_MESSAGE_LENGTH} characters.`;
}

export function validateConsultation(values: Record<string, string>): FieldErrors {
  const errors: FieldErrors = {};
  validateContact(values, errors);

  if (!(eventTypes as readonly string[]).includes(values.eventType))
    errors.eventType = "Please choose an event type.";

  if (values.eventDate) {
    const date = new Date(`${values.eventDate}T00:00:00Z`);
    const yesterday = Date.now() - 24 * 60 * 60 * 1000;
    if (Number.isNaN(date.getTime())) errors.eventDate = "Please enter a valid date.";
    else if (date.getTime() < yesterday) errors.eventDate = "Please choose a date in the future.";
  }

  return errors;
}

export function validateAcademyInterest(values: Record<string, string>): FieldErrors {
  const errors: FieldErrors = {};
  validateContact(values, errors);

  if (values.interest && !(academyInterests as readonly string[]).includes(values.interest))
    errors.interest = "Please choose an option from the list.";

  return errors;
}
