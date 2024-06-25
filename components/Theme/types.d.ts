import type { CssVarsTheme } from "@mui/material/styles";
import type { Theme as BaseTheme } from "@mui/material/styles/createTheme";

declare module "@mui/material/styles/createPalette" {
  interface ColorRange {
    0: string;
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  }

  interface PaletteColor extends ColorRange {}
}

declare module "@mui/material/styles/createTypography" {
  interface CustomTypographyOptions {
    // fontWeightSemiBold: React.CSSProperties["fontWeight"];
    // fontSecondaryFamily: React.CSSProperties["fontFamily"];
  }

  interface TypographyOptions extends CustomTypographyOptions {}
}

export type Theme = Omit<BaseTheme, "palette"> & CssVarsTheme;

export type ColorScheme = "dark" | "light";
