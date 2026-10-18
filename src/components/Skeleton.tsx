import React from 'react';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: 'text' | 'rectangular' | 'circular';
  width?: string | number;
  height?: string | number;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  variant = 'rectangular',
  width,
  height,
  style,
  ...props
}) => {
  const variantStyles = {
    text: 'h-4 w-full rounded',
    rectangular: 'w-full rounded-lg',
    circular: 'rounded-full',
  };

  const inlineStyles: React.CSSProperties = {
    ...style,
    ...(width !== undefined ? { width } : {}),
    ...(height !== undefined ? { height } : {}),
  };

  return (
    <div
      aria-hidden="true"
      style={inlineStyles}
      className={`bg-slate-200/80 animate-pulse motion-reduce:animate-none ${variantStyles[variant]} ${className}`}
      {...props}
    />
  );
};
