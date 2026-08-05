import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const faqs = [
  {
    question: "What is Pixel UI?",
    answer:
      "Pixel UI is a collection of modern React and Tailwind CSS components.",
  },
  {
    question: "Is it free?",
    answer:
      "Yes, all basic components are completely free to use.",
  },
  {
    question: "Does it support dark mode?",
    answer:
      "Yes, every component is built with dark mode support.",
  },
];

function FAQAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="mx-auto max-w-3xl space-y-4">
      {faqs.map((item, index) => (
        <div
          key={item.question}
          className="overflow-hidden rounded-2xl border"
        >
          <button
            onClick={() => setOpen(open === index ? -1 : index)}
            className="flex w-full items-center justify-between p-5 text-left"
          >
            <span className="font-semibold">
              {item.question}
            </span>

            {open === index ? (
              <ChevronUp />
            ) : (
              <ChevronDown />
            )}
          </button>

          {open === index && (
            <div className="border-t px-5 py-4 text-gray-600 dark:text-gray-300">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FAQAccordion;