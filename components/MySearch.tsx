"use client";
import { Box, alpha, InputAdornment, Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const MySearch = () => {
  return (
    <Box
      sx={(theme) => ({
        padding: 0.5,
        borderRadius: theme.shape.borderRadius,
        border: "1px groove",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        "&:hover": {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        width: "100%",
        [theme.breakpoints.up("sm")]: {
          marginLeft: theme.spacing(1),
          width: "auto",
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
        sx={(theme) => ({
          fontWeight: "fontWeightBold",
        })}
      />
    </Box>
  );
};
