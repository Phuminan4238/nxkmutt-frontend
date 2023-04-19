import React from "react";
/* MDBootstrap */
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
/* Images*/
import vr2 from "../Images/vr-2.png";
/* Components */
import Memberimage from "../Components/Memberimage";
import Memberalumni from "../Components/Memberalumni";
import Memberadvisor from "../Components/Memberadvisor";
import Membercol from "../Components/Membercol";

const Member = () => {
  return (
    <div className="App" style={{ borderTop: "1px solid black" }}>
      <section>
        <MDBContainer className="xs:max-w-full sm:max-w-7xl">
          <MDBRow className="pt-0 pb-0 xs:px-5 sm:px-5 md:px-0">
            <MDBCol className="d-flex pt-5 pb-0 pe-5">
              <div className="d-flex flex-column w-100">
                <p className="text-5xl font-black text-uppercase text-black">
                  Meet Our
                </p>
                <p
                  className="text-6xl font-black text-uppercase pt-2"
                  style={{ color: "#AE023E" }}
                >
                  Team
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
      <section>
        <MDBContainer className="xs:max-w-full sm:max-w-7xl">
          <MDBRow className="pt-5 py-4 xs:px-5 sm:px-5 md:px-0">
            <div className="d-inline-flex p-2">
              <p className="font-black text-uppercase xs:text-xl md:text-3xl">
                Member
              </p>
            </div>
            <Memberimage></Memberimage>
            <div className="d-inline-flex p-2 pt-5">
              <p className="font-black text-uppercase xs:text-xl md:text-3xl">
                Advisor
              </p>
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
