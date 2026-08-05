import { FaGithub, FaSearch } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";

import ThemeToggle from "../common/ThemeToggle";
import { useNavigation } from "../../context/NavigationContext";

import SearchBar from "../common/SearchBar";

function Navbar() {
  const { toggleSidebar } = useNavigation();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
      <div className="mx-auto flex h-16 items-center justify-between px-6">
        {/* Left */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            aria-label="Open navigation"
            className="rounded-lg p-2 transition hover:bg-gray-100 dark:hover:bg-gray-800 lg:hidden"
          >
            <IoMdMenu size={24} />
          </button>

          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-lg font-bold text-white">
              U
            </div>

            <div>
              <h1 className="text-lg font-bold tracking-tight">
                UI Showcase
              </h1>

              <p className="text-xs text-gray-500 dark:text-gray-400">
                Reusable React Components
              </p>
            </div>
          </Link>
        </div>

        {/* Center */}
        <div className="hidden w-full max-w-md lg:flex">
          <SearchBar />
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository"
            className="hidden rounded-lg border border-gray-200 p-2 transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800 md:flex"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;