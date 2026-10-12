"use server";

import { sendEnquiryEmail } from "@/lib/email";
import {
  readFields,
  validateAcademyInterest,
  validateConsultation,
  type FieldErrors,
  type FormState,
} from "@/lib/enquiries";

// Spam protection: a hidden "website" field that people never see (bots fill it in),
// and a minimum time between the form loading and being submitted.
const HONEYPOT_FIELD = "website";
const STARTED_AT_FIELD = "startedAt";
const MIN_FILL_TIME_MS = 3000;

const DELIVERY_FAILED =
  "We couldn't send your request just now. Please try again in a moment, or message us on WhatsApp.";

function looksLikeSpam(formData: FormData) {
  const honeypot = formData.get(HONEYPOT_FIELD);
  if (typeof honeypot === "string" && honeypot.trim() !== "") return true;

  const startedAt = Number(formData.get(STARTED_AT_FIELD));
  return !startedAt || Date.now() - startedAt < MIN_FILL_TIME_MS;
}

async function handleSubmission(
  prev: FormState,
  formData: FormData,
  fields: readonly string[],
  validate: (values: Record<string, string>) => FieldErrors,
  buildEmail: (values: Record<string, string>) => Parameters<typeof sendEnquiryEmail>[0],
): Promise<FormState> {
  const submissionId = prev.submissionId + 1;

  // Pretend to succeed so bots get no signal to retry.
  if (looksLikeSpam(formData)) return { status: "success", submissionId };

  const values = readFields(formData, fields);
  const errors = validate(values);

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      errors,
      values,
      submissionId,
    };
  }

  const result = await sendEnquiryEmail(buildEmail(values));
  if (!result.ok) return { status: "error", message: DELIVERY_FAILED, values, submissionId };

  return { status: "success", submissionId };
}

const CONSULTATION_FIELDS = ["name", "phone", "email", "eventType", "eventDate", "message"] as const;

export async function submitConsultation(prev: FormState, formData: FormData) {
  return handleSubmission(prev, formData, CONSULTATION_FIELDS, validateConsultation, (v) => ({
    subject: `Consultation request — ${v.name} (${v.eventType})`,
    heading: "New consultation request",
    replyTo: v.email,
    rows: [
      ["Name", v.name],
      ["Phone", v.phone],
      ["Email", v.email],
      ["Event type", v.eventType],
      ["Event date", v.eventDate],
      ["Message", v.message],
    ],
  }));
}

const ACADEMY_FIELDS = ["name", "phone", "email", "interest", "message"] as const;

export async function registerAcademyInterest(prev: FormState, formData: FormData) {
  return handleSubmission(prev, formData, ACADEMY_FIELDS, validateAcademyInterest, (v) => ({
    subject: `Academy interest — ${v.name}`,
    heading: "New academy registration of interest",
    replyTo: v.email,
    rows: [
      ["Name", v.name],
      ["Phone", v.phone],
      ["Email", v.email],
      ["Interest", v.interest],
      ["Message", v.message],
    ],
  }));
}
