import React, { useState } from "react";
import logo from "../Images/logo.png";
import LanguageIcon from "@mui/icons-material/Language";
import SearchIcon from "@mui/icons-material/Search";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { Container, StepIcon, TableRow, Stack } from "@mui/material";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function Header() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    // <Router>
    <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
      <CssBaseline />
      <AppBar
        position="sticky"
        open={open}
        style={{ background: "unset", boxShadow: "unset" }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            sx={{ flexGrow: 1, marginTop: 2 }}
            component="div"
          >
            <img src={logo} height="60" alt="" loading="lazy" />
          </Typography>
          <SearchIcon
            sx={{
              margin: "1rem",
            }}
          ></SearchIcon>
          <LanguageIcon
            sx={{
              margin: "1rem",
            }}
          ></LanguageIcon>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{
              margin: "1rem",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Main open={open}>
        <DrawerHeader />
      </Main>
      <Drawer
        sx={{
          background: "unset",
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader
          sx={{
            boxShadow: "unset",
          }}
        >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Container className="menu-row p-0" sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              ":hover": {
                bgcolor: "#AF013E99",
                color: "white",
              },
              fontWeight: "bold",
              padding: "20px",
            }}
          >
            TEAM MEMBER
          </Typography>
          <Typography
            sx={{
              ":hover": {
                bgcolor: "#AF013E99",
                color: "white",
              },
              fontWeight: "bold",
              padding: "20px",
            }}
          >
            RESEARCH
          </Typography>
          <Typography
            sx={{
              ":hover": {
                bgcolor: "#AF013E99",
                color: "white",
              },
              fontWeight: "bold",
              padding: "20px",
            }}
          >
            PUBLICATIONS
          </Typography>
          <Typography
            sx={{
              ":hover": {
                bgcolor: "#AF013E99",
                color: "white",
              },
              fontWeight: "bold",
              padding: "20px",
            }}
          >
            TOOLS & SERVICE
          </Typography>
          <Typography
            sx={{
              ":hover": {
                bgcolor: "#AF013E99",
                color: "white",
              },
              fontWeight: "bold",
              padding: "20px",
            }}
          >
            NEWS & ACTIVITY
          </Typography>
          <Typography
            sx={{
              ":hover": {
                bgcolor: "#A02040BF",
                color: "white",
              },
              fontWeight: "bold",
              padding: "20px",
            }}
          >
            CONTACT US
          </Typography>
        </Container>
      </Drawer>
    </Box>
    // </Router>
  );
}
