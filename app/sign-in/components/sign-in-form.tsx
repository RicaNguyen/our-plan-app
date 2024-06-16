"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";

export const SignInForm = () => {
  return (
    <Box component="form">
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
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign In
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href="/sign-up" variant="body2">
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
  );
};
