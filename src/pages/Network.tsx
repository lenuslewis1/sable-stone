import { Building2, Globe2, MapPin, ShieldCheck } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/shared/ScrollReveal";
import connectivityHero from "@/assets/connectivity-hero.jpg";
import ghanaNetworkMap from "@/assets/ghana-network-map.jpg";
import datacenterBg from "@/assets/datacenter-bg.jpg";

const regions = [
  { area: "Accra core", detail: "Cantonments, Labone, Airport Residential and Ridge." },
  { area: "Coastal corridor", detail: "Selective sites from Labadi toward the eastern waterfront." },
  { area: "Growth districts", detail: "Airport Hills, East Airport, Tse Addo and emerging prime pockets." },
  { area: "Regional access", detail: "Investor and development relationships across Ghana and West Africa." },
];

const strengths = [
  {
    icon: MapPin,
    title: "Site intelligence",
    body: "We evaluate each location through access, security, planning context, privacy and long-term resale depth.",
  },
  {
    icon: Building2,
    title: "Delivery partners",
    body: "Architects, engineers, specialist contractors and suppliers are selected for precision, not convenience.",
  },
  {
    icon: ShieldCheck,
    title: "Private channels",
    body: "Discreet relationships give buyers and investors a clearer route into scarce, high-quality opportunities.",
  },
];

export default function Network() {
  return (
    <Layout>
      <section className="relative min-h-[76vh] overflow-hidden">
        <img
          src={connectivityHero}
          alt="Sable and Stone network across Ghana"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/45 via-background/50 to-background" />
        <div className="relative container-wide flex min-h-[76vh] flex-col justify-end pb-20 lg:pb-28 pt-24">
          <p
            className="text-[11px] uppercase tracking-eyebrow text-secondary mb-6 page-load-reveal will-change-reveal"
            style={{ animationDelay: "150ms" }}
          >
            Network
          </p>
          <h1
            className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-5xl page-load-reveal will-change-reveal"
            style={{ animationDelay: "300ms" }}
          >
            A private network for <em className="italic text-secondary">prime</em> Ghanaian real estate.
          </h1>
          <p
            className="mt-10 max-w-2xl text-base md:text-lg text-foreground/70 leading-relaxed page-load-reveal will-change-reveal"
            style={{ animationDelay: "450ms" }}
          >
            Our work depends on the relationships behind each address: landowners,
            planning specialists, construction partners, advisors and private
            buyers who move before a project reaches the open market.
          </p>
        </div>
      </section>

      <section className="border-t border-border/40 section-padding">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <ScrollReveal variant="slide-up" className="lg:col-span-5 will-change-reveal">
            <p className="text-[11px] uppercase tracking-eyebrow text-secondary mb-6">
              Coverage
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Where our <em className="italic text-secondary">relationships</em> create access.
            </h2>
            <p className="mt-8 text-foreground/60 leading-relaxed">
              We focus on locations where architectural quality, buyer depth and
              long-term land value can support a serious development. The map is
              intentionally selective.
            </p>
          </ScrollReveal>

          <ScrollReveal
            variant="scale-in"
            delay={120}
            className="lg:col-span-7 relative min-h-[420px] overflow-hidden border border-border/40 will-change-reveal"
          >
            <img
              src={ghanaNetworkMap}
              alt="Ghana network map"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-background/20" />
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 bg-gradient-to-t from-background/90 to-transparent">
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-eyebrow text-secondary">
                <Globe2 className="h-4 w-4" />
                Ghana first, West Africa next
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-t border-border/40">
        <div className="container-wide py-20 lg:py-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/40">
          {regions.map((region, i) => (
            <ScrollReveal
              key={region.area}
              variant="slide-up"
              delay={i * 80}
              className="bg-background p-8 lg:p-10 card-hover-glow will-change-reveal"
            >
              <p className="text-[11px] uppercase tracking-eyebrow text-foreground/40">
                0{i + 1}
              </p>
              <h3 className="font-display text-2xl lg:text-3xl mt-4">{region.area}</h3>
              <p className="mt-4 text-sm text-foreground/60 leading-relaxed">{region.detail}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border/40">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <ScrollReveal
            variant="scale-in"
            className="relative min-h-[460px] lg:min-h-[720px] will-change-reveal"
          >
            <img
              src={datacenterBg}
              alt="Private development infrastructure"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </ScrollReveal>
          <div className="px-6 lg:px-20 py-20 lg:py-32 flex flex-col justify-center">
            <ScrollReveal variant="slide-up" className="will-change-reveal">
              <p className="text-[11px] uppercase tracking-eyebrow text-secondary mb-6">
                Advantage
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                Built through <em className="italic text-secondary">access</em>, judgment and discretion.
              </h2>
            </ScrollReveal>
            <div className="mt-12 space-y-8">
              {strengths.map((item, i) => {
                const Icon = item.icon;
                return (
                  <ScrollReveal
                    key={item.title}
                    variant="slide-up"
                    delay={i * 100}
                    className="flex gap-5 will-change-reveal"
                  >
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center border border-border/60 text-secondary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl">{item.title}</h3>
                      <p className="mt-3 text-sm text-foreground/60 leading-relaxed">{item.body}</p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}
