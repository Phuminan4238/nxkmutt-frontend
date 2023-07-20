import React from "react";
import { useState, useEffect, setIsLoaded, useContext } from "react";
import axios from "axios";
/* Routes */
import { Route, Routes, useParams } from "react-router";
/* Material UI */
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
/* MDBootstrap */
import { MDBCardImage, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
/* Images */
import vr2 from "../Images/vr-2.png";
import news1 from "../Images/new-1.png";
import { Link } from "react-router-dom";
// Lotties
import Lottie from "react-lottie-player";
import Animation from "../Components/Animation.json";
import Container from "@mui/material/Container";
import image1 from "../Images/participate-img1.png";
import image2 from "../Images/participate-img2.png";
import image3 from "../Images/participate-img3.png";
// Language
import { LanguageContext } from "../Components/LanguageContext";

function ParticipateDetail({ title }) {
  const { selectedLanguage, handleLanguageSwitch } =
    useContext(LanguageContext);

  let { id } = useParams();
  const [uploadfiles, setUploadfiles] = useState({});
  const [publicationfiles, setPublicationfiles] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://10.35.29.186/api/participations/${id}?populate=uploadfiles.fileupload`
      )
      .then((response) => {
        setUploadfiles(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get("https://10.35.29.186/api/publications?populate=id")
      .then((response) => {
        setPublicationfiles(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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

  const handleLogoClick = () => {
    window.location.reload();
  };

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
          <MDBContainer className="pt-5 xs:max-w-full sm:max-w-5xl sm:px-5 md:px-0 ">
            <MDBRow className="pt-0 pb-0 xs:px-5 sm:px-5 md:px-0">
              <MDBCol
                className="col-2 text-uppercase fw-bold pt-2 sm:pb-0"
                style={{
                  width: "-webkit-max-content",
                  fontFamily: "FontMedium",
                  // fontSize: "1.3rem",
                }}
              >
                {/* color: "#AE023E", */}
                <Link to="/">
                  <a
                    style={{ color: "#AE023E" }}
                    className="xs:text-lg sm:text-xl"
                  >
                    {title}
                  </a>
                </Link>
              </MDBCol>
              <MDBCol className="col-2 p-0 me-3" style={{ width: "3.33%" }}>
                <span>
                  <KeyboardArrowRightIcon
                    style={{
                      width: "2em",
                      height: "2em",
                      color: "#2F3437 !important",
                    }}
                  ></KeyboardArrowRightIcon>
                </span>
              </MDBCol>
              <MDBCol className="col-md-8 col-12 xs:ps-4 sm:ps-0 pt-2">
                <span
                  className="text-uppercase fw-bold xs:text-lg sm:text-xl"
                  style={{ fontFamily: "FontMedium" }}
                >
                  {uploadfiles.attributes?.name_en || "-"}
                </span>
              </MDBCol>
            </MDBRow>
          </MDBContainer>

          <MDBContainer className="xs:max-w-full sm:max-w-5xl pt-5 xs:px-5 sm:px-1">
            <MDBRow className="pt-0 pb-0 xs:px-5 sm:px-1">
              <MDBCol md="4" className="p-0">
                <MDBCardImage
                  className="rounded-2"
                  src={
                    "https://10.35.29.186" +
                      uploadfiles.attributes?.uploadfiles.data[0]?.attributes
                        .fileupload.data[0]?.attributes.url || "-"
                  }
                  // src={image1}
                  // position="top"
                  // alt="..."
                  style={{
                    //   height: "350px",
                    // width: "100%",
                    // height: "400px",
                    // objectFit: "fill",
                    height: "500px",
                    borderRadius: "0px",
                    alignSelf: "center",
                    // objectFit: "contain",
                    objectFit: "initial",
                  }}
                />
              </MDBCol>
              <MDBCol className="d-flex ps-0 pb-0 ps-5">
                {/* <div className="d-flex flex-column w-100">
                  <h1
                    className="fw-bolder pt-4"
                    style={{ color: "#AE023E", fontFamily: "MyFont" }}
                  >
                    {uploadfiles.attributes?.name_en || "-"}
                  </h1>
                </div> */}
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        <section>
          <MDBContainer className="xs:max-w-full sm:max-w-5xl">
            <MDBRow className="pt-4 pb-0 xs:px-5 sm:px-5 md:px-0">
              {/* Current Affiliations */}
              <MDBRow className="pt-4 text-initial">
                {/* <p>More tools detail....</p> */}
              </MDBRow>

              {/*  Grants */}
              <MDBRow>
                {/* <h5
                  className="fw-bold text-uppercase ps-2 pt-4"
                  style={{ color: "#A02040", fontFamily: "MyFont" }}
                >
                  {uploadfiles.attributes?.content_en || "-"}
                </h5> */}
                {uploadfiles.attributes?.content_en ? (
                  <p
                    className="fw-normal text-md"
                    style={{
                      wordBreak: "break-word",
                      maxWidth: "80%",
                    }}
                    dangerouslySetInnerHTML={{
                      __html:
                        selectedLanguage === "en"
                          ? uploadfiles.attributes.content_en
                          : uploadfiles.attributes.content_th,
                    }}
                  />
                ) : (
                  <p className="fw-normal text-md pt-3">-</p>
                )}
              </MDBRow>
            </MDBRow>
          </MDBContainer>
        </section>
      </Container>
    </div>
  );
}

export default ParticipateDetail;
