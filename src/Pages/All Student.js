import React from "react";
import { useState, useEffect, setIsLoaded, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
/* Routes */
import { Route, Routes, useParams } from "react-router";
/* Material UI */
import ArticleIcon from "@mui/icons-material/Article";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import EastIcon from "@mui/icons-material/East";
/* MDBootstrap */
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
} from "mdb-react-ui-kit";
/* Icon */
import SchoolIcon from "@mui/icons-material/School";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DescriptionIcon from "@mui/icons-material/Description";
/* Components */
import MemberDetailimage from "../Components/MemberDetailimage";
// Lotties
import Lottie from "react-lottie-player";
import Animation from "../Components/Animation.json";
import { useMediaQuery } from "react-responsive";
import Container from "@mui/material/Container";
import { LanguageContext } from "../Components/LanguageContext";

function ImageDesktop({ title }) {
  let { id } = useParams();
  const [uploadfiles, setUploadfiles] = useState({});

  useEffect(() => {
    axios
      .get(
        `http://10.2.14.173/api/members?populate=uploadfiles.fileupload&filters[usertype][$eq]=research_assistance&sort=sort`
      )
      .then((response) => {
        setUploadfiles(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const [otherStudents, setOtherStudents] = useState([]);
  useEffect(() => {
    let isMounted = true;

    const instance = axios.create({
      baseURL: "http://10.2.14.173/api/",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    async function fetchData() {
      try {
        const response = await instance.get(
          "members?populate=uploadfiles.fileupload&filters[usertype][$eq]=research_assistance&sort=sort"
        );
        if (isMounted) {
          setOtherStudents(response.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    if (otherStudents.length === 0) {
      fetchData();
    }

    return () => {
      isMounted = false;
    };
  }, [otherStudents]);

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
                <Link to="/team-members">
                  <a
                    style={{ color: "#AE023E" }}
                    className="xs:text-lg sm:text-xl"
                  >
                    STUDENT MEMBER
                  </a>
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
              <MDBCol className="col-md-8 col-12 xs:ps-4 sm:ps-0 pt-1">
                <span
                  className="text-uppercase fw-bold xs:text-lg sm:text-xl"
                  style={{ fontFamily: "FontMedium" }}
                >
                  ALL STUDENT
                </span>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        {/* the rest student
         */}
        <section>
          <MDBContainer className="pt-4 xs:max-w-full sm:max-w-5xl sm:px-5 md:px-0">
            {otherStudents.length > 0 &&
              otherStudents
                .filter((member) => member.id !== uploadfiles.id) // Exclude the already rendered student
                .map((member) => (
                  <MDBRow
                    className="pt-0 pb-5 xs:px-5 sm:px-5 md:px-0"
                    key={member.id}
                    style={{
                      borderBottom: "1px solid black",
                      marginTop: "1.5rem",
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "nowrap", // Ensure items stay in the same row
                    }}
                  >
                    <MDBCol
                      className="d-flex pb-0 pe-5"
                      style={{ flex: "1 1 60%", minWidth: "0" }} // Ensure text container can shrink
                    >
                      <div className="d-flex flex-column w-100">
                        <p
                          className="fw-bold text-uppercase text-black xs:text-xl sm:text-4xl"
                          style={{ fontFamily: "MyFont" }}
                        >
                          {selectedLanguage === "en"
                            ? `${member.attributes?.name_en || ""}`
                            : `${member.attributes?.name_th || ""}`}
                          <span
                            style={{
                              paddingLeft: "0.5rem",
                              fontFamily: "FontMedium",
                            }}
                          >
                            (
                          </span>
                          {selectedLanguage === "en"
                            ? `${member.attributes?.nickname_en || ""}`
                            : `${member.attributes?.nickname_th || ""}`}
                          )
                        </p>
                        <p
                          className="fw-bold text-uppercase text-black xs:text-xl sm:text-4xl"
                          style={{ fontFamily: "MyFont" }}
                        >
                          {selectedLanguage === "en"
                            ? `${member.attributes?.surname_en || ""}`
                            : `${member.attributes?.surname_th || ""}`}
                        </p>

                        <MDBRow className="pt-2"></MDBRow>
                        {member.attributes?.bio_text_en ? (
                          <p
                            className="fw-normal text-sm pt-3"
                            style={{
                              wordWrap: "break-word",
                              whiteSpace: "normal", // Ensure text breaks only at words
                            }}
                            dangerouslySetInnerHTML={{
                              __html:
                                selectedLanguage === "en"
                                  ? member.attributes.bio_text_en
                                  : member.attributes.bio_text_th,
                            }}
                          />
                        ) : (
                          <p className="fw-normal text-sm pt-3">-</p>
                        )}
                      </div>
                    </MDBCol>
                    <MDBCol
                      md="4"
                      className="xs:px-5 sm:px-5 md:px-0"
                      style={{ flex: "0 0 auto" }} // Prevent the image from shrinking
                    >
                      <div className="d-flex flex-column h-fit">
                        <MDBCardImage
                          className="rounded-4"
                          src={
                            "http://10.2.14.173" +
                              member.attributes?.uploadfiles.data[0]?.attributes
                                .fileupload.data[0]?.attributes.url || "-"
                          }
                          position="top"
                          alt="..."
                          style={{
                            width: "100%",
                            objectFit: "initial",
                            borderRadius: "0px",
                            alignSelf: "center",
                          }}
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>
                ))}
          </MDBContainer>
        </section>
      </Container>
    </div>
  );
}

function ImageMobile({ title }) {
  let { id } = useParams();
  const [uploadfiles, setUploadfiles] = useState({});

  useEffect(() => {
    axios
      .get(
        `http://10.2.14.173/api/members?populate=uploadfiles.fileupload&filters[usertype][$eq]=research_assistance&sort=sort`
      )
      .then((response) => {
        setUploadfiles(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const [otherStudents, setOtherStudents] = useState([]);
  useEffect(() => {
    let isMounted = true;

    const instance = axios.create({
      baseURL: "http://10.2.14.173/api/",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    async function fetchData() {
      try {
        const response = await instance.get(
          "members?populate=uploadfiles.fileupload&filters[usertype][$eq]=research_assistance&sort=sort"
        );
        if (isMounted) {
          setOtherStudents(response.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    if (otherStudents.length === 0) {
      fetchData();
    }

    return () => {
      isMounted = false;
    };
  }, [otherStudents]);

  // Lotties
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000); // Set the delay in milliseconds (3 seconds in this example)
    return () => clearTimeout(timer);
  }, []);

  const { selectedLanguage, handleLanguageSwitch } =
    useContext(LanguageContext);

  return (
    <div className="App">
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
        <MDBContainer className="pt-5 xs:max-w-full sm:max-w-7xl sm:px-5 md:px-0 ">
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
              <Link to="/team-members">
                <span
                  style={{ color: "#AE023E" }}
                  className="xs:text-md sm:text-xl"
                >
                  STUDENT MEMBER
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
            <MDBCol className="col-md-8 col-12 xs:ps-4 sm:ps-0 pt-1">
              <span
                className="text-uppercase fw-bold xs:text-md sm:text-xl"
                style={{ fontFamily: "FontMedium" }}
              >
                ALL STUDENT
              </span>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* section 3
       */}
      <section>
        <MDBContainer className="pt-4 xs:max-w-full sm:max-w-7xl sm:px-5 md:px-0">
          {otherStudents.length > 0 &&
            otherStudents
              .filter((member) => member.id !== uploadfiles.id) // Exclude the already rendered student
              .map((member) => (
                <MDBRow
                  className="pt-0 pb-2  xs:px-5 sm:px-5 md:px-0"
                  key={member.id}
                  style={{
                    borderBottom: "1px solid black",
                    marginTop: "1.5rem",
                  }}
                >
                  <MDBCol md="4" className="xs:px-4 sm:px-5 md:px-0 pb-4">
                    <div className="d-flex justify-content-center">
                      <MDBCardImage
                        className="rounded-4"
                        src={
                          "http://10.2.14.173" +
                            member.attributes?.uploadfiles.data[0]?.attributes
                              .fileupload.data[0]?.attributes.url || "-"
                        }
                        position="top"
                        alt="..."
                        style={{
                          height: "240px",
                          width: "auto",
                          objectFit: "initial",
                          borderRadius: "0px",
                          alignSelf: "start",
                        }}
                      />
                    </div>
                  </MDBCol>
                  <MDBCol className="d-flex pb-0 ">
                    <div className="d-flex flex-column w-100">
                      <p
                        className="fw-bold text-uppercase text-black xs:text-sm text-center mb-0"
                        style={{ fontFamily: "MyFont" }}
                      >
                        {/* {member.attributes?.name_en || "-"} */}
                        {selectedLanguage === "en"
                          ? `${member.attributes?.name_en || ""} `
                          : `${member.attributes?.name_th || ""} `}
                        <span
                          style={{
                            paddingLeft: "0.5rem",
                            fontFamily: "FontMedium",
                          }}
                        >
                          (
                        </span>
                        {selectedLanguage === "en"
                          ? `${member.attributes?.nickname_en || ""} `
                          : `${member.attributes?.nickname_th || ""} `}
                        <span>)</span>
                      </p>
                      <p
                        className="fw-bold text-uppercase text-black xs:text-sm text-center"
                        style={{ fontFamily: "MyFont" }}
                      >
                        {selectedLanguage === "en"
                          ? `${member.attributes?.surname_en || ""} `
                          : `${member.attributes?.surname_th || ""} `}
                      </p>

                      {/* <p
                        className="fw-normal text-normal pt-3"
                        style={{ maxWidth: "90%" }}
                      >
                        {member.attributes?.bio_en || "-"}
                      </p> */}

                      <p
                        className="fw-normal text-sm pt-3"
                        style={{
                          // wordWrap: "break-word",
                          wordBreak: "break-word",
                        }}
                      >
                        {selectedLanguage === "en"
                          ? `${member.attributes?.bio_text_en || ""} `
                          : `${member.attributes?.bio_text_th || ""} `}
                      </p>
                    </div>
                  </MDBCol>
                </MDBRow>
              ))}
        </MDBContainer>
      </section>
    </div>
  );
}

export default function Allstudent() {
  const isMobile = useMediaQuery({ query: "(max-width: 760px)" });

  return (
    <>
      {/* Render the Image component when on mobile */}
      {isMobile && <ImageMobile />}

      {/* Hide the Post component when on mobile */}
      {!isMobile && <ImageDesktop />}
    </>
  );
}
