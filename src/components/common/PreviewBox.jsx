import { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import { ChevronDown, ChevronUp } from "lucide-react";

import Button from "../ui/button";
import CopyButton from "./CopyButton";

function PreviewBox({ code, language = "jsx" }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-950 dark:border-gray-700">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-800 px-4 py-3">
        <span className="text-sm font-medium text-gray-300">
          {language.toUpperCase()}
        </span>

        <div className="flex items-center gap-2">
          <CopyButton
            code={code}
            className="!border-gray-700 !bg-gray-900 !text-white hover:!bg-gray-800"
          />

          <Button
            variant="ghost"
            className="!text-white hover:!bg-gray-800"
            rightIcon={
              expanded ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )
            }
            onClick={() => setExpanded((prev) => !prev)}
          >
            {expanded ? "Collapse" : "Expand"}
          </Button>
        </div>
      </div>

      {/* Code */}
      <Highlight
        theme={themes.githubDark}
        code={code.trim()}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} overflow-x-auto p-5 text-sm`}
            style={{
              ...style,
              maxHeight: expanded ? "100%" : "280px",
            }}
          >
            {tokens.map((line, index) => (
              <div
                key={index}
                {...getLineProps({
                  line,
                })}
                className="table-row"
              >
                <span className="table-cell select-none pr-6 text-right text-gray-500">
                  {index + 1}
                </span>

                <span className="table-cell">
                  {line.map((token, key) => (
                    <span
                      key={key}
                      {...getTokenProps({
                        token,
                      })}
                    />
                  ))}
                </span>
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}

export default PreviewBox;