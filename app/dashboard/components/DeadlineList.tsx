"use client";
import { Box, Card, Typography, useTheme } from "@mui/material";
import React from "react";

export default function DeadlineList() {
  const theme = useTheme();
  const data = [
    {
      subject: "Mathematics",
      time: "10:00 AM",
      type: "group",
      title: "Algebra Assignment",
      deadline: "2023-10-15",
      state: "in progress",
    },
    {
      subject: "History",
      time: "1:00 PM",
      type: "personal",
      title: "Research Paper",
      deadline: "2023-10-20",
      state: "complete",
    },
    {
      subject: "Biology",
      time: "2:30 PM",
      type: "group",
      title: "Group Project Presentation",
      deadline: "2023-10-25",
      state: "in progress",
    },
    {
      subject: "Computer Science",
      time: "3:00 PM",
      type: "personal",
      title: "Coding Challenge",
      deadline: "2023-10-10",
      state: "expire",
    },
    {
      subject: "Literature",
      time: "11:00 AM",
      type: "group",
      title: "Book Review",
      deadline: "2023-10-30",
      state: "in progress",
    },
  ];
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      maxHeight={400}
      overflow="auto"
    >
      {data.map((item, index) => (
        <Box key={index} display="flex" justifyContent="space-between" mb={2}>
          <Box width="48%">
            <Box
              bgcolor="orange"
              textAlign="center"
              sx={{ borderRadius: "4px" }}
            >
              <Typography variant="h6" color={"white"}>
                {item.subject}
              </Typography>
            </Box>
            <Typography>Time: {item.time}</Typography>
            <Typography>Type: {item.type}</Typography>
            <Typography>Title: {item.title}</Typography>
            <Typography>Deadline: {item.deadline}</Typography>
            <Typography>State: {item.state}</Typography>
          </Box>
          {index + 1 < data.length && (
            <Box width="48%">
              <Box
                bgcolor="orange"
                textAlign="center"
                sx={{ borderRadius: "4px" }}
              >
                <Typography variant="h6" color={"white"}>
                  {data[index + 1].subject}
                </Typography>
              </Box>
              <Typography>Time: {data[index + 1].time}</Typography>
              <Typography>Type: {data[index + 1].type}</Typography>
              <Typography>Title: {data[index + 1].title}</Typography>
              <Typography>Deadline: {data[index + 1].deadline}</Typography>
              <Typography>State: {data[index + 1].state}</Typography>
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
}
