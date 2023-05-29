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

const Searchresult = () => {
  const { term } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [memberResults, setMemberResults] = useState([]);
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
          `https://10.35.29.186/api/members?populate=uploadfiles.fileupload&filters[name_en][$contains]=${encodedTerm}&filters[surname_en][$contains]=${encodedTerm}`
        );
        const memberData = await memberResponse.json();
        setMemberResults(memberData.data);
        console.log("Member data:", memberData.data);

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

  return (
    <div className="App" style={{ borderTop: "1px solid black" }}>
      <section>
        <MDBContainer className="xs:max-w-full sm:max-w-7xl 2xl:max-w-screen-2xl">
          <MDBRow className="pt-0 pb-5 xs:px-5 sm:px-5 md:px-0">
            <MDBCol className="d-flex pt-5 pb-0 pe-5">
              <div className="d-flex flex-column w-100">
                <p className="font-black text-uppercase text-black xs:text-3xl md:text-5xl">
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
                <h2>Publication Results:</h2>
                {searchResults.length > 0 ? (
                  <ul>
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
                  <p>No publication results found.</p>
                )}

                {/* Render member results */}
                <h2>Member Results:</h2>
                {memberResults.length > 0 ? (
                  <ul>
                    {memberResults.map((result) => (
                      <li key={result.id}>
                        {/* Display the relevant data from the member results */}
                        <a href={result.attributes.url}>
                          {result.attributes.name_en}{" "}
                          {result.attributes.surname_en}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No member results found.</p>
                )}

                {/* Render tool results */}
                <h2>Tool Results:</h2>
                {toolResults.length > 0 ? (
                  <ul>
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
                  <p>No tool results found.</p>
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
