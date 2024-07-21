"use client";
import { Box, Button, InputBase, Paper, Typography } from "@mui/material";
import React, { ChangeEvent } from "react";

import ScheduleDataGrid from "./ScheduleDataGrid";

export default function ScheduleBoard() {
  return (
    <Paper
      sx={{
        padding: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h4" align="center">
        July 2024
      </Typography>

      <ScheduleDataGrid />
    </Paper>
  );
}
