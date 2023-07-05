import React from "react";
import { useState, useEffect, setIsLoaded } from "react";
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
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
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
import ReactMarkdown from "react-markdown";

function ImageDesktop({ title }) {
  let { id } = useParams();
  const [uploadfiles, setUploadfiles] = useState({});
  const [publicationfiles, setPublicationfiles] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://10.35.29.186/api/members/${id}?populate=uploadfiles.fileupload&populate=uploadfiles.image_original&populate=uploadfiles.image_square&populate=uploadfiles.image_medium&populate=uploadfiles.image_large&filters[usertype][$eq]=faculty_member&sort=sort"`
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
      .get(
        `https://10.35.29.186/api/publications?populate=*&filters[owner][id][$eq]=${id}`
      )
      .then((response) => {
        setPublicationfiles(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

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
          {/* Title */}
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
                  TEAM MEMBER
                </a>
              </Link>
            </MDBCol>
            <MDBCol className="col-1 p-0 me-3" style={{ width: "3.33%" }}>
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
            <MDBCol className="col-md-6 col-12 xs:ps-4 sm:ps-0 pt-2">
              <span
                className="text-uppercase fw-bold "
                style={{ fontFamily: "FontMedium", fontSize: "1.3rem" }}
              >
                {uploadfiles.attributes?.prefix_en || "-"}
                {uploadfiles.attributes?.nickname_en || "-"}
              </span>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBContainer className="pt-4 xs:max-w-full sm:max-w-7xl sm:px-5 md:px-0">
          {/* {uploadfiles.map((member) => ( */}
          <MDBRow className="pt-0 pb-5 xs:px-5 sm:px-5 md:px-0">
            <MDBCol className="d-flex pb-0 pe-5">
              <div className="d-flex flex-column w-100">
                <h1
                  className="fw-bold text-uppercase text-black"
                  style={{ fontFamily: "MyFont" }}
                >
                  {uploadfiles.attributes?.prefix_en || "-"}
                  {uploadfiles.attributes?.name_en || "-"}
                  {/* <span>&nbsp</span> */}
                  <span
                    style={{ paddingLeft: "0.5rem", fontFamily: "FontMedium" }}
                  >
                    (
                  </span>
                  {uploadfiles.attributes?.nickname_en}
                  <span>)</span>
                </h1>
                <h1
                  className="fw-bold text-uppercase text-black"
                  style={{ fontFamily: "MyFont" }}
                >
                  {uploadfiles.attributes?.surname_en || "-"}
                </h1>
                <h3
                  className="fw-normal text-normal pt-2 mb-1"
                  style={{ color: "#AE023E" }}
                >
                  {uploadfiles.attributes?.position_en || "-"}
                </h3>
                {/* local data */}
                <p className="text-lg" style={{ color: "#AE023E" }}>
                  Neuroscience Center for Research and Innovation (NX), Learning
                  Institute, KMUTT
                </p>
                <MDBRow className="pt-2">
                  <MDBCol size="1" style={{ width: "3.33%" }}>
                    <MailOutlineIcon style={{ color: "#119ED1" }} />
                  </MDBCol>
                  <MDBCol>
                    <span
                      className="fw-normal text-lg ps-2"
                      style={{ color: "#119ED1" }}
                    >
                      {uploadfiles.attributes?.email || "-"}
                    </span>
                  </MDBCol>
                </MDBRow>
                {/* Render the content */}
                {uploadfiles.attributes?.bio_en ? (
                  <p
                    className="fw-normal text-md pt-3"
                    style={{ wordBreak: "break-word", maxWidth: "80%" }}
                    dangerouslySetInnerHTML={{
                      __html: uploadfiles.attributes.bio_en,
                    }}
                  />
                ) : (
                  <p className="fw-normal text-md pt-3">-</p>
                )}
                {/* <p
                  className="fw-normal text-lg pt-3"
                  style={{ maxWidth: "90%" }}
                >
                  {uploadfiles.attributes?.bio_en || "-"}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: uploadfiles.attributes?.bio_en || "-",
                    }}
                  ></div>
                </p> */}

                {/* Text Editor  */}
                {/* <MDBCol>
                  <span
                    className="fw-normal text-lg ps-2"
                    style={{ color: "#119ED1" }}
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: uploadfiles.attributes?.bio_en || "-",
                      }}
                    ></div>
                  </span>
                </MDBCol> */}
              </div>
            </MDBCol>
            <MDBCol md="4" className="xs:px-5 sm:px-5 md:px-0">
              <MDBCardImage
                className="rounded-4"
                src={
                  "https://10.35.29.186" +
                    uploadfiles.attributes?.uploadfiles.data[0]?.attributes
                      .image_original.data[0]?.attributes.url || "-"
                }
                position="top"
                alt="..."
                style={{
                  objectFit: "cover",
                  borderRadius: "0px",
                  objectPosition: "50% 15%",
                  height: "450px",
                }}
              />
            </MDBCol>
          </MDBRow>{" "}
          <MDBRow
            style={{
              borderBottom: "1px solid black",
              // paddingTop: "1.5rem",
            }}
          ></MDBRow>
        </MDBContainer>
      </section>

      <section>
        <MDBContainer className="xs:max-w-full sm:max-w-7xl sm:px-5 md:px-0">
          {/* Education */}
          <MDBRow className="pt-0 pb-0 xs:px-5 sm:px-5 md:px-0">
            <div className="d-flex justify-content-between pt-4 xs:text-base sm:text-lg sm:px-5 md:px-0">
              <h5
                className="fw-bold text-capitalize text-black"
                style={{ fontFamily: "FontMedium" }}
              >
                Education
              </h5>

              <MDBBtn
                outline
                className="mx-2"
                style={{ borderColor: "#A02040", borderWidth: "1px" }}
              >
                <DescriptionIcon style={{ color: "#A02040" }}></DescriptionIcon>
                <span className="ps-2 text-normal" style={{ color: "#A02040" }}>
                  download CV
                </span>
              </MDBBtn>
            </div>
          </MDBRow>

          {/* Education  */}
          <MDBRow className="pt-2 xs:px-5 sm:px-5 md:px-0">
            <MDBCol md="8" style={{ width: "-webkit-fit-content" }}>
              {uploadfiles.attributes?.education_en ? (
                <ul style={{ paddingLeft: "1rem" }}>
                  {uploadfiles.attributes.education_en.map(
                    (education, index) => {
                      const [degree, year] = education.split("–");
                      return (
                        <li key={index} className="fw-normal text-normal">
                          <p className="mb-1">{degree || "-"} </p>
                        </li>
                      );
                    }
                  )}
                </ul>
              ) : (
                <p className="fw-normal text-normal">-</p>
              )}
            </MDBCol>
            <MDBCol md="1">
              <ul>
                {uploadfiles.attributes?.education_en?.map(
                  (education, index) => {
                    const [degree, year] = education.split("–");
                    return (
                      <li
                        key={index}
                        className="fw-normal text-normal"
                        style={{
                          listStyle: '"- "',
                          "::before": {
                            content: '"-"',
                            marginRight: "0.5rem",
                          },
                        }}
                      >
                        <p className="mb-1">{year} </p>
                      </li>
                    );
                  }
                )}
              </ul>
            </MDBCol>
          </MDBRow>

          {/* Current Affiliations */}
          <MDBRow className="pt-0 pb-0 xs:px-5 sm:px-5 md:px-0">
            <div className="d-flex justify-content-between pt-3 xs:text-base sm:text-lg sm:px-5 md:px-0">
              <h5
                className="fw-bold text-capitalize text-black"
                style={{ fontFamily: "FontMedium" }}
              >
                Current Affiliations
              </h5>
            </div>
          </MDBRow>
          <MDBCol className="pt-2">
            <MDBRow className="pt-2 xs:px-5 sm:px-5 md:px-0">
              <MDBCol md="8" style={{ width: "-webkit-fit-content" }}>
                {uploadfiles.attributes?.affiliation_en ? (
                  <ul style={{ paddingLeft: "1rem" }}>
                    {uploadfiles.attributes.affiliation_en.map(
                      (affiliation, index) => (
                        <li key={index} className="fw-normal text-normal">
                          {affiliation}
                        </li>
                      )
                    )}
                  </ul>
                ) : (
                  <p className="fw-normal text-normal text-black">-</p>
                )}
              </MDBCol>
            </MDBRow>

            {/*  Recent and on-going projects */}
            <MDBRow className="pt-0 pb-0 xs:px-5 sm:px-5 md:px-0">
              <div className="d-flex justify-content-between pt-3 xs:text-base sm:text-lg sm:px-5 md:px-0">
                <h5
                  className="fw-bold text-capitalize text-black"
                  style={{ fontFamily: "FontMedium" }}
                >
                  Recent and on-going projects
                </h5>
              </div>
            </MDBRow>
            <MDBCol className="pt-2">
              <MDBRow className="pt-2 xs:px-5 sm:px-5 md:px-0">
                <MDBCol md="8" style={{ width: "-webkit-fit-content" }}>
                  {uploadfiles.attributes?.affiliation_en ? (
                    <ul style={{ paddingLeft: "1rem" }}>
                      {uploadfiles.attributes.project_en.map(
                        (affiliation, index) => (
                          <li key={index} className="fw-normal text-normal">
                            {affiliation}
                          </li>
                        )
                      )}
                    </ul>
                  ) : (
                    <p className="fw-normal text-normal text-black">-</p>
                  )}
                </MDBCol>
              </MDBRow>
            </MDBCol>

            {/*  Grants */}
            <MDBRow className="pt-0 pb-0 xs:px-5 sm:px-5 md:px-0">
              <div className="d-flex justify-content-between pt-3 xs:text-base sm:text-lg sm:px-5 md:px-0">
                <h5
                  className="fw-bold text-capitalize text-black"
                  style={{ fontFamily: "FontMedium" }}
                >
                  Grants
                </h5>
              </div>
            </MDBRow>
            <MDBCol className="pt-2">
              <MDBRow className="pt-2 xs:px-5 sm:px-5 md:px-0">
                <MDBCol md="8" style={{ width: "-webkit-fit-content" }}>
                  {uploadfiles.attributes?.grant_en ? (
                    <ul style={{ paddingLeft: "1rem" }}>
                      {uploadfiles.attributes.grant_en.map((grant, index) => (
                        <li key={index} className="fw-normal text-normal">
                          {grant}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="fw-normal text-normal text-black">-</p>
                  )}
                </MDBCol>
              </MDBRow>
            </MDBCol>

            {/* Awards  */}
            <MDBRow className="pt-0 pb-0 xs:px-5 sm:px-5 md:px-0">
              <div className="d-flex justify-content-between pt-3 xs:text-base sm:text-lg sm:px-5 md:px-0">
                <h5
                  className="fw-bold text-capitalize text-black"
                  style={{ fontFamily: "FontMedium" }}
                >
                  Awards
                </h5>
              </div>
            </MDBRow>
            <MDBCol className="pt-2">
              <MDBRow className="pt-2 xs:px-5 sm:px-5 md:px-0">
                <MDBCol md="8" style={{ width: "-webkit-fit-content" }}>
                  {uploadfiles.attributes?.award_en ? (
                    <ul style={{ paddingLeft: "1rem" }}>
                      {uploadfiles.attributes.award_en.map((award, index) => (
                        <li key={index} className="fw-normal text-normal">
                          {award}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="fw-normal text-normal">-</p>
                  )}
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBCol>
        </MDBContainer>
      </section>

      {/*  Selected Publications */}
      <section>
        <MDBContainer className="xs:max-w-full sm:max-w-7xl sm:px-5 md:px-0 pt-4">
          {/* Education */}
          <MDBRow className="pt-0 pb-0 xs:px-5 sm:px-5 md:px-0">
            <div className="d-flex justify-content-between pt-4 xs:text-base sm:text-lg sm:px-5 md:px-0">
              <h5
                className="fw-bold text-uppercase text-black"
                style={{ fontFamily: "MyFont" }}
              >
                Selected Publications
              </h5>

              <MDBBtn
                outline
                className="mx-2"
                style={{ borderColor: "#6A4F94", borderWidth: "1px" }}
              >
                <SchoolIcon style={{ color: "#6A4F94" }}></SchoolIcon>
                <span
                  className="ps-2 text-capitalize"
                  style={{ color: "#6A4F94" }}
                >
                  Google Scholar
                </span>
              </MDBBtn>
            </div>
          </MDBRow>
          <MDBRow className="pt-2">
            {publicationfiles.map((member) => (
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
                      {member.attributes.title_en}
                    </p>
                  </MDBCol>
                </Link>
              </>
            ))}
          </MDBRow>

          {/* 
          {uploadfiles.map((member) => (
            <MDBRow className="pt-4 pb-0 xs:px-5 sm:px-5 md:px-0">
              <MDBCol size="1">
                <ArticleIcon color="primary" />
              </MDBCol>

              <MDBCol md="11" key={member.id}>
                <p> {member.attributes.grant_en}</p>
              </MDBCol>
            </MDBRow>
          ))} */}
          {/* 
          {uploadfiles.attributes?.grant_en ? (
            <ul>
              {uploadfiles.attributes.education_en.map((education, index) => {
                const [degree, year] = education.split("–");
                return (
                  <li key={index} className="fw-normal text-normal">
                    {degree || "-"}
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="fw-normal text-normal">-</p>
          )} */}

          <MDBRow
            style={{
              borderBottom: "1px solid black",
              paddingTop: "1.5rem",
            }}
          ></MDBRow>
          {/* Other Members */}
          <MDBRow className="pt-4 pb-0 xs:px-5 sm:px-5 md:px-0">
            <div className="d-flex justify-content-between pt-4 xs:text-base sm:text-lg">
              <h3
                className="fw-bold text-uppercase text-black"
                style={{ fontFamily: "MyFont" }}
              >
                Other Members
              </h3>

              <span className="flex">
                {" "}
                <EastIcon
                  style={{ color: "#AE023E", marginRight: "0.5rem" }}
                ></EastIcon>
                <Link
                  to={`/team-member`}
                  style={{ color: "#AE023E" }}
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  <p className="text-uppercase"> All Team Member</p>
                </Link>
              </span>
            </div>
          </MDBRow>
          <MemberDetailimage></MemberDetailimage>
        </MDBContainer>
      </section>
    </div>
  );
}

function ImageMobile({ title }) {
  let { id } = useParams();
  const [uploadfiles, setUploadfiles] = useState({});
  const [publicationfiles, setPublicationfiles] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://10.35.29.186/api/members/${id}?populate=uploadfiles.fileupload&populate=uploadfiles.image_original&populate=uploadfiles.image_square&populate=uploadfiles.image_medium&populate=uploadfiles.image_large&filters[usertype][$eq]=faculty_member&sort=sort"`
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
      .get(
        `https://10.35.29.186/api/publications?populate=*&filters[owner][id][$eq]=${id}`
      )
      .then((response) => {
        setPublicationfiles(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

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
          {/* Title */}
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
                  TEAM MEMBER
                </a>
              </Link>
            </MDBCol>
            <MDBCol className="col-1 p-0 me-3" style={{ width: "3.33%" }}>
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
            <MDBCol className="col-md-6 col-12 xs:ps-4 sm:ps-0 pt-2">
              <span
                className="text-uppercase fw-bold "
                style={{ fontFamily: "FontMedium", fontSize: "1.3rem" }}
              >
                {uploadfiles.attributes?.prefix_en || "-"}
                {uploadfiles.attributes?.nickname_en || "-"}
              </span>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBContainer className="pt-4 xs:max-w-full sm:max-w-7xl sm:px-5 md:px-0">
          {/* {uploadfiles.map((member) => ( */}
          <MDBRow className="pt-0 pb-5 xs:px-5 sm:px-5 md:px-0">
            <MDBCol md="4" className="xs:px-5 sm:px-5 md:px-0 pb-4">
              <MDBCardImage
                className="rounded-4"
                src={
                  "https://10.35.29.186" +
                    uploadfiles.attributes?.uploadfiles.data[0]?.attributes
                      .image_original.data[0]?.attributes.url || "-"
                }
                position="top"
                alt="..."
                style={{
                  height: "300px",
                  width: "300px",
                  objectFit: "initial",
                  borderRadius: "0px",
                  alignSelf: "start",
                }}
              />
            </MDBCol>
            <MDBCol className="d-flex pb-0 pe-5">
              <div className="d-flex flex-column w-100 h-fit">
                <h1
                  className="fw-bold text-uppercase text-black xs:text-lg sm:text-4xl"
                  style={{ fontFamily: "MyFont" }}
                >
                  {uploadfiles.attributes?.prefix_en || "-"}
                  {uploadfiles.attributes?.name_en || "-"}
                  {/* <span>&nbsp</span> */}
                  <span
                    style={{ paddingLeft: "0.5rem", fontFamily: "FontMedium" }}
                  >
                    (
                  </span>
                  {uploadfiles.attributes?.nickname_en}
                  <span>)</span>
                </h1>
                <h1
                  className="fw-bold text-uppercase text-black xs:text-lg sm:text-4xl"
                  style={{ fontFamily: "MyFont" }}
                >
                  {uploadfiles.attributes?.surname_en || "-"}
                </h1>
                <h3
                  className="fw-normal xs:text-lg sm:text-2xl pt-2 mb-1"
                  style={{ color: "#AE023E" }}
                >
                  {uploadfiles.attributes?.position_en || "-"}
                </h3>
                {/* local data */}
                <p className="text-lg" style={{ color: "#AE023E" }}>
                  Neuroscience Center for Research and Innovation (NX), Learning
                  Institute, KMUTT
                </p>
                <MDBRow className="pt-2">
                  <MDBCol size="1" style={{ width: "3.33%" }}>
                    <MailOutlineIcon style={{ color: "#119ED1" }} />
                  </MDBCol>
                  <MDBCol>
                    <span
                      className="fw-normal text-lg ps-2"
                      style={{ color: "#119ED1" }}
                    >
                      {uploadfiles.attributes?.email || "-"}
                    </span>
                  </MDBCol>
                </MDBRow>
                {uploadfiles.attributes?.bio_en ? (
                  <p
                    className="fw-normal text-md pt-3"
                    style={{ wordBreak: "break-word" }}
                    dangerouslySetInnerHTML={{
                      __html: uploadfiles.attributes.bio_en,
                    }}
                  />
                ) : (
                  <p className="fw-normal text-md pt-3">-</p>
                )}
                {/* <p
                  className="fw-normal text-lg pt-3"
                  style={{ maxWidth: "90%" }}
                >
                  {uploadfiles.attributes?.bio_en || "-"}
                </p> */}
              </div>
            </MDBCol>
          </MDBRow>{" "}
          <MDBRow
            style={{
              borderBottom: "1px solid black",
              // paddingTop: "1.5rem",
            }}
          ></MDBRow>
        </MDBContainer>
      </section>

      <section>
        <MDBContainer className="xs:max-w-full sm:max-w-7xl sm:px-5 md:px-0">
          {/* Education */}
          <MDBRow className="pt-0 pb-0 xs:px-5 sm:px-5 md:px-0">
            <div className="d-flex justify-content-between pt-4 xs:text-base sm:text-lg sm:px-5 md:px-0">
              <h5
                className="fw-bold text-capitalize text-black"
                style={{ fontFamily: "FontMedium" }}
              >
                Education
              </h5>

              <MDBBtn
                outline
                className="mx-2"
                style={{ borderColor: "#A02040", borderWidth: "1px" }}
              >
                <DescriptionIcon style={{ color: "#A02040" }}></DescriptionIcon>
                <span className="ps-2 text-normal" style={{ color: "#A02040" }}>
                  download CV
                </span>
              </MDBBtn>
            </div>
          </MDBRow>

          {/* Education  */}
          <MDBRow className="pt-2 xs:px-5 sm:px-5 md:px-0">
            <MDBCol md="8" style={{ width: "-webkit-fit-content" }}>
              {uploadfiles.attributes?.education_en ? (
                <ul style={{ paddingLeft: "1rem" }}>
                  {uploadfiles.attributes.education_en.map(
                    (education, index) => {
                      const [degree, year] = education.split("–");
                      return (
                        <li key={index} className="fw-normal text-normal">
                          <p className="mb-1">{degree || "-"} </p>
                        </li>
                      );
                    }
                  )}
                </ul>
              ) : (
                <p className="fw-normal text-normal">-</p>
              )}
            </MDBCol>
            <MDBCol md="1">
              <ul>
                {uploadfiles.attributes?.education_en?.map(
                  (education, index) => {
                    const [degree, year] = education.split("–");
                    return (
                      <li
                        key={index}
                        className="fw-normal text-normal"
                        style={{
                          listStyle: '"- "',
                          "::before": {
                            content: '"-"',
                            marginRight: "0.5rem",
                          },
                        }}
                      >
                        <p className="mb-1">{year} </p>
                      </li>
                    );
                  }
                )}
              </ul>
            </MDBCol>
          </MDBRow>

          {/* Current Affiliations */}
          <MDBRow className="pt-0 pb-0 xs:px-5 sm:px-5 md:px-0">
            <div className="d-flex justify-content-between pt-3 xs:text-base sm:text-lg sm:px-5 md:px-0">
              <h5
                className="fw-bold text-capitalize text-black"
                style={{ fontFamily: "FontMedium" }}
              >
                Current Affiliations
              </h5>
            </div>
          </MDBRow>
          <MDBCol className="pt-2">
            <MDBRow className="pt-2 xs:px-5 sm:px-5 md:px-0">
              <MDBCol md="8" style={{ width: "-webkit-fit-content" }}>
                {uploadfiles.attributes?.affiliation_en ? (
                  <ul style={{ paddingLeft: "1rem" }}>
                    {uploadfiles.attributes.affiliation_en.map(
                      (affiliation, index) => (
                        <li key={index} className="fw-normal text-normal">
                          {affiliation}
                        </li>
                      )
                    )}
                  </ul>
                ) : (
                  <p className="fw-normal text-normal text-black">-</p>
                )}
              </MDBCol>
            </MDBRow>

            {/*  Recent and on-going projects */}
            <MDBRow className="pt-0 pb-0 xs:px-5 sm:px-5 md:px-0">
              <div className="d-flex justify-content-between pt-3 xs:text-base sm:text-lg sm:px-5 md:px-0">
                <h5
                  className="fw-bold text-capitalize text-black"
                  style={{ fontFamily: "FontMedium" }}
                >
                  Recent and on-going projects
                </h5>
              </div>
            </MDBRow>
            <MDBCol className="pt-2">
              <MDBRow className="pt-2 xs:px-5 sm:px-5 md:px-0">
                <MDBCol md="8" style={{ width: "-webkit-fit-content" }}>
                  {uploadfiles.attributes?.affiliation_en ? (
                    <ul style={{ paddingLeft: "1rem" }}>
                      {uploadfiles.attributes.project_en.map(
                        (affiliation, index) => (
                          <li key={index} className="fw-normal text-normal">
                            {affiliation}
                          </li>
                        )
                      )}
                    </ul>
                  ) : (
                    <p className="fw-normal text-normal text-black">-</p>
                  )}
                </MDBCol>
              </MDBRow>
            </MDBCol>

            {/*  Grants */}
            <MDBRow className="pt-0 pb-0 xs:px-5 sm:px-5 md:px-0">
              <div className="d-flex justify-content-between pt-3 xs:text-base sm:text-lg sm:px-5 md:px-0">
                <h5
                  className="fw-bold text-capitalize text-black"
                  style={{ fontFamily: "FontMedium" }}
                >
                  Grants
                </h5>
              </div>
            </MDBRow>
            <MDBCol className="pt-2">
              <MDBRow className="pt-2 xs:px-5 sm:px-5 md:px-0">
                <MDBCol md="8" style={{ width: "-webkit-fit-content" }}>
                  {uploadfiles.attributes?.grant_en ? (
                    <ul style={{ paddingLeft: "1rem" }}>
                      {uploadfiles.attributes.grant_en.map((grant, index) => (
                        <li key={index} className="fw-normal text-normal">
                          {grant}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="fw-normal text-normal text-black">-</p>
                  )}
                </MDBCol>
              </MDBRow>
            </MDBCol>

            {/* Awards  */}
            <MDBRow className="pt-0 pb-0 xs:px-5 sm:px-5 md:px-0">
              <div className="d-flex justify-content-between pt-3 xs:text-base sm:text-lg sm:px-5 md:px-0">
                <h5
                  className="fw-bold text-capitalize text-black"
                  style={{ fontFamily: "FontMedium" }}
                >
                  Awards
                </h5>
              </div>
            </MDBRow>
            <MDBCol className="pt-2">
              <MDBRow className="pt-2 xs:px-5 sm:px-5 md:px-0">
                <MDBCol md="8" style={{ width: "-webkit-fit-content" }}>
                  {uploadfiles.attributes?.award_en ? (
                    <ul style={{ paddingLeft: "1rem" }}>
                      {uploadfiles.attributes.award_en.map((award, index) => (
                        <li key={index} className="fw-normal text-normal">
                          {award}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="fw-normal text-normal">-</p>
                  )}
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBCol>
        </MDBContainer>
      </section>

      {/*  Selected Publications */}
      <section>
        <MDBContainer className="xs:max-w-full sm:max-w-7xl sm:px-5 md:px-0 pt-4">
          {/* Education */}
          <MDBRow className="pt-0 pb-0 xs:px-5 sm:px-5 md:px-0">
            <div className="d-flex justify-content-between pt-4 xs:text-base sm:text-lg sm:px-5 md:px-0">
              <h5
                className="fw-bold text-uppercase text-black text-base"
                style={{ fontFamily: "FontMedium" }}
              >
                Selected Publications
              </h5>

              <MDBBtn
                outline
                className="mx-2"
                style={{ borderColor: "#6A4F94", borderWidth: "1px" }}
              >
                <SchoolIcon style={{ color: "#6A4F94" }}></SchoolIcon>
                <span
                  className="ps-2 text-capitalize"
                  style={{ color: "#6A4F94" }}
                >
                  Google Scholar
                </span>
              </MDBBtn>
            </div>
          </MDBRow>
          <MDBRow className="pt-2 px-4">
            {publicationfiles.map((member) => (
              <>
                <Link
                  to={member.attributes.url}
                  target="_blank"
                  style={{ color: "black" }}
                >
                  <MDBCol md="11" key={member.id} className="py-2">
                    <p style={{ display: "inline-block" }}>
                      <ArticleIcon
                        color="primary"
                        style={{ marginRight: "1rem" }}
                      />
                      {member.attributes.title_en}
                    </p>
                  </MDBCol>
                </Link>
              </>
            ))}
          </MDBRow>

          {/* 
          {uploadfiles.map((member) => (
            <MDBRow className="pt-4 pb-0 xs:px-5 sm:px-5 md:px-0">
              <MDBCol size="1">
                <ArticleIcon color="primary" />
              </MDBCol>

              <MDBCol md="11" key={member.id}>
                <p> {member.attributes.grant_en}</p>
              </MDBCol>
            </MDBRow>
          ))} */}
          {/* 
          {uploadfiles.attributes?.grant_en ? (
            <ul>
              {uploadfiles.attributes.education_en.map((education, index) => {
                const [degree, year] = education.split("–");
                return (
                  <li key={index} className="fw-normal text-normal">
                    {degree || "-"}
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="fw-normal text-normal">-</p>
          )} */}

          <MDBRow
            style={{
              borderBottom: "1px solid black",
              paddingTop: "1.5rem",
            }}
          ></MDBRow>
          {/* Other Members */}
          <MDBRow className="pt-4 pb-0 xs:px-5 sm:px-5 md:px-0">
            <div className="d-flex justify-content-between pt-4 xs:text-base sm:text-lg">
              <h3
                className="fw-bold text-uppercase text-black"
                style={{ fontFamily: "MyFont" }}
              >
                Other Members
              </h3>

              <span className="flex">
                {" "}
                <EastIcon
                  style={{ color: "#AE023E", marginRight: "0.5rem" }}
                ></EastIcon>
                <Link
                  to={`/team-member`}
                  style={{ color: "#AE023E" }}
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  <p className="text-uppercase"> All Team Member</p>
                </Link>
              </span>
            </div>
          </MDBRow>
          <MemberDetailimage></MemberDetailimage>
        </MDBContainer>
      </section>
    </div>
  );
}

export default function Memberdetail() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      {/* Render the Image component when on mobile */}
      {isMobile && <ImageMobile />}

      {/* Hide the Post component when on mobile */}
      {!isMobile && <ImageDesktop />}
    </>
  );
}
