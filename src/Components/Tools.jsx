import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBRipple } from "mdb-react-ui-kit";
import vr1 from "../Images/vr-1.png";
import EastIcon from "@mui/icons-material/East";

const ImageMask = ({ imageUrl, maskText }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const imageStyle = {
    height: "auto",
    maxWidth: "100%",
    position: "relative",
  };

  const maskStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    opacity: isHovering ? 1 : 0,
    transition: "opacity 0.3s ease-in-out",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const textStyle = {
    color: "#fff",
    fontSize: "1.5rem",
    fontWeight: 500,
    textAlign: "center",
    opacity: isHovering ? 1 : 0,
  };

  return (
    <MDBRipple
      className="bg-image"
      rippleTag="div"
      rippleColor="light"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        className="image-cards img-fluid"
        src={imageUrl}
        alt="..."
        style={imageStyle}
      />
      <div style={maskStyle}>
        <div style={textStyle}>{isHovering ? maskText : ""}</div>
      </div>
    </MDBRipple>
  );
};

const ToolsImage = () => {
  const images = [
    { imageUrl: vr1, maskText: "VR" },
    { imageUrl: vr1, maskText: "AR" },
    { imageUrl: vr1, maskText: "XR" },
  ];

  const [iconStyle, setIconStyle] = useState({ color: "#AE023E" });

  const handleMouseEnter = () => {
    setIconStyle({ ...iconStyle, marginLeft: "12px" });
  };

  const handleMouseLeave = () => {
    setIconStyle({ color: "#AE023E" });
  };

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center py-4 flex-row xs:flex-row"
        id="tools-flex"
      >
        {images.map((image, index) => (
          <div key={index} className="col-md-3 col-sm-1 mb-4 flex-fill">
            <ImageMask imageUrl={image.imageUrl} maskText={image.maskText} />
          </div>
        ))}
      </div>
      <MDBRow onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Link
          to={`/Tools Service`}
          target="_blank"
          style={{ color: "inherit" }}
        >
          <div className="d-inline-flex py-4 text-red">
            <h5 href="#" className="pe-4 " style={{ color: "#AE023E" }}>
              Find out more
            </h5>
            <EastIcon style={iconStyle}></EastIcon>
          </div>
        </Link>
      </MDBRow>
    </>
  );
};

export default ToolsImage;

// import React from "react";
// import { useState } from "react";
// import { MDBRipple } from "mdb-react-ui-kit";
// import vr1 from "../Images/vr-1.png";
// import vr2 from "../Images/vr-2.png";

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

// function Image() {
//   return (
//     <>
//       <div
//         className="d-flex justify-content-center align-items-center py-4 flex-row xs:flex-row"
//         id="tools-flex"
//       >
//         <div className="col-md-3 col-sm-1 mb-4 flex-fill">
//           <ImageMask imageUrl={vr1} maskText="VR" />
//         </div>

//         <div className="col-md-3 col-sm-1 mb-4 flex-fill">
//           <ImageMask imageUrl={vr1} maskText="AR" />
//         </div>

//         <div className="col-md-3 col-sm-1 mb-4 flex-fill">
//           <ImageMask imageUrl={vr1} maskText="XR" />
//         </div>
//       </div>
//     </>
//   );
// }

// export default function Toolsimage() {
//   return <Image />;
// }
