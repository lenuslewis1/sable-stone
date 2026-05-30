import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";

import heroVilla from "@/assets/hero-villa.jpg";
import propertyPenthouse from "@/assets/property-penthouse.jpg";
import propertyVilla from "@/assets/property-villa.jpg";
import propertyTower from "@/assets/property-tower.jpg";
import propertyDzowulu from "@/assets/property-dzowulu.jpg";
import propertyEastAirport from "@/assets/property-east-airport.jpg";
import propertyTseAddo from "@/assets/property-tse-addo.jpg";
import aboutDetail from "@/assets/about-detail.jpg";
import whatWeStandFor from "@/assets/what-we-stand-for.jpg";

const flagshipResidences = [
  {
    name: "Villa MIA",
    location: "Labone",
    img: propertyVilla,
    statusLabel: "Design phase",
    statusValue: "Pending sale",
    phaseLabel: "Building now",
    phaseValue: "Active work",
    slug: "/properties/maison-cantonments",
  },
  {
    name: "Villa MIA",
    location: "Cantoments",
    img: propertyPenthouse,
    statusLabel: "Inspections",
    statusValue: "Accepted",
    phaseLabel: "Prep work",
    phaseValue: "Opened",
    slug: "/properties/casa-labadi",
  },
  {
    name: "Villa MIA",
    location: "Airport Hills",
    img: propertyTower,
    statusLabel: "Early plan",
    statusValue: "Awaiting OK",
    phaseLabel: "Work begun",
    phaseValue: "Ongoing now",
    slug: "/properties/maison-airport",
  },
  {
    name: "Villa MIA",
    location: "Dzowulu",
    img: propertyDzowulu,
    statusLabel: "Concept stage",
    statusValue: "In studio",
    phaseLabel: "Site works",
    phaseValue: "Mobilising",
    slug: "/properties",
  },
  {
    name: "Villa MIA",
    location: "East Airport",
    img: propertyEastAirport,
    statusLabel: "Permits",
    statusValue: "Submitted",
    phaseLabel: "Groundworks",
    phaseValue: "Scheduled",
    slug: "/properties",
  },
  {
    name: "Villa MIA",
    location: "Tse Addo",
    img: propertyTseAddo,
    statusLabel: "Reservations",
    statusValue: "By invitation",
    phaseLabel: "Structure",
    phaseValue: "Underway",
    slug: "/properties",
  },
];

const pillars = [
  {
    title: "Brand as Platform",
    body: "Sable & Stone operates as a platform, not a series of disconnected developments. Visual identity, company materials and communication govern themselves consistently across every touchpoint — from investor documents to site hoardings. The brand is not a logo. It is a set of decisions made the same way, every time.",
  },
  {
    title: "Buyer Personalisation",
    body: "Each acquisition is treated as a private commission. Layouts, finishes and sequencing are tuned to the household that will inhabit them — never the market average.",
  },
  {
    title: "Selective Expansion",
    body: "We undertake a small number of developments each cycle. Sites are chosen for permanence first, yield second. We would rather decline a project than dilute our standard.",
  },
];

const services = [
  {
    title: "Architectural design",
    body: "Every plan begins in our studio. Proportion, light and material are resolved before a single line is drawn for construction.",
  },
  {
    title: "Construction delivery",
    body: "We build what we draw. A single team carries each residence from groundworks to handover, on a deliberately limited schedule.",
  },
  {
    title: "Buyer personalisation",
    body: "Controlled customisation within a considered framework. Material selections, finish packages and FF&E are tuned to the household, never the market.",
  },
  {
    title: "Asset stewardship",
    body: "Discreet, long-horizon care for the residences we deliver — protecting both the architecture and the investment behind it.",
  },
];

export default function Index() {
  return (
    <Layout transparentNav>
      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={heroVilla}
          alt="Sable & Stone luxury residence at dusk in Accra"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background/85" />

        <div className="relative h-full container-wide flex flex-col justify-end pb-24 lg:pb-32">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[11px] uppercase tracking-eyebrow text-secondary mb-6"
          >
            Elevate to premium — Luxury residences
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-[8rem] leading-[0.95] text-foreground max-w-5xl"
          >
            Strategic design for <em className="italic text-secondary">premium</em> property success.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <Link
              to="/properties"
              className="inline-flex items-center gap-3 px-8 py-4 text-[11px] uppercase tracking-eyebrow bg-foreground text-background hover:bg-secondary hover:text-secondary-foreground transition-colors"
            >
              Discover Sable & Stone <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="text-[11px] uppercase tracking-eyebrow text-foreground/80 hover:text-secondary transition-colors"
            >
              Get in touch →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FLAGSHIP RESIDENCES — HORIZONTAL SCROLL */}
      <HorizontalResidences />

      {/* WHAT WE STAND FOR */}
      <section className="section-padding">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div>
              <p className="text-[11px] uppercase tracking-eyebrow text-secondary">
                01 — Our unique approach
              </p>
              <h2 className="mt-6 font-display text-4xl md:text-5xl leading-[1.05]">
                What we <em className="italic text-secondary">stand for</em>
              </h2>
            </div>
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <img
                src={whatWeStandFor}
                alt="Travertine and bronze architectural interior detail"
                loading="lazy"
                className="w-full h-full object-cover"
                width={1024}
                height={1280}
              />
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 text-foreground/70 leading-relaxed">
            <p className="text-lg md:text-xl text-foreground/85">
              Sable & Stone is a luxury development house defined by architectural clarity, material intelligence and disciplined execution. The name carries its meaning deliberately —
              <em className="italic text-secondary"> sable</em> for depth and refinement,
              <em className="italic text-secondary"> stone</em> for permanence and integrity.
            </p>
            <p>
              We do not build volume. We build consequence. Every development we undertake is judged first as an architectural statement and second as a financial instrument — because we believe the two are inseparable at the level we operate.
            </p>
            <p>
              Our clientele are acquiring a considered piece of place — a home that will outlast trends, hold its value, and carry our name without qualification. That is the standard we set for ourselves, and the standard we refuse to compromise.
            </p>
          </div>
        </div>
      </section>

      {/* PILLARS — FLAGSHIP-LED DEVELOPMENT */}
      <section className="border-t border-border/40 section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-eyebrow text-secondary mb-6">
              02 — Flagship-Led Development
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              A boutique luxury <em className="italic text-secondary">developer</em>.
            </h2>
          </div>

          <div className="mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-3 gap-px bg-border/40">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="bg-background p-8 lg:p-12"
              >
                <p className="text-[11px] uppercase tracking-eyebrow text-foreground/40">
                  0{i + 1}
                </p>
                <h3 className="font-display text-2xl lg:text-3xl mt-4">{p.title}</h3>
                <p className="mt-6 text-sm text-foreground/65 leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>




      {/* SERVICES */}
      <section className="border-t border-border/40 section-padding">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-4">
            <p className="text-[11px] uppercase tracking-eyebrow text-secondary mb-6">
              04 — Apartments & Luxury
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05]">
              The full <em className="italic text-secondary">service</em>.
            </h2>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-border/40">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="bg-background p-8 lg:p-10"
              >
                <p className="text-[11px] uppercase tracking-eyebrow text-foreground/40">
                  0{i + 1}
                </p>
                <h3 className="font-display text-2xl mt-4">{s.title}</h3>
                <p className="mt-4 text-sm text-foreground/65 leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY SPLIT */}
      <section className="border-t border-border/40">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[720px]">
            <img
              src={aboutDetail}
              alt="Travertine and bronze detail"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="px-6 lg:px-20 py-24 lg:py-40 flex flex-col justify-center">
            <p className="text-[11px] uppercase tracking-eyebrow text-secondary mb-6">
              05 — Philosophy
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              We do not build volume.
              <em className="italic text-secondary"> We build consequence.</em>
            </h2>
            <p className="mt-10 text-foreground/60 leading-relaxed max-w-lg">
              Every project is judged first as an architectural statement and second as a financial instrument. The two are inseparable at the level we operate.
            </p>
            <Link
              to="/about"
              className="mt-12 inline-flex items-center gap-3 text-[11px] uppercase tracking-eyebrow text-foreground hover:text-secondary"
            >
              Read our philosophy <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="border-t border-border/40 section-padding text-center">
        <div className="container-narrow">
          <p className="text-[11px] uppercase tracking-eyebrow text-secondary mb-8">
            06 — Private Enquiries
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05]">
            For those who already know what they are looking for.
          </h2>
          <div className="mt-10 text-sm text-foreground/60 space-y-1">
            <p>785 15th Street, Office 47 — Airport Residential</p>
            <p>info@sableandstone.com · +233 246 009 887</p>
          </div>
          <Link
            to="/contact"
            className="mt-12 inline-flex items-center gap-3 px-10 py-4 text-[11px] uppercase tracking-eyebrow bg-foreground text-background hover:bg-secondary hover:text-secondary-foreground transition-colors"
          >
            Arrange a viewing <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}

function HorizontalResidences() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // 6 residence panels + 1 intro panel = 7 screens of horizontal content.
  // Track width = 700vw, translate from 0% to -(6/7 * 100)% ≈ -85.7142%.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85.7142%"]);

  return (
    <section
      ref={ref}
      className="relative border-t border-border/40 bg-background"
      style={{ height: "660vh" }}
      aria-label="Current residences"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div style={{ x }} className="flex h-full w-[700vw]">
          {/* Intro panel */}
          <div className="relative h-full w-screen flex-shrink-0 p-3">
            <div className="relative h-full w-full border border-border/40 rounded-sm overflow-hidden flex flex-col justify-center px-6 lg:px-24">
              <p className="text-[11px] uppercase tracking-eyebrow text-secondary mb-6">
                02 — Current residences
              </p>
              <h2 className="font-display text-5xl md:text-7xl lg:text-[7rem] leading-[0.95] max-w-3xl">
                Villa <em className="italic text-secondary">MIA</em>
              </h2>
              <p className="mt-10 max-w-md text-foreground/60 leading-relaxed">
                Six flagship residences in development across Accra. Scroll to
                move through the portfolio.
              </p>
              <Link
                to="/properties"
                className="mt-12 inline-flex items-center gap-3 text-[11px] uppercase tracking-eyebrow text-foreground hover:text-secondary"
              >
                View more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Residence panels */}
          {flagshipResidences.map((p) => (
            <div
              key={p.location}
              className="relative h-full w-screen flex-shrink-0 p-3"
            >
              <div className="relative h-full w-full border border-border/40 rounded-sm overflow-hidden group">
                <Link to={p.slug} className="absolute inset-0 z-0">
                  <img
                    src={p.img}
                    alt={`${p.name} ${p.location}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </Link>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10 pointer-events-none" />

                <div className="absolute bottom-16 left-6 lg:left-20 text-left z-20">
                  <p className="text-[11px] uppercase tracking-eyebrow text-foreground/50">
                    {p.location}
                  </p>
                  <h3 className="font-display text-5xl lg:text-7xl mt-2">
                    {p.name}
                  </h3>

                  <div className="mt-8 flex flex-col items-start gap-3 text-[11px] uppercase tracking-eyebrow">
                    <div className="text-left">
                      <p className="text-foreground/40">{p.statusLabel}</p>
                      <p className="text-foreground mt-1">{p.statusValue}</p>
                    </div>
                    <div className="text-left">
                      <p className="text-foreground/40">{p.phaseLabel}</p>
                      <p className="text-foreground mt-1">{p.phaseValue}</p>
                    </div>
                  </div>

                  <Link
                    to={p.slug}
                    className="mt-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-eyebrow text-foreground hover:text-secondary"
                  >
                    Enquire <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

