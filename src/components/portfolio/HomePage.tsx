import { Toaster } from "sonner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Resume } from "@/components/portfolio/Resume";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Resume />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}
