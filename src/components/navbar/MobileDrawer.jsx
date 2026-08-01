import { useEffect } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import Sidebar from "./Sidebar";
import { useNavigation } from "../../context/NavigationContext";

function MobileDrawer() {
  const { isSidebarOpen, closeSidebar } = useNavigation();

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  return (
    <AnimatePresence>
      {isSidebarOpen && (
        <>
          <motion.div
            onClick={closeSidebar}
            className="fixed inset-0 z-[90] bg-black/40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.aside
            className="fixed left-0 top-0 z-[100] h-screen w-72 border-r border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 lg:hidden"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 30,
            }}
          >
            <div className="flex items-center justify-between border-b border-gray-200 p-4 dark:border-gray-800">
              <h2 className="text-lg font-bold">
                UI Showcase
              </h2>

              <button
                onClick={closeSidebar}
                aria-label="Close navigation"
                className="rounded-lg p-2 transition hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <X size={20} />
              </button>
            </div>

            <Sidebar variant="mobile" />
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default MobileDrawer;