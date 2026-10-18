import React, { useEffect, useRef, useState } from 'react';

export interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
  lang?: 'en' | 'ur';
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  suffix = '',
  duration = 1000,
  lang = 'en',
  className = '',
}) => {
  const [displayValue, setDisplayValue] = useState<number>(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setDisplayValue(value);
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const startTime = performance.now();
          const startVal = 0;
          const endVal = value;

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic curve
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(startVal + (endVal - startVal) * easeOutProgress);

            setDisplayValue(currentVal);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(endVal);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    const el = elementRef.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [value, duration, hasAnimated]);

  // Format with Intl
  const locale = lang === 'ur' ? 'ur-PK' : 'en-US';
  const formattedNumber = new Intl.NumberFormat(locale).format(displayValue);

  return (
    <span ref={elementRef} className={`font-mono tabular-nums ${className}`}>
      {formattedNumber}
      {suffix && <span className="ms-0.5">{suffix}</span>}
    </span>
  );
};
