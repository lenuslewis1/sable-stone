import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/shared/ScrollReveal";

import heroVilla from "@/assets/hero-villa.jpg";
import propertyVilla from "@/assets/property-villa.jpg";
import villaMia1 from "@/assets/residences/villa-mia-1.webp";
import villaMia2 from "@/assets/residences/villa-mia-2.webp";
import villaMia3 from "@/assets/residences/villa-mia-3.webp";
import villaMia4 from "@/assets/residences/villa-mia-4.webp";
import villaMia5 from "@/assets/residences/villa-mia-5.webp";
import villaMia6 from "@/assets/residences/villa-mia-6.webp";
import aboutDetail from "@/assets/about-detail.jpg";
import whatWeStandFor from "@/assets/what-we-stand-for-businessman.webp";
import buyerPersonalisationHome from "@/assets/buyer-personalisation-home.png";
import constructionDelivery from "@/assets/construction-delivery.webp";
import philosophyVilla from "@/assets/philosophy-villa.webp";

const flagshipResidences = [
  {
    name: "Villa MIA",
    location: "Labone",
    img: villaMia1,
    statusLabel: "Design phase",
    statusValue: "Pending sale",
    phaseLabel: "Building now",
    phaseValue: "Active work",
    slug: "/properties/maison-cantonments",
  },
  {
    name: "Villa MIA",
    location: "Cantoments",
    img: villaMia2,
    statusLabel: "Inspections",
    statusValue: "Accepted",
    phaseLabel: "Prep work",
    phaseValue: "Opened",
    slug: "/properties/casa-labadi",
  },
  {
    name: "Villa MIA",
    location: "Airport Hills",
    img: villaMia3,
    statusLabel: "Early plan",
    statusValue: "Awaiting OK",
    phaseLabel: "Work begun",
    phaseValue: "Ongoing now",
    slug: "/properties/maison-airport",
  },
  {
    name: "Villa MIA",
    location: "Dzowulu",
    img: villaMia4,
    statusLabel: "Concept stage",
    statusValue: "In studio",
    phaseLabel: "Site works",
    phaseValue: "Mobilising",
    slug: "/properties",
  },
  {
    name: "Villa MIA",
    location: "East Airport",
    img: villaMia5,
    statusLabel: "Permits",
    statusValue: "Submitted",
    phaseLabel: "Groundworks",
    phaseValue: "Scheduled",
    slug: "/properties",
  },
  {
    name: "Villa MIA",
    location: "Tse Addo",
    img: villaMia6,
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
    img: aboutDetail,
    alt: "Travertine and bronze architectural material detail",
  },
  {
    title: "Construction delivery",
    body: "We build what we draw. A single team carries each residence from groundworks to handover, on a deliberately limited schedule.",
    img: constructionDelivery,
    alt: "Construction workers aligning timber on a building site",
  },
  {
    title: "Buyer personalisation",
    body: "Controlled customisation within a considered framework. Material selections, finish packages and FF&E are tuned to the household, never the market.",
    img: buyerPersonalisationHome,
    alt: "Couple standing outside a modern residence at sunset",
  },
  {
    title: "Asset stewardship",
    body: "Discreet, long-horizon care for the residences we deliver — protecting both the architecture and the investment behind it.",
    img: propertyVilla,
    alt: "Completed Sable and Stone villa at dusk",
  },
];

const clientServices = [
  {
    title: "Exclusive sales",
    body: "Clear, expert insight makes buying or selling your property seamless, secure, and stress-free through every stage.",
  },
  {
    title: "Property care",
    body: "Focused property management protects your investment and brings peace of mind for owners and tenants alike.",
  },
  {
    title: "Virtual tours",
    body: "Immersive virtual tours let buyers explore homes from anywhere, saving time and drawing more serious offers fast.",
  },
  {
    title: "Market insights",
    body: "Accurate market research guides each step, helping our clients make smart moves and reach their property goals with ease.",
  },
];

const heroSlides = [
  {
    video: "/sable-sand-hero-1.mp4",
    eyebrow: "A boutique luxury development house — Accra",
    headline: "Strategic design for premium property success.",
    accent: "premium",
    primaryLabel: "Discover Sable & Stone",
    primaryHref: "/properties",
    secondaryLabel: "Get in touch →",
    secondaryHref: "/contact",
  },
  {
    video: "/sable-sand-hero-2.mp4",
    eyebrow: "Villa MIA — private residences",
    headline: "A new standard for modern Ghanaian luxury.",
    accent: "modern",
    primaryLabel: "View residences",
    primaryHref: "/properties",
    secondaryLabel: "Request a viewing →",
    secondaryHref: "/contact",
  },
  {
    video: "/sable-stone-hero.mp4",
    eyebrow: "Designed, developed and delivered",
    headline: "Homes shaped around privacy, permanence and care.",
    accent: "permanence",
    primaryLabel: "Explore our approach",
    primaryHref: "/about",
    secondaryLabel: "Speak with the studio →",
    secondaryHref: "/contact",
  },
];

export default function Index() {
  const [typedHeadline, setTypedHeadline] = useState("");
  const [activeHeroVideo, setActiveHeroVideo] = useState(0);
  const activeHeroSlide = heroSlides[activeHeroVideo];

  const slowHeroVideo = (video: HTMLVideoElement) => {
    video.defaultPlaybackRate = 0.55;
    video.playbackRate = 0.55;
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const interval = window.setInterval(() => {
      setActiveHeroVideo((current) => (current + 1) % heroSlides.length);
    }, 9000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setTypedHeadline(activeHeroSlide.headline);
      return;
    }

    setTypedHeadline("");
    let index = 0;
    const interval = window.setInterval(() => {
      index += 1;
      setTypedHeadline(activeHeroSlide.headline.slice(0, index));
      if (index >= activeHeroSlide.headline.length) {
        window.clearInterval(interval);
      }
    }, 46);

    return () => window.clearInterval(interval);
  }, [activeHeroSlide.headline]);

  const accentStart = activeHeroSlide.headline.indexOf(activeHeroSlide.accent);
  const accentEnd = accentStart + activeHeroSlide.accent.length;
  const typedBeforeAccent = typedHeadline.slice(0, Math.min(typedHeadline.length, accentStart));
  const typedAccent =
    typedHeadline.length > accentStart
      ? typedHeadline.slice(accentStart, Math.min(typedHeadline.length, accentEnd))
      : "";
  const typedAfterAccent = typedHeadline.length > accentEnd ? typedHeadline.slice(accentEnd) : "";
  const isTyping = typedHeadline.length < activeHeroSlide.headline.length;

  return (
    <Layout transparentNav>
      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        {heroSlides.map((slide, index) => (
          <video
            key={slide.video}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              activeHeroVideo === index ? "opacity-100" : "opacity-0"
            }`}
            autoPlay
            muted
            loop
            playsInline
            preload={index === 0 ? "auto" : "metadata"}
            poster={heroVilla}
            aria-label={`Sable & Stone luxury residence hero video ${index + 1}`}
            onCanPlay={(event) => slowHeroVideo(event.currentTarget)}
            onLoadedMetadata={(event) => slowHeroVideo(event.currentTarget)}
          >
            <source src={slide.video} type="video/mp4" />
          </video>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-background/35 via-background/15 to-background/95" />

        <div
          className="absolute bottom-8 right-6 z-10 hidden gap-3 lg:flex"
          aria-label="Hero video carousel"
        >
          {heroSlides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveHeroVideo(index)}
              className={`h-px w-12 transition-colors ${
                activeHeroVideo === index ? "bg-secondary" : "bg-foreground/35"
              }`}
              aria-label={`Show hero video ${index + 1}`}
              aria-current={activeHeroVideo === index}
            />
          ))}
        </div>

        <div className="relative h-full container-wide flex items-end pb-10 md:pb-12 lg:pb-14">
          <div className="w-full grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] gap-8 lg:gap-14 items-end">
            <div>
          <p
            className="text-[11px] uppercase tracking-eyebrow text-secondary mb-4 page-load-reveal will-change-reveal"
            style={{ animationDelay: "150ms", textShadow: "0 2px 16px rgba(0,0,0,0.55)" }}
          >
            {activeHeroSlide.eyebrow}
          </p>
          <h1
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.02] text-foreground max-w-4xl min-h-[7.5rem] md:min-h-[9.5rem] lg:min-h-[9rem] page-load-reveal will-change-reveal"
            style={{ animationDelay: "300ms", textShadow: "0 3px 22px rgba(0,0,0,0.7)" }}
            aria-label={activeHeroSlide.headline}
          >
            <span aria-hidden="true">
              {typedBeforeAccent}
              {typedAccent && <em className="italic text-secondary">{typedAccent}</em>}
              {typedAfterAccent}
              <span
                className={`ml-1 inline-block h-[0.8em] w-px translate-y-[0.08em] bg-secondary ${
                  isTyping ? "animate-pulse" : "opacity-0"
                }`}
              />
            </span>
          </h1>
            </div>
          <div
            className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-5 page-load-reveal will-change-reveal"
            style={{ animationDelay: "450ms" }}
          >
            <Link
              to={activeHeroSlide.primaryHref}
              className="inline-flex items-center gap-3 px-8 py-4 text-[11px] uppercase tracking-eyebrow bg-foreground text-background hover:bg-secondary hover:text-secondary-foreground transition-colors btn-hover-lift will-change-transform"
            >
              {activeHeroSlide.primaryLabel} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to={activeHeroSlide.secondaryHref}
              className="text-[11px] uppercase tracking-eyebrow text-foreground/90 hover:text-secondary transition-colors link-underline-draw pb-1"
            >
              {activeHeroSlide.secondaryLabel}
            </Link>
          </div>
          </div>
        </div>
      </section>

      {/* FLAGSHIP RESIDENCES — HORIZONTAL SCROLL */}
      <HorizontalResidences />

      {/* WHAT WE STAND FOR */}
      <section className="section-padding">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <ScrollReveal
            variant="slide-up"
            className="lg:col-span-5 flex flex-col gap-10 will-change-reveal"
          >
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
                alt="Businessman on a call inside a luxury residence"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out hover:scale-105"
                width={1024}
                height={1280}
              />
            </div>
          </ScrollReveal>
          <ScrollReveal
            variant="slide-up"
            delay={150}
            className="lg:col-span-7 flex flex-col justify-center space-y-8 text-foreground/70 leading-relaxed will-change-reveal"
          >
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
          </ScrollReveal>
        </div>
      </section>

      {/* PILLARS — FLAGSHIP-LED DEVELOPMENT */}
      <section className="border-t border-border/40 section-padding">
        <div className="container-wide">
          <ScrollReveal variant="slide-up" className="max-w-3xl will-change-reveal">
            <p className="text-[11px] uppercase tracking-eyebrow text-secondary mb-6">
              02 — Flagship-Led Development
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              A boutique luxury <em className="italic text-secondary">developer</em>.
            </h2>
          </ScrollReveal>

          <div className="mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-3 gap-px bg-border/40">
            {pillars.map((p, i) => (
              <ScrollReveal
                key={p.title}
                variant="slide-up"
                delay={i * 100}
                className="bg-background p-8 lg:p-12 card-hover-glow will-change-reveal"
              >
                <p className="text-[11px] uppercase tracking-eyebrow text-foreground/40">
                  0{i + 1}
                </p>
                <h3 className="font-display text-2xl lg:text-3xl mt-4">{p.title}</h3>
                <p className="mt-6 text-sm text-foreground/65 leading-relaxed">{p.body}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-t border-border/40 py-24 lg:py-32">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <ScrollReveal
            variant="slide-up"
            className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start will-change-reveal"
          >
            <p className="text-[11px] uppercase tracking-eyebrow text-secondary mb-6">
              04 — Apartments & Luxury
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              The full <em className="italic text-secondary">service</em>.
            </h2>
            <p className="mt-8 max-w-sm text-sm text-foreground/55 leading-relaxed">
              Each discipline is handled as one continuous process, from first
              study to long-term care.
            </p>
          </ScrollReveal>

          <div className="lg:col-span-8 space-y-8 lg:space-y-24">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="sticky top-24 lg:top-32"
                style={{ zIndex: i + 1 }}
              >
                <article className="min-h-[62vh] overflow-hidden border border-border/60 bg-background/95 shadow-2xl shadow-black/25 card-hover-glow backdrop-blur-sm">
                  <div className="grid min-h-[62vh] grid-cols-1 lg:grid-cols-[0.92fr_1.08fr]">
                    <div className="relative min-h-[260px] overflow-hidden lg:min-h-full">
                      <img
                        src={s.img}
                        alt={s.alt}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] ease-out hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-background/20" />
                    </div>

                    <div className="flex min-h-[calc(62vh-16rem)] flex-col justify-between gap-12 p-8 sm:p-10 lg:min-h-full lg:p-14">
                      <p className="text-[11px] uppercase tracking-eyebrow text-foreground/40">
                        0{i + 1}
                      </p>
                      <div>
                        <h3 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                          {s.title}
                        </h3>
                        <p className="mt-8 max-w-xl text-base text-foreground/65 leading-relaxed">
                          {s.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY SPLIT */}
      <section className="border-t border-border/40">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <ScrollReveal variant="scale-in" className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[720px] will-change-reveal">
            <img
              src={philosophyVilla}
              alt="Modern illuminated Sable and Stone villa at dusk"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] ease-out hover:scale-[1.03]"
            />
          </ScrollReveal>
          <ScrollReveal variant="slide-up" delay={150} className="px-6 lg:px-20 py-24 lg:py-40 flex flex-col justify-center will-change-reveal">
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
              to="/journal/our-philosophy"
              className="mt-12 inline-flex items-center gap-3 text-[11px] uppercase tracking-eyebrow text-foreground hover:text-secondary link-underline-draw pb-1 w-fit"
            >
              Read our philosophy <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <ClientServicesScroller />
    </Layout>
  );
}

function ClientServicesScroller() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["42vw", "-52%"]);

  return (
    <section
      ref={ref}
      className="relative border-t border-border/40 bg-background"
      style={{ height: "230vh" }}
      aria-label="Client services"
    >
      <div className="sticky top-0 h-screen overflow-hidden py-20 lg:py-24">
        <div className="container-wide">
          <ScrollReveal variant="slide-up" className="max-w-4xl will-change-reveal">
            <p className="text-[11px] uppercase tracking-eyebrow text-secondary mb-6">
              06 — Client Services
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Guidance beyond the <em className="italic text-secondary">address</em>.
            </h2>
          </ScrollReveal>
        </div>

        <div className="mt-12 lg:mt-16">
          <motion.div
            style={{ x }}
            className="flex w-max gap-5 px-6 lg:gap-6 lg:px-12 will-change-transform"
          >
            {clientServices.map((item, i) => (
              <article
                key={item.title}
                className="flex min-h-[340px] w-[82vw] shrink-0 flex-col justify-between border border-border/60 bg-background p-8 shadow-2xl shadow-black/20 card-hover-glow sm:w-[420px] lg:w-[480px] lg:p-10"
              >
                <p className="text-[11px] uppercase tracking-eyebrow text-foreground/40">
                  0{i + 1}
                </p>
                <div>
                  <h3 className="font-display text-3xl lg:text-4xl leading-[1.08]">
                    {item.title}
                  </h3>
                  <p className="mt-6 text-sm text-foreground/65 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
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
                className="mt-12 inline-flex items-center gap-3 text-[11px] uppercase tracking-eyebrow text-foreground hover:text-secondary link-underline-draw pb-1 w-fit"
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
                    {p.name}
                  </p>
                  <h3 className="font-display text-5xl lg:text-7xl mt-2">
                    {p.location}
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
                    className="mt-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-eyebrow text-foreground hover:text-secondary link-underline-draw pb-1 w-fit"
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

