import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import vr1 from "../Images/vr-1.png";

const cluster1 = {
  name: " Cognitive, Clinical",
};

function Image() {
  return (
    <MDBContainer className="fluid p-0" id="cluster-container">
      <MDBRow className="p-0 ">
        <MDBCol className="d-flex p-5">
          <div className="d-flex flex-column w-100">
            <h3 className="fw-bold text-uppercase text-black">
              MEET OUR &<br></br>
              <br></br>
              TEAM
            </h3>
            <div className="d-flex justify-content-between mt-auto">
              <h5 className="text-white fw-normal mt-5">More Info</h5>
            </div>
          </div>
        </MDBCol>
        <MDBCol md="4" className="p-0">
          <img src={vr1} class="image-fluid" id="cluster-img" />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default function Membercluster() {
  return (
    <>
      <Image />
    </>
  );
}
