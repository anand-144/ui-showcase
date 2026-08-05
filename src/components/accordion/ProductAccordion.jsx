import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Star,
  Truck,
  ShieldCheck,
} from "lucide-react";

const sections = [
  {
    icon: <Star size={20} />,
    title: "Product Details",
    content:
      "Premium quality product built with durable materials and modern craftsmanship.",
  },
  {
    icon: <Truck size={20} />,
    title: "Shipping",
    content:
      "Free shipping worldwide with delivery in 3–7 business days.",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Warranty",
    content:
      "Covered by a 2-year manufacturer warranty and 30-day return policy.",
  },
];

function ProductAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-4 rounded-3xl border bg-white p-6 shadow-lg dark:border-gray-800 dark:bg-gray-900">
      <div>
        <h2 className="text-2xl font-bold">
          Product Information
        </h2>

        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Everything you need to know before purchasing.
        </p>
      </div>

      {sections.map((section, index) => (
        <div
          key={section.title}
          className="overflow-hidden rounded-2xl border dark:border-gray-800"
        >
          <button
            onClick={() =>
              setOpen(open === index ? -1 : index)
            }
            className="flex w-full items-center justify-between p-5"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-indigo-100 p-3 text-indigo-600 dark:bg-indigo-950">
                {section.icon}
              </div>

              <span className="font-semibold">
                {section.title}
              </span>
            </div>

            {open === index ? (
              <ChevronUp />
            ) : (
              <ChevronDown />
            )}
          </button>

          {open === index && (
            <div className="border-t p-5 text-gray-600 dark:border-gray-800 dark:text-gray-300">
              {section.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ProductAccordion;