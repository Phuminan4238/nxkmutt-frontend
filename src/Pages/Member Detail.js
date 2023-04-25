import React from "react";
import { useState, useEffect, setIsLoaded } from "react";
import axios from "axios";
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
      .get("https://10.35.29.186/api/publications?populate=id")
      .then((response) => {
        setPublicationfiles(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App" style={{ borderTop: "1px solid black" }}>
      <section>
        <MDBContainer className="xs:max-w-full sm:max-w-7xl pt-5">
          <MDBRow className="pt-0 pb-0 xs:px-5 sm:px-5 md:px-0">
            <MDBCol className="col-2 text-uppercase fw-bold pb-4 sm:pb-0">
              {/* Team member */}
              {title}
            </MDBCol>
            <MDBCol className="col-md-6 col-12">
              <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
              <span className="text-uppercase fw-bold ps-4">
                {uploadfiles.attributes?.prefix_en || "not found"}
                {uploadfiles.attributes?.nickname_en || "not found"}
              </span>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBContainer className="xs:max-w-full sm:max-w-7xl pt-5">
          {/* {uploadfiles.map((member) => ( */}
          <MDBRow className="pt-0 pb-5 xs:px-5 sm:px-5 md:px-0">
            <MDBCol className="d-flex pb-0 pe-5">
              <div className="d-flex flex-column w-100">
                <h1 className="fw-bold text-uppercase text-black">
                  {uploadfiles.attributes?.prefix_en}
                  {uploadfiles.attributes?.name_en}
                  {/* <span>&nbsp</span> */}
                  <span>(</span>
                  {uploadfiles.attributes?.nickname_en}
                  <span>)</span>
                </h1>
                <h1 className="fw-bold text-uppercase text-black">
                  {uploadfiles.attributes?.surname_en}
                </h1>
                <h4
                  className="fw-normal text-normal"
                  style={{ color: "#AE023E" }}
                >
                  {uploadfiles.attributes?.position_en || "not found"}
                </h4>
                {/* <span className="fw-bold text-uppercase text-red">
                  {uploadfiles.attributes?.pasds_en || "not found"}
                </span> */}
                <p style={{ color: "#AE023E" }}>
                  Neuroscience Center for Research and Innovation (NX), Learning
                  Institute, KMUTT
                </p>
                <MDBRow>
                  <MDBCol size="1" style={{ width: "3.33%" }}>
                    <MailOutlineIcon style={{ color: "#119ED1" }} />
                  </MDBCol>
                  <MDBCol>
                    <span
                      className="fw-normal text-normal ps-4"
                      style={{ color: "#119ED1" }}
                    >
                      {uploadfiles.attributes?.email || "not found"}
                    </span>
                  </MDBCol>
                </MDBRow>
                <p className="fw-normal text-normal pt-2">
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
                    .fileupload.data[0]?.attributes.url
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
              paddingTop: "1.5rem",
            }}
          ></MDBRow>
        </MDBContainer>
      </section>
      <section>
        <MDBContainer className="xs:max-w-full sm:max-w-7xl">
          {/* Education */}
          <MDBRow className="pt-0 pb-0 xs:px-5 sm:px-5 md:px-0">
            <div className="d-flex justify-content-between pt-4 xs:text-base sm:text-lg">
              <h5 className="fw-bold text-uppercase text-black">Education</h5>

              <MDBBtn outline className="mx-2" color="danger">
                <DescriptionIcon style={{ color: "#A02040" }}></DescriptionIcon>
                <span className="ps-2" style={{ color: "#A02040" }}>
                  download CV
                </span>
              </MDBBtn>
            </div>
          </MDBRow>
          <MDBCol className="pt-2">
            <MDBRow className="pt-2 xs:px-5 sm:px-5 md:px-0">
              <MDBCol md="10">
                {uploadfiles.attributes?.education_en ? (
                  <ul>
                    {uploadfiles.attributes.education_en.map(
                      (education, index) => {
                        const [degree, year] = education.split("–");
                        return (
                          <li key={index} className="fw-normal text-normal">
                            {degree}
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
                          {year}
                        </li>
                      );
                    }
                  )}
                </ul>
              </MDBCol>
            </MDBRow>

            {/* Current Affiliations */}
            <MDBRow className="pt-0 pb-0 xs:px-5 sm:px-5 md:px-0">
              <h5 className="fw-bold text-uppercase text-black ps-2 pt-4">
                Current Affiliations
              </h5>
            </MDBRow>
            <MDBCol className="pt-2">
              <MDBRow className="pt-2 pb-0 xs:px-5 sm:px-5 md:px-0">
                <MDBCol md="10">
                  {uploadfiles.attributes?.affiliation_en ? (
                    <ul>
                      {uploadfiles.attributes.project_en.map(
                        (affiliation, index) => (
                          <li key={index} className="fw-normal text-normal">
                            {affiliation}
                          </li>
                        )
                      )}
                    </ul>
                  ) : (
                    <p className="fw-normal text-normal">not found</p>
                  )}
                </MDBCol>
              </MDBRow>
            </MDBCol>
            {/*  Recent and on-going projects */}
            <MDBRow className="pt-2 pb-0 xs:px-5 sm:px-5 md:px-0">
              <h5 className="fw-bold text-uppercase text-black ps-2 pt-4">
                Recent and on-going projects
              </h5>
            </MDBRow>
            <MDBCol className="pt-2">
              <MDBRow className="pt-2 pb-0 xs:px-5 sm:px-5 md:px-0">
                <MDBCol md="10">
                  {uploadfiles.attributes?.project_en ? (
                    <ul>
                      {uploadfiles.attributes.project_en.map(
                        (project, index) => (
                          <li key={index} className="fw-normal text-normal">
                            {project}
                          </li>
                        )
                      )}
                    </ul>
                  ) : (
                    <p className="fw-normal text-normal">not found</p>
                  )}
                </MDBCol>
              </MDBRow>
            </MDBCol>
            {/*  Grants */}
            <MDBRow className="pt-2 pb-0 xs:px-5 sm:px-5 md:px-0">
              <h5 className="fw-bold text-uppercase text-black ps-2 pt-4">
                Grants
              </h5>
            </MDBRow>

            <MDBCol className="pt-2">
              <MDBRow className="pt-2 pb-0 xs:px-5 sm:px-5 md:px-0">
                {/* <MDBCol md="1" style={{ width: "3.33%" }}>
                  <p>*</p>
                </MDBCol> */}
                <MDBCol md="10">
                  {uploadfiles.attributes?.grant_en ? (
                    <ul>
                      {uploadfiles.attributes.grant_en.map((grant, index) => (
                        <li key={index} className="fw-normal text-normal">
                          {grant}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="fw-normal text-normal">not found</p>
                  )}
                </MDBCol>
              </MDBRow>
            </MDBCol>
            {/*  Awards */}
            <MDBRow className="pt-2 pb-0 xs:px-5 sm:px-5 md:px-0">
              <h5 className="fw-bold text-uppercase text-black ps-2 pt-4">
                Awards
              </h5>
            </MDBRow>
            <MDBCol className="pt-2">
              <MDBRow className="pt-2 pb-0 xs:px-5 sm:px-5 md:px-0">
                <MDBCol md="10">
                  {uploadfiles.attributes?.award_en ? (
                    <ul>
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
        <MDBContainer className="xs:max-w-full sm:max-w-7xl">
          {/* Education */}
          <MDBRow className="pt-2 pb-0 xs:px-5 sm:px-5 md:px-0">
            <div className="d-flex justify-content-between pt-4 xs:text-base sm:text-lg">
              <h5 className="fw-bold text-uppercase text-black">
                Selected Publications
              </h5>

              <MDBBtn outline className="mx-2" color="secondary">
                <SchoolIcon style={{ color: "#6A4F94" }}></SchoolIcon>
                <span className="ps-2" style={{ color: "#6A4F94" }}>
                  Google Scholar
                </span>
              </MDBBtn>
            </div>
          </MDBRow>
          {publicationfiles.map((member) => (
            <MDBRow className="pt-4 pb-0 xs:px-5 sm:px-5 md:px-0">
              <MDBCol size="1">
                <ArticleIcon color="primary" />
              </MDBCol>

              <MDBCol md="11" key={member.id}>
                <p> {member.attributes.description}</p>
              </MDBCol>
            </MDBRow>
          ))}
          <MDBRow
            style={{
              borderBottom: "1px solid black",
              paddingTop: "1.5rem",
            }}
          ></MDBRow>
          {/* Other Members */}
          <MDBRow className="pt-4 pb-0 xs:px-5 sm:px-5 md:px-0">
            <div className="d-flex justify-content-between pt-4 xs:text-base sm:text-lg">
              <h4 className="fw-bold text-uppercase text-black">
                Other Members
              </h4>

              <span>
                {" "}
                <EastIcon
                  style={{ color: "#AE023E", marginRight: "1rem" }}
                ></EastIcon>
                All Team Member
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
