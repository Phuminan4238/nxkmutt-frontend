import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";

const pages = ["Products", "Pricing", "Blog"];
const drawerWidth = 240;

function ResponsiveAppBarColor() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      style={{ background: "unset", boxShadow: "unset" }}
      position="static"
    >
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          {/* <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}> */}
          {/* <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <img src={logo} height="60" alt="" loading="lazy" />
            </Typography> */}
          {/* </Box> */}

          <Box sx={{ flexGrow: 1, display: { xs: "block", md: "flex" } }}>
            <Typography
              variant="h6"
              noWrap
              sx={{ flexGrow: 1, marginTop: 2 }}
              component="div"
            >
              <img src={logo} height="60" alt="" loading="lazy" />
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 0, flexDirection: "row-reverse" }}>
            <Tooltip title="Open settings">
              <IconButton
                color="inherit"
                onClick={handleOpenUserMenu}
                sx={{ p: 0 }}
              >
                <MenuIcon />
              </IconButton>
            </Tooltip>
            <Menu
              style={{ opacity: 0.7 }}
              sx={{
                mt: "45px",
                background: "unset",
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                  width: drawerWidth,
                },
              }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {pages.map((page) => (
                <MenuItem
                  style={{ justifyContent: "center" }}
                  key={page}
                  onClick={handleCloseUserMenu}
                  sx={{
                    ":hover": {
                      bgcolor: "#AE023E",
                      color: "white",
                    },
                    fontWeight: "bold",
                    padding: "20px",
                  }}
                >
                  <Link
                    style={{ color: "black", ":hover": { color: "white" } }}
                    to={`/${page}`}
                  >
                    <Typography
                      textAlign="center"
                      to={`/${page}`}
                      sx={{
                        fontWeight: "bold",
                        padding: "20px",
                        ":hover": {
                          color: "white",
                        },
                      }}
                    >
                      {page}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBarColor;
