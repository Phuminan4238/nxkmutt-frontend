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
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

const pages = [
  "TEAM MEMBER",
  "RESEARCH",
  "PUBLICATIONS",
  "TOOLS SERVICE",
  "NEWS ACTIVITIES",
  "CONTACT US",
  "PARTICIPATE DONATE",
  "MEMBER DETAIL",
  "RESEARCH DETAIL",
  // "UPLOADFILE",
];
const drawerWidth = 360;

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function HomeNav(props) {
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
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          style={{
            background: "unset",
            boxShadow: "unset",
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
                    <img src={logo} height="60" alt="" loading="lazy" />
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
                <SearchIcon style={{ color: "white" }}></SearchIcon>
                <LanguageIcon style={{ color: "white" }}></LanguageIcon>
                {/* <span style={{ color: "red" }}>EN</span> */}
                <Tooltip title="Open settings">
                  <IconButton
                    color="black"
                    onClick={handleOpenUserMenu}
                    sx={{ p: 0 }}
                  >
                    <MenuIcon style={{ color: "white" }} />
                  </IconButton>
                </Tooltip>
                <Menu
                  // style={{ opacity: 0.7 }}
                  sx={{
                    mt: "60px",
                    left: "30px",
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                      width: drawerWidth,
                    },
                    opacity: "0.7",
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
                      style={{
                        justifyContent: "center",
                        width: "300px",
                        height: "60px",
                        borderBottom: "1px solid gray",
                        // opacity: "0.7",
                      }}
                      key={page}
                      onClick={handleCloseUserMenu}
                      sx={{
                        ":hover": {
                          bgcolor: "#AE023E",
                          color: "white",
                        },
                        fontWeight: "bold",
                        padding: "10px 20px 10px 20px",
                        borderBottom: "1px solid white",
                      }}
                    >
                      <Link
                        style={{
                          color: "black",
                        }}
                        // sx={{
                        //   ":hover": {
                        //     color: "white",
                        //   },
                        // }}
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
      </HideOnScroll>
    </React.Fragment>
  );
}
