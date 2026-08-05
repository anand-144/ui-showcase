import { memo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  ArrowRight,
} from "lucide-react";

function SearchResults({
  results,
  query,
  selectedIndex,
  clearSearch,
}) {
  const navigate = useNavigate();

  if (!query.trim()) return null;

  const handleSelect = (item) => {
    navigate(item.path);

    clearSearch();

    setTimeout(() => {
      const element =
        document.getElementById(item.id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 150);
  };

  if (results.length === 0) {
    return (
      <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl dark:border-gray-700 dark:bg-gray-900">
        <div className="flex flex-col items-center gap-3 p-8">
          <Search
            size={32}
            className="text-gray-400"
          />

          <p className="font-medium">
            No results found
          </p>

          <span className="text-sm text-gray-500">
            Try another keyword.
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute left-0 right-0 top-full z-50 mt-2 max-h-96 overflow-y-auto rounded-xl border border-gray-200 bg-white shadow-xl dark:border-gray-700 dark:bg-gray-900">
      {results.map((item, index) => (
        <button
          key={item.id}
          onClick={() =>
            handleSelect(item)
          }
          className={`flex w-full items-center justify-between px-4 py-3 text-left transition ${
            selectedIndex === index
              ? "bg-indigo-50 dark:bg-indigo-950"
              : "hover:bg-gray-100 dark:hover:bg-gray-800"
          }`}
        >
          <div>
            <h4 className="font-medium">
              {item.title}
            </h4>

            <div className="mt-1 flex items-center gap-2">
              <span className="rounded-full bg-indigo-100 px-2 py-0.5 text-xs font-medium text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                {item.category}
              </span>

              <span className="text-xs text-gray-500">
                {item.path}
              </span>
            </div>
          </div>

          <ArrowRight
            size={18}
            className="text-gray-400"
          />
        </button>
      ))}
    </div>
  );
}

export default memo(SearchResults);