import { useEffect, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Layers,
  Shield,
  Zap,
} from "lucide-react";

import Navbar from "../ui/navbar";
import Button from "../ui/button";

function StickyNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () =>
      setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const features = [
    {
      icon: Layers,
      title: "Reusable Components",
      desc: "Build interfaces faster with reusable UI.",
    },
    {
      icon: Zap,
      title: "Fast Performance",
      desc: "Optimized React components with Tailwind CSS.",
    },
    {
      icon: Shield,
      title: "Production Ready",
      desc: "Responsive, accessible and scalable.",
    },
  ];

  return (
    <div className="h-[750px] overflow-y-auto rounded-3xl bg-white shadow-xl dark:bg-gray-950">
      {/* Sticky Navbar */}
      <Navbar
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-gray-200 bg-white/90 shadow-lg backdrop-blur-xl dark:border-gray-800 dark:bg-gray-950/90"
            : "bg-transparent"
        }`}
      >
        <Navbar.Logo>
          <span className="text-indigo-600">
            UI
          </span>{" "}
          Showcase
        </Navbar.Logo>

        <Navbar.Links>
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </Navbar.Links>

        <Navbar.Actions>
          <Button
            variant="outline"
            size="sm"
          >
            Login
          </Button>

          <Button size="sm">
            Get Started
          </Button>
        </Navbar.Actions>
      </Navbar>

      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-700 px-8 py-28 text-center text-white">
        <h1 className="text-5xl font-black lg:text-6xl">
          Sticky Navigation
          <br />
          Done Right
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
          Scroll this preview to watch the
          navigation become sticky with blur,
          shadow and smooth transitions.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Button
            size="lg"
            rightIcon={
              <ArrowRight size={18} />
            }
          >
            Explore
          </Button>

          <Button
            variant="outline"
            size="lg"
          >
            Documentation
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="px-8 py-16">
        <h2 className="mb-10 text-center text-3xl font-bold">
          Why Developers Love It
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 dark:bg-indigo-900/40">
                  <Icon size={26} />
                </div>

                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-500">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gray-50 px-8 py-16 dark:bg-gray-900">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-10 text-center shadow-lg dark:bg-gray-950">
          <h2 className="text-3xl font-bold">
            Start Building Today
          </h2>

          <p className="mt-4 text-gray-500">
            Everything you need to create
            modern React applications.
          </p>

          <div className="mt-8 space-y-3">
            {[
              "100+ Components",
              "Dark Mode",
              "Responsive Design",
              "Lifetime Updates",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center justify-center gap-2"
              >
                <CheckCircle2
                  size={18}
                  className="text-green-500"
                />

                {item}
              </div>
            ))}
          </div>

          <Button
            className="mt-10"
            size="lg"
          >
            Get Started
          </Button>
        </div>
      </section>

      {/* Footer Space */}
      <section className="py-20 text-center text-gray-400">
        End of Preview
      </section>
    </div>
  );
}

export default StickyNavbar;