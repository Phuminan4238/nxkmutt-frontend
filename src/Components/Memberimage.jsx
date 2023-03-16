import React from "react";
/* Routes */
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
/* Images */
import vr1 from "../Images/vr-1.png";
import vr2 from "../Images/vr-2.png";
import teamimg1 from "../Images/team-1.png";
import teamimg2 from "../Images/team-2.png";
import teamimg3 from "../Images/team-3.png";
import teamimg4 from "../Images/team-4.png";
import { useState, useEffect, setIsLoaded } from "react";

function Image() {
  const [uploadfiles, setUploadfiles] = useState([]);

  useEffect(() => {
    fetch("https://10.35.29.186/api/members?populate=uploadfiles.fileupload")
      .then((res) => res.json())
      .then((result) => {
        setUploadfiles(result.data);
      });
  });
  return (
    <>
      <div className="d-flex justify-content-between py-4" id="tools-flex">
        {/* <Route path="Memberdetail" element={<MemberDetail />} /> */}
        <MDBContainer>
          <MDBRow>
            {uploadfiles.map((member) => (
              <MDBCol md="4" key={member.id} className="pb-4">
                <MDBCard
                  style={{
                    borderBottom: "1px solid black",
                    boxShadow: "unset",
                    borderRadius: "0px",
                    // width: "400px",
                    // height: "640px",
                  }}
                >
                  <MDBCardImage
                    className="rounded-0"
                    src={
                      "https://10.35.29.186" +
                      member.attributes.uploadfiles.data[0]?.attributes
                        .fileupload.data[0]?.attributes.url
                    }
                    position="top"
                    alt="..."
                    style={{
                      height: "350px",
                      // width: "100%",
                      // height: "100%",
                      objectFit: "cover",
                      borderRadius: "0px",
                      alignSelf: "center",
                      // objectFit: "contain",
                    }}
                  />
                  <MDBCardBody
                  // style={{
                  //   height: "100%",
                  // }}
                  >
                    <MDBCardTitle>
                      <h4
                        className="fw-bold text-center"
                        style={{ color: "#AE023E" }}
                      >
                        {member.attributes.name_en}
                        &nbsp;
                        {member.attributes.surname_en}
                      </h4>
                    </MDBCardTitle>
                    <MDBCardText>
                      <h6
                        className="fw-light text-center"
                        style={{ color: "#AE023E", paddingTop: "1rem" }}
                      >
                        {member.attributes.position_en}
                      </h6>
                    </MDBCardText>
                    <MDBCardText key={member.attributes}>
                      <p
                        className="fw-light text-center"
                        style={{ color: "#AE023E" }}
                      >
                        Main Interest, Main <br></br> Interest, Main Interest
                      </p>
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
}

export default function Memberimage() {
  return <Image />;
}
