import {
  ArrowRight,
  Play,
  CheckCircle2,
} from "lucide-react";

import Navbar from "../ui/navbar";
import Button from "../ui/button";

function TransparentNavbar() {
  return (
    <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-700 shadow-2xl">
      {/* Navbar */}
      <Navbar
        variant="transparent"
        className="text-white"
      >
        <Navbar.Logo>
          <span className="font-black">
            UI
          </span>{" "}
          Showcase
        </Navbar.Logo>

        <Navbar.Links>
          <a
            href="#"
            className="transition hover:text-indigo-200"
          >
            Home
          </a>

          <a
            href="#"
            className="transition hover:text-indigo-200"
          >
            Components
          </a>

          <a
            href="#"
            className="transition hover:text-indigo-200"
          >
            Templates
          </a>

          <a
            href="#"
            className="transition hover:text-indigo-200"
          >
            Pricing
          </a>

          <a
            href="#"
            className="transition hover:text-indigo-200"
          >
            Contact
          </a>
        </Navbar.Links>

        <Navbar.Actions>
          <Button
            variant="outline"
            size="sm"
          >
            Login
          </Button>

          <Button
            size="sm"
            variant="secondary"
          >
            Get Started
          </Button>
        </Navbar.Actions>
      </Navbar>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-8 py-24">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur">
              ✨ React + Tailwind UI Library
            </span>

            <h1 className="mt-6 text-5xl font-black leading-tight text-white lg:text-6xl">
              Build Beautiful
              <br />
              Interfaces Faster.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
              Modern, reusable UI components
              crafted with React, Tailwind CSS,
              and Framer Motion to accelerate
              your next project.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                size="lg"
                rightIcon={
                  <ArrowRight size={18} />
                }
              >
                Explore Components
              </Button>

              <Button
                variant="outline"
                size="lg"
                leftIcon={<Play size={18} />}
              >
                Live Demo
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} />
                100+ Components
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} />
                Dark Mode
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} />
                Responsive
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl">
              {/* Browser */}
              <div className="mb-6 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              {/* Fake UI */}
              <div className="space-y-5">
                <div className="h-12 rounded-xl bg-white/20" />

                <div className="grid grid-cols-2 gap-4">
                  <div className="h-32 rounded-2xl bg-white/15" />
                  <div className="h-32 rounded-2xl bg-white/15" />
                </div>

                <div className="h-24 rounded-2xl bg-white/15" />

                <div className="grid grid-cols-3 gap-4">
                  <div className="h-20 rounded-xl bg-white/15" />
                  <div className="h-20 rounded-xl bg-white/15" />
                  <div className="h-20 rounded-xl bg-white/15" />
                </div>
              </div>
            </div>

            {/* Floating decoration */}
            <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-pink-400/30 blur-3xl" />

            <div className="absolute -bottom-8 -left-8 h-36 w-36 rounded-full bg-cyan-400/30 blur-3xl" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default TransparentNavbar;