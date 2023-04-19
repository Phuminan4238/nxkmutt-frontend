import React from "react";
/* Routes */
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
import vr2 from "../Images/vr-2.png";
import { useState, useEffect, setIsLoaded } from "react";

function Image({ members }) {
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
        {/* <MDBRow></MDBRow> */}
        <MDBContainer className="xs:max-w-full sm:max-w-7xl">
          <MDBRow>
            {uploadfiles.map((member) => (
              <MDBCol md="4" key={member.id} className="pb-4">
                {/* <Link to="/Member Detail"> */}
                <MDBCard
                  style={{
                    boxShadow: "unset",
                    // width: "400px",
                    // height: "640px",
                  }}
                >
                  <MDBCardImage
                    className="rounded-6"
                    src={vr2}
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
                      {/* <Link to="/Member Detail"> */}{" "}
                      <h4
                        className="fw-bold text-center"
                        style={{ color: "#AE023E" }}
                      >
                        {member.attributes.name_en}
                        &nbsp;
                        {member.attributes.surname_en}
                      </h4>
                      {/* </Link> */}
                    </MDBCardTitle>
                    <MDBCardText>
                      <h6
                        className="fw-light text-center"
                        style={{ color: "#AE023E", paddingTop: "1rem" }}
                      >
                        {/* {member.attributes.position_en}
                         */}
                        Organiation
                      </h6>
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
                {/* </Link> */}
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
}

export default function Memberadvisor() {
  return <Image />;
}
