import React from "react";
/* Routes */
import { Route, Routes } from "react-router";
/* Material UI */
import { Container } from "@mui/system";
/* MDBootstrap */
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
/* Images */
import vr2 from "../Images/vr-2.png";
import PeopleIcon from "@mui/icons-material/People";
import SchoolIcon from "@mui/icons-material/School";
import BuildIcon from "@mui/icons-material/Build";
import RedeemIcon from "@mui/icons-material/Redeem";
/* Components */
import Publicationimage from "../Components/Publicationimage";
import Publicationreport from "../Components/Publicationreport";
import Toolsimage from "../Components/Tools";
import Participateimage from "../Components/Participateimage";

const Participate = () => {
  return (
    <div className="App" style={{ borderTop: "1px solid black" }}>
      <section>
        <MDBContainer>
          <MDBRow className="pt-0 pb-5">
            <MDBCol className="d-flex pt-5 pb-0 pe-5">
              <div className="d-flex flex-column w-100">
                <h1 className="fw-bold text-uppercase text-black">
                  PARTICIPATE
                </h1>
                <h1 className="fw-bold text-uppercase text-black">
                  <span
                    style={{
                      fontSize: "4rem",
                      color: "#AE023E",
                      fontWeight: "normal",
                    }}
                  >
                    &
                  </span>{" "}
                  DONATE
                </h1>
              </div>
            </MDBCol>
            <MDBCol md="4" className="p-0">
              <img
                src={vr2}
                class="image-fluid"
                id="cluster-img"
                style={{ height: "350px" }}
              />
            </MDBCol>
          </MDBRow>

          <MDBRow className="pt-5">
            <MDBCol>
              <MDBRow>
                <h4 className="fw-bold text-uppercase text-black ps-2">
                  JOB & Internship
                </h4>
              </MDBRow>
              <MDBCol className="ps-4 pt-2">
                <MDBRow className="pt-2">
                  <MDBCol size="1" style={{ width: "3.33%" }}>
                    {/* <PeopleIcon style={{ color: "#AE023E" }} /> */}
                    <p>-</p>
                  </MDBCol>
                  <MDBCol>
                    <p>
                      We are seeking enthusiastic and motivated students and
                      interns with a Bachelor’s degree (at minimum) to join our
                      research team. As a member of our team, you will have the
                      opportunity to work alongside experienced researchers and
                      gain valuable hands-on experience in Neuroscience
                      research, as well as contributing to our efforts in
                      improving cognitive health. If interested in applying,
                      please send your inquiries to:{" "}
                      <span style={{ color: "#119ED1" }}>
                        nx.kmutt@gmail.com.
                      </span>
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
              <MDBRow>
                <h4 className="fw-bold text-uppercase text-black ps-2 pt-4">
                  STUDY participation
                </h4>
              </MDBRow>
              <MDBCol className="ps-4 pt-2">
                <MDBRow className="pt-2">
                  <MDBCol size="1" style={{ width: "3.33%" }}>
                    {/* <PeopleIcon style={{ color: "#AE023E" }} /> */}
                    <p>-</p>
                  </MDBCol>
                  <MDBCol>
                    <p>
                      We are looking for healthy volunteers (age:6-59 yo.) to
                      participate in our research studies. By participating, you
                      will play a crucial role in advancing scientific knowledge
                      about neuroscience and cognitive health. Your
                      participation is voluntary and you may withdraw from the
                      study at any time. As a token of our appreciation, you
                      will also receive financial compensation for your time and
                      effort. Please see details in the fliers below or contact
                      nx.kmutt@gmail.com if you’re interested in participating.
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
              <MDBRow>
                <Participateimage></Participateimage>
              </MDBRow>
              <MDBRow>
                <h4 className="fw-bold text-uppercase text-black ps-2 pt-4">
                  DONATION
                </h4>
                <p>Contact Detail</p>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
};

export default Participate;
