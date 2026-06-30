import { Github, Linkedin, Instagram, Mail, Heart } from "lucide-react";
import { profile } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-10 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display text-sm font-semibold">{profile.name}</p>
          <p className="text-xs text-muted-foreground">{profile.tagline}</p>
        </div>
        <div className="flex items-center gap-2">
          {[
            { icon: Github, href: profile.socials.github },
            { icon: Linkedin, href: profile.socials.linkedin },
            { icon: Instagram, href: profile.socials.instagram },
            { icon: Mail, href: `mailto:${profile.email}` },
          ].map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:text-primary"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        <p className="inline-flex items-center gap-1.5">
          © {new Date().getFullYear()} {profile.name}.
        </p>
      </div>
    </footer>
  );
}
