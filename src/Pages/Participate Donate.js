import React from "react";
/* MDBootstrap */
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
/* Images */
import vr2 from "../Images/vr-2.png";
/* Components */
import Participateimage from "../Components/Participateimage";

const Participate = () => {
  return (
    <div className="App" style={{ borderTop: "1px solid black" }}>
      <section>
        <MDBContainer className="xs:max-w-full sm:max-w-7xl">
          <MDBRow className="pt-0 xs:px-5 sm:px-5 md:px-0">
            <MDBCol className="d-flex pt-5 pb-0 pe-5">
              <div className="d-flex flex-column w-100">
                <p className="text-5xl font-black text-uppercase text-black">
                  PARTICIPATE
                </p>
                <p className="text-5xl font-black text-uppercase pt-2">
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
                </p>
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

          <MDBRow className="pt-5 pb-5 xs:px-5 sm:px-5 md:px-0">
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
              <MDBRow className="xs:px-5 sm:px-5 md:px-0">
                <Participateimage></Participateimage>
              </MDBRow>
              <MDBRow className="xs:px-5 sm:px-5 md:px-0">
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
