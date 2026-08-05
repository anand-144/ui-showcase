import {
  GraduationCap,
} from "lucide-react";

const education = [
  {
    degree: "Bachelor of Computer Science",
    school: "XYZ University",
    year: "2018 - 2022",
  },
  {
    degree: "Master of Computer Applications",
    school: "ABC University",
    year: "2022 - 2024",
  },
];

function EducationTimeline() {
  return (
    <div className="space-y-8">
      {education.map((item) => (
        <div
          key={item.degree}
          className="flex gap-6 rounded-2xl border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-white">
            <GraduationCap />
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              {item.degree}
            </h3>

            <p className="mt-2 text-indigo-600">
              {item.school}
            </p>

            <p className="mt-1 text-gray-500">
              {item.year}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EducationTimeline;