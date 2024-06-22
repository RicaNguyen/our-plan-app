import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Group" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AutoStoriesOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Courses" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <FolderOpenOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Docs" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <NewspaperOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="News" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <PersonOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <SettingsOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Setting" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LogoutOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItemButton>
  </React.Fragment>
);
export const endListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <HelpOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Help" />
    </ListItemButton>
  </React.Fragment>
);
