import React from "react";
import { useState, useEffect, setIsLoaded } from "react";
/* Routes */
import { Route, Routes } from "react-router";
/* Material UI */
import { Container } from "@mui/system";
import ArticleIcon from "@mui/icons-material/Article";
/* MDBootstrap */
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
/* Images */
import vr2 from "../Images/vr-2.png";
import PeopleIcon from "@mui/icons-material/People";
import SchoolIcon from "@mui/icons-material/School";
import BuildIcon from "@mui/icons-material/Build";
import RedeemIcon from "@mui/icons-material/Redeem";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DescriptionIcon from "@mui/icons-material/Description";
/* Components */
import Publicationimage from "../Components/Publicationimage";
import Publicationreport from "../Components/Publicationreport";
import Toolsimage from "../Components/Tools";
import Participateimage from "../Components/Participateimage";
import MemberDetailimage from "../Components/MemberDetailimage";

const Memberdetail = () => {
  const [uploadfiles, setUploadfiles] = useState({});

  useEffect(() => {
    fetch("https://10.35.29.186/api/members/1?populate=uploadfiles.fileupload")
      .then((res) => res.json())
      .then((result) => {
        setUploadfiles(result.data);
      });
  });

  const [publicationfiles, setPuplicataionfiles] = useState([]);

  useEffect(() => {
    fetch("https://10.35.29.186/api/publications?populate=id")
      .then((res) => res.json())
      .then((result) => {
        setPuplicataionfiles(result.data);
      });
  });
  return (
    <div className="App" style={{ borderTop: "1px solid black" }}>
      <section>
        <MDBContainer className="pt-5">
          <MDBRow>
            <MDBCol
              size="2"
              className="text-uppercase fw-bold"
              style={{ width: "13.33%" }}
            >
              Team member
            </MDBCol>
            <MDBCol size="2">
              <span> > </span>
              <span className="text-uppercase fw-bold ps-4">
                {uploadfiles.attributes?.prefix_en || "not found"}
                {uploadfiles.attributes?.nickname_en || "not found"}
              </span>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBContainer className="pt-5">
          {/* {uploadfiles.map((member) => ( */}
          <MDBRow className="pt-0 pb-5">
            <MDBCol className="d-flex pb-0 pe-5">
              <div className="d-flex flex-column w-100">
                <h1 className="fw-bold text-uppercase text-black">
                  {uploadfiles.attributes?.prefix_en}{" "}
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
            <MDBCol md="4" className="p-0">
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

                  objectFit: "initial",
                  borderRadius: "0px",
                  alignSelf: "center",
                  // objectFit: "contain",
                }}
              />
            </MDBCol>
          </MDBRow>
          <MDBRow style={{ borderBottom: "1px solid black" }}></MDBRow>
          {/* Education */}
          <MDBRow>
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
            <MDBRow className="pt-2">
              <MDBCol md="1" style={{ width: "3.33%" }}>
                <p>*</p>
              </MDBCol>
              <MDBCol md="10">
                <p>
                  BS in psychology and neuroscience from Duke University (Summa
                  Cum Laude)
                </p>
              </MDBCol>
              <MDBCol md="1">
                <p>- 2011</p>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol size="1" style={{ width: "3.33%" }}>
                <p>*</p>
              </MDBCol>
              <MDBCol md="10">
                <p>
                  MS and PhD in neurosciences from University of California San
                  Diego
                </p>
              </MDBCol>
              <MDBCol md="1">
                <p>- 2017</p>
              </MDBCol>
            </MDBRow>
            {/* Current Affiliations */}
            <MDBRow>
              <h5 className="fw-bold text-uppercase text-black ps-2 pt-4">
                Current Affiliations
              </h5>
            </MDBRow>
            <MDBCol className="pt-2">
              <MDBRow className="pt-2">
                <MDBCol md="1" style={{ width: "3.33%" }}>
                  <p>*</p>
                </MDBCol>
                <MDBCol md="10">
                  <p>
                    Research director at Neuroscience Center for Research and
                    Innovation (NX), Learning Institute, KMUTT
                  </p>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="1" style={{ width: "3.33%" }}>
                  <p>*</p>
                </MDBCol>
                <MDBCol md="10">
                  <p>
                    Advisor for Research and Innovation for Sustainability
                    Center (RISC)
                  </p>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="1" style={{ width: "3.33%" }}>
                  <p>*</p>
                </MDBCol>
                <MDBCol md="10">
                  <p> Reviewing editor position at Frontiers in Neuroimaging</p>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            {/*  Recent and on-going projects */}
            <MDBRow>
              <h5 className="fw-bold text-uppercase text-black ps-2 pt-4">
                Recent and on-going projects
              </h5>
            </MDBRow>
            <MDBCol className="pt-2">
              <MDBRow className="pt-2">
                <MDBCol md="1" style={{ width: "3.33%" }}>
                  <p>*</p>
                </MDBCol>
                <MDBCol md="10">
                  <p>
                    The neurodevelopment of human attentional network and reward
                    processing
                  </p>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="1" style={{ width: "3.33%" }}>
                  <p>*</p>
                </MDBCol>
                <MDBCol md="10">
                  <p>
                    Neural mechanisms of healthy aging and mild cognitive
                    impairment
                  </p>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="1" style={{ width: "3.33%" }}>
                  <p>*</p>
                </MDBCol>
                <MDBCol md="10">
                  <p>
                    {" "}
                    Effects of stress, exercise and cognitive training on brain
                    functions
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            {/*  Grants */}
            <MDBRow>
              <h5 className="fw-bold text-uppercase text-black ps-2 pt-4">
                Grants
              </h5>
            </MDBRow>
            <MDBCol className="pt-2">
              <MDBRow className="pt-2">
                <MDBCol md="1" style={{ width: "3.33%" }}>
                  <p>*</p>
                </MDBCol>
                <MDBCol md="10">
                  <p>
                    National Research Council Thailand: mild cognitive
                    impairment (PI; 2021-2024)
                  </p>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="1" style={{ width: "3.33%" }}>
                  <p>*</p>
                </MDBCol>
                <MDBCol md="10">
                  <p>
                    Research and Innovation for Sustainability Center: exercise
                    and cognitive aging (PI; 2022-2023) and green environment
                    and stress (PI; 2020-2022)
                  </p>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="1" style={{ width: "3.33%" }}>
                  <p>*</p>
                </MDBCol>
                <MDBCol md="10">
                  <p>
                    {" "}
                    Thailand Science Research and Innovation: neurodevelopment
                    of attention (PI; 2020-2022) and neuro-inspired AI (co-PI;
                    2019-2021)
                  </p>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="1" style={{ width: "3.33%" }}>
                  <p>*</p>
                </MDBCol>
                <MDBCol md="10">
                  <p>
                    {" "}
                    Mahidol-KMUTT Partnering Program: brain-computer interface
                    (PI; 2020-2022)
                  </p>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="1" style={{ width: "3.33%" }}>
                  <p>*</p>
                </MDBCol>
                <MDBCol md="10">
                  <p>
                    {" "}
                    Asahi Glass Foundation: value-driven attention (PI;
                    2020-2022)
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            {/*  Awards */}
            <MDBRow>
              <h5 className="fw-bold text-uppercase text-black ps-2 pt-4">
                Awards
              </h5>
            </MDBRow>
            <MDBCol className="pt-2">
              <MDBRow className="pt-2">
                <MDBCol md="1" style={{ width: "3.33%" }}>
                  <p>*</p>
                </MDBCol>
                <MDBCol md="10">
                  <p>
                    Rising-star Young Researcher Award, King’s Mongkut’s
                    University of Technology Thonburi (2020)
                  </p>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="1" style={{ width: "3.33%" }}>
                  <p>*</p>
                </MDBCol>
                <MDBCol md="10">
                  <p>
                    Elsevier/Vision Research Travel Award from Vision Science
                    Society (2020)
                  </p>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="1" style={{ width: "3.33%" }}>
                  <p>*</p>
                </MDBCol>
                <MDBCol md="10">
                  <p>
                    {" "}
                    FORBES Asia 30 Under 30 in Healthcare and Science (2018)
                  </p>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="1" style={{ width: "3.33%" }}>
                  <p>*</p>
                </MDBCol>
                <MDBCol md="10">
                  <p>
                    {" "}
                    Leon Thal Award for Excellence in Graduate Research, UCSD
                    (2017)
                  </p>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="1" style={{ width: "3.33%" }}>
                  <p>*</p>
                </MDBCol>
                <MDBCol md="10">
                  <p>
                    {" "}
                    Howard Hughes Medical Institute International Student
                    Research Fellowship (2014 – 2016)
                  </p>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="1" style={{ width: "3.33%" }}>
                  <p>*</p>
                </MDBCol>
                <MDBCol md="10">
                  <p>
                    {" "}
                    Training scholarship, UCSD Neurosciences Graduate Program
                    (2011 – 2012)
                  </p>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="1" style={{ width: "3.33%" }}>
                  <p>*</p>
                </MDBCol>
                <MDBCol md="10">
                  <p>
                    {" "}
                    Summer Research Fellowship from Dean Office, Duke University
                    (2010)
                  </p>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="1" style={{ width: "3.33%" }}>
                  <p>*</p>
                </MDBCol>
                <MDBCol md="10">
                  <p>
                    {" "}
                    Leadership Program in Aging Society Fellowship Scholarship,
                    Duke Medical Center (2009)
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBCol>
          {/*  Selected Publications */}
          <MDBRow>
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
            <MDBRow className="pt-4">
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
          <MDBRow>
            <div className="d-flex justify-content-between pt-4 xs:text-base sm:text-lg">
              <h4 className="fw-bold text-uppercase text-black">
                Other Members
              </h4>
              <p className="mb-0 text-uppercase" style={{ color: "#AE023E" }}>
                --> ALL Team members
              </p>
            </div>
          </MDBRow>
          <MemberDetailimage></MemberDetailimage>
        </MDBContainer>
      </section>
    </div>
  );
};

export default Memberdetail;
