import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import Container from "@mui/material/Container";
import SearchIcon from "@mui/icons-material/Search";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import logored from "../Images/logo-red.png";

const pages = [
  "TEAM MEMBER",
  "RESEARCH",
  "PUBLICATIONS",
  "TOOLS SERVICE",
  "NEWS ACTIVITIES",
  "CONTACT US",
];
const drawerWidth = 360;

function ResponsiveAppBar() {
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
      style={{
        background: "white",
        boxShadow: "unset",
        borderBottom: "1px solid",
      }}
      position="sticky"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "block", md: "flex" } }}>
            <Typography
              variant="h6"
              noWrap
              sx={{ flexGrow: 1, marginTop: 2, marginBottom: 2 }}
              component="div"
            >
              <Link to="/">
                <img src={logored} height="60" alt="" loading="lazy" />
              </Link>
            </Typography>
            {/* 👇️ Anchor link
              <a href="https://google.com" target="_blank" rel="noreferrer">
                <img
                  src="https://bobbyhadz.com/images/blog/react-prevent-page-refresh-on-form-submit/thumbnail.webp"
                  alt="example"
                />
              </a> */}
          </Box>

          <Box
            sx={{
              display: "flex",
              flexGrow: 0,
              flexDirection: "initial",
              gap: "3rem",
            }}
          >
            <SearchIcon style={{ color: "#AF013E" }}></SearchIcon>
            <LanguageIcon style={{ color: "#AF013E" }}></LanguageIcon>
            <Tooltip title="Open settings">
              <IconButton
                color="#AF013E"
                onClick={handleOpenUserMenu}
                sx={{ p: 0 }}
              >
                <MenuIcon style={{ color: "#AF013E" }} />
              </IconButton>
            </Tooltip>
            <Menu
              // style={{ opacity: 0.7 }}
              sx={{
                mt: "45px",

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
                  style={{ justifyContent: "center", width: "300px" }}
                  key={page}
                  onClick={handleCloseUserMenu}
                  sx={{
                    ":hover": {
                      bgcolor: "#AE023E",
                      opacity: "100%",
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
export default ResponsiveAppBar;
