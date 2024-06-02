import MenuAppBar from "@/components/appbar";
import ContentBox from "@/components/content";
import SideBar from "@/components/sidebar";
import { Box, CssBaseline } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <MenuAppBar />
      <SideBar />
      <ContentBox />
    </Box>
  );
}
