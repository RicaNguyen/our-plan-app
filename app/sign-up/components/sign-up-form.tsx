"use client";
import { Box, Grid, TextField, Button, Link } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { signup } from "../actions";

export const SignUpForm = () => {
  const searchParams = useSearchParams();
  const errorMessage = searchParams.get("error_message");
  const errorCode = searchParams.get("error_code");
  const isPasswordError = errorCode?.includes("password");
  const isEmailError = errorCode?.includes("email");

  return (
    <Box component="form">
      <Grid container>
        <Grid item xs={12}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="fullname"
            label="Full Name"
            name="fullname"
            autoComplete="Full Name"
            autoFocus
          />
        </Grid>
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
            error={Boolean(errorMessage)}
            helperText={isEmailError ? errorMessage : null}
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
            error={isPasswordError}
            helperText={isPasswordError ? errorMessage : null}
          />
        </Grid>
      </Grid>

      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        formAction={signup}
      >
        Sign Up
      </Button>
      <Grid
        container
        display="flex"
        flexDirection={"row"}
        gap={1}
        justifyContent={"center"}
        sx={{ mt: 2, mb: 4 }}
      >
        Been here before?
        <Link href="/sign-in" variant="body2">
          Login
        </Link>
      </Grid>
    </Box>
  );
};
