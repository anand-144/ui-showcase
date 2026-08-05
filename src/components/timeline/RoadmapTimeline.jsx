import {
  CheckCircle2,
  Circle,
} from "lucide-react";

const roadmap = [
  {
    title: "Planning",
    completed: true,
  },
  {
    title: "UI Design",
    completed: true,
  },
  {
    title: "Frontend Development",
    completed: true,
  },
  {
    title: "Backend Integration",
    completed: false,
  },
  {
    title: "Deployment",
    completed: false,
  },
];

function RoadmapTimeline() {
  return (
    <div className="space-y-8">
      {roadmap.map((item, index) => (
        <div
          key={item.title}
          className="flex gap-6"
        >
          <div className="flex flex-col items-center">
            {item.completed ? (
              <CheckCircle2
                className="text-green-500"
                size={28}
              />
            ) : (
              <Circle
                className="text-gray-400"
                size={28}
              />
            )}

            {index !== roadmap.length - 1 && (
              <div className="mt-2 h-16 w-1 bg-gray-300" />
            )}
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              {item.title}
            </h3>

            <p className="mt-2 text-gray-500">
              {item.completed
                ? "Completed"
                : "Upcoming"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RoadmapTimeline;