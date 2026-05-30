import Layout from "@/components/layout/Layout";
import aboutDetail from "@/assets/about-detail.jpg";
import heroVilla from "@/assets/hero-villa.jpg";

export default function About() {
  return (
    <Layout>
      <section className="container-wide pt-20 lg:pt-28 pb-24">
        <p className="text-[11px] uppercase tracking-eyebrow text-secondary mb-6">
          The Studio
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-5xl">
          We build for a single<br />
          <em className="italic text-secondary">kind of resident.</em>
        </h1>
        <p className="mt-12 max-w-2xl text-lg text-foreground/60 leading-relaxed">
          Sable & Stone was founded in Accra in 2018 around a quiet conviction:
          that Ghana deserves residential architecture as considered as the
          best work being produced anywhere in the world. We design, develop
          and deliver — slowly, and with one project at a time.
        </p>
      </section>

      <section className="border-t border-border/40">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative min-h-[480px] lg:min-h-[720px]">
            <img src={aboutDetail} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="px-6 lg:px-20 py-20 lg:py-32 space-y-16">
            {[
              { n: "01", t: "Material first", d: "We specify travertine, bronze, hardwood and lime plaster — and almost nothing else. The palette of a Sable & Stone residence is intentionally narrow." },
              { n: "02", t: "Light, then plan", d: "Every floor plan is drawn around the Accra sun. North-facing studies. Cross-ventilation. Courtyards that breathe." },
              { n: "03", t: "Slow delivery", d: "We complete two to three residences a year. Each owner meets the architect, the contractor, and the principals — by name." },
            ].map((b) => (
              <div key={b.n} className="grid grid-cols-12 gap-6">
                <p className="col-span-2 text-[11px] uppercase tracking-eyebrow text-secondary pt-2">{b.n}</p>
                <div className="col-span-10">
                  <h3 className="font-display text-2xl lg:text-3xl">{b.t}</h3>
                  <p className="mt-3 text-foreground/60 leading-relaxed">{b.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/40 relative">
        <div className="relative h-[60vh] min-h-[420px]">
          <img src={heroVilla} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/40" />
          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <h2 className="font-display italic text-4xl md:text-6xl lg:text-7xl max-w-4xl text-foreground">
              "A house is not a product. It is a&nbsp;<span className="text-secondary">commitment</span>."
            </h2>
          </div>
        </div>
      </section>
    </Layout>
  );
}
