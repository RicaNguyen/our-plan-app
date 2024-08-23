"use client";
import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import {
  alpha,
  Box,
  Divider,
  IconButton,
  InputBase,
  styled,
  Typography,
} from "@mui/material";
import GroupAddRoundedIcon from "@mui/icons-material/GroupAddRounded";
import Diversity2RoundedIcon from "@mui/icons-material/Diversity2Rounded";
import SearchIcon from "@mui/icons-material/Search";
import Link from "@mui/material/Link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

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
        <IconButton>
          <GroupAddRoundedIcon />
        </IconButton>
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
