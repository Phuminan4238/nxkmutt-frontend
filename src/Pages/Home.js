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

function Home(props) {
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

  return (
    <div className="App">
      {/* ******************/}
      <main>
        {/* Section Carousel */}
        <Carousel2></Carousel2>

        {/* ******************/}
        {/* Paragraph */}
        <section>
          <MDBContainer className="xs:max-w-fit sm:max-w-7xl 2xl:max-w-screen-2xl">
            {uploadfiles[0] && (
              <MDBRow className="pt-5 pb-4 xs:px-5 sm:px-5 md:px-0">
                <div className="d-inline-flex p-2">
                  <p className="font-black text-uppercase xs:text-xl md:text-3xl">
                    {uploadfiles[0].attributes.header_en}
                  </p>
                </div>
                <div className="d-inline-flex px-5 xs:py-2 md:py-5">
                  <p className="fw-normal xs:text-base md:text-lg ps-4">
                    {uploadfiles[0].attributes.content_en}
                  </p>
                </div>
                <div className="d-inline-flex xs:p-1 xs:pt-12 md:p-2 md:pt-16">
                  <p className="fw-bold text-uppercase xs:text-xl md:text-3xl">
                    What we do
                  </p>
                </div>
              </MDBRow>
            )}
          </MDBContainer>
        </section>
        {/* ***********/}

        {/* Section Clusterimage */}
        <Clusterimage></Clusterimage>
        {/* ******************** */}

        {/* Section Tools */}
        <section>
          <MDBContainer className="xs:max-w-fit sm:max-w-7xl">
            <MDBRow className="pt-5 pb-4 xs:px-5 sm:px-5 md:px-0">
              <div className="d-inline-flex p-2">
                <h3 className="fw-bold">TOOLS & SERVICES</h3>
              </div>
              <Toolsimage></Toolsimage>
            </MDBRow>
          </MDBContainer>
        </section>
        {/* ******************** */}

        {/* Section News */}
        <section>
          <MDBContainer className="xs:max-w-fit sm:max-w-7xl">
            <MDBRow className="pb-4 xs:px-5 xs:pt-1 sm:px-5 sm:pt-5 md:px-0">
              <div className="d-inline-flex p-2">
                <h3 className="fw-bold">NEW & ACTIVITY</h3>
              </div>
              <News></News>
            </MDBRow>
          </MDBContainer>
        </section>
        {/* ******************** */}

        {/* <section>
          <MDBContainer className="xs:max-w-fit sm:max-w-fit">
            <MDBRow className="pt-5 pb-4 xs:px-5 sm:px-5 md:px-0">
              <div className="d-inline-flex p-2">
                <h3 className="fw-bold text-start">TOOLS & SERVICES</h3>
              </div>
            </MDBRow>
          </MDBContainer>
        </section> */}

        {/* Section Team */}
        <section>
          <MDBContainer className="xs:max-w-fit sm:max-w-7xl">
            <MDBRow className="pb-4 xs:pt-5 sm:pt-0 xs:px-5 sm:px-5 md:px-0">
              <div className="d-inline-flex p-2">
                <h3 className="fw-bold text-uppercase text-left">
                  Our Brain Army
                </h3>
              </div>
            </MDBRow>
          </MDBContainer>
          <Team></Team>
          {/* ******************** */}

          {/* Section Collaborators */}
          <MDBContainer>
            <MDBRow className="py-4">
              <div className="d-inline-flex p-2">
                <h3 className="fw-bold text-uppercase">Collaborators</h3>
              </div>
            </MDBRow>
          </MDBContainer>
          <Collaborator></Collaborator>
        </section>
        {/* ******************** */}

        {/* Section Student */}
        <MDBContainer>
          <MDBRow className="pt-5 pb-4">
            <div className="d-inline-flex p-2">
              <h3 className="fw-bold text-uppercase">
                Students & Research Assistants & Alumni{" "}
              </h3>
            </div>
          </MDBRow>
        </MDBContainer>
        <Student></Student>
        <div className="pb-5"></div>
        {/* ******************** */}
      </main>
    </div>
  );
}

export default Home;
