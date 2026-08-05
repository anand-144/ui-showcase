import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const items = [
  {
    title: "Glass Effect",
    content:
      "Modern glassmorphism UI using backdrop blur.",
  },
  {
    title: "Premium Design",
    content:
      "Perfect for landing pages and SaaS products.",
  },
  {
    title: "Fully Responsive",
    content:
      "Works beautifully across all devices.",
  },
];

function GlassAccordion() {
  const [open, setOpen] =
    useState(0);

  return (
    <div className="rounded-3xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 p-8">
      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={item.title}
            className="overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl"
          >
            <button
              onClick={() =>
                setOpen(
                  open === index
                    ? -1
                    : index
                )
              }
              className="flex w-full items-center justify-between p-5 text-white"
            >
              <span className="font-semibold">
                {item.title}
              </span>

              {open === index ? (
                <ChevronUp />
              ) : (
                <ChevronDown />
              )}
            </button>

            {open === index && (
              <div className="border-t border-white/20 p-5 text-white/80">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GlassAccordion;