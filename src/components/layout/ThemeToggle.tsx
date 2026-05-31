import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type ThemeMode = "dark" | "light";

const THEME_STORAGE_KEY = "sable-stone-theme";

const getInitialTheme = (): ThemeMode => {
  if (typeof window === "undefined") return "dark";

  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (savedTheme === "light" || savedTheme === "dark") return savedTheme;

  return document.documentElement.classList.contains("light") ? "light" : "dark";
};

export default function ThemeToggle({ onToggle }: { onToggle?: () => void }) {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);
  const isLight = theme === "light";

  useEffect(() => {
    document.documentElement.classList.toggle("light", isLight);
    document.documentElement.style.colorScheme = isLight ? "light" : "dark";
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [isLight, theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
    onToggle?.();
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-10 w-10 items-center justify-center border border-foreground/25 text-foreground transition-colors hover:border-secondary hover:text-secondary"
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      title={isLight ? "Dark mode" : "Light mode"}
      aria-pressed={isLight}
    >
      {isLight ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </button>
  );
}
