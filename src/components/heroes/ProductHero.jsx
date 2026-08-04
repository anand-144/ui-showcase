import Button from "../ui/button";
import Hero from "../ui/hero";

function ProductHero() {
  return (
    <Hero>
      <Hero.Content>
        <Hero.Badge>
          ✨ New Product Release
        </Hero.Badge>

        <Hero.Title>
          Meet PixelUI Pro
        </Hero.Title>

        <Hero.Description>
          The ultimate UI component library packed
          with modern layouts, animations, and
          production-ready React components.
        </Hero.Description>

        <Hero.Actions>
          <Button variant="gradient">
            Buy Now
          </Button>

          <Button variant="outline">
            Live Preview
          </Button>
        </Hero.Actions>
      </Hero.Content>

      <Hero.Media>
        <div className="w-full max-w-lg rounded-3xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 p-8 shadow-2xl">
          <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
            <div className="mb-4 text-7xl">
              📦
            </div>

            <h3 className="text-2xl font-bold">
              PixelUI Pro
            </h3>

            <p className="mt-2 text-gray-500">
              250+ Premium Components
            </p>
          </div>
        </div>
      </Hero.Media>
    </Hero>
  );
}

export default ProductHero;