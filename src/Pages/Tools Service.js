import React from "react";
/* Routes */
import { Route, Routes } from "react-router";
/* MDBootstrap */
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
/* Images */
import vr2 from "../Images/vr-2.png";
import PeopleIcon from "@mui/icons-material/People";
import SchoolIcon from "@mui/icons-material/School";

/* Components */

import Toolsimage from "../Components/Tools";

const Toolservice = () => {
  return (
    <div className="App" style={{ borderTop: "1px solid black" }}>
      <section>
        <MDBContainer className="xs:max-w-full sm:max-w-7xl">
          <MDBRow className="pt-0 pb-5 xs:px-5 sm:px-5 md:px-0">
            <MDBCol className="d-flex pt-5 pb-0 pe-5">
              <div className="d-flex flex-column w-100">
                <p className="font-black text-uppercase text-black xs:text-2xl md:text-5xl">
                  Tools
                </p>
                <p className="font-black text-uppercase pt-2 xs:text-2xl md:text-5xl">
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
          <MDBRow>
            <MDBCol>
              <div className="d-inline-flex p-2">
                <h4 className="fw-bold text-uppercase text-black ps-2">
                  Tools
                </h4>
              </div>
            </MDBCol>
          </MDBRow>
          {/* Tools image */}
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
              <div className="d-inline-flex p-2">
                <h4 className="fw-bold text-uppercase text-black ps-2">
                  Service
                </h4>
              </div>
              <MDBCol className="ps-4 pt-2">
                <MDBRow className="pt-2">
                  <MDBCol
                    size="1"
                    style={{ width: "3.33%" }}
                    className="me-4 md:me-0"
                  >
                    <PeopleIcon style={{ color: "#AE023E" }} />
                  </MDBCol>
                  <MDBCol>
                    <p className="fw-bold">Research consultation</p>
                    <p>
                      We are open to research project consultant or
                      collaboration and sharing tools, etc.
                    </p>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol
                    size="1"
                    style={{ width: "3.33%" }}
                    className="me-4 md:me-0"
                  >
                    <SchoolIcon style={{ color: "#AE023E" }} />
                  </MDBCol>
                  <MDBCol>
                    <p className="fw-bold">Coursework and workshop</p>
                    <p>
                      We are open to holding neuroscience seminar and EEG,
                      neuroscience, neurotechnology.
                    </p>
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
