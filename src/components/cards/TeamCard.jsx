import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaDribbble,
} from "react-icons/fa";

import {
  Mail,
  MapPin,
} from "lucide-react";

import Card from "../ui/card";
import Button from "../ui/button";

function TeamCard() {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{ duration: 0.25 }}
    >
      <Card
        size="full"
        className="group overflow-hidden"
      >
        {/* Cover */}
        <div className="relative h-32 bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500">
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Avatar */}
        <div className="relative flex justify-center">
          <img
            src="https://i.pravatar.cc/300?img=47"
            alt="Team Member"
            className="-mt-14 h-28 w-28 rounded-full border-4 border-white object-cover shadow-xl transition duration-300 group-hover:scale-105 dark:border-gray-950"
          />
        </div>

        <Card.Content>
          {/* Name */}
          <div className="text-center">
            <h3 className="text-2xl font-bold">
              Sophia Carter
            </h3>

            <p className="mt-1 text-indigo-600 dark:text-indigo-400">
              Lead UI/UX Designer
            </p>
          </div>

          {/* Bio */}
          <p className="mt-6 text-center leading-7 text-gray-600 dark:text-gray-400">
            Passionate about creating beautiful,
            intuitive digital experiences that
            users love.
          </p>

          {/* Info */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3">
              <MapPin
                size={18}
                className="text-indigo-500"
              />

              <span>San Francisco, USA</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail
                size={18}
                className="text-indigo-500"
              />

              <span>
                sophia@example.com
              </span>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "Figma",
              "React",
              "Tailwind",
              "UX",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600 dark:bg-indigo-950/30 dark:text-indigo-300"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Social */}
          <div className="mt-8 flex justify-center gap-4">
            {[FaGithub, FaLinkedin, FaDribbble].map(
              (Icon, index) => (
                <button
                  key={index}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 transition hover:-translate-y-1 hover:border-indigo-500 hover:text-indigo-600 dark:border-gray-700"
                >
                  <Icon size={18} />
                </button>
              )
            )}
          </div>
        </Card.Content>

        <Card.Footer className="justify-center gap-4">
          <Button variant="outline">
            Message
          </Button>

          <Button variant="gradient">
            View Profile
          </Button>
        </Card.Footer>
      </Card>
    </motion.div>
  );
}

export default TeamCard;