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
import new1 from "../Images/new-1.png";
import new2 from "../Images/new-2.png";

function Post() {
  return (
    <MDBContainer className="py-4">
      <MDBRow>
        <MDBCol md="4">
          <MDBRipple
            className="bg-image hover-overlay shadow-1-strong rounded"
            rippleTag="div"
            rippleColor="light"
          >
            <img src={new1} className="w-100" />
            <a href="#!">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
              ></div>
            </a>
          </MDBRipple>
        </MDBCol>
        <MDBCol className="d-flex ps-4">
          <div className="d-flex flex-column w-100">
            <h4 className="fw-bold">Burapha University's Visit</h4>
            <p className="mt-2">Burapha University's Visit</p>
            <div
              className="d-flex justify-content-between mt-auto"
              id="news-underline"
            >
              <p>7.10.2022</p>
              <p className="mb-0">Content Master</p>
            </div>
            <p href="#" className="link-danger pt-2 fw-bold">
              Read more
            </p>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

function Post2() {
  return (
    <MDBContainer className="py-4">
      <MDBRow>
        <MDBCol md="4">
          <MDBRipple
            className="bg-image hover-overlay shadow-1-strong rounded"
            rippleTag="div"
            rippleColor="light"
          >
            <img src={new2} className="w-100" />
            <a href="#!">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
              ></div>
            </a>
          </MDBRipple>
        </MDBCol>
        <MDBCol className="d-flex ps-4">
          <div className="d-flex flex-column w-100">
            <h4 className="fw-bold">Burapha University's Visit</h4>
            <p className="mt-2">Burapha University's Visit</p>
            <div
              className="d-flex justify-content-between mt-auto"
              id="news-underline"
            >
              <p>7.10.2022</p>
              <p className="mb-0">Content Master</p>
            </div>
            <p href="#" className="link-danger pt-2 fw-bold">
              Read more
            </p>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default function News() {
  return (
    <>
      <Post />
      <Post2 />
    </>
  );
}
