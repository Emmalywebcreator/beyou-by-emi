import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

const control =
  "mt-2 block w-full rounded-none border-0 border-b bg-transparent px-0 py-3 text-base text-ink placeholder:text-ink/35 focus:outline-none focus:ring-0";

const controlBorder = (error?: string) =>
  error ? "border-red-700 focus:border-red-700" : "border-ink/25 focus:border-gold";

function Label({ htmlFor, label, required }: { htmlFor: string; label: string; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="text-[0.7rem] font-medium uppercase tracking-[0.25em] text-ink/70">
      {label}
      {required && <span className="text-gold"> *</span>}
    </label>
  );
}

function ErrorText({ id, error }: { id: string; error?: string }) {
  if (!error) return null;
  return (
    <p id={`${id}-error`} className="mt-2 text-sm text-red-700">
      {error}
    </p>
  );
}

const errorProps = (id: string, error?: string) =>
  error ? { "aria-invalid": true, "aria-describedby": `${id}-error` } : {};

type Base = { id: string; label: string; error?: string; className?: string };

export function TextField({ id, label, error, className = "", ...props }: Base & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={className}>
      <Label htmlFor={id} label={label} required={props.required} />
      <input id={id} name={id} className={`${control} ${controlBorder(error)}`} {...errorProps(id, error)} {...props} />
      <ErrorText id={id} error={error} />
    </div>
  );
}

export function SelectField({
  id,
  label,
  options,
  error,
  placeholder = "Please select",
  className = "",
  ...props
}: Base & { options: readonly string[]; placeholder?: string } & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className={className}>
      <Label htmlFor={id} label={label} required={props.required} />
      <select
        id={id}
        name={id}
        defaultValue=""
        className={`${control} ${controlBorder(error)} appearance-none`}
        {...errorProps(id, error)}
        {...props}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ErrorText id={id} error={error} />
    </div>
  );
}

export function TextAreaField({ id, label, error, className = "", ...props }: Base & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div className={className}>
      <Label htmlFor={id} label={label} required={props.required} />
      <textarea
        id={id}
        name={id}
        rows={5}
        className={`${control} ${controlBorder(error)} resize-y`}
        {...errorProps(id, error)}
        {...props}
      />
      <ErrorText id={id} error={error} />
    </div>
  );
}
