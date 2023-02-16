import React from "react";
/* Routes */
import { Route, Routes } from "react-router";
/* MDBootstrap */
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
/* Material UI */
import { Container } from "@mui/system";
/* Imags */
import vr2 from "../Images/vr-2.png";
/* Components */
import Researchaccordion from "../Components/ResearchAccordion";
import Memberalumni from "../Components/Memberalumni";

const MemberDetail = () => {
  return (
    <div className="App">
      <section>
        <MDBContainer>
          <MDBRow className="pt-5 py-4">
            <MDBCol>
              <div className="d-inline-flex p-2">
                <h2 className="fw-bold text-uppercase">
                  {" "}
                  Research<br></br>
                  <br></br>
                  <h4 className="fw-normal text-uppercase text-black">
                    Clusters
                  </h4>
                </h2>
              </div>
            </MDBCol>
            <MDBCol md="4" className="p-0">
              <img src={vr2} class="image-fluid" id="cluster-img" />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <Researchaccordion></Researchaccordion>
    </div>
  );
};

export default MemberDetail;
