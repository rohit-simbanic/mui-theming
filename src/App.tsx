import React from "react";
import "./App.css";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import Main from "./component/Main";
import Grid from "@mui/material/Grid";
import CardComponent from "./component/CardComponent";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

function App() {
  const [mode, setMode] = React.useState<"light" | "dark">("light");

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  let theme = React.useMemo(
    () =>
      createTheme({
        customColor: {
          light: "#ffa726",
          main: "#f57c00",
          dark: "#f73378",
          contrastText: "rgba(0, 0, 0, 0.87)",
        },
        palette: {
          primary: {
            light: "#63b8ff",
            main: "#0989e3",
            dark: "#005db0",
            contrastText: "#000",
          },
          secondary: {
            main: "#4db6ac",
            light: "#82e9de",
            dark: "#00867d",
            contrastText: "#000",
          },
          mode,
        },
        typography: {
          fontFamily: ["Geologica", "sans-serif"].join(","),
          fontSize: 12,
          poster: {
            fontSize: "4rem",
            color: "black",
          },
          // Disable h3 variant
          h3: undefined,
        },
        components: {
          MuiTypography: {
            defaultProps: {
              variantMapping: {
                // assign poster
                poster: "h3",
              },
            },
          },
        },
        // custom spacing
        // spacing: 4,
        spacing: [0, 4, 8, 16, 32, 64],
        //custom breakpoint
        breakpoints: {
          values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
          },
        },
        transitions: {
          duration: {
            shortest: 150,
            shorter: 200,
            short: 250,
            standard: 300,
            complex: 375,
            enteringScreen: 225,
            leavingScreen: 195,
          },
          easing: {
            easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
            easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
            easeIn: "cubic-bezier(0.4, 0, 1, 1)",
            sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
          },
        },
      }),
    [mode]
  );
  // responsive font size

  theme.typography.h3 = {
    fontSize: "1.2rem",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.4rem",
    },
  };

  // 2nd way for responsive font

  // theme = responsiveFontSizes(theme);
  const elementCount = 3;
  const elements = Array.from({ length: elementCount }, (_, index) => (
    <Grid item xs={12} sm={6} sx={{ padding: theme.spacing(0) }}>
      <CardComponent key={index} />
    </Grid>
  ));

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Grid
          container
          spacing={3}
          sx={{
            margin: theme.spacing(0, "auto"),
            width: "100%",
          }}
        >
          <Grid item xs={12}>
            <Main />
          </Grid>
          {elements}
        </Grid>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
