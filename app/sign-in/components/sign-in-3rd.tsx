"use client";
import * as React from "react";
import Grid from "@mui/material/Grid";
import { IconButton } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import { createClient } from "@/utils/supabase/client";

export const SignInSSO = () => {
  const supabase = createClient();
  const handleOnclickGoogle = () => {
    supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `http://localhost:3000/auth/callback`,
      },
    });
  };

  return (
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
        onClick={handleOnclickGoogle}
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
  );
};
