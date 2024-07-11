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
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
import React, { ChangeEvent } from "react";

interface IEvent {
  day: string;
  hour: string;
  subject: string;
  type: string;
}

const DEFAULT_EMPTY_EVENT: IEvent = {
  day: "",
  hour: "",
  subject: "",
  type: "",
};

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function ScheduleBoard() {
  const [events, setEvents] = React.useState<IEvent[]>([]);
  const [newEvent, setNewEvent] = React.useState<IEvent>(DEFAULT_EMPTY_EVENT);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleChangeValue = (
    newValue:
      | SelectChangeEvent<string>
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewEvent({
      ...newEvent,
      [newValue.target.name]: newValue.target.value,
    });
  };

  const handleClose = () => {
    setNewEvent(DEFAULT_EMPTY_EVENT);
    setOpen(false);
  };

  const handleSave = () => {
    setEvents((prevEvents: IEvent[]) => {
      return [newEvent].concat(prevEvents);
    });
    setOpen(false);
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
          </ButtonGroup>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>New subject</DialogTitle>
            <DialogContent>
              <DialogContentText></DialogContentText>
              <Grid container spacing={1}>
                <Grid item xs={7}>
                  <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="subject"
                    name="subject"
                    label="Subject"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={newEvent.subject}
                    onChange={handleChangeValue}
                  />
                </Grid>
                <Grid item xs={5}>
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 60 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Type
                    </InputLabel>
                    <Select
                      id="type"
                      name="type"
                      value={newEvent.type}
                      onChange={handleChangeValue}
                      label="Type"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="LT">Lý thuyết</MenuItem>
                      <MenuItem value="TH">Thực hành</MenuItem>
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
                    value={newEvent.hour}
                    onChange={handleChangeValue}
                  />
                </Grid>
                <Grid item xs={5}>
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 60 }}>
                    <InputLabel>Day</InputLabel>
                    <Select
                      id="day"
                      name="day"
                      value={newEvent.day}
                      onChange={handleChangeValue}
                      label="Day"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>

                      {DAYS.map((day: string) => {
                        return (
                          <MenuItem key={day} value={day}>
                            {day}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleSave}>Submit</Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Box>
      {events.length === 0 ? (
        <div> Hiện không có tiết học nào </div>
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Hour</TableCell>
              {DAYS.map((day) => (
                <TableCell key={day}>{day}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {events.map((event: IEvent, eventIndex: number) => {
              return (
                <TableRow key={eventIndex}>
                  <TableCell>{event.hour}</TableCell>
                  {DAYS.map((day) => (
                    <TableCell key={day}>
                      {event.day === day ? (
                        <Typography variant="body1">
                          {event.subject} -
                          {event.type === "LT" ? " Lý thuyết" : " Thực hành"}
                        </Typography>
                      ) : (
                        <Typography variant="body1">{""}</Typography>
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      )}
    </Paper>
  );
}
