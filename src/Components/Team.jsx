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
    <MDBContainer className="fluid p-0 xs:hidden sm:contents">
      <MDBRow className="p-0 ">
        <MDBCol md="3" className="p-0">
          <img src={teamimg1} class="image-fluid" id="cluster-img" />
        </MDBCol>

        <MDBCol
          md="3"
          className="d-flex align-content-center flex-wrap p-5 bg-danger"
        >
          <div className="d-flex align-content-center flex-column w-100">
            <h3 className="text-white text-center ">Sirawaj Itthipuripat</h3>
            <h5 className="text-white fw-light text-center">
              Research director
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
            <h3 className="text-white text-center ">Kanda Lertladaluck</h3>
            <h5 className="text-white fw-light text-center">Researcher</h5>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

function Profile2() {
  return (
    <MDBContainer
      className="fluid p-0 xs:hidden sm:contents"
      id="cluster-container"
    >
      <MDBRow className="p-0 ">
        <MDBCol
          md="3"
          className="d-flex align-content-center flex-wrap p-5 bg-warning"
        >
          <div className="d-flex align-content-center flex-column w-100">
            <h3 className="text-white text-center">
              Thitaporn Chaisilprungraung
            </h3>
            <h5 className="text-white fw-light text-center">
              Research scientist
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
            <h3 className="text-white text-center ">Kejkaew Thanasuan</h3>
            <h5 className="text-white fw-light text-center">
              Assistant Professor
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

function CardMember() {
  return (
    <MDBCard className="px-5 xs:block sm:hidden">
      <MDBRipple
        rippleColor="light"
        rippleTag="div"
        className="bg-image hover-overlay"
      >
        <MDBCardImage
          src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
          fluid
          alt="..."
        />
        <a>
          <div
            className="mask"
            style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
          ></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </MDBCardText>
        <MDBBtn href="#">Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}

export default function Team() {
  return (
    <>
      <Profile />
      <Profile2 />
      <CardMember />
    </>
  );
}
