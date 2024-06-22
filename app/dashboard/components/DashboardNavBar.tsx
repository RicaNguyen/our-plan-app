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
  const downMDcreen = useMediaQuery(theme.breakpoints.down("sm"));
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
            minHeight: 64,
            left: 0,
            px: 2,
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

          <Grid
            container
            spacing={1}
            p={1}
            direction={downMDcreen ? "column-reverse" : "row"}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={4}
              sx={(theme: Theme) => ({
                [theme.breakpoints.down("lg")]: {
                  display: "none",
                },
              })}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography variant="h5">Welcome Back, Rica!</Typography>
                {upLGScreen && (
                  <Typography variant="h6">
                    Let’s unlock knowledge, shape our future together.
                  </Typography>
                )}
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sm={5}
              md={7}
              lg={4}
              display={"flex"}
              alignItems={"center"}
            >
              <Paper
                sx={{
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "999px",
                  width: "100%",
                }}
              >
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search for all the inspiration you need..."
                />
              </Paper>
            </Grid>

            <Grid
              item
              xs={12}
              sm={7}
              md={5}
              lg={4}
              display={"flex"}
              alignItems={"center"}
              sx={{
                justifyContent: {
                  xs: "space-between",
                  sm: "flex-end",
                },
              }}
            >
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
              <Button
                color="primary"
                variant="outlined"
                sx={(theme) => ({
                  borderRadius: "999px",
                  bgcolor:
                    theme.palette.mode === "light"
                      ? "rgba(255, 255, 255, 0.4)"
                      : "rgba(0, 0, 0, 0.4)",
                  boxShadow:
                    theme.palette.mode === "light"
                      ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                      : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
                })}
              >
                <AddTwoToneIcon /> Share your docs
              </Button>
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
            </Grid>
          </Grid>
        </Toolbar>
      </DashboardNavbarRoot>
    </>
  );
};

export default DashboardNavbar;
