import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  BookOpen,
  FileCode,
  Terminal,
} from "lucide-react";

const docs = [
  {
    icon: <BookOpen size={20} />,
    title: "Getting Started",
    content:
      "Learn how to install and configure the library in your project.",
  },
  {
    icon: <FileCode size={20} />,
    title: "Components",
    content:
      "Browse reusable React components with examples and usage guides.",
  },
  {
    icon: <Terminal size={20} />,
    title: "API Reference",
    content:
      "Explore every component prop and available customization options.",
  },
];

function DocumentationAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-3 rounded-2xl border bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      {docs.map((doc, index) => (
        <div
          key={doc.title}
          className="overflow-hidden rounded-xl border dark:border-gray-800"
        >
          <button
            onClick={() =>
              setOpen(open === index ? -1 : index)
            }
            className="flex w-full items-center justify-between p-4"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-indigo-100 p-2 text-indigo-600 dark:bg-indigo-950">
                {doc.icon}
              </div>

              <span className="font-medium">
                {doc.title}
              </span>
            </div>

            {open === index ? (
              <ChevronUp />
            ) : (
              <ChevronDown />
            )}
          </button>

          {open === index && (
            <div className="border-t p-4 text-gray-600 dark:border-gray-800 dark:text-gray-300">
              {doc.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default DocumentationAccordion;