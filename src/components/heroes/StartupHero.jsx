import Button from "../ui/button";
import Hero from "../ui/hero";

function StartupHero() {
  return (
    <Hero variant="gradient">
      <div className="mx-auto max-w-3xl text-center">
        <Hero.Badge className="border-white/20 bg-white/10 text-white">
          🚀 New Startup Launch
        </Hero.Badge>

        <Hero.Title>
          Turn Your Startup
          <br />
          Into The Next Unicorn
        </Hero.Title>

        <Hero.Description className="text-white/80">
          Everything you need to validate ideas,
          acquire customers, and scale your business
          from day one.
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

export default StartupHero;