import React from "react";
import { useState, useEffect, setIsLoaded, useContext } from "react";
import { Link } from "react-router-dom";
/* Routes */
import { Route, Routes, useParams } from "react-router";
/* Material UI */
import ArticleIcon from "@mui/icons-material/Article";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
/* MDBootstrap */
import { MDBCardImage, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
/* Images */
import vr2 from "../Images/vr-2.png";
import clusterimg1 from "../Images/cluster-1.png";
// Lotties
import Lottie from "react-lottie-player";
import Animation from "../Components/Animation.json";
import Container from "@mui/material/Container";
import { LanguageContext } from "../Components/LanguageContext";
import { useMediaQuery } from "react-responsive";

function ImageDesktop({ title }) {
  let { id } = useParams();
  console.log(id);
  const [tags, setTags] = useState({});
  useEffect(() => {
    fetch(`https://10.35.29.186/api/contents/${id}?`)
      .then((res) => res.json())
      .then((result) => {
        setTags(result.data);
      });
  }, [id]);

  const [publicationfiles, setPuplicataionfiles] = useState([]);
  useEffect(() => {
    fetch("https://10.35.29.186/api/publications?populate=id")
      .then((res) => res.json())
      .then((result) => {
        setPuplicataionfiles(result.data);
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
          <MDBContainer className="pt-5 xs:max-w-full sm:max-w-5xl sm:px-5 md:px-0 ">
            {/* Title */}
            <MDBRow className="pt-0 pb-0 xs:px-5 sm:px-5 md:px-0">
              <MDBCol
                className="col-2 text-uppercase fw-bold pt-1 sm:pb-0"
                style={{
                  width: "-webkit-max-content",
                  fontFamily: "FontMedium",
                  // fontSize: "1.3rem",
                }}
              >
                {/* color: "#AE023E", */}
                <Link to="/Research">
                  <span
                    style={{ color: "#AE023E" }}
                    className="xs:text-lg sm:text-xl"
                  >
                    {/* {title} */}
                    RESEARCH
                  </span>
                </Link>
              </MDBCol>
              <MDBCol className="col-1 p-0 me-3" style={{ width: "3.33%" }}>
                <span>
                  <KeyboardArrowRightIcon
                    style={{
                      width: "2em",
                      height: "1.4em",
                      color: "#2F3437 !important",
                    }}
                  ></KeyboardArrowRightIcon>
                </span>
              </MDBCol>
              <MDBCol className="col-md-8 col-12 text-uppercase fw-bold pt-1 sm:pb-0">
                <span
                  className="text-uppercase fw-bold xs:text-lg sm:text-xl"
                  style={{ fontFamily: "FontMedium" }}
                >
                  {selectedLanguage === "en"
                    ? `${tags.attributes?.header_en || ""} 
                      `
                    : `${tags.attributes?.header_th || ""} 
                      `}
                </span>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          {/* Container  */}
          <MDBContainer className="xs:max-w-full sm:max-w-5xl pt-5 xs:px-5 sm:px-1">
            <MDBRow className="pt-0 pb-0 xs:px-5 sm:px-1">
              <MDBCol className="d-flex ps-0 pb-0 pe-5">
                <div className="d-flex flex-column w-100">
                  <p
                    className="fw-bolder pt-4 xs:text-xl sm:text-4xl"
                    style={{
                      color: "#AE023E",
                      fontFamily: "MyFont",
                      lineHeight: "1.6",
                    }}
                  >
                    {selectedLanguage === "en"
                      ? `${tags.attributes?.header_en || ""} 
                      `
                      : `${tags.attributes?.header_th || ""} 
                      `}
                  </p>
                </div>
              </MDBCol>
              <MDBCol md="7" className="p-0">
                <MDBCardImage
                  className="rounded-0"
                  src={clusterimg1}
                  position="top"
                  alt="..."
                  // style={{
                  //   height: "380px",
                  //   width: "-webkit-fit-content",
                  //   objectFit: "initial",
                  //   borderRadius: "0px",
                  //   alignSelf: "center",
                  // }}
                  style={{
                    //   height: "350px",
                    // width: "100%",
                    // height: "400px",
                    objectFit: "fill",
                    // height: "500px",
                    borderRadius: "0px",
                    alignSelf: "center",
                    // objectFit: "contain",
                  }}
                />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        <section>
          <MDBContainer className="xs:max-w-full sm:max-w-5xl pt-5 xs:px-5 sm:px-1">
            <MDBRow className="pt-0 pb-0 xs:px-5 sm:px-1">
              {/* Current Affiliations */}
              <MDBRow className="pt-4 px-0">
                <p>
                  {selectedLanguage === "en"
                    ? `${tags.attributes?.content_en || ""} 
                      `
                    : `${tags.attributes?.content_th || ""} 
                      `}
                </p>
              </MDBRow>

              {/*  Grants */}
              {/* <MDBRow>
                <h5
                  className="fw-bold text-capitalize ps-0 pt-4"
                  style={{ color: "#A02040", fontFamily: "FontMedium" }}
                >
                  Wait for Title
                </h5>
              </MDBRow> */}

              {/*  Awards */}
              {/* <MDBRow>
                <p
                  className="fw-bold text-initial text-black ps-0 pt-4"
                  style={{ fontFamily: "FontMedium" }}
                >
                  Wait for Relevant PIs:
                </p>
              </MDBRow>

              <MDBRow>
                <p
                  className="fw-bold text-initial text-black ps-0 pt-4"
                  style={{ fontFamily: "FontMedium" }}
                >
                  Wait for Relevant publications
                </p> */}
              {/* </MDBRow> */}
              <MDBRow className="pt-2">
                {/* {publicationfiles.map((member) => (
                  <>
                    <Link
                      to={member.attributes.url}
                      target="_blank"
                      style={{ color: "black" }}
                    >
                      <MDBCol md="11" key={member.id} className="pb-2 ">
                        <p style={{ display: "inline-block" }}>
                          <ArticleIcon
                            color="primary"
                            style={{ marginRight: "1rem" }}
                          />
                          {member.attributes.description_en}
                        </p>
                      </MDBCol>
                    </Link>
                  </>
                ))} */}
              </MDBRow>
            </MDBRow>
          </MDBContainer>
        </section>
      </Container>
    </div>
  );
}

function ImageMobile({ title }) {
  let { id } = useParams();
  console.log(id);
  const [tags, setTags] = useState({});
  useEffect(() => {
    fetch(`https://10.35.29.186/api/contents/${id}?`)
      .then((res) => res.json())
      .then((result) => {
        setTags(result.data);
      });
  }, [id]);

  const [publicationfiles, setPuplicataionfiles] = useState([]);
  useEffect(() => {
    fetch("https://10.35.29.186/api/publications?populate=id")
      .then((res) => res.json())
      .then((result) => {
        setPuplicataionfiles(result.data);
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
          <MDBContainer className="pt-5 xs:max-w-full sm:max-w-5xl sm:px-5 md:px-0 ">
            {/* Title */}
            <MDBRow className="pt-0 pb-0 xs:px-5 sm:px-5 md:px-0">
              <MDBCol
                className="col-2 text-uppercase fw-bold pt-1 sm:pb-0"
                style={{
                  width: "-webkit-max-content",
                  fontFamily: "FontMedium",
                  // fontSize: "1.3rem",
                }}
              >
                {/* color: "#AE023E", */}
                <Link to="/Research">
                  <span
                    style={{ color: "#AE023E" }}
                    className="xs:text-md sm:text-xl"
                  >
                    {/* {title} */}
                    RESEARCH
                  </span>
                </Link>
              </MDBCol>
              <MDBCol className="col-1 p-0 me-3" style={{ width: "3.33%" }}>
                <span>
                  <KeyboardArrowRightIcon
                    style={{
                      width: "2em",
                      height: "1.4em",
                      color: "#2F3437 !important",
                    }}
                  ></KeyboardArrowRightIcon>
                </span>
              </MDBCol>
              <MDBCol className="col-md-8 col-12 text-uppercase fw-bold pt-1 sm:pb-0">
                <span
                  className="text-uppercase fw-bold xs:text-md sm:text-xl"
                  style={{ fontFamily: "FontMedium" }}
                >
                  {selectedLanguage === "en"
                    ? `${tags.attributes?.header_en || ""} 
                      `
                    : `${tags.attributes?.header_th || ""} 
                      `}
                </span>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          {/* Container  */}
          <MDBContainer className="xs:max-w-full sm:max-w-5xl pt-5 xs:px-5 sm:px-1">
            <MDBRow className="pt-0 pb-0 xs:px-5 sm:px-1">
              <MDBCol className="d-flex ps-0 pb-0 pe-5">
                <div className="d-flex flex-column w-100">
                  <p
                    className="fw-bolder pt-4 xs:text-lg sm:text-4xl"
                    style={{
                      color: "#AE023E",
                      fontFamily: "MyFont",
                      lineHeight: "1.6",
                    }}
                  >
                    {selectedLanguage === "en"
                      ? `${tags.attributes?.header_en || ""} 
                      `
                      : `${tags.attributes?.header_th || ""} 
                      `}
                  </p>
                </div>
              </MDBCol>
              <MDBCol md="7" className="p-0">
                <MDBCardImage
                  className="rounded-4"
                  src={clusterimg1}
                  position="top"
                  alt="..."
                  // style={{
                  //   height: "380px",
                  //   width: "-webkit-fit-content",
                  //   objectFit: "initial",
                  //   borderRadius: "0px",
                  //   alignSelf: "center",
                  // }}
                  style={{
                    //   height: "350px",
                    // width: "100%",
                    // height: "400px",
                    objectFit: "fill",
                    // height: "500px",
                    borderRadius: "0px",
                    alignSelf: "center",
                    // objectFit: "contain",
                  }}
                />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        <section>
          <MDBContainer className="xs:max-w-full sm:max-w-5xl pt-2 xs:px-5 sm:px-1">
            <MDBRow className="pt-0 pb-0 xs:px-5 sm:px-1">
              {/* Current Affiliations */}
              <MDBRow className="pt-4 px-0">
                <p>
                  {selectedLanguage === "en"
                    ? `${tags.attributes?.content_en || ""} 
                      `
                    : `${tags.attributes?.content_th || ""} 
                      `}
                </p>
              </MDBRow>

              {/*  Grants */}

              {/*  Awards */}
              {/* <MDBRow>
                <p
                  className="fw-bold text-initial text-black ps-0 pt-4"
                  style={{ fontFamily: "FontMedium" }}
                >
                  Wait for Relevant PIs:
                </p>
              </MDBRow>

              <MDBRow>
                <p
                  className="fw-bold text-initial text-black ps-0 pt-4"
                  style={{ fontFamily: "FontMedium" }}
                >
                  Wait for Relevant publications
                </p>
              </MDBRow> */}
              <MDBRow className="pt-2">
                {/* {publicationfiles.map((member) => (
                  <>
                    <Link
                      to={member.attributes.url}
                      target="_blank"
                      style={{ color: "black" }}
                    >
                      <MDBCol md="11" key={member.id} className="pb-2 ">
                        <p style={{ display: "inline-block" }}>
                          <ArticleIcon
                            color="primary"
                            style={{ marginRight: "1rem" }}
                          />
                          {member.attributes.description_en}
                        </p>
                      </MDBCol>
                    </Link>
                  </>
                ))} */}
              </MDBRow>
            </MDBRow>
          </MDBContainer>
        </section>
      </Container>
    </div>
  );
}

export default function TagsDetail() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      {/* Mobile  */}
      {isMobile && <ImageMobile />}

      {/* Desktop  */}
      {!isMobile && <ImageDesktop />}
    </>
  );
}
