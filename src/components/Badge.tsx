import React from 'react';
import { BadgeStatus } from '../types';
import { useI18n } from '../i18n/LanguageProvider';

export interface BadgeProps {
  status: BadgeStatus;
  customText?: string;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ status, customText, className = '' }) => {
  const { t } = useI18n();

  const label = customText || t(`badges.${status}`);

  const statusConfig: Record<
    BadgeStatus,
    {
      containerClass: string;
      icon: React.ReactNode;
    }
  > = {
    paid: {
      containerClass: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      icon: (
        <svg
          className="w-3.5 h-3.5 shrink-0"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    unpaid: {
      containerClass: 'bg-rose-50 text-rose-800 border-rose-200',
      icon: (
        <svg
          className="w-3.5 h-3.5 shrink-0"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    partial: {
      containerClass: 'bg-amber-50 text-amber-900 border-amber-200',
      icon: (
        <svg
          className="w-3.5 h-3.5 shrink-0"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    pending: {
      containerClass: 'bg-slate-100 text-slate-800 border-slate-300',
      icon: (
        <svg
          className="w-3.5 h-3.5 shrink-0"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm.75-9.75a.75.75 0 00-1.5 0v4.25c0 .414.336.75.75.75h3.25a.75.75 0 000-1.5h-2.5V6.25z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    approved: {
      containerClass: 'bg-indigo-50 text-indigo-900 border-indigo-200',
      icon: (
        <svg
          className="w-3.5 h-3.5 shrink-0"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    rejected: {
      containerClass: 'bg-red-50 text-red-900 border-red-200',
      icon: (
        <svg
          className="w-3.5 h-3.5 shrink-0"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM5.47 5.47a.75.75 0 011.06 0L10 8.94l3.47-3.47a.75.75 0 111.06 1.06L11.06 10l3.47 3.47a.75.75 0 01-1.06 1.06L10 11.06l-3.47 3.47a.75.75 0 01-1.06-1.06L8.94 10 5.47 6.53a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  };

  const current = statusConfig[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${current.containerClass} ${className}`}
      role="status"
    >
      <span className="shrink-0">{current.icon}</span>
      <span className="leading-tight">{label}</span>
    </span>
  );
};
