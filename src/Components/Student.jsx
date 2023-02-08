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
import teamimg5 from "../Images/team-5.png";

function Profile() {
  return (
    <MDBContainer className="fluid p-0" id="cluster-container">
      <MDBRow className="p-0" id="student-row">
        <MDBCol md="1" className="col-md-1 d-flex flex-column p-0 bg-warning">
          <img src={teamimg5} class="image-fluid" id="greyscale-img" />
        </MDBCol>
        <MDBCol md="1" className="col-md-1 d-flex flex-column p-0 bg-warning">
          <img src={teamimg5} class="image-fluid" id="greyscale-img" />
        </MDBCol>
        <MDBCol md="1" className="col-md-1 d-flex flex-column p-0 bg-warning">
          <img src={teamimg5} class="image-fluid" id="greyscale-img" />
        </MDBCol>
        <MDBCol md="1" className="col-md-1 d-flex flex-column p-0 bg-warning">
          <img src={teamimg5} class="image-fluid" id="greyscale-img" />
        </MDBCol>
        <MDBCol md="1" className="col-md-1 d-flex flex-column p-0 bg-warning">
          <img src={teamimg5} class="image-fluid" id="greyscale-img" />
        </MDBCol>
        <MDBCol md="1" className="col-md-1 d-flex flex-column p-0 bg-warning">
          <img src={teamimg5} class="image-fluid" id="greyscale-img" />
        </MDBCol>
        <MDBCol md="1" className="col-md-1 d-flex flex-column p-0 bg-warning">
          <img src={teamimg5} class="image-fluid" id="greyscale-img" />
        </MDBCol>
        <MDBCol md="1" className="col-md-1 d-flex flex-column p-0 bg-warning">
          <img src={teamimg5} class="image-fluid" id="greyscale-img" />
        </MDBCol>
        <MDBCol md="1" className="col-md-1 d-flex flex-column p-0 bg-warning">
          <img src={teamimg5} class="image-fluid" id="greyscale-img" />
        </MDBCol>
        <MDBCol md="1" className="col-md-1 d-flex flex-column p-0 bg-warning">
          <img src={teamimg5} class="image-fluid" id="greyscale-img" />
        </MDBCol>
        <MDBCol md="1" className="col-md-1 d-flex flex-column p-0 bg-warning">
          <img src={teamimg5} class="image-fluid" id="greyscale-img" />
        </MDBCol>
        <MDBCol md="1" className="col-md-1 d-flex flex-column p-0 bg-warning">
          <img src={teamimg5} class="image-fluid" id="greyscale-img" />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default function Student() {
  return (
    <>
      <Profile />
      <Profile />
    </>
  );
}
