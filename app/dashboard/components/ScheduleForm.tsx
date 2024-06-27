import {
  Box,
  Button,
  ButtonGroup,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Tooltip,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
import React from "react";
import { TimePicker } from "@mui/x-date-pickers";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
interface Event {
  title: string;
  description: string;
}

interface Events {
  [day: string]: { [hour: string]: Event };
}
const ProSpan = styled("span")({
  display: "inline-block",
});
function Label({
  componentName,
  valueType,
  isProOnly,
}: {
  componentName: string;
  valueType: string;
  isProOnly?: boolean;
}) {
  const content = (
    <span>
      <>{componentName}</>
    </span>
  );
  return content;
}
export default function ScheduleBoard() {
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
  const [events, setEvents] = React.useState<Events>({});

  const [newEvent, setNewEvent] = React.useState({
    day: "",
    hour: "",
    title: "",
    description: "",
  });

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [type, setType] = React.useState("");
  const [hour, setHour] = React.useState("");
  const [day, setDay] = React.useState("");

  const handleEditEvent = (day: keyof Events, hour: string) => {
    // TO DO: implement edit event logic
    // For now, just console.log the day and hour
    console.log(`Editing event on ${day} at ${hour}`);
  };
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
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box flex={1}>
          <Typography variant="h6"> Schedule</Typography>
        </Box>
        <Box flex={1} textAlign="right">
          <ButtonGroup size="small" aria-label="Small button group">
            <Button>
              <EditCalendarOutlinedIcon />
            </Button>
            <Button onClick={handleClickOpen}>
              <AddBoxOutlinedIcon />
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              PaperProps={{
                component: "form",
                onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                  event.preventDefault();
                  const formData = new FormData(event.currentTarget);
                  const formJson = Object.fromEntries(
                    (formData as any).entries()
                  );
                  const email = formJson.email;
                  console.log(email);
                  handleClose();
                },
              }}
            >
              <DialogTitle>New subject</DialogTitle>
              <DialogContent>
                <DialogContentText></DialogContentText>
                <Grid container spacing={1}>
                  <Grid item xs={7}>
                    <TextField
                      autoFocus
                      required
                      margin="dense"
                      id="name"
                      name="subject"
                      label="Subject"
                      type="text"
                      fullWidth
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 60 }}>
                      <InputLabel id="demo-simple-select-standard-label">
                        Type
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={type}
                        // onChange={handleChange}
                        label="Type"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem>Lý thuyết</MenuItem>
                        <MenuItem>Thực hành</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container spacing={1}>
                  <Grid item xs={7}>
                    <TextField
                      autoFocus
                      required
                      margin="dense"
                      id="hour"
                      name="hour"
                      label="Hour"
                      type="time"
                      fullWidth
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 60 }}>
                      <InputLabel id="demo-simple-select-standard-label">
                        Day
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={day}
                        // onChange={handleChange}
                        label="Day"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem>Mon</MenuItem>
                        <MenuItem>Tu</MenuItem>
                        <MenuItem>We</MenuItem>
                        <MenuItem>Th</MenuItem>
                        <MenuItem>Fr</MenuItem>
                        <MenuItem>Sa</MenuItem>
                        <MenuItem>Su</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit">Submit</Button>
              </DialogActions>
            </Dialog>
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
      </Table>
    </Paper>
  );
}
