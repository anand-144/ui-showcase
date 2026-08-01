import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const themes = [
  {
    name: "light",
    icon: Sun,
    label: "Light",
  },
  {
    name: "dark",
    icon: Moon,
    label: "Dark",
  },
  {
    name: "system",
    icon: Monitor,
    label: "System",
  },
];

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center rounded-lg border border-gray-200 bg-white p-1 shadow-sm dark:border-gray-700 dark:bg-gray-900">
      {themes.map(({ name, icon: Icon, label }) => (
        <button
          key={name}
          onClick={() => setTheme(name)}
          title={label}
          className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 ${
            theme === name
              ? "bg-black text-white dark:bg-white dark:text-black"
              : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
          }`}
        >
          <Icon size={16} />
          <span className="hidden sm:inline">{label}</span>
        </button>
      ))}
    </div>
  );
}

export default ThemeToggle;