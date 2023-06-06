import React from "react";
import { useState, useEffect, setIsLoaded } from "react";
import { useNavigate } from "react-router-dom";
/* Routes */
import { Route, Routes } from "react-router";
/* MDBootstrap */
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
/* Images */
import vr2 from "../Images/vr-2.png";
/* Components */
import Publicationimage from "../Components/Publicationimage";
import Publicationreport from "../Components/Publicationreport";

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
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos =
      window.pageYOffset || document.documentElement.scrollTop;
    setShowButton(currentScrollPos > prevScrollPos && currentScrollPos > 0);
    setPrevScrollPos(currentScrollPos);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <div className="App">
      <section style={{ borderTop: "1px solid black", marginTop: "1.5rem" }}>
        <MDBContainer className="xs:max-w-full sm:max-w-7xl">
          <MDBRow className="pt-0 pb-5 xs:px-5 sm:px-5 md:px-0">
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
                <div
                  className="d-flex justify-content-between mt-auto xs:px-0 xs:pb-5 xs:pt-5 sm:pt-5 md:p-0"
                  // style={{ width: "80%" }}
                >
                  <div class="input-group rounded">
                    <span class="input-group-text border-0" id="search-addon">
                      <i class="fas fa-search"></i>
                    </span>
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={handleSearch}
                      onKeyDown={handleKeyDown}
                      className="me-4"
                      style={{ width: "640px" }}
                    />
                  </div>
                </div>
                <div className="pt-4">
                  {searchTerm && (
                    <div>
                      {searchResults.map((result) => (
                        <li key={result.id}>
                          {/* Display the relevant data from the search results */}
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
                  )}
                </div>
              </div>
            </MDBCol>
            <MDBCol md="4" className="xs:px-0 xs:pb-0 xs:pt-5 sm:pt-5 md:p-0">
              {memberCover.map((member) => (
                <img
                  className="image-fluid"
                  style={{
                    width: "-webkit-fill-available",
                    height: "300px",
                    // maxWidth: "-webkit-fill-available",
                    // height: "400px",
                    // objectFit: "contain",
                    // verticalAlign: "top",
                  }}
                  id="cluster-img"
                  src={
                    "https://10.35.29.186" +
                    member.attributes.fileupload.data[0]?.attributes.url
                  }
                />
              ))}
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              <p className="ms-5 pt-4 text-uppercase">Filter By</p>
            </MDBCol>
          </MDBRow>
          <Publicationimage></Publicationimage>
          <button
            className={`scroll-to-top ${showButton ? "show" : ""}`}
            onClick={scrollToTop}
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              zIndex: "9999",
              border: "none",
              backgroundColor: "transparent",
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
              <i className="fas fa-arrow-up" style={{ color: "black" }}></i>
              <span className="up-text" style={{ color: "#AE023E" }}>
                UP
              </span>
            </div>
          </button>
          {/* <Publicationreport></Publicationreport> */}
        </MDBContainer>
      </section>
    </div>
  );
};

export default Publications;
