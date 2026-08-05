const history = [
  {
    year: "2019",
    title: "Company Founded",
  },
  {
    year: "2020",
    title: "First 1,000 Customers",
  },
  {
    year: "2022",
    title: "Series A Funding",
  },
  {
    year: "2025",
    title: "Global Expansion",
  },
];

function CompanyTimeline() {
  return (
    <div className="relative border-l-4 border-indigo-600 pl-8">
      {history.map((item) => (
        <div
          key={item.year}
          className="relative mb-10"
        >
          <div className="absolute -left-[42px] h-5 w-5 rounded-full bg-indigo-600" />

          <p className="text-sm font-semibold text-indigo-600">
            {item.year}
          </p>

          <h3 className="mt-2 text-xl font-bold">
            {item.title}
          </h3>

          <p className="mt-2 text-gray-500">
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
        </div>
      ))}
    </div>
  );
}

export default CompanyTimeline;