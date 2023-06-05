import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { red, green, blue } from "@mui/material/colors";
import { Theme } from "@mui/material/styles";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

let theme: Theme;

export default function CardComponent() {
  const Root = styled("div")(({ theme }) => ({
    padding: theme.spacing(1),
    transition: theme.transitions.create(["background-color"], {
      duration: theme.transitions.duration.standard,
      easing: theme.transitions.easing.easeInOut,
    }),
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.down("md")]: {
      backgroundColor: red[500],
      color: "white",
    },
    [theme.breakpoints.up("md")]: {
      backgroundColor: blue[500],
      color: "black",
    },
    [theme.breakpoints.up("lg")]: {
      backgroundColor: green[500],
      color: "black",
    },
  }));

  return (
    <Root>
      <Card
        sx={{
          minWidth: "100%",
          background: "transparent",
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Root>
  );
}
