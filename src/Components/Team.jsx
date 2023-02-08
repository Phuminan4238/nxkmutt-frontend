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
import teamimg1 from "../Images/team-1.png";
import teamimg2 from "../Images/team-2.png";
import teamimg3 from "../Images/team-3.png";
import teamimg4 from "../Images/team-4.png";

function Profile() {
  return (
    <MDBContainer className="fluid p-0" id="cluster-container">
      <MDBRow className="p-0 ">
        <MDBCol md="3" className="p-0">
          <img src={teamimg1} class="image-fluid" id="cluster-img" />
        </MDBCol>
        <MDBCol
          md="3"
          className="d-flex align-content-center flex-wrap p-5 bg-danger"
        >
          <div className="d-flex align-content-center flex-column w-100">
            <h3 className="text-white text-center ">Name Surname</h3>
            <h5 className="text-white fw-light text-center">
              Position / Main Interest
            </h5>
          </div>
        </MDBCol>
        <MDBCol md="3" className="p-0">
          <img src={teamimg2} class="image-fluid" id="cluster-img" />
        </MDBCol>
        <MDBCol
          md="3"
          className="d-flex align-content-center flex-wrap p-5 bg-warning"
        >
          <div className="d-flex align-content-center flex-column w-100">
            <h3 className="text-white text-center ">Name Surname</h3>
            <h5 className="text-white fw-light text-center">
              Position / Main Interest
            </h5>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

function Profile2() {
  return (
    <MDBContainer className="fluid p-0" id="cluster-container">
      <MDBRow className="p-0 ">
        <MDBCol
          md="3"
          className="d-flex align-content-center flex-wrap p-5 bg-warning"
        >
          <div className="d-flex align-content-center flex-column w-100">
            <h3 className="text-white text-center">Name Surname</h3>
            <h5 className="text-white fw-light text-center">
              Position / Main Interest
            </h5>
          </div>
        </MDBCol>
        <MDBCol md="3" className="p-0">
          <img src={teamimg3} class="image-fluid" id="cluster-img" />
        </MDBCol>
        <MDBCol
          md="3"
          className="d-flex align-content-center flex-wrap p-5 bg-info"
        >
          <div className="d-flex align-content-center flex-column w-100">
            <h3 className="text-white text-center ">Name Surname</h3>
            <h5 className="text-white fw-light text-center">
              Position / Main Interest
            </h5>
          </div>
        </MDBCol>
        <MDBCol md="3" className="p-0">
          <img src={teamimg4} class="image-fluid" id="cluster-img" />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default function Team() {
  return (
    <>
      <Profile />
      <Profile2 />
    </>
  );
}
