import { FaXTwitter ,FaGithub , FaLinkedin , FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";

const quickLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Buttons",
    path: "/buttons",
  },
  {
    title: "Cards",
    path: "/cards",
  },
  {
    title: "Forms",
    path: "/forms",
  },
];

const resources = [
  {
    title: "Documentation",
    path: "#",
  },
  {
    title: "GitHub",
    path: "#",
  },
  {
    title: "License",
    path: "#",
  },
  {
    title: "Contribute",
    path: "#",
  },
];

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-lg font-bold text-white">
                U
              </div>

              <div>
                <h2 className="font-bold text-lg">
                  UI Showcase
                </h2>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Reusable React Components
                </p>
              </div>
            </div>

            <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
              A modern collection of reusable React components built with
              Tailwind CSS, Framer Motion, and accessibility in mind.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>

            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    to={item.path}
                    className="text-gray-600 transition hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 font-semibold">Resources</h3>

            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.path}
                    className="text-gray-600 transition hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 font-semibold">Connect</h3>

            <div className="flex gap-3">
              <button className="rounded-lg border border-gray-200 p-2 transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800">
                <FaGithub size={20} />
              </button>

              <button className="rounded-lg border border-gray-200 p-2 transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800">
                <FaLinkedin size={20} />
              </button>

              <button className="rounded-lg border border-gray-200 p-2 transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800">
                <FaXTwitter size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400 md:flex-row">
          <p>© {new Date().getFullYear()} UI Showcase. All rights reserved.</p>

          <p className="flex items-center gap-2">
            Built with <FaHeart size={16} className="fill-red-500 text-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;