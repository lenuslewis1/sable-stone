import { useEffect, useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { z } from "zod";
import Layout from "@/components/layout/Layout";
import { getPropertyBySlug, properties } from "@/data/properties";
import { toast } from "@/hooks/use-toast";
import ScrollReveal from "@/components/shared/ScrollReveal";

const leadSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

type LightboxState = {
  sectionKey: string;
  index: number;
};

export default function PropertyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const property = getPropertyBySlug(slug);
  const [activeGallerySection, setActiveGallerySection] = useState("all");
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);
  const [submitting, setSubmitting] = useState(false);

  if (!property) return <Navigate to="/properties" replace />;

  const related = properties.filter((p) => p.slug !== property.slug).slice(0, 3);
  const gallerySections = useMemo(
    () => [
      { key: "all", label: "All", images: property.gallery },
      ...property.gallerySections,
    ],
    [property.gallery, property.gallerySections],
  );
  const selectedGallerySection =
    gallerySections.find((section) => section.key === activeGallerySection) ?? gallerySections[0];
  const lightboxSection =
    lightbox ? gallerySections.find((section) => section.key === lightbox.sectionKey) ?? gallerySections[0] : null;

  const openHeroImage = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    if (target.closest("a, button, input, textarea, select")) return;
    setLightbox({ sectionKey: "all", index: 0 });
  };

  useEffect(() => {
    if (lightbox === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightbox(null);
      }
      if (event.key === "ArrowLeft") {
        setLightbox((current) => {
          if (!current) return current;
          const section = gallerySections.find((item) => item.key === current.sectionKey) ?? gallerySections[0];
          return {
            ...current,
            index: (current.index - 1 + section.images.length) % section.images.length,
          };
        });
      }
      if (event.key === "ArrowRight") {
        setLightbox((current) => {
          if (!current) return current;
          const section = gallerySections.find((item) => item.key === current.sectionKey) ?? gallerySections[0];
          return {
            ...current,
            index: (current.index + 1) % section.images.length,
          };
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [gallerySections, lightbox]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const parsed = leadSchema.safeParse({
      name: form.get("name"),
      email: form.get("email"),
      phone: form.get("phone"),
      message: form.get("message"),
    });
    if (!parsed.success) {
      toast({
        title: "Please check the form",
        description: parsed.error.issues[0]?.message ?? "Invalid input",
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast({
        title: "Enquiry received",
        description: `Thank you. A principal will be in touch about ${property.name}.`,
      });
    }, 600);
  };

  return (
    <Layout>
      <section
        className="relative h-[90vh] min-h-[560px] w-full overflow-hidden cursor-zoom-in"
        onClick={openHeroImage}
      >
        <button
          type="button"
          onClick={() => setLightbox({ sectionKey: "all", index: 0 })}
          className="absolute inset-0 block w-full h-full cursor-zoom-in group"
          aria-label={`View ${property.name} hero image full screen`}
        >
          <img
            src={property.gallery[0]}
            alt={property.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
          />
        </button>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background/30 via-background/10 to-background/85" />
        <div className="relative z-10 h-full container-wide flex flex-col justify-end pb-16 lg:pb-24">
          <Link
            to="/properties"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-eyebrow text-foreground/70 hover:text-secondary mb-8 w-fit page-load-reveal will-change-reveal link-underline-draw pb-1"
            style={{ animationDelay: "150ms" }}
          >
            <ArrowLeft className="w-4 h-4" /> All Properties
          </Link>
          <div
            className="flex items-center gap-3 mb-4 page-load-reveal will-change-reveal"
            style={{ animationDelay: "300ms" }}
          >
            <span className="px-3 py-1 bg-background/70 backdrop-blur-sm text-[10px] uppercase tracking-eyebrow">
              {property.status}
            </span>
            <span className="text-[11px] uppercase tracking-eyebrow text-secondary">
              {property.collection} / {property.category} / {property.location}
            </span>
          </div>
          <h1
            className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-5xl page-load-reveal will-change-reveal"
            style={{ animationDelay: "450ms" }}
          >
            {property.name}
          </h1>
          <p
            className="mt-6 max-w-2xl text-lg text-foreground/70 font-display italic page-load-reveal will-change-reveal"
            style={{ animationDelay: "600ms" }}
          >
            {property.tagline}
          </p>
        </div>
      </section>

      <section className="border-t border-border/40">
        <ScrollReveal variant="slide-up" className="container-wide py-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-8 gap-x-4 will-change-reveal">
          <Spec label="Bedrooms" value={property.bedrooms} />
          <Spec label="Bathrooms" value={property.bathrooms} />
          <Spec label="Interior" value={`${property.interior_sqm} m2`} />
          {property.plot_sqm > 0 && <Spec label="Plot" value={`${property.plot_sqm.toLocaleString()} m2`} />}
          <Spec label="Year" value={property.year} />
          <Spec label="Price" value={property.price} />
        </ScrollReveal>
      </section>

      <section className="border-t border-border/40 section-padding">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <ScrollReveal variant="slide-up" className="lg:col-span-7 space-y-6 will-change-reveal">
            <p className="text-[11px] uppercase tracking-eyebrow text-secondary">The residence</p>
            {property.description.map((p, i) => (
              <p key={i} className="font-display text-2xl lg:text-3xl leading-snug text-foreground/85">
                {p}
              </p>
            ))}
          </ScrollReveal>
          <ScrollReveal variant="slide-up" delay={150} className="lg:col-span-5 will-change-reveal">
            <p className="text-[11px] uppercase tracking-eyebrow text-secondary mb-6">Features</p>
            <ul className="divide-y divide-border/40 border-t border-b border-border/40">
              {property.features.map((f) => (
                <li key={f} className="py-4 text-sm text-foreground/80">{f}</li>
              ))}
            </ul>
            <div className="mt-8 text-sm text-foreground/60">
              <span className="text-foreground/40 uppercase tracking-eyebrow text-[10px] block mb-1">Architect</span>
              {property.architect}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-t border-border/40">
        <ScrollReveal variant="slide-up" className="container-wide pt-16 lg:pt-24 pb-8 will-change-reveal">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-eyebrow text-secondary">Gallery</p>
              <h2 className="mt-3 font-display text-3xl lg:text-5xl">{selectedGallerySection.label}</h2>
            </div>
            <p className="text-[11px] uppercase tracking-eyebrow text-foreground/40">
              {selectedGallerySection.images.length} images
            </p>
          </div>
          {gallerySections.length > 2 && (
            <div className="mt-8 flex flex-wrap gap-2">
              {gallerySections.map((section) => {
                const active = activeGallerySection === section.key;
                return (
                  <button
                    key={section.key}
                    type="button"
                    onClick={() => setActiveGallerySection(section.key)}
                    className={`px-4 py-3 text-[10px] uppercase tracking-eyebrow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary ${
                      active
                        ? "bg-foreground text-background"
                        : "border border-border/60 text-foreground/60 hover:border-secondary hover:text-secondary"
                    }`}
                    aria-pressed={active}
                  >
                    {section.label} <span className="ml-2 opacity-60">{section.images.length}</span>
                  </button>
                );
              })}
            </div>
          )}
        </ScrollReveal>
        <div className="container-wide pb-20 lg:pb-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
            {selectedGallerySection.images.map((src, i) => (
              <ScrollReveal
                key={`${selectedGallerySection.key}-${src}`}
                variant="scale-in"
                delay={i * 80}
                className={`relative overflow-hidden bg-muted group cursor-zoom-in will-change-reveal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                  i === 0 ? "md:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
                }`}
                as="button"
                type="button"
                aria-label={`View ${property.name} ${selectedGallerySection.label.toLowerCase()} image ${i + 1} full screen`}
                onClick={() => setLightbox({ sectionKey: selectedGallerySection.key, index: i })}
              >
                <img
                  src={src}
                  alt={`${property.name} - ${selectedGallerySection.label} image ${i + 1}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="enquire" className="border-t border-border/40 section-padding bg-muted/30">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <ScrollReveal variant="slide-up" className="lg:col-span-5 will-change-reveal">
            <p className="text-[11px] uppercase tracking-eyebrow text-secondary mb-6">Private Enquiry</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Request the<br />
              <em className="italic text-secondary">{property.name}</em> dossier.
            </h2>
            <p className="mt-8 text-foreground/60 leading-relaxed max-w-md">
              A principal will respond within one working day with floor plans,
              material schedule and viewing availability.
            </p>
          </ScrollReveal>
          <ScrollReveal variant="slide-up" delay={150} className="lg:col-span-7 will-change-reveal">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
              <Field label="Name" name="name" required maxLength={100} />
              <Field label="Email" name="email" type="email" required maxLength={255} />
              <Field label="Phone" name="phone" type="tel" maxLength={40} />
              <Field label="Preferred contact" name="preferred" placeholder="Email or phone" maxLength={40} />
              <div className="sm:col-span-2">
                <label className="block text-[11px] uppercase tracking-eyebrow text-foreground/50 mb-3">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  maxLength={1000}
                  placeholder={`I would like to learn more about ${property.name}.`}
                  className="w-full bg-transparent border-b border-border/60 focus:border-secondary outline-none py-2 text-foreground placeholder:text-foreground/30 resize-none"
                />
              </div>
              <div className="sm:col-span-2 pt-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-3 px-10 py-4 text-[11px] uppercase tracking-eyebrow bg-foreground text-background hover:bg-secondary hover:text-secondary-foreground transition-colors disabled:opacity-50 btn-hover-lift will-change-transform"
                >
                  {submitting ? "Sending..." : "Request dossier"} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-t border-border/40 section-padding">
        <div className="container-wide">
          <ScrollReveal variant="slide-up" className="flex items-baseline justify-between mb-12 will-change-reveal">
            <h2 className="font-display text-3xl lg:text-5xl">Other residences</h2>
            <Link
              to="/properties"
              className="text-[11px] uppercase tracking-eyebrow text-foreground/70 hover:text-secondary link-underline-draw pb-1 w-fit"
            >
              View portfolio -&gt;
            </Link>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
            {related.map((p, i) => (
              <ScrollReveal
                key={p.slug}
                variant="slide-up"
                delay={i * 100}
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
                  </div>
                  <p className="text-[11px] uppercase tracking-eyebrow text-foreground/40">
                    {p.collection} / {p.category}
                  </p>
                  <h3 className="font-display text-2xl mt-2 group-hover:text-secondary transition-colors">{p.name}</h3>
                  <p className="mt-1 text-sm text-foreground/60">{p.location}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {lightbox && lightboxSection && (
        <div
          className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-md flex items-center justify-center p-4 lg:p-12"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-foreground hover:text-secondary"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((current) => {
                if (!current) return current;
                return {
                  ...current,
                  index: (current.index - 1 + lightboxSection.images.length) % lightboxSection.images.length,
                };
              });
            }}
            className="absolute left-4 lg:left-10 text-foreground/70 hover:text-secondary p-3"
            aria-label="Previous"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <img
            src={lightboxSection.images[lightbox.index]}
            alt={`${property.name} - ${lightboxSection.label} image ${lightbox.index + 1}`}
            className="max-h-full max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((current) => {
                if (!current) return current;
                return {
                  ...current,
                  index: (current.index + 1) % lightboxSection.images.length,
                };
              });
            }}
            className="absolute right-4 lg:right-10 text-foreground/70 hover:text-secondary p-3"
            aria-label="Next"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-eyebrow text-foreground/60">
            {lightboxSection.label} - {lightbox.index + 1} / {lightboxSection.images.length}
          </p>
        </div>
      )}
    </Layout>
  );
}

function Spec({ label, value }: { label: string; value: string | number }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-eyebrow text-foreground/40 mb-2">{label}</p>
      <p className="font-display text-2xl lg:text-3xl">{value}</p>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  maxLength,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  maxLength?: number;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-[11px] uppercase tracking-eyebrow text-foreground/50 mb-3">
        {label}{required && <span className="text-secondary"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        maxLength={maxLength}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-border/60 focus:border-secondary outline-none py-2 text-foreground placeholder:text-foreground/30"
      />
    </div>
  );
}
