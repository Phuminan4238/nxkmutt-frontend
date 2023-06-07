import React from "react";
import { useState, useEffect, setIsLoaded } from "react";
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
  const [memberCover, setMembercover] = useState([]);
  useEffect(() => {
    fetch(
      "https://10.35.29.186/api/uploadfiles?populate=fileupload&filters[filename][$eq]=tools_cover_image"
    )
      .then((res) => res.json())
      .then((result) => {
        setMembercover(result.data);
      });
  }, []);
  return (
    <div className="App">
      <section style={{ borderTop: "1px solid black", marginTop: "1.5rem" }}>
        <MDBContainer className="xs:max-w-full sm:max-w-7xl">
          <MDBRow className="pt-0 pb-5 xs:px-5 sm:px-5 md:px-0">
            <MDBCol className="d-flex pt-5 pb-0 pe-5">
              <div className="d-flex flex-column w-100">
                <p
                  className="font-black text-uppercase text-black mb-0 xs:text-2xl md:text-5xl"
                  style={{ fontFamily: "FontMedium" }}
                >
                  Tools
                </p>
                <p
                  className="font-black text-uppercase pt-0 xs:text-2xl md:text-5xl"
                  style={{ fontFamily: "FontMedium" }}
                >
                  <span
                    style={{
                      fontSize: "6rem",
                      color: "#AE023E",
                      fontWeight: "normal",
                      fontFamily: "FontLight",
                    }}
                  >
                    &
                  </span>{" "}
                  Serivce
                </p>
                <div
                  className="d-flex justify-content-between mt-auto"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </MDBCol>
            <MDBCol md="4" className="p-0">
              {/* <img
                src={vr2}
                class="image-fluid"
                id="cluster-img"
                style={{ height: "350px" }}
              /> */}
              {memberCover.map((member) => (
                <img
                  className="image-fluid"
                  style={{
                    width: "-webkit-fill-available",
                    height: "300px",
                    // maxWidth: "-webkit-fill-available",
                    // height: "400px",
                    // objectFit: "contain",
                    // verticalAlign: "top",
                  }}
                  id="cluster-img"
                  src={
                    "https://10.35.29.186" +
                    member.attributes.fileupload.data[0]?.attributes.url
                  }
                />
              ))}
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              <div className="d-inline-flex p-2">
                <p
                  className="font-black text-uppercase xs:text-xl md:text-3xl"
                  style={{ fontFamily: "FontMedium" }}
                >
                  Tools
                </p>
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
                <p
                  className="font-black text-uppercase xs:text-xl md:text-3xl"
                  style={{ fontFamily: "FontMedium" }}
                >
                  Service
                </p>
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
                    <p
                      className="fw-bold text-lg"
                      style={{ fontFamily: "FontMedium" }}
                    >
                      Research consultation
                    </p>
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
                    <p className="fw-bold" style={{ fontFamily: "FontMedium" }}>
                      Coursework and workshop
                    </p>
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
