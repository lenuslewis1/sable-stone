import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search, X } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { properties, type CollectionName } from "@/data/properties";
import ScrollReveal from "@/components/shared/ScrollReveal";

const collections: CollectionName[] = ["Villa MIA", "Villa Mae"];

export default function Properties() {
  const [query, setQuery] = useState("");
  const [collection, setCollection] = useState<CollectionName>("Villa MIA");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return properties.filter((p) => {
      const matchesCollection = p.collection === collection;
      const matchesQ =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.collection.toLowerCase().includes(q);
      return matchesCollection && matchesQ;
    });
  }, [query, collection]);

  const counts = useMemo(() => {
    const map = {} as Record<CollectionName, number>;
    for (const item of collections) {
      map[item] = properties.filter((property) => property.collection === item).length;
    }
    return map;
  }, []);

  return (
    <Layout>
      <section className="container-wide pt-20 lg:pt-28 pb-12">
        <p
          className="text-[11px] uppercase tracking-eyebrow text-secondary mb-6 page-load-reveal will-change-reveal"
          style={{ animationDelay: "150ms" }}
        >
          Portfolio
        </p>
        <h1
          className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-4xl page-load-reveal will-change-reveal"
          style={{ animationDelay: "300ms" }}
        >
          A small collection,<br />
          <em className="italic text-secondary">held to one standard.</em>
        </h1>
      </section>

      <section
        className="border-t border-border/40 bg-background/90 backdrop-blur-md page-load-reveal will-change-reveal"
        style={{ animationDelay: "450ms" }}
      >
        <div className="container-wide py-6 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
          <div className="relative flex-1 max-w-xl">
            <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value.slice(0, 80))}
              placeholder="Search by name, collection, location or type..."
              className="w-full bg-transparent border-b border-border/60 focus:border-secondary outline-none pl-7 pr-8 py-3 text-foreground placeholder:text-foreground/30 text-sm"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-foreground"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div
            className="flex flex-wrap items-center gap-2 lg:gap-3"
            role="tablist"
            aria-label="Property collections"
          >
            {collections.map((item) => {
              const active = collection === item;
              return (
                <button
                  key={item}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setCollection(item)}
                  className={`px-4 py-2 text-[11px] uppercase tracking-eyebrow border transition-colors btn-hover-lift will-change-transform ${
                    active
                      ? "bg-foreground text-background border-foreground"
                      : "border-border/60 text-foreground/70 hover:text-foreground hover:border-foreground/60"
                  }`}
                >
                  {item} <span className="ml-1 opacity-50">{counts[item]}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-border/40">
        <div className="container-wide py-16 lg:py-20">
          <div className="mb-10 flex items-baseline justify-between">
            <p className="text-[11px] uppercase tracking-eyebrow text-foreground/40">
              {filtered.length} {filtered.length === 1 ? "residence" : "residences"}
            </p>
            {(query || collection !== "Villa MIA") && (
              <button
                onClick={() => { setQuery(""); setCollection("Villa MIA"); }}
                className="text-[11px] uppercase tracking-eyebrow text-secondary hover:underline"
              >
                Reset filters
              </button>
            )}
          </div>

          {filtered.length === 0 ? (
            <div className="py-32 text-center">
              <p className="font-display text-3xl lg:text-4xl text-foreground/60">
                No residences match that enquiry.
              </p>
              <p className="mt-4 text-sm text-foreground/40">Try a different category or search term.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {filtered.map((p, i) => (
                <ScrollReveal
                  key={p.slug}
                  variant="slide-up"
                  delay={(i % 6) * 60}
                  className="card-hover-glow will-change-reveal"
                >
                  <Link to={`/properties/${p.slug}`} className="group block">
                    <div className="relative aspect-[4/5] overflow-hidden bg-muted mb-5">
                      <img
                        src={p.gallery[0]}
                        alt={p.name}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 px-3 py-1 bg-background/80 backdrop-blur-sm text-[10px] uppercase tracking-eyebrow text-foreground">
                        {p.status}
                      </div>
                    </div>
                    <p className="text-[11px] uppercase tracking-eyebrow text-foreground/40">
                      {p.collection} / {p.category}
                    </p>
                    <h3 className="font-display text-2xl lg:text-3xl mt-2 group-hover:text-secondary transition-colors">
                      {p.name}
                    </h3>
                    <div className="mt-1 flex items-baseline justify-between text-sm text-foreground/60">
                      <span>{p.location}</span>
                      <span>{p.bedrooms} bd</span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
