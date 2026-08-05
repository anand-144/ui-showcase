const events = [
  {
    year: "2021",
    title: "Started Learning React",
  },
  {
    year: "2022",
    title: "Built First SaaS Project",
  },
  {
    year: "2023",
    title: "Joined Product Company",
  },
  {
    year: "2024",
    title: "Promoted to Senior Developer",
  },
];

function MinimalTimeline() {
  return (
    <div className="space-y-6">
      {events.map((event) => (
        <div
          key={event.year}
          className="flex items-start gap-6"
        >
          <div className="w-20 text-sm font-semibold text-indigo-600">
            {event.year}
          </div>

          <div className="mt-2 h-3 w-3 rounded-full bg-indigo-600" />

          <h3 className="font-medium">
            {event.title}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default MinimalTimeline;