import ContentBox from "@/components/content";
import { Box, CssBaseline } from "@mui/material";
import AppAppBar from "../../components/appbar";
import Hero from "@/components/hero";

export default function LandingPage() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppAppBar />
      <Hero />
    </Box>
  );
}
