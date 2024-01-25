import React, { useContext } from "react";
import { useState, useEffect, setIsLoaded } from "react";
import axios from "axios";
/* Routes */
import { Route, Routes } from "react-router";
/* MDBootstrap */
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
/* Components */
import Clusterimage from "../Components/Cluster";
import Carousel2 from "../Components/Carousel";
import Toolsimage from "../Components/Tools";
import News from "../Components/News";
import Team from "../Components/Team";
import Collaborator from "../Components/Collaborator";
import Student from "../Components/Student";
import International from "../Components/International";
import Preloader from "../Components/Preloader";
import { useMediaQuery } from "react-responsive";
import Container from "@mui/material/Container";
import classNames from "classnames";
import { createTheme, ThemeProvider } from "@mui/material";
// Language
import { LanguageContext } from "../Components/LanguageContext";

function Home(props) {
  // Theme
  const theme = createTheme({
    components: {
      MuiContainer: {
        styleOverrides: {
          maxWidthXl: {
            maxWidth: "1920px !important",
          },
        },
      },
    },
  });

  // Who we are
  const [uploadfiles, setUploadfiles] = useState([]);
  const [hasDataFetched, setHasDataFetched] = useState(false);
  useEffect(() => {
    if (!hasDataFetched) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://10.2.14.173/api/contents?populate=*&filters[topic][$eq]=who_we_are"
          );
          const data = response.data.data;
          if (data && data.length > 0) {
            setUploadfiles(data);
          }
          setHasDataFetched(true);
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    }
  }, [hasDataFetched]);

  // Search
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(
          `https://10.2.14.173/api/publications?populate=uploadfiles.fileupload&filters[title_en][$contains]=${encodeURIComponent(
            searchTerm
          )}&filters[title_th][$contains]=${encodeURIComponent(searchTerm)}`
        );
        const data = await response.json();
        setSearchResults(data.data);
        console.log("data", data.data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchSearchResults();
  }, [searchTerm]);

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  const isDesktop = useMediaQuery({ minWidth: 940 });

  const containerStyle = {
    maxWidth: isDesktop ? "5xl" : "fit",
  };

  const isDesktopWidth = window.innerWidth > 1600;
  const isMobileWidth = window.innerWidth < 420;

  const { selectedLanguage, handleLanguageSwitch } =
    useContext(LanguageContext);

  return (
    <>
      {!isMobileWidth && <Preloader />}
      {/* <Preloader />  */}
      <div className="App">
        {/* ******************/}

        <main>
          <ThemeProvider theme={theme}>
            {/* Section Carousel */}
            <Container
              maxWidth="lg"
              disableGutters={true}
              style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 5px 15px 0px" }}
            >
              <Carousel2></Carousel2>

              {/* ******************/}
              {/* Paragraph */}

              {/* <MDBContainer className={`max-w-${containerStyle.maxWidth}`}> */}

              {/* <MDBContainer
            className={classNames("max-w-7xl", {
              "desktop-width": isDesktopWidth,
            })}
          > */}

              {/* <MDBContainer className={`max-w-${containerStyle.maxWidth}`}> */}
              <MDBContainer className="max-w-5xl">
                {uploadfiles[0] && (
                  <MDBRow className="pb-4 pt-3 xs:px-5 sm:px-5 md:px-0">
                    <div className="d-inline-flex p-2">
                      <p
                        className="font-normal text-uppercase xs:text-xl md:text-3xl"
                        style={{ fontFamily: "MyFont" }}
                      >
                        {selectedLanguage === "en"
                          ? uploadfiles[0].attributes.header_en || "Not found"
                          : uploadfiles[0].attributes.header_th || "Not found"}
                      </p>
                    </div>
                    <div className="d-flex justify-content-center align-items-center xs:py-2 md:py-5">
                      <p
                        className="font-normal break-word xs:text-base md:text-lg xs:ps-0 md:ps-4"
                        style={{
                          maxWidth: "85%",
                        }}
                      >
                        {selectedLanguage === "en"
                          ? uploadfiles[0].attributes.content_en || "Not found"
                          : uploadfiles[0].attributes.content_th || "ภาษาไทย"}
                      </p>
                    </div>

                    <div className="d-inline-flex xs:p-1 xs:pt-10 md:p-2 md:pt-16">
                      <p
                        className="font-normal text-uppercase xs:text-xl md:text-3xl"
                        style={{ fontFamily: "MyFont" }}
                      >
                        {selectedLanguage === "en"
                          ? "What we do"
                          : "สิ่งที่เราทำ"}
                      </p>
                    </div>
                  </MDBRow>
                )}
              </MDBContainer>
              {/* ***********/}

              {/* Section Clusterimage */}
              <Clusterimage></Clusterimage>
              {/* ******************** */}

              {/* Section Tools */}
              <MDBContainer className={`max-w-${containerStyle.maxWidth}`}>
                <MDBRow className="xs:pb-2 md:pb-4 xs:px-5 sm:px-5 md:px-0">
                  <div className="d-inline-flex xs:p-1 xs:pt-12  md:pt-16">
                    <p
                      className="font-normal text-uppercase xs:text-xl md:text-3xl"
                      style={{ fontFamily: "MyFont" }}
                    >
                      {selectedLanguage === "en"
                        ? "TOOLS & SERVICES"
                        : "อุปกรณ์และงานบริการ"}
                    </p>
                  </div>
                </MDBRow>
              </MDBContainer>
              <section>
                <MDBContainer className={`max-w-${containerStyle.maxWidth}`}>
                  <MDBRow className="pb-4 xs:px-4 sm:px-5 md:px-0">
                    <Toolsimage></Toolsimage>
                  </MDBRow>
                </MDBContainer>
              </section>
              {/* ******************** */}

              {/* Section News */}
              <MDBContainer className={`max-w-${containerStyle.maxWidth}`}>
                <MDBRow className="xs:px-5 sm:px-5 md:px-0">
                  <div className="d-inline-flex xs:p-1 xs:pt-0 md:p-2 md:pt-8">
                    <p
                      className="font-normal text-uppercase xs:text-xl md:text-3xl"
                      style={{ fontFamily: "MyFont" }}
                    >
                      {selectedLanguage === "en"
                        ? "NEWS & ACTIVITIES"
                        : "ข่าวสารและกิจกรรม"}
                    </p>
                  </div>
                </MDBRow>
              </MDBContainer>
              <section>
                <MDBContainer className={`max-w-${containerStyle.maxWidth}`}>
                  <MDBRow className="pb-4 pt-3 xs:px-5 sm:px-5 md:px-0">
                    <News></News>
                  </MDBRow>
                </MDBContainer>
              </section>
              {/* ******************** */}

              {/* Section Team */}
              <MDBContainer className={`max-w-${containerStyle.maxWidth}`}>
                <MDBRow className="xs:px-5 sm:px-5 md:px-0">
                  <div className="d-inline-flex xs:p-1 xs:pt-2 md:p-2 ">
                    <p
                      className="font-normal text-uppercase xs:text-xl md:text-3xl"
                      style={{ fontFamily: "MyFont" }}
                    >
                      {selectedLanguage === "en"
                        ? "Our Brain Army"
                        : "ทีมงานระดมสมอง"}
                    </p>
                  </div>
                </MDBRow>
              </MDBContainer>
              <Team></Team>
              {/* ******************** */}

              {/* Section Collaborators */}
              <MDBContainer className={`max-w-${containerStyle.maxWidth}`}>
                <MDBRow className="xs:px-5 sm:px-5 md:px-0 pt-4 pb-4">
                  <div className="d-inline-flex xs:p-1 xs:pt-2 md:p-2 ">
                    <p
                      className="font-normal text-uppercase xs:text-xl md:text-3xl"
                      style={{ fontFamily: "MyFont" }}
                    >
                      {selectedLanguage === "en"
                        ? "Advisors & Collaborators"
                        : "ที่ปรึกษาและผู้ร่วมงานวิจัย"}
                    </p>
                  </div>
                </MDBRow>
              </MDBContainer>
              <Collaborator></Collaborator>
              {/* ******************** */}

              {/* Section Student */}
              <MDBContainer className={`max-w-${containerStyle.maxWidth}`}>
                <MDBRow className="xs:px-5 sm:px-5 xs:pt-2 sm:pt-5 md:px-0  pb-4">
                  <div className="d-inline-flex p-2">
                    <p
                      className="font-normal text-uppercase xs:text-xl md:text-3xl"
                      style={{ fontFamily: "MyFont" }}
                    >
                      {selectedLanguage === "en"
                        ? "Students & Research Assistants"
                        : "นักเรียนและผู้ช่วยวิจัย"}
                    </p>
                  </div>
                </MDBRow>
              </MDBContainer>
              <Student></Student>
              {/* <div className="pb-5"></div> */}
              {/* ******************** */}

              {/* Section International */}
              <MDBContainer className={`max-w-${containerStyle.maxWidth}`}>
                <MDBRow className="xs:px-5 sm:px-5 md:px-0 pt-5 pb-4">
                  <div className="d-inline-flex p-2 ">
                    <p
                      className="font-normal text-uppercase xs:text-xl md:text-3xl"
                      style={{ fontFamily: "MyFont" }}
                    >
                      {selectedLanguage === "en"
                        ? "International Collaborators"
                        : "ผู้ร่วมงานวิจัยนานาชาติ"}
                    </p>
                  </div>
                </MDBRow>
              </MDBContainer>
              <International></International>
              {/* ******************** */}
            </Container>
          </ThemeProvider>
        </main>
      </div>
    </>
  );
}

export default Home;
