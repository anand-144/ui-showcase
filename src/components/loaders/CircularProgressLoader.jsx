import { useEffect, useState } from "react";

function CircularProgressLoader() {
  const [progress, setProgress] =
    useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) =>
        prev >= 100 ? 0 : prev + 1
      );
    }, 60);

    return () => clearInterval(timer);
  }, []);

  const radius = 45;
  const circumference =
    2 * Math.PI * radius;

  const offset =
    circumference -
    (progress / 100) * circumference;

  return (
    <div className="flex justify-center py-8">
      <div className="relative">
        <svg
          width="120"
          height="120"
          className="-rotate-90"
        >
          <circle
            cx="60"
            cy="60"
            r={radius}
            strokeWidth="10"
            className="stroke-gray-200 dark:stroke-gray-700"
            fill="transparent"
          />

          <circle
            cx="60"
            cy="60"
            r={radius}
            strokeWidth="10"
            fill="transparent"
            className="stroke-indigo-600 transition-all duration-150"
            strokeDasharray={
              circumference
            }
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
          {progress}%
        </div>
      </div>
    </div>
  );
}

export default CircularProgressLoader;