import { skillGroups } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

export function Skills () {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading
        eyebrow="Skills"
        title="Tools & Teknologi yang Saya Gunakan"
        subtitle="Kombinasi keterampilan pengembangan web, IoT, dan rekayasa perangkat lunak."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-border bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
