import React from "react";
/* Routes */
import { Route, Routes } from "react-router";
/* MDBootstrap */
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
/* Images */
import vr2 from "../Images/vr-2.png";
/* Material UI */
import { Container } from "@mui/system";
/* Components */
import Clusterimage from "../Components/Cluster";
import Researchaccordion from "../Components/ResearchAccordion";

const Research = () => {
  return (
    <div className="App" style={{ borderTop: "1px solid black" }}>
      <section>
        <MDBContainer>
          <MDBRow className="pt-0 pb-5">
            <MDBCol className="d-flex pt-5 pb-0 pe-5">
              <div className="d-flex flex-column w-100">
                <h1 className="fw-bold text-uppercase text-black"> Research</h1>
                <h2 className="fw-light text-uppercase">Clusters</h2>
                <div
                  className="d-flex justify-content-between mt-auto"
                  style={{ width: "80%" }}
                ></div>
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
        </MDBContainer>
      </section>
      {/* <Researchaccordion></Researchaccordion> */}
      <Clusterimage></Clusterimage>
    </div>
  );
};

export default Research;
