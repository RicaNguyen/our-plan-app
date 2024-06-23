"use client";
import styled from "@emotion/styled";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Theme,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { SIDE_BAR_WIDTH } from "@/app/backupdb/components/constants";

const DashboardNavbarRoot = styled(AppBar)(({ theme }: { theme: any }) => ({
  boxShadow: theme.shadows[3],
}));

export const DashboardNavbar = (props: any) => {
  const theme = useTheme();
  const upLGScreen = useMediaQuery(theme.breakpoints.up(1600));
  const upMDcreen = useMediaQuery(theme.breakpoints.up("md"));
  const downSMcreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { onSidebarOpen, ...other } = props;

  return (
    <>
      <DashboardNavbarRoot
        sx={{
          left: {
            lg: SIDE_BAR_WIDTH,
          },
          width: {
            lg: `calc(100% - ${SIDE_BAR_WIDTH}px)`,
          },
        }}
        {...other}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: 70,
            left: 0,
            px: 2,
            color: "#FFFFFF",
          }}
        >
          <IconButton
            color="inherit"
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: "inline-flex",
                lg: "none",
              },
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>

          <Box
            display={"flex"}
            flexDirection={"row"}
            width={"100%"}
            alignItems={"center"}
            gap={1}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {upMDcreen && (
                <Typography variant="h5" noWrap>
                  Welcome Back, Rica!
                </Typography>
              )}

              {upLGScreen && (
                <Typography variant="h6" noWrap>
                  Let’s unlock knowledge, shape our future together.
                </Typography>
              )}
            </Box>

            <Paper
              sx={{
                display: downSMcreen ? "none" : "flex",
                alignItems: "center",
                borderRadius: "999px",
                pr: 1,
                width: "100%",
              }}
            >
              <IconButton type="button">
                <SearchIcon />
              </IconButton>
              <InputBase
                sx={{ flex: 1 }}
                placeholder="Search for all the inspiration you need..."
              />
            </Paper>

            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={downSMcreen ? "space-between" : "flex-end"}
              sx={{
                width: downSMcreen ? "100%" : "auto",
              }}
            >
              {downSMcreen && (
                <IconButton color="inherit">
                  <Badge badgeContent={0} color="secondary">
                    <SearchIcon />
                  </Badge>
                </IconButton>
              )}

              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <NotificationsOutlinedIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <Badge badgeContent={0} color="secondary">
                  <SendOutlinedIcon />
                </Badge>
              </IconButton>
              <Paper sx={{ borderRadius: "999px" }}>
                <Button
                  color="inherit"
                  variant="outlined"
                  sx={{
                    width: "180px",
                    borderRadius: "999px",
                  }}
                >
                  <AddTwoToneIcon /> Share your docs
                </Button>
              </Paper>
              <Avatar
                sx={{
                  height: 40,
                  width: 40,
                  ml: 1,
                }}
                src={""}
              >
                U
              </Avatar>
            </Box>
          </Box>
        </Toolbar>
      </DashboardNavbarRoot>
    </>
  );
};

export default DashboardNavbar;
