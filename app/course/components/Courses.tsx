"use client";
import React from "react";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  Typography,
  Avatar,
  IconButton,
  Badge,
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AlarmIcon from "@mui/icons-material/Alarm";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import TaskOutlinedIcon from "@mui/icons-material/TaskOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

interface Course {
  groupTitle: string;
  timeLearn: string;
  type: string; // "bắt buộc" or "tự chọn"
  subjectName: string;
  teacherName: string;
  teacherAvatar: string; // URL to the teacher's avatar
  attachments: number;
  todos: number;
  alarms: number;
}

const courses: Course[] = [
  {
    groupTitle: "Lý luận chính trị",
    timeLearn: "Monday 10:00 AM ",
    type: "Bắt buộc",
    subjectName: "Mathematics",
    teacherName: "John Doe",
    teacherAvatar: "https://via.placeholder.com/40",
    attachments: 3,
    todos: 5,
    alarms: 2,
  },
  {
    groupTitle: "Toán - KHTN",
    timeLearn: "Friday 1:00 PM ",
    type: "Tự chọn",
    subjectName: "Biology",
    teacherName: "Jane Smith",
    teacherAvatar: "https://via.placeholder.com/40",
    attachments: 1,
    todos: 2,
    alarms: 1,
  },
  // Add more courses as needed
];
function notificationsLabel(count: number) {
  if (count === 0) {
    return "no notifications";
  }
  if (count > 99) {
    return "more than 99 notifications";
  }
  return `${count} notifications`;
}
const CourseCard: React.FC<Course> = ({
  groupTitle,
  timeLearn,
  type,
  subjectName,
  teacherName,
  teacherAvatar,
  attachments,
  todos,
  alarms,
}) => {
  return (
    <Card sx={{ position: "relative", overflow: "visible" }}>
      <Box
        sx={{
          backgroundImage: "url(https://via.placeholder.com/300)", // Replace with your image URL
          backgroundSize: "cover",
          height: 140,
          position: "relative",
        }}
      >
        <Chip
          label={groupTitle}
          color="success"
          sx={{ position: "absolute", top: 8, left: 8 }}
          variant="outlined"
        />
        <Typography
          variant="body2"
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: "white",
            justifyItems: "center",
          }}
        >
          <AlarmIcon fontSize="small" /> {timeLearn}
        </Typography>
      </Box>
      <CardContent>
        <Typography variant="body2">{type}</Typography>
        <Typography variant="h6">{subjectName}</Typography>
        <Box display="flex" alignItems="center" mt={1}>
          <Avatar src={teacherAvatar} alt={teacherName} />
          <Typography variant="body2" sx={{ ml: 1 }}>
            {teacherName}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Chip label="Lý thuyết" />
          <Box display="flex" alignItems="center">
            <IconButton aria-label={notificationsLabel(100)} sx={{ ml: 1 }}>
              <Badge badgeContent={100} color="primary">
                <AttachFileIcon fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton aria-label={notificationsLabel(100)} sx={{ ml: 1 }}>
              <Badge badgeContent={100} color="secondary">
                <TaskOutlinedIcon fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton aria-label={notificationsLabel(100)} sx={{ ml: 1 }}>
              <Badge badgeContent={100} color="success">
                <NotificationsNoneOutlinedIcon fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton size="small" sx={{ ml: 1 }}>
              <MoreHorizIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

const CourseList: React.FC = () => {
  return (
    <Grid container spacing={2}>
      {courses.map((course, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <CourseCard {...course} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CourseList;
