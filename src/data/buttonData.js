// ---------------------------
// Primary Button
// ---------------------------

export const primaryButtonPreviewCode = `
<Button>
  Primary Button
</Button>
`;

export const primaryButtonSourceCode = `
import { motion } from "framer-motion";

export default function PrimaryButton() {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className="inline-flex h-11 items-center justify-center rounded-xl bg-indigo-600 px-5 text-sm font-medium text-white shadow-md transition-all duration-300 hover:bg-indigo-700"
    >
      Primary Button
    </motion.button>
  );
}
`;

// ---------------------------
// Secondary Button
// ---------------------------

export const secondaryButtonPreviewCode = `
<Button variant="secondary">
  Secondary Button
</Button>
`;

export const secondaryButtonSourceCode = `
import { motion } from "framer-motion";

export default function SecondaryButton() {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className="inline-flex h-11 items-center justify-center rounded-xl bg-slate-900 px-5 text-sm font-medium text-white transition-all duration-300 hover:bg-slate-800"
    >
      Secondary Button
    </motion.button>
  );
}
`;

// ---------------------------
// Outline Button
// ---------------------------

export const outlineButtonPreviewCode = `
<Button variant="outline">
  Outline Button
</Button>
`;

export const outlineButtonSourceCode = `
import { motion } from "framer-motion";

export default function OutlineButton() {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className="inline-flex h-11 items-center justify-center rounded-xl border border-gray-300 bg-transparent px-5 text-sm font-medium transition-all duration-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
    >
      Outline Button
    </motion.button>
  );
}
`;

// ---------------------------
// Ghost Button
// ---------------------------

export const ghostButtonPreviewCode = `
<Button variant="ghost">
  Ghost Button
</Button>
`;

export const ghostButtonSourceCode = `
import { motion } from "framer-motion";

export default function GhostButton() {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className="inline-flex h-11 items-center justify-center rounded-xl px-5 text-sm font-medium transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      Ghost Button
    </motion.button>
  );
}
`;

// ---------------------------
// Gradient Button
// ---------------------------

export const gradientButtonPreviewCode = `
<Button variant="gradient">
  Gradient Button
</Button>
`;

export const gradientButtonSourceCode = `
import { motion } from "framer-motion";

export default function GradientButton() {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className="inline-flex h-11 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-5 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:opacity-90"
    >
      Gradient Button
    </motion.button>
  );
}
`;

// ---------------------------
// Glass Button
// ---------------------------

export const glassButtonPreviewCode = `
<Button variant="glass">
  Glass Button
</Button>
`;

export const glassButtonSourceCode = `
import { motion } from "framer-motion";

export default function GlassButton() {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className="inline-flex h-11 items-center justify-center rounded-xl border border-white/20 bg-white/20 px-5 text-sm font-medium backdrop-blur-xl transition-all duration-300 hover:bg-white/30 dark:bg-white/10"
    >
      Glass Button
    </motion.button>
  );
}
`;

// ---------------------------
// Success Button
// ---------------------------

export const successButtonPreviewCode = `
<Button variant="success">
  Success Button
</Button>
`;

export const successButtonSourceCode = `
import { motion } from "framer-motion";

export default function SuccessButton() {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className="inline-flex h-11 items-center justify-center rounded-xl bg-emerald-600 px-5 text-sm font-medium text-white transition-all duration-300 hover:bg-emerald-700"
    >
      Success Button
    </motion.button>
  );
}
`;

// ---------------------------
// Danger Button
// ---------------------------

export const dangerButtonPreviewCode = `
<Button variant="danger">
  Danger Button
</Button>
`;

export const dangerButtonSourceCode = `
import { motion } from "framer-motion";

export default function DangerButton() {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className="inline-flex h-11 items-center justify-center rounded-xl bg-red-600 px-5 text-sm font-medium text-white transition-all duration-300 hover:bg-red-700"
    >
      Danger Button
    </motion.button>
  );
}
`;