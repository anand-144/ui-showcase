import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const items = [
  {
    title: "React",
    content:
      "A JavaScript library for building user interfaces.",
  },
  {
    title: "Tailwind CSS",
    content:
      "A utility-first CSS framework.",
  },
  {
    title: "Vite",
    content:
      "A fast frontend build tool.",
  },
];

function MultiOpenAccordion() {
  const [openItems, setOpenItems] =
    useState([]);

  const toggle = (index) => {
    if (openItems.includes(index)) {
      setOpenItems(
        openItems.filter((i) => i !== index)
      );
    } else {
      setOpenItems([
        ...openItems,
        index,
      ]);
    }
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={item.title}
          className="overflow-hidden rounded-2xl border"
        >
          <button
            onClick={() => toggle(index)}
            className="flex w-full items-center justify-between p-5"
          >
            <span className="font-semibold">
              {item.title}
            </span>

            {openItems.includes(index) ? (
              <ChevronUp />
            ) : (
              <ChevronDown />
            )}
          </button>

          {openItems.includes(index) && (
            <div className="border-t px-5 py-4 text-gray-600 dark:text-gray-300">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default MultiOpenAccordion;