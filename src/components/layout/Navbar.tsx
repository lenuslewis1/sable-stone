import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import sableStoneLogo from "@/assets/sable-stone-logo.svg";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Properties", href: "/properties" },
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
      className={`inset-x-0 z-50 transition-colors duration-500 page-load-reveal will-change-reveal ${
        transparent
          ? "absolute top-0"
          : "bg-background/85 backdrop-blur-md border-b border-border/40"
      }`}
      style={{ animationDelay: "0ms" }}
    >
      <div
        className={`container-wide flex items-center justify-between h-20 lg:h-24 ${
          transparent
            ? "mt-4 bg-background/20 backdrop-blur-[2px]"
            : ""
        }`}
      >
        <Link to="/" className="flex items-center group" aria-label="Sable & Stone home">
          <img
            src={sableStoneLogo}
            alt="Sable & Stone"
            className={`w-[132px] sm:w-[148px] lg:w-[172px] h-auto max-h-14 object-contain opacity-95 transition-opacity group-hover:opacity-100 ${
              transparent ? "brightness-0 invert" : "brand-logo-nav"
            }`}
          />
        </Link>
 
        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`text-[11px] uppercase tracking-eyebrow transition-colors link-underline-draw pb-1 ${
                location.pathname === l.href
                  ? "text-secondary"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
 
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 text-[11px] uppercase tracking-eyebrow border border-foreground/30 text-foreground hover:bg-foreground hover:text-background btn-hover-lift will-change-transform"
          >
            Enquire
          </Link>
        </div>
 
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
              <div className="flex items-center justify-between border-b border-border/40 pb-6">
                <span className="text-[11px] uppercase tracking-eyebrow text-foreground/50">
                  Display
                </span>
                <ThemeToggle />
              </div>
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
