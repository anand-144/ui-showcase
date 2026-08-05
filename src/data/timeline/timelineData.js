const createCode = (name) => `
import ${name} from "@/components/timelines/${name}";

export default function Example() {
  return <${name} />;
}
`;

export const verticalTimelineUsageCode = createCode("VerticalTimeline");
export const verticalTimelineSourceCode = verticalTimelineUsageCode;

export const horizontalTimelineUsageCode = createCode("HorizontalTimeline");
export const horizontalTimelineSourceCode = horizontalTimelineUsageCode;

export const centerTimelineUsageCode = createCode("CenterTimeline");
export const centerTimelineSourceCode = centerTimelineUsageCode;

export const roadmapTimelineUsageCode = createCode("RoadmapTimeline");
export const roadmapTimelineSourceCode = roadmapTimelineUsageCode;

export const companyTimelineUsageCode = createCode("CompanyTimeline");
export const companyTimelineSourceCode = companyTimelineUsageCode;

export const educationTimelineUsageCode = createCode("EducationTimeline");
export const educationTimelineSourceCode = educationTimelineUsageCode;

export const experienceTimelineUsageCode = createCode("ExperienceTimeline");
export const experienceTimelineSourceCode = experienceTimelineUsageCode;

export const gradientTimelineUsageCode = createCode("GradientTimeline");
export const gradientTimelineSourceCode = gradientTimelineUsageCode;

export const minimalTimelineUsageCode = createCode("MinimalTimeline");
export const minimalTimelineSourceCode = minimalTimelineUsageCode;

export const progressTimelineUsageCode = createCode("ProgressTimeline");
export const progressTimelineSourceCode = progressTimelineUsageCode;

export const numberedTimelineUsageCode = createCode("NumberedTimeline");
export const numberedTimelineSourceCode = numberedTimelineUsageCode;