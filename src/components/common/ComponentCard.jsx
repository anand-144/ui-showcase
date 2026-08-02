import { motion } from "framer-motion";
import { Eye, Code2 } from "lucide-react";
import CopyButton from "./CopyButton";
import { code } from "framer-motion/client";
import Button from "../ui/button";

function ComponentCard({
    title,
    component: Component,
    props = {},
    onCopy,
    onViewCode,
}) {
    return (
        <motion.article
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all dark:border-gray-800 dark:bg-gray-950"
        >
            {/* Header */}
            <div className="border-b border-gray-200 px-6 py-5 dark:border-gray-800">
                <div className="flex items-center gap-2">
                    <Code2
                        size={18}
                        className="text-indigo-600"
                    />

                    <h3 className="text-lg font-semibold">
                        {title}
                    </h3>
                </div>
            </div>

            {/* Live Preview */}
            <div className="flex min-h-[180px] items-center justify-center bg-gray-50 p-8 dark:bg-gray-900">
                {Component && <Component {...props} />}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-gray-200 px-6 py-4 dark:border-gray-800">

                <CopyButton code={code} />

                <Button
                    rightIcon={<Eye size={16} />}
                    onClick={onViewCode}
                >
                    View Code
                </Button>

            </div>
        </motion.article>
    );
}

export default ComponentCard;