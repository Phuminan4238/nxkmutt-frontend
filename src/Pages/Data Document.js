import React from "react";
import { useState, useEffect, setIsLoaded, useContext } from "react";
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
} from "mdb-react-ui-kit";
/* Routes */
import { Link } from "react-router-dom";
/* Images */
import vr2 from "../Images/vr-2.png";
/* Components */
import Participateimage from "../Components/Participateimage";
import axios from "axios";
// Container
import Container from "@mui/material/Container";
// Lotties
import Lottie from "react-lottie-player";
import Animation from "../Components/Animation.json";
import logo from "../Images/logo.png";
import image1 from "../Images/participate-img1.png";
import image2 from "../Images/participate-img2.png";
import image3 from "../Images/participate-img3.png";
import ReactMarkdown from "react-markdown";
// Language
import { LanguageContext } from "../Components/LanguageContext";
import { useMediaQuery } from "react-responsive";

const ImageDesktop = () => {
  const [memberCover, setMembercover] = useState([]);
  useEffect(() => {
    fetch(
      "http://10.2.14.173/api/uploadfiles?populate=fileupload&filters[filename][$eq]=participate_cover_image"
    )
      .then((res) => res.json())
      .then((result) => {
        setMembercover(result.data);
      });
  }, []);

  const { selectedLanguage, handleLanguageSwitch } =
    useContext(LanguageContext);

  // image square
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
          "http://10.2.14.173/api/members?populate=uploadfiles.fileupload&populate=uploadfiles.image_square&populate=uploadfiles.image_medium&populate=uploadfiles.image_large&filters[usertype][$eq]=faculty_member&sort=sort"
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

  // Lotties
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000); // Set the delay in milliseconds (3 seconds in this example)
    return () => clearTimeout(timer);
  }, []);

  const isDesktopWidth = window.innerWidth > 1600;
  const isMobileWidth = window.innerWidth < 420;

  // Who we are
  const [uploadfilesJob, setUploadfilesJob] = useState([]);
  const [uploadfilesStudy, setUploadfilesStudy] = useState([]);
  const [uploadfilesDonation, setUploadfilesDonation] = useState([]);
  const [uploadfilesAll, setUploadfilesAll] = useState([]);
  const [hasDataFetched, setHasDataFetched] = useState(false);

  useEffect(() => {
    if (!hasDataFetched) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "http://10.2.14.173/api/participations?populate=uploadfiles.fileupload2"
          );
          const data = response.data.data;
          if (data && data.length > 0) {
            setUploadfilesAll(data);
          }
          setHasDataFetched(true);
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    }
  }, [hasDataFetched]);

  useEffect(() => {
    if (!hasDataFetched) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "http://10.2.14.173/api/contents?populate=*&filters[topic][$eq]=job_and_internship2"
          );
          const data = response.data.data;
          if (data && data.length > 0) {
            setUploadfilesJob(data);
          }
          setHasDataFetched(true);
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    }
  }, [hasDataFetched]);

  useEffect(() => {
    if (!hasDataFetched) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "http://10.2.14.173/api/contents?populate=*&filters[topic][$eq]=study_participation2"
          );
          const data = response.data.data;
          if (data && data.length > 0) {
            setUploadfilesStudy(data);
          }
          setHasDataFetched(true);
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    }
  }, [hasDataFetched]);

  useEffect(() => {
    if (!hasDataFetched) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "http://10.2.14.173/api/contents?populate=*&filters[topic][$eq]=donation"
          );
          const data = response.data.data;
          if (data && data.length > 0) {
            setUploadfilesDonation(data);
          }
          setHasDataFetched(true);
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    }
  }, [hasDataFetched]);

  useEffect(() => {
    if (!hasDataFetched) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "http://10.2.14.173/api/contents?populate=*&filters[topic][$eq]=data_document_donation"
          );
          const data = response.data.data;
          if (data && data.length > 0) {
            setUploadfilesDonation(data);
          }
          setHasDataFetched(true);
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    }
  }, [hasDataFetched]);

  const [uploadfiles, setUploadfiles] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://10.2.14.173/api/members?populate=uploadfiles.fileupload&populate=uploadfiles.image_original&populate=uploadfiles.image_square&populate=uploadfiles.image_medium&populate=uploadfiles.image_large&filters[usertype][$eq]=faculty_member&sort=sort"`
      )
      .then((response) => {
        setUploadfiles(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className={`App ${isDesktopWidth || isMobileWidth ? "" : "px-0"}`}>
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
      <Container
        maxWidth="lg"
        disableGutters={true}
        style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 5px 15px 0px" }}
      >
        <section style={{ borderTop: "1px solid black", marginTop: "1.5rem" }}>
          <MDBContainer className="xs:max-w-full sm:max-w-5xl">
            <MDBRow className="pt-0 xs:px-5 sm:px-5 md:px-0">
              <MDBCol className="d-flex pt-5 pb-0 pe-5">
                <div className="d-flex flex-column w-100">
                  <p
                    className="font-black text-uppercase mb-0 xs:text-2xl md:text-5xl"
                    style={{ fontFamily: "FontMedium" }}
                  >
                    DATA
                  </p>
                  <p
                    className="font-black text-uppercase xs:pt-6 xs:text-2xl md:text-5xl md:pt-0"
                    style={{ fontFamily: "FontMedium" }}
                  >
                    <span
                      style={{
                        fontSize: "6rem",
                        color: "#AE023E",
                        fontWeight: "normal",
                        fontFamily: "FontLight",
                      }}
                    >
                      &
                    </span>{" "}
                    DOCUMENT
                  </p>
                </div>
              </MDBCol>
              {/* <MDBCol md="4" className="p-0 d-none d-sm-block">
                {memberCover.map((member) => (
                  <img
                    className="image-fluid"
                    style={{
                      width: "-webkit-fill-available",
                      height: "300px",
                      // maxWidth: "-webkit-fill-available",
                      // height: "400px",
                      // objectFit: "contain",
                      // verticalAlign: "top",
                    }}
                    id="cluster-img"
                    src={
                      "http://10.2.14.173" +
                      member.attributes.fileupload.data[0]?.attributes.url
                    }
                    // src={image1}
                  />
                ))}
              </MDBCol> */}
              {/* <MDBCol md="4" className="p-0">
              {memberCover.map((member) => (
                <img
                  className="image-fluid"
                  style={{
                    width: "-webkit-fill-available",
                    height: "300px",
                    // maxWidth: "-webkit-fill-available",
                    // height: "400px",
                    // objectFit: "contain",
                    // verticalAlign: "top",
                  }}
                  id="cluster-img"
                  src={
                    "http://10.2.14.173" +
                    member.attributes.fileupload.data[0]?.attributes.url
                  }
                />
              ))}
            </MDBCol> */}
            </MDBRow>

            <MDBRow className="pt-4 pb-4 xs:px-5 sm:px-5 md:px-0">
              <MDBCol>
                {uploadfilesJob.map((member) => (
                  <MDBRow>
                    <MDBRow className="pt-4">
                      <p
                        className="fw-bolder text-uppercase text-black ps-2 xs:text-lg md:text-2xl"
                        style={{ fontFamily: "MyFont" }}
                      >
                        {selectedLanguage === "en"
                          ? uploadfilesJob[0].attributes.header_en ||
                            "Not found"
                          : uploadfilesJob[0].attributes.header_th ||
                            "Not found"}
                      </p>
                    </MDBRow>
                    <MDBCol className="ps-4 pt-2">
                      <MDBRow className="pt-2">
                        <MDBCol
                          size="1"
                          className="sm:p-2 md:p-0"
                          style={{ width: "1.33%" }}
                        >
                          {/* <PeopleIcon style={{ color: "#AE023E" }} /> */}
                          <li className="ps-0"></li>
                        </MDBCol>
                        <MDBCol className="ps-0">
                          {/* // Member  */}
                          {member.attributes?.content_en ? (
                            <p
                              className="fw-normal text-md"
                              style={{
                                wordBreak: "break-word",
                                maxWidth: "80%",
                              }}
                              dangerouslySetInnerHTML={{
                                __html:
                                  selectedLanguage === "en"
                                    ? member.attributes.content_en
                                    : member.attributes.content_th,
                              }}
                            />
                          ) : (
                            <p className="fw-normal text-md pt-3">-</p>
                          )}
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                  </MDBRow>
                ))}

                {uploadfilesStudy.map((member) => (
                  <MDBRow>
                    <MDBRow className="pt-4">
                      <p
                        className="fw-bolder text-uppercase text-black ps-2 xs:text-lg md:text-2xl"
                        style={{ fontFamily: "MyFont" }}
                      >
                        {selectedLanguage === "en"
                          ? uploadfilesStudy[0].attributes.header_en ||
                            "Not found"
                          : uploadfilesStudy[0].attributes.header_th ||
                            "Not found"}
                      </p>
                    </MDBRow>
                    <MDBCol className="ps-4 pt-2">
                      <MDBRow className="pt-2">
                        <MDBCol
                          size="1"
                          className="sm:p-2 md:p-0"
                          style={{ width: "1.33%" }}
                        >
                          {/* <PeopleIcon style={{ color: "#AE023E" }} /> */}
                          <li className="ps-0"></li>
                        </MDBCol>
                        <MDBCol className="ps-0">
                          {/* // Member  */}
                          {member.attributes?.content_en ? (
                            <p
                              className="fw-normal text-md"
                              style={{
                                wordBreak: "break-word",
                                maxWidth: "80%",
                              }}
                              dangerouslySetInnerHTML={{
                                __html:
                                  selectedLanguage === "en"
                                    ? member.attributes.content_en
                                    : member.attributes.content_th,
                              }}
                            />
                          ) : (
                            <p className="fw-normal text-md pt-3">-</p>
                          )}
                        </MDBCol>
                      </MDBRow>
                      <Participateimage></Participateimage>
                    </MDBCol>

                    {/* <MDBRow className="xs:px-5 sm:px-5 md:px-0 pb-4">
                      <Participateimage></Participateimage>
                    </MDBRow> */}
                  </MDBRow>
                ))}

                {uploadfilesDonation.map((member) => (
                  <MDBRow>
                    <MDBRow className="xs:px-5 sm:px-5 md:px-0 pt-4">
                      <p
                        className="fw-bolder text-uppercase text-black ps-2 xs:text-lg md:text-2xl"
                        style={{ fontFamily: "MyFont" }}
                      >
                        {selectedLanguage === "en"
                          ? uploadfilesDonation[0].attributes.header_en ||
                            "Not found"
                          : uploadfilesDonation[0].attributes.header_th ||
                            "Not found"}
                      </p>
                    </MDBRow>
                    <MDBCol className="ps-4 pt-2">
                      <MDBRow className="pt-2">
                        <MDBCol
                          size="1"
                          className="sm:p-2 md:p-0"
                          style={{ width: "1.33%" }}
                        >
                          {/* <PeopleIcon style={{ color: "#AE023E" }} /> */}
                          <li className="ps-0"></li>
                        </MDBCol>
                        <MDBCol className="ps-0">
                          {/* // Member  */}
                          {member.attributes?.content_en ? (
                            <p
                              className="fw-normal text-md"
                              style={{
                                wordBreak: "break-word",
                                maxWidth: "80%",
                              }}
                              dangerouslySetInnerHTML={{
                                __html:
                                  selectedLanguage === "en"
                                    ? member.attributes.content_en
                                    : member.attributes.content_th,
                              }}
                            />
                          ) : (
                            <p className="fw-normal text-md pt-3">-</p>
                          )}
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                  </MDBRow>
                ))}
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </Container>
    </div>
  );
};

const ImageMobile = () => {
  const [memberCover, setMembercover] = useState([]);
  useEffect(() => {
    fetch(
      "http://10.2.14.173/api/uploadfiles?populate=fileupload&filters[filename][$eq]=participate_cover_image"
    )
      .then((res) => res.json())
      .then((result) => {
        setMembercover(result.data);
      });
  }, []);

  const { selectedLanguage, handleLanguageSwitch } =
    useContext(LanguageContext);

  // image square
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
          "http://10.2.14.173/api/members?populate=uploadfiles.fileupload&populate=uploadfiles.image_square&populate=uploadfiles.image_medium&populate=uploadfiles.image_large&filters[usertype][$eq]=faculty_member&sort=sort"
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

  // Lotties
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000); // Set the delay in milliseconds (3 seconds in this example)
    return () => clearTimeout(timer);
  }, []);

  const isDesktopWidth = window.innerWidth > 1600;
  const isMobileWidth = window.innerWidth < 420;

  // Who we are
  const [uploadfilesJob, setUploadfilesJob] = useState([]);
  const [uploadfilesStudy, setUploadfilesStudy] = useState([]);
  const [uploadfilesDonation, setUploadfilesDonation] = useState([]);
  const [uploadfilesAll, setUploadfilesAll] = useState([]);
  const [hasDataFetched, setHasDataFetched] = useState(false);

  useEffect(() => {
    if (!hasDataFetched) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "http://10.2.14.173/api/participations?populate=uploadfiles.fileupload"
          );
          const data = response.data.data;
          if (data && data.length > 0) {
            setUploadfilesAll(data);
          }
          setHasDataFetched(true);
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    }
  }, [hasDataFetched]);

  useEffect(() => {
    if (!hasDataFetched) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "http://10.2.14.173/api/contents?populate=*&filters[topic][$eq]=job_and_internship2"
          );
          const data = response.data.data;
          if (data && data.length > 0) {
            setUploadfilesJob(data);
          }
          setHasDataFetched(true);
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    }
  }, [hasDataFetched]);

  useEffect(() => {
    if (!hasDataFetched) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "http://10.2.14.173/api/contents?populate=*&filters[topic][$eq]=study_participation2"
          );
          const data = response.data.data;
          if (data && data.length > 0) {
            setUploadfilesStudy(data);
          }
          setHasDataFetched(true);
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    }
  }, [hasDataFetched]);

  useEffect(() => {
    if (!hasDataFetched) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "http://10.2.14.173/api/contents?populate=*&filters[topic][$eq]=data_document_donation"
          );
          const data = response.data.data;
          if (data && data.length > 0) {
            setUploadfilesDonation(data);
          }
          setHasDataFetched(true);
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    }
  }, [hasDataFetched]);

  const [uploadfiles, setUploadfiles] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://10.2.14.173/api/members?populate=uploadfiles.fileupload&populate=uploadfiles.image_original&populate=uploadfiles.image_square&populate=uploadfiles.image_medium&populate=uploadfiles.image_large&filters[usertype][$eq]=faculty_member&sort=sort"`
      )
      .then((response) => {
        setUploadfiles(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className={`App ${isDesktopWidth || isMobileWidth ? "" : "px-0"}`}>
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
      <Container
        maxWidth="lg"
        disableGutters={true}
        style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 5px 15px 0px" }}
      >
        <section style={{ borderTop: "1px solid black", marginTop: "1.5rem" }}>
          <MDBContainer className="xs:max-w-full sm:max-w-5xl">
            <MDBRow className="pt-0 xs:px-5 sm:px-5 md:px-0">
              <MDBCol className="d-flex pt-5 pb-0 pe-5">
                <div className="d-flex flex-column w-100">
                  <p
                    className="font-black text-uppercase mb-0 xs:text-2xl md:text-5xl"
                    style={{ fontFamily: "FontMedium" }}
                  >
                    DATA
                  </p>
                  <p
                    className="font-black text-uppercase xs:pt-6 xs:text-2xl md:text-5xl md:pt-0"
                    style={{ fontFamily: "FontMedium" }}
                  >
                    <span
                      style={{
                        fontSize: "6rem",
                        color: "#AE023E",
                        fontWeight: "normal",
                        fontFamily: "FontLight",
                      }}
                    >
                      &
                    </span>{" "}
                    DOCUMENT
                  </p>
                </div>
              </MDBCol>
              <MDBCol md="4" className="p-0 d-none d-sm-block">
                {memberCover.map((member) => (
                  <img
                    className="image-fluid"
                    style={{
                      width: "-webkit-fill-available",
                      height: "300px",
                      // maxWidth: "-webkit-fill-available",
                      // height: "400px",
                      // objectFit: "contain",
                      // verticalAlign: "top",
                    }}
                    id="cluster-img"
                    src={
                      "http://10.2.14.173" +
                      member.attributes.fileupload.data[0]?.attributes.url
                    }
                    // src={image1}
                  />
                ))}
              </MDBCol>
              {/* <MDBCol md="4" className="p-0">
              {memberCover.map((member) => (
                <img
                  className="image-fluid"
                  style={{
                    width: "-webkit-fill-available",
                    height: "300px",
                    // maxWidth: "-webkit-fill-available",
                    // height: "400px",
                    // objectFit: "contain",
                    // verticalAlign: "top",
                  }}
                  id="cluster-img"
                  src={
                    "http://10.2.14.173" +
                    member.attributes.fileupload.data[0]?.attributes.url
                  }
                />
              ))}
            </MDBCol> */}
            </MDBRow>

            <MDBRow className="pt-0 pb-4 xs:px-5 sm:px-5 md:px-0">
              <MDBCol>
                {uploadfilesJob.map((member) => (
                  <MDBRow>
                    <MDBRow className="pt-4">
                      <p
                        className="fw-bolder text-uppercase text-black ps-2 xs:text-lg md:text-2xl"
                        style={{ fontFamily: "MyFont" }}
                      >
                        {selectedLanguage === "en"
                          ? uploadfilesJob[0].attributes.header_en ||
                            "Not found"
                          : uploadfilesJob[0].attributes.header_th ||
                            "Not found"}
                      </p>
                    </MDBRow>
                    <MDBCol className="ps-4 pt-2">
                      <MDBRow className="">
                        <MDBCol
                          size="1"
                          className="sm:p-2 md:p-0"
                          style={{ width: "1.33%" }}
                        >
                          {/* <PeopleIcon style={{ color: "#AE023E" }} /> */}
                          <li className="ps-0"></li>
                        </MDBCol>
                        <MDBCol className="ps-0">
                          {/* // Member  */}
                          {member.attributes?.content_en ? (
                            <p
                              className="fw-normal text-sm"
                              style={{
                                wordBreak: "break-word",
                                // maxWidth: "90%",
                              }}
                              dangerouslySetInnerHTML={{
                                __html:
                                  selectedLanguage === "en"
                                    ? member.attributes.content_en
                                    : member.attributes.content_th,
                              }}
                            />
                          ) : (
                            <p className="fw-normal text-md pt-3">-</p>
                          )}
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                  </MDBRow>
                ))}

                {uploadfilesStudy.map((member) => (
                  <MDBRow>
                    <MDBRow className="pt-4">
                      <p
                        className="fw-bolder text-uppercase text-black ps-2 xs:text-lg md:text-2xl"
                        style={{ fontFamily: "MyFont" }}
                      >
                        {selectedLanguage === "en"
                          ? uploadfilesStudy[0].attributes.header_en ||
                            "Not found"
                          : uploadfilesStudy[0].attributes.header_th ||
                            "Not found"}
                      </p>
                    </MDBRow>
                    <MDBCol className="ps-4 pt-2">
                      <MDBRow className="">
                        <MDBCol
                          size="1"
                          className="sm:p-2 md:p-0"
                          style={{ width: "1.33%" }}
                        >
                          {/* <PeopleIcon style={{ color: "#AE023E" }} /> */}
                          <li className="ps-0"></li>
                        </MDBCol>
                        <MDBCol className="ps-0">
                          {/* // Member  */}
                          {member.attributes?.content_en ? (
                            <p
                              className="fw-normal text-sm"
                              style={{
                                wordBreak: "break-word",
                                // maxWidth: "80%",
                              }}
                              dangerouslySetInnerHTML={{
                                __html:
                                  selectedLanguage === "en"
                                    ? member.attributes.content_en
                                    : member.attributes.content_th,
                              }}
                            />
                          ) : (
                            <p className="fw-normal text-md pt-3">-</p>
                          )}
                        </MDBCol>
                      </MDBRow>
                      {/* <Participateimage></Participateimage> */}
                    </MDBCol>

                    {/* <MDBRow className="xs:px-5 sm:px-5 md:px-0 pb-4">
                      <Participateimage></Participateimage>
                    </MDBRow> */}
                  </MDBRow>
                ))}
                {uploadfilesDonation.map((member) => (
                  <MDBRow>
                    <MDBRow className="xs:px-5 sm:px-5 md:px-0 pt-4">
                      <p
                        className="fw-bolder text-uppercase text-black ps-2 xs:text-lg md:text-2xl"
                        style={{ fontFamily: "MyFont" }}
                      >
                        {selectedLanguage === "en"
                          ? uploadfilesDonation[0].attributes.header_en ||
                            "Not found"
                          : uploadfilesDonation[0].attributes.header_th ||
                            "Not found"}
                      </p>
                    </MDBRow>
                    <MDBCol className="ps-4 pt-2">
                      <MDBRow className="">
                        <MDBCol
                          size="1"
                          className="sm:p-2 md:p-0"
                          style={{ width: "1.33%" }}
                        >
                          {/* <PeopleIcon style={{ color: "#AE023E" }} /> */}
                          <li className="ps-0"></li>
                        </MDBCol>
                        <MDBCol className="ps-0">
                          {/* // Member  */}
                          {member.attributes?.content_en ? (
                            <p
                              className="fw-normal text-md"
                              style={{
                                wordBreak: "break-word",
                                // maxWidth: "80%",
                              }}
                              dangerouslySetInnerHTML={{
                                __html:
                                  selectedLanguage === "en"
                                    ? member.attributes.content_en
                                    : member.attributes.content_th,
                              }}
                            />
                          ) : (
                            <p className="fw-normal text-md pt-3">-</p>
                          )}
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                  </MDBRow>
                ))}
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </Container>
    </div>
  );
};

export default function DataDocument() {
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
