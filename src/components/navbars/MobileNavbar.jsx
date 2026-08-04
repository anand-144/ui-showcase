import { useState } from "react";
import {
  Menu,
  X,
  Home,
  LayoutGrid,
  DollarSign,
  Mail,
  Smartphone,
} from "lucide-react";

import Navbar from "../ui/navbar";
import Button from "../ui/button";

function MobileNavbar() {
  const [open, setOpen] = useState(true);

  return (
    <div className="overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 shadow-xl dark:border-gray-800 dark:bg-gray-900">
      {/* Mobile Screen */}
      <div className="mx-auto max-w-sm overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-gray-950">
        {/* Navbar */}
        <Navbar>
          <Navbar.Logo>
            UI Showcase
          </Navbar.Logo>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {open ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </Navbar>

        <div className="relative h-[620px] overflow-hidden">
          {/* Drawer */}
          <div
            className={`absolute left-0 top-0 z-20 h-full w-64 bg-white shadow-2xl transition-transform duration-300 dark:bg-gray-950 ${
              open
                ? "translate-x-0"
                : "-translate-x-full"
            }`}
          >
            <div className="border-b border-gray-200 p-6 dark:border-gray-800">
              <h2 className="text-xl font-bold">
                UI Showcase
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Mobile Navigation
              </p>
            </div>

            <nav className="space-y-2 p-5">
              {[
                {
                  icon: Home,
                  label: "Home",
                },
                {
                  icon: LayoutGrid,
                  label: "Components",
                },
                {
                  icon: DollarSign,
                  label: "Pricing",
                },
                {
                  icon: Mail,
                  label: "Contact",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.label}
                    className="flex w-full items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-gray-800"
                  >
                    <Icon size={20} />

                    {item.label}
                  </button>
                );
              })}

              <div className="pt-8">
                <Button className="w-full">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>

          {/* Hero */}
          <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-700 p-8 text-center text-white">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/20 backdrop-blur">
              <Smartphone size={42} />
            </div>

            <h2 className="mt-8 text-3xl font-black">
              Mobile First
            </h2>

            <p className="mt-4 text-white/80">
              Responsive navigation with
              slide-out drawer and smooth
              animations.
            </p>

            <div className="mt-10">
              <Button size="lg">
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileNavbar;