import { Box, CssBaseline } from "@mui/material";
import AppAppBar from "../components/landingappbar";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <Box sx={{ display: "flex" }}>
      <AppAppBar />
      <Hero />
    </Box>
  );
}
