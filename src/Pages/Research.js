import React from "react";
import { useState, useEffect, setIsLoaded, useContext } from "react";
/* MDBootstrap */
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
/* Images */
import vr2 from "../Images/vr-2.png";
import ClusterAccordion from "../Components/ClusterAccordion";
import Lottie from "react-lottie-player";
import Animation from "../Components/Animation.json";
import Container from "@mui/material/Container";
// Language
import { LanguageContext } from "../Components/LanguageContext";

const Research = () => {
  const [memberCover, setMembercover] = useState([]);
  useEffect(() => {
    fetch(
      "http://10.2.14.173/api/uploadfiles?populate=fileupload&filters[filename][$eq]=research_cover_image"
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

  const { selectedLanguage, handleLanguageSwitch } =
    useContext(LanguageContext);

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
          <MDBContainer className="xs:max-w-full sm:max-w-5xl pb-4">
            <MDBRow className="pt-0 pb-5 xs:px-5 sm:px-5 md:px-0">
              <MDBCol className="d-flex pt-5 pb-0 pe-5">
                <div className="d-flex flex-column w-100">
                  <p
                    className="font-black text-uppercase text-black xs:text-3xl md:text-5xl"
                    style={{ fontFamily: "MyFont" }}
                  >
                    {selectedLanguage === "en" ? "Research" : "กลุ่ม"}
                  </p>
                  <p
                    className="font-black fw-light text-uppercase  xs:text-2xl md:text-4xl"
                    style={{ fontFamily: "FontLight" }}
                  >
                    {selectedLanguage === "en"
                      ? "      Clusters"
                      : "        วิจัย"}
                  </p>
                  <div
                    className="d-flex justify-content-between mt-auto"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </MDBCol>
              <MDBCol md="4" className="p-0 d-none d-sm-block ">
                {/* <img
                src={vr2}
                class="image-fluid"
                id="cluster-img"
                style={{ height: "350px" }}
              /> */}
                {/* {memberCover.map((member) => (
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
                      "http://10.2.14.173" +
                      member.attributes.fileupload.data[0]?.attributes.url
                    }
                  />
                ))} */}
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        <ClusterAccordion></ClusterAccordion>
      </Container>
    </div>
  );
};

export default Research;
