"use client";
import { Grid } from "@mui/material";

export const BackgroundForm = () => {
  return (
    <Grid
      item
      md={6}
      sx={{
        height: "100vh",
        backgroundImage: `url(assets/sign-up-bg.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundColor: (t) =>
          t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
};
