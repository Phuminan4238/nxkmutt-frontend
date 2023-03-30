import React from "react";
import { useState, useEffect, setIsLoaded } from "react";
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
      <MDBRow className="p-0 ">
        <MDBCol md="3" className="col-md-3 d-flex flex-column p-0 bg-warning">
          <img src={teamimg5} class="image-fluid" id="cluster-img" />
          <div className="d-flex p-5 align-content-center flex-column w-100">
            <h3 className="text-white text-center ">Name Surname</h3>
            <h5 className="text-white fw-light text-center">
              Position / Main Interest
            </h5>
          </div>
        </MDBCol>
        <MDBCol md="3" className="col-md-3 d-flex flex-column p-0 bg-primary">
          <img src={teamimg5} class="image-fluid" id="cluster-img" />
          <div className="d-flex p-5 align-content-center flex-column w-100">
            <h3 className="text-white text-center ">Name Surname</h3>
            <h5 className="text-white fw-light text-center">
              Position / Main Interest
            </h5>
          </div>
        </MDBCol>
        <MDBCol md="3" className="col-md-3 d-flex flex-column p-0 bg-warning">
          <img src={teamimg5} class="image-fluid" id="cluster-img" />
          <div className="d-flex p-5 align-content-center flex-column w-100">
            <h3 className="text-white text-center ">Name Surname</h3>
            <h5 className="text-white fw-light text-center">
              Position / Main Interest
            </h5>
          </div>
        </MDBCol>
        <MDBCol md="3" className="col-md-3 d-flex flex-column p-0 bg-primary">
          <img src={teamimg5} class="image-fluid" id="cluster-img" />
          <div className="d-flex p-5 align-content-center flex-column w-100">
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

export default function Collaborator() {
  return (
    <>
      <Profile />
    </>
  );
}
