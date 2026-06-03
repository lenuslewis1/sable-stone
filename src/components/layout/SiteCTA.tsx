import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "../shared/ScrollReveal";
import contactHero from "@/assets/contact-hero.jpg";

export default function SiteCTA() {
  return (
    <section className="relative overflow-hidden border-t border-border/40 bg-background">
      <div className="absolute inset-0">
        <img
          src={contactHero}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/35" />
      </div>

      <div className="container-wide relative py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <ScrollReveal
            variant="slide-up"
            className="lg:col-span-8 will-change-reveal"
          >
            <p className="text-[11px] uppercase tracking-eyebrow text-secondary mb-6">
              Private enquiries
            </p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-5xl">
              Begin a conversation about your next address.
            </h2>
          </ScrollReveal>

          <ScrollReveal
            variant="slide-up"
            delay={120}
            className="lg:col-span-4 lg:justify-self-end will-change-reveal"
          >
            <p className="max-w-sm text-sm text-foreground/65 leading-relaxed">
              Speak with the company about available residences, private viewings,
              or a discreet development brief.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-3 px-9 py-4 text-[11px] uppercase tracking-eyebrow bg-foreground text-background hover:bg-secondary hover:text-secondary-foreground transition-colors btn-hover-lift will-change-transform"
            >
              Contact us <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
