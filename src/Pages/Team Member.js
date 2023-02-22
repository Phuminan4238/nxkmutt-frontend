import React from "react";
/* MDBootstrap */
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
/* Images*/
import vr1 from "../Images/vr-1.png";
import vr2 from "../Images/vr-2.png";
/* Components */
import Memberimage from "../Components/Memberimage";
import Membercluster from "../Components/Membercluster";
import Memberalumni from "../Components/Memberalumni";
import Memberadvisor from "../Components/Memberadvisor";
import Membercol from "../Components/Membercol";
/* Routes */
import { Route, Routes } from "react-router";

const Member = () => {
  return (
    <div className="App" style={{ borderTop: "1px solid black" }}>
      <section>
        <MDBContainer>
          <MDBRow className="pt-0 pb-0">
            <MDBCol className="d-flex pt-5 pb-0 pe-5">
              <div className="d-flex flex-column w-100">
                <h2 className="fw-bold text-uppercase text-black">Meet Our</h2>
                <h1
                  className="fw-bold text-uppercase"
                  style={{ color: "#AE023E" }}
                >
                  Team
                </h1>
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
      <section>
        <MDBContainer>
          <MDBRow className="pt-5 py-4">
            <div className="d-inline-flex p-2">
              <h3 className="fw-bold text-uppercase text-black ps-2">Member</h3>
            </div>
            <Memberimage></Memberimage>
            <Memberimage></Memberimage>
            <div className="d-inline-flex p-2 pt-5">
              <h3 className="fw-bold text-uppercase text-black ps-2">
                Advisor
              </h3>
            </div>
            <Memberadvisor></Memberadvisor>
            <div className="d-inline-flex p-2 pt-5">
              <h3 className="fw-bold text-uppercase text-black ps-2">
                Active Alumni
              </h3>
            </div>
            <Memberalumni></Memberalumni>
            <Memberalumni></Memberalumni>
            <div className="d-inline-flex p-2 pt-5">
              <h3 className="fw-bold text-uppercase text-black ps-2">
                Collaborator
              </h3>
            </div>
            <Membercol></Membercol>
          </MDBRow>
        </MDBContainer>
      </section>
      {/* <Membercluster></Membercluster> */}
      {/* <Memberimage></Memberimage> */}
    </div>
  );
};

export default Member;
