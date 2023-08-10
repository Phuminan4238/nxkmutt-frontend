import React from "react";
import { useState, useEffect, setIsLoaded, useContext } from "react";
import axios from "axios";
/* Routes */
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
/* MDBootstrap */
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
/* Components */
import Contactlab from "../Components/Contactlab";
import Contactsocial from "../Components/Contactsocial";
import Contactadministration from "../Components/Contactadministration";
import DataDocument from "./Data Document";
// Lotties
import Lottie from "react-lottie-player";
import Animation from "../Components/Animation.json";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import Container from "@mui/material/Container";
import { useMediaQuery } from "react-responsive";
// Language
import { LanguageContext } from "../Components/LanguageContext";

const ImageDesktop = () => {
  const [emailData, setEmailData] = useState(null);
  const [phoneData, setPhoneData] = useState(null);
  const [locationData, setLocationData] = useState(null);
  const [staffData, setStaffData] = useState([]);
  const [hasDataFetched, setHasDataFetched] = useState(false);

  useEffect(() => {
    if (!hasDataFetched) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://10.35.29.186/api/contacts?populate=admin_staff.uploadfiles.fileupload"
          );
          const data = response.data.data;
          if (data && data.length > 0) {
            // Filter data for each type based on the ID
            const emailInfo = data.find((item) => item.id === 1);
            const phoneInfo = data.find((item) => item.id === 2);
            const locationInfo = data.find((item) => item.id === 3);
            const staffInfo = data.find((item) => item.id === 4);

            setEmailData(emailInfo ? emailInfo.attributes : null);
            setPhoneData(phoneInfo ? phoneInfo.attributes : null);
            setLocationData(locationInfo ? locationInfo.attributes : null);
            setStaffData(
              staffInfo ? staffInfo.attributes.admin_staff.data : []
            );
          }
          setHasDataFetched(true);
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    }
  }, [hasDataFetched]);

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

  const { selectedLanguage, handleLanguageSwitch } =
    useContext(LanguageContext);

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
          <MDBContainer className="xs:max-w-full sm:max-w-5xl 2xl:max-w-screen-2xl">
            <MDBRow className="pt-0 xs:pb-4 sm:pb-5 xs:px-5 sm:px-5 md:px-0">
              <MDBCol className="d-flex pt-5 pb-0 pe-5">
                <div className="d-flex flex-column w-100">
                  <p
                    className="font-black text-uppercase text-black xs:text-3xl md:text-5xl"
                    style={{ fontFamily: "MyFont" }}
                  >
                    {selectedLanguage === "en" ? "Contact Us" : "ติดต่อเรา"}
                  </p>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>

          <MDBContainer className="xs:max-w-full sm:max-w-5xl">
            <MDBRow className="pt-0 pb-5 xs:px-5 sm:px-5 md:px-0">
              <MDBCol md="6" className="xs:px-4 sm:p-0">
                <iframe
                  class="image-fluid"
                  id="cluster-img"
                  style={{ height: "350px" }}
                  src="https://maps.google.com/maps?q=nxkmutt&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
              </MDBCol>
              <MDBCol className="d-flex xs:pt-2 sm:pt-0 pb-0 pe-5">
                <div className="d-flex flex-column w-100 xs:px-0 sm:px-5">
                  <MDBRow>
                    <h4
                      className="xs:pt-5 sm:pt-0 fw-bold text-black xs:text-xl md:text-2xl"
                      style={{ fontFamily: "FontMedium" }}
                    >
                      {selectedLanguage === "en"
                        ? `${emailData?.header_en || ""} 
                          `
                        : `${emailData?.header_th || ""} 
                          `}
                    </h4>
                    <p
                      className="text-black pt-2 xs:text-base md:text-md"
                      style={{ fontFamily: "FontLight" }}
                    >
                      {selectedLanguage === "en"
                        ? `${emailData?.content_en || ""} 
                          `
                        : `${emailData?.content_th || ""} 
                          `}
                    </p>
                  </MDBRow>
                  <MDBRow className="pt-4">
                    <h4
                      className="fw-bold text-black xs:text-xl md:text-2xl"
                      style={{ fontFamily: "FontMedium" }}
                    >
                      {" "}
                      {selectedLanguage === "en"
                        ? `${phoneData?.header_en || ""} 
                      `
                        : `${phoneData?.header_th || ""} 
                      `}
                    </h4>

                    <p
                      className="text-black pt-2 xs:text-base md:text-md"
                      style={{ fontFamily: "FontLight" }}
                    >
                      {selectedLanguage === "en"
                        ? `${phoneData?.content_en || ""} 
                          `
                        : `${phoneData?.content_th || ""} 
                          `}
                    </p>
                  </MDBRow>
                  <MDBRow className="pt-4">
                    <h4
                      className="fw-bold text-black"
                      style={{ fontFamily: "FontMedium" }}
                    >
                      {selectedLanguage === "en"
                        ? `${locationData?.header_en || ""} 
                      `
                        : `${locationData?.header_th || ""} 
                      `}
                    </h4>
                    <p
                      className="text-black pt-2 xs:text-base md:text-md"
                      style={{ fontFamily: "FontLight" }}
                    >
                      {selectedLanguage === "en"
                        ? `${locationData?.content_en || ""} 
                          `
                        : `${locationData?.content_th || ""} 
                          `}
                    </p>
                  </MDBRow>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        <section>
          <MDBContainer className="xs:max-w-full sm:max-w-5xl">
            <MDBRow className="pt-2 py-4 xs:px-5 sm:px-5 md:px-0">
              <div className="d-inline-flex p-2">
                <p
                  className="font-black  xs:text-xl md:text-3xl"
                  style={{ fontFamily: "FontMedium" }}
                >
                  {selectedLanguage === "en"
                    ? "    Administration Staff"
                    : "    เจ้าหน้าที่"}
                </p>
                {/* {staffData.length > 0 && (
                  <div>
                    <h4>{staffData[0]?.attributes?.name_en}</h4>
                    <p>{staffData[0]?.attributes?.su_en}</p>
                  </div>
                )} */}
              </div>
              <div className="pt-2 py-4 px-2 mx-0 ">
                <Contactadministration></Contactadministration>
              </div>
              <div className="d-inline-flex p-2">
                <p
                  className="font-black  xs:text-xl md:text-3xl"
                  style={{ fontFamily: "FontMedium" }}
                >
                  Social Media
                </p>
              </div>
              <div className="pt-2 py-4 mx-0 md:px-0 ">
                <Contactsocial></Contactsocial>
              </div>
              <div className="d-inline-flex p-2 pt-2">
                <p
                  className="fw-bold text-black xs:text-xl md:text-3xl"
                  style={{ fontFamily: "FontMedium" }}
                >
                  {selectedLanguage === "en"
                    ? "     Lab Portal"
                    : "    ช่องทางแลปอื่นๆ"}
                </p>
              </div>
              <div className="pt-2 py-4 mx-0 md:px-0 ">
                <Contactlab></Contactlab>
              </div>
              <div className="d-inline-flex p-2 pt-2">
                <p
                  className="fw-bold text-black xs:text-xl md:text-3xl"
                  style={{ fontFamily: "FontMedium" }}
                >
                  {selectedLanguage === "en"
                    ? "       Open Data"
                    : "    ข้อมูลที่เผยแพร่"}
                </p>
              </div>
              <div className="pt-2 py-4 mx-0 md:px-0 ">
                <MDBRow className="pt-2 ps-2">
                  <MDBCol size="1" style={{ width: "3.33%" }}>
                    <DocumentScannerIcon style={{ color: "#119ED1" }} />
                  </MDBCol>
                  <MDBCol>
                    <Link
                      to={`/Data-Document`}
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                    >
                      <span
                        className="fw-normal text-lg ps-2"
                        style={{ color: "#119ED1" }}
                      >
                        Data and Document
                      </span>
                    </Link>
                  </MDBCol>
                </MDBRow>
              </div>
            </MDBRow>
          </MDBContainer>
        </section>
      </Container>
    </div>
  );
};

const ImageMobile = () => {
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

  const { selectedLanguage, handleLanguageSwitch } =
    useContext(LanguageContext);

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
          <MDBContainer className="xs:max-w-full sm:max-w-5xl 2xl:max-w-screen-2xl">
            <MDBRow className="pt-0 xs:pb-4  xs:px-5 sm:px-5 md:px-0">
              <MDBCol className="d-flex pt-5 pb-0 pe-5">
                <div className="d-flex flex-column w-100">
                  <p
                    className="font-black text-uppercase text-black xs:text-2xl md:text-5xl"
                    style={{ fontFamily: "MyFont" }}
                  >
                    {selectedLanguage === "en" ? "Contact" : "Contact_TH"}
                  </p>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>

          <MDBContainer className="xs:max-w-full sm:max-w-5xl">
            <MDBRow className="pt-0 pb-2 xs:px-5 sm:px-5 md:px-0">
              <MDBCol md="6" className="xs:px-4 sm:p-0">
                <iframe
                  class="image-fluid"
                  id="cluster-img"
                  style={{ height: "350px" }}
                  src="https://maps.google.com/maps?q=nxkmutt&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
              </MDBCol>
              <MDBCol className="d-flex xs:pt-2 sm:pt-0 pb-0 pe-5">
                <div className="d-flex flex-column w-100 xs:px-0 sm:px-5">
                  <MDBRow>
                    <h4
                      className="xs:pt-5 sm:pt-0 fw-bold text-black xs:text-lg md:text-2xl"
                      style={{ fontFamily: "FontMedium" }}
                    >
                      E-mail
                    </h4>
                    <p
                      className="text-black pt-2 xs:text-sm md:text-md"
                      style={{ fontFamily: "FontLight" }}
                    >
                      nx.kmutt.@gmail.com
                    </p>
                  </MDBRow>
                  <MDBRow className="pt-4">
                    <h4
                      className="fw-bold text-black xs:text-lg md:text-2xl"
                      style={{ fontFamily: "FontMedium" }}
                    >
                      Phone
                    </h4>

                    <p
                      className="text-black pt-2 xs:text-sm md:text-md"
                      style={{ fontFamily: "FontLight" }}
                    >
                      0123456789
                    </p>
                  </MDBRow>
                  <MDBRow className="pt-4">
                    <h4
                      className="fw-bold text-black text-lg"
                      style={{ fontFamily: "FontMedium" }}
                    >
                      Location
                    </h4>
                    <p
                      className=" text-black pt-2 xs:text-sm md:text-md"
                      style={{ fontFamily: "FontLight" }}
                    >
                      Neuroscience Center for Research and Innovation (NX),
                      Learning Institute King Mongkut's University of Technology
                      Thonburi (KMUTT) 126 Pracha Uthit Rd,
                      <br></br> Bang Mot, Thung Khru, Bangkok, Thailand
                    </p>
                  </MDBRow>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        <section>
          <MDBContainer className="xs:max-w-full sm:max-w-5xl">
            <MDBRow className="pt-2 py-4 xs:px-5 sm:px-5 md:px-0">
              <div className="d-inline-flex p-2">
                <p
                  className="font-black  xs:text-xl md:text-3xl"
                  style={{ fontFamily: "FontMedium" }}
                >
                  Administration Staff
                </p>
              </div>
              <div className="pt-2 py-4 mx-0 md:px-0 ">
                <Contactadministration></Contactadministration>
              </div>
              <div className="d-inline-flex p-2">
                <p
                  className="font-black  xs:text-xl md:text-3xl"
                  style={{ fontFamily: "FontMedium" }}
                >
                  Social Media
                </p>
              </div>
              <div className="pt-2 py-4 mx-0 md:px-0 ">
                <Contactsocial></Contactsocial>
              </div>
              <div className="d-inline-flex p-2 pt-2">
                <p
                  className="fw-bold text-black xs:text-xl md:text-3xl"
                  style={{ fontFamily: "FontMedium" }}
                >
                  Lab Portal
                </p>
              </div>
              <div className="pt-2 py-4 mx-0 md:px-0 ">
                <Contactlab></Contactlab>
              </div>
              <div className="d-inline-flex p-2 pt-2">
                <p
                  className="fw-bold text-black xs:text-xl md:text-3xl"
                  style={{ fontFamily: "FontMedium" }}
                >
                  Open Data
                </p>
              </div>
              <div className="pt-2 py-4 mx-0 md:px-0 ">
                <MDBRow className="pt-2 ps-2">
                  <MDBCol size="1" style={{ width: "3.33%" }}>
                    <DocumentScannerIcon style={{ color: "#119ED1" }} />
                  </MDBCol>
                  <MDBCol>
                    <Link
                      to={`/Data-Document`}
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                    >
                      <span
                        className="fw-normal text-lg ps-2"
                        style={{ color: "#119ED1" }}
                      >
                        Data and Document
                      </span>
                    </Link>
                  </MDBCol>
                </MDBRow>
              </div>
            </MDBRow>
          </MDBContainer>
        </section>
      </Container>
    </div>
  );
};

export default function Contactus() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      {/* Render the Image component when on mobile */}
      {isMobile && <ImageMobile />}

      {/* Hide the Post component when on mobile */}
      {!isMobile && <ImageDesktop />}
    </>
  );
}
