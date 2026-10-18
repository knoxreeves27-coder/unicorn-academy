import React, { useId } from 'react';

export interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  id?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  required = false,
  hint,
  error,
  id: providedId,
  className = '',
  disabled,
  ...props
}) => {
  const generatedId = useId();
  const inputId = providedId || generatedId;
  const hintId = hint ? `${inputId}-hint` : undefined;
  const errorId = error ? `${inputId}-error` : undefined;

  const describedBy = [errorId, hintId].filter(Boolean).join(' ') || undefined;

  return (
    <div className="w-full text-start flex flex-col gap-1.5">
      <label
        htmlFor={inputId}
        className="text-sm font-semibold text-slate-800 flex items-center gap-1 select-none"
      >
        <span>{label}</span>
        {required && (
          <span className="text-error" aria-hidden="true">
            *
          </span>
        )}
      </label>

      <div className="relative">
        <input
          id={inputId}
          required={required}
          disabled={disabled}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-lg border bg-surface text-text text-sm transition-colors duration-150 placeholder:text-muted/60 focus:outline-none focus-visible:ring-2 disabled:bg-slate-50 disabled:text-muted disabled:cursor-not-allowed ${
            error
              ? 'border-error focus-visible:ring-error/20 focus-visible:border-error'
              : 'border-slate-300 hover:border-slate-400 focus-visible:ring-secondary/20 focus-visible:border-secondary'
          } ${className}`}
          {...props}
        />
      </div>

      {hint && !error && (
        <p id={hintId} className="text-xs text-muted leading-relaxed">
          {hint}
        </p>
      )}

      {error && (
        <p
          id={errorId}
          className="text-xs font-medium text-error flex items-center gap-1.5"
          role="alert"
        >
          <svg
            className="w-3.5 h-3.5 shrink-0"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
          <span>{error}</span>
        </p>
      )}
    </div>
  );
};
