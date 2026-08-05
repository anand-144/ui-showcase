import VerticalTimeline from "../../components/timeline/VerticalTimeline";
import HorizontalTimeline from "../../components/timeline/HorizontalTimeline";
import CenterTimeline from "../../components/timeline/CenterTimeline";
import RoadmapTimeline from "../../components/timeline/RoadmapTimeline";
import CompanyTimeline from "../../components/timeline/CompanyTimeline";
import EducationTimeline from "../../components/timeline/EducationTimeline";
import ExperienceTimeline from "../../components/timeline/ExperienceTimeline";
import GradientTimeline from "../../components/timeline/GradientTimeline";
import MinimalTimeline from "../../components/timeline/MinimalTimeline";
import ProgressTimeline from "../../components/timeline/ProgressTimeline";
import NumberedTimeline from "../../components/timeline/NumberedTimeline";

import {
  verticalTimelineUsageCode,
  verticalTimelineSourceCode,

  horizontalTimelineUsageCode,
  horizontalTimelineSourceCode,

  centerTimelineUsageCode,
  centerTimelineSourceCode,

  roadmapTimelineUsageCode,
  roadmapTimelineSourceCode,

  companyTimelineUsageCode,
  companyTimelineSourceCode,

  educationTimelineUsageCode,
  educationTimelineSourceCode,

  experienceTimelineUsageCode,
  experienceTimelineSourceCode,

  gradientTimelineUsageCode,
  gradientTimelineSourceCode,

  minimalTimelineUsageCode,
  minimalTimelineSourceCode,

  progressTimelineUsageCode,
  progressTimelineSourceCode,

  numberedTimelineUsageCode,
  numberedTimelineSourceCode,
} from "./timelineData";

export const timelineComponents = [
  {
    id: "vertical-timeline",
    name: "Vertical Timeline",
    component: VerticalTimeline,
    usageCode: verticalTimelineUsageCode,
    sourceCode: verticalTimelineSourceCode,
    tags: ["timeline", "vertical", "career"],
  },

  {
    id: "horizontal-timeline",
    name: "Horizontal Timeline",
    component: HorizontalTimeline,
    usageCode: horizontalTimelineUsageCode,
    sourceCode: horizontalTimelineSourceCode,
    tags: ["timeline", "horizontal", "steps"],
  },

  {
    id: "center-timeline",
    name: "Center Timeline",
    component: CenterTimeline,
    usageCode: centerTimelineUsageCode,
    sourceCode: centerTimelineSourceCode,
    tags: ["timeline", "center", "history"],
  },

  {
    id: "roadmap-timeline",
    name: "Roadmap Timeline",
    component: RoadmapTimeline,
    usageCode: roadmapTimelineUsageCode,
    sourceCode: roadmapTimelineSourceCode,
    tags: ["timeline", "roadmap", "progress"],
  },

  {
    id: "company-timeline",
    name: "Company Timeline",
    component: CompanyTimeline,
    usageCode: companyTimelineUsageCode,
    sourceCode: companyTimelineSourceCode,
    tags: ["timeline", "company", "history"],
  },

  {
    id: "education-timeline",
    name: "Education Timeline",
    component: EducationTimeline,
    usageCode: educationTimelineUsageCode,
    sourceCode: educationTimelineSourceCode,
    tags: ["timeline", "education", "school"],
  },

  {
    id: "experience-timeline",
    name: "Experience Timeline",
    component: ExperienceTimeline,
    usageCode: experienceTimelineUsageCode,
    sourceCode: experienceTimelineSourceCode,
    tags: ["timeline", "experience", "career"],
  },

  {
    id: "gradient-timeline",
    name: "Gradient Timeline",
    component: GradientTimeline,
    usageCode: gradientTimelineUsageCode,
    sourceCode: gradientTimelineSourceCode,
    tags: ["timeline", "gradient", "modern"],
  },

  {
    id: "minimal-timeline",
    name: "Minimal Timeline",
    component: MinimalTimeline,
    usageCode: minimalTimelineUsageCode,
    sourceCode: minimalTimelineSourceCode,
    tags: ["timeline", "minimal", "clean"],
  },

  {
    id: "progress-timeline",
    name: "Progress Timeline",
    component: ProgressTimeline,
    usageCode: progressTimelineUsageCode,
    sourceCode: progressTimelineSourceCode,
    tags: ["timeline", "progress", "steps"],
  },

  {
    id: "numbered-timeline",
    name: "Numbered Timeline",
    component: NumberedTimeline,
    usageCode: numberedTimelineUsageCode,
    sourceCode: numberedTimelineSourceCode,
    tags: ["timeline", "numbered", "onboarding"],
  },
];