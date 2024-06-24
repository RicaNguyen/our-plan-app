"use client";
import { useState } from "react";
import { AppBar, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import DashboardSidebar from "./components/DashBoardSideBar";
import DashboardNavbar from "./components/DashboardNavBar";
import { SIDE_BAR_WIDTH } from "./components/constants";

const DashboardLayoutRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  maxWidth: "100%",
  paddingTop: 64,
  [theme.breakpoints.up("lg")]: {
    paddingLeft: SIDE_BAR_WIDTH,
  },
}));

export const DashboardLayout = (props: any) => {
  const { children } = props;
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <DashboardLayoutRoot>
        <Box
          sx={{
            display: "flex",
            flex: "1 1 auto",
            flexDirection: "column",
            width: "100%",
          }}
        >
          {children}
        </Box>
      </DashboardLayoutRoot>
      <DashboardNavbar onSidebarOpen={() => setSidebarOpen(true)} />
      <DashboardSidebar
        onClose={() => setSidebarOpen(false)}
        open={isSidebarOpen}
      />
    </>
  );
};

export default DashboardLayout;
