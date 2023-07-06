import React from "react";
import { useState, useEffect, setIsLoaded } from "react";
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

const Searchresult = () => {
  const { term } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [memberResults, setMemberResults] = useState([]);
  const [eventResults, setEventResults] = useState([]);
  const [toolResults, setToolResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const encodedTerm = encodeURIComponent(term);

        // Fetch publication results
        const publicationResponse = await fetch(
          `https://10.35.29.186/api/publications?populate=uploadfiles.fileupload&filters[title_en][$contains]=${encodedTerm}&filters[title_th][$contains]=${encodedTerm}`
        );
        const publicationData = await publicationResponse.json();
        setSearchResults(publicationData.data);
        console.log("Publication data:", publicationData.data);

        // Fetch member results
        const memberResponse = await fetch(
          `https://10.35.29.186/api/members?populate=uploadfiles.fileupload&filters[$or][0][name_en][$contains]=${encodedTerm}&filters[$or][1][surname_en][$contains]=${encodedTerm}`
        );
        const memberData = await memberResponse.json();
        setMemberResults(memberData.data);
        console.log("Member data:", memberData.data);

        // Fetch event results
        const eventResponse = await fetch(
          `https://10.35.29.186/api/events?populate=uploadfiles.fileupload&filters[name_en][$contains]=${encodedTerm}&filters[name_th][$contains]=${encodedTerm}`
        );
        const eventData = await eventResponse.json();
        setEventResults(eventData.data);
        console.log("Event data:", eventData.data);

        // Fetch tool results
        const toolResponse = await fetch(
          `https://10.35.29.186/api/tools?populate=uploadfiles.fileupload&filters[name_en][$contains]=${encodedTerm}&filters[name_th][$contains]=${encodedTerm}`
        );
        const toolData = await toolResponse.json();
        setToolResults(toolData.data);
        console.log("Tool data:", toolData.data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };
    fetchSearchResults();
  }, [term]);

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
    <div className={`App ${isDesktopWidth || isMobileWidth ? "" : "px-5"}`}>
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
      <section style={{ borderTop: "1px solid black", marginTop: "1.5rem" }}>
        <MDBContainer className="xs:max-w-full sm:max-w-7xl 2xl:max-w-screen-2xl">
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

        <MDBContainer className="xs:max-w-full sm:max-w-7xl">
          <MDBRow className="pt-0 pb-5 xs:px-5 sm:px-5 md:px-0">
            <MDBCol md="6" className="p-0">
              <div>
                {/* Render publication results */}
                <h4
                  className="xs:pt-5 sm:pt-0 fw-bold ps-3 text-black xs:text-xl md:text-2xl"
                  style={{ fontFamily: "FontMedium" }}
                >
                  Publication Results:
                </h4>
                {searchResults.length > 0 ? (
                  <ul className="ms-4">
                    {searchResults.map((result) => (
                      <li key={result.id}>
                        {/* Display the relevant data from the search results */}
                        <a
                          href={result.attributes.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {result.attributes.title_en}
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

                {/* <h2 className="ps-4">Member Results:</h2>
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
                )} */}

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
                          href={`https://10.35.29.186/Member-Detail/${result.id}`}
                        >
                          {result.attributes.name_en}{" "}
                          {result.attributes.surname_en}
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
                        {/* Display the relevant data from the tool results */}
                        <a href={result.attributes.url}>
                          {result.attributes.name_en}
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
                        <a href={result.attributes.url}>
                          {result.attributes.name_en}
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
            {/* <MDBCol className="d-flex pb-0 pe-5">
              <div className="d-flex flex-column w-100 xs:px-0 sm:px-5">
                <MDBRow>
                  <h4 className="xs:pt-5 sm:pt-0 fw-bold text-black xs:text-xl md:text-2xl">
                    E-mail
                  </h4>
                  <p className="text-black pt-2 xs:text-base md:text-lg">
                    nx.kmutt.@gmail.com
                  </p>
                </MDBRow>
                <MDBRow className="pt-4">
                  <h4 className="fw-bold text-black xs:text-xl md:text-2xl">
                    Phone
                  </h4>
                  <p className=" text-black pt-2 xs:text-base md:text-lg ">
                    0123456789
                  </p>
                </MDBRow>
                <MDBRow className="pt-4">
                  <h4 className="fw-bold text-black">Location</h4>
                  <p className=" text-black pe-5 pt-2 xs:text-base md:text-lg">
                    Neuroscience Center for Research and Innovation (NX),
                    Learning Institute King Mongkut's University of Technology
                    Thonburi (KMUTT) 126 Pracha Uthit Rd,
                    <br></br> Bang Mot, Thung Khru, Bangkok, Thailand
                  </p>
                </MDBRow>
              </div>
            </MDBCol> */}
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
};

export default Searchresult;
