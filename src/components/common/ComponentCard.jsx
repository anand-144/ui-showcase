import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Code2 } from "lucide-react";

import Button from "../ui/button";
import CopyButton from "./CopyButton";
import PreviewBox from "./PreviewBox";

function ComponentCard({
  title,
  component: Component,
  props = {},
  usageCode,
  sourceCode,
}) {
  const [showCode, setShowCode] = useState(false);
  const [activeTab, setActiveTab] = useState("usage");

  const currentCode =
    activeTab === "usage"
      ? usageCode
      : sourceCode;

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950"
    >
      {/* Header */}
      <div className="border-b border-gray-200 px-6 py-5 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <Code2
            size={18}
            className="text-indigo-600"
          />

          <h3 className="text-lg font-semibold">
            {title}
          </h3>
        </div>
      </div>

      {/* Live Preview */}
      <div className="flex min-h-[180px] items-center justify-center bg-gray-50 p-8 dark:bg-gray-900">
        {Component &&
          (props ? (
            <Component {...props} />
          ) : (
            <Component />
          ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-gray-200 px-6 py-4 dark:border-gray-800">
        <CopyButton
          code={currentCode}
          children={
            activeTab === "usage"
              ? "Copy Usage"
              : "Copy Source"
          }
        />

        <Button
          leftIcon={
            showCode ? (
              <EyeOff size={16} />
            ) : (
              <Eye size={16} />
            )
          }
          onClick={() =>
            setShowCode((prev) => !prev)
          }
        >
          {showCode
            ? "Hide Code"
            : "View Code"}
        </Button>
      </div>

      {/* Code */}
      {showCode && (
        <div className="border-t border-gray-200 dark:border-gray-800">
          {/* Tabs */}
          <div className="flex border-b border-gray-200 dark:border-gray-800">
            <button
              onClick={() =>
                setActiveTab("usage")
              }
              className={`flex-1 py-3 text-sm font-medium transition ${activeTab === "usage"
                  ? "border-b-2 border-indigo-600 text-indigo-600"
                  : "text-gray-500 hover:text-gray-900 dark:hover:text-white"
                }`}
            >
              Usage
            </button>

            <button
              onClick={() =>
                setActiveTab("source")
              }
              className={`flex-1 py-3 text-sm font-medium transition ${activeTab === "source"
                  ? "border-b-2 border-indigo-600 text-indigo-600"
                  : "text-gray-500 hover:text-gray-900 dark:hover:text-white"
                }`}
            >
              Source
            </button>
          </div>

          <PreviewBox code={currentCode} />
        </div>
      )}
    </motion.article>
  );
}

export default ComponentCard;