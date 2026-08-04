import Button from "../ui/button";
import Hero from "../ui/hero";

function CenteredHero() {
  return (
    <Hero>
      <div className="mx-auto max-w-3xl text-center">
        <Hero.Badge>
          ✨ New Components
        </Hero.Badge>

        <Hero.Title>
          Build Modern Interfaces Faster
        </Hero.Title>

        <Hero.Description>
          Beautiful React and Tailwind CSS components
          that are responsive, reusable, and
          production-ready.
        </Hero.Description>

        <Hero.Actions className="justify-center">
          <Button variant="gradient">
            Get Started
          </Button>

          <Button variant="outline">
            Live Demo
          </Button>
        </Hero.Actions>
      </div>
    </Hero>
  );
}

export default CenteredHero;