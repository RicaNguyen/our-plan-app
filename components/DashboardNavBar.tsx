"use client";
import styled from "@emotion/styled";
import {
  AppBar,
  Avatar,
  Badge,
  Slide,
  Input,
  Box,
  Button,
  IconButton,
  InputAdornment,
  Paper,
  Theme,
  Toolbar,
  ClickAwayListener,
  alpha,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  SelectChangeEvent,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { SIDE_BAR_WIDTH } from "./constants";
import { ReactNode, useState } from "react";
import { grey } from "@/components/Theme/theme";
import React from "react";

import { useForm, useWatch } from "react-hook-form";
import { FormInputText } from "./form-component/FormInputText";
import { FormInputDropdown } from "./form-component/FormInputDropdown";
import { FormInputRadio } from "./form-component/FormInputRadio";
import { Provider, useDispatch } from "react-redux";
import { setFormData } from "./features/formSlice";
import { FormInputFile } from "./form-component/FormInputFile";
interface IFormInput {
  subject: string; // Add this field
  link?: string; // Optional if you're handling links
  file?: File | null; // Optional for file handling
  radioValue: string;
  dropdownValue: string;
}
const defaultValues: IFormInput = {
  subject: "", // Required
  link: "", // Optional
  file: null, // Optional
  radioValue: "",
  dropdownValue: "",
};
const HEADER_MOBILE = 64;
const HEADER_DESKTOP = 92;

const DashboardNavbarRoot = styled(AppBar)(({ theme }: { theme: Theme }) => ({
  boxShadow: "none",
  backgroundColor: "background.default",
}));

const SearchBar = (): ReactNode => {
  const [openSearchBar, setOpenSearchBar] = useState(false);

  const handleOpenSearchBar = () => {
    setOpenSearchBar(!openSearchBar);
  };

  const handleCloseSearchBar = () => {
    setOpenSearchBar(false);
  };

  return (
    <ClickAwayListener onClickAway={handleCloseSearchBar}>
      <div>
        {!openSearchBar && (
          <IconButton onClick={handleOpenSearchBar}>
            <SearchIcon />
          </IconButton>
        )}

        <Slide direction="down" in={openSearchBar} mountOnEnter unmountOnExit>
          <Box
            sx={(theme) => ({
              backdropFilter: `blur(${6}px)`,
              WebkitBackdropFilter: `blur(${6}px)`,
              backgroundColor: alpha(theme.palette.background.default, 0.8),
              top: 0,
              left: 0,
              zIndex: 99,
              width: "100%",
              position: "absolute",
              display: "flex",
              alignItems: "center",
              height: HEADER_MOBILE,
              padding: theme.spacing(0, 3),
              boxShadow: `0 8px 16px 0 ${grey[500]}`,
              [theme.breakpoints.up("md")]: {
                height: HEADER_DESKTOP,
                padding: theme.spacing(0, 5),
              },
            })}
          >
            <Input
              autoFocus
              fullWidth
              disableUnderline
              placeholder="Search…"
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
              sx={{ mr: 1, fontWeight: "fontWeightBold" }}
            />
            <Button variant="contained" onClick={handleCloseSearchBar}>
              Search
            </Button>
          </Box>
        </Slide>
      </div>
    </ClickAwayListener>
  );
};

export const DashboardNavbar = (props: any) => {
  const dispatch = useDispatch();
  const { handleSubmit, reset, control } = useForm<IFormInput>({
    defaultValues: defaultValues,
  });
  const dropdownValue = useWatch({
    control,
    name: "dropdownValue",
  });
  const onSubmit = (data: IFormInput) => {
    // Dispatch the form data to the Redux store
    dispatch(setFormData(data));
    console.log(data); // You can keep this for debugging
    handleClose(); // Close the dialog after submission
  };
  const { onSidebarOpen, ...other } = props;
  const [open, setOpen] = React.useState(false);
  const [selection, setSelection] = useState("");

  const handleSelectionChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelection(event.target.value);
  };
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
    <>
      <DashboardNavbarRoot
        sx={{
          left: {
            lg: SIDE_BAR_WIDTH,
          },
          width: {
            lg: `calc(100% - ${SIDE_BAR_WIDTH}px)`,
          },
        }}
        {...other}
      >
        <Toolbar
          disableGutters
          sx={(theme) => ({
            minHeight: 70,
            left: 0,
            px: 2,
            backgroundColor: "background.default",
            boxShadow:
              theme.palette.mode === "light"
                ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
          })}
        >
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: "inline-flex",
                lg: "none",
              },
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>

          <Box
            display={"flex"}
            flexDirection={"row"}
            width={"100%"}
            alignItems={"center"}
            gap={1}
          >
            <SearchBar />
            <Box sx={{ flexGrow: 1 }} />
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-end"}
            >
              <IconButton>
                <Badge badgeContent={4} color="secondary">
                  <NotificationsOutlinedIcon />
                </Badge>
              </IconButton>
              <IconButton>
                <Badge badgeContent={0} color="secondary">
                  <SendOutlinedIcon />
                </Badge>
              </IconButton>
              {/* Share doc form */}
              <Paper sx={{ borderRadius: "999px" }}>
                <Button
                  variant="outlined"
                  sx={{
                    width: "180px",
                    borderRadius: "999px",
                  }}
                  onClick={handleClickOpen}
                >
                  <AddTwoToneIcon /> Share your docs
                </Button>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    component: "form",
                    onSubmit: handleSubmit(onSubmit),
                  }}
                >
                  <DialogTitle>Share your docs</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Thank you, We truly value your contribution to the
                      community!
                    </DialogContentText>
                    <FormInputText
                      name="subject"
                      control={control}
                      label="Subject"
                    />
                    <FormInputDropdown
                      name="dropdownValue"
                      control={control}
                      label="Your docs type?"
                    />
                    {dropdownValue === "link" ? (
                      <FormInputText
                        name="link"
                        control={control}
                        label="Link"
                      />
                    ) : dropdownValue === "file" ? (
                      <FormInputFile control={control} name="file" label="" />
                    ) : null}
                    <FormInputRadio
                      name={"radioValue"}
                      control={control}
                      label={"Type of Learning Materials"}
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={() => reset()} variant={"outlined"}>
                      Cancel
                    </Button>
                    <Button
                      onClick={handleSubmit(onSubmit)}
                      variant={"contained"}
                    >
                      Submit
                    </Button>
                  </DialogActions>
                </Dialog>
              </Paper>
              <Avatar
                sx={{
                  height: 40,
                  width: 40,
                  ml: 1,
                }}
                src={""}
              >
                U
              </Avatar>
            </Box>
          </Box>
        </Toolbar>
      </DashboardNavbarRoot>
    </>
  );
};

export default DashboardNavbar;
