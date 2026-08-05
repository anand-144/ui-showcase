const timeline = [
  {
    title: "Create Account",
    description:
      "Sign up and create your personal account.",
  },
  {
    title: "Choose a Plan",
    description:
      "Select the plan that best fits your needs.",
  },
  {
    title: "Customize",
    description:
      "Configure your workspace and preferences.",
  },
  {
    title: "Launch",
    description:
      "Start using the platform and grow your business.",
  },
];

function NumberedTimeline() {
  return (
    <div className="space-y-8">
      {timeline.map((item, index) => (
        <div
          key={item.title}
          className="flex gap-6"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-lg font-bold text-white shadow-lg">
            {index + 1}
          </div>

          <div className="flex-1 rounded-2xl border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <h3 className="text-lg font-semibold">
              {item.title}
            </h3>

            <p className="mt-3 text-gray-600 dark:text-gray-300">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NumberedTimeline;