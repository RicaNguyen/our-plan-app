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
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  variant: "outlined",
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

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
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Grid>
      <Grid item xs={2}>
        <Button
          onClick={handleClickOpen}
        >
          <GroupAddRoundedIcon />
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
          <DialogTitle>Create Group or Comunity</DialogTitle>
          <DialogContent>
            {/* input name and avatar */}
            <Grid container spacing={2} alignItems={"center"} alignContent={'center'} justifyItems={"center"} justifyContent={"center"}>
              <Grid item xs={4} alignItems={"center"} alignContent={'center'} justifyItems={"center"} justifyContent={"center"}>
                <FormControl fullWidth variant="standard">
                  <Button
                    component="label"
                    role={undefined}
                    tabIndex={-1}

                  >
                    {/* <InputBase
                  type="file"
                // onChange={(event) => console.log(event.target.files)}
                /> */}
                    <PhotoCameraIcon />
                  </Button>
                </FormControl>
              </Grid>
              <Grid item xs={8} alignItems={"center"} alignContent={'center'} justifyItems={"center"} justifyContent={"center"}>

                <TextField
                  autoFocus
                  required
                  margin="dense"
                  id="group-name"
                  name="groupname"
                  label="Input your group name"
                  type="text"
                  fullWidth
                  variant="standard"
                />
              </Grid>
            </Grid>
            {/* search your member by email or name */}
            <Search
              sx={{
                width: "180px",
                borderRadius: "999px",
                variant: "outlined",
              }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Input name, email, or phone"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Divider style={{ marginTop: 2 }} />
            {/* list friend with radio checkbox */}
            {/* <Typography>List friend with radio checkbox</Typography> */}
            <FormLabel id="friends">Friends</FormLabel>
            <RadioGroup
              aria-labelledby="friends"
              name="radio-buttons-group-friends"
            >
              {/* right format: radio + avatar + name */}
              <FormControlLabel value="Henry" control={<Radio />} label="Henry" />
              <FormControlLabel value="Marry" control={<Radio />} label="Marry" />
              <FormControlLabel value="Petter" control={<Radio />} label="Petter" />

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
          color={targetViewGroup === "joined-group" ? "blue" : "inherit"}
        >
          <Diversity2RoundedIcon /> Joined Groups & Comunities{" "}
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link
          href="?targetViewGroup=invitations"
          color={targetViewGroup === "invitations" ? "blue" : "inherit"}
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

