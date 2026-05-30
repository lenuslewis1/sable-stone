import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-dark-foreground border-t border-border/40">
      <div className="container-wide py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="font-display text-3xl lg:text-4xl">
              Sable <span className="text-secondary">&</span> Stone
            </div>
            <p className="mt-6 max-w-sm text-sm text-foreground/60 leading-relaxed">
              A boutique developer of architecturally significant residences
              across Accra and Ghana's coastline.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] uppercase tracking-eyebrow text-foreground/40 mb-5">
              Explore
            </p>
            <ul className="space-y-3 text-sm">
              <li><Link to="/properties" className="hover:text-secondary">Properties</Link></li>
              <li><Link to="/about" className="hover:text-secondary">About</Link></li>
              <li><Link to="/journal" className="hover:text-secondary">Journal</Link></li>
              <li><Link to="/contact" className="hover:text-secondary">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-eyebrow text-foreground/40 mb-5">
              Studio
            </p>
            <address className="not-italic text-sm space-y-2 text-foreground/70 leading-relaxed">
              <div>No. 12 Cantonments Road</div>
              <div>Accra, Ghana</div>
              <div className="pt-3">
                <a href="mailto:hello@sableandstone.gh" className="hover:text-secondary">hello@sableandstone.gh</a>
              </div>
              <div>+233 (0) 30 000 0000</div>
            </address>
          </div>
        </div>

        <div className="mt-20 pt-8 hairline flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-foreground/40">
          <p>© {new Date().getFullYear()} Sable & Stone Properties. All rights reserved.</p>
          <div className="flex gap-6 uppercase tracking-eyebrow">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
