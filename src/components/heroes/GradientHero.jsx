import Button from "../ui/button";
import Hero from "../ui/hero";

function GradientHero() {
  return (
    <Hero variant="gradient">
      <div className="mx-auto max-w-3xl text-center">
        <Hero.Badge className="border-white/30 bg-white/10 text-white">
          ⚡ Tailwind CSS
        </Hero.Badge>

        <Hero.Title>
          Stunning Gradient Hero Sections
        </Hero.Title>

        <Hero.Description className="text-white/80">
          Create eye-catching landing pages with
          reusable React components.
        </Hero.Description>

        <Hero.Actions className="justify-center">
          <Button variant="secondary">
            Get Started
          </Button>

          <Button variant="outline">
            Learn More
          </Button>
        </Hero.Actions>
      </div>
    </Hero>
  );
}

export default GradientHero;