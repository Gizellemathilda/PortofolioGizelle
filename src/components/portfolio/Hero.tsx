import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Github, Linkedin, Instagram } from "lucide-react";
import { profile } from "@/lib/portfolio-data";
import { handleAnchorClick } from "@/lib/smooth-scroll";
import heroBg from "@/assets/hero-bg.jpg";
import bgpribadi from "@/assets/foto-gizelle.jpg";

export function Hero () {
  const initials = profile.name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");

  return (
    <section id="home" className="relative overflow-hidden bg-hero-glow pt-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage: "radial-gradient(ellipse at 70% 0%, black, transparent 70%)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-24 pt-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-primary shadow-glow" />
            Terbuka untuk Kesempatan Kolaborasi & Magang
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-balance text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl"
          >
            Hi, Saya <span className="text-gradient">Gizelle</span>
            <br /> Mathilda Mamentu
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-4 flex flex-wrap gap-x-2 gap-y-1 text-lg font-medium text-muted-foreground"
          >
            <span className="text-foreground">{profile.headline}</span>
            <span className="text-primary">·</span>
            {profile.roles.join(" · ")}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-5 max-w-xl text-pretty text-muted-foreground"
          >
            {profile.shortBio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="/cv-gizelle-mamentu.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03]"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
            <a
              href="#projects"
              onClick={(e) => handleAnchorClick(e, "#projects")}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/60 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-accent"
            >
              View Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => handleAnchorClick(e, "#contact")}
              className="inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 flex items-center gap-3"
          >
            {[
              { icon: Github, href: profile.socials.github },
              { icon: Linkedin, href: profile.socials.linkedin },
              { icon: Instagram, href: profile.socials.instagram },
            ].map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-card/50 text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-primary opacity-20 blur-2xl" />
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-border bg-card shadow-elegant">
            <img
              src={bgpribadi}
              alt={profile.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl border border-border bg-card/90 p-4 shadow-elegant backdrop-blur">
            <div className="flex items-center justify-between text-center">
              {[
                { v: "3.89", l: "GPA" },
                { v: "5+", l: "Projects" },
                { v: "I3O", l: "Silver" },
              ].map((s) => (
                <div key={s.l} className="flex-1">
                  <p className="font-display text-lg font-bold text-foreground">{s.v}</p>
                  <p className="text-[11px] text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        onClick={(e) => handleAnchorClick(e, "#about")}
        className="mx-auto mb-8 flex w-fit items-center gap-2 text-xs text-muted-foreground"
      >
        <ArrowDown className="h-4 w-4 animate-bounce" /> Scroll to explore
      </a>
    </section>
  );
}
