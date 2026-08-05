import {
  Briefcase,
} from "lucide-react";

const experiences = [
  {
    company: "Google",
    role: "Frontend Developer",
    duration: "2020 - 2022",
  },
  {
    company: "Microsoft",
    role: "Senior Frontend Developer",
    duration: "2022 - 2024",
  },
  {
    company: "OpenAI",
    role: "Lead UI Engineer",
    duration: "2024 - Present",
  },
];

function ExperienceTimeline() {
  return (
    <div className="space-y-8">
      {experiences.map((item) => (
        <div
          key={item.company}
          className="flex gap-6"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-white">
            <Briefcase />
          </div>

          <div className="flex-1 rounded-2xl border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <h3 className="text-xl font-semibold">
              {item.role}
            </h3>

            <p className="mt-2 text-indigo-600">
              {item.company}
            </p>

            <p className="mt-1 text-gray-500">
              {item.duration}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExperienceTimeline;