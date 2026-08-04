import { useState } from "react";
import {
  ChevronDown,
  Package,
  LayoutDashboard,
  BookOpen,
  FileCode,
  ArrowRight,
} from "lucide-react";

import Navbar from "../ui/navbar";
import Button from "../ui/button";

function MegaMenuNavbar() {
  const [open, setOpen] = useState(true);

  return (
    <div
      className="relative overflow-hidden rounded-3xl bg-white shadow-xl dark:bg-gray-950"
      onMouseLeave={() => setOpen(true)}
    >
      {/* Navbar */}
      <Navbar>
        <Navbar.Logo>
          <span className="text-indigo-600">
            UI
          </span>{" "}
          Showcase
        </Navbar.Logo>

        <Navbar.Links>
          <button
            onMouseEnter={() => setOpen(true)}
            className="flex items-center gap-1 font-medium hover:text-indigo-600"
          >
            Components
            <ChevronDown
              size={16}
              className={`transition ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>

          <a href="#">Templates</a>
          <a href="#">Pricing</a>
          <a href="#">Docs</a>
        </Navbar.Links>

        <Navbar.Actions>
          <Button size="sm">
            Get Started
          </Button>
        </Navbar.Actions>
      </Navbar>

      {/* Mega Menu */}
      <div className="mx-auto max-w-6xl px-8">
        <div className="rounded-3xl border border-gray-200 bg-white p-10 shadow-lg dark:border-gray-800 dark:bg-gray-900">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Components */}
            <div>
              <div className="mb-5 flex items-center gap-2">
                <Package className="text-indigo-600" />
                <h3 className="font-semibold">
                  Components
                </h3>
              </div>

              <div className="space-y-3">
                {[
                  "Buttons",
                  "Cards",
                  "Inputs",
                  "Forms",
                  "Navbars",
                  "Modals",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block rounded-xl px-4 py-3 transition hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-gray-800"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Templates */}
            <div>
              <div className="mb-5 flex items-center gap-2">
                <LayoutDashboard className="text-indigo-600" />
                <h3 className="font-semibold">
                  Templates
                </h3>
              </div>

              <div className="space-y-3">
                {[
                  "Dashboard",
                  "Portfolio",
                  "Landing Page",
                  "Ecommerce",
                  "Admin Panel",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block rounded-xl px-4 py-3 transition hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-gray-800"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div>
              <div className="mb-5 flex items-center gap-2">
                <BookOpen className="text-indigo-600" />
                <h3 className="font-semibold">
                  Resources
                </h3>
              </div>

              <div className="space-y-3">
                <a
                  href="#"
                  className="flex items-center gap-2 rounded-xl px-4 py-3 transition hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-gray-800"
                >
                  <FileCode size={18} />
                  Documentation
                </a>

                <a
                  href="#"
                  className="block rounded-xl px-4 py-3 transition hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-gray-800"
                >
                  GitHub
                </a>

                <a
                  href="#"
                  className="block rounded-xl px-4 py-3 transition hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-gray-800"
                >
                  Changelog
                </a>

                <a
                  href="#"
                  className="block rounded-xl px-4 py-3 transition hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-gray-800"
                >
                  Community
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="px-8 py-20 text-center">
        <h2 className="text-5xl font-black">
          Everything You Need
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-500">
          Browse dozens of beautifully crafted
          React components and complete page
          templates.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Button
            size="lg"
            rightIcon={<ArrowRight size={18} />}
          >
            Explore Library
          </Button>

          <Button
            variant="outline"
            size="lg"
          >
            Documentation
          </Button>
        </div>
      </section>
    </div>
  );
}

export default MegaMenuNavbar;