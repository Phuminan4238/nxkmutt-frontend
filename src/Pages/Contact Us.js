import React from "react";
/* Routes */
import { Route, Routes } from "react-router";
/* Material UI */
import { Container } from "@mui/system";
/* MDBootstrap */
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
/* Images */
import vr2 from "../Images/vr-2.png";
import PeopleIcon from "@mui/icons-material/People";
import SchoolIcon from "@mui/icons-material/School";
import BuildIcon from "@mui/icons-material/Build";
import RedeemIcon from "@mui/icons-material/Redeem";
/* Components */
import Publicationimage from "../Components/Publicationimage";
import Publicationreport from "../Components/Publicationreport";
import Toolsimage from "../Components/Tools";
import News from "../Components/News";
import Contactcol from "../Components/Contactcol";

const Contactus = () => {
  return (
    <div className="App">
      <section>
        <MDBContainer>
          <MDBRow className="pt-0 pb-5">
            <MDBCol className="d-flex pt-5 pb-0 pe-5">
              <div className="d-flex flex-column w-100">
                <h1 className="fw-bold text-black">Contact Us</h1>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBContainer className="fluid p-0" id="contact-container">
          <MDBRow className="p-0">
            <MDBCol md="6" className="p-0">
              <img src={vr2} class="image-fluid h-50" id="cluster-img" />
            </MDBCol>
            <MDBCol className="pt-5 pb-0 pe-5">
              <MDBRow>
                <h4 className="fw-bold text-black ps-5">E-mail</h4>
              </MDBRow>
              <MDBRow className="pt-5">
                <h4 className="fw-bold text-black ps-5">Phone</h4>
              </MDBRow>
              <MDBRow className="pt-5">
                <h4 className="fw-bold text-black ps-5">Location</h4>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="container">
          <div className="d-inline-flex p-2 pt-5">
            <h3 className="fw-bold  text-black ">Social Media</h3>
          </div>
          <Contactcol></Contactcol>
          <div className="d-inline-flex p-2 pt-5">
            <h3 className="fw-bold text-black ">Lab Portal</h3>
          </div>
          <Contactcol></Contactcol>
        </div>
      </section>
    </div>
  );
};

export default Contactus;
