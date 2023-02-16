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

const Toolservice = () => {
  return (
    <div className="App">
      <section>
        <MDBContainer>
          <MDBRow className="pt-0 pb-5">
            <MDBCol className="d-flex pt-5 pb-0 pe-5">
              <div className="d-flex flex-column w-100">
                <h1 className="fw-bold text-uppercase text-black">Tools</h1>
                <h1 className="fw-bold text-uppercase text-black">
                  <span
                    style={{
                      fontSize: "4rem",
                      color: "#AE023E",
                      fontWeight: "normal",
                    }}
                  >
                    &
                  </span>{" "}
                  Service
                </h1>
              </div>
            </MDBCol>
            <MDBCol md="4" className="p-0">
              <img
                src={vr2}
                class="image-fluid"
                id="cluster-img"
                style={{ height: "350px" }}
              />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              <div className="d-inline-flex p-2">
                <h4 className="fw-bold text-uppercase text-black ps-2">
                  Tools
                </h4>
              </div>
            </MDBCol>
          </MDBRow>
          <Toolsimage></Toolsimage>
          <Toolsimage></Toolsimage>
          <MDBRow className="mt-4">
            <MDBCol>
              <div className="text-center">
                <MDBBtn outline className="mx-2" color="secondary">
                  LOAD MORE
                </MDBBtn>
              </div>
            </MDBCol>
          </MDBRow>
          <MDBRow className="pt-5">
            <MDBCol>
              <MDBRow>
                <h4 className="fw-bold text-uppercase text-black ps-2">
                  Service
                </h4>
              </MDBRow>
              <MDBCol className="ps-4 pt-2">
                <MDBRow>
                  <p className="fw-bold">..........</p>
                  <p>Contact Detail</p>
                </MDBRow>
                <MDBRow className="pt-2">
                  <MDBCol size="1" style={{ width: "3.33%" }}>
                    <PeopleIcon style={{ color: "#AE023E" }} />
                  </MDBCol>
                  <MDBCol>
                    <p className="fw-bold">Consulting</p>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol size="1" style={{ width: "3.33%" }}>
                    <SchoolIcon style={{ color: "#AE023E" }} />
                  </MDBCol>
                  <MDBCol>
                    <p className="fw-bold">Research</p>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol size="1" style={{ width: "3.33%" }}>
                    <BuildIcon style={{ color: "#AE023E" }} />
                  </MDBCol>
                  <MDBCol>
                    <p className="fw-bold">Tools Renting</p>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol size="1" style={{ width: "3.33%" }}>
                    <RedeemIcon style={{ color: "#AE023E" }} />
                  </MDBCol>
                  <MDBCol>
                    <p className="fw-bold">Course & Workshop</p>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
};

export default Toolservice;
