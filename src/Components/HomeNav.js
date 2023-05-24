import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
/* */
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
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

const pages = [
  "TEAM MEMBER",
  "RESEARCH",
  "PUBLICATIONS",
  "TOOLS & SERVICE",
  "NEWS & ACTIVITIES",
  "CONTACT US",
  "PARTICIPATE & DONATE",
];

const drawerWidth = 360;

function HideOnScroll(props) {
  const { children, window } = props;
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

  /* Search box */
  const [searchText, setSearchText] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  /* Switch Navbar */
  const [navbarType, setNavbarType] = useState("navbar1");
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavbarType("navbar2");
      } else {
        setNavbarType("navbar1");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderNavbar1 = () => {
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
                  <SearchIcon
                    style={{ color: "white" }}
                    onClick={handleSearchClick}
                  />
                  {/* {isSearchOpen && (
                    <div className="flex">
                      <input
                        type="search"
                        class="form-control rounded"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="search-addon"
                        value={searchText}
                        onChange={handleInputChange}
                        id="form1"
                      />

                      <span
                        class="input-group-text border-0"
                        id="search-addon"
                        onClick={() => console.log(searchText)}
                      ></span>
                      <i class="fas fa-search"></i>
                    </div>
                  )} */}
                  {/* <LanguageIcon style={{ color: "white" }}></LanguageIcon> */}
                  <span>
                    {" "}
                    <LanguageIcon
                      style={{ color: "white", marginRight: "0.5rem" }}
                    ></LanguageIcon>
                    EN
                  </span>
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
                    {pages.map((page, index) => (
                      <Link
                        to={
                          page === "TOOLS & SERVICE"
                            ? "/tools-and-service"
                            : page === "NEWS & ACTIVITIES"
                            ? "/news-and-activities"
                            : page === "PARTICIPATE & DONATE"
                            ? "/participate-and-donate"
                            : `/${page.replace(/\s+/g, "-").toLowerCase()}`
                        }
                        style={{ color: "inherit" }}
                        sx={{
                          ":hover": {
                            "& a, & > a": {
                              color: "white",
                            },
                          },
                        }}
                        key={page}
                      >
                        <MenuItem
                          style={{
                            justifyContent: "center",
                            width: "300px",
                            height: "60px",
                            borderBottom: "1px solid gray",
                          }}
                          onClick={handleCloseUserMenu}
                          sx={{
                            ":hover": {
                              bgcolor: "#AE023E",
                              opacity: "100%",
                              "& a, & > a": {
                                color: "white",
                              },
                            },
                            fontWeight: "bold",
                            padding: "10px 20px 10px 20px",
                            borderBottom: "1px solid white",
                            color: "inherit",
                          }}
                        >
                          <a
                            textAlign="center"
                            to={
                              page === "TOOLS & SERVICE"
                                ? "/tools-and-service"
                                : `/${page.replace(/\s+/g, "-").toLowerCase()}`
                            }
                            sx={{
                              fontWeight: "bold",
                              padding: "20px",
                            }}
                          >
                            {page}
                          </a>
                        </MenuItem>
                      </Link>
                    ))}
                  </Menu>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </HideOnScroll>
      </React.Fragment>
    );
  };

  const renderNavbar2 = () => {
    return (
      <React.Fragment>
        <CssBaseline />
        <HideOnScroll {...props}>
          <AppBar
            style={{
              background: "white",
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
                  <SearchIcon style={{ color: "#AE023E" }}></SearchIcon>
                  <span>
                    {" "}
                    <LanguageIcon
                      style={{ color: "#AE023E", marginRight: "0.5rem" }}
                    ></LanguageIcon>
                    <span style={{ color: "#AE023E" }}>EN</span>
                  </span>
                  <Tooltip title="Open settings">
                    <IconButton
                      color="black"
                      onClick={handleOpenUserMenu}
                      sx={{ p: 0 }}
                    >
                      <MenuIcon style={{ color: "#AE023E" }} />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    style={{ opacity: 0.7 }}
                    sx={{
                      mt: "60px",
                      left: "30px",
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
                      <Link
                        to={`/${page.replace(/\s+/g, "-").toLowerCase()}`}
                        style={{ color: "inherit" }}
                      >
                        <MenuItem
                          style={{
                            justifyContent: "center",
                            width: "300px",
                            height: "60px",
                            borderBottom: "1px solid gray",
                          }}
                          key={page}
                          onClick={handleCloseUserMenu}
                          sx={{
                            ":hover": {
                              bgcolor: "#AE023E",
                              opacity: "100%",
                              "& a, & > a": {
                                color: "white",
                              },
                            },
                            fontWeight: "bold",
                            padding: "10px 20px 10px 20px",
                            borderBottom: "1px solid white",
                            color: "inherit", // set default link color to black
                          }}
                        >
                          <a
                            textAlign="center"
                            to={`/${page}`}
                            sx={{
                              fontWeight: "bold",
                              padding: "20px",

                              ":hover": {
                                "& a, & > a": {
                                  color: "white",
                                },
                              },
                              // color: "inherit", // set link color to inherit to match parent
                            }}
                          >
                            {page}
                          </a>
                        </MenuItem>
                      </Link>
                    ))}
                  </Menu>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </HideOnScroll>
      </React.Fragment>
    );
  };

  return (
    <>
      {navbarType === "navbar1" && renderNavbar1()}
      {navbarType === "navbar2" && renderNavbar2()}
    </>
  );
}
