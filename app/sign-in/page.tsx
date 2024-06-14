"use client";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignInSide() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

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
            mx: {
              // sm: 0,
              // md: 15,
            },
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
          <Box
            component="form"
            onSubmit={handleSubmit}
            // sx={{ mt: 1, mb: 8 }}
          >
            <Grid container>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Typography
              sx={{
                mt: 3,
                mb: 1,
                display: "flex",
                justifyContent: "center",
              }}
            >
              Or Sign In With
            </Typography>
            <Grid
              display="flex"
              flexDirection={"row"}
              gap={2}
              justifyContent={"center"}
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
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
