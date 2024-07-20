"use server";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { SignUpForm } from "./components/sign-up-form";
import { BackgroundForm } from "./components/background-form";
import { SignInSSO } from "../sign-in/components/sign-in-3rd";

export default async function SignUpPage() {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();

  // nếu đã login, thì redirect về dashboard
  if (data?.user) {
    redirect("/dashboard");
  }

  return (
    <Grid container component="main">
      <Grid
        item
        md={6}
        sx={{
          padding: 4,
        }}
      >
        <Typography>Logo</Typography>

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
            Sign Up
          </Typography>
          <Typography component="h1" sx={{ typography: "body2", mt: 1 }}>
            Start your LearnEdge Hub
          </Typography>

          <SignInSSO />
          <SignUpForm />
        </Box>
      </Grid>
      <BackgroundForm />
    </Grid>
  );
}
