import React from "react";
import {
  MDBContainer,
  MDBCarousel,
  MDBCarouselItem,
  MDBRow,
  MDBCol,
  MDBRipple,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import vr1 from "../Images/vr-1.png";
import vr2 from "../Images/vr-2.png";

function Image() {
  return (
    <>
      <div className="d-flex justify-content-between py-4" id="tools-flex">
        <MDBRipple className="bg-image" rippleTag="div" rippleColor="light">
          <img
            class="image-cards img-fluid"
            src={vr1}
            position="top"
            alt="..."
            style={{ height: 400 }}
          />
          <a href="#!">
            <div
              className="mask"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
            >
              <div className="d-flex justify-content-center align-items-center h-100">
                <h3 className="text-white mb-0">VR</h3>
              </div>
            </div>
            <div className="hover-overlay">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
              ></div>
            </div>
          </a>
        </MDBRipple>
        <MDBRipple className="bg-image" rippleTag="div" rippleColor="light">
          <img
            class="image-cards img-fluid"
            src={vr2}
            position="top"
            alt="..."
            style={{ height: 400 }}
          />
        </MDBRipple>
        <MDBRipple className="bg-image" rippleTag="div" rippleColor="light">
          <img
            class="image-cards img-fluid"
            src={vr2}
            position="top"
            alt="..."
            style={{ height: 400 }}
          />
        </MDBRipple>
      </div>
    </>
  );
}

export default function Toolsimage() {
  return <Image />;
}
