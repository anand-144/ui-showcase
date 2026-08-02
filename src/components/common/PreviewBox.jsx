import { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import { ChevronDown, ChevronUp } from "lucide-react";

import Button from "../ui/button";
import CopyButton from "./CopyButton";

function PreviewBox({
  code,
  language = "jsx",
}) {
  const [expanded, setExpanded] =
    useState(false);

  return (
    <div className="bg-[#0d1117]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-800 px-5 py-3">
        <span className="font-medium text-gray-300">
          {language.toUpperCase()}
        </span>

        <div className="flex gap-2">
          <CopyButton
            code={code}
            className="!border-gray-700 !bg-transparent !text-white hover:!bg-gray-800"
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
            onClick={() =>
              setExpanded((prev) => !prev)
            }
          >
            {expanded
              ? "Collapse"
              : "Expand"}
          </Button>
        </div>
      </div>

      {/* Syntax Highlight */}
      <Highlight
        theme={themes.vsDark}
        code={code.trim()}
        language={language}
      >
        {({
          className,
          style,
          tokens,
          getLineProps,
          getTokenProps,
        }) => (
          <pre
            className={`${className} overflow-x-auto p-6 text-sm`}
            style={{
              ...style,
              maxHeight: expanded
                ? "100%"
                : "300px",
            }}
          >
            {tokens.map((line, index) => (
              <div
                key={index}
                {...getLineProps({ line })}
              >
                <span className="mr-6 inline-block w-8 select-none text-right text-gray-500">
                  {index + 1}
                </span>

                {line.map((token, key) => (
                  <span
                    key={key}
                    {...getTokenProps({
                      token,
                    })}
                  />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}

export default PreviewBox;