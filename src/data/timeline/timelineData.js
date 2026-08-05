const createCode = (name) => `
import ${name} from "@/components/timelines/${name}";

export default function Example() {
  return <${name} />;
}
`;

/* -------------------------------------------------------------------------- */
/*                                 Usage Code                                 */
/* -------------------------------------------------------------------------- */

export const verticalTimelineUsageCode = createCode("VerticalTimeline");
export const horizontalTimelineUsageCode = createCode("HorizontalTimeline");
export const centerTimelineUsageCode = createCode("CenterTimeline");
export const roadmapTimelineUsageCode = createCode("RoadmapTimeline");
export const companyTimelineUsageCode = createCode("CompanyTimeline");
export const educationTimelineUsageCode = createCode("EducationTimeline");
export const experienceTimelineUsageCode = createCode("ExperienceTimeline");
export const gradientTimelineUsageCode = createCode("GradientTimeline");
export const minimalTimelineUsageCode = createCode("MinimalTimeline");
export const progressTimelineUsageCode = createCode("ProgressTimeline");
export const numberedTimelineUsageCode = createCode("NumberedTimeline");

/* -------------------------------------------------------------------------- */
/*                                Source Code                                 */
/* -------------------------------------------------------------------------- */

import verticalTimelineRaw from "../../components/timeline/VerticalTimeline.jsx?raw";
import horizontalTimelineRaw from "../../components/timeline/HorizontalTimeline.jsx?raw";
import centerTimelineRaw from "../../components/timeline/CenterTimeline.jsx?raw";
import roadmapTimelineRaw from "../../components/timeline/RoadmapTimeline.jsx?raw";
import companyTimelineRaw from "../../components/timeline/CompanyTimeline.jsx?raw";
import educationTimelineRaw from "../../components/timeline/EducationTimeline.jsx?raw";
import experienceTimelineRaw from "../../components/timeline/ExperienceTimeline.jsx?raw";
import gradientTimelineRaw from "../../components/timeline/GradientTimeline.jsx?raw";
import minimalTimelineRaw from "../../components/timeline/MinimalTimeline.jsx?raw";
import progressTimelineRaw from "../../components/timeline/ProgressTimeline.jsx?raw";
import numberedTimelineRaw from "../../components/timeline/NumberedTimeline.jsx?raw";

export const verticalTimelineSourceCode = verticalTimelineRaw;
export const horizontalTimelineSourceCode = horizontalTimelineRaw;
export const centerTimelineSourceCode = centerTimelineRaw;
export const roadmapTimelineSourceCode = roadmapTimelineRaw;
export const companyTimelineSourceCode = companyTimelineRaw;
export const educationTimelineSourceCode = educationTimelineRaw;
export const experienceTimelineSourceCode = experienceTimelineRaw;
export const gradientTimelineSourceCode = gradientTimelineRaw;
export const minimalTimelineSourceCode = minimalTimelineRaw;
export const progressTimelineSourceCode = progressTimelineRaw;
export const numberedTimelineSourceCode = numberedTimelineRaw;