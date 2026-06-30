import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/portfolio/HomePage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gizelle Mathilda Mamentu — IoT & Web Developer Portfolio" },
      {
        name: "description",
        content:
          "Portofolio Gizelle Mathilda Mamentu, mahasiswa Teknik Informatika UNESA — IoT Enthusiast, Web Developer, dan Robotics Programmer. Lihat proyek, CV, dan keterampilan.",
      },
      {
        name: "keywords",
        content:
          "Gizelle Mathilda Mamentu, portofolio, IoT, web developer, robotics programmer, UNESA, Teknik Informatika, Laravel, Vue.js, ESP32, Arduino, Indonesia",
      },
      { property: "og:title", content: "Gizelle Mathilda Mamentu — IoT & Web Developer Portfolio" },
      {
        property: "og:description",
        content:
          "Transforming ideas into intelligent digital solutions through IoT, robotics, and software development.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: "Gizelle Mathilda Mamentu — IoT & Web Developer Portfolio" },
      {
        name: "twitter:description",
        content:
          "Transforming ideas into intelligent digital solutions through IoT, robotics, and software development.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Gizelle Mathilda Mamentu",
          jobTitle: "Informatics Engineering Student, IoT & Web Developer",
          url: "/",
          email: "mailto:gizellemmamentu@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Surabaya",
            addressCountry: "Indonesia",
          },
          alumniOf: {
            "@type": "EducationalOrganization",
            name: "Universitas Negeri Surabaya",
            sameAs: "https://www.unesa.ac.id",
          },
          knowsAbout: [
            "Internet of Things",
            "Web Development",
            "Robotics",
            "Software Engineering",
            "Embedded Systems",
            "PHP",
            "Laravel",
            "Vue.js",
            "MQTT",
          ],
          sameAs: [
            "https://github.com/gizelle-mamentu",
            "https://linkedin.com/in/gizellemamentu",
            "https://instagram.com/gizellemamentu",
          ],
          award: "Silver Medal — Indonesia International IoT Olympiad (I3O) 2025",
          worksFor: {
            "@type": "Organization",
            name: "Dewo Robotic",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index () {
  return <HomePage />;
}
