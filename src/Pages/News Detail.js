import React from "react";
import { useState, useEffect, setIsLoaded, useContext } from "react";
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
import { LanguageContext } from "../Components/LanguageContext";
import { useMediaQuery } from "react-responsive";

function ImageDesktop({ title }) {
  let { id } = useParams();
  const [tags, setTags] = useState({});
  useEffect(() => {
    fetch(`http://10.2.14.173/api/events/${id}?populate=uploadfiles.fileupload`)
      .then((res) => res.json())
      .then((result) => {
        setTags(result.data);
      });
  }, [id]);

  const [publicationfiles, setPuplicataionfiles] = useState([]);
  useEffect(() => {
    fetch("http://10.2.14.173/api/publications?populate=id")
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
                <Link to="/News-and-Activities">
                  <span
                    style={{ color: "#AE023E" }}
                    className="xs:text-lg sm:text-xl"
                  >
                    {/* {title} */}
                    NEWS
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
                  style={{ fontFamily: "FontMedium", fontSize: "1.3rem" }}
                >
                  {selectedLanguage === "en"
                    ? `${tags.attributes?.name_en || ""} 
                      `
                    : `${tags.attributes?.name_th || ""} 
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
                      ? `${tags.attributes?.name_en || ""} 
                      `
                      : `${tags.attributes?.name_th || ""} 
                      `}
                  </p>
                </div>
              </MDBCol>
              <MDBCol md="5" className="p-0">
                <MDBCardImage
                  className="rounded-0"
                  src={
                    "http://10.2.14.173" +
                      tags.attributes?.uploadfiles.data[0]?.attributes
                        .fileupload.data[0]?.attributes.url || "-"
                  }
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
                    height: "300px",
                    objectFit: "initial",
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
          <MDBContainer className="xs:max-w-full sm:max-w-5xl">
            <MDBRow className="pt-4 pb-0 xs:px-5 sm:px-5 md:px-0">
              {/* Current Affiliations */}
              <MDBRow className="pt-4">
                {tags.attributes?.content_en ? (
                  <p
                    className="fw-normal text-md pt-3"
                    style={{
                      wordWrap: "break-word",
                      wordBreak: "break-word",
                      maxWidth: "90%",
                    }}
                    dangerouslySetInnerHTML={{
                      __html:
                        selectedLanguage === "en"
                          ? tags.attributes.content_en
                          : tags.attributes.content_th,
                    }}
                  />
                ) : (
                  <p className="fw-normal text-md pt-3">wait fot content</p>
                )}
              </MDBRow>

              {/*  Grants */}
              {/* <MDBRow>
                <h5
                  className="fw-bold text-uppercase ps-2 pt-4"
                  style={{ color: "#A02040" }}
                >
                  More news detail....
                </h5>
              </MDBRow> */}
              {/* <MDBRow className="pt-0 pb-0">
                <MDBCardImage
                  className="rounded-0"
                  // src={
                  //   "http://10.2.14.173" +
                  //   uploadfiles.attributes?.uploadfiles.data[0]?.attributes
                  //     .fileupload.data[0]?.attributes.url
                  // }
                  src={vr2}
                  position="top"
                  alt="..."
                  style={{
                    //   height: "350px",
                    // width: "100%",
                    height: "400px",
                    objectFit: "initial",
                    borderRadius: "0px",
                    alignSelf: "center",
                    // objectFit: "contain",
                  }}
                />
              </MDBRow> */}
              {/* Current Affiliations */}
              {/* <MDBRow className="pt-4 ">
                <p>More news detail....</p>
              </MDBRow> */}
            </MDBRow>
          </MDBContainer>
        </section>
      </Container>
    </div>
  );
}

function ImageMobile({ title }) {
  let { id } = useParams();
  const [tags, setTags] = useState({});
  useEffect(() => {
    fetch(`http://10.2.14.173/api/events/${id}?`)
      .then((res) => res.json())
      .then((result) => {
        setTags(result.data);
      });
  }, [id]);

  const [publicationfiles, setPuplicataionfiles] = useState([]);
  useEffect(() => {
    fetch("http://10.2.14.173/api/publications?populate=id")
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
                <Link to="/News-and-Activities">
                  <span style={{ color: "#AE023E" }} className="xs:text-md">
                    {/* {title} */}
                    NEWS
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
                    ? `${tags.attributes?.name_en || ""} 
                      `
                    : `${tags.attributes?.name_th || ""} 
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
                    {tags.attributes?.name_en || "-"}
                  </p>
                </div>
              </MDBCol>
              <MDBCol md="5" className="p-0 pe-5">
                <MDBCardImage
                  className="rounded-0"
                  src={news1}
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
                    height: "200px",
                    objectFit: "initial",
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
          <MDBContainer className="xs:max-w-full sm:max-w-5xl">
            <MDBRow className="pt-4 pb-0 xs:px-5 sm:px-5 md:px-0">
              {/* Current Affiliations */}
              <MDBRow className="pt-4">
                {tags.attributes?.content_en_markdown ? (
                  <p
                    className="fw-normal text-md pt-3"
                    style={{
                      wordWrap: "break-word",
                      wordBreak: "break-word",
                      maxWidth: "90%",
                    }}
                    dangerouslySetInnerHTML={{
                      __html:
                        selectedLanguage === "en"
                          ? tags.attributes.content_en_markdown
                          : tags.attributes.content_th_markdown,
                    }}
                  />
                ) : (
                  <p className="fw-normal text-md pt-3">-</p>
                )}
              </MDBRow>

              {/*  Grants */}
              <MDBRow>
                <p
                  className="fw-bold text-uppercase ps-2 pt-4"
                  style={{ color: "#A02040" }}
                >
                  <p>Wait for Title</p>
                </p>
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
