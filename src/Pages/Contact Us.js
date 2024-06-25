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
  const [socialMediaData, setSocialMediaData] = useState(null);
  const [hasDataFetched, setHasDataFetched] = useState(false);

  useEffect(() => {
    if (!hasDataFetched) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "http://10.2.14.173/api/contacts?populate=admin_staff.uploadfiles.fileupload"
          );
          const data = response.data.data;
          if (data && data.length > 0) {
            // Filter data for each type based on the ID
            const emailInfo = data.find((item) => item.id === 1);
            const phoneInfo = data.find((item) => item.id === 2);
            const locationInfo = data.find((item) => item.id === 3);
            const staffInfo = data.find((item) => item.id === 4);
            const socialMediaInfo = data.find((item) => item.id === 5); // Assuming social media ID is 5, adjust as needed

            setEmailData(emailInfo ? emailInfo.attributes : null);
            setPhoneData(phoneInfo ? phoneInfo.attributes : null);
            setLocationData(locationInfo ? locationInfo.attributes : null);
            setStaffData(
              staffInfo ? staffInfo.attributes.admin_staff.data : []
            );
            setSocialMediaData(
              socialMediaInfo ? socialMediaInfo.attributes : null
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.107040251083!2d100.49387324024765!3d13.651252186785438!2m3!1f0!2f0!3f0!3m2!1i1024!2i760!4f13.1!3m3!1m2!1s0x30e2a251bb6b0cf1%3A0xf656e94ff13324ad!2sKing%20Mongkut%E2%80%99s%20University%20of%20Technology%20Thonburi%20(KMUTT)!5e0!3m2!1sen!2sth!4v1715145302100!5m2!1sen!2sth"
                  class="image-fluid"
                  id="cluster-img"
                  style={{ height: "350px" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
                {/* <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.7575349643107!2d100.53505844018773!3d13.733124197779864!2m3!1f0!2f0!3f0!3m2!1i1024!2i760!4f13.1!3m3!1m2!1s0x30e29f29c9740eb5%3A0x3bd9b4c1a09fbbfa!2zTmV1cm9zY2llbmNlIENlbnRyZSBmb3IgUmVzZWFyY2ggYW5kIERldmVsb3BtZW50IHwg4Lio4Li54LiZ4Lii4LmM4Lib4LiP4Li04Lia4Lix4LiV4Li04LiB4Liy4Lij4LmC4Lij4LiE4LiX4Liy4LiH4Liq4Lih4Lit4LiH!5e0!3m2!1sen!2sth!4v1715071623236!5m2!1sen!2sth"
                  id="cluster-img"
                  style={{ height: "350px" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe> */}
              </MDBCol>
              <MDBCol className="d-flex xs:pt-2 sm:pt-0 pb-0 pe-0">
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
                      className="fw-bold text-black xs:text-xl md:text-2xl"
                      style={{ fontFamily: "FontMedium" }}
                    >
                      {selectedLanguage === "en"
                        ? `${locationData?.header_en || ""} 
                      `
                        : `${locationData?.header_th || ""} 
                      `}
                    </h4>
                    <p
                      className="text-black pt-2 xs:text-base md:text-md "
                      style={{
                        fontFamily: "FontLight",
                        marginBottom: "0.6rem",
                      }}
                      dangerouslySetInnerHTML={{
                        __html:
                          selectedLanguage === "en"
                            ? locationData?.content_markdown_en || ""
                            : locationData?.content_markdown_th || "",
                      }}
                    ></p>
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
            "http://10.2.14.173/api/contacts?populate=admin_staff.uploadfiles.fileupload"
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
            <MDBRow className="pt-0 xs:pb-4  xs:px-5 sm:px-5 md:px-0">
              <MDBCol className="d-flex pt-5 pb-0 pe-5">
                <div className="d-flex flex-column w-100">
                  <p
                    className="font-black text-uppercase text-black xs:text-2xl md:text-5xl"
                    style={{ fontFamily: "MyFont" }}
                  >
                    {selectedLanguage === "en" ? "Contact" : "ติดต่อเรา"}
                  </p>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>

          <MDBContainer className="xs:max-w-full sm:max-w-5xl">
            <MDBRow className="pt-0 pb-2 xs:px-5 sm:px-5 md:px-0">
              <MDBCol md="6" className="xs:px-4 sm:p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.107040251083!2d100.49387324024765!3d13.651252186785438!2m3!1f0!2f0!3f0!3m2!1i1024!2i760!4f13.1!3m3!1m2!1s0x30e2a251bb6b0cf1%3A0xf656e94ff13324ad!2sKing%20Mongkut%E2%80%99s%20University%20of%20Technology%20Thonburi%20(KMUTT)!5e0!3m2!1sen!2sth!4v1715145302100!5m2!1sen!2sth"
                  class="image-fluid"
                  id="cluster-img"
                  style={{ height: "350px" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </MDBCol>
              <MDBCol className="d-flex xs:pt-2 sm:pt-0 pb-0 pe-5">
                <div className="d-flex flex-column w-100 xs:px-0 sm:px-5">
                  <MDBRow>
                    <h4
                      className="xs:pt-5 sm:pt-0 fw-bold text-black xs:text-lg md:text-2xl"
                      style={{ fontFamily: "FontMedium" }}
                    >
                      {selectedLanguage === "en"
                        ? `${emailData?.header_en || ""} 
                          `
                        : `${emailData?.header_th || ""} 
                          `}
                    </h4>
                    <p
                      className="text-black pt-2  text-sm"
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
                      className="fw-bold text-black xs:text-lg md:text-2xl"
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
                      className="text-black pt-2 text-sm"
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
                      className="fw-bold text-black md:text-2xl"
                      style={{ fontFamily: "FontMedium" }}
                    >
                      {selectedLanguage === "en"
                        ? `${locationData?.header_en || ""} 
                      `
                        : `${locationData?.header_th || ""} 
                      `}
                    </h4>
                    <p
                      className="text-black pt-2 text-sm"
                      style={{
                        fontFamily: "FontLight",
                        marginBottom: "0.6rem",
                      }}
                      dangerouslySetInnerHTML={{
                        __html:
                          selectedLanguage === "en"
                            ? locationData?.content_markdown_en || ""
                            : locationData?.content_markdown_th || "",
                      }}
                    ></p>
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

export default function Contactus() {
  const isMobile = useMediaQuery({ query: "(max-width: 760px)" });

  return (
    <>
      {/* Render the Image component when on mobile */}
      {isMobile && <ImageMobile />}

      {/* Hide the Post component when on mobile */}
      {!isMobile && <ImageDesktop />}
    </>
  );
}
