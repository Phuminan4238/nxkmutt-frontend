import React from "react";
/* Routes */
import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
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
        <MDBContainer className="xs:max-w-full sm:max-w-7xl">
          <MDBRow>
            {uploadfiles.map((member) => (
              <MDBCol md="4" key={member.id} className="pb-4">
                <Link to={`/Member Detail/${member.id}`} target="_blank">
                  <MDBCard
                    style={{
                      borderBottom: "1px solid black",
                      boxShadow: "unset",
                      borderRadius: "0px",
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

                        objectFit: "cover",
                        borderRadius: "0px",
                        alignSelf: "center",
                      }}
                    />
                    <MDBCardBody>
                      <MDBCardTitle className="m-0">
                        <p
                          className="text-2xl fw-bold text-center mb-0"
                          style={{ color: "#AE023E" }}
                        >
                          {member.attributes.name_en}
                          &nbsp;
                          {member.attributes.surname_en}
                        </p>
                      </MDBCardTitle>
                      <MDBCardText>
                        <p
                          className="text-xl fw-normal text-center mb-0"
                          style={{ color: "#AE023E" }}
                        >
                          {member.attributes.position_en}
                        </p>
                      </MDBCardText>
                      <MDBCardText key={member.attributes}>
                        <p
                          className="fw-normal text-center text-sm md:text-lg"
                          style={{ color: "#AE023E" }}
                        >
                          Main Interest, Main <br></br> Interest, Main Interest
                        </p>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </Link>
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
