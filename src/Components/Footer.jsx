import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import logo from "../Images/logo.png";
import logokmutt from "../Images/logo-kmutt.png";

export default function App() {
  return (
    <MDBFooter className="text-center text-lg-start text-muted" id="footer-bg">
      <section className="">
        <MDBContainer className="text-center text-md-start mt-5 xs:max-w-full ">
          <MDBRow className="px-4 py-4">
            <MDBCol className="MuiContainer-root MuiContainer-maxWidthXl css-19r6kue-MuiContainer-root">
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
                  className="mx-4"
                  style={{
                    borderRight: "1px solid white",
                  }}
                ></div>
                {/* 
                <div className="col-3 col-md-2 pt-3 ms-4 ms-lg-6">
                  <img src={logo} height="40" alt="" loading="lazy" />
                </div> */}
                <div className="col-3 col-md-2 pt-2 ms-sm-4 ms-lg-0">
                  <img src={logo} height="50" alt="" loading="lazy" />
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
                <div className="col-2 col-md-2 p-2 ps-0">Privacy policy</div>
                <div className="col-2 col-md-2 p-2 ps-0">Terms of use</div>
              </div>
              <div className="d-flex flex-row mt-3 text-white">
                © 2022 NX KMUTT
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
  );
}
