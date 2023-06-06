import React from "react";
import { useState, useEffect, setIsLoaded } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
/* MDBootstrap */
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
/* Images */
import vr2 from "../Images/vr-2.png";
/* Components */
import News from "../Components/News";

const Newsactivities = () => {
  const [uploadfiles, setUploadfiles] = useState([]);
  useEffect(() => {
    axios
      .get("https://10.35.29.186/api/contents?populate=id")
      .then((res) => {
        setUploadfiles(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [memberCover, setMembercover] = useState([]);
  useEffect(() => {
    fetch(
      "https://10.35.29.186/api/uploadfiles?populate=fileupload&filters[filename][$eq]=news_cover_image"
    )
      .then((res) => res.json())
      .then((result) => {
        setMembercover(result.data);
      });
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

  const fetchEventResults = async () => {
    try {
      const eventResponse = await fetch(
        `https://10.35.29.186/api/events?populate=uploadfiles.fileupload&filters[name_en][$contains]=${encodeURIComponent(
          searchTerm
        )}&filters[name_th][$contains]=${encodeURIComponent(searchTerm)}`
      );
      const eventData = await eventResponse.json();
      setSearchResults(eventData.data);
      console.log("Event data:", eventData.data);
    } catch (error) {
      console.error("Error fetching event results:", error);
    }
  };

  useEffect(() => {
    fetchEventResults();
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
                  className="font-black text-uppercase text-black xs:text-2xl md:text-5xl"
                  style={{ fontFamily: "FontMedium" }}
                >
                  News
                </p>
                <p
                  className="font-black text-uppercase pt-2 xs:text-2xl md:text-5xl"
                  style={{ fontFamily: "FontMedium" }}
                >
                  <span
                    style={{
                      fontSize: "4rem",
                      color: "#AE023E",
                      fontWeight: "normal",
                    }}
                  >
                    &
                  </span>{" "}
                  Activities
                </p>
                <div
                  className="d-flex justify-content-between mt-auto xs:px-0 xs:pb-5 xs:pt-5 sm:pt-5 md:p-0"
                  style={{ width: "80%" }}
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
                      // style={inputStyle}
                    />
                  </div>
                </div>
                <div></div>
                {/* <div className="pt-4">
                  {searchResults.length > 0 && (
                    <div>
                      {searchResults.map((result) => (
                        <li key={result.id}>
                          <a
                            href={result.attributes.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {result.attributes.name_en}
                          </a>
                        </li>
                      ))}
                    </div>
                  )}
                </div> */}
                <div className="pt-4">
                  {searchTerm && (
                    <div>
                      {searchResults.map((result) => (
                        <li key={result.id}>
                          <a
                            href={result.attributes.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {result.attributes.name_en}
                          </a>
                        </li>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </MDBCol>
            <MDBCol md="4" className="p-0">
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
          <MDBRow className="pt-0 pb-5 xs:px-5 sm:px-5 md:px-0">
            <News></News>
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
};

export default Newsactivities;
