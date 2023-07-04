import React from "react";
/* Routes */
import { Link } from "react-router-dom";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useState, useEffect, setIsLoaded } from "react";
import new1 from "../Images/new-1.png";
import EastIcon from "@mui/icons-material/East";
import ReactPaginate from "react-paginate";
import { useLocation } from "react-router-dom";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ImageMask = ({ imageUrl, maskText, imageHeight }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const containerStyle = {
    position: "relative",
    width: "100%",
    height: imageHeight,
    borderRadius: "8px",
    overflow: "hidden",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const maskStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "85%", // Adjust the width of the mask
    height: "85%", // Adjust the height of the mask
    borderRadius: "150px",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    opacity: isHovering ? "80%" : 0,
    transition: "opacity 0.3s ease-in-out",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10%", // Add padding or margin value here
  };

  const textStyle = {
    color: "#fff",
    fontSize: "1.5rem",
    fontWeight: 500,
    textAlign: "center",
    opacity: isHovering ? 1 : 0,
  };

  return (
    <div
      style={containerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={imageUrl} alt="" style={imageStyle} />
      <div style={maskStyle}>
        <p style={textStyle}>{maskText}</p>
      </div>
    </div>
  );
};

function ImageDesktop({ members }) {
  const [uploadfiles, setUploadfiles] = useState([]);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const cardStyle = {
    width: isMobile ? "-webkit-fit-content" : "100%",
    boxShadow: "unset",
    borderRadius: "8px",
    width: "340px",
    height: "444px",
  };

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://10.35.29.186/api/tools?populate=uploadfiles.fileupload"
        );
        if (isMounted) {
          setUploadfiles(response.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  const [iconStyle, setIconStyle] = useState({
    color: "#AE023E",
    marginLeft: 0,
  });

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

  // Current index
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0); // Reset current index when upload files change
  }, [uploadfiles]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const displayedItems = uploadfiles.slice(currentIndex, currentIndex + 3);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      <div className="d-flex justify-content-between pt-0 px-0" id="tools-flex">
        <MDBContainer className="px-0 xs:max-w-full sm:max-w-7xl">
          <Carousel
            responsive={responsive}
            arrows={true}
            renderArrowPrev={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  className="carousel-arrow carousel-prev"
                  onClick={onClickHandler}
                  aria-label={label}
                >
                  <MdKeyboardArrowLeft />
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  className="carousel-arrow carousel-next"
                  onClick={onClickHandler}
                  aria-label={label}
                >
                  <MdKeyboardArrowRight />
                </button>
              )
            }
          >
            {displayedItems.map((member) => (
              <MDBCol md="4" key={member.id} className="pb-2 px-0 col-sm-8">
                <Link
                  to={`/Tools-Detail/${member.id}`}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    window.location.replace(`/Tools-Detail/${member.id}`);
                  }}
                >
                  <MDBCard style={cardStyle}>
                    <ImageMask
                      style={{
                        width: "-webkit-fill-available",
                        objectFit: "cover",
                        height: "420px !important",
                        borderRadius: "8px",
                      }}
                      imageUrl={
                        "https://10.35.29.186" +
                        member.attributes.uploadfiles.data[0]?.attributes
                          .fileupload.data[0]?.attributes.url
                      }
                      maskText={member.attributes.name_en + " "}
                      imageHeight="420px" // Adjust the height here
                    />
                  </MDBCard>
                </Link>
              </MDBCol>
            ))}
          </Carousel>
          <div className="d-flex justify-content-center">
            <button
              className={`carousel-arrow carousel-prev ${
                window.matchMedia("(max-width: 768px)").matches
                  ? "d-none"
                  : "d-flex"
              }`}
              onClick={handlePrev}
              disabled={currentIndex === 0}
            >
              <MdKeyboardArrowLeft />
            </button>
            <button
              className={`carousel-arrow carousel-next ${
                window.matchMedia("(max-width: 768px)").matches
                  ? "d-none"
                  : "d-flex"
              }`}
              onClick={handleNext}
              disabled={currentIndex >= uploadfiles.length - 3}
            >
              <MdKeyboardArrowRight />
            </button>
          </div>
          {isHomePage && (
            <MDBRow
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
              style={colStyle}
            >
              <Link
                to={`/news-and-activities`}
                style={{ color: "inherit" }}
                onClick={() => {
                  window.scrollTo(0, 0);
                  window.location.href = `/Tools-and-Service?`;
                }}
              >
                <div className="d-inline-flex text-red py-2 md:py-4">
                  <h5 href="#" className="pe-4" style={{ color: "#AE023E" }}>
                    Find out more
                  </h5>
                  <EastIcon style={iconStyle}></EastIcon>
                </div>
              </Link>
            </MDBRow>
          )}
        </MDBContainer>
      </div>
    </>
  );
}

function ImageMobile({ members }) {
  const [uploadfiles, setUploadfiles] = useState([]);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const cardStyle = {
    width: isMobile ? "-webkit-fit-content" : "80%",
    boxShadow: "unset",
    borderRadius: "8px",
    width: "340px",
    height: "80%",
    padding: "0rem 1.5rem",
  };

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://10.35.29.186/api/tools?populate=uploadfiles.fileupload"
        );
        if (isMounted) {
          setUploadfiles(response.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  const [iconStyle, setIconStyle] = useState({
    color: "#AE023E",
    marginLeft: 0,
  });

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

  // Current index
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0); // Reset current index when upload files change
  }, [uploadfiles]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const displayedItems = uploadfiles.slice(currentIndex, currentIndex + 3);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      <div className="d-flex justify-content-between pt-0 px-0" id="tools-flex">
        <MDBContainer className="px-0 xs:max-w-full sm:max-w-7xl">
          <Carousel
            responsive={responsive}
            arrows={true}
            renderArrowPrev={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  className="carousel-arrow carousel-prev"
                  onClick={onClickHandler}
                  aria-label={label}
                >
                  <MdKeyboardArrowLeft />
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  className="carousel-arrow carousel-next"
                  onClick={onClickHandler}
                  aria-label={label}
                >
                  <MdKeyboardArrowRight />
                </button>
              )
            }
          >
            {displayedItems.map((member) => (
              <MDBCol md="4" key={member.id} className="pb-2 px-0 col-sm-8">
                <Link
                  to={`/Tools-Detail/${member.id}`}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    window.location.replace(`/Tools-Detail/${member.id}`);
                  }}
                >
                  <MDBCard style={cardStyle}>
                    <ImageMask
                      style={{
                        width: "-webkit-fill-available",
                        objectFit: "cover",
                        height: "80%",
                        borderRadius: "8px",
                      }}
                      imageUrl={
                        "https://10.35.29.186" +
                        member.attributes.uploadfiles.data[0]?.attributes
                          .fileupload.data[0]?.attributes.url
                      }
                      maskText={member.attributes.name_en + " "}
                      imageHeight="80%" // Adjust the height here
                    />
                  </MDBCard>
                </Link>
              </MDBCol>
            ))}
          </Carousel>
          <div className="d-flex justify-content-center">
            <button
              className={`carousel-arrow carousel-prev ${
                window.matchMedia("(max-width: 768px)").matches
                  ? "d-none"
                  : "d-flex"
              }`}
              onClick={handlePrev}
              disabled={currentIndex === 0}
            >
              <MdKeyboardArrowLeft />
            </button>
            <button
              className={`carousel-arrow carousel-next ${
                window.matchMedia("(max-width: 768px)").matches
                  ? "d-none"
                  : "d-flex"
              }`}
              onClick={handleNext}
              disabled={currentIndex >= uploadfiles.length - 3}
            >
              <MdKeyboardArrowRight />
            </button>
          </div>
          {isHomePage && (
            <MDBRow
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
              style={colStyle}
            >
              <Link
                to={`/news-and-activities`}
                style={{ color: "inherit" }}
                onClick={() => {
                  window.scrollTo(0, 0);
                  window.location.href = `/Tools-and-Service?`;
                }}
              >
                <div className="d-inline-flex text-red pt-4 pb-2 md:py-4">
                  <h5
                    href="#"
                    className="pe-4  xs:text-base sm:text-lg"
                    style={{ color: "#AE023E" }}
                  >
                    Find out more
                  </h5>
                  <EastIcon style={iconStyle}></EastIcon>
                </div>
              </Link>
            </MDBRow>
          )}
        </MDBContainer>
      </div>
    </>
  );
}

export default function ToolsImage() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      {/* Mobile  */}
      {isMobile && <ImageMobile />}

      {/* Desktop  */}
      {!isMobile && <ImageDesktop />}
    </>
  );
}

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { MDBContainer, MDBRow, MDBCol, MDBRipple } from "mdb-react-ui-kit";
// import vr1 from "../Images/vr-1.png";
// import EastIcon from "@mui/icons-material/East";

// const ImageMask = ({ imageUrl, maskText }) => {
//   const [isHovering, setIsHovering] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovering(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovering(false);
//   };

//   const imageStyle = {
//     height: "auto",
//     maxWidth: "100%",
//     position: "relative",
//   };

//   const maskStyle = {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//     borderRadius: "50%",
//     backgroundColor: "rgba(0, 0, 0, 0.4)",
//     opacity: isHovering ? 1 : 0,
//     transition: "opacity 0.3s ease-in-out",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   };

//   const textStyle = {
//     color: "#fff",
//     fontSize: "1.5rem",
//     fontWeight: 500,
//     textAlign: "center",
//     opacity: isHovering ? 1 : 0,
//   };

//   return (
//     <MDBRipple
//       className="bg-image"
//       rippleTag="div"
//       rippleColor="light"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <img
//         className="image-cards img-fluid"
//         src={imageUrl}
//         alt="..."
//         style={imageStyle}
//       />
//       <div style={maskStyle}>
//         <div style={textStyle}>{isHovering ? maskText : ""}</div>
//       </div>
//     </MDBRipple>
//   );
// };

// const ToolsImage = () => {
//   const images = [
//     { imageUrl: vr1, maskText: "VR" },
//     { imageUrl: vr1, maskText: "AR" },
//     { imageUrl: vr1, maskText: "XR" },
//   ];

//   const [iconStyle, setIconStyle] = useState({ color: "#AE023E" });

//   const handleMouseEnter = () => {
//     setIconStyle({ ...iconStyle, marginLeft: "12px" });
//   };

//   const handleMouseLeave = () => {
//     setIconStyle({ color: "#AE023E" });
//   };

//   const [uploadfiles, setUploadfiles] = useState([]);

//   useEffect(() => {
//     let isMounted = true;

//     const instance = axios.create({
//       baseURL: "https://10.35.29.186/api/",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//     });

//     async function fetchData() {
//       try {
//         const response = await instance.get(
//           "tools?populate=uploadfiles.fileupload"
//         );
//         if (isMounted) {
//           setUploadfiles(response.data.data);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     }

//     if (uploadfiles.length === 0) {
//       fetchData();
//     }

//     return () => {
//       isMounted = false;
//     };
//   }, [uploadfiles]);

//   return (
//     <>
//       <div
//         className="d-flex justify-content-center py-4 align-items-start md:align-items-center  xs:flex-column sm:flex-row"
//         id="tools-flex"
//       >
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className="flex-fill col-sm-1 col-md-3 w-50 xs:mb-0 md:mb-4 md:w-100"
//           >
//             <ImageMask imageUrl={image.imageUrl} maskText={image.maskText} />
//           </div>
//         ))}
//       </div>
//       {/* <MDBRow onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//         <Link
//           to={`/Tools-Service`}
//           target="_blank"
//           style={{ color: "inherit" }}
//         >
//           <div className="d-inline-flex text-red py-2 md:py-4">
//             <h5 href="#" className="pe-4 " style={{ color: "#AE023E" }}>
//               Find out more
//             </h5>
//             <EastIcon style={iconStyle}></EastIcon>
//           </div>
//         </Link>
//       </MDBRow> */}
//     </>
//   );
// };

// export default ToolsImage;
