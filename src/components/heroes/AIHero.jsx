import { Sparkles, Bot, ArrowRight } from "lucide-react";

import Button from "../ui/button";
import Hero from "../ui/hero";

function AIHero() {
  return (
    <Hero className="overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white">
      <Hero.Content>
        <Hero.Badge className="border-indigo-400/30 bg-indigo-500/20 text-indigo-200">
          <Sparkles size={14} className="mr-2" />
          AI Powered
        </Hero.Badge>

        <Hero.Title className="text-white">
          Build Smarter
          <span className="block bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            With Artificial Intelligence
          </span>
        </Hero.Title>

        <Hero.Description className="text-slate-300">
          Generate content, automate workflows, and
          create intelligent experiences using the
          latest AI technology.
        </Hero.Description>

        <Hero.Actions>
          <Button variant="gradient">
            Try AI
          </Button>

          <Button variant="outline">
            Learn More
            <ArrowRight size={16} />
          </Button>
        </Hero.Actions>
      </Hero.Content>

      <Hero.Media>
        <div className="flex h-80 w-80 items-center justify-center rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-xl">
          <Bot size={120} />
        </div>
      </Hero.Media>
    </Hero>
  );
}

export default AIHero;