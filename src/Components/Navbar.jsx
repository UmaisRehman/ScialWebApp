import React from 'react'
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Navbar = () => {
  return (
    <>
      <Box>
        <AppBar
          position="static"
          elevation={0}
          sx={{
            width: '100%',
            borderBottomLeftRadius: "16px",
            borderBottomRightRadius: "16px",
            borderBottom: '1px solid rgba(122, 63, 63, 0.18)',
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)", 
            color: "black",
          }}
        >
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              MyApp
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
