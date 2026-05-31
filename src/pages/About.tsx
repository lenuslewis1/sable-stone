import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/shared/ScrollReveal";
import coastalArrival from "@/assets/profile/about-coastal-arrival.webp";
import brandCraft from "@/assets/profile/about-brand-craft.webp";
import poolResidence from "@/assets/profile/about-pool-residence.webp";
import stairResidence from "@/assets/profile/about-stair-residence.webp";
import safetyCraft from "@/assets/profile/about-safety-craft.webp";
import stoneTexture from "@/assets/profile/about-stone-texture.webp";

const values = [
  {
    title: "Design Vision",
    body: "Exceptional destinations begin with thoughtful architecture, design innovation, and aesthetic discipline.",
  },
  {
    title: "Quality Without Compromise",
    body: "Developments are shaped by superior craftsmanship, enduring materials, and meticulous attention to detail.",
  },
  {
    title: "Thoughtful Development",
    body: "Every project is planned with a long-term view, so it can enhance its setting and the community around it.",
  },
  {
    title: "Experience Driven Living",
    body: "We create environments that enrich how people live, stay, gather, and connect with their surroundings.",
  },
  {
    title: "Long-Term Value",
    body: "Each development is considered as a lasting asset for residents, investors, and the places we serve.",
  },
];

const commitments = [
  {
    title: "Safety",
    body: "Stringent QHSE practices support safe workplaces for staff, consultants, and contractors.",
  },
  {
    title: "Sustainability",
    body: "Operational choices and lifestyle design are guided by lower impact, durability, and better use over time.",
  },
  {
    title: "Craftsmanship",
    body: "Finished spaces are judged by material quality, execution, and the precision of small details.",
  },
];

const focusAreas = [
  "Premium villas",
  "Private residences",
  "Curated residential communities",
  "Hospitality destinations",
  "Lifestyle-driven real estate",
];

export default function About() {
  return (
    <Layout>
      <section className="relative min-h-[78vh] overflow-hidden">
        <img
          src={coastalArrival}
          alt="Black convertible beside a coastal villa"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/20 to-background/90" />
        <div className="relative container-wide min-h-[78vh] flex items-end pb-14 lg:pb-20">
          <div className="max-w-5xl">
            <p
              className="text-[11px] uppercase tracking-eyebrow text-secondary mb-6 page-load-reveal will-change-reveal"
              style={{ animationDelay: "150ms", textShadow: "0 2px 16px rgba(0,0,0,0.55)" }}
            >
              Luxury development house
            </p>
            <h1
              className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-foreground page-load-reveal will-change-reveal"
              style={{ animationDelay: "300ms", textShadow: "0 3px 24px rgba(0,0,0,0.7)" }}
            >
              Architecturally significant places for a globally discerning clientele.
            </h1>
          </div>
        </div>
      </section>

      <section className="border-t border-border/40 section-padding">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <ScrollReveal variant="slide-up" className="lg:col-span-5 will-change-reveal">
            <p className="text-[11px] uppercase tracking-eyebrow text-secondary mb-6">
              About Sable & Stone
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              A full turnkey developer with one cohesive vision.
            </h2>
          </ScrollReveal>
          <ScrollReveal
            variant="slide-up"
            delay={120}
            className="lg:col-span-7 space-y-6 text-lg text-foreground/68 leading-relaxed will-change-reveal"
          >
            <p>
              Sable & Stone creates distinctive residential, hospitality, and lifestyle
              destinations. We conceive, design, develop, and deliver our own branded
              projects, bringing architecture, construction, interiors, and operational
              planning into a single development vision.
            </p>
            <p>
              Our work focuses on premium villas, private residences, and curated
              communities defined by architectural excellence, thoughtful lifestyle
              design, and enduring quality.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-t border-border/40">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <ScrollReveal
            variant="scale-in"
            className="relative min-h-[520px] lg:min-h-[760px] will-change-reveal"
          >
            <img
              src={brandCraft}
              alt="Sable and Stone branded material applications"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </ScrollReveal>
          <div className="px-6 lg:px-20 py-20 lg:py-32 flex flex-col justify-center">
            <ScrollReveal variant="slide-up" className="will-change-reveal">
              <p className="text-[11px] uppercase tracking-eyebrow text-secondary mb-6">
                Vision and Mission
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                To craft inspiring experiences through thoughtful development.
              </h2>
            </ScrollReveal>
            <ScrollReveal
              variant="slide-up"
              delay={120}
              className="mt-10 max-w-xl space-y-6 text-foreground/65 leading-relaxed will-change-reveal"
            >
              <p>
                Our mission is to develop thoughtfully designed residential and
                lifestyle destinations defined by architectural excellence,
                exceptional experiences, uncompromising quality, and long-term value.
              </p>
              <p>
                The brand is expressed through more than buildings. It appears in
                material choices, service rituals, presentation, and the standard of
                care around every environment we create.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="border-t border-border/40 section-padding relative overflow-hidden">
        <img
          src={stoneTexture}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.08]"
        />
        <div className="relative container-wide">
          <ScrollReveal variant="slide-up" className="max-w-3xl will-change-reveal">
            <p className="text-[11px] uppercase tracking-eyebrow text-secondary mb-6">
              Values
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              The principles that decide what we build, and how.
            </h2>
          </ScrollReveal>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-border/40">
            {values.map((item, index) => (
              <ScrollReveal
                key={item.title}
                variant="slide-up"
                delay={index * 70}
                className="bg-background/95 p-7 lg:p-8 card-hover-glow will-change-reveal"
              >
                <p className="text-[11px] uppercase tracking-eyebrow text-foreground/35">
                  0{index + 1}
                </p>
                <h3 className="font-display text-2xl mt-4">{item.title}</h3>
                <p className="mt-4 text-sm text-foreground/62 leading-relaxed">{item.body}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/40">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="px-6 lg:px-20 py-20 lg:py-32 flex flex-col justify-center order-2 lg:order-1">
            <ScrollReveal variant="slide-up" className="will-change-reveal">
              <p className="text-[11px] uppercase tracking-eyebrow text-secondary mb-6">
                Health, Safety and Quality
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                High standards are built into the development process.
              </h2>
            </ScrollReveal>
            <div className="mt-12 space-y-8">
              {commitments.map((item, index) => (
                <ScrollReveal
                  key={item.title}
                  variant="slide-up"
                  delay={index * 100}
                  className="border-t border-border/50 pt-6 will-change-reveal"
                >
                  <h3 className="font-display text-2xl">{item.title}</h3>
                  <p className="mt-3 text-sm text-foreground/62 leading-relaxed max-w-xl">
                    {item.body}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>
          <ScrollReveal
            variant="scale-in"
            className="relative min-h-[520px] lg:min-h-[760px] order-1 lg:order-2 will-change-reveal"
          >
            <img
              src={safetyCraft}
              alt="Construction professional wearing Sable and Stone branded workwear"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="border-t border-border/40 section-padding">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <ScrollReveal variant="slide-up" className="lg:col-span-5 will-change-reveal">
            <p className="text-[11px] uppercase tracking-eyebrow text-secondary mb-6">
              Focus Areas and Future
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Residential depth, expanding into lifestyle destinations.
            </h2>
            <p className="mt-8 text-foreground/60 leading-relaxed">
              Beyond residential development, Sable & Stone is actively building
              a portfolio of lifestyle-driven destinations guided by design
              excellence, innovation, and enduring quality.
            </p>
          </ScrollReveal>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            <ScrollReveal
              variant="scale-in"
              className="relative aspect-[4/5] overflow-hidden will-change-reveal"
            >
              <img
                src={poolResidence}
                alt="Indoor pool and timber screens in a premium residence"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </ScrollReveal>
            <div className="flex flex-col gap-8">
              <ScrollReveal
                variant="scale-in"
                delay={80}
                className="relative aspect-[4/5] overflow-hidden will-change-reveal"
              >
                <img
                  src={stairResidence}
                  alt="Marble staircase and interior lounge"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </ScrollReveal>
              <ScrollReveal variant="slide-up" delay={150} className="will-change-reveal">
                <ul className="space-y-3 text-sm uppercase tracking-eyebrow text-foreground/58">
                  {focusAreas.map((item) => (
                    <li key={item} className="border-t border-border/50 pt-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}
