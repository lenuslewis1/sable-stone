import Layout from "@/components/layout/Layout";

const entries = [
  {
    cat: "Notebook",
    title: "On building with travertine in West Africa",
    excerpt: "Why we returned to a Roman material — and what it does in Accra light.",
    date: "May 2026",
  },
  {
    cat: "Project Diary",
    title: "Casa Labadi: nine months on the coast",
    excerpt: "Field notes from a beachfront villa shaped by salt, wind and palm.",
    date: "March 2026",
  },
  {
    cat: "Conversation",
    title: "A studio visit with our principal architect",
    excerpt: "On restraint, repetition, and houses that age with grace.",
    date: "January 2026",
  },
];

export default function Journal() {
  return (
    <Layout>
      <section className="container-wide pt-20 lg:pt-28 pb-24">
        <p className="text-[11px] uppercase tracking-eyebrow text-secondary mb-6">Journal</p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-4xl">
          Field notes from<br />
          <em className="italic text-secondary">the studio.</em>
        </h1>
      </section>

      <section className="border-t border-border/40">
        <div className="container-wide divide-y divide-border/40">
          {entries.map((e) => (
            <article key={e.title} className="group grid grid-cols-1 md:grid-cols-12 gap-6 py-12 lg:py-16 cursor-pointer">
              <p className="md:col-span-2 text-[11px] uppercase tracking-eyebrow text-secondary pt-2">{e.cat}</p>
              <div className="md:col-span-8">
                <h2 className="font-display text-3xl lg:text-5xl group-hover:text-secondary transition-colors">
                  {e.title}
                </h2>
                <p className="mt-4 text-foreground/60 max-w-2xl">{e.excerpt}</p>
              </div>
              <p className="md:col-span-2 text-sm text-foreground/40 md:text-right pt-2">{e.date}</p>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
