"use client";
import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import {
  alpha,
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  Input,
  InputAdornment,
  InputBase,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import GroupAddRoundedIcon from "@mui/icons-material/GroupAddRounded";
import Diversity2RoundedIcon from "@mui/icons-material/Diversity2Rounded";
import SearchIcon from "@mui/icons-material/Search";
import Link from "@mui/material/Link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { MySearch } from "@/components/MySearch";

interface MenuItem {
  label: string;
  value: string;
}

const menuItems: MenuItem[] = [
  { label: "All", value: "" },
  { label: "Filter 1", value: "filter1" },
  { label: "Filter 2", value: "filter2" },
  { label: "Filter 3", value: "filter3" },
];
export default function SideBarGroup() {
  const searchParams = useSearchParams();
  const targetViewGroup = searchParams.get("targetViewGroup");
  const [open, setOpen] = React.useState(false);
  const [selection, setSelection] = useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setSelection(event.target.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={9}>
        <MySearch />
      </Grid>
      <Grid item xs={2}>
        <IconButton onClick={handleClickOpen}>
          <GroupAddRoundedIcon color="primary" />
        </IconButton>
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
          <DialogTitle>Create Group or Comunity</DialogTitle>
          <DialogContent>
            {/* input name and avatar */}
            <Grid
              container
              direction="row"
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Grid item>
                <FormControl fullWidth variant="standard">
                  <IconButton component="label">
                    <InputBase
                      type="file"
                      style={{
                        opacity: 0,
                      }}
                      sx={{
                        width: 0,
                        height: 0,
                      }}
                    />
                    <PhotoCameraIcon />
                  </IconButton>
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl fullWidth variant="standard">
                  <TextField
                    autoFocus
                    required
                    id="group-name"
                    name="groupname"
                    type="text"
                    fullWidth
                    variant="standard"
                    placeholder="Enter your group name"
                  />
                </FormControl>
              </Grid>
            </Grid>
            {/* search your member by email or name */}
            <MySearch />
            <Divider style={{ marginTop: 2 }} />
            {/* list friend with radio checkbox */}
            {/* <Typography>List friend with radio checkbox</Typography> */}
            <FormLabel id="friends">Friends</FormLabel>
            <RadioGroup
              aria-labelledby="friends"
              name="radio-buttons-group-friends"
            >
              {/* right format: radio + avatar + name */}
              <FormControlLabel
                value="Henry"
                control={<Radio />}
                label="Henry"
              />
              <FormControlLabel
                value="Marry"
                control={<Radio />}
                label="Marry"
              />
              <FormControlLabel
                value="Petter"
                control={<Radio />}
                label="Petter"
              />
            </RadioGroup>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Create group</Button>
          </DialogActions>
        </Dialog>
      </Grid>
      <Grid item xs={12}>
        <Link
          href="?targetViewGroup=joined-group"
          color={
            targetViewGroup === "joined-group" ? "primary.main" : "inherit"
          }
        >
          <Diversity2RoundedIcon /> Joined Groups & Comunities{" "}
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link
          href="?targetViewGroup=invitations"
          color={targetViewGroup === "invitations" ? "primary.main" : "inherit"}
        >
          <GroupAddRoundedIcon /> Group & Comunity invitations
        </Link>
      </Grid>
    </Grid>
  );
}
function setOpen(arg0: boolean) {
  throw new Error("Function not implemented.");
}
