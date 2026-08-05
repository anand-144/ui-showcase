import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  User,
  Shield,
  Bell,
} from "lucide-react";

const sections = [
  {
    icon: <User size={20} />,
    title: "Account",
    content:
      "Update your personal information and profile settings.",
  },
  {
    icon: <Shield size={20} />,
    title: "Security",
    content:
      "Manage passwords, two-factor authentication and devices.",
  },
  {
    icon: <Bell size={20} />,
    title: "Notifications",
    content:
      "Customize email, push and SMS notifications.",
  },
];

function SettingsAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-4">
      {sections.map((section, index) => (
        <div
          key={section.title}
          className="overflow-hidden rounded-2xl border bg-white dark:bg-gray-900"
        >
          <button
            onClick={() =>
              setOpen(open === index ? -1 : index)
            }
            className="flex w-full items-center justify-between p-5"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-indigo-100 p-3 text-indigo-600 dark:bg-indigo-950">
                {section.icon}
              </div>

              <span className="font-semibold">
                {section.title}
              </span>
            </div>

            {open === index ? (
              <ChevronUp />
            ) : (
              <ChevronDown />
            )}
          </button>

          {open === index && (
            <div className="border-t p-5 text-gray-600 dark:text-gray-300">
              {section.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default SettingsAccordion;