import ScrollReveal from "./ScrollReveal";

interface StatCardProps {
  value: string;
  label: string;
  index?: number;
}

export default function StatCard({ value, label, index = 0 }: StatCardProps) {
  return (
    <ScrollReveal
      variant="scale-in"
      delay={index * 100}
      className="text-center will-change-reveal"
    >
      <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2">{value}</div>
      <div className="text-sm text-dark-foreground/70">{label}</div>
    </ScrollReveal>
  );
}

