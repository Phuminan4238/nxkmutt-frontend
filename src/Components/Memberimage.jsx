import React from "react";
/* Routes */
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router";
import { MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";
/* Images */
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
        {/* <Route path="Memberdetail" element={<MemberDetail />} /> */}
        <MDBCard
          style={{
            borderBottom: "1px solid black",
            boxShadow: "unset",
            borderRadius: "0px",
          }}
        >
          <MDBCardImage
            className="rounded-0"
            src={teamimg1}
            position="top"
            alt="..."
            style={{
              objectFit: "contain ",
              height: "250px",
              borderRadius: "0px",
            }}
          />
          <MDBCardBody>
            <h4 className="fw-bold text-center" style={{ color: "#AE023E" }}>
              Name Surname
            </h4>
            <h5 className="fw-light text-center" style={{ color: "#AE023E" }}>
              Position
            </h5>
            <p className="fw-light text-center" style={{ color: "#AE023E" }}>
              Main Interest, Main <br></br> Interest, Main Interest
            </p>
          </MDBCardBody>
        </MDBCard>{" "}
        {/* <Link to="/Memberdetail"> */}
        <MDBCard
          style={{
            borderBottom: "1px solid black",
            boxShadow: "unset",
            borderRadius: "0px",
          }}
        >
          <MDBCardImage
            className="rounded-0"
            src={teamimg2}
            position="top"
            alt="..."
            style={{
              objectFit: "contain ",
              height: "250px",
              borderRadius: "0px",
            }}
          />
          <MDBCardBody>
            <h4 className="fw-bold text-center" style={{ color: "#AE023E" }}>
              Name Surname
            </h4>
            <h5 className="fw-light text-center" style={{ color: "#AE023E" }}>
              Position
            </h5>
            <p className="fw-light text-center" style={{ color: "#AE023E" }}>
              Main Interest, Main <br></br> Interest, Main Interest
            </p>
          </MDBCardBody>
        </MDBCard>{" "}
        {/* </Link> */}
        {/* <Link to="/Research"> */}
        <MDBCard
          style={{
            borderBottom: "1px solid black",
            boxShadow: "unset",
            borderRadius: "0px",
          }}
        >
          <MDBCardImage
            className="rounded-0"
            src={teamimg3}
            position="top"
            alt="..."
            style={{
              objectFit: "contain ",
              height: "250px",
              borderRadius: "0px",
            }}
          />
          <MDBCardBody>
            <h4 className="fw-bold text-center" style={{ color: "#AE023E" }}>
              Name Surname
            </h4>
            <h5 className="fw-light text-center" style={{ color: "#AE023E" }}>
              Position
            </h5>
            <p className="fw-light text-center" style={{ color: "#AE023E" }}>
              Main Interest, Main <br></br> Interest, Main Interest
            </p>
          </MDBCardBody>
        </MDBCard>{" "}
        {/* </Link> */}
      </div>
    </>
  );
}

export default function Memberimage() {
  return <Image />;
}
