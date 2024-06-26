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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { SIDE_BAR_WIDTH } from "./constants";
import { ReactNode, useState } from "react";
import { grey } from "@/components/theme/theme";

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
  const { onSidebarOpen, ...other } = props;

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
              <Paper sx={{ borderRadius: "999px" }}>
                <Button
                  //
                  variant="outlined"
                  sx={{
                    width: "180px",
                    borderRadius: "999px",
                  }}
                >
                  <AddTwoToneIcon /> Share your docs
                </Button>
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
