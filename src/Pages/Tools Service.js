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
// Lotties
import Lottie from "react-lottie-player";
import Animation from "../Components/Animation.json";

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

  // Lotties
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000); // Set the delay in milliseconds (3 seconds in this example)
    return () => clearTimeout(timer);
  }, []);

  const isDesktopWidth = window.innerWidth > 1600;
  const isMobileWidth = window.innerWidth < 420;

  return (
    <div className={`App ${isDesktopWidth || isMobileWidth ? "" : "px-5"}`}>
      {!loaded && (
        <div
          className="loading-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "white",
            zIndex: 9999,
          }}
        >
          <Lottie
            loop
            animationData={Animation}
            play
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            speed={1.5} // Adjust the animation speed as needed
            onEvent={() => setLoaded(true)} // Set the loaded state when the animation ends
            eventListeners={[
              {
                eventName: "complete",
                callback: () => setLoaded(true),
              },
            ]}
          />
        </div>
      )}
      <section style={{ borderTop: "1px solid black", marginTop: "1.5rem" }}>
        <MDBContainer className="xs:max-w-full sm:max-w-7xl">
          <MDBRow className="pt-0 xs:pb-5 xs:px-5 sm:px-5 sm:pb-0 md:px-0">
            <MDBCol className="d-flex pt-5 pb-0 pe-5">
              <div className="d-flex flex-column w-100">
                <p
                  className="font-black text-uppercase text-black mb-0 xs:text-2xl md:text-5xl"
                  style={{ fontFamily: "FontMedium" }}
                >
                  Tools
                </p>
                <p
                  className="font-black text-uppercase xs:pt-6 xs:text-2xl md:text-5xl md:pt-0"
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
                  Service
                </p>
                <div
                  className="d-flex justify-content-between mt-auto"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </MDBCol>
            <MDBCol md="4" className="p-0 d-none d-sm-block">
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

          <MDBRow className="xs:px-4 sm:px-0">
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
          <MDBRow className="px-4 sm:px-0">
            <Toolsimage></Toolsimage>
          </MDBRow>
          {/* <MDBRow className="mt-4">
            <MDBCol>
              <div className="text-center">
                <MDBBtn outline className="mx-2" color="secondary">
                  LOAD MORE
                </MDBBtn>
              </div>
            </MDBCol>
          </MDBRow> */}
          <MDBRow className="pt-5 xs:px-4 sm:px-0">
            <MDBCol>
              <div className="d-inline-flex p-2">
                <p
                  className="font-black text-uppercase xs:text-xl md:text-3xl"
                  style={{ fontFamily: "FontMedium" }}
                >
                  Service
                </p>
              </div>
              <MDBCol className="xs:px-2 sm:ps-4 pt-2">
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
                      className="fw-bold text-xl"
                      style={{ fontFamily: "FontMedium" }}
                    >
                      Research consultation
                    </p>
                    <p className="text-lg">
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
                    <p
                      className="fw-bold text-xl"
                      style={{ fontFamily: "FontMedium" }}
                    >
                      Coursework and workshop
                    </p>
                    <p className="text-lg">
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
