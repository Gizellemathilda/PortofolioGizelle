import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { HomePage } from "@/components/portfolio/HomePage";
import { smoothScrollTo } from "@/lib/smooth-scroll";

export const Route = createFileRoute("/contact")({
  component: ContactRoute,
});

function ContactRoute() {
  useEffect(() => {
    const timer = setTimeout(
      () => smoothScrollTo("#contact", { replaceHistory: false }),
      150,
    );
    return () => clearTimeout(timer);
  }, []);

  return <HomePage />;
}
