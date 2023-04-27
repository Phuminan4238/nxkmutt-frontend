import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBRipple } from "mdb-react-ui-kit";
import new1 from "../Images/new-1.png";
import EastIcon from "@mui/icons-material/East";
import ReactPaginate from "react-paginate";

function Post({ member }) {
  const [iconStyle, setIconStyle] = useState({
    color: "#AE023E",
    marginLeft: 0,
  });

  const handleMouseEnter = () => {
    setIconStyle((prevState) => ({
      ...prevState,
      marginLeft: "12px",
    }));
  };

  const handleMouseLeave = () => {
    setIconStyle((prevState) => ({
      ...prevState,
      marginLeft: 0,
    }));
  };

  const textStyle = {
    color: "#AE023E",
  };

  return (
    <Link
      to={`/News Detail/${member.id}`}
      style={{ color: "inherit" }}
      rel="noopener noreferrer"
      target="_blank"
    >
      <MDBRow className="pb-4">
        <MDBCol md="4">
          <MDBRipple
            className="bg-image hover-overlay shadow-1-strong rounded"
            rippleTag="div"
            rippleColor="light"
          >
            {" "}
            <img src={new1} className="w-100" alt="" />
            <a href="#!">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
              ></div>
            </a>
          </MDBRipple>
        </MDBCol>

        <MDBCol
          className="d-flex ps-4 xs:pt-4 sm:pt-2"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="d-flex flex-column w-100">
            <h4 className="fw-bold xs:text-lg sm:text-2xl">
              {member.attributes.name_en}
            </h4>
            <p className="mt-2 xs:text-sm sm:text-lg">
              {member.attributes.name_th}
            </p>
            <div
              className="d-flex justify-content-between mt-auto xs:text-base sm:text-lg pt-2"
              id="news-underline"
            >
              <p> {member.attributes.createdAt}</p>
              <p className="mb-0">Content Master</p>
            </div>

            <div className="d-inline-flex py-4 text-red">
              <p href="#" className="pe-4 xs:text-base" style={textStyle}>
                Read more
              </p>

              <EastIcon style={iconStyle} />
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </Link>
  );
}

export default function News() {
  const [uploadfiles, setUploadfiles] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const [iconStyle, setIconStyle] = useState({ color: "#AE023E" });

  const handleMouseEnter = () => {
    setIconStyle({ ...iconStyle, marginLeft: "12px" });
  };

  const handleMouseLeave = () => {
    setIconStyle({ color: "#AE023E" });
  };

  const PER_PAGE = 6;
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(uploadfiles.length / PER_PAGE);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  useEffect(() => {
    fetch("https://10.35.29.186/api/events?populate=id")
      .then((res) => res.json())
      .then((result) => {
        setUploadfiles(result.data);
      });
  }, []);

  return (
    <>
      <MDBContainer className="py-4">
        {uploadfiles.slice(offset, offset + PER_PAGE).map((member) => (
          <Post key={member.id} member={member} />
        ))}
      </MDBContainer>
      <MDBRow onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="d-inline-flex py-4 text-red">
          <ReactPaginate
            previousLabel={"Prev"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            disabledClassName={"disabled"}
            activeClassName={"active"}
          />
        </div>
      </MDBRow>
    </>
  );
}

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { MDBContainer, MDBRow, MDBCol, MDBRipple } from "mdb-react-ui-kit";
// import new1 from "../Images/new-1.png";
// import EastIcon from "@mui/icons-material/East";

// function Post({ member }) {
//   const [iconStyle, setIconStyle] = useState({
//     color: "#AE023E",
//     marginLeft: 0,
//   });

//   const handleMouseEnter = () => {
//     setIconStyle((prevState) => ({
//       ...prevState,
//       marginLeft: "12px",
//     }));
//   };

//   const handleMouseLeave = () => {
//     setIconStyle((prevState) => ({
//       ...prevState,
//       marginLeft: 0,
//     }));
//   };

//   const textStyle = {
//     color: "#AE023E",
//   };

//   return (
//     <Link
//       to={`/News Detail/${member.id}`}
//       style={{ color: "inherit" }}
//       rel="noopener noreferrer"
//       target="_blank"
//     >
//       <MDBRow className="pb-4">
//         <MDBCol md="4">
//           <MDBRipple
//             className="bg-image hover-overlay shadow-1-strong rounded"
//             rippleTag="div"
//             rippleColor="light"
//           >
//             {" "}
//             <img src={new1} className="w-100" alt="" />
//             <a href="#!">
//               <div
//                 className="mask"
//                 style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
//               ></div>
//             </a>
//           </MDBRipple>
//         </MDBCol>

//         <MDBCol
//           className="d-flex ps-4 xs:pt-4 sm:pt-2"
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}

//         >
//           <div className="d-flex flex-column w-100">
//             <h4 className="fw-bold xs:text-lg sm:text-2xl">
//               {member.attributes.name_en}
//             </h4>
//             <p className="mt-2 xs:text-sm sm:text-lg">
//               {member.attributes.name_th}
//             </p>
//             <div
//               className="d-flex justify-content-between mt-auto xs:text-base sm:text-lg pt-2"
//               id="news-underline"
//             >
//               <p> {member.attributes.createdAt}</p>
//               <p className="mb-0">Content Master</p>
//             </div>

//             <div className="d-inline-flex py-4 text-red">
//               <p href="#" className="pe-4 xs:text-base" style={textStyle}>
//                 Read more
//               </p>

//               <EastIcon style={iconStyle} />
//             </div>
//           </div>
//         </MDBCol>
//       </MDBRow>
//     </Link>
//   );
// }

// export default function News() {
//   const [uploadfiles, setUploadfiles] = useState([]);

//   const [iconStyle, setIconStyle] = useState({ color: "#AE023E" });

//   const handleMouseEnter = () => {
//     setIconStyle({ ...iconStyle, marginLeft: "12px" });
//   };

//   const handleMouseLeave = () => {
//     setIconStyle({ color: "#AE023E" });
//   };

//   useEffect(() => {
//     fetch("https://10.35.29.186/api/events?populate=id")
//       .then((res) => res.json())
//       .then((result) => {
//         setUploadfiles(result.data);
//       });
//   }, []);

//   return (
//     <>
//       <MDBContainer className="py-4">
//         {uploadfiles.map((member) => (
//           <Post key={member.id} member={member} />
//         ))}
//       </MDBContainer>
//       <MDBRow onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//         <Link
//           to={`/News Activities/`}
//           target="_blank"
//           style={{ color: "inherit" }}
//         >
//           <div className="d-inline-flex py-4 text-red">
//             <h5 href="#" className="pe-4 " style={{ color: "#AE023E" }}>
//               More News & Activity
//             </h5>
//             <EastIcon style={iconStyle}></EastIcon>
//           </div>
//         </Link>
//       </MDBRow>
//     </>
//   );
// }

// {pages.map((page, index) => (
//   <MenuItem
//     style={{
//       justifyContent: "center",
//       width: "300px",
//       height: "60px",
//       borderBottom: "1px solid gray",
//     }}
//     key={page}
//     onClick={handleCloseUserMenu}
//     sx={{
//       ":hover": {
//         bgcolor: "#AE023E",
//         opacity: "100%",
//         "& a, & > a": {
//           color: "white",
//         },
//       },
//       fontWeight: "bold",
//       padding: "10px 20px 10px 20px",
//       borderBottom: "1px solid white",
//       color: "inherit", // set default link color to black
//     }}
//   >
//     <Link
//       to={`/${page.replace(/\s+/g, "-").toLowerCase()}`}
//       style={{ color: "inherit" }}
//       sx={{
//         ":hover": {
//           "& a, & > a": {
//             color: "white",
//           },
//         },
//       }}
//     >
//       <a
//         textAlign="center"
//         to={`/${page}`}
//         sx={{
//           fontWeight: "bold",
//           padding: "20px",

//         }}
//       >
//         {decodeURI(page)}
//       </a>
//     </Link>

//   </MenuItem>
// ))}


const pages = [
  "TEAM MEMBER",
  "RESEARCH",
  "PUBLICATIONS",
  "TOOLS SERVICE",
  "NEWS ACTIVITIES",
  "CONTACT US",
  "PARTICIPATE DONATE",
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
                  {isSearchOpen && (
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
                  )}
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
                        to={`/${page.replace(/\s+/g, "-").toLowerCase()}`}
                        style={{ color: "inherit" }}
                        sx={{
                          ":hover": {
                            "& a, & > a": {
                              color: "white",
                            },
                          },
                          // color: "inherit", // set link color to inherit to match parent
                        }}
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
                            
                            }}
                          >
                            {decodeURI(page)}
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
