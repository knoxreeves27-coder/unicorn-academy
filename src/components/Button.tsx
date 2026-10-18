import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonVariant } from '../types';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  loading?: boolean;
  to?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  loading = false,
  to,
  icon,
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-150 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none active:scale-[0.98]';

  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      'bg-primary text-white hover:bg-primary-dark shadow-sm hover:shadow',
    secondary:
      'border-2 border-primary text-primary hover:bg-primary/5 bg-transparent',
    accent:
      'bg-accent text-slate-900 hover:bg-amber-500 shadow-sm hover:shadow',
    danger:
      'bg-error text-white hover:bg-red-700 shadow-sm hover:shadow',
  };

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {loading ? (
        <svg
          className="animate-spin -ms-1 me-2 h-4 w-4 shrink-0 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : icon ? (
        <span className="me-2 shrink-0">{icon}</span>
      ) : null}
      <span>{children}</span>
    </>
  );

  if (to && !disabled && !loading) {
    return (
      <Link to={to} className={combinedClasses} role="button">
        {content}
      </Link>
    );
  }

  return (
    <button
      className={combinedClasses}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {content}
    </button>
  );
};
