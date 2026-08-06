import { NavLink } from "react-router-dom";

import { sidebarLinks } from "../../data/sidebarLinks";
import { useNavigation } from "../../context/NavigationContext";

function Sidebar({ variant = "desktop" }) {
  const { closeSidebar } = useNavigation();

  const isMobile = variant === "mobile";

  return (
    <aside
      className={
        isMobile
          ? "p-4"
          : "hidden w-72 shrink-0 border-r border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 lg:block"
      }
    >
      <div
        className={
          isMobile
            ? ""
            : "sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto scrollbar-hide p-4"
        }
      >
        <nav className="space-y-2">
          {sidebarLinks.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.id}
                to={item.path}
                end={item.path === "/"}
                onClick={isMobile ? closeSidebar : undefined}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${isActive
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                  }`
                }
              >
                <Icon className="h-5 w-5 shrink-0" />

                <span className="font-medium">
                  {item.title}
                </span>
              </NavLink>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;