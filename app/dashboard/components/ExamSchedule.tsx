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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
import React from "react";
import { Label } from "@mui/icons-material";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { type } from "os";
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
                      id="room"
                      name="room"
                      label="Room"
                      type="text"
                      fullWidth
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 60 }}>
                      <InputLabel id="demo-simple-select-standard-label">
                        Campus
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
                        <MenuItem>Nguyễn Văn Cừ</MenuItem>
                        <MenuItem>Linh Trung</MenuItem>
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
                      type="text"
                      fullWidth
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      autoFocus
                      required
                      margin="dense"
                      id="time-allowance"
                      name="time allowance"
                      label="Time Allowance"
                      type="text"
                      fullWidth
                      variant="standard"
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={1}>
                  <Grid item xs={7}>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 60 }}>
                      <InputLabel id="demo-simple-select-standard-label">
                        Document
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
                        <MenuItem>Allowance Document</MenuItem>
                        <MenuItem>Not Allowance Document</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      autoFocus
                      required
                      margin="dense"
                      id="noted"
                      name="noted"
                      label="Note"
                      type="text"
                      fullWidth
                      variant="standard"
                    />
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
    </Paper>
  );
}
