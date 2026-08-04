import Button from "../ui/button";
import Hero from "../ui/hero";

function AnimatedBlobHero() {
  return (
    <Hero className="relative overflow-hidden bg-slate-50 dark:bg-gray-950">
      <div className="absolute -left-24 top-10 h-72 w-72 animate-pulse rounded-full bg-indigo-400/30 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 animate-pulse rounded-full bg-pink-400/20 blur-3xl" />

      <div className="relative z-10">
        <Hero.Content>
          <Hero.Badge>
            ✨ Modern Design
          </Hero.Badge>

          <Hero.Title>
            Beautiful
            <span className="block text-indigo-600">
              Animated Interfaces
            </span>
          </Hero.Title>

          <Hero.Description>
            Delight users with modern UI,
            soft gradients, and animated
            backgrounds that elevate your
            product.
          </Hero.Description>

          <Hero.Actions>
            <Button variant="gradient">
              Explore
            </Button>

            <Button variant="outline">
              Documentation
            </Button>
          </Hero.Actions>
        </Hero.Content>
      </div>
    </Hero>
  );
}

export default AnimatedBlobHero;