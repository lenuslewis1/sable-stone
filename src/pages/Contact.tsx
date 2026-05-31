import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function Contact() {
  return (
    <Layout>
      <section className="container-wide pt-20 lg:pt-28 pb-24">
        <p
          className="text-[11px] uppercase tracking-eyebrow text-secondary mb-6 page-load-reveal will-change-reveal"
          style={{ animationDelay: "150ms" }}
        >
          Enquiries
        </p>
        <h1
          className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-4xl page-load-reveal will-change-reveal"
          style={{ animationDelay: "300ms" }}
        >
          We respond,<br />
          <em className="italic text-secondary">personally.</em>
        </h1>
      </section>

      <section className="border-t border-border/40">
        <div className="container-wide py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <ScrollReveal
            variant="slide-up"
            className="lg:col-span-5 space-y-12 will-change-reveal"
          >
            <div>
              <p className="text-[11px] uppercase tracking-eyebrow text-foreground/40 mb-3">Studio</p>
              <p className="font-display text-2xl leading-snug">
                No. 12 Cantonments Road<br />Accra, Ghana
              </p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-eyebrow text-foreground/40 mb-3">Private enquiries</p>
              <a href="mailto:hello@sableandstone.gh" className="font-display text-2xl hover:text-secondary block link-underline-draw pb-0.5 w-fit">
                hello@sableandstone.gh
              </a>
              <a href="tel:+233300000000" className="font-display text-2xl hover:text-secondary block mt-1 link-underline-draw pb-0.5 w-fit">
                +233 (0) 30 000 0000
              </a>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-eyebrow text-foreground/40 mb-3">By appointment</p>
              <p className="text-foreground/60">Monday – Friday · 10:00 – 18:00 GMT</p>
            </div>
          </ScrollReveal>

          <ScrollReveal
            variant="slide-up"
            delay={150}
            className="lg:col-span-7 will-change-reveal"
          >
            <form
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you. We will be in touch shortly.");
              }}
            >
              <Field label="Name" name="name" />
              <Field label="Email" name="email" type="email" />
              <Field label="Phone" name="phone" type="tel" />
              <Field label="Residence of interest" name="property" placeholder="Optional" />
              <div className="sm:col-span-2">
                <label className="block text-[11px] uppercase tracking-eyebrow text-foreground/50 mb-3">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full bg-transparent border-b border-border/60 focus:border-secondary outline-none py-2 text-foreground placeholder:text-foreground/30 resize-none"
                />
              </div>
              <div className="sm:col-span-2 pt-4">
                <button
                  type="submit"
                  className="inline-flex items-center px-10 py-4 text-[11px] uppercase tracking-eyebrow bg-foreground text-background hover:bg-secondary hover:text-secondary-foreground transition-colors btn-hover-lift will-change-transform"
                >
                  Send enquiry
                </button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-[11px] uppercase tracking-eyebrow text-foreground/50 mb-3">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-border/60 focus:border-secondary outline-none py-2 text-foreground placeholder:text-foreground/30"
      />
    </div>
  );
}
