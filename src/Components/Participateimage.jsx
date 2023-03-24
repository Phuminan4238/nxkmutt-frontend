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
            src={vr2}
            position="top"
            alt="..."
            style={{ height: 400, width: 300 }}
          />
        </MDBRipple>
        <MDBRipple className="bg-image" rippleTag="div" rippleColor="light">
          <img
            class="image-cards img-fluid"
            src={vr2}
            position="top"
            alt="..."
            style={{ height: 400, width: 300 }}
          />
        </MDBRipple>
        <MDBRipple className="bg-image" rippleTag="div" rippleColor="light">
          <img
            class="image-cards img-fluid"
            src={vr2}
            position="top"
            alt="..."
            style={{ height: 400, width: 300 }}
          />
        </MDBRipple>
      </div>
    </>
  );
}

export default function ParticipateImage() {
  return <Image />;
}
