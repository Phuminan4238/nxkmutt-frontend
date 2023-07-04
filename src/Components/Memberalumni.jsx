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

// Desktop
function Post() {
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
          "members?populate=uploadfiles.fileupload&populate=uploadfiles.imagesquare&populate=uploadfiles.image_medium&populate=uploadfiles.image_large&&filters[usertype][$eq]=international_collaborator&sort=sort"
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
    <div className="d-flex justify-content-between pb-4" id="tools-flex">
      <MDBContainer className="xs:max-w-full sm:max-w-7xl px-0">
        <MDBRow>
          {uploadfiles.map((member, index) => (
            <React.Fragment key={member.id}>
              <MDBCol
                md={Math.floor(12 / Math.min(uploadfiles.length, 5))}
                key={member.id}
                className="col-md-2 d-flex flex-column grow "
              >
                <MDBCard
                  className="pt-4"
                  style={{
                    boxShadow: "unset",
                    borderRadius: "0px",
                  }}
                >
                  <MDBCardImage
                    className="rounded-4"
                    src={
                      "https://10.35.29.186" +
                      member.attributes.uploadfiles.data[0]?.attributes
                        .fileupload.data[0]?.attributes.url
                    }
                    // src={
                    //   "https://10.35.29.186" +
                    //   member.attributes.uploadfiles.data[0]?.attributes
                    //     .image_square.data[0]?.attributes.url
                    // }
                    position="top"
                    alt="..."
                    style={{
                      // height: "340px",
                      objectFit: "cover",
                      borderRadius: "0px",
                      alignSelf: "center",
                      objectPosition: "50% 15%",
                      // objectPosition: "top",
                    }}
                  />
                  <MDBCardBody className="px-0">
                    <MDBCardTitle className="m-0 pt-2">
                      <p
                        className="fw-bold text-center mb-0 xs:text-xl md:text-xl"
                        style={{ color: "black", fontFamily: "MyFont" }}
                      >
                        {member.attributes.name_en}

                        {member.attributes.surname_en}
                      </p>
                    </MDBCardTitle>

                    <MDBCardText>
                      <h6
                        className="fw-light text-center"
                        style={{ color: "#AE023E", paddingTop: "1rem" }}
                      >
                        {/* {member.attributes.position_en}
                         */}
                        Organization
                      </h6>
                    </MDBCardText>
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
    </div>
  );
}

// Mobile
function Image({ members }) {
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
      <div className="d-flex justify-content-between py-4" id="tools-flex">
        <MDBContainer className="xs:max-w-full sm:max-w-7xl">
          <MDBRow>
            {uploadfiles.map((member) => (
              <MDBCol md="4" key={member.id} className="pb-4 col-sm-8">
                <Link
                  to={`/Member-Detail/${member.id}`}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    window.location.replace(`/Member-Detail/${member.id}`);
                  }}
                >
                  <MDBCard
                    style={{
                      borderBottom: "1px solid black",
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
                        alignSelf: "center",
                      }}
                    />
                    <Link
                      to={`/Member-Detail/${member.id}`}
                      onClick={() => {
                        window.scrollTo(0, 0);
                        window.location.replace(`/Member-Detail/${member.id}`);
                      }}
                    >
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
                            Main Interest, Main <br></br> Interest, Main
                            Interest
                          </p>
                        </MDBCardText>
                      </MDBCardBody>
                    </Link>
                  </MDBCard>
                </Link>
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
}

export default function Team() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      {/* Render the Image component when on mobile */}
      {isMobile && <Image />}

      {/* Hide the Post component when on mobile */}
      {!isMobile && <Post />}
    </>
  );
}
