import { GraduationCap, Award, Briefcase, Download } from "lucide-react";
import { education, achievements, experiences } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

export function Resume () {
  return (
    <section id="resume" className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading
          eyebrow="Curriculum Vitae"
          title="Pendidikan, Prestasi dan Pengalaman"
          subtitle="Rangkuman perjalanan akademik, prestasi, dan pengalaman organisasi."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-8">
            <Reveal>
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                <GraduationCap className="h-5 w-5 text-primary" /> Pendidikan
              </h3>
              {education.map((e) => (
                <div key={e.school} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="font-semibold">{e.school}</h4>
                    <span className="shrink-0 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {e.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{e.degree}</p>
                  <p className="mt-2 text-sm font-medium text-foreground">{e.detail}</p>
                  <p className="text-xs text-muted-foreground">{e.location}</p>
                </div>
              ))}
            </Reveal>

            <Reveal delay={0.1}>
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                <Award className="h-5 w-5 text-primary" /> Prestasi
              </h3>
              {achievements.map((a) => (
                <div
                  key={a.title}
                  className="rounded-xl border border-primary/30 bg-gradient-to-br from-card to-primary/5 p-5 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="font-semibold leading-snug">{a.title}</h4>
                    <span className="shrink-0 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {a.period}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{a.detail}</p>
                  <p className="mt-2 text-xs font-medium text-foreground">{a.org}</p>
                </div>
              ))}
            </Reveal>

            <Reveal delay={0.15}>
              <a
                href="/cv-gizelle-mamentu.pdf"
                download
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.02]"
              >
                <Download className="h-4 w-4" /> Download Full CV (PDF)
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
              <Briefcase className="h-5 w-5 text-primary" /> Pengalaman
            </h3>
            <div className="relative space-y-6 border-l border-border pl-6">
              {experiences.map((exp) => (
                <div key={exp.role} className="relative">
                  <span className="absolute -left-[1.65rem] top-1.5 h-3 w-3 rounded-full border-2 border-background bg-primary shadow-glow" />
                  <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <h4 className="font-semibold">{exp.role}</h4>
                      <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-primary">{exp.org}</p>
                    <ul className="mt-3 space-y-1.5">
                      {exp.points.map((pt) => (
                        <li key={pt} className="flex gap-2 text-sm text-muted-foreground">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
