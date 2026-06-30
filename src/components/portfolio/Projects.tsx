import { useRef, type MouseEvent } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/lib/portfolio-data";
import { SectionHeading } from "./Reveal";

type Project = (typeof projects)[number];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(my, [0, 1], [8, -8]), {
    stiffness: 150,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-8, 8]), {
    stiffness: 150,
    damping: 18,
  });

  const spotX = useTransform(mx, (v) => `${v * 100}%`);
  const spotY = useTransform(my, (v) => `${v * 100}%`);

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  }

  function handleLeave() {
    mx.set(0.5);
    my.set(0.5);
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow duration-300 hover:shadow-elegant"
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: useTransform(
              [spotX, spotY],
              ([x, y]) =>
                `radial-gradient(220px circle at ${x} ${y}, color-mix(in oklab, var(--primary) 18%, transparent), transparent 70%)`,
            ),
          }}
        />

        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={project.image}
            alt={`Tampilan proyek ${project.title}`}
            loading="lazy"
            width={800}
            height={600}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent opacity-60" />
        </div>

        <div className="flex flex-1 flex-col p-5">
          <h3 className="text-lg font-semibold transition-colors group-hover:text-primary">
            {project.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-md bg-primary/10 px-2 py-1 text-[11px] font-medium text-primary"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-5 flex gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-border bg-secondary px-3 py-2 text-sm font-medium transition-colors hover:bg-accent"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-primary px-3 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              <ExternalLink className="h-4 w-4" /> Demo
            </a>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Projects"
          subtitle="Beberapa proyek pilihan di bidang IoT, robotika, dan web development."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
