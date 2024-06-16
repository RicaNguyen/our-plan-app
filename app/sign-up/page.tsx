"use server";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { SignUpForm } from "./components/sign-up-form";

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

          <Grid
            display="flex"
            flexDirection={"row"}
            gap={2}
            justifyContent={"center"}
            sx={{ mt: 4, mb: 4 }}
          >
            <IconButton
              sx={{
                padding: "10px 40px",
                background: "#FEF1F1FF",
                borderRadius: "18px",
              }}
            >
              <GoogleIcon
                sx={{
                  color: "#C71610FF",
                }}
              />
            </IconButton>
            <IconButton
              sx={{
                padding: "10px 40px",
                background: "#F3F6FBFF",
                borderRadius: "18px",
              }}
            >
              <FacebookIcon
                sx={{
                  color: "#335CA6FF",
                }}
              />
            </IconButton>
            <IconButton
              sx={{
                padding: "10px 40px",
                background: "#F3F4F6FF",
                borderRadius: "18px",
              }}
            >
              <AppleIcon
                sx={{
                  color: "#565D6DFF",
                }}
              />
            </IconButton>
          </Grid>

          <SignUpForm />
        </Box>
      </Grid>
      <Grid
        item
        md={6}
        sx={{
          height: "100vh",
          backgroundImage: `url(assets/sign-up-bg.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </Grid>
  );
}
