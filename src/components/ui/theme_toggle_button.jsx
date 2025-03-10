import { Moon, Sun } from "lucide-solid";
import { createEffect, createSignal, Match, Show, Switch } from "solid-js";

// ThemeToggleButton component.
const ThemeToggleButton = () => {
  // Gets the "theme" in Local Storage (can be `null`).
  const getThemeFromStorage = localStorage.getItem("theme");
  // If "theme" in Local Storage exists or isn't null, sets it to the stored value, if not sets it to "system".
  const [theme, setTheme] = createSignal(
    getThemeFromStorage ? getThemeFromStorage : "system"
  );
  // Gets the user's device's prefered theme.
  const [prefered, setPrefered] = createSignal(
    window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark"
  );
  // Will toggle the theme between "light" and "dark", and set the "theme" in Local Storage.
  const toggle = () => {
    setTheme(theme() === "light" ? "dark" : "light");
    theme() !== "system" ? localStorage.setItem("theme", theme()) : null;
  };

  // Will change the "data-theme" on the "root" element everytime "theme()" is changed.
  createEffect(() => {
    document.getElementById("root").dataset.theme = theme();
  });

  // Listen out for when the user's device's prefered theme is changed and updates "prefered()".
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      setPrefered(event.matches ? "dark" : "light");
    });

  return (
    // Button to be used to toggle the themes.
    <button
      onClick={toggle}
      className="p-2 hover:bg-secondary rounded-full cursor-pointer"
    >
      {/* A Switch to be used to toggle between a "moon" and "sun" icon. */}
      <Switch>
        <Match
          when={
            theme() === "light" ||
            (theme() === "system" && prefered() === "light")
          }
        >
          <Moon />
        </Match>
        <Match
          when={
            theme() === "dark" ||
            (theme() === "system" && prefered() === "dark")
          }
        >
          <Sun />
        </Match>
      </Switch>
    </button>
  );
};

export default ThemeToggleButton;
