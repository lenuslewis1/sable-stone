import Layout from "@/components/layout/Layout";
import aboutDetail from "@/assets/about-detail.jpg";
import heroVilla from "@/assets/hero-villa.jpg";

const pillars = [
  {
    n: "01",
    t: "Flagship-Led Development",
    d: "Every project anchors the portfolio. It must demonstrate international luxury standards and carry enough architectural weight to define what Sable & Stone means — not illustrate it, but define it.",
  },
  {
    n: "02",
    t: "Brand as Platform",
    d: "We operate as a platform, not a series of disconnected developments. Visual identity, materials and communication govern themselves consistently across every touchpoint — from investor documents to site hoardings.",
  },
  {
    n: "03",
    t: "Buyer Personalisation",
    d: "Luxury today is participation. We offer controlled customisation — material selections, finish packages, FF&E specification — that gives each buyer a genuine sense of authorship without compromising the architectural integrity of the whole.",
  },
  {
    n: "04",
    t: "Selective Expansion",
    d: "We do not enter new markets because opportunity exists. We enter when location, demand profile and brand impact meet our criteria simultaneously. Ghana first, then Nigeria under active evaluation.",
  },
];

const buyers = [
  { t: "Diplomats", d: "Requiring discreet, high-security residences of architectural standing." },
  { t: "UHNW Individuals", d: "Seeking assets that perform financially and carry genuine prestige." },
  { t: "International Investors", d: "Positioning in premium African real estate at the right moment." },
  { t: "African Elite", d: "Design-conscious buyers who refuse to compromise between quality and location." },
];

export default function About() {
  return (
    <Layout>
      {/* ESSENCE */}
      <section className="container-wide pt-20 lg:pt-28 pb-24">
        <p className="text-[11px] uppercase tracking-eyebrow text-secondary mb-6">
          Brand Essence
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-5xl">
          We do not build volume.<br />
          <em className="italic text-secondary">We build consequence.</em>
        </h1>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <p className="lg:col-span-7 text-lg text-foreground/70 leading-relaxed">
            Sable & Stone is a luxury development house defined by architectural
            clarity, material intelligence and disciplined execution. The name
            carries its meaning deliberately —
            <em className="italic text-secondary"> sable</em> for depth and
            refinement, <em className="italic text-secondary">stone</em> for
            permanence and integrity.
          </p>
          <p className="lg:col-span-5 lg:col-start-8 text-foreground/55 leading-relaxed">
            Every development we undertake is judged first as an architectural
            statement and second as a financial instrument — because we believe
            the two are inseparable at the level we operate.
          </p>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="border-t border-border/40">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative min-h-[480px] lg:min-h-[720px]">
            <img src={aboutDetail} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="px-6 lg:px-20 py-20 lg:py-32 flex flex-col justify-center">
            <p className="text-[11px] uppercase tracking-eyebrow text-secondary mb-6">
              Brand Philosophy
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              The <em className="italic text-secondary">beliefs</em> that govern how we work.
            </h2>
            <div className="mt-10 space-y-6 text-foreground/65 leading-relaxed max-w-xl">
              <p>
                Luxury, as we understand it, is the result of precision applied
                at every stage of design and construction — in the proportions
                of a room, the weight of a door handle, the way light moves
                through a corridor at a particular hour.
              </p>
              <p>
                We believe fewer, better projects create more enduring value
                than scale pursued for its own sake. Each development must
                either strengthen the portfolio or it does not proceed. That
                discipline is the source of our credibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND PILLARS */}
      <section className="border-t border-border/40 section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-eyebrow text-secondary mb-6">
              Brand Pillars
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Four principles <em className="italic text-secondary">we build from</em>.
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-border/40">
            {pillars.map((p) => (
              <div key={p.n} className="bg-background p-8 lg:p-12">
                <p className="text-[11px] uppercase tracking-eyebrow text-secondary">{p.n}</p>
                <h3 className="font-display text-2xl lg:text-3xl mt-4">{p.t}</h3>
                <p className="mt-4 text-sm text-foreground/65 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STRATEGIC POSITIONING */}
      <section className="border-t border-border/40 section-padding">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="text-[11px] uppercase tracking-eyebrow text-secondary mb-6">
              Strategic Positioning
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05]">
              Who we <em className="italic text-secondary">build for</em>.
            </h2>
            <p className="mt-8 text-foreground/60 leading-relaxed">
              We operate at the ultra-prime end of the residential market,
              targeting buyers in the <span className="text-foreground/90">$1.5M – $5M+</span> range.
              Our advantage is seriousness — architectural rigour, a curated
              material palette, and a deliberately limited pipeline.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-border/40">
            {buyers.map((b) => (
              <div key={b.t} className="bg-background p-8">
                <h3 className="font-display text-2xl">{b.t}</h3>
                <p className="mt-3 text-sm text-foreground/60 leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="border-t border-border/40 relative">
        <div className="relative h-[60vh] min-h-[420px]">
          <img src={heroVilla} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/55" />
          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <h2 className="font-display italic text-3xl md:text-5xl lg:text-6xl max-w-4xl text-foreground leading-[1.1]">
              "Not the largest developer on the continent — the
              <span className="text-secondary"> most trusted</span> one."
            </h2>
          </div>
        </div>
      </section>
    </Layout>
  );
}
