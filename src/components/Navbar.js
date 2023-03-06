import React from "react";
import { AppBar, Toolbar, Typography, CssBaseline } from "@mui/material";
import FireTruckIcon from "@mui/icons-material/FireTruck";

const Navbar = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <FireTruckIcon style={{ marginRight: "20px" }} />
          <Typography variant="h6">
            Construction Machine Management Inc.
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
