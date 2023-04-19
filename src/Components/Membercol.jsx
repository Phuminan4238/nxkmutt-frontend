import React from "react";
import { MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";
import vr2 from "../Images/vr-2.png";

function Image() {
  return (
    <>
      <div className="d-flex justify-content-between py-4" id="tools-flex">
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
            style={{ height: "150px", borderRadius: "0px" }}
          />
          <MDBCardBody></MDBCardBody>
        </MDBCard>{" "}
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
            style={{ height: "150px", borderRadius: "0px" }}
          />
          <MDBCardBody></MDBCardBody>
        </MDBCard>{" "}
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
            style={{ height: "150px", borderRadius: "0px" }}
          />
          <MDBCardBody></MDBCardBody>
        </MDBCard>{" "}
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
            style={{ height: "150px", borderRadius: "0px" }}
          />
          <MDBCardBody></MDBCardBody>
        </MDBCard>{" "}
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
            style={{ height: "150px", borderRadius: "0px" }}
          />
          <MDBCardBody></MDBCardBody>
        </MDBCard>{" "}
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
            style={{ height: "150px", borderRadius: "0px" }}
          />
          <MDBCardBody></MDBCardBody>
        </MDBCard>{" "}
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
            style={{ height: "150px", borderRadius: "0px" }}
          />
          <MDBCardBody></MDBCardBody>
        </MDBCard>{" "}
      </div>
    </>
  );
}

export default function Membercol() {
  return <Image />;
}
