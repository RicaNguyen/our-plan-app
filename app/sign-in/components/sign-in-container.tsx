"use client";
import { Box, Grid, Typography } from "@mui/material";
import { SignInForm } from "./sign-in-form";

export const SignInContainer = () => {
  return (
    <Grid
      container
      component="main"
      sx={{
        height: "100vh",
        backgroundImage: `url(assets/sign-in-bg.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundColor: "grey[50]",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Grid item md={6}>
        <Typography sx={{ ml: 4, mt: 4 }}>Logo</Typography>
      </Grid>
      <Grid
        item
        md={6}
        sx={{
          padding: 4,
        }}
      >
        <Box
          sx={{
            my: 8,
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: 2,
          }}
        >
          <Typography component="h1" variant="h5" sx={{ fontWeight: "bold" }}>
            Sign in
          </Typography>
          <Typography component="h1" sx={{ typography: "body2", mt: 1 }}>
            Start your LearnEdge Hub
          </Typography>
          <SignInForm />
        </Box>
      </Grid>
    </Grid>
  );
};
