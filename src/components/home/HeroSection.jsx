import Section from "../common/Section";
import HeroContent from "./HeroContent";
import HeroPreview from "./HeroPreview";

function HeroSection() {
  return (
    <Section
      id="hero"
      className="relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
      </div>

      <div className="grid items-center gap-16 lg:grid-cols-2">
        <HeroContent />

        <HeroPreview />
      </div>
    </Section>
  );
}

export default HeroSection;