import React from "react";
import { useState, useEffect, setIsLoaded } from "react";
/* MDBootstrap */
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
/* Images*/
import vr2 from "../Images/vr-2.png";
/* Components */
import Memberimage from "../Components/Memberimage";
import Memberalumni from "../Components/Memberalumni";
import Memberadvisor from "../Components/Memberadvisor";
import Membercol from "../Components/Membercol";
import membericon from "../Images/vr-2.png";
// Lotties
import Lottie from "react-lottie-player";
import Animation from "../Components/Animation.json";
// Icon
import EastIcon from "@mui/icons-material/East";
import Container from "@mui/material/Container";

const Member = ({ imageUrl }) => {
  const [memberCover, setMembercover] = useState([]);
  useEffect(() => {
    fetch(
      "https://10.35.29.186/api/uploadfiles?populate=fileupload&filters[filename][$eq]=member_cover_image"
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

  const [iconStyle, setIconStyle] = useState({
    color: "#AE023E",
    marginLeft: 0,
  });

  const isDesktopWidth = window.innerWidth > 1600;
  const isMobileWidth = window.innerWidth < 420;

  return (
    <div className={`App ${isDesktopWidth || isMobileWidth ? "" : "px-0"}`}>
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
      <Container
        maxWidth="lg"
        disableGutters={true}
        style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 5px 15px 0px" }}
      >
        <section style={{ borderTop: "1px solid black", marginTop: "1.5rem" }}>
          <MDBContainer className="xs:max-w-full sm:max-w-5xl">
            <MDBRow className="pt-0 pb-0 xs:px-5 sm:px-5 md:px-0">
              <MDBCol className="d-flex pt-5 pb-0 pe-5">
                <div className="d-flex flex-column w-100">
                  <p
                    className="font-black text-uppercase text-black xs:text-2xl md:text-5xl"
                    style={{ fontFamily: "MyFont" }}
                  >
                    Meet Our
                  </p>
                  <p
                    className="font-black text-uppercase pt-2 xs:text-3xl md:text-6xl"
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
              {/* <MDBCol md="4" className="p-0">
              {memberCover.length > 0 && (
                <img
                  className={`image-fluid ${
                    memberCover[0]?.attributes.fileupload.data[0]?.attributes
                      .url
                      ? "loaded"
                      : ""
                  }`}
                  style={{
                    width: "-webkit-fill-available",
                    height: "320px",
                  }}
                  src={
                    "https://10.35.29.186" +
                    memberCover[0]?.attributes.fileupload.data[0]?.attributes
                      .url
                  }
                  alt="Member Cover"
                />
              )}
            </MDBCol> */}
            </MDBRow>
          </MDBContainer>
        </section>

        <section>
          <MDBContainer className="xs:max-w-full sm:max-w-5xl">
            <MDBRow className="pt-5 py-4 xs:px-5 sm:px-5 md:px-0">
              <div className="d-inline-flex xs:px-4 sm:p-2">
                <p
                  className="font-black text-uppercase xs:text-xl md:text-3xl"
                  style={{ fontFamily: "MyFont" }}
                >
                  Member
                </p>
              </div>
              <Memberimage></Memberimage>
              <div className="d-inline-flex xs:pt-0 sm:pt-5 xs:px-4 sm:p-2">
                <p
                  className="font-black text-uppercase xs:text-xl md:text-3xl"
                  style={{ fontFamily: "MyFont" }}
                >
                  Advisor & Collaborator
                </p>
              </div>
              <Memberadvisor></Memberadvisor>
              <div className="d-inline-flex xs:pt-0 sm:pt-5 xs:px-4 sm:p-2">
                <h3
                  className="font-black text-uppercase xs:text-xl md:text-3xl"
                  style={{ fontFamily: "MyFont" }}
                >
                  International Collaborators
                </h3>
              </div>
              <Memberalumni></Memberalumni>
              <div className="d-flex justify-content-between align-items-center xs:pt-0 sm:pt-5 xs:px-4 sm:p-2 flex-mobile-column">
                <p
                  className="font-black text-uppercase xs:text-xl md:text-3xl"
                  style={{ fontFamily: "MyFont" }}
                >
                  Students & Research Assistants & Alumni
                </p>
                <Link
                  to={`/Student-Detail/9`}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    window.location.replace(`/Student-Detail/9`);
                  }}
                  className="image-link"
                >
                  <div className="sm:d-inline-flex text-red py-2 md:py-4 hide-on-mobile">
                    <h5
                      href="#"
                      className="pe-4 hide-on-mobile"
                      style={{ color: "#AE023E" }}
                    >
                      Find out more
                    </h5>
                    <EastIcon
                      style={iconStyle}
                      className="hide-on-mobile"
                    ></EastIcon>
                  </div>
                </Link>
              </div>
              <Membercol></Membercol>
            </MDBRow>
          </MDBContainer>
        </section>
      </Container>
    </div>
  );
};

export default Member;
