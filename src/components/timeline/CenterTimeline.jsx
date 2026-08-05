import {
  Briefcase,
  GraduationCap,
  Rocket,
} from "lucide-react";

const timeline = [
  {
    icon: <GraduationCap size={18} />,
    title: "Graduation",
    date: "2022",
    description:
      "Completed Bachelor's degree.",
  },
  {
    icon: <Briefcase size={18} />,
    title: "Software Engineer",
    date: "2023",
    description:
      "Joined a product company as a frontend developer.",
  },
  {
    icon: <Rocket size={18} />,
    title: "Promotion",
    date: "2025",
    description:
      "Promoted to Senior Frontend Developer.",
  },
];

function CenterTimeline() {
  return (
    <div className="relative mx-auto max-w-5xl">
      <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-indigo-200" />

      {timeline.map((item, index) => (
        <div
          key={item.title}
          className={`relative mb-12 flex items-center ${
            index % 2 === 0
              ? "justify-start"
              : "justify-end"
          }`}
        >
          <div className="w-[45%] rounded-2xl border bg-white p-6 shadow dark:border-gray-800 dark:bg-gray-900">
            <h3 className="text-lg font-semibold">
              {item.title}
            </h3>

            <p className="mt-1 text-sm text-indigo-600">
              {item.date}
            </p>

            <p className="mt-3 text-gray-600 dark:text-gray-300">
              {item.description}
            </p>
          </div>

          <div className="absolute left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg">
            {item.icon}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CenterTimeline;