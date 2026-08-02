import { ArrowRight, Plus } from "lucide-react";

import Button from "./Button";

function ButtonPlayground() {
  return (
    <div className="space-y-10 p-10">
      <h1 className="text-3xl font-bold">
        Button Playground
      </h1>

      {/* Variants */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Variants
        </h2>

        <div className="flex flex-wrap gap-4">
          <Button>Primary</Button>

          <Button variant="secondary">
            Secondary
          </Button>

          <Button variant="outline">
            Outline
          </Button>

          <Button variant="ghost">
            Ghost
          </Button>

          <Button variant="gradient">
            Gradient
          </Button>

          <Button variant="glass">
            Glass
          </Button>

          <Button variant="success">
            Success
          </Button>

          <Button variant="danger">
            Danger
          </Button>
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Sizes
        </h2>

        <div className="flex flex-wrap items-center gap-4">
          <Button size="xs">XS</Button>

          <Button size="sm">SM</Button>

          <Button size="md">MD</Button>

          <Button size="lg">LG</Button>

          <Button size="xl">XL</Button>
        </div>
      </section>

      {/* Rounded */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Rounded
        </h2>

        <Button rounded>
          Rounded Button
        </Button>
      </section>

      {/* Full Width */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Full Width
        </h2>

        <Button fullWidth>
          Full Width Button
        </Button>
      </section>

      {/* Icons */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Icons
        </h2>

        <div className="flex flex-wrap gap-4">
          <Button leftIcon={<Plus size={18} />}>
            Add Item
          </Button>

          <Button
            rightIcon={<ArrowRight size={18} />}
          >
            Continue
          </Button>
        </div>
      </section>

      {/* Custom Class */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Custom Class
        </h2>

        <Button className="shadow-2xl">
          Shadow Button
        </Button>
      </section>
    </div>
  );
}

export default ButtonPlayground;