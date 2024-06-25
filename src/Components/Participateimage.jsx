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
  MDBBtn,
} from "mdb-react-ui-kit";
import { useState, useEffect, setIsLoaded, useContext } from "react";
import new1 from "../Images/new-1.png";
import EastIcon from "@mui/icons-material/East";
import ReactPaginate from "react-paginate";
import { useLocation } from "react-router-dom";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// Language
import { LanguageContext } from "../Components/LanguageContext";

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
  const [uploadfilesAll, setUploadfilesAll] = useState([]);
  const [hasDataFetched, setHasDataFetched] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const { selectedLanguage, handleLanguageSwitch } =
    useContext(LanguageContext);

  const cardStyle = {
    width: isMobile ? "-webkit-fit-content" : "100%",
    boxShadow: "unset",
    borderRadius: "8px",
    width: "300px",
    height: "420px",
  };

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://10.2.14.173/api/participations?populate=uploadfiles.fileupload"
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

  useEffect(() => {
    if (!hasDataFetched) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "http://10.2.14.173/api/participations?populate=uploadfiles.fileupload"
          );
          const data = response.data.data;
          if (data && data.length > 0) {
            setUploadfilesAll(data);
          }
          setHasDataFetched(true);
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    }
  }, [hasDataFetched]);

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

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const displayedItems = uploadfiles.slice(0, currentIndex + 3);
  const remainingItems = uploadfiles.slice(currentIndex + 3);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 760 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 760, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const renderItemsPerRow = (items, perRow) => {
    const rows = Math.ceil(items.length / perRow);
    const renderedItems = [];

    for (let i = 0; i < rows; i++) {
      const rowItems = items.slice(i * perRow, (i + 1) * perRow);
      const row = (
        <MDBRow key={i}>
          {rowItems.map((member) => (
            <MDBCol md="4" key={member.id} className="pb-2 px-0 col-sm-8">
              <Link
                to={`/Participate-Detail/${member.id}`}
                onClick={() => {
                  window.scrollTo(0, 0);
                  window.location.replace(`/Participate-Detail/${member.id}`);
                }}
              >
                <MDBCard style={cardStyle}>
                  <ImageMask
                    style={{
                      width: "-webkit-fill-available",
                      objectFit: "cover",
                      height: "400px !important",
                      borderRadius: "8px",
                    }}
                    imageUrl={
                      "http://10.2.14.173" +
                      member.attributes.uploadfiles.data[0]?.attributes
                        .fileupload.data[0]?.attributes.url
                    }
                    maskText={member.attributes.name_en + " "}
                    imageHeight="400px" // Adjust the height here
                  />
                </MDBCard>
              </Link>
            </MDBCol>
          ))}
        </MDBRow>
      );

      renderedItems.push(row);
    }

    return renderedItems;
  };

  return (
    <>
      <div className="d-flex justify-content-between pt-0 px-0" id="tools-flex">
        <MDBContainer className="px-4 xs:max-w-full sm:max-w-7xl pt-4 pb-2">
          {renderItemsPerRow(displayedItems, 3)}
          {currentIndex >= uploadfiles.length || isHomePage ? null : (
            <MDBRow className="mt-4">
              <MDBCol>
                <div className="text-center">
                  <MDBBtn
                    outline
                    className="mx-2"
                    color="secondary"
                    onClick={handleNext}
                  >
                    {selectedLanguage === "en" ? "LOAD MORE" : "เพิ่มเติม"}
                  </MDBBtn>
                </div>
              </MDBCol>
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
    width: "240px",
    height: "80%",
    padding: "0rem 1.5rem",
  };

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://10.2.14.173/api/participations?populate=uploadfiles.fileupload"
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
      breakpoint: { max: 1024, min: 760 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 760, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      <div
        className="d-flex justify-content-between pt-4 pb-0 px-0"
        id="tools-flex"
      >
        <MDBContainer className="px-0 xs:max-w-full sm:max-w-7xl">
          <Carousel
            responsive={responsive}
            arrows={true}
            renderArrowPrev={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  className="carousel-arrow carousel-prev"
                  style={{
                    padding: "unset",
                    left: "calc(4% + 1px) !important",
                  }}
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
                  style={{
                    padding: "unset",
                    right: "calc(4% + 1px) !important",
                  }}
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
                  to={`/Participate-Detail/${member.id}`}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    window.location.replace(`/Participate-Detail/${member.id}`);
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
                        "http://10.2.14.173" +
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
                window.matchMedia("(max-width: 760px)").matches
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
                window.matchMedia("(max-width: 760px)").matches
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

// function ImageMobile({ members }) {
//   const [uploadfiles, setUploadfiles] = useState([]);
//   const [uploadfilesAll, setUploadfilesAll] = useState([]);
//   const [hasDataFetched, setHasDataFetched] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const isMobile = useMediaQuery({ maxWidth: 767 });
//   const location = useLocation();
//   const isHomePage = location.pathname === "/";

//   const { selectedLanguage, handleLanguageSwitch } =
//     useContext(LanguageContext);

//   const cardStyle = {
//     width: isMobile ? "-webkit-fit-content" : "100%",
//     boxShadow: "unset",
//     borderRadius: "8px",
//     width: "300px",
//     height: "420px",
//   };

//   useEffect(() => {
//     let isMounted = true;
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "http://10.2.14.173/api/participations?populate=uploadfiles.fileupload"
//         );
//         if (isMounted) {
//           setUploadfiles(response.data.data);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchData();
//     return () => {
//       isMounted = false;
//     };
//   }, []);

//   useEffect(() => {
//     if (!hasDataFetched) {
//       const fetchData = async () => {
//         try {
//           const response = await axios.get(
//             "http://10.2.14.173/api/participations?populate=uploadfiles.fileupload"
//           );
//           const data = response.data.data;
//           if (data && data.length > 0) {
//             setUploadfilesAll(data);
//           }
//           setHasDataFetched(true);
//         } catch (error) {
//           console.log(error);
//         }
//       };

//       fetchData();
//     }
//   }, [hasDataFetched]);

//   const [iconStyle, setIconStyle] = useState({
//     color: "#AE023E",
//     marginLeft: 0,
//   });

//   const handleMouseEnter = () => {
//     setIconStyle({ ...iconStyle, marginLeft: "12px" });
//   };

//   const handleMouseLeave = () => {
//     setIconStyle({ color: "#AE023E" });
//   };

//   // Col Hovering
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter2 = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave2 = () => {
//     setIsHovered(false);
//   };

//   const colStyle = {
//     marginLeft: isHovered ? "12px" : "0px",
//     transition: "margin-left 0.3s ease-out",
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => prevIndex + 1);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => prevIndex - 1);
//   };

//   const displayedItems = uploadfiles.slice(0, currentIndex + 3);
//   const remainingItems = uploadfiles.slice(currentIndex + 3);

//   const responsive = {
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3,
//       slidesToSlide: 3,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 760 },
//       items: 2,
//       slidesToSlide: 2,
//     },
//     mobile: {
//       breakpoint: { max: 760, min: 0 },
//       items: 1,
//       slidesToSlide: 1,
//     },
//   };

//   const renderItemsPerRow = (items, perRow) => {
//     const rows = Math.ceil(items.length / perRow);
//     const renderedItems = [];

//     for (let i = 0; i < rows; i++) {
//       const rowItems = items.slice(i * perRow, (i + 1) * perRow);
//       const row = (
//         <MDBRow key={i}>
//           {rowItems.map((member) => (
//             <MDBCol md="4" key={member.id} className="pb-2 px-0 col-sm-8">
//               <Link
//                 to={`/Participate-Detail/${member.id}`}
//                 onClick={() => {
//                   window.scrollTo(0, 0);
//                   window.location.replace(`/Participate-Detail/${member.id}`);
//                 }}
//               >
//                 <MDBCard style={cardStyle}>
//                   <ImageMask
//                     style={{
//                       width: "-webkit-fill-available",
//                       objectFit: "cover",
//                       height: "400px !important",
//                       borderRadius: "8px",
//                     }}
//                     imageUrl={
//                       "http://10.2.14.173" +
//                       member.attributes.uploadfiles.data[0]?.attributes
//                         .fileupload.data[0]?.attributes.url
//                     }
//                     maskText={member.attributes.name_en + " "}
//                     imageHeight="400px" // Adjust the height here
//                   />
//                 </MDBCard>
//               </Link>
//             </MDBCol>
//           ))}
//         </MDBRow>
//       );

//       renderedItems.push(row);
//     }

//     return renderedItems;
//   };

//   return (
//     <>
//       <div className="d-flex justify-content-between pt-0 px-0" id="tools-flex">
//         <MDBContainer className="px-4 xs:max-w-full sm:max-w-7xl pt-4 pb-2">
//           {renderItemsPerRow(displayedItems, 3)}
//           {currentIndex >= uploadfiles.length || isHomePage ? null : (
//             <MDBRow className="mt-4">
//               <MDBCol>
//                 <div className="text-center">
//                   <MDBBtn
//                     outline
//                     className="mx-2"
//                     color="secondary"
//                     onClick={handleNext}
//                   >
//                     LOAD MORE
//                   </MDBBtn>
//                 </div>
//               </MDBCol>
//             </MDBRow>
//           )}
//         </MDBContainer>
//       </div>
//     </>
//   );
// }

// function ImageMobile() {
//   return (
//     <>
//       <div className="d-flex justify-content-between flex-column ps-4 pt-3 pb-4">
//         <MDBRipple
//           className="bg-image pb-2"
//           rippleTag="div"
//           rippleColor="light"
//         >
//           <img
//             class="image-cards img-fluid"
//             src={vr2}
//             position="top"
//             alt="..."
//             style={{ height: 200, width: 200, borderRadius: "0.5rem" }}
//           />
//         </MDBRipple>
//         <MDBRipple
//           className="bg-image pb-2"
//           rippleTag="div"
//           rippleColor="light"
//         >
//           <img
//             class="image-cards img-fluid"
//             src={vr2}
//             position="top"
//             alt="..."
//             style={{ height: 200, width: 200, borderRadius: "0.5rem" }}
//           />
//         </MDBRipple>
//         <MDBRipple
//           className="bg-image pb-2"
//           rippleTag="div"
//           rippleColor="light"
//         >
//           <img
//             class="image-cards img-fluid"
//             src={vr2}
//             position="top"
//             alt="..."
//             style={{ height: 200, width: 200, borderRadius: "0.5rem" }}
//           />
//         </MDBRipple>
//       </div>
//     </>
//   );
// }

export default function ParticipateImage() {
  const isMobile = useMediaQuery({ query: "(max-width: 760px)" });
  return (
    <>
      {/* Mobile  */}
      {isMobile && <ImageMobile />}

      {/* Desktop  */}
      {!isMobile && <ImageDesktop />}
    </>
  );
}
