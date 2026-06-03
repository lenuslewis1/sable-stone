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
    body: "We believe exceptional destinations begin with thoughtful architecture, design innovation, and a commitment to aesthetic excellence.",
  },
  {
    title: "Quality Without Compromise",
    body: "We are committed to delivering developments defined by superior craftsmanship, enduring materials, and meticulous attention to detail.",
  },
  {
    title: "Thoughtful Development",
    body: "We approach every project with careful planning and a long-term perspective, ensuring each development enhances its surroundings and community.",
  },
  {
    title: "Experience Driven Living",
    body: "We design environments that enrich how people live, stay, and connect with their surroundings.",
  },
  {
    title: "Long-Term Value",
    body: "We focus on creating developments that deliver enduring value for residents, investors, and the communities we serve.",
  },
];

const commitments = [
  {
    title: "Safety",
    body: "Providing a safe workplace for all staff and contractors through stringent QHSE practices.",
  },
  {
    title: "Sustainability",
    body: "Reducing the environmental impact of operations and promoting sustainable lifestyle design.",
  },
  {
    title: "Craftsmanship",
    body: "Ensuring superior craftsmanship and meticulous attention to detail in every finished space.",
  },
];

const focusAreas = [
  "Premium villas",
  "Private residences",
  "Curated residential communities",
  "Hospitality destinations",
  "Lifestyle-driven real estate",
];

const profileOverview = [
  "Sable & Stone is a real estate development firm creating distinctive residential, hospitality, and lifestyle destinations.",
  "As a full turnkey developer, Sable & Stone conceives, designs, develops, and delivers its own branded projects, bringing together architecture, design, construction, and operational planning into a single, cohesive development vision.",
  "Sable & Stone specializes in premium villas, private residences, and curated residential communities defined by architectural excellence, meticulous attention to detail, and thoughtful lifestyle design.",
  "Built on integrity, aesthetic innovation, and superior craftsmanship, each Sable & Stone development is carefully crafted to deliver refined living environments with enduring quality and modern amenities.",
  "Beyond residential development, Sable & Stone is building a portfolio of lifestyle-driven destinations, expanding the brand into hospitality and experiential real estate.",
  "Guided by a commitment to design excellence, innovation, and long-term value creation, Sable & Stone focuses on creating distinctive environments that bring together thoughtful architecture, curated experiences, and enduring quality.",
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
              Sable & Stone Profile
            </p>
            <h1
              className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-foreground page-load-reveal will-change-reveal"
              style={{ animationDelay: "300ms", textShadow: "0 3px 24px rgba(0,0,0,0.7)" }}
            >
              Luxury development house for residential and lifestyle destinations.
            </h1>
          </div>
        </div>
      </section>

      <section className="border-t border-border/40 section-padding">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <ScrollReveal variant="slide-up" className="lg:col-span-5 will-change-reveal">
            <p className="text-[11px] uppercase tracking-eyebrow text-secondary mb-6">
              Profile
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              A full turnkey developer with a single, cohesive development vision.
            </h2>
          </ScrollReveal>
          <ScrollReveal
            variant="slide-up"
            delay={120}
            className="lg:col-span-7 space-y-6 text-lg text-foreground/68 leading-relaxed will-change-reveal"
          >
            {profileOverview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
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
              <div className="space-y-8">
                <div>
                  <p className="text-[11px] uppercase tracking-eyebrow text-foreground/40 mb-4">
                    Vision
                  </p>
                  <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                    To craft inspiring experiences through thoughtful development.
                  </h2>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-eyebrow text-foreground/40 mb-4">
                    Mission
                  </p>
                  <p className="max-w-xl text-foreground/65 leading-relaxed">
                    To develop thoughtfully designed residential and lifestyle
                    destinations defined by architectural excellence, exceptional
                    experiences, uncompromising quality, and long-term value.
                  </p>
                </div>
              </div>
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
                Health, Safety, and Quality Commitment
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                The highest standards of safety and quality throughout the development process.
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
              Focus Areas & Future
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Residential depth, expanding into lifestyle destinations.
            </h2>
            <p className="mt-8 text-foreground/60 leading-relaxed">
              Beyond residential development, Sable & Stone is actively building
              a portfolio of lifestyle-driven destinations. Guided by a commitment
              to design excellence and innovation, the firm focuses on creating
              distinctive environments that bring together thoughtful architecture,
              experiences, and enduring quality.
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

      <section className="border-t border-border/40 py-20 lg:py-28">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
          <ScrollReveal variant="slide-up" className="lg:col-span-5 will-change-reveal">
            <p className="text-[11px] uppercase tracking-eyebrow text-secondary mb-6">
              Contact
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05]">
              Sable & Stone Ltd
            </h2>
          </ScrollReveal>
          <ScrollReveal
            variant="slide-up"
            delay={120}
            className="lg:col-span-7 will-change-reveal"
          >
            <address className="not-italic space-y-3 text-lg text-foreground/68 leading-relaxed">
              <p>HNO. 22, Airport Residential Area, Adomi Street, Accra, Ghana</p>
              <p>
                <a href="mailto:info@sableandstonegh.com" className="hover:text-secondary link-underline-draw pb-0.5">
                  info@sableandstonegh.com
                </a>
              </p>
              <p>
                <a href="https://www.sableandstonegh.com" className="hover:text-secondary link-underline-draw pb-0.5">
                  www.sableandstonegh.com
                </a>
              </p>
            </address>
          </ScrollReveal>
        </div>
      </section>

    </Layout>
  );
}
