import { useEffect, useState, type FC } from "react";

interface DarkModeToggleProps {}

const DarkModeToggle: FC<DarkModeToggleProps> = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed top-10 right-8 px-3 py-1.5 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded transition"
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
};

export default DarkModeToggle;
