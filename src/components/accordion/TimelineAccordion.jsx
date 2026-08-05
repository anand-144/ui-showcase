import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  CalendarDays,
} from "lucide-react";

const events = [
  {
    year: "2022",
    title: "Started Journey",
    description:
      "Began learning modern frontend development with React.",
  },
  {
    year: "2023",
    title: "First Job",
    description:
      "Worked as a Frontend Developer building production applications.",
  },
  {
    year: "2024",
    title: "Senior Developer",
    description:
      "Led UI development and built reusable design systems.",
  },
];

function TimelineAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-4">
      {events.map((item, index) => (
        <div
          key={item.year}
          className="overflow-hidden rounded-2xl border"
        >
          <button
            onClick={() =>
              setOpen(open === index ? -1 : index)
            }
            className="flex w-full items-center justify-between p-5"
          >
            <div className="flex items-center gap-4">
              <CalendarDays className="text-indigo-600" />

              <div className="text-left">
                <h3 className="font-semibold">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {item.year}
                </p>
              </div>
            </div>

            {open === index ? (
              <ChevronUp />
            ) : (
              <ChevronDown />
            )}
          </button>

          {open === index && (
            <div className="border-t p-5 text-gray-600 dark:text-gray-300">
              {item.description}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default TimelineAccordion;