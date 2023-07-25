import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBRipple } from "mdb-react-ui-kit";
import new1 from "../Images/new-1.png";
import EastIcon from "@mui/icons-material/East";
import ReactPaginate from "react-paginate";
// Language
import { LanguageContext } from "../Components/LanguageContext";
import { useMediaQuery } from "react-responsive";

function ImageDesktop({ member }) {
  // Arrow Hovering
  const [iconStyle, setIconStyle] = useState({
    color: "#AE023E",
    marginLeft: 0,
  });

  const textStyle = {
    color: "#AE023E",
  };
  // Col Hovering
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const colStyle = {
    marginLeft: isHovered ? "12px" : "0px",
    transition: "margin-left 0.3s ease-out",
  };

  const { selectedLanguage, handleLanguageSwitch } =
    useContext(LanguageContext);

  return (
    <Link
      to={`/News-Detail/${member.id}`}
      style={{ color: "inherit" }}
      rel="noopener noreferrer"
      onClick={() => {
        window.scrollTo(0, 0);
        window.location.replace(`/News-Detail/${member.id}`);
      }}
    >
      <MDBRow className="xs:pb-3 md:pb-0 xs:px-4 md:px-0">
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
          className="d-flex xs:px-3 md:p-4 xs:pt-4 "
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={colStyle}
        >
          <div className="d-flex flex-column w-100">
            <p
              className="font-bold mb-2 xs:pt-0 md:pt-0 xs:text-lg md:text-xl"
              style={{ fontFamily: "MyFont" }}
            >
              {selectedLanguage === "en"
                ? member.attributes.name_en || "Not found"
                : member.attributes.name_th2 || "ภาษาไทย"}
            </p>
            <p
              className="font-light mt-auto xs:text-sm sm:text-lg"
              style={{ fontFamily: "FontLight" }}
            >
              {selectedLanguage === "en"
                ? member.attributes.name_th || "Not found"
                : member.attributes.name_th2 || "ภาษาไทย"}
            </p>

            <div
              className="d-flex justify-content-between mt-auto mb-1 xs:text-base sm:text-lg xs:pt-0 sm:pt-5"
              id="news-underline"
            >
              <p className="mb-2 xs:text-sm sm:text-lg">
                {member.attributes.date}
              </p>
              <p className="mb-2 xs:text-sm sm:text-lg">Content Master</p>
            </div>

            <div className="d-inline-flex mt-1 text-red">
              <p
                href="#"
                className="pe-4 xs:text-sm sm:text-lg"
                style={textStyle}
              >
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

function ImageMobile({ member }) {
  // Arrow Hovering
  const [iconStyle, setIconStyle] = useState({
    color: "#AE023E",
    marginLeft: 0,
  });

  const textStyle = {
    color: "#AE023E",
  };
  // Col Hovering
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const colStyle = {
    marginLeft: isHovered ? "12px" : "0px",
    transition: "margin-left 0.3s ease-out",
  };

  const { selectedLanguage, handleLanguageSwitch } =
    useContext(LanguageContext);

  return (
    <Link
      to={`/News-Detail/${member.id}`}
      style={{ color: "inherit" }}
      rel="noopener noreferrer"
      onClick={() => {
        window.scrollTo(0, 0);
        window.location.replace(`/News-Detail/${member.id}`);
      }}
    >
      <MDBRow className="xs:pb-3 md:pb-0 xs:px-4 md:px-0 w-80">
        <MDBCol md="4" className="px-1">
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
          className="d-flex xs:px-3 md:p-4 xs:pt-4 "
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={colStyle}
        >
          <div className="d-flex flex-column w-100">
            <p
              className="font-bold mb-2 xs:pt-0 md:pt-0 xs:text-md"
              style={{ fontFamily: "MyFont" }}
            >
              {selectedLanguage === "en"
                ? member.attributes.name_en || "Not found"
                : member.attributes.name_th2 || "ภาษาไทย"}
            </p>
            <p
              className="font-light mt-auto xs:text-sm"
              style={{ fontFamily: "FontLight" }}
            >
              {selectedLanguage === "en"
                ? member.attributes.name_th || "Not found"
                : member.attributes.name_th2 || "ภาษาไทย"}
            </p>

            <div
              className="d-flex justify-content-between mt-auto mb-1 xs:text-base text-sm xs:pt-0 sm:pt-5"
              id="news-underline"
            >
              <p className="mb-2 xs:text-sm ">{member.attributes.date}</p>
              <p className="mb-2 xs:text-sm">Content Master</p>
            </div>

            <div className="d-inline-flex mt-1 text-red">
              <p
                href="#"
                className="pe-4 xs:text-sm sm:text-lg"
                style={textStyle}
              >
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

  // Col Hovering
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter2 = () => {
    setIsHovered(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered(false);
  };

  const colStyle = {
    marginLeft: isHovered ? "12px" : "0px",
    transition: "margin-left 0.3s ease-out",
  };

  const PER_PAGE = 2;
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

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Define the isMobile state using useMediaQuery
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  if (isHomePage) {
    // Don't render pagination on the home page
    return (
      <MDBContainer className="px-0 pt-0 xs:pb-2 md:py-4">
        {isMobile
          ? // Mobile view
            uploadfiles.map((member) => (
              <ImageMobile key={member.id} member={member} />
            ))
          : // Desktop view
            uploadfiles
              .slice(currentPage * PER_PAGE, (currentPage + 1) * PER_PAGE)
              .map((member) => (
                <ImageDesktop key={member.id} member={member} />
              ))}

        <MDBRow
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
          style={colStyle}
        >
          <Link
            to={`/news-and-activities`}
            className="ps-0"
            style={{ color: "inherit" }}
            onClick={() => {
              window.scrollTo(0, 0);
              window.location.replace(`/news-and-activities`);
            }}
          >
            <div className="d-inline-flex text-red ps-0 py-2 md:py-4">
              <h5
                href="#"
                className="pe-4 ps-1 xs:text-base sm:text-lg"
                style={{ color: "#AE023E" }}
              >
                More News & Activity
              </h5>
              <EastIcon style={iconStyle}></EastIcon>
            </div>
          </Link>
        </MDBRow>
      </MDBContainer>
    );
  }

  return (
    <>
      <MDBContainer className="xs:py-0 md:py-4">
        {isMobile
          ? // Mobile view
            uploadfiles.map((member) => (
              <ImageMobile key={member.id} member={member} />
            ))
          : // Desktop view
            uploadfiles
              .slice(currentPage * PER_PAGE, (currentPage + 1) * PER_PAGE)
              .map((member) => (
                <ImageDesktop key={member.id} member={member} />
              ))}
      </MDBContainer>

      <MDBRow onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="d-inline-flex justify-center pt-4 pb-0 text-red">
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
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            breakClassName={"page-item disabled"}
            breakLinkClassName={"page-link"}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
          />
        </div>
      </MDBRow>
    </>
  );
}
