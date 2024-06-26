import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
export default function ExamScheduleBoard() {
  const theme = useTheme();
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const hours = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
  ];
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
        <Box flex={1} textAlign="right">
          <ButtonGroup size="small" aria-label="Small button group">
            <Button>
              <EditCalendarOutlinedIcon />
            </Button>
            <Button>
              <AddBoxOutlinedIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Hour</TableCell>
            {days.map((day) => (
              <TableCell key={day}>{day}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {hours.map((hour) => (
            <TableRow key={hour}>
              <TableCell>{hour}</TableCell>
              {days.map((day) => (
                <TableCell key={day}>
                  {/* You can add your schedule data here */}
                  {/* For example: */}
                  {/* <Typography variant="body1">Meeting with John</Typography> */}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
