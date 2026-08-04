import { ShieldCheck } from "lucide-react";

import Button from "../ui/button";
import Hero from "../ui/hero";

function GlassHero() {
  return (
    <Hero className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-violet-600 to-pink-500">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.2),transparent_50%)]" />

      <div className="relative z-10 flex w-full items-center justify-between gap-12">
        <Hero.Content>
          <Hero.Badge className="border-white/20 bg-white/10 text-white">
            ✨ Glassmorphism
          </Hero.Badge>

          <Hero.Title className="text-white">
            Elegant Interfaces
            <span className="block">
              With Glass Effects
            </span>
          </Hero.Title>

          <Hero.Description className="text-white/80">
            Create premium user experiences using
            glassmorphism, gradients and smooth
            animations.
          </Hero.Description>

          <Hero.Actions>
            <Button variant="secondary">
              Explore
            </Button>

            <Button variant="outline">
              Learn More
            </Button>
          </Hero.Actions>
        </Hero.Content>

        <Hero.Media>
          <div className="rounded-3xl border border-white/20 bg-white/10 p-12 backdrop-blur-xl shadow-2xl">
            <ShieldCheck
              size={120}
              className="text-white"
            />
          </div>
        </Hero.Media>
      </div>
    </Hero>
  );
}

export default GlassHero;