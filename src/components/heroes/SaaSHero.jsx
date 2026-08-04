import Button from "../ui/button";
import Hero from "../ui/hero";

function SaaSHero() {
  return (
    <Hero>
      <Hero.Content>
        <Hero.Badge>🚀 Trusted by 10,000+ teams</Hero.Badge>

        <Hero.Title>
          Build SaaS Products
          <span className="block text-indigo-600">
            Without Limits
          </span>
        </Hero.Title>

        <Hero.Description>
          Launch faster with reusable React components,
          Tailwind CSS, and beautiful UI patterns designed
          for modern SaaS applications.
        </Hero.Description>

        <Hero.Actions>
          <Button variant="gradient">
            Start Free
          </Button>

          <Button variant="outline">
            Book Demo
          </Button>
        </Hero.Actions>
      </Hero.Content>

      <Hero.Media>
        <div className="w-full max-w-md rounded-3xl border bg-white p-6 shadow-2xl dark:bg-gray-900">
          <div className="space-y-4">
            <div className="h-4 w-32 rounded bg-indigo-500" />
            <div className="h-3 w-full rounded bg-gray-200 dark:bg-gray-700" />
            <div className="h-3 w-5/6 rounded bg-gray-200 dark:bg-gray-700" />

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-indigo-100 p-6 text-center dark:bg-indigo-950">
                📈
              </div>

              <div className="rounded-xl bg-violet-100 p-6 text-center dark:bg-violet-950">
                💰
              </div>
            </div>
          </div>
        </div>
      </Hero.Media>
    </Hero>
  );
}

export default SaaSHero;