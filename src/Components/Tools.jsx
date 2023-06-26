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

function Image({ members }) {
  const [uploadfiles, setUploadfiles] = useState([]);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const cardStyle = {
    width: isMobile ? "-webkit-fit-content" : "100%",
    boxShadow: "unset",
    borderRadius: "8px",
    width: "340px",
    height: "444px",
  };

  useEffect(() => {
    let isMounted = true;
    const instance = axios.create({
      baseURL: "https://10.35.29.186/api/",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    async function fetchData() {
      try {
        const response = await instance.get(
          "tools?populate=uploadfiles.fileupload"
        );
        if (isMounted) {
          const firstThreeItems = response.data.data.slice(0, 3);
          setUploadfiles(firstThreeItems);
        }
      } catch (error) {
        console.error(error);
      }
    }

    if (uploadfiles.length === 0) {
      fetchData();
    }

    return () => {
      isMounted = false;
    };
  }, [uploadfiles]);

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

  const location = useLocation();
  const isHomePage = location.pathname === "/";

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

  return (
    <>
      <div className="d-flex justify-content-between pt-0 px-0" id="tools-flex">
        <MDBContainer className="px-0 xs:max-w-full sm:max-w-7xl">
          <MDBRow className="g-6 xs:w-min px-5 sm:w-auto sm:px-5 md:px-0">
            {uploadfiles.map((member) => (
              <MDBCol md="4" key={member.id} className="pb-4 px-0 col-sm-8">
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
                        height: "444px !important",
                        borderRadius: "8px",
                      }}
                      imageUrl={
                        "https://10.35.29.186" +
                        member.attributes.uploadfiles.data[0]?.attributes
                          .fileupload.data[0]?.attributes.url
                      }
                      maskText={member.attributes.name_en + " "}
                      imageHeight="444px" // Adjust the height here
                    />
                  </MDBCard>
                </Link>
              </MDBCol>
            ))}
          </MDBRow>

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

export default function ToolsImage() {
  return (
    <>
      <Image />
      {/* <Image2 /> */}
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
