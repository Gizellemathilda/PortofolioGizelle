import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { navLinks, profile } from "@/lib/portfolio-data";
import { useTheme } from "@/hooks/use-theme";
import { handleAnchorClick } from "@/lib/smooth-scroll";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const { theme, toggle } = useTheme();

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const initials = profile.name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a
          href="#home"
          onClick={(e) => handleAnchorClick(e, "#home")}
          className="flex items-center gap-2.5"
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-primary text-sm font-bold text-primary-foreground shadow-glow">
            {initials}
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:block">
            Gizelle<span className="text-muted-foreground">.dev</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleAnchorClick(e, link.href)}
              className={`relative rounded-md px-3 py-2 text-sm transition-colors ${
                active === link.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
              {active === link.href && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-primary"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>


        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-card/50 text-foreground transition-colors hover:bg-accent"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href="#contact"
            onClick={(e) => handleAnchorClick(e, "#contact")}
            className="hidden rounded-lg bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03] sm:block"
          >
            Hire Me
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-card/50 md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-gradient-primary"
      />


      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href, () => setOpen(false))}
                  className={`rounded-md px-3 py-2.5 text-sm transition-colors hover:bg-accent hover:text-foreground ${
                    active === link.href ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
