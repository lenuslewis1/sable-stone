import { useEffect, useRef, useState, ReactNode, ElementType } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  variant?: "fade-in" | "slide-up" | "scale-in";
  delay?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
  as?: ElementType;
}

export default function ScrollReveal({
  children,
  variant = "slide-up",
  delay = 0,
  threshold = 0.1,
  once = true,
  className = "",
  as: Component = "div",
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

  const style = delay > 0 ? { animationDelay: `${delay}ms` } : undefined;

  return (
    <Component
      ref={ref as any}
      className={combinedClassName}
      style={style}
    >
      {children}
    </Component>
  );
}
