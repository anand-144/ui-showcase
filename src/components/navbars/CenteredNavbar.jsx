import {
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";

import Navbar from "../ui/navbar";
import Button from "../ui/button";

function CenteredNavbar() {
  return (
    <div className="overflow-hidden rounded-3xl bg-gradient-to-b from-white to-gray-100 shadow-xl dark:from-gray-950 dark:to-gray-900">
      {/* Navbar */}
      <Navbar variant="transparent">
        <div className="flex w-full items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
          >
            Resume
          </Button>

          <div className="flex flex-col items-center">
            <Navbar.Logo>
              John Doe
            </Navbar.Logo>

            <div className="mt-2 flex gap-8 text-sm font-medium">
              <a
                href="#"
                className="transition hover:text-indigo-600"
              >
                Home
              </a>

              <a
                href="#"
                className="transition hover:text-indigo-600"
              >
                Projects
              </a>

              <a
                href="#"
                className="transition hover:text-indigo-600"
              >
                Experience
              </a>

              <a
                href="#"
                className="transition hover:text-indigo-600"
              >
                Contact
              </a>
            </div>
          </div>

          <Button size="sm">
            Hire Me
          </Button>
        </div>
      </Navbar>

      {/* Hero */}
      <section className="px-8 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <img
            src="https://i.pravatar.cc/200?img=12"
            alt="Profile"
            className="mx-auto h-32 w-32 rounded-full border-4 border-white object-cover shadow-xl"
          />

          <span className="mt-8 inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-600 dark:bg-indigo-900/40">
            👋 Available for Freelance
          </span>

          <h1 className="mt-6 text-5xl font-black lg:text-6xl">
            Hi, I'm
            <span className="text-indigo-600">
              {" "}
              John Doe
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-500">
            Frontend Developer passionate about
            building beautiful, responsive and
            accessible web experiences using
            React, Tailwind CSS and Framer Motion.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              rightIcon={
                <FiArrowRight size={18} />
              }
            >
              View Projects
            </Button>

            <Button
              variant="outline"
              size="lg"
            >
              Contact Me
            </Button>
          </div>

          {/* Social */}
          <div className="mt-12 flex justify-center gap-5">
            <button className="rounded-xl bg-white p-3 shadow transition hover:-translate-y-1 dark:bg-gray-800">
              <FiGithub size={22} />
            </button>

            <button className="rounded-xl bg-white p-3 shadow transition hover:-translate-y-1 dark:bg-gray-800">
              <FiLinkedin size={22} />
            </button>

            <button className="rounded-xl bg-white p-3 shadow transition hover:-translate-y-1 dark:bg-gray-800">
              <FiTwitter size={22} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CenteredNavbar;