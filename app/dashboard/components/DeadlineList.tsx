"use client";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  Chip,
  colors,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import SubjectIcon from "@mui/icons-material/Subject";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";

export default function DeadlineList() {
  const theme = useTheme();
  const [age, setAge] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
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
  const calculateDaysLeft = (deadline: string): number => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const timeDiff = deadlineDate.getTime() - today.getTime();
    const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysLeft >= 0 ? daysLeft : 0;
  };

  return (
    <Box display="flex" flexDirection="column" maxHeight={700} overflow="auto">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <ButtonGroup aria-label="Basic button group">
          <Button>Valid</Button>
          <Button>Submitted </Button>
          <Button>Overdue</Button>
        </ButtonGroup>
        <FormControl sx={{ m: 1, minWidth: 70 }} size="small">
          <InputLabel id="demo-select-small-label">Sort</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={age}
            label="Sort"
            onChange={handleChange}
          >
            <MenuItem value={0}>Newest to Oldest</MenuItem>
            <MenuItem value={1}>Oldest to Newest</MenuItem>
          </Select>
        </FormControl>
        <Button variant="outlined">
          <AddTwoToneIcon /> Add Task
        </Button>
      </Box>

      {data.map((item, index) => (
        <Box
          key={index}
          mb={2}
          sx={{
            border: "1px groove",
            borderRadius: "50px",
            p: "12px",
            justifyItems: "center",
            backgroundColor: " #FBE0E8FF",
          }}
        >
          <Grid container>
            <Grid item xs={8} sm={9} xl={9} md={9} lg={9}>
              <Typography sx={{ fontSize: "18px", fontWeight: 700 }}>
                {item.title}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <SubjectIcon sx={{ color: "#9095A1FF" }} />
                <Typography sx={{ fontSize: "14px", fontWeight: 400 }}>
                  {item.subject}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <LabelOutlinedIcon sx={{ color: "#9095A1FF" }} />
                <Chip label={item.type} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <EventOutlinedIcon sx={{ color: "#9095A1FF" }} />
                <Typography
                  sx={{ fontSize: "14px", fontWeight: 400, color: "#9095A1FF" }}
                >
                  Due Date:
                </Typography>
                <Typography> {item.time}</Typography>
              </Box>
            </Grid>
            <Grid item xs={2} sm={3} xl={1} md={1} lg={1}>
              <Box
                display="flex"
                sx={{
                  width: { xs: "15vw", sm: "10vw", md: "5vw" },
                  height: { xs: "15vw", sm: "10vw", md: "5vw" },
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",

                  flexDirection: "column",
                  justifyContent: "center",
                  color: "white",
                  textAlign: "center",
                  boxSizing: "border-box",
                  border: "1px groove",
                  backgroundColor: "#DEE1E6FF",
                }}
              >
                <Typography variant="h6" color={"red"}>
                  10
                </Typography>
                <Typography variant="body2" color={"red"}>
                  Days Left
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      ))}
    </Box>
  );
}
