import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

const control =
  "mt-2 block w-full rounded-none border-0 border-b border-ink/25 bg-transparent px-0 py-3 text-base text-ink placeholder:text-ink/35 focus:border-gold focus:outline-none focus:ring-0";

function Label({ htmlFor, label, required }: { htmlFor: string; label: string; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="text-[0.7rem] font-medium uppercase tracking-[0.25em] text-ink/70">
      {label}
      {required && <span className="text-gold"> *</span>}
    </label>
  );
}

type Base = { id: string; label: string; className?: string };

export function TextField({ id, label, className = "", ...props }: Base & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={className}>
      <Label htmlFor={id} label={label} required={props.required} />
      <input id={id} name={id} className={control} {...props} />
    </div>
  );
}

export function SelectField({
  id,
  label,
  options,
  placeholder = "Please select",
  className = "",
  ...props
}: Base & { options: readonly string[]; placeholder?: string } & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className={className}>
      <Label htmlFor={id} label={label} required={props.required} />
      <select id={id} name={id} defaultValue="" className={`${control} appearance-none`} {...props}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export function TextAreaField({ id, label, className = "", ...props }: Base & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div className={className}>
      <Label htmlFor={id} label={label} required={props.required} />
      <textarea id={id} name={id} rows={5} className={`${control} resize-y`} {...props} />
    </div>
  );
}
