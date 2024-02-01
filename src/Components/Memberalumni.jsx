import React, { useState, useEffect, useContext } from "react";
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
// Language
import { LanguageContext } from "./LanguageContext";

// Desktop
function Post() {
  const [uploadfiles, setUploadfiles] = useState([]);

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

  const { selectedLanguage, handleLanguageSwitch } =
    useContext(LanguageContext);

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
                      "http://10.2.14.173" +
                      member.attributes.uploadfiles.data[0]?.attributes
                        .fileupload.data[0]?.attributes.url
                    }
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
                        className="fw-bold text-center mb-0 xs:text-md md:text-md"
                        style={{ color: "black", fontFamily: "MyFont" }}
                      >
                        {selectedLanguage === "en"
                          ? `${member.attributes.prefix_en} ${member.attributes.name_en} ${member.attributes.surname_en}`
                          : `${member.attributes.prefix_th} ${member.attributes.name_th} ${member.attributes.surname_th}`}
                      </p>
                    </MDBCardTitle>

                    <MDBCardText>
                      <h6
                        className="fw-light text-center"
                        style={{ color: "#AE023E", paddingTop: "1rem" }}
                      >
                        {selectedLanguage === "en"
                          ? `${member.attributes.position_en} `
                          : `${member.attributes.position_th}`}
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
      baseURL: "http://10.2.14.173/api/",
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

  const { selectedLanguage, handleLanguageSwitch } =
    useContext(LanguageContext);

  return (
    <>
      <div
        className="d-flex justify-content-between xs:py-2 sm:py-4"
        id="tools-flex"
      >
        <MDBContainer className="xs:max-w-full sm:max-w-7xl px-0">
          <MDBRow>
            {uploadfiles.map((member) => (
              <MDBCol
                md="4"
                key={member.id}
                className="col-6 d-flex flex-column p-0 px-0"
              >
                <Link
                  to={`/Member-Detail/${member.id}`}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    window.location.replace(`/Member-Detail/${member.id}`);
                  }}
                >
                  <MDBCard
                    style={{
                      boxShadow: "unset",
                      borderRadius: "0px",
                    }}
                  >
                    <MDBCardImage
                      className="rounded-4 w-75 sm:w-100"
                      src={
                        "http://10.2.14.173" +
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
                            className="fw-bold text-center mb-0 xs:text-sm md:text-2xl"
                            style={{ color: "black" }}
                          >
                            {selectedLanguage === "en"
                              ? `${member.attributes.prefix_en} ${member.attributes.name_en} ${member.attributes.surname_en}`
                              : `${member.attributes.prefix_th} ${member.attributes.name_th} ${member.attributes.surname_th}`}
                          </p>
                        </MDBCardTitle>
                        <MDBCardText className="mb-2">
                          <p
                            className="fw-normal text-center mb-0 xs:text-xs md:text-2xl pt-2"
                            style={{ color: "black" }}
                          >
                            {selectedLanguage === "en"
                              ? `${member.attributes.position_en} `
                              : `${member.attributes.position_th}`}
                          </p>
                        </MDBCardText>
                        <MDBCardText key={member.attributes}>
                          <p
                            className="fw-normal text-center text-xs md:text-lg"
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
