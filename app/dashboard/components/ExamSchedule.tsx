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
  TableRow,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
import React, { ChangeEvent } from "react";

interface IEvent {
  subject: string;
  type: string;
  room: string;
  campus: string;
  day: string;
  time: string;
  timeAllowance: string;
  document: string;
  note: string;
}

const DEFAULT_EMPTY_EVENT: IEvent = {
  subject: "",
  type: "",
  room: "",
  campus: "",
  day: "",
  time: "",
  timeAllowance: "",
  document: "",
  note: "",
};

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

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [newEvent, setNewEvent] = React.useState<IEvent>(DEFAULT_EMPTY_EVENT);
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
  const [events, setEvents] = React.useState<IEvent[]>([]);
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
            <Button onClick={handleClickOpen}>
              <AddBoxOutlinedIcon />
            </Button>
          </ButtonGroup>
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
                    value={newEvent.subject}
                    onChange={handleChangeValue}
                  />
                </Grid>
                <Grid item xs={5}>
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
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
                    id="room"
                    name="room"
                    label="Room"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={newEvent.room}
                    onChange={handleChangeValue}
                  />
                </Grid>
                <Grid item xs={5}>
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Campus
                    </InputLabel>
                    <Select
                      id="campus"
                      name="campus"
                      value={newEvent.campus}
                      onChange={handleChangeValue}
                      label="Campus"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="NVC">Nguyễn Văn Cừ</MenuItem>
                      <MenuItem value="LT">Linh Trung</MenuItem>
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
                    id="time"
                    name="time"
                    label="Time"
                    type="datetime-local"
                    fullWidth
                    variant="standard"
                    value={newEvent.time}
                    onChange={handleChangeValue}
                  />
                </Grid>
                <Grid item xs={5}>
                  <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="timeAllowance"
                    name="timeAllowance"
                    label="TimeAllowance"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={newEvent.timeAllowance}
                    onChange={handleChangeValue}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={7}>
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 230 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Document
                    </InputLabel>
                    <Select
                      id="document"
                      name="document"
                      value={newEvent.document}
                      onChange={handleChangeValue}
                      label="Document"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="No">Not Allowance Document</MenuItem>
                      <MenuItem value="Yes">Allowance Document</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={5}>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="note"
                    name="note"
                    label="Note"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={newEvent.note}
                    onChange={handleChangeValue}
                  />
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
        <div> Hiện chưa có lịch thi </div>
      ) : (
        <Table>
          <TableBody>
            {events.map((event: IEvent, eventIndex: number) => {
              return (
                <TableRow key={eventIndex}>
                  <TableCell>
                    <Typography>{event.subject} </Typography>
                    <Typography>
                      {event.type === "LT" ? "Lý thuyết" : "Thực hành"}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      <Typography> {event.room} </Typography>
                      <Typography>{event.campus}</Typography>
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{event.time} </Typography>
                    <Typography>{event.timeAllowance}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      {event.document === "No"
                        ? "Not Allowance Document"
                        : "Allowance Document"}
                    </Typography>
                    <Typography> {event.note ? event.note : ""}</Typography>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      )}
    </Paper>
  );
}
