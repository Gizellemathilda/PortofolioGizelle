import { Cpu, Globe, Bot, Code2, Database, GraduationCap } from "lucide-react";
import { about, profile } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

const focusIcons = [Cpu, Globe, Bot, Code2, Database, GraduationCap];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading
        eyebrow="About Me"
        title="Berawal dari rasa ingin tahu tentang teknologi."
        subtitle={profile.tagline}
      />

      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="space-y-5">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-pretty leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
          <div className="grid grid-cols-2 gap-4 pt-2 sm:grid-cols-4">
            {about.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-border bg-card p-4 text-center shadow-sm"
              >
                <p className="text-gradient font-display text-2xl font-bold">{s.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-3">
            {about.focus.map((f, i) => {
              const Icon = focusIcons[i % focusIcons.length];
              return (
                <div
                  key={f}
                  className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-medium leading-tight">{f}</span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
