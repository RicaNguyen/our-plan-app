"use client";
import { useState } from "react";
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { DashboardNavbar } from "./DashboardNavBar";
import { DashboardSidebar } from "./DashBoardSideBar";
import { SIDE_BAR_WIDTH } from "./constants";
import { Provider } from "react-redux";
import store from "./features/store";

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
    <Provider store={store}>
      <DashboardLayoutRoot>
        <Box
          sx={{
            display: "flex",
            flex: "1 1 auto",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <Container
            maxWidth={false}
            sx={{
              mt: 4,
            }}
          >
            <Typography variant="h5">Welcome Back, Rica! 👋</Typography>

            <Typography variant="h6">
              Let’s unlock knowledge, shape our future together.
            </Typography>
          </Container>

          {children}
        </Box>
      </DashboardLayoutRoot>
      <DashboardNavbar onSidebarOpen={() => setSidebarOpen(true)} />
      <DashboardSidebar
        onCloseSidebar={() => setSidebarOpen(false)}
        openSidebar={isSidebarOpen}
      />
    </Provider>
  );
};

export default DashboardLayout;
