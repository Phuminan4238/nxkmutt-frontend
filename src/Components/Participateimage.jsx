import React from "react";
import { MDBRipple } from "mdb-react-ui-kit";
import vr2 from "../Images/vr-2.png";

function Image() {
  return (
    <>
      <div className="d-flex justify-content-between px-0 pt-3 pb-4">
        <MDBRipple className="bg-image" rippleTag="div" rippleColor="light">
          <img
            class="image-cards img-fluid"
            src={vr2}
            position="top"
            alt="..."
            style={{ height: 400, width: 300, borderRadius: "0.5rem" }}
          />
        </MDBRipple>
        <MDBRipple className="bg-image" rippleTag="div" rippleColor="light">
          <img
            class="image-cards img-fluid"
            src={vr2}
            position="top"
            alt="..."
            style={{ height: 400, width: 300, borderRadius: "0.5rem" }}
          />
        </MDBRipple>
        <MDBRipple className="bg-image" rippleTag="div" rippleColor="light">
          <img
            class="image-cards img-fluid"
            src={vr2}
            position="top"
            alt="..."
            style={{ height: 400, width: 300, borderRadius: "0.5rem" }}
          />
        </MDBRipple>
      </div>
    </>
  );
}

export default function ParticipateImage() {
  return <Image />;
}
