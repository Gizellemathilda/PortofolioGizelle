import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, MessageCircle } from "lucide-react";
import { profile } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

const schema = z.object({
  name: z.string().trim().min(1, "Nama wajib diisi").max(100),
  email: z.string().trim().email("Email tidak valid").max(255),
  message: z.string().trim().min(5, "Pesan minimal 5 karakter").max(1000),
});

const channels = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: MessageCircle, label: "WhatsApp", value: `+${profile.whatsapp}`, href: `https://wa.me/${profile.whatsapp}` },
  { icon: MapPin, label: "Location", value: profile.location, href: "#" },
];

const socials = [
  { icon: Github, label: "GitHub", href: profile.socials.github },
  { icon: Linkedin, label: "LinkedIn", href: profile.socials.linkedin },
  { icon: Instagram, label: "Instagram", href: profile.socials.instagram },
  { icon: Mail, label: "Gmail", href: `mailto:${profile.email}` },
  { icon: Phone, label: "WhatsApp", href: `https://wa.me/${profile.whatsapp}` },
];

export function Contact () {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      message: String(form.get("message") ?? ""),
    };
    const result = schema.safeParse(data);
    if (!result.success)
    {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        fieldErrors[i.path[0] as string] = i.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    const subject = encodeURIComponent(`Pesan dari ${result.data.name}`);
    const body = encodeURIComponent(`${result.data.message}\n\n— ${result.data.name} (${result.data.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    toast.success("Membuka aplikasi email kamu...", {
      description: "Terima kasih sudah menghubungi!",
    });
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading
        eyebrow="Contact"
        title="Siap Berkolaborasi"
        subtitle="Tertarik berkolaborasi atau punya pertanyaan? Kirim pesan langsung di bawah ini."
      />

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="space-y-4">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50"
            >
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary">
                <c.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">{c.label}</p>
                <p className="text-sm font-medium">{c.value}</p>
              </div>
            </a>
          ))}

          <div className="rounded-xl border border-border bg-card p-5">
            <p className="mb-3 text-xs uppercase tracking-wide text-muted-foreground">
              Social Media
            </p>
            <div className="flex flex-wrap gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-secondary text-muted-foreground transition-all hover:-translate-y-0.5 hover:bg-gradient-primary hover:text-primary-foreground"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            className="space-y-4 rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                Nama
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Nama lengkap kamu"
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring"
              />
              {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="email@contoh.com"
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring"
              />
              {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                Pesan
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tulis pesan kamu di sini..."
                className="w-full resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring"
              />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.02]"
            >
              <Send className="h-4 w-4" /> Kirim Pesan
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
