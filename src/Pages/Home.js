import React from "react";
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
      const instance = axios.create({
        baseURL: "https://10.35.29.186/api/",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      instance
        .get("contents?populate=*&filters[topic][$eq]=who_we_are")
        .then((response) => {
          const data = response.data.data;
          if (data && data.length > 0) {
            setUploadfiles(data);
          }
          setHasDataFetched(true);
        })
        .catch((error) => {
          // console.log(error);
        });
    }
  }, [hasDataFetched]);

  // Search
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(
          `https://10.35.29.186/api/publications?populate=uploadfiles.fileupload&filters[title_en][$contains]=${encodeURIComponent(
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
    maxWidth: isDesktop ? "7xl" : "fit",
  };

  const isDesktopWidth = window.innerWidth > 1600;

  return (
    <>
      {/* <Preloader /> */}
      <div className="App">
        {/* ******************/}

        <main>
          <ThemeProvider theme={theme}>
            {/* Section Carousel */}
            <Container maxWidth="xl" disableGutters={true}>
              <Carousel2></Carousel2>

              {/* ******************/}
              {/* Paragraph */}

              {/* <MDBContainer className={`max-w-${containerStyle.maxWidth}`}> */}

              {/* <MDBContainer
            className={classNames("max-w-7xl", {
              "desktop-width": isDesktopWidth,
            })}
          > */}

              <MDBContainer className={`max-w-${containerStyle.maxWidth}`}>
                {uploadfiles[0] && (
                  <MDBRow className="pb-4 pt-3 xs:px-5 sm:px-5 md:px-0">
                    <div className="d-inline-flex p-2">
                      <p
                        className="font-normal text-uppercase xs:text-xl md:text-3xl"
                        style={{ fontFamily: "MyFont" }}
                      >
                        {uploadfiles[0].attributes.header_en}
                      </p>
                    </div>
                    <div className="d-flex justify-content-center align-items-center xs:py-2 md:py-5">
                      <p
                        className="font-normal break-word xs:text-base md:text-lg"
                        style={{
                          maxWidth: "85%",
                        }}
                      >
                        {uploadfiles[0].attributes.content_en}
                      </p>
                    </div>

                    <div className="d-inline-flex xs:p-1 xs:pt-10 md:p-2 md:pt-16">
                      <p
                        className="font-normal text-uppercase xs:text-xl md:text-3xl"
                        style={{ fontFamily: "MyFont" }}
                      >
                        What we do
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
                      TOOLS & SERVICES
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
                      NEW & ACTIVITY
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
                      Our Brain Army
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
                      Advisors & Collaborators
                    </p>
                  </div>
                </MDBRow>
              </MDBContainer>
              <Collaborator></Collaborator>
              {/* ******************** */}

              {/* Section Student */}
              <MDBContainer className={`max-w-${containerStyle.maxWidth}`}>
                <MDBRow className="xs:px-5 sm:px-5 md:px-0 pt-5 pb-4">
                  <div className="d-inline-flex p-2">
                    <p
                      className="font-normal text-uppercase xs:text-xl md:text-3xl"
                      style={{ fontFamily: "MyFont" }}
                    >
                      Students & Research Assistants
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
                      International Collaborators
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
