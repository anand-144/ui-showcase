import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
} from "lucide-react";

function NestedAccordion() {
  const [openParent, setOpenParent] =
    useState(false);

  const [openChild, setOpenChild] =
    useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border">
      <button
        onClick={() =>
          setOpenParent(!openParent)
        }
        className="flex w-full items-center justify-between p-5"
      >
        <span className="font-semibold">
          Frontend Development
        </span>

        {openParent ? (
          <ChevronUp />
        ) : (
          <ChevronDown />
        )}
      </button>

      {openParent && (
        <div className="border-t p-5">
          <p className="mb-5 text-gray-600 dark:text-gray-300">
            Learn modern frontend technologies.
          </p>

          <div className="overflow-hidden rounded-xl border">
            <button
              onClick={() =>
                setOpenChild(!openChild)
              }
              className="flex w-full items-center justify-between p-4"
            >
              <span>React.js</span>

              {openChild ? (
                <ChevronUp />
              ) : (
                <ChevronDown />
              )}
            </button>

            {openChild && (
              <div className="border-t p-4 text-gray-600 dark:text-gray-300">
                React is a JavaScript library
                used for building user
                interfaces.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default NestedAccordion;