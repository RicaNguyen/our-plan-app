"use client";
import {
  Box,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import ExamScheduleDataGrid from "./ExamScheduleDataGrid";

export default function ExamScheduleBoard() {
  const theme = useTheme();
  return (
    <Paper
      sx={{
        padding: 2,
        display: "flex",
        flexDirection: "column",
        maxWidth: "100%", // prevent overflowing on smaller screens
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box flex={1}>
          <Typography variant="h6">Exam Schedule</Typography>
        </Box>
      </Box>
      <ExamScheduleDataGrid></ExamScheduleDataGrid>
    </Paper>
  );
}
