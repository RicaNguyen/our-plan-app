import React, { useState } from "react";
import {
  Box,
  TextField,
  IconButton,
  InputAdornment,
  alpha,
  Input,
} from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import SearchIcon from "@mui/icons-material/Search";

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Handle the search action here
    console.log("Searching for:", searchQuery);
  };

  return (
    <Box display="flex" alignItems="center">
      <TextField
        variant="outlined"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{ flexGrow: 1, margin: 0 }}
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => console.log("Microphone clicked")}>
                <MicIcon />
              </IconButton>
              <IconButton
                onClick={handleSearch}
                sx={{
                  backgroundColor: "blue",
                  borderRadius: "2px",
                  width: "40px",
                }}
              >
                <SearchIcon sx={{ color: "white" }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default Search;
