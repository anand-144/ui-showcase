import {
  Rocket,
  Sparkles,
  Flag,
} from "lucide-react";

const milestones = [
  {
    icon: <Rocket size={18} />,
    title: "Launch",
    year: "2022",
  },
  {
    icon: <Sparkles size={18} />,
    title: "Growth",
    year: "2023",
  },
  {
    icon: <Flag size={18} />,
    title: "Success",
    year: "2024",
  },
];

function GradientTimeline() {
  return (
    <div className="relative space-y-10 border-l-4 border-indigo-500 pl-8">
      {milestones.map((item) => (
        <div
          key={item.title}
          className="relative"
        >
          <div className="absolute -left-12 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg">
            {item.icon}
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 p-6 text-white shadow-xl">
            <h3 className="text-xl font-semibold">
              {item.title}
            </h3>

            <p className="mt-2 text-indigo-100">
              {item.year}
            </p>

            <p className="mt-3 text-indigo-100">
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GradientTimeline;