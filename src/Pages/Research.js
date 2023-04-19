import React from "react";
/* MDBootstrap */
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
/* Images */
import vr2 from "../Images/vr-2.png";
import ClusterAccordion from "../Components/ClusterAccordion";

const Research = () => {
  return (
    <div className="App" style={{ borderTop: "1px solid black" }}>
      <section>
        <MDBContainer className="xs:max-w-full sm:max-w-7xl">
          <MDBRow className="pt-0 pb-5 xs:px-5 sm:px-5 md:px-0">
            <MDBCol className="d-flex pt-5 pb-0 pe-5">
              <div className="d-flex flex-column w-100">
                <p className="text-5xl font-black text-uppercase text-black">
                  Research
                </p>
                <p className="text-4xl font-black fw-light text-uppercase pt-2">
                  Clusters
                </p>
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
      <ClusterAccordion></ClusterAccordion>
    </div>
  );
};

export default Research;
