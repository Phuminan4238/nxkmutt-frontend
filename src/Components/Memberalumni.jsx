import React from "react";
import {
  MDBContainer,
  MDBCarousel,
  MDBCarouselItem,
  MDBRow,
  MDBCol,
  MDBRipple,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import vr1 from "../Images/vr-1.png";
import vr2 from "../Images/vr-2.png";
import teamimg1 from "../Images/team-1.png";
import teamimg2 from "../Images/team-2.png";
import teamimg3 from "../Images/team-3.png";
import teamimg4 from "../Images/team-4.png";

function Image() {
  return (
    <>
      <div className="d-flex justify-content-between py-4" id="tools-flex">
        <MDBContainer className="xs:max-w-full sm:max-w-7xl">
          <MDBRow>
            <MDBCol>
              <MDBCard
                style={{
                  boxShadow: "unset",
                  borderRadius: "0px",
                }}
              >
                <MDBCardImage
                  className="rounded-0"
                  src={vr2}
                  position="top"
                  alt="..."
                  style={{ height: "250px", borderRadius: "0px" }}
                />
                <MDBCardBody>
                  <h5
                    className="fw-bold text-center"
                    style={{ color: "#AE023E" }}
                  >
                    Name Surname
                  </h5>
                </MDBCardBody>
              </MDBCard>{" "}
            </MDBCol>
            <MDBCol>
              <MDBCard
                style={{
                  boxShadow: "unset",
                  borderRadius: "0px",
                }}
              >
                <MDBCardImage
                  className="rounded-0"
                  src={vr2}
                  position="top"
                  alt="..."
                  style={{ height: "250px", borderRadius: "0px" }}
                />
                <MDBCardBody>
                  <h5
                    className="fw-bold text-center"
                    style={{ color: "#AE023E" }}
                  >
                    Name Surname
                  </h5>
                </MDBCardBody>
              </MDBCard>{" "}
            </MDBCol>
            <MDBCol>
              <MDBCard
                style={{
                  boxShadow: "unset",
                  borderRadius: "0px",
                }}
              >
                <MDBCardImage
                  className="rounded-0"
                  src={vr2}
                  position="top"
                  alt="..."
                  style={{ height: "250px", borderRadius: "0px" }}
                />
                <MDBCardBody>
                  <h5
                    className="fw-bold text-center"
                    style={{ color: "#AE023E" }}
                  >
                    Name Surname
                  </h5>
                </MDBCardBody>
              </MDBCard>{" "}
            </MDBCol>
            <MDBCol>
              <MDBCard
                style={{
                  boxShadow: "unset",
                  borderRadius: "0px",
                }}
              >
                <MDBCardImage
                  className="rounded-0"
                  src={vr2}
                  position="top"
                  alt="..."
                  style={{ height: "250px", borderRadius: "0px" }}
                />
                <MDBCardBody>
                  <h5
                    className="fw-bold text-center"
                    style={{ color: "#AE023E" }}
                  >
                    Name Surname
                  </h5>
                </MDBCardBody>
              </MDBCard>{" "}
            </MDBCol>
            <MDBCol>
              <MDBCard
                style={{
                  boxShadow: "unset",
                  borderRadius: "0px",
                }}
              >
                <MDBCardImage
                  className="rounded-0"
                  src={vr2}
                  position="top"
                  alt="..."
                  style={{ height: "250px", borderRadius: "0px" }}
                />
                <MDBCardBody>
                  <h5
                    className="fw-bold text-center"
                    style={{ color: "#AE023E" }}
                  >
                    Name Surname
                  </h5>
                </MDBCardBody>
              </MDBCard>{" "}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
}

export default function Memberalumni() {
  return <Image />;
}
