import {
  CheckCircle,
  Search,
  Code,
  Rocket,
} from "lucide-react";

const steps = [
  {
    icon: <Search size={22} />,
    title: "Research",
  },
  {
    icon: <Code size={22} />,
    title: "Development",
  },
  {
    icon: <CheckCircle size={22} />,
    title: "Testing",
  },
  {
    icon: <Rocket size={22} />,
    title: "Launch",
  },
];

function HorizontalTimeline() {
  return (
    <div className="overflow-x-auto">
      <div className="flex min-w-max items-center justify-between gap-8">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="flex items-center"
          >
            <div className="flex flex-col items-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg">
                {step.icon}
              </div>

              <h3 className="mt-4 font-semibold">
                {step.title}
              </h3>
            </div>

            {index !==
              steps.length - 1 && (
              <div className="mx-6 h-1 w-20 rounded bg-indigo-300" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HorizontalTimeline;