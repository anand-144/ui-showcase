import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowRight,
} from "lucide-react";

import Card from "../ui/card";
import Button from "../ui/button";

function BlogCard() {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
    >
      <Card
        size="full"
        className="group overflow-hidden"
      >
        {/* Blog Image */}
        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Blog"
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
          />
        </div>

        <Card.Content>
          {/* Category */}
          <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-600 dark:bg-indigo-950 dark:text-indigo-300">
            React
          </span>

          {/* Title */}
          <h3 className="mt-4 text-2xl font-bold">
            Building Modern UI Components with React
          </h3>

          {/* Description */}
          <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
            Learn how to build scalable, reusable,
            and production-ready React components
            using Tailwind CSS and modern design
            principles.
          </p>

          {/* Meta */}
          <div className="mt-6 flex items-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              Jul 28, 2026
            </span>

            <span className="flex items-center gap-2">
              <Clock size={16} />
              8 min read
            </span>
          </div>
        </Card.Content>

        <Card.Footer className="justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/100?img=12"
              alt="Author"
              className="h-10 w-10 rounded-full"
            />

            <div>
              <p className="font-semibold">
                Alex Johnson
              </p>

              <p className="text-xs text-gray-500">
                Senior Frontend Engineer
              </p>
            </div>
          </div>

          <Button
            variant="gradient"
            rightIcon={<ArrowRight size={16} />}
          >
            Read More
          </Button>
        </Card.Footer>
      </Card>
    </motion.div>
  );
}

export default BlogCard;