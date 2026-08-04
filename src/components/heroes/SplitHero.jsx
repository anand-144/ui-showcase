import Button from "../ui/button";
import Hero from "../ui/hero";

function SplitHero() {
  return (
    <Hero>
      <Hero.Content>
        <Hero.Badge>
          🚀 Launch Faster
        </Hero.Badge>

        <Hero.Title>
          Everything You Need To Build Faster
        </Hero.Title>

        <Hero.Description>
          Modern UI components that help you create
          beautiful applications in minutes.
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

      <Hero.Media>
        <div className="flex h-80 w-full max-w-md items-center justify-center rounded-3xl border bg-gradient-to-br from-indigo-500 to-violet-600 text-7xl text-white shadow-xl">
          🚀
        </div>
      </Hero.Media>
    </Hero>
  );
}

export default SplitHero;