import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import logo from "../Images/logo.png";
import logokmutt from "../Images/logo-kmutt.png";

export default function App() {
  return (
    <MDBFooter className="text-center text-lg-start text-muted" id="footer-bg">
      <section className="">
        <MDBContainer className="text-center text-md-start mt-5 xs:max-w-full ">
          <MDBRow className="mt-3">
            <MDBCol className="my-5 px-4">
              <div className="d-flex flex-row mt-3 text-white">
                <div className="col-1">
                  {" "}
                  <img
                    src={logokmutt}
                    class="image-fluid pr-6"
                    id="logokmutt-img"
                    style={{ borderRight: "1px solid white" }}
                  />
                </div>
                <div className="col-2 pt-4 ps-4">
                  {" "}
                  <img src={logo} class="image-fluid" id="logo-img" />
                </div>
              </div>

              <div className="d-flex flex-row mt-3 text-white">
                <div className="col-2 p-2">Privacy policy</div>
                <div className="col-2 p-2">Terms of use</div>
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
