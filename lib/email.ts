import { Resend } from "resend";

type EnquiryEmail = {
  subject: string;
  heading: string;
  replyTo: string;
  rows: [label: string, value: string][];
};

export type SendResult = { ok: true } | { ok: false; reason: "not-configured" | "send-failed" };

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

function renderHtml({ heading, rows }: EnquiryEmail) {
  const body = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 16px 10px 0;vertical-align:top;color:#6b6b6b;font-size:12px;letter-spacing:.12em;text-transform:uppercase;white-space:nowrap">${escapeHtml(label)}</td>
          <td style="padding:10px 0;color:#111111;font-size:15px;line-height:1.5;white-space:pre-wrap">${escapeHtml(value || "—")}</td>
        </tr>`,
    )
    .join("");

  return `
    <div style="background:#FAF7F2;padding:32px 16px;font-family:Helvetica,Arial,sans-serif">
      <div style="max-width:560px;margin:0 auto;background:#ffffff;padding:32px;border-top:3px solid #C9A96E">
        <p style="margin:0 0 4px;color:#C9A96E;font-size:11px;letter-spacing:.3em;text-transform:uppercase">BEYOU by Emi</p>
        <h1 style="margin:0 0 24px;font-family:Georgia,serif;font-weight:normal;font-size:26px;color:#111111">${escapeHtml(heading)}</h1>
        <table role="presentation" style="width:100%;border-collapse:collapse">${body}</table>
        <p style="margin:28px 0 0;color:#6b6b6b;font-size:12px">Reply to this email to respond directly to the sender.</p>
      </div>
    </div>`;
}

function renderText({ heading, rows }: EnquiryEmail) {
  return [heading, "", ...rows.map(([label, value]) => `${label}: ${value || "—"}`)].join("\n");
}

export async function sendEnquiryEmail(email: EnquiryEmail): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO_EMAIL;
  const from = process.env.ENQUIRY_FROM_EMAIL || "BEYOU by Emi <onboarding@resend.dev>";

  if (!apiKey || !to) {
    console.warn(
      `[enquiries] Email not configured (set RESEND_API_KEY and ENQUIRY_TO_EMAIL). Unsent enquiry:\n${renderText(email)}`,
    );
    return { ok: false, reason: "not-configured" };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email.replyTo,
      subject: email.subject,
      html: renderHtml(email),
      text: renderText(email),
    });

    if (error) {
      console.error("[enquiries] Resend rejected the email:", error);
      return { ok: false, reason: "send-failed" };
    }
    return { ok: true };
  } catch (error) {
    console.error("[enquiries] Failed to send email:", error);
    return { ok: false, reason: "send-failed" };
  }
}
