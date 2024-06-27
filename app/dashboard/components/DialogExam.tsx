import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  DialogActions,
  Button,
} from "@mui/material";
import { type } from "os";
import React from "react";
export default function ExamDialogCreate() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: "form",
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries((formData as any).entries());
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
  );
}
