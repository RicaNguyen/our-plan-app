import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  DialogContentText,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  SelectChangeEvent,
} from "@mui/material";

export const ShareDocsDialog = () => {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState("");
  const [url, setUrl] = useState("");
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };
  const handleChange = (event: SelectChangeEvent) => {
    setSelection(event.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSelectionChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelection(event.target.value);
  };

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setFile(event.target.files?.[0]);
  // };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
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
      <DialogTitle>Share your docs</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Thank you, We truly value your contribution to the community!
        </DialogContentText>
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
        />
        <FormControl fullWidth variant="standard">
          <InputLabel id="selection-label">Your docs type?</InputLabel>
          <Select
            labelId="selection-label"
            id="selection"
            value={selection}
            onChange={handleChange}
          >
            <MenuItem value="link">Link</MenuItem>
            <MenuItem value="file">File</MenuItem>
          </Select>
        </FormControl>
        {selection === "link" ? (
          <TextField id="url" label="URL" fullWidth variant="standard" />
        ) : (
          <input type="file" id="file" />
        )}
        <FormControl>
          <FormLabel id="aboutDoc"></FormLabel>
          <RadioGroup
            row
            aria-labelledby="aboutDoc"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="exercises"
              control={<Radio />}
              label="Exercise"
            />
            <FormControlLabel
              value="slides"
              control={<Radio />}
              label="Slide"
            />
            <FormControlLabel value="tests" control={<Radio />} label="Tests" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit">Submit</Button>
      </DialogActions>
    </Dialog>
  );
};
