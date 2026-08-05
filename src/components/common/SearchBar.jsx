import {
  useEffect,
  useRef,
} from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

import useSearch from "../../hooks/useSearch";
import SearchResults from "./SearchResults";

function SearchBar() {
  const navigate = useNavigate();

  const wrapperRef = useRef(null);

  const inputRef = useRef(null);

  const {
    query,
    setQuery,

    results,

    selectedIndex,

    moveDown,
    moveUp,

    clearSearch,
  } = useSearch();

  /* -------------------------------------------------------------------------- */
  /*                           Click Outside                                    */
  /* -------------------------------------------------------------------------- */

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target)
      ) {
        clearSearch();
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, [clearSearch]);

  /* -------------------------------------------------------------------------- */
  /*                           Keyboard Navigation                              */
  /* -------------------------------------------------------------------------- */

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        moveDown();
        break;

      case "ArrowUp":
        e.preventDefault();
        moveUp();
        break;

      case "Escape":
        clearSearch();
        inputRef.current.blur();
        break;

      case "Enter":
        if (results[selectedIndex]) {
          const item =
            results[selectedIndex];

          navigate(item.path);

          clearSearch();

          setTimeout(() => {
            const element =
              document.getElementById(
                item.id
              );

            if (element) {
              element.scrollIntoView({
                behavior: "smooth",
              });
            }
          }, 150);
        }

        break;

      default:
        break;
    }
  };
  return (
    <div
      ref={wrapperRef}
      className="relative w-full"
    >
      <Search
        size={18}
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={(e) =>
          setQuery(e.target.value)
        }
        onKeyDown={handleKeyDown}
        placeholder="Search components..."
        className="w-full rounded-lg border border-gray-200 bg-transparent py-2 pl-10 pr-4 outline-none transition focus:border-black dark:border-gray-700 dark:focus:border-white"
      />

      <SearchResults
        query={query}
        results={results}
        selectedIndex={selectedIndex}
        clearSearch={clearSearch}
      />
    </div>
  );
}

export default SearchBar;