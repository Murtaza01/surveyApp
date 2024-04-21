import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [theme, setTheme] = useState(
    localStorage.theme ? localStorage.theme : "light"
  );

  const prevTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const body = window.document.body;

    body.classList.remove(prevTheme);
    body.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme, prevTheme];
}
