import React from "react";
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
  return (
    <div className="App">
      {/* ******************/}
      <main>
        {/* Section Carousel */}
        <Carousel></Carousel>
        {/* ******************/}
        {/* Paragraph */}
        <section>
          <MDBContainer>
            <MDBRow className="pt-5 py-4">
              <div className="d-inline-flex p-2">
                <h3 className="fw-bold text-uppercase">Who are we</h3>
              </div>
              <div className="d-inline-flex px-5 py-5">
                <h5 className="fw-normal ps-4">
                  NX is a collection of experts across multiple fields of
                  <br></br>
                  neuroscience. Together, we aim to be a frontier research
                  center
                  <br></br>
                  that translates new scientific discoveries and neurotechnology
                  <br></br>
                  into real-world applications in order to promote cognitive
                  well-
                  <br></br>
                  being and life-long learning.
                </h5>
              </div>
              <div className="d-inline-flex p-2">
                <h3 className="fw-bold text-uppercase">What we do</h3>
              </div>
            </MDBRow>
          </MDBContainer>{" "}
        </section>
        {/* ***********/}

        {/* Section Clusterimage */}
        <Clusterimage></Clusterimage>
        {/* ******************** */}

        {/* Section Tools */}
        <MDBContainer>
          <MDBRow className="pt-5 pb-4">
            <div className="d-inline-flex p-2">
              <h3 className="fw-bold">TOOLS & SERVICES</h3>
            </div>
            <Toolsimage></Toolsimage>
            <div className="d-inline-flex py-4 text-red">
              {" "}
              <h5 href="#" className="link-danger">
                Find out more
              </h5>
            </div>
          </MDBRow>
        </MDBContainer>
        {/* ******************** */}

        {/* Section News */}
        <MDBContainer>
          <MDBRow className="py-4">
            <div className="d-inline-flex p-2">
              <h3 className="fw-bold">NEW & ACTIVITY</h3>
            </div>
            <News></News>
            <div className="d-inline-flex py-4 text-red">
              {" "}
              <h5 href="#" className="link-danger">
                More News & Activity
              </h5>
            </div>
          </MDBRow>
        </MDBContainer>
        {/* ******************** */}

        {/* Section Team */}
        <MDBContainer>
          <MDBRow className="py-4">
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
