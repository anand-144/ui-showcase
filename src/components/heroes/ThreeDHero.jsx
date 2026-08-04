import {
  Box,
  Layers3,
} from "lucide-react";

import Button from "../ui/button";
import Hero from "../ui/hero";

function ThreeDHero() {
  return (
    <Hero>
      <Hero.Content>
        <Hero.Badge>
          🎮 3D Experience
        </Hero.Badge>

        <Hero.Title>
          Interactive
          <span className="block text-indigo-600">
            3D Interfaces
          </span>
        </Hero.Title>

        <Hero.Description>
          Bring your products to life using
          immersive layouts and interactive
          3D-inspired visuals.
        </Hero.Description>

        <Hero.Actions>
          <Button variant="gradient">
            Discover
          </Button>

          <Button variant="outline">
            Live Preview
          </Button>
        </Hero.Actions>
      </Hero.Content>

      <Hero.Media>
        <div className="relative h-80 w-80">
          <div className="absolute left-16 top-12 rotate-12 rounded-3xl bg-indigo-500 p-8 text-white shadow-2xl">
            <Layers3 size={80} />
          </div>

          <div className="absolute left-0 top-28 -rotate-12 rounded-3xl bg-violet-500 p-8 text-white shadow-2xl">
            <Box size={80} />
          </div>
        </div>
      </Hero.Media>
    </Hero>
  );
}

export default ThreeDHero;