"use client";
import {
  CssBaseline,
  IconButton,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import ModeNightRoundedIcon from "@mui/icons-material/ModeNightRounded";
import { themeDark, themeLight } from "./theme";

const ThemeModeContext = createContext<{
  mode: string;
  toggleThemeMode: (mode: string) => void;
}>({ mode: "light", toggleThemeMode: () => {} });

export const useThemeContext = () => useContext(ThemeModeContext);

export const ThemeModeProvider = ({ children }: { children: ReactNode }) => {
  //Check system preference for dark mode
  const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState("light");

  //Check local storage for theme preference on initial load
  useEffect(() => {
    if (typeof window !== "undefined") {
      setMode(window.localStorage.getItem("theme") || "light");
    }
  }, []);

  //Toggle theme mode function
  const toggleThemeMode = useCallback((newMode: string) => {
    window.localStorage.setItem("theme", newMode);
    setMode(newMode);
  }, []);

  //Create theme based on color mode state
  const theme = useMemo(
    () =>
      mode === "dark" || (mode === "auto" && isDarkMode)
        ? themeDark
        : themeLight,
    [mode, isDarkMode]
  );

  //Value for the ThemeModeContext.Provider
  const themeModeValue = useMemo(
    () => ({ mode, toggleThemeMode }),
    [mode, toggleThemeMode]
  );

  return (
    <ThemeModeContext.Provider value={themeModeValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export const ToggleColorMode = () => {
  const { mode, toggleThemeMode } = useThemeContext();

  return (
    <IconButton
      color="primary"
      onClick={() => toggleThemeMode(mode === "dark" ? "light" : "dark")}
      size="small"
      aria-label="button to toggle theme"
      sx={{
        minWidth: "32px",
        height: "32px",
        p: "4px",
      }}
    >
      {mode === "dark" ? (
        <WbSunnyRoundedIcon fontSize="small" />
      ) : (
        <ModeNightRoundedIcon fontSize="small" />
      )}
    </IconButton>
  );
};
