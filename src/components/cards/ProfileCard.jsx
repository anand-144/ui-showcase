import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import { MapPin, Briefcase } from "lucide-react";

import Card from "../ui/card";
import Button from "../ui/button";

function ProfileCard() {
  return (
    <Card
      size="full"
      className="group overflow-hidden"
    >
      {/* Cover */}
      <div className="relative h-32 bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-600">
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Avatar */}
      <div className="relative px-6">
        <div className="-mt-14 flex justify-center">
          <img
            src="https://i.pravatar.cc/300?img=32"
            alt="Profile"
            className="h-28 w-28 rounded-full border-4 border-white object-cover shadow-xl transition duration-300 group-hover:scale-105 dark:border-gray-950"
          />
        </div>
      </div>

      {/* Content */}
      <Card.Content>
        <div className="text-center">
          <h3 className="text-2xl font-bold">
            Alex Johnson
          </h3>

          <p className="mt-1 text-indigo-600 dark:text-indigo-400">
            Senior Frontend Engineer
          </p>

          <div className="mt-4 flex justify-center gap-5 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <MapPin size={16} />
              New York
            </span>

            <span className="flex items-center gap-1">
              <Briefcase size={16} />
              Google
            </span>
          </div>

          <p className="mt-6 text-sm leading-7 text-gray-600 dark:text-gray-400">
            Passionate about building scalable,
            accessible and beautiful user
            interfaces with React, Tailwind CSS
            and modern web technologies.
          </p>
        </div>

        {/* Skills */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {[
            "React",
            "Next.js",
            "Tailwind",
            "TypeScript",
            "Node.js",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-300"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          {[
            {
              label: "Projects",
              value: "48",
            },
            {
              label: "Followers",
              value: "12K",
            },
            {
              label: "Rating",
              value: "4.9",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl bg-gray-50 p-4 text-center dark:bg-gray-900"
            >
              <h4 className="text-xl font-bold">
                {item.value}
              </h4>

              <p className="mt-1 text-xs text-gray-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Social */}
        <div className="mt-8 flex justify-center gap-4">
          {[FaGithub, FaLinkedin, FaXTwitter].map(
            (Icon, index) => (
              <button
                key={index}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 transition hover:-translate-y-1 hover:border-indigo-500 hover:text-indigo-600 dark:border-gray-700 dark:hover:border-indigo-400"
              >
                <Icon size={18} />
              </button>
            )
          )}
        </div>
      </Card.Content>

      {/* Footer */}
      <Card.Footer className="justify-center gap-4">
        <Button variant="outline">
          Message
        </Button>

        <Button variant="gradient">
          Follow
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default ProfileCard;