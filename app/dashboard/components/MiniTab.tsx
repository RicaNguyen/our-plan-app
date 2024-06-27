import { Box, Card, Tab, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import TabContext from "@mui/lab/TabContext";
import { TabList, TabPanel } from "@mui/lab";

export default function MiniTab() {
  const theme = useTheme();
  const lgScreenUp = useMediaQuery(theme.breakpoints.up(1600));
  const mdScreenUp = useMediaQuery(theme.breakpoints.up("md"));
  const smScreenDown = useMediaQuery(theme.breakpoints.down("sm"));

  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Card
      sx={{
        mt: 1,
        display: "flex",
        flexDirection: "column",
        maxHeight: 600,
        maxWidth: "100%",
      }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="API minitab">
            <Tab label="Deadline" value="1" />
            <Tab label="Upload" value="2" />
            <Tab label="News" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">Deadline</TabPanel>
        <TabPanel value="2">Upload</TabPanel>
        <TabPanel value="3">News</TabPanel>
      </TabContext>
    </Card>
  );
}
