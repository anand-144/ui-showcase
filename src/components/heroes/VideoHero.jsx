import { Play } from "lucide-react";

import Button from "../ui/button";
import Hero from "../ui/hero";

function VideoHero() {
  return (
    <Hero className="relative bg-black text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')] bg-cover bg-center opacity-30" />

      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl items-center px-6">
        <div className="max-w-3xl">
          <Hero.Badge className="border-white/20 bg-white/10 text-white">
            🎬 Watch Demo
          </Hero.Badge>

          <Hero.Title className="text-white">
            See Our Platform
            In Action
          </Hero.Title>

          <Hero.Description className="text-gray-300">
            Experience the power of our product
            through an interactive video
            presentation.
          </Hero.Description>

          <Hero.Actions>
            <Button variant="gradient">
              Get Started
            </Button>

            <Button variant="outline">
              <Play size={16} />
              Play Video
            </Button>
          </Hero.Actions>
        </div>
      </div>
    </Hero>
  );
}

export default VideoHero;