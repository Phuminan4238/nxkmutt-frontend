import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import membericon from "../Images/member-icon.png";
import teamimg5 from "../Images/team-5.png";

function ImageDesktop() {
  const [uploadfiles, setUploadfiles] = useState([]);

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
          "members?populate=uploadfiles.fileupload&filters[usertype][$eq]=international_collaborator"
        );
        if (isMounted) {
          setUploadfiles(response.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    if (uploadfiles.length === 0) {
      fetchData();
    }

    return () => {
      isMounted = false;
    };
  }, [uploadfiles]);

  const colors = ["#E0B054", "#88BFD2"];

  return (
    <>
      <MDBContainer className="fluid p-0 pb-4" id="cluster-container">
        <MDBRow className="p-0 w-fill" id="cluster-gutter">
          {uploadfiles.map((member, index) => (
            <React.Fragment key={member.id}>
              <MDBCol
                md={Math.floor(12 / Math.min(uploadfiles.length, 5))}
                key={member.id}
                className="col-md-2 d-flex flex-column grow p-0"
              >
                <MDBCard
                  className=""
                  style={{
                    boxShadow: "unset",
                    borderRadius: "0px",
                    backgroundColor: colors[index % colors.length],
                  }}
                >
                  <MDBCardImage
                    className="rounded-0"
                    src={
                      "https://10.35.29.186" +
                      member.attributes.uploadfiles.data[0]?.attributes
                        .fileupload.data[0]?.attributes.url
                    }
                    position="top"
                    alt="..."
                    style={{
                      objectFit: "cover",
                      borderRadius: "0px",
                      alignSelf: "center",
                      // height: "300px",
                      height: "50%",
                      objectPosition: "50% 15%",
                    }}
                  />

                  <MDBCardBody style={{ padding: "0px" }}>
                    <div className="d-flex align-items-center justify-content-center flex-column w-100 h-100">
                      <p
                        className="text-white text-center mt-2 mb-2 xs:text-md sm:text-md"
                        style={{
                          fontFamily: "FontMedium",
                        }}
                      >
                        {member.attributes.name_en}
                        <br></br>
                        {member.attributes.surname_en}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <hr
                            style={{
                              color: "white",
                              opacity: "1",
                              width: "30px",
                              height: "3px",
                              margin: "1rem 0",
                            }}
                          />
                        </div>
                      </p>

                      <p className="fw-normal text-white text-center xs:text-md">
                        {member.attributes.position_en}
                      </p>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              {(index + 1) % 5 === 0 && index + 1 !== uploadfiles.length && (
                <div className="w-100"></div>
              )}
            </React.Fragment>
          ))}
        </MDBRow>
      </MDBContainer>
    </>
  );
}

// Mobile
function ImageMobile({ members }) {
  const [uploadfiles, setUploadfiles] = useState([]);

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
          "members?populate=uploadfiles.fileupload&filters[usertype][$eq]=international_collaborator"
        );
        if (isMounted) {
          setUploadfiles(response.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    if (uploadfiles.length === 0) {
      fetchData();
    }

    return () => {
      isMounted = false;
    };
  }, [uploadfiles]);

  return (
    <>
      <div className="d-flex justify-content-between pt-0 pb-4" id="tools-flex">
        <MDBContainer className="xs:max-w-full sm:max-w-7xl">
          <MDBRow>
            {uploadfiles.map((member) => (
              <MDBCol md="4" key={member.id} className="pb-0 col-sm-8">
                <MDBCard
                  style={{
                    // borderBottom: "1px solid black",
                    boxShadow: "unset",
                    borderRadius: "0px",
                  }}
                >
                  <MDBCardImage
                    className="rounded-4 w-75 sm:w-100"
                    src={
                      "https://10.35.29.186" +
                      member.attributes.uploadfiles.data[0]?.attributes
                        .fileupload.data[0]?.attributes.url
                    }
                    position="top"
                    alt="..."
                    style={{
                      // height: "350px",
                      objectFit: "contain",
                      // borderRadius: "0px",
                      alignSelf: "center",
                    }}
                  />

                  <MDBCardBody>
                    <MDBCardTitle className="m-0">
                      <p
                        className="fw-bold text-center mb-0 xs:text-xl md:text-2xl"
                        style={{ color: "#AE023E" }}
                      >
                        {member.attributes.name_en}
                        <br></br>
                        {member.attributes.surname_en}
                      </p>
                    </MDBCardTitle>
                    <MDBCardText>
                      <p
                        className="fw-normal text-center mb-0 xs:text-md md:text-2xl"
                        style={{ color: "#AE023E" }}
                      >
                        {member.attributes.position_en}
                      </p>
                    </MDBCardText>
                    <MDBCardText key={member.attributes}>
                      <p
                        className="fw-normal text-center text-sm md:text-lg"
                        style={{ color: "#AE023E" }}
                      >
                        Main Interest, Main <br></br> Interest, Main Interest
                      </p>
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
}

export default function International() {
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
