import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  User,
  Shield,
  Bell,
} from "lucide-react";

const items = [
  {
    icon: <User size={20} />,
    title: "Profile",
    content: "Manage your profile information.",
  },
  {
    icon: <Shield size={20} />,
    title: "Security",
    content: "Update password and enable 2FA.",
  },
  {
    icon: <Bell size={20} />,
    title: "Notifications",
    content: "Control notification preferences.",
  },
];

function IconAccordion() {
  const [open, setOpen] = useState(null);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={item.title}
          className="overflow-hidden rounded-2xl border"
        >
          <button
            onClick={() =>
              setOpen(open === index ? null : index)
            }
            className="flex w-full items-center justify-between p-5"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-indigo-100 p-3 text-indigo-600 dark:bg-indigo-950">
                {item.icon}
              </div>

              <span className="font-semibold">
                {item.title}
              </span>
            </div>

            {open === index ? (
              <ChevronUp />
            ) : (
              <ChevronDown />
            )}
          </button>

          {open === index && (
            <div className="border-t px-5 py-4">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default IconAccordion;