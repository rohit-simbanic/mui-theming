import React from "react";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "../App";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const Main = () => {
  let theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
          borderRadius: 1,
          p: 3,
        }}
      >
        <Typography
          variant="h1"
          component="h2"
          color={theme.customColor.dark}
          sx={{ padding: theme.spacing(2) }}
        >
          h1. Heading
        </Typography>
        <br />
        {theme.palette.mode} mode
        <IconButton
          sx={{ ml: 1 }}
          onClick={colorMode.toggleColorMode}
          color="inherit"
        >
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </Box>
      {/* <Typography variant="h3" component="h2" color={theme.customColor.dark}>
        Responsive Text
      </Typography> */}
      <Typography variant="poster" sx={{ margin: theme.spacing(1, "auto") }}>
        poster
      </Typography>
      ;
    </>
  );
};

export default Main;
