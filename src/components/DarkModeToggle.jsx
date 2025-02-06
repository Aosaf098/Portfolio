import ThemeContext from "@/Context/ThemeContext";
import { Moon, Sun } from "lucide-react";
import React, { useContext } from "react";

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-[var(--primary)] text-[var(--foreground)] rounded"
    >
      {theme === "light" ? (
        <Moon className="w-6 h-6" />
      ) : (
        <Sun className="w-6 h-6" />
      )}
    </button>
  );
};

export default DarkModeToggle;