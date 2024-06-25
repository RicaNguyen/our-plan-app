"use client";
import { useEffect } from "react";
import NextLink from "next/link";
import PropTypes from "prop-types";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import CollectionsBookmarkOutlinedIcon from "@mui/icons-material/CollectionsBookmarkOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import { Box, Divider, Drawer, useMediaQuery } from "@mui/material";
import NextImage from "next/image";
import { NavItem } from "../app/dashboard/components/NavItem";
import { SIDE_BAR_WIDTH } from "./constants";
import { ToggleColorMode } from "@/components/theme/ColorModeContext";

const items = [
  {
    href: "/dashboard",
    icon: <DashboardOutlinedIcon fontSize="small" />,
    title: "Dashboard",
  },
  {
    href: "/group",
    icon: <GroupOutlinedIcon fontSize="small" />,
    title: "Group",
  },
  {
    href: "/course",
    icon: <CollectionsBookmarkOutlinedIcon fontSize="small" />,
    title: "Course",
  },
  {
    href: "/docs",
    icon: <FolderOutlinedIcon fontSize="small" />,
    title: "Docs",
  },
  {
    href: "/news",
    icon: <NewspaperOutlinedIcon fontSize="small" />,
    title: "News",
  },
];

const SETTINGS_ITEMS = [
  {
    href: "/profile",
    icon: <Person2OutlinedIcon fontSize="small" />,
    title: "Profile",
  },
  {
    href: "/settings",
    icon: <SettingsOutlinedIcon fontSize="small" />,
    title: "Settings",
  },
  {
    href: "/logout",
    icon: <ExitToAppOutlinedIcon fontSize="small" />,
    title: "Logout",
  },
];

export const DashboardSidebar = (props: any) => {
  const { open, onClose } = props;
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });

  useEffect(() => {
    if (open) {
      onClose?.();
    }
  }, [open, onClose]);

  const content = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box sx={{ p: 2, height: 64 }}>
        <NextLink href="/" passHref>
          <NextImage
            alt="logo"
            src="/static/images/logo.png"
            height={44}
            width={44}
          ></NextImage>
        </NextLink>
      </Box>
      <Divider
        sx={{
          mb: 3,
        }}
      />
      <Box sx={{ flexGrow: 1 }}>
        {items.map((item) => (
          <NavItem
            key={item.title}
            icon={item.icon}
            href={item.href}
            title={item.title}
          />
        ))}
      </Box>
      <Divider
        sx={{
          my: 3,
        }}
      />
      <Box sx={{ flexGrow: 1 }}>
        {SETTINGS_ITEMS.map((item) => (
          <NavItem
            key={item.title}
            icon={item.icon}
            href={item.href}
            title={item.title}
          />
        ))}
      </Box>
      <Divider
        sx={{
          my: 3,
        }}
      />
      <Box>
        <NavItem>
          <ToggleColorMode />
        </NavItem>
        <NavItem
          key={"Help"}
          icon={<HelpOutlinedIcon />}
          href={""}
          title={"Help"}
        />
      </Box>
    </Box>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "background.default",
            width: SIDE_BAR_WIDTH,
            px: 2,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }
  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "background.default",
          width: SIDE_BAR_WIDTH,
          px: 2,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};

export default DashboardSidebar;
