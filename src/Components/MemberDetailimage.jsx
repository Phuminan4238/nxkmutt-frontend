import React, { useState, useEffect, useContext, useMemo } from "react";
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
import { LanguageContext } from "./LanguageContext";

// Desktop
function Post({ title }) {
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
          "members?populate=uploadfiles.fileupload"
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

  const [uploadfilesMember, setUploadfilesMember] = useState([]);

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
          "members?populate=tags&populate=uploadfiles.fileupload&populate=uploadfiles.image_original&populate=uploadfiles.image_square&populate=uploadfiles.image_medium&populate=uploadfiles.image_large&filters[usertype][$eq]=faculty_member&sort=sort"
        );
        if (isMounted) {
          setUploadfilesMember(response.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    if (uploadfilesMember.length === 0) {
      fetchData();
    }

    return () => {
      isMounted = false;
    };
  }, [uploadfilesMember]);

  const { selectedLanguage, handleLanguageSwitch } =
    useContext(LanguageContext);

  // Helper function to shuffle an array randomly
  const shuffleArray = (array) => {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Shuffle the members array randomly on each render
  const shuffledMembers = useMemo(
    () => shuffleArray(uploadfilesMember),
    [uploadfilesMember]
  );

  return (
    <div className="d-flex justify-content-between pb-4" id="tools-flex">
      <MDBContainer className="xs:max-w-full sm:max-w-7xl px-0">
        <MDBRow>
          {shuffledMembers.slice(0, 3).map((member) => (
            <MDBCol md="4" key={member.id} className="pb-4 col-sm-8">
              <Link
                to={`/Member-Detail/${member.id}`}
                onClick={() => {
                  window.scrollTo(0, 0);
                  window.location.replace(`/Member-Detail/${member.id}`);
                }}
              >
                <MDBCard
                  className="pt-4"
                  style={{
                    borderBottom: "1px solid black",
                    boxShadow: "unset",
                    borderRadius: "0px",
                  }}
                >
                  <MDBCardImage
                    className="rounded-4"
                    src={
                      "http://10.2.14.173" +
                      member.attributes.uploadfiles.data[0]?.attributes
                        .image_original.data[0]?.attributes.url
                    }
                    position="top"
                    alt="..."
                    style={{
                      // height: "340px",
                      objectFit: "cover",
                      borderRadius: "1rem",
                      alignSelf: "center",
                      height: "300px",
                      objectPosition: "50% 15%",
                      // objectPosition: "top",
                    }}
                  />
                  <MDBCardBody>
                    <MDBCardTitle className="m-0 pt-2">
                      <p
                        className="fw-bold text-center mb-0 xs:text-xl md:text-lg"
                        style={{
                          color: "black",
                          fontFamily: "MyFont",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {/* {member.attributes.name_en}

                        {member.attributes.surname_en} */}
                        {selectedLanguage === "en"
                          ? `${member.attributes.name_en} ${member.attributes.surname_en}`
                          : `${member.attributes.name_th} ${member.attributes.surname_th}`}
                      </p>
                    </MDBCardTitle>
                    <MDBCardText>
                      <p
                        className="fw-normal text-center mb-0 xs:text-md md:text-md"
                        style={{ color: "black" }}
                      >
                        {selectedLanguage === "en"
                          ? `${member.attributes.position_en} `
                          : `${member.attributes.position_th}`}
                      </p>
                    </MDBCardText>

                    <p
                      className="fw-normal text-center text-sm md:text-sm"
                      style={{ color: "#AE023E" }}
                    >
                      {/* Handle  */}
                      {member.attributes.tags?.data.map((tag, index) => (
                        <li key={index}>
                          {selectedLanguage === "en"
                            ? tag.attributes.name_en
                            : tag.attributes.name_th}
                        </li>
                      ))}
                    </p>

                    {/* </MDBCardText> */}
                  </MDBCardBody>
                </MDBCard>
              </Link>
            </MDBCol>
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
          "members?populate=uploadfiles.fileupload"
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

  const [uploadfilesMember, setUploadfilesMember] = useState([]);

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
          "members?populate=tags&populate=uploadfiles.fileupload&populate=uploadfiles.image_original&populate=uploadfiles.image_square&populate=uploadfiles.image_medium&populate=uploadfiles.image_large&filters[usertype][$eq]=faculty_member&sort=sort"
        );
        if (isMounted) {
          setUploadfilesMember(response.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    if (uploadfilesMember.length === 0) {
      fetchData();
    }

    return () => {
      isMounted = false;
    };
  }, [uploadfilesMember]);

  const { selectedLanguage, handleLanguageSwitch } =
    useContext(LanguageContext);

  // Helper function to shuffle an array randomly
  const shuffleArray = (array) => {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Shuffle the members array randomly on each render
  const shuffledMembers = useMemo(
    () => shuffleArray(uploadfilesMember),
    [uploadfilesMember]
  );

  return (
    <>
      <div
        className="d-flex justify-content-between xs:py-2 sm:py-4"
        id="tools-flex"
      >
        <MDBContainer className="xs:max-w-full sm:max-w-7xl px-0">
          <MDBRow>
            {shuffledMembers.slice(-3).map((member) => (
              <MDBCol
                // md="4"
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
                      // borderBottom: "1px solid black",
                      boxShadow: "unset",
                      borderRadius: "0px",
                    }}
                  >
                    <MDBCardImage
                      className="rounded-4 w-75 sm:w-100"
                      src={
                        "http://10.2.14.173" +
                        member.attributes.uploadfiles.data[0]?.attributes
                          .image_square.data[0]?.attributes.url
                      }
                      position="top"
                      alt="..."
                      style={{
                        // height: "350px",
                        objectFit: "contain",
                        borderRadius: "0px",
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
                            className="fw-bold text-center mb-0 xs:text-sm"
                            style={{
                              color: "black",
                              fontFamily: "MyFont",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {selectedLanguage === "en"
                              ? `${member.attributes.name_en} ${member.attributes.surname_en}`
                              : `${member.attributes.name_th} ${member.attributes.surname_th}`}
                          </p>
                        </MDBCardTitle>
                        <MDBCardText className="mb-2">
                          <p
                            className="fw-normal text-center mb-0 xs:text-xs md:text-md"
                            style={{ color: "black", }}
                          >
                            {selectedLanguage === "en"
                              ? `${member.attributes.position_en} `
                              : `${member.attributes.position_th}`}
                          </p>
                        </MDBCardText>
                        <p
                          className="fw-normal text-center text-xs"
                          style={{ color: "#AE023E" }}
                        >
                          {/* Handle  */}
                          {member.attributes.tags?.data.map((tag, index) => (
                            <li key={index}>
                              {selectedLanguage === "en"
                                ? tag.attributes.name_en
                                : tag.attributes.name_th}
                            </li>
                          ))}
                        </p>
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

export default function MemberDetailimage() {
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
