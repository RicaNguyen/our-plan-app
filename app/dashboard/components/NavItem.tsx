import { usePathname } from "next/navigation";
import { Box } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import { alpha } from "@mui/material/styles";

export const NavItem = (props: any) => {
  const { href, icon, title, children } = props;
  const pathname = usePathname();
  const active = href ? pathname === href : false;

  return children ? (
    <Box sx={{ px: 2.5, flexGrow: 1 }}>{children}</Box>
  ) : (
    <ListItemButton
      // component={NextLink}
      href={href}
      sx={{
        m: 1,
        minHeight: 44,
        borderRadius: 1,
        typography: "body2",
        color: "text.secondary",
        textTransform: "capitalize",
        fontWeight: 500,
        ...(active && {
          color: "primary.main",
          fontWeight: 600,
          bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
          "&:hover": {
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
          },
        }),
      }}
    >
      <Box component="span" sx={{ width: 24, height: 24, mr: 1 }}>
        {icon}
      </Box>

      <Box component="span">{title} </Box>
    </ListItemButton>
  );
};

export default NavItem;
