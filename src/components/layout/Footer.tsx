import { Link } from "react-router-dom";
import ScrollReveal from "../shared/ScrollReveal";
import sableStoneLogo from "@/assets/sable-stone-logo.svg";

export default function Footer() {
  return (
    <footer className="bg-dark text-dark-foreground border-t border-border/40">
      <div className="container-wide py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <ScrollReveal
            variant="slide-up"
            delay={0}
            className="md:col-span-5 will-change-reveal"
          >
            <Link to="/" className="inline-flex w-fit" aria-label="Sable & Stone home">
              <img
                src={sableStoneLogo}
                alt="Sable & Stone"
                className="w-[190px] sm:w-[220px] lg:w-[260px] h-auto object-contain brightness-0 invert opacity-95"
              />
            </Link>
            <p className="mt-6 max-w-sm text-sm text-foreground/60 leading-relaxed">
              A boutique developer of architecturally significant residences
              across Accra and Ghana's coastline.
            </p>
          </ScrollReveal>

          <ScrollReveal
            variant="slide-up"
            delay={100}
            className="md:col-span-3 will-change-reveal"
          >
            <p className="text-[11px] uppercase tracking-eyebrow text-foreground/40 mb-5">
              Explore
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/properties" className="hover:text-secondary link-underline-draw pb-0.5">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-secondary link-underline-draw pb-0.5">
                  About
                </Link>
              </li>
              <li>
                <Link to="/journal" className="hover:text-secondary link-underline-draw pb-0.5">
                  Journal
                </Link>
              </li>
              <li>
                <Link to="/journal/sable-and-stone-profile" className="hover:text-secondary link-underline-draw pb-0.5">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-secondary link-underline-draw pb-0.5">
                  Contact
                </Link>
              </li>
            </ul>
          </ScrollReveal>

          <ScrollReveal
            variant="slide-up"
            delay={200}
            className="md:col-span-4 will-change-reveal"
          >
            <p className="text-[11px] uppercase tracking-eyebrow text-foreground/40 mb-5">
              Company
            </p>
            <address className="not-italic text-sm space-y-2 text-foreground/70 leading-relaxed">
              <div>Sable & Stone Ltd</div>
              <div>HNO. 22, Airport Residential Area</div>
              <div>Adomi Street</div>
              <div>Accra, Ghana</div>
              <div className="pt-3">
                <a href="mailto:info@sableandstonegh.com" className="hover:text-secondary link-underline-draw pb-0.5">
                  info@sableandstonegh.com
                </a>
              </div>
              <div>
                <a href="https://www.sableandstonegh.com" className="hover:text-secondary link-underline-draw pb-0.5">
                  www.sableandstonegh.com
                </a>
              </div>
            </address>
          </ScrollReveal>
        </div>

        <div className="mt-20 pt-8 hairline flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-foreground/40">
          <p>© {new Date().getFullYear()} Sable & Stone Ltd. All rights reserved.</p>
          <div className="flex gap-6 uppercase tracking-eyebrow">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

