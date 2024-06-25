"use client";
import { useState } from "react";
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { DashboardNavbar } from "./DashboardNavBar";
import { DashboardSidebar } from "./DashBoardSideBar";
import { SIDE_BAR_WIDTH } from "./constants";

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
          <Container maxWidth="xl">
            <Typography variant="h5">Welcome Back, Rica! 👋</Typography>

            <Typography variant="h6">
              Let’s unlock knowledge, shape our future together.
            </Typography>
          </Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          ></Box>

          {children}
        </Box>
      </DashboardLayoutRoot>
      <DashboardNavbar onSidebarOpen={() => setSidebarOpen(true)} />
      <DashboardSidebar
        onCloseSidebar={() => setSidebarOpen(false)}
        openSidebar={isSidebarOpen}
      />
    </>
  );
};

export default DashboardLayout;
