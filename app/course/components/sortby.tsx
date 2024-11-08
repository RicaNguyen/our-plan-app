"use client";
import * as React from "react";
import Container from "@mui/material/Container";
import { PageProps } from "@/components/type";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

export default function SortBy() {
  const [timesort, setTimeSort] = React.useState("");
  const [namesort, setNameSort] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setTimeSort(event.target.value);
    setNameSort(event.target.value);
  };
  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="timesort">Sorted By Time</InputLabel>
        <Select
          labelId="timesort"
          id="timesort"
          value={timesort}
          label="TimeSort"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={""}>All</MenuItem>
          <MenuItem value={""}>In Progress</MenuItem>
          <MenuItem value={""}>Past</MenuItem>
          <MenuItem value={""}>Future</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="namesort">Sorted By Name</InputLabel>
        <Select
          labelId="namesort"
          id="namesort"
          value={namesort}
          label="NameSort"
          onChange={handleChange}
        >
          <MenuItem value={""}>Sort by Course Name</MenuItem>
          <MenuItem value={""}>Sort by Last Accessed</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
