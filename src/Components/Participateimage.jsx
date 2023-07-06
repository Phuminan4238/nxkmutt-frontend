import React from "react";
import { MDBRipple } from "mdb-react-ui-kit";
import vr2 from "../Images/vr-2.png";
import { useMediaQuery } from "react-responsive";
import image1 from "../Images/participate-img1.png";
import image2 from "../Images/participate-img2.png";
import image3 from "../Images/participate-img3.png";

function ImageDesktop() {
  return (
    <>
      <div className="d-flex justify-content-around px-0 pt-3 pb-4">
        <MDBRipple className="bg-image" rippleTag="div" rippleColor="light">
          <img
            class="image-cards img-fluid"
            src={image2}
            position="top"
            alt="..."
            style={{ height: 300, width: 300, borderRadius: "0.5rem" }}
          />
        </MDBRipple>
        <MDBRipple className="bg-image" rippleTag="div" rippleColor="light">
          <img
            class="image-cards img-fluid"
            src={image3}
            position="top"
            alt="..."
            style={{ height: 300, width: 300, borderRadius: "0.5rem" }}
          />
        </MDBRipple>
        <MDBRipple className="bg-image" rippleTag="div" rippleColor="light">
          <img
            class="image-cards img-fluid"
            src={image1}
            position="top"
            alt="..."
            style={{ height: 300, width: 300, borderRadius: "0.5rem" }}
          />
        </MDBRipple>
      </div>
    </>
  );
}

function ImageMobile() {
  return (
    <>
      <div className="d-flex justify-content-between flex-column ps-4 pt-3 pb-4">
        <MDBRipple
          className="bg-image pb-2"
          rippleTag="div"
          rippleColor="light"
        >
          <img
            class="image-cards img-fluid"
            src={vr2}
            position="top"
            alt="..."
            style={{ height: 200, width: 200, borderRadius: "0.5rem" }}
          />
        </MDBRipple>
        <MDBRipple
          className="bg-image pb-2"
          rippleTag="div"
          rippleColor="light"
        >
          <img
            class="image-cards img-fluid"
            src={vr2}
            position="top"
            alt="..."
            style={{ height: 200, width: 200, borderRadius: "0.5rem" }}
          />
        </MDBRipple>
        <MDBRipple
          className="bg-image pb-2"
          rippleTag="div"
          rippleColor="light"
        >
          <img
            class="image-cards img-fluid"
            src={vr2}
            position="top"
            alt="..."
            style={{ height: 200, width: 200, borderRadius: "0.5rem" }}
          />
        </MDBRipple>
      </div>
    </>
  );
}

export default function ParticipateImage() {
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
