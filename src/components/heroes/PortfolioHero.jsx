import Button from "../ui/button";
import Hero from "../ui/hero";

function PortfolioHero() {
  return (
    <Hero>
      <Hero.Content>
        <Hero.Badge>
          👋 Hello, I'm John Doe
        </Hero.Badge>

        <Hero.Title>
          Frontend Developer &
          <span className="block text-indigo-600">
            UI Designer
          </span>
        </Hero.Title>

        <Hero.Description>
          I create modern web experiences with
          React, Tailwind CSS and beautiful user
          interfaces.
        </Hero.Description>

        <Hero.Actions>
          <Button variant="gradient">
            View Portfolio
          </Button>

          <Button variant="outline">
            Contact Me
          </Button>
        </Hero.Actions>
      </Hero.Content>

      <Hero.Media>
        <div className="flex h-80 w-80 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-8xl text-white shadow-2xl">
          👨‍💻
        </div>
      </Hero.Media>
    </Hero>
  );
}

export default PortfolioHero;