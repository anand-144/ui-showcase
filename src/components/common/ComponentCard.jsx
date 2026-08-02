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
  code,
}) {
  const [showCode, setShowCode] = useState(false);

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
        {Component && <Component {...props} />}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-gray-200 px-6 py-4 dark:border-gray-800">
        <CopyButton code={code} />

        <Button
          variant="primary"
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
          {showCode ? "Hide Code" : "View Code"}
        </Button>
      </div>

      {/* Code Preview */}
      {showCode && (
        <div className="border-t border-gray-200 dark:border-gray-800">
          <PreviewBox code={code} />
        </div>
      )}
    </motion.article>
  );
}

export default ComponentCard;