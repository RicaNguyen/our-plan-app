"use client";
import * as React from "react";
import Groups3Icon from "@mui/icons-material/Groups3";
import { Box, Link, Paper, Typography } from "@mui/material";

export default function Invitation() {
  return (
    <Box display="flex" flexDirection="column" width="100%" margin="auto">
      <Box sx={{ mt: "16px" }}>
        <Typography
          style={{
            textAlign: "center",
            color: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <Groups3Icon />
        </Typography>
      </Box>
      <Box>
        <Typography
          style={{ textAlign: "center", color: "rgba(0, 0, 0, 0.5)" }}
        >
          There is no invitation to the group.
        </Typography>
      </Box>
      <Box>
        <Typography
          style={{ textAlign: "center", color: "rgba(0, 0, 0, 0.5)" }}
        >
          When will I receive the invitation?
          <Link href="#" underline="hover">
            {" Learn more."}
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
