"use client";
import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ScheduleBoard from "./components/ScheduleForm";
import ExamScheduleBoard from "./components/ExamSchedule";
import MiniTab from "./components/MiniTab";
export default function Dashboard() {
  return (
    <Container maxWidth="xl" sx={{ mt: 3, mb: 3 }}>
      <Grid container spacing={17}>
        <Grid item xs={12} md={6}>
          <Grid container direction="column" spacing={7}>
            <Grid item>
              <ScheduleBoard />
            </Grid>
            <Grid item>
              <ExamScheduleBoard />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <MiniTab />
        </Grid>
      </Grid>
    </Container>
  );
}
