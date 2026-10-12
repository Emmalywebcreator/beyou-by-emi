"use client";

import { useEffect, useRef } from "react";
import { WhatsAppIcon } from "@/components/icons";
import type { FormState } from "@/lib/enquiries";
import { whatsappUrl } from "@/lib/site";

type FormShellProps = {
  state: FormState;
  formAction: (formData: FormData) => void;
  pending: boolean;
  submitLabel: string;
  successMessage: string;
  children: React.ReactNode;
};

export default function FormShell({
  state,
  formAction,
  pending,
  submitLabel,
  successMessage,
  children,
}: FormShellProps) {
  const startedAt = useRef(0);
  const startedAtInput = useRef<HTMLInputElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  // Record when the form first became interactive (checked server-side to filter
  // bots). Kept across re-mounts so correcting an error isn't mistaken for a bot.
  useEffect(() => {
    if (!startedAt.current) startedAt.current = Date.now();
    if (startedAtInput.current) startedAtInput.current.value = String(startedAt.current);
  }, [state.submissionId]);

  // Move focus to the result so screen-reader and keyboard users hear it.
  useEffect(() => {
    if (state.status !== "idle") statusRef.current?.focus();
  }, [state.status, state.submissionId]);

  if (state.status === "success") {
    return (
      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        className="border border-gold/60 px-6 py-12 text-center outline-none sm:px-10"
      >
        <p className="font-serif text-3xl font-light">Thank you.</p>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink/70">{successMessage}</p>
      </div>
    );
  }

  return (
    // Re-keying after each submission re-applies the echoed values as defaults,
    // so nothing the visitor typed is lost when validation fails.
    <form key={state.submissionId} action={formAction} noValidate className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
      {children}

      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <input ref={startedAtInput} type="hidden" name="startedAt" defaultValue="" />

      {state.status === "error" && state.message && (
        <div
          ref={statusRef}
          tabIndex={-1}
          role="alert"
          className="border-l-2 border-red-700 bg-red-700/5 px-5 py-4 text-sm text-ink outline-none sm:col-span-2"
        >
          <p>{state.message}</p>
          {!state.errors && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 border-b border-gold pb-0.5"
            >
              <WhatsAppIcon className="h-4 w-4 text-gold" />
              Message us on WhatsApp
            </a>
          )}
        </div>
      )}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex min-h-12 w-full items-center justify-center bg-ink px-10 py-3.5 text-[0.7rem] font-medium uppercase tracking-[0.25em] text-ivory transition-colors duration-300 hover:bg-gold hover:text-ink disabled:cursor-wait disabled:opacity-60 sm:w-auto"
        >
          {pending ? "Sending…" : submitLabel}
        </button>
      </div>
    </form>
  );
}
