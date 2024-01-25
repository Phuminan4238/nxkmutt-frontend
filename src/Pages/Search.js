import React from "react";
import { useState, useEffect, setIsLoaded, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
/* Routes */
import { Route, Routes } from "react-router";
/* MDBootstrap */
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
/* Components */
import Contactlab from "../Components/Contactlab";
import Contactsocial from "../Components/Contactsocial";
// Lotties
import Lottie from "react-lottie-player";
import Animation from "../Components/Animation.json";
import Container from "@mui/material/Container";
import { LanguageContext } from "../Components/LanguageContext";

const Searchresult = () => {
  const { term } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [memberResults, setMemberResults] = useState([]);
  const [eventResults, setEventResults] = useState([]);
  const [toolResults, setToolResults] = useState([]);

  const titleAttributeMap = {
    publication: {
      en: "title_en",
      th: "title_th",
    },
    member: {
      en: "name_en",
      en: "surname_en",
      th: "name_th",
      th: "surname_th",
    },
    event: {
      en: "name_en",
      th: "name_th",
    },
    tool: {
      en: "name_en",
      th: "name_th",
    },
  };

  const getTitleAttribute = (contentType) => {
    return titleAttributeMap[contentType][searchTermLanguage];
  };

  const { selectedLanguage, handleLanguageSwitch } =
    useContext(LanguageContext);

  const [searchTermLanguage, setSearchTermLanguage] = useState("en"); // Default to English

  let resultLanguage = "name_en"; // Default language is English
  if (searchTermLanguage === "th") {
    resultLanguage = "name_th"; // Switch to Thai if needed
  }

  let surnameLanguage = "surname_en"; // Default language is English
  if (searchTermLanguage === "th") {
    surnameLanguage = "surname_th"; // Switch to Thai if needed
  }

  useEffect(() => {
    const determineSearchTermLanguage = () => {
      // Check if the search term contains Thai characters
      const thaiPattern = new RegExp("[ก-๙\\s]");
      if (thaiPattern.test(term)) {
        setSearchTermLanguage("th");
      } else {
        setSearchTermLanguage("en");
      }
    };

    determineSearchTermLanguage();

    // setResultLanguage(selectedLanguage === "en" ? "name_en" : "name_th");

    const fetchSearchResults = async () => {
      try {
        const encodedTerm = term.trim().replaceAll(" ", "%20");

        let resultLanguage = "name_en"; // Default language is English
        if (searchTermLanguage === "th") {
          resultLanguage = "name_th"; // Switch to Thai if needed
        }

        // Fetch publication results
        const publicationResponse = await fetch(
          `https://10.2.14.173/api/publications?populate=uploadfiles.fileupload&filters[$or][0][title_en][$contains]=${encodedTerm}&filters[$or][1][title_th][$contains]=${encodedTerm}`
        );
        const publicationData = await publicationResponse.json();
        setSearchResults(publicationData.data);

        // Fetch member results
        const memberResponse = await fetch(
          `https://10.2.14.173/api/members?populate=uploadfiles.fileupload&filters[$or][0][name_en][$contains]=${encodedTerm}&filters[$or][1][name_th][$contains]=${encodedTerm}&filters[$or][2][surname_en][$contains]=${encodedTerm}&filters[$or][3][surname_th][$contains]=${encodedTerm}`
        );
        const memberData = await memberResponse.json();
        setMemberResults(memberData.data);

        // Fetch event results
        const eventResponse = await fetch(
          `https://10.2.14.173/api/events?populate=uploadfiles.fileupload&filters[$or][0][name_en][$contains]=${encodedTerm}&filters[$or][1][name_th][$contains]=${encodedTerm}`
        );
        const eventData = await eventResponse.json();
        setEventResults(eventData.data);

        // Fetch tool results
        const toolResponse = await fetch(
          `https://10.2.14.173/api/tools?populate=uploadfiles.fileupload&filters[$or][0][name_en][$contains]=${encodedTerm}&filters[$or][1][name_th][$contains]=${encodedTerm}`
        );
        const toolData = await toolResponse.json();
        setToolResults(toolData.data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchSearchResults();
  }, [term, searchTermLanguage, selectedLanguage]);

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
            <MDBRow className="pt-0 pb-5 xs:px-5 sm:px-5 md:px-0">
              <MDBCol className="d-flex pt-5 pb-0 pe-5">
                <div className="d-flex flex-column w-100">
                  <p
                    className="font-black text-uppercase text-black xs:text-3xl md:text-5xl"
                    style={{ fontFamily: "MyFont" }}
                  >
                    Search Result
                  </p>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>

          <MDBContainer className="xs:max-w-full sm:max-w-5xl">
            <MDBRow className="pt-0 pb-5 xs:px-5 sm:px-5 md:px-0">
              <MDBCol md="12" className="p-0">
                <div>
                  {/* Render publication results */}
                  <h4
                    className="xs:pt-5 sm:pt-4 fw-bold ps-3 text-black xs:text-xl md:text-2xl"
                    style={{ fontFamily: "FontMedium" }}
                  >
                    Publication Results:
                  </h4>
                  {searchResults.length > 0 ? (
                    <ul className="ms-4">
                      {searchResults.map((result) => (
                        <li key={result.id}>
                          <a
                            href={result.attributes.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {
                              result.attributes[
                                getTitleAttribute("publication")
                              ]
                            }
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <>
                      <ul className="ms-4">
                        <li>
                          <p>No publication results found.</p>
                        </li>
                      </ul>
                    </>
                  )}

                  {/* Render member results */}
                  <h4
                    className="xs:pt-5 sm:pt-4 fw-bold ps-3 text-black xs:text-xl md:text-2xl"
                    style={{ fontFamily: "FontMedium" }}
                  >
                    Member Results:
                  </h4>
                  {memberResults.length > 0 ? (
                    <ul className="ms-4">
                      {memberResults.map((result) => (
                        <li key={result.id}>
                          {/* Display the relevant data from the member results */}
                          <a
                            href={`https://10.2.14.173/Member-Detail/${result.id}`}
                          >
                            {result.attributes[resultLanguage]}{" "}
                            {result.attributes[surnameLanguage]}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <ul className="ms-4">
                      <li>
                        <p>No member results found.</p>
                      </li>
                    </ul>
                  )}

                  {/* Render event results */}
                  <h4
                    className="xs:pt-5 sm:pt-4 fw-bold ps-3 text-black xs:text-xl md:text-2xl"
                    style={{ fontFamily: "FontMedium" }}
                  >
                    Event Results:
                  </h4>
                  {eventResults.length > 0 ? (
                    <ul className="ms-4">
                      {eventResults.map((result) => (
                        <li key={result.id}>
                          {/* Display the relevant data from the event results */}
                          {/* <a href={result.attributes.url}> */}
                          <a
                            href={`https://10.2.14.173/News-Detail/${result.id}`}
                          >
                            {/* {selectedLanguage === "en"
                              ? `${result.attributes.name_en}`
                              : `${result.attributes.name_th}`} */}
                            {result.attributes[resultLanguage]}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <ul className="ms-4">
                      <li>
                        <p>No event results found.</p>
                      </li>
                    </ul>
                  )}

                  {/* Render tool results */}
                  <h4
                    className="xs:pt-5 sm:pt-4 fw-bold ps-3 text-black xs:text-xl md:text-2xl"
                    style={{ fontFamily: "FontMedium" }}
                  >
                    Tool Results:
                  </h4>
                  {toolResults.length > 0 ? (
                    <ul className="ms-4">
                      {toolResults.map((result) => (
                        <li key={result.id}>
                          {/* Display the relevant data from the tool results */}
                          <a
                            href={`https://10.2.14.173/Tools-Detail/${result.id}`}
                          >
                            {result.attributes[resultLanguage]}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <>
                      <ul className="ms-4">
                        <li>
                          <p>No member results found.</p>
                        </li>
                      </ul>
                    </>
                  )}
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </Container>
    </div>
  );
};

export default Searchresult;

{
  /* <h2 className="ps-4">Member Results:</h2>
                {memberResults.length > 0 ? (
                  <ul className="ms-4">
                    {memberResults.map((result) => (
                      <li key={result.id}>
                        <a href={result.attributes.url}>
                          {result.attributes.name_en}{" "}
                          {result.attributes.surname_en}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <>
                    <ul className="ms-4">
                      <li>
                        <p>No member results found.</p>
                      </li>
                    </ul>
                  </>
                )} */
}
