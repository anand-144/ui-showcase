import {
  Briefcase,
  GraduationCap,
  Rocket,
} from "lucide-react";

import Timeline from "../ui/timeline";

const timeline = [
  {
    icon: <GraduationCap size={18} />,
    title: "Bachelor's Degree",
    date: "2019 - 2022",
    description:
      "Completed Bachelor's in Computer Science.",
  },
  {
    icon: <Briefcase size={18} />,
    title: "Frontend Developer",
    date: "2022 - 2024",
    description:
      "Worked on modern React applications and reusable UI components.",
  },
  {
    icon: <Rocket size={18} />,
    title: "Product Launch",
    date: "2025",
    description:
      "Successfully launched multiple production-ready projects.",
  },
];

function VerticalTimeline() {
  return (
    <Timeline>
      {timeline.map((item) => (
        <Timeline.Item key={item.title}>
          <Timeline.Marker>
            {item.icon}
          </Timeline.Marker>

          <Timeline.Content>
            <Timeline.Title>
              {item.title}
            </Timeline.Title>

            <Timeline.Date>
              {item.date}
            </Timeline.Date>

            <Timeline.Description>
              {item.description}
            </Timeline.Description>
          </Timeline.Content>
        </Timeline.Item>
      ))}
    </Timeline>
  );
}

export default VerticalTimeline;