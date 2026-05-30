import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Properties", href: "/properties" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";
  const transparent = isHome && !mobileOpen;

  return (
    <nav
      className={`relative inset-x-0 z-50 transition-colors duration-500 ${
        transparent
          ? "bg-transparent"
          : "bg-background/85 backdrop-blur-md border-b border-border/40"
      }`}
    >
      <div className="container-wide flex items-center justify-between h-20 lg:h-24">
        <Link to="/" className="flex items-baseline gap-2 group">
          <span className="font-display text-2xl lg:text-3xl tracking-tight text-foreground">
            Sable <span className="text-secondary">&</span> Stone
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`text-[11px] uppercase tracking-eyebrow transition-colors ${
                location.pathname === l.href
                  ? "text-secondary"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center px-6 py-3 text-[11px] uppercase tracking-eyebrow border border-foreground/30 text-foreground hover:bg-foreground hover:text-background transition-colors"
        >
          Enquire
        </Link>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-background border-t border-border/40"
          >
            <div className="container-wide py-8 flex flex-col gap-6">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-display text-3xl text-foreground"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex w-fit items-center px-6 py-3 text-[11px] uppercase tracking-eyebrow border border-foreground/30"
              >
                Enquire
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
