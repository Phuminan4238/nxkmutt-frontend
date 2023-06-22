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

function Memberdetail({ title }) {
  let { id } = useParams();
  const [uploadfiles, setUploadfiles] = useState({});
  const [publicationfiles, setPublicationfiles] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://10.35.29.186/api/members/${id}?populate=uploadfiles.fileupload`
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

  return (
    <div className="App">
      <section style={{ borderTop: "1px solid black", marginTop: "1.5rem" }}>
        <MDBContainer className="pt-5 xs:max-w-full sm:max-w-7xl sm:px-5 md:px-0 ">
          <MDBRow className="pt-0 pb-0 xs:px-5 sm:px-5 md:px-0">
            <MDBCol
              className="col-2 text-uppercase fw-bold pt-2 sm:pb-0"
              style={{
                width: "-webkit-max-content",
                fontFamily: "FontMedium",
                fontSize: "1.3rem",
              }}
            >
              {/* color: "#AE023E", */}
              <Link to="/">
                <a style={{ color: "#AE023E" }}>{title}</a>
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
            <MDBCol className="col-md-6 col-12 ps-0 pt-2">
              <span
                className="text-uppercase fw-bold "
                style={{ fontFamily: "FontMedium", fontSize: "1.3rem" }}
              >
                {uploadfiles.attributes?.prefix_en || "not found"}
                {uploadfiles.attributes?.nickname_en || "not found"}
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
                  {uploadfiles.attributes?.prefix_en || "not found"}
                  {uploadfiles.attributes?.name_en || "not found"}
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
                  {uploadfiles.attributes?.surname_en || "not found"}
                </h1>
                <h3
                  className="fw-normal text-normal pt-2 mb-1"
                  style={{ color: "#AE023E" }}
                >
                  {uploadfiles.attributes?.position_en || "not found"}
                </h3>

                <h6 className="" style={{ color: "#AE023E" }}>
                  Neuroscience Center for Research and Innovation (NX), Learning
                  Institute, KMUTT
                </h6>
                <MDBRow className="pt-2">
                  <MDBCol size="1" style={{ width: "3.33%" }}>
                    <MailOutlineIcon style={{ color: "#119ED1" }} />
                  </MDBCol>
                  <MDBCol>
                    <span
                      className="fw-normal text-normal ps-2"
                      style={{ color: "#119ED1" }}
                    >
                      {uploadfiles.attributes?.email || "not found"}
                    </span>
                  </MDBCol>
                </MDBRow>
                <p
                  className="fw-normal text-normal pt-3"
                  style={{ maxWidth: "90%" }}
                >
                  {uploadfiles.attributes?.bio_en || "not found"}
                </p>
              </div>
            </MDBCol>
            <MDBCol md="4" className="xs:px-5 sm:px-5 md:px-0">
              <MDBCardImage
                className="rounded-0"
                src={
                  "https://10.35.29.186" +
                    uploadfiles.attributes?.uploadfiles.data[0]?.attributes
                      .fileupload.data[0]?.attributes.url || "not found"
                }
                position="top"
                alt="..."
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
                          <p className="mb-1">{degree || "not found"} </p>
                        </li>
                      );
                    }
                  )}
                </ul>
              ) : (
                <p className="fw-normal text-normal">not found</p>
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
                    {uploadfiles.attributes.project_en.map(
                      (affiliation, index) => (
                        <li key={index} className="fw-normal text-normal">
                          {affiliation}
                        </li>
                      )
                    )}
                  </ul>
                ) : (
                  <p className="fw-normal text-normal text-black">not found</p>
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
                    <p className="fw-normal text-normal text-black">
                      not found
                    </p>
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
                    <p className="fw-normal text-normal text-black">
                      not found
                    </p>
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
                    <p className="fw-normal text-normal">not found</p>
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
                    {degree || "not found"}
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="fw-normal text-normal">not found</p>
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

export default Memberdetail;
