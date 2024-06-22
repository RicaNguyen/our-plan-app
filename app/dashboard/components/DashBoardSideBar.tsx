"use client";
import { useEffect } from "react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import GroupIcon from "@mui/icons-material/Group";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { Box, Divider, Drawer, useMediaQuery } from "@mui/material";
import NextImage from "next/image";
import { NavItem } from "./NavItem";
import { SIDE_BAR_WIDTH } from "@/app/backupdb/components/constants";

const items = [
  {
    href: "/admin",
    icon: <StackedBarChartIcon fontSize="small" />,
    title: "Dashboard",
  },
  {
    href: "/admin/orders",
    icon: <LibraryBooksIcon fontSize="small" />,
    title: "Orders",
  },
  {
    href: "/admin/customers",
    icon: <GroupIcon fontSize="small" />,
    title: "Customers",
  },
  {
    href: "/admin/products",
    icon: <ShoppingBasketIcon fontSize="small" />,
    title: "Products",
  },
  {
    href: "/admin/products-items",
    icon: <ShoppingBagIcon fontSize="small" />,
    title: "Products Items",
  },
  {
    href: "/admin/account",
    icon: <PersonIcon fontSize="small" />,
    title: "Account",
  },

  {
    href: "/",
    icon: <LogoutIcon fontSize="small" />,
    title: "SignOut",
  },
];

export const DashboardSidebar = (props: any) => {
  const { open, onClose } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });

  useEffect(
    () => {
      // if (!router.isReady) {
      //   return;
      // }
      if (open) {
        onClose?.();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // [router.asPath]
  );

  const content = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box sx={{ p: 3 }}>
        <NextLink href="/" passHref>
          {/* <Logo
                sx={{
                  height: 42,
                  width: 42,
                }}
              /> */}
          <NextImage
            alt="logo"
            src="/static/images/logo.png"
            height={60}
            width={80}
          ></NextImage>
        </NextLink>
      </Box>
      <Divider
        sx={{
          borderColor: "#2D3748",
          my: 3,
        }}
      />
      <Box sx={{ flexGrow: 1 }}>
        {items.map((item) => (
          <NavItem
            key={item.title}
            icon={item.icon}
            href={item.href}
            title={item.title}
          />
        ))}
      </Box>
    </Box>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "neutral.900",
            color: "#FFFFFF",
            width: SIDE_BAR_WIDTH,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.900",
          color: "#FFFFFF",
          width: SIDE_BAR_WIDTH,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};

export default DashboardSidebar;
