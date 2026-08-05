const steps = [
  {
    title: "Account Created",
    completed: true,
  },
  {
    title: "Profile Setup",
    completed: true,
  },
  {
    title: "Verification",
    completed: true,
  },
  {
    title: "Subscription",
    completed: false,
  },
  {
    title: "Completed",
    completed: false,
  },
];

function ProgressTimeline() {
  return (
    <div className="space-y-8">
      {steps.map((step, index) => (
        <div
          key={step.title}
          className="flex gap-5"
        >
          <div className="flex flex-col items-center">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white ${
                step.completed
                  ? "bg-green-500"
                  : "bg-gray-300 dark:bg-gray-700"
              }`}
            >
              {index + 1}
            </div>

            {index !== steps.length - 1 && (
              <div
                className={`mt-2 h-14 w-1 ${
                  step.completed
                    ? "bg-green-500"
                    : "bg-gray-300 dark:bg-gray-700"
                }`}
              />
            )}
          </div>

          <div className="pt-1">
            <h3 className="font-semibold">
              {step.title}
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              {step.completed
                ? "Completed"
                : "Pending"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProgressTimeline;