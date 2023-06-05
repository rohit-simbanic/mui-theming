import React from "react";
declare module "@mui/material/styles" {
  interface Theme {
    customColor: {
      light: React.CSSProperties["color"];
      main: React.CSSProperties["color"];
      dark: React.CSSProperties["color"];
      contrastText: React.CSSProperties["color"];
    };
  }
  interface ThemeOptions {
    customColor: {
      light: React.CSSProperties["color"];
      main: React.CSSProperties["color"];
      dark: React.CSSProperties["color"];
      contrastText: React.CSSProperties["color"];
    };
  }
  interface TypographyVariants {
    poster: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    poster?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    poster: true;
    h3: false;
  }
}
