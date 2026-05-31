import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { journalEntries } from "@/data/journal";

export default function Journal() {
  return (
    <Layout>
      <section className="container-wide pt-20 lg:pt-28 pb-24">
        <p
          className="text-[11px] uppercase tracking-eyebrow text-secondary mb-6 page-load-reveal will-change-reveal"
          style={{ animationDelay: "150ms" }}
        >
          Journal
        </p>
        <h1
          className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-4xl page-load-reveal will-change-reveal"
          style={{ animationDelay: "300ms" }}
        >
          Field notes from<br />
          <em className="italic text-secondary">the studio.</em>
        </h1>
      </section>

      <section className="border-t border-border/40">
        <div className="container-wide py-12 lg:py-16 grid gap-6">
          {journalEntries.map((entry, i) => (
            <ScrollReveal
              key={entry.slug}
              variant="slide-up"
              delay={i * 100}
              className="bg-card border border-border card-hover-glow will-change-reveal group"
              as="article"
            >
              <Link to={`/journal/${entry.slug}`} className="block p-8 lg:p-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  <p className="md:col-span-2 text-[11px] uppercase tracking-eyebrow text-secondary pt-2">
                    {entry.cat}
                  </p>
                  <div className="md:col-span-8">
                    <h2 className="font-display text-3xl lg:text-5xl group-hover:text-secondary transition-colors">
                      {entry.title}
                    </h2>
                    <p className="mt-4 text-foreground/60 max-w-2xl">{entry.excerpt}</p>
                    <span className="mt-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-eyebrow text-foreground/70 group-hover:text-secondary transition-colors">
                      Read article <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                  <p className="md:col-span-2 text-sm text-foreground/40 md:text-right pt-2">
                    {entry.date}
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </Layout>
  );
}
