import React from "react";
import { useState, useEffect, setIsLoaded } from "react";
/* Routes */
import { Route, Routes } from "react-router";
/* MDBootstrap */
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
/* Material UI */
import { Container } from "@mui/system";
/* Components */
import ResponsiveAppBar from "../Components/AllNav";
/* Components */
import Clusterimage from "../Components/Cluster";
import Carousel from "../Components/Carousel";
import Toolsimage from "../Components/Tools";
import News from "../Components/News";
import Team from "../Components/Team";
import Collaborator from "../Components/Collaborator";
import Student from "../Components/Student";
/* Pages */
import Member from "./Team Member";
import Research from "./Research";
import Publications from "./Publications";

function Home() {
  const [uploadfiles, setUploadfiles] = useState([]);

  // const [hasDataFetched, setHasDataFetched] = useState(false);

  useEffect(() => {
    // if (!hasDataFetched){
    //   axios

    // }

    fetch("https://10.35.29.186/api/contents?populate=id")
      .then((res) => res.json())
      .then((result) => {
        setUploadfiles(result.data);
      });
  });
  return (
    <div className="App">
      {/* ******************/}
      <main>
        {/* Section Carousel */}
        <Carousel></Carousel>
        {/* ******************/}
        {/* Paragraph */}
        <section>
          <MDBContainer className="xs:max-w-fit sm:max-w-7xl 2xl:max-w-screen-2xl">
            {uploadfiles.map((member) => (
              <MDBRow className="pt-5 pb-4 xs:px-5 sm:px-5 md:px-0">
                <div className="d-inline-flex p-2">
                  <h3 className="fw-bold text-uppercase">
                    {member.attributes.header_en}
                  </h3>
                </div>
                <div className="d-inline-flex px-5 py-5">
                  <h5 className="fw-normal ps-4">
                    {member.attributes.content_en}
                  </h5>
                </div>
                <div className="d-inline-flex p-2">
                  {/* Missing data*/}
                  <h3 className="fw-bold text-uppercase">What we do</h3>
                </div>
              </MDBRow>
            ))}
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
              <div className="d-inline-flex py-4 text-red">
                {" "}
                <h5
                  href="#"
                  className="xs:text-base sm:text-xl"
                  style={{ color: "#AE023E" }}
                >
                  Find out more
                </h5>
              </div>
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
              <div className="d-inline-flex py-4 text-red">
                {" "}
                <h5
                  href="#"
                  className="xs:text-base sm:text-xl"
                  style={{ color: "#AE023E" }}
                >
                  More News & Activity
                </h5>
              </div>
            </MDBRow>
          </MDBContainer>
        </section>
        {/* ******************** */}

        {/* Section Team */}
        <section>
          <MDBContainer className="xs:max-w-fit sm:max-w-7xl">
            <MDBRow className="pt-5 pb-4 xs:px-5 sm:px-5 md:px-0">
              <div className="d-inline-flex p-2">
                <h3 className="fw-bold text-uppercase">Our Brain Army</h3>
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
