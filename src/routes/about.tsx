import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { HomePage } from "@/components/portfolio/HomePage";
import { smoothScrollTo } from "@/lib/smooth-scroll";

export const Route = createFileRoute("/about")({
  component: AboutRoute,
});

function AboutRoute() {
  useEffect(() => {
    const timer = setTimeout(
      () => smoothScrollTo("#about", { replaceHistory: false }),
      150,
    );
    return () => clearTimeout(timer);
  }, []);

  return <HomePage />;
}
