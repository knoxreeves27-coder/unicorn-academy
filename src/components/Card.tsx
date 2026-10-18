import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  interactive?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  interactive = false,
  ...props
}) => {
  return (
    <div
      className={`bg-surface rounded-[12px] p-6 shadow-sm border border-slate-100 transition-all duration-200 ${
        interactive
          ? 'hover:-translate-y-1 hover:shadow-md cursor-pointer'
          : 'hover:-translate-y-0.5 hover:shadow'
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
