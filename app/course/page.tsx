"use client";
import * as React from "react";
import Container from "@mui/material/Container";
import { PageProps } from "@/components/type";
import { MySearch } from "@/components/MySearch";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import SortBy from "./components/sortby";
import CourseList from "./components/Courses";
import Search from "./components/Search";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export default function GroupPage(props: PageProps) {
  const [valueTab, setValueTab] = React.useState(0);

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setValueTab(newValue);
  };
  const [sort, setSort] = React.useState("");
  const [display, setDisplay] = React.useState("");
  const handleChangeSelectSort = (event: SelectChangeEvent) => {
    setSort(event.target.value);
  };
  const handleChangeSelectDisplay = (event: SelectChangeEvent) => {
    setDisplay(event.target.value);
  };
  const targetViewGroup = props.searchParams.targetViewGroup;
  return (
    <Container maxWidth={false} sx={{ mt: 3, mb: 3 }}>
      <Box
        display={"flex"}
        flexDirection={"row"}
        sx={{ justifyContent: "space-between" }}
      >
        <Box sx={{ width: "100%" }}>
          <Tabs value={valueTab} onChange={handleChangeTab}>
            <Tab value="0" label="In progress" />
            <Tab value="1" label="Future" />
            <Tab value="2" label="Last" />
            <Tab value="3" label="All" />
          </Tabs>
        </Box>
        <Box display={"flex"} flexDirection={"row"}>
          <Search />
          <FormControl sx={{ m: 1, minWidth: 130 }} size="small">
            <InputLabel id="demo-select-small-label">Sort</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={sort}
              label="Sort"
              onChange={handleChangeSelectSort}
            >
              <MenuItem value={0}>A - Z</MenuItem>
              <MenuItem value={1}>Z - A</MenuItem>
              <MenuItem value={3}>Time A - Z</MenuItem>
              <MenuItem value={4}>Time Z - A</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 130 }} size="small">
            <InputLabel id="demo-select-small-label">Display</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={display}
              label="Display"
              onChange={handleChangeSelectDisplay}
            >
              <MenuItem value={0}>List</MenuItem>
              <MenuItem value={1}>Card</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <CourseList />
    </Container>
  );
}
