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
      <Grid container spacing={2}>
        <Grid item sm={12} lg={8}>
          <Grid
            container
            spacing={1}
            sx={{
              pr: {
                xl: 17,
              },
            }}
          >
            <Grid item xs={12}>
              <ScheduleBoard />
            </Grid>
            <Grid item xs={12}>
              <ExamScheduleBoard />
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={12} lg={4}>
          <MiniTab />
        </Grid>
      </Grid>
    </Container>
  );
}
