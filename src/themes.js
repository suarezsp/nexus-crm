import { createContext, useState, useMemo } from "react";
import { createTheme, lighten } from "@mui/material/styles";
import { typographyClasses } from "@mui/material/Typography";

// colors

export const tokens = (mode) =>({
    ...(mode === "dark"
        ? {
        primary: {
            100: "#cdcdcd",
            200: "#9a9a9c",
            300: "#68686a",
            400: "#353539",
            500: "#030307",
            600: "#020206",
            700: "#020204",
            800: "#010103",
            900: "#010101"
        },
        redAccent: {
          100: "#eed3d3",
          200: "#dda7a7",
          300: "#cc7a7a",
          400: "#bb4e4e",
          500: "#aa2222",
          600: "#881b1b",
          700: "#661414",
          800: "#440e0e",
          900: "#220707"
        },
        greenAccent: {
          100: "#d3eedb",
          200: "#a7ddb7",
          300: "#7acc93",
          400: "#4ebb6f",
          500: "#22aa4b",
          600: "#1b883c",
          700: "#14662d",
          800: "#0e441e",
          900: "#07220f"
        },
        blueAccent: {
          100: "#d3d9ee",
          200: "#a7b2dd",
          300: "#7a8ccc",
          400: "#4e65bb",
          500: "#223faa",
          600: "#1b3288",
          700: "#142666",
          800: "#0e1944",
          900: "#070d22"
        },
        white: {
          100: "#fcfdfd",
          200: "#fafafb",
          300: "#f7f8fa",
          400: "#f5f5f8",
          500: "#f2f3f6",
          600: "#c2c2c5",
          700: "#919294",
          800: "#616162",
          900: "#303131"
        },
        } : { // light
        primary: {
            100: "#010101",
            200: "#010103",
            300: "#020204",
            400: "#020206",
            500: "#030307",
            600: "#353539",
            700: "#68686a",
            800: "#9a9a9c",
            900: "#cdcdcd",
        },
        redAccent: {
            100: "#220707",
            200: "#440e0e",
            300: "#661414",
            400: "#881b1b",
            500: "#aa2222",
            600: "#bb4e4e",
            700: "#cc7a7a",
            800: "#dda7a7",
            900: "#eed3d3",
        },
        greenAccent: {
            100: "#07220f",
            200: "#0e441e",
            300: "#14662d",
            400: "#1b883c",
            500: "#22aa4b",
            600: "#4ebb6f",
            700: "#7acc93",
            800: "#a7ddb7",
            900: "#d3eedb",
        },
        blueAccent: {
            100: "#070d22",
            200: "#0e1944",
            300: "#142666",
            400: "#1b3288",
            500: "#223faa",
            600: "#4e65bb",
            700: "#7a8ccc",
            800: "#a7b2dd",
            900: "#d3d9ee",
        },
        white: {
            100: "#303131",
            200: "#616162",
            300: "#919294",
            400: "#c2c2c5",
            500: "#f2f3f6",
            600: "#f5f5f8",
            700: "#f7f8fa",
            800: "#fafafb",
            900: "#fcfdfd",
        },

        }
    )
})

// mui theme settings

export const themeSettings = (mode) => {
    const colors = tokens(mode);
    return(
        palette = {
            mode: mode,
            ...(mode === 'dark'
                ? {
                    primary: {
                        main: colors.primary[500],
                    },
                    secondary: {
                        main: colors.greenAccent[500],
                    },
                    neutral: {
                        dark: colors.primary[700],
                        main: colors.primary[500],
                        light: colors.primary[100],
                    },
                    bg: {
                        default: colors.primary[500],
                    }
                } : {
                    primary: {
                        main: colors.primary[100],
                    },
                    secondary: {
                        main: colors.greenAccent[500],
                    },
                    neutral: {
                        dark: colors.primary[700],
                        main: colors.primary[500],
                        light: colors.primary[100],
                    },
                    bg: {
                        default: colors.primary[500],
                    },
                }),
        }
    );
};

// context for color mode 

export const ColorModeContext = createContext({
    toggleColorMode: () => {}
});

export const useMode = () => {
    const [mode, useMode] = useState("dark");
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
                setMode((prev) => (
                    prev === "light" 
                    ? "dark"
                    : "light"
                ))
        })
    )
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return [theme, colorMode]
}

