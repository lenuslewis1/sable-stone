import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { getJournalEntryBySlug, journalEntries } from "@/data/journal";

export default function JournalDetail() {
  const { slug } = useParams<{ slug: string }>();
  const entry = getJournalEntryBySlug(slug);

  if (!entry) return <Navigate to="/journal" replace />;

  const related = journalEntries
    .filter((journalEntry) => journalEntry.slug !== entry.slug)
    .slice(0, 3);

  return (
    <Layout>
      <section className="relative min-h-[86vh] overflow-hidden">
        <img
          src={entry.heroImage}
          alt={entry.heroAlt}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/45 via-background/25 to-background/95" />
        <div className="relative container-wide flex min-h-[86vh] flex-col justify-end pb-16 pt-32 lg:pb-24">
          <Link
            to="/journal"
            className="mb-8 inline-flex w-fit items-center gap-2 text-[11px] uppercase tracking-eyebrow text-foreground/75 hover:text-secondary link-underline-draw pb-1 page-load-reveal will-change-reveal"
            style={{ animationDelay: "150ms" }}
          >
            <ArrowLeft className="h-4 w-4" /> Journal
          </Link>
          <p
            className="mb-5 text-[11px] uppercase tracking-eyebrow text-secondary page-load-reveal will-change-reveal"
            style={{ animationDelay: "300ms" }}
          >
            {entry.cat} / {entry.date} / {entry.readTime}
          </p>
          <h1
            className="max-w-5xl font-display text-5xl leading-[0.95] md:text-7xl lg:text-8xl page-load-reveal will-change-reveal"
            style={{ animationDelay: "450ms" }}
          >
            {entry.title}
          </h1>
          <p
            className="mt-8 max-w-3xl font-display text-2xl leading-snug text-foreground/80 md:text-3xl page-load-reveal will-change-reveal"
            style={{ animationDelay: "600ms" }}
          >
            {entry.deck}
          </p>
        </div>
      </section>

      <section className="border-t border-border/40">
        <div className="container-wide grid grid-cols-1 gap-12 py-20 lg:grid-cols-12 lg:gap-20 lg:py-28">
          <ScrollReveal
            variant="slide-up"
            className="lg:col-span-3 will-change-reveal"
          >
            <div className="sticky top-28 space-y-6 border-l border-border/50 pl-5">
              <p className="text-[11px] uppercase tracking-eyebrow text-foreground/40">
                Article
              </p>
              <div>
                <p className="font-display text-3xl">{entry.date}</p>
                <p className="mt-1 text-sm text-foreground/50">{entry.readTime}</p>
              </div>
            </div>
          </ScrollReveal>

          <div className="lg:col-span-8 lg:col-start-5">
            <div className="space-y-20">
              {entry.sections.map((section, index) => (
                <ScrollReveal
                  key={section.heading}
                  variant="slide-up"
                  delay={index * 80}
                  className="will-change-reveal"
                >
                  {section.eyebrow && (
                    <p className="mb-5 text-[11px] uppercase tracking-eyebrow text-secondary">
                      {section.eyebrow}
                    </p>
                  )}
                  <h2 className="font-display text-4xl leading-[1.05] md:text-5xl">
                    {section.heading}
                  </h2>
                  <div className="mt-8 space-y-6 text-lg leading-relaxed text-foreground/70">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border/40 section-padding">
        <div className="container-wide">
          <ScrollReveal
            variant="slide-up"
            className="mb-12 flex items-baseline justify-between will-change-reveal"
          >
            <h2 className="font-display text-3xl lg:text-5xl">More from the journal</h2>
            <Link
              to="/journal"
              className="hidden text-[11px] uppercase tracking-eyebrow text-foreground/70 hover:text-secondary link-underline-draw pb-1 sm:inline-flex"
            >
              All entries
            </Link>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {related.map((item, index) => (
              <ScrollReveal
                key={item.slug}
                variant="slide-up"
                delay={index * 100}
                className="border border-border/60 bg-card card-hover-glow will-change-reveal group"
                as="article"
              >
                <Link to={`/journal/${item.slug}`} className="block p-6 lg:p-8">
                  <p className="text-[11px] uppercase tracking-eyebrow text-secondary">
                    {item.cat}
                  </p>
                  <h3 className="mt-5 font-display text-3xl leading-tight group-hover:text-secondary transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/60">
                    {item.excerpt}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-eyebrow text-foreground/70 group-hover:text-secondary transition-colors">
                    Read <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
