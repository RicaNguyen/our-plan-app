"use server";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { SignInForm } from "./components/sign-in-form";

export default async function SignInSide() {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();

  // nếu đã login, thì redirect về dashboard
  if (data?.user) {
    redirect("/dashboard");
  }

  return (
    <Grid
      container
      component="main"
      sx={{
        height: "100vh",
        backgroundImage: `url(assets/sign-in-bg.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundColor: (t) =>
          t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
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
}
