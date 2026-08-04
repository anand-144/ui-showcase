import Button from "../ui/button";
import Hero from "../ui/hero";

function ParticleHero() {
  return (
    <Hero className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        {Array.from({ length: 40 }).map((_, index) => (
          <span
            key={index}
            className="absolute h-1.5 w-1.5 rounded-full bg-indigo-400 opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <Hero.Badge className="border-indigo-500/20 bg-indigo-500/20 text-indigo-200">
          ✨ Particle Background
        </Hero.Badge>

        <Hero.Title className="text-white">
          Modern Landing Pages
          <span className="block bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            With Animated Effects
          </span>
        </Hero.Title>

        <Hero.Description className="text-gray-300">
          Lightweight particle-inspired backgrounds
          that instantly make your landing pages
          feel premium.
        </Hero.Description>

        <Hero.Actions className="justify-center">
          <Button variant="gradient">
            Get Started
          </Button>

          <Button variant="outline">
            Documentation
          </Button>
        </Hero.Actions>
      </div>
    </Hero>
  );
}

export default ParticleHero;