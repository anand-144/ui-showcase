import { LuSearch, LuGithub, LuBell, LuArrowRight, LuCode, LuLayoutGrid, LuBookOpen } from "react-icons/lu";

import Navbar from "../ui/navbar";
import Button from "../ui/button";

function SearchNavbar() {
  const categories = [
    {
      title: "Components",
      icon: LuLayoutGrid,
      description:
        "Buttons, Cards, Inputs, Forms and more.",
    },
    {
      title: "Documentation",
      icon: LuBookOpen,
      description:
        "Installation, usage and examples.",
    },
    {
      title: "Code Examples",
      icon: LuCode,
      description:
        "Copy-paste ready React components.",
    },
  ];

  return (
    <div className="overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 shadow-xl dark:border-gray-800 dark:bg-gray-950">
      {/* Navbar */}
      <Navbar variant="elevated">
        <Navbar.Logo>
          UI Docs
        </Navbar.Logo>

        <div className="hidden flex-1 justify-center px-8 lg:flex">
          <div className="relative w-full max-w-lg">
            <LuSearch
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search components..."
              className="w-full rounded-xl border border-gray-300 bg-white py-2.5 pl-11 pr-4 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
            />
          </div>
        </div>

        <Navbar.Actions>
          <button className="rounded-lg p-2 transition hover:bg-gray-100 dark:hover:bg-gray-800">
            <LuGithub size={20} />
          </button>

          <button className="rounded-lg p-2 transition hover:bg-gray-100 dark:hover:bg-gray-800">
            <LuBell size={20} />
          </button>
        </Navbar.Actions>
      </Navbar>

      {/* Hero */}
      <section className="px-10 py-20 text-center">
        <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-600 dark:bg-indigo-900/40">
          Documentation
        </span>

        <h2 className="mt-6 text-5xl font-black">
          Find Components
          <br />
          in Seconds
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-500">
          Search through our collection of
          reusable React + Tailwind UI
          components with complete source code.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Button
            size="lg"
            rightIcon={<LuArrowRight size={18} />}
          >
            Browse Components
          </Button>

          <Button
            variant="outline"
            size="lg"
          >
            Documentation
          </Button>
        </div>
      </section>

      {/* Categories */}
      <section className="grid gap-6 p-8 md:grid-cols-3">
        {categories.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-3xl bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-lg dark:bg-gray-900"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 dark:bg-indigo-900/40">
                <Icon size={22} />
              </div>

              <h3 className="text-lg font-semibold">
                {item.title}
              </h3>

              <p className="mt-3 text-sm text-gray-500">
                {item.description}
              </p>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default SearchNavbar;