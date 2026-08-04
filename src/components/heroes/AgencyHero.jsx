import Button from "../ui/button";
import Hero from "../ui/hero";

function AgencyHero() {
  return (
    <Hero variant="dark">
      <Hero.Content>
        <Hero.Badge className="border-white/20 bg-white/10 text-white">
          🎨 Creative Digital Agency
        </Hero.Badge>

        <Hero.Title>
          We Build Brands
          That Stand Out
        </Hero.Title>

        <Hero.Description className="text-gray-300">
          From branding to websites and mobile
          applications, we help companies create
          unforgettable digital experiences.
        </Hero.Description>

        <Hero.Actions>
          <Button variant="gradient">
            Our Work
          </Button>

          <Button variant="outline">
            Contact Us
          </Button>
        </Hero.Actions>
      </Hero.Content>

      <Hero.Media>
        <div className="grid grid-cols-2 gap-4">
          <div className="h-36 rounded-2xl bg-indigo-500" />
          <div className="h-36 rounded-2xl bg-violet-500" />
          <div className="h-36 rounded-2xl bg-pink-500" />
          <div className="h-36 rounded-2xl bg-cyan-500" />
        </div>
      </Hero.Media>
    </Hero>
  );
}

export default AgencyHero;