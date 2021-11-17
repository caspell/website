import React from "react";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/styles";

const GlobalTheme = createTheme({
    palette: {
        primary: {
            light: "#444",
            main: "#333",
            dark: "#222",
            text: "#111",
        },
        grayScale: {
            100: "#1",
            200: "#2",
            300: "#3",
            400: "#4",
            500: "#5",
            600: "#6",
            700: "#7",
            800: "#8",
        }
    }
});

const GlobalThemeProvider = ({ children }) => (
  <ThemeProvider theme={GlobalTheme}>{children}</ThemeProvider>
);

export default GlobalThemeProvider