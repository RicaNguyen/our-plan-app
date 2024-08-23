"use client";
import * as React from "react";
import Grid from "@mui/material/Grid";
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useSearchParams } from "next/navigation";

export default function TitleGroup() {
  const [sort, setSort] = React.useState("");
  const [filter, setFilter] = React.useState("");
  const handleChangeSort = (event: SelectChangeEvent) => {
    setSort(event.target.value);
  };
  const handleChangeFilter = (event: SelectChangeEvent) => {
    setFilter(event.target.value);
  };
  const searchParams = useSearchParams();
  const targetViewGroup = searchParams.get("targetViewGroup");
  return (
    <Grid container spacing={2}>
      <Grid item xs={5}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            // p: 1,
            m: 1,
            borderRadius: 1,
            fontWeight: "bold",
          }}
        >
          {targetViewGroup === "joined-group"
            ? "Groups & Comunities"
            : "Invitations"}
        </Box>
      </Grid>
      <Grid item xs={7}>
        <Box
          gap={2}
          mr={0}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 1,
            m: 1,
            borderRadius: 1,
          }}
        >
          <FormControl size="small">
            <Select
              value={sort}
              onChange={handleChangeSort}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">Last updated (Oldest - Newest)</MenuItem>
              <MenuItem value="1">Name (A-Z)</MenuItem>
              <MenuItem value="2">Name (Z-A)</MenuItem>
              <MenuItem value="3">Last Updated (Newest - Oldest)</MenuItem>
            </Select>
          </FormControl>
          <FormControl size="small">
            <Select
              value={filter}
              onChange={handleChangeFilter}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="1">Subject</MenuItem>
              <MenuItem value="2">My admin group</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Grid>
    </Grid>
  );
}
