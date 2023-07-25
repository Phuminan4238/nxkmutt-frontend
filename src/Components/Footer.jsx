import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import logo from "../Images/logo.svg";
import logokmutt from "../Images/logo-kmutt.png";
import { useMediaQuery } from "react-responsive";
import Container from "@mui/material/Container";

function FooterDesktop() {
  const isDesktopWidth = window.innerWidth > 1600;
  const isMobileWidth = window.innerWidth < 420;
  return (
    <div
      className={`text-center text-lg-start text-muted ${
        isDesktopWidth || isMobileWidth ? "" : "px-0"
      }`}
    >
      <MDBFooter id="footer-bg">
        <section>
          <MDBContainer className="text-center text-md-start xs:max-w-full">
            <MDBRow className="pt-0 pb-0">
              <MDBCol
                className="MuiContainer-root MuiContainer-maxWidthXl css-19r6kue-MuiContainer-root"
                id="footerpadding"
                style={{
                  background: "#1e1e1e",
                }}
              >
                <div className="d-flex flex-row mt-3 text-white">
                  <div className="col-2 col-md-1" style={{ width: "5.33%" }}>
                    {/* <img
                    src={logokmutt}
                    class="image-fluid pr-6"
                    id="logokmutt-img"
                    style={{ borderRight: "1px solid white" }}
                  /> */}
                    <img
                      src={logokmutt}
                      height="60"
                      alt=""
                      loading="lazy"
                      // style={{
                      //   borderRight: "1px solid white",
                      //   paddingRight: "1rem",
                      // }}
                    />
                  </div>
                  <div
                    className="mx-4 ps-4 sm:ps-0"
                    style={{
                      borderRight: "1px solid white",
                    }}
                  ></div>
                  {/* 
                <div className="col-3 col-md-2 pt-3 ms-4 ms-lg-6">
                  <img src={logo} height="40" alt="" loading="lazy" />
                </div> */}
                  <div className="col-3 col-md-2 pt-0 ms-sm-4 ms-lg-0">
                    <img src={logo} height="70" alt="" loading="lazy" />
                    <style>
                      {`
      @media (min-width: 1201px) {
        .ms-lg-0 {
          margin-left: 2rem !important;
        }
      }
    `}
                    </style>
                  </div>
                </div>

                <div className="d-flex flex-row mt-3 text-white">
                  <div className="col-5 col-md-2 p-2 ps-0">
                    {/* Privacy policy */}
                  </div>
                  <div className="col-5 col-md-2 p-2 ps-0"></div>
                </div>
                <div className="d-flex flex-row mt-3 text-white text-sm text-start">
                  Copyright © 2023 King Mongkut’s University of Technology
                  Thonburi, All rights reserved.
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </MDBFooter>
    </div>
  );
}

function FooterMobile() {
  const isDesktopWidth = window.innerWidth > 1600;
  const isMobileWidth = window.innerWidth < 420;
  return (
    <div
      className={`text-center text-lg-start text-muted ${
        isDesktopWidth || isMobileWidth ? "" : "px-0"
      }`}
    >
      <MDBFooter id="footer-bg">
        <section>
          <Container maxWidth="lg" className="px-0">
            <MDBRow className="pt4 pb-0" id="footer-gutter">
              <MDBCol
                // className="MuiContainer-root MuiContainer-maxWidthXl css-19r6kue-MuiContainer-root"
                id="footerpadding"
                style={{
                  background: "#1e1e1e",
                }}
              >
                <div className="d-flex flex-row mt-3 text-white">
                  <div className="col-2 col-md-1" style={{ width: "5.33%" }}>
                    {/* <img
                    src={logokmutt}
                    class="image-fluid pr-6"
                    id="logokmutt-img"
                    style={{ borderRight: "1px solid white" }}
                  /> */}
                    <img
                      src={logokmutt}
                      height="70"
                      alt=""
                      loading="lazy"
                      // style={{
                      //   borderRight: "1px solid white",
                      //   paddingRight: "1rem",
                      // }}
                    />
                  </div>
                  <div
                    className="mx-4"
                    style={{
                      borderRight: "1px solid white",
                    }}
                  ></div>
                  {/* 
                <div className="col-3 col-md-2 pt-3 ms-4 ms-lg-6">
                  <img src={logo} height="40" alt="" loading="lazy" />
                </div> */}
                  <div className="col-3 col-md-2 pt-0 ms-sm-4 ms-lg-1">
                    <img src={logo} height="80" alt="" loading="lazy" />
                    <style>
                      {`
      @media (min-width: 1201px) {
        .ms-lg-0 {
          margin-left: 2rem !important;
        }
      }
    `}
                    </style>
                  </div>
                </div>
                <div className="d-flex flex-row mt-3 text-white">
                  <div className="col-5 col-md-2 p-2 ps-0">
                    {/* Privacy policy */}
                  </div>
                  <div className="col-5 col-md-2 p-2 ps-0"></div>
                </div>
                <div className="d-flex flex-row mt-3 text-white">
                  Copyright © 2023 King Mongkut’s University of Technology
                  Thonburi, All rights reserved.
                </div>
              </MDBCol>
            </MDBRow>
          </Container>
        </section>
      </MDBFooter>
    </div>
  );
}

export default function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      {/* Render the Image component when on mobile */}
      {isMobile && <FooterDesktop />}

      {/* Hide the Post component when on mobile */}
      {!isMobile && <FooterMobile />}
    </>
  );
}
