import React from "react";
import { useState, useEffect, setIsLoaded } from "react";
/* MDBootstrap */
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
/* Images */
import vr2 from "../Images/vr-2.png";
/* Components */
import Participateimage from "../Components/Participateimage";

const Participate = () => {
  const [memberCover, setMembercover] = useState([]);
  useEffect(() => {
    fetch(
      "https://10.35.29.186/api/uploadfiles?populate=fileupload&filters[filename][$eq]=participate_cover_image"
    )
      .then((res) => res.json())
      .then((result) => {
        setMembercover(result.data);
      });
  }, []);
  return (
    <div className="App">
      <section style={{ borderTop: "1px solid black", marginTop: "1.5rem" }}>
        <MDBContainer className="xs:max-w-full sm:max-w-7xl">
          <MDBRow className="pt-0 xs:px-5 sm:px-5 md:px-0">
            <MDBCol className="d-flex pt-5 pb-0 pe-5">
              <div className="d-flex flex-column w-100">
                <p className="font-black text-uppercase text-black xs:text-2xl md:text-5xl">
                  PARTICIPATE
                </p>
                <p className="font-black text-uppercase pt-2 xs:text-2xl md:text-5xl">
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
              {memberCover.map((member) => (
                <img
                  className="image-fluid"
                  style={{
                    width: "-webkit-fill-available",
                    height: "300px",
                    // maxWidth: "-webkit-fill-available",
                    // height: "400px",
                    // objectFit: "contain",
                    // verticalAlign: "top",
                  }}
                  id="cluster-img"
                  src={
                    "https://10.35.29.186" +
                    member.attributes.fileupload.data[0]?.attributes.url
                  }
                />
              ))}
            </MDBCol>
          </MDBRow>

          <MDBRow className="pt-5 pb-5 xs:px-5 sm:px-5 md:px-0">
            <MDBCol>
              <MDBRow>
                <p className="fw-bolder text-uppercase text-black ps-2 xs:text-xl md:text-3xl">
                  JOB & Internship
                </p>
              </MDBRow>
              <MDBCol className="ps-4 pt-2">
                <MDBRow className="pt-2">
                  <MDBCol size="1" style={{ width: "3.33%" }}>
                    {/* <PeopleIcon style={{ color: "#AE023E" }} /> */}
                    <li></li>
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
                <h4 className="fw-bold text-uppercase text-black ps-2 pt-4 xs:text-xl md:text-3xl">
                  STUDY participation
                </h4>
              </MDBRow>
              <MDBCol className="ps-4 pt-2">
                <MDBRow className="pt-2">
                  <MDBCol size="1" style={{ width: "3.33%" }}>
                    {/* <PeopleIcon style={{ color: "#AE023E" }} /> */}
                    <li></li>
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
                <h4 className="fw-bold text-uppercase text-black ps-2 pt-4 xs:text-xl md:text-2xl">
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
