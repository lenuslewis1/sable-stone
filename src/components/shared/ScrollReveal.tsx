import { useEffect, useRef, useState, ReactNode, ElementType, CSSProperties } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  variant?: "fade-in" | "slide-up" | "scale-in";
  delay?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
  as?: ElementType;
  style?: CSSProperties;
  [key: string]: unknown;
}

export default function ScrollReveal({
  children,
  variant = "slide-up",
  delay = 0,
  threshold = 0.1,
  once = true,
  className = "",
  as: Component = "div",
  style,
  ...props
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setRevealed(false);
        }
      },
      { threshold }
    );

    const el = ref.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) {
        observer.unobserve(el);
      }
      observer.disconnect();
    };
  }, [threshold, once]);

  const variantClass = revealed ? `revealed-${variant}` : "";
  const combinedClassName = `reveal-on-scroll ${variantClass} ${className}`.trim();

  const revealStyle = delay > 0 ? { ...style, animationDelay: `${delay}ms` } : style;

  return (
    <Component
      {...props}
      ref={ref as any}
      className={combinedClassName}
      style={revealStyle}
    >
      {children}
    </Component>
  );
}
