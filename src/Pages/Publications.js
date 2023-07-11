import React from "react";
import { useState, useEffect, setIsLoaded } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
/* Routes */
import { Route, Routes } from "react-router";
/* MDBootstrap */
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
/* Images */
import vr2 from "../Images/vr-2.png";
/* Components */
import Publicationimage from "../Components/Publicationimage";
import Publicationreport from "../Components/Publicationreport";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// Lotties
import Lottie from "react-lottie-player";
import Animation from "../Components/Animation.json";
import Container from "@mui/material/Container";
import ArticleIcon from "@mui/icons-material/Article";
import styled from "styled-components";

const Publications = () => {
  const [uploadfiles, setUploadfiles] = useState([]);
  useEffect(() => {
    fetch("https://10.35.29.186/api/members?populate=uploadfiles.fileupload")
      .then((res) => res.json())
      .then((result) => {
        setUploadfiles(result.data);
      });
  }, []); // empty dependency array added

  const [memberCover, setMembercover] = useState([]);
  useEffect(() => {
    fetch(
      "https://10.35.29.186/api/uploadfiles?populate=fileupload&filters[filename][$eq]=publications_cover_image"
    )
      .then((res) => res.json())
      .then((result) => {
        setMembercover(result.data);
      });
  }, []);

  // Scroll Button
  const [showButton, setShowButton] = useState(false);
  const handleScroll = () => {
    const scrollThreshold = 500;
    const currentPosition = window.pageYOffset;

    setShowButton(currentPosition > scrollThreshold);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Navigate
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

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

  // Search Result
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [memberResults, setMemberResults] = useState([]);

  const fetchPublicationResults = async () => {
    try {
      const publicationResponse = await fetch(
        `https://10.35.29.186/api/publications?populate=uploadfiles.fileupload&filters[title_en][$contains]=${encodeURIComponent(
          searchTerm
        )}&filters[title_th][$contains]=${encodeURIComponent(searchTerm)}`
      );
      const publicationData = await publicationResponse.json();
      setSearchResults(publicationData.data);
      console.log("Publication data:", publicationData.data);
    } catch (error) {
      console.error("Error fetching publication results:", error);
    }
  };

  useEffect(() => {
    fetchPublicationResults();
  }, [searchTerm]);

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // Redirect to the search result page
      navigate(`/search/${encodeURIComponent(searchTerm)}`);
    }
  };

  // Lotties
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000); // Set the delay in milliseconds (3 seconds in this example)
    return () => clearTimeout(timer);
  }, []);

  const [iconStyle, setIconStyle] = useState({
    color: "#AE023E",
    marginLeft: 0,
  });

  const StyledArticleIcon = styled(ArticleIcon)`
    color: #cccccc;
  `;

  const isDesktopWidth = window.innerWidth > 1600;
  const isMobileWidth = window.innerWidth < 420;

  return (
    <div className={`App ${isDesktopWidth || isMobileWidth ? "" : "px-0"}`}>
      {!loaded && (
        <div
          className="loading-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "white",
            zIndex: 9999,
          }}
        >
          <Lottie
            loop
            animationData={Animation}
            play
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            speed={1.5} // Adjust the animation speed as needed
            onEvent={() => setLoaded(true)} // Set the loaded state when the animation ends
            eventListeners={[
              {
                eventName: "complete",
                callback: () => setLoaded(true),
              },
            ]}
          />
        </div>
      )}
      <Container
        maxWidth="lg"
        disableGutters={true}
        style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 5px 15px 0px" }}
      >
        <section style={{ borderTop: "1px solid black", marginTop: "1.5rem" }}>
          <MDBContainer className="xs:max-w-full sm:max-w-5xl">
            <MDBRow className="pt-0 xs:pb-0 xs:px-5 sm:pb-5 sm:px-5 md:px-0">
              <MDBCol className="d-flex pt-5 pb-0 pe-5">
                <div className="d-flex flex-column w-100">
                  <p
                    className=" font-black fw-light text-uppercase text-black xs:text-2xl md:text-5xl"
                    style={{ fontFamily: "FontLight" }}
                  >
                    Our
                  </p>
                  <p
                    className="font-black  text-uppercase pt-2 xs:text-3xl md:text-5xl"
                    style={{ fontFamily: "MyFont" }}
                  >
                    Publications
                  </p>

                  <div className="d-flex justify-content-between mt-auto xs:px-0 xs:pb-5 xs:pt-5 sm:pt-5 md:pt-5">
                    <div className="input-group rounded">
                      <input
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={handleSearch}
                        onKeyDown={handleKeyDown}
                        className="form-control"
                        style={{ width: "640px", paddingLeft: "50px" }}
                      />
                      <span
                        className="input-group-text border-0"
                        id="search-addon"
                        style={{
                          position: "absolute",
                          right: "10px",
                          top: "50%",
                          transform: "translateY(-50%)",
                        }}
                      >
                        <i className="fas fa-arrow-right"></i>
                      </span>
                      <span
                        className="input-group-text border-0"
                        id="search-addon"
                        style={{
                          position: "absolute",
                          left: "10px",
                          top: "50%",
                          transform: "translateY(-50%)",
                        }}
                      >
                        <i className="fas fa-search"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </MDBCol>
              <MDBCol
                md="3"
                className="xs:px-0 xs:pb-0 xs:pt-5 sm:pt-5 md:p-0 d-none d-sm-block"
              >
                {memberCover.map((member) => (
                  <img
                    className="image-fluid"
                    style={{
                      width: "-webkit-fill-available",
                      height: "300px",
                    }}
                    id="cluster-img"
                    src={
                      "https://10.35.29.186" +
                      member.attributes.fileupload.data[0]?.attributes.url
                    }
                  />
                ))}
              </MDBCol>
              {/* maxWidth: "-webkit-fill-available",
                      height: "400px",
                      objectFit: "contain",
                      verticalAlign: "top", */}
            </MDBRow>
            <MDBRow className="pb-4">
              <div
              // className="px-0"
              // style={{ borderBottom: "1px solid black" }}
              >
                {searchTerm && (
                  <div>
                    {searchResults.map((result) => (
                      <>
                        <Link
                          to={result.attributes.url}
                          target="_blank"
                          style={{ color: "black" }}
                        >
                          <MDBCol md="12" key={result.id} className="pb-2">
                            <p style={{ display: "inline-block" }}>
                              <StyledArticleIcon
                                style={{ marginRight: "5px" }}
                              />
                              {/* {publication.attributes.description_en} */}
                              {result.attributes.title_en}
                            </p>
                          </MDBCol>
                        </Link>
                      </>
                    ))}
                  </div>
                )}
                {/* {searchTerm && (
                      <div>
                        {searchResults.map((result) => (
                          <li key={result.id}>
                            <a
                              href={result.attributes.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {result.attributes.title_en}
                            </a>
                          </li>
                        ))}
                      </div>
                    )} */}
              </div>
            </MDBRow>
            <MDBRow>
              <MDBCol>
                <p className="ms-3  text-uppercase">Filter By</p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="xs:px-4 sm:px-0">
              <Publicationimage></Publicationimage>
            </MDBRow>

            <button
              className={`scroll-to-top ${showButton ? "show" : ""}`}
              onClick={scrollToTop}
              style={{
                position: "fixed",
                bottom: "40px",
                right: "140px",
                zIndex: "9999",
                border: "none",
                backgroundColor: "transparent",
                opacity: showButton ? 1 : 0,
                transition: "opacity 0.3s ease",
                pointerEvents: showButton ? "auto" : "none",
              }}
            >
              <div
                className="icon-container"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <KeyboardArrowUpIcon style={{ color: "black" }} />
                <span className="up-text" style={{ color: "#AE023E" }}>
                  UP
                </span>
              </div>
            </button>

            {/* <Publicationreport></Publicationreport> */}
          </MDBContainer>
        </section>
      </Container>
    </div>
  );
};

export default Publications;
