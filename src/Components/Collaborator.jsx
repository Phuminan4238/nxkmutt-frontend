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

function Profile() {
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
          "members?populate=uploadfiles.fileupload&filters[usertype][$eq]=advisor_and_collaborator"
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

  const colors = ["#F2B032", "#119ED1"];

  return (
    <>
      <MDBContainer className="fluid p-0" id="cluster-container">
        <MDBRow className="p-0 w-fill" id="cluster-gutter">
          {uploadfiles.map((member, index) => (
            <React.Fragment key={member.id}>
              <MDBCol
                md={Math.floor(12 / Math.min(uploadfiles.length, 5))}
                key={member.id}
                className="col-md-2 d-flex flex-column grow p-0"
              >
                {/* <Link
                  to={`/Member-Detail/${member.id}`}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    window.location.replace(`/Member-Detail/${member.id}`);
                  }}
                > */}
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
                      height: "350px",
                      objectPosition: "50% 15%",
                    }}
                  />

                  <MDBCardBody>
                    <div className="d-flex align-items-center justify-content-center flex-column w-100 h-100">
                      <p
                        className="fw-bold text-white text-center mt-2 mb-2 xs:text-lg sm:text-xl md:text-2xl"
                        style={{
                          fontFamily: "MyFont",
                        }}
                      >
                        <span>{member.attributes.prefix_en}</span>{" "}
                        {member.attributes.name_en}&nbsp;
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

                      <p className="fw-normal text-white text-center xs:text-lg sm:text-xl">
                        {member.attributes.position_en}
                      </p>
                    </div>
                  </MDBCardBody>
                </MDBCard>
                {/* </Link> */}
              </MDBCol>
              {(index + 1) % 5 === 0 && index + 1 !== uploadfiles.length && (
                <div className="w-100"></div>
              )}
            </React.Fragment>
          ))}
        </MDBRow>
      </MDBContainer>
      {/* 
      <MDBContainer className="fluid p-0" id="cluster-container">
        <MDBRow className="p-0 w-fill">
          <MDBCol md="3" className="col-md-3 d-flex flex-column p-0 bg-warning">
            <img src={teamimg5} class="image-fluid" id="cluster-img" />
            <div className="d-flex p-5 align-content-center flex-column w-100">
              <h3
                className="text-white text-center"
                style={{
                  borderBottom: "1px solid white",
                  paddingBottom: "1rem",
                }}
              >
                Name Surname
              </h3>
              <h5 className="text-white fw-light text-center">
                Position / Main Interest
              </h5>
            </div>
          </MDBCol>

          <MDBCol md="3" className="col-md-3 d-flex flex-column p-0 bg-primary">
            <img src={teamimg5} class="image-fluid" id="cluster-img" />
            <div className="d-flex p-5 align-content-center flex-column w-100">
              <h3
                className="text-white text-center"
                style={{
                  borderBottom: "1px solid white",
                  paddingBottom: "1rem",
                }}
              >
                Name Surname
              </h3>
              <h5 className="text-white fw-light text-center">
                Position / Main Interest
              </h5>
            </div>
          </MDBCol>
          <MDBCol md="3" className="col-md-3 d-flex flex-column p-0 bg-warning">
            <img src={teamimg5} class="image-fluid" id="cluster-img" />
            <div className="d-flex p-5 align-content-center flex-column w-100">
              <h3
                className="text-white text-center"
                style={{
                  borderBottom: "1px solid white",
                  paddingBottom: "1rem",
                }}
              >
                Name Surname
              </h3>
              <h5 className="text-white fw-light text-center">
                Position / Main Interest
              </h5>
            </div>
          </MDBCol>
          <MDBCol md="3" className="col-md-3 d-flex flex-column p-0 bg-primary">
            <img src={teamimg5} class="image-fluid" id="cluster-img" />
            <div className="d-flex p-5 align-content-center flex-column w-100">
              <h3
                className="text-white text-center"
                style={{
                  borderBottom: "1px solid white",
                  paddingBottom: "1rem",
                }}
              >
                Name Surname
              </h3>
              <h5 className="text-white fw-light text-center">
                Position / Main Interest
              </h5>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer> */}
    </>
  );
}

export default function Collaborator() {
  return (
    <>
      <Profile />
    </>
  );
}
