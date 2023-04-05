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
      <MDBRow className="p-0" id="student-row" gutter={2}>
        <MDBCol md="1" className="col-md-1 d-flex flex-column p-0 bg-warning">
          <div class="image-container">
            <img src={teamimg5} className="w-100" alt="Team Member" />
            <div class="overlay"></div>
          </div>
        </MDBCol>
        <MDBCol md="1" className="col-md-1 d-flex flex-column p-0 bg-warning">
          <div class="image-container">
            <img src={teamimg5} className="w-100" alt="Team Member" />
            <div class="overlay"></div>
          </div>
        </MDBCol>
        <MDBCol md="1" className="col-md-1 d-flex flex-column p-0 bg-warning">
          <div class="image-container">
            <img src={teamimg5} className="w-100" alt="Team Member" />
            <div class="overlay"></div>
          </div>
        </MDBCol>
        <MDBCol md="1" className="col-md-1 d-flex flex-column p-0 bg-warning">
          <div class="image-container">
            <img src={teamimg5} className="w-100" alt="Team Member" />
            <div class="overlay"></div>
          </div>
        </MDBCol>
        <MDBCol md="1" className="col-md-1 d-flex flex-column p-0 bg-warning">
          <div class="image-container">
            <img src={teamimg5} className="w-100" alt="Team Member" />
            <div class="overlay"></div>
          </div>
        </MDBCol>
        <MDBCol md="1" className="col-md-1 d-flex flex-column p-0 bg-warning">
          <div class="image-container">
            <img src={teamimg5} className="w-100" alt="Team Member" />
            <div class="overlay"></div>
          </div>
        </MDBCol>
        <MDBCol md="1" className="col-md-1 d-flex flex-column p-0 bg-warning">
          <div class="image-container">
            <img src={teamimg5} className="w-100" alt="Team Member" />
            <div class="overlay"></div>
          </div>
        </MDBCol>
        <MDBCol md="1" className="col-md-1 d-flex flex-column p-0 bg-warning">
          <div class="image-container">
            <img src={teamimg5} className="w-100" alt="Team Member" />
            <div class="overlay"></div>
          </div>
        </MDBCol>
        <MDBCol md="1" className="col-md-1 d-flex flex-column p-0 bg-warning">
          <div class="image-container">
            <img src={teamimg5} className="w-100" alt="Team Member" />
            <div class="overlay"></div>
          </div>
        </MDBCol>
        <MDBCol md="1" className="col-md-1 d-flex flex-column p-0 bg-warning">
          <div class="image-container">
            <img src={teamimg5} className="w-100" alt="Team Member" />
            <div class="overlay"></div>
          </div>
        </MDBCol>
        <MDBCol md="1" className="col-md-1 d-flex flex-column p-0 bg-warning">
          <div class="image-container">
            <img src={teamimg5} className="w-100" alt="Team Member" />
            <div class="overlay"></div>
          </div>
        </MDBCol>
        <MDBCol md="1" className="col-md-1 d-flex flex-column p-0 bg-warning">
          <div class="image-container">
            <img src={teamimg5} className="w-100" alt="Team Member" />
            <div class="overlay"></div>
          </div>
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
