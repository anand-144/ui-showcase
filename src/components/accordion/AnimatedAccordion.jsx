import { useState } from "react";
import {
  ChevronDown,
} from "lucide-react";

const items = [
  {
    title: "Fast Performance",
    content:
      "Optimized for speed and smooth interactions.",
  },
  {
    title: "Reusable Components",
    content:
      "Designed to work across multiple projects.",
  },
  {
    title: "Responsive Layout",
    content:
      "Looks great on desktop, tablet, and mobile.",
  },
];

function AnimatedAccordion() {
  const [open, setOpen] =
    useState(null);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={item.title}
          className="overflow-hidden rounded-2xl border"
        >
          <button
            onClick={() =>
              setOpen(
                open === index
                  ? null
                  : index
              )
            }
            className="flex w-full items-center justify-between p-5"
          >
            <span className="font-semibold">
              {item.title}
            </span>

            <ChevronDown
              className={`transition-transform duration-300 ${
                open === index
                  ? "rotate-180"
                  : ""
              }`}
            />
          </button>

          <div
            className={`grid transition-all duration-300 ${
              open === index
                ? "grid-rows-[1fr]"
                : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <div className="border-t p-5 text-gray-600 dark:text-gray-300">
                {item.content}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AnimatedAccordion;