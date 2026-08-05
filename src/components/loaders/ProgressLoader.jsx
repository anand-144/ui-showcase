import { useEffect, useState } from "react";

function ProgressLoader() {
  const [progress, setProgress] =
    useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) =>
        prev >= 100 ? 0 : prev + 2
      );
    }, 80);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mx-auto max-w-md py-8">
      <div className="mb-3 flex justify-between text-sm font-medium">
        <span>Uploading...</span>

        <span>{progress}%</span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
        <div
          className="h-full rounded-full bg-indigo-600 transition-all duration-100"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  );
}

export default ProgressLoader;