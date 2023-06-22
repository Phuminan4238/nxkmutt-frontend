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

function Studentdetail({ title }) {
  let { id } = useParams();
  const [uploadfiles, setUploadfiles] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://10.35.29.186/api/members/${id}?populate=uploadfiles.fileupload&filters[usertype][$eq]=research_assistance`
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
      baseURL: "https://10.35.29.186/api/",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    async function fetchData() {
      try {
        const response = await instance.get(
          "members?populate=uploadfiles.fileupload&filters[usertype][$eq]=research_assistance"
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
            <MDBCol className="col-md-8 col-12 ps-0 pt-2">
              <span
                className="text-uppercase fw-bold "
                style={{ fontFamily: "FontMedium", fontSize: "1.3rem" }}
              >
                {/* {tags.attributes?.name_en || "not found"} */}
                All Student
              </span>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBContainer className="pt-4 xs:max-w-full sm:max-w-7xl sm:px-5 md:px-0">
          {/* {uploadfiles.map((member) => ( */}
          <MDBRow className="pt-0 pb-5 xs:px-5 sm:px-5 md:px-0">
            <MDBCol className="d-flex pb-0 pe-5">
              <div className="d-flex flex-column w-100 h-fit">
                <h1
                  className="fw-bold text-uppercase text-black"
                  style={{ fontFamily: "MyFont" }}
                >
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
                  position ?{" "}
                  {uploadfiles.attributes?.position_en || "not found"}
                </h3>

                <h6 className="" style={{ color: "#AE023E" }}>
                  (from local: ) Neuroscience Center for Research and Innovation
                  (NX), Learning Institute, KMUTT
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
              <div className="d-flex flex-column h-fit">
                <MDBCardImage
                  className="rounded-0 h-fit"
                  src={
                    "https://10.35.29.186" +
                      uploadfiles.attributes?.uploadfiles.data[0]?.attributes
                        .fileupload.data[0]?.attributes.url || "not found"
                  }
                  position="top"
                  alt="..."
                  style={{
                    height: "380px",
                    width: "380px",
                    objectFit: "initial",
                    borderRadius: "0px",
                    alignSelf: "center",
                  }}
                />
              </div>
            </MDBCol>
          </MDBRow>{" "}
          <MDBRow
            style={{
              borderBottom: "1px solid black",
            }}
          ></MDBRow>
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
                  className="pt-0 pb-5 xs:px-5 sm:px-5 md:px-0"
                  key={member.id}
                  style={{
                    borderBottom: "1px solid black",
                    marginTop: "1.5rem",
                  }}
                >
                  <MDBCol className="d-flex pb-0 pe-5">
                    <div className="d-flex flex-column w-100">
                      <h1
                        className="fw-bold text-uppercase text-black"
                        style={{ fontFamily: "MyFont" }}
                      >
                        {member.attributes?.name_en || "not found"}
                        <span
                          style={{
                            paddingLeft: "0.5rem",
                            fontFamily: "FontMedium",
                          }}
                        >
                          (
                        </span>
                        {member.attributes?.nickname_en}
                        <span>)</span>
                      </h1>
                      <h1
                        className="fw-bold text-uppercase text-black"
                        style={{ fontFamily: "MyFont" }}
                      >
                        {member.attributes?.surname_en || "not found"}
                      </h1>
                      <h3
                        className="fw-normal text-normal pt-2 mb-1"
                        style={{ color: "#AE023E" }}
                      >
                        {member.attributes?.position_en || "not found"}
                      </h3>
                      <h6 className="" style={{ color: "#AE023E" }}>
                        Neuroscience Center for Research and Innovation (NX),
                        Learning Institute, KMUTT
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
                            {member.attributes?.email || "not found"}
                          </span>
                        </MDBCol>
                      </MDBRow>
                      <p
                        className="fw-normal text-normal pt-3"
                        style={{ maxWidth: "90%" }}
                      >
                        {member.attributes?.bio_en || "not found"}
                      </p>
                    </div>
                  </MDBCol>
                  <MDBCol md="4" className="xs:px-5 sm:px-5 md:px-0">
                    <div className="d-flex flex-column  h-fit">
                      <MDBCardImage
                        className="rounded-0"
                        src={
                          "https://10.35.29.186" +
                            member.attributes?.uploadfiles.data[0]?.attributes
                              .fileupload.data[0]?.attributes.url || "not found"
                        }
                        position="top"
                        alt="..."
                        style={{
                          height: "380px",
                          width: "380px",
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
    </div>
  );
}

export default Studentdetail;
