import Hero from "./components/hero";
import Support from "./components/support";
import HowItWorks from "./components/how-it-works";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function LandingPage() {
  const query = new URLSearchParams(useLocation().search);
  const section = query.get("section");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (section === "about" && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [section]);

  return (
    <div ref={ref}>
      <Hero />
      <Support />
      <HowItWorks />
    </div>
  );
}
