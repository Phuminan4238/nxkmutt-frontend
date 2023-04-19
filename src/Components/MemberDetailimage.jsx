import React from "react";
/* Routes */
import { useParams } from "react-router-dom";
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
/* Images */
import { useState, useEffect, setIsLoaded } from "react";

function Image() {
  const { memberID } = useParams();
  const [uploadfiles, setUploadfiles] = useState([]);

  useEffect(() => {
    fetch("https://10.35.29.186/api/members?populate=uploadfiles.fileupload")
      .then((res) => res.json())
      .then((result) => {
        setUploadfiles(result.data);
      });
  }, [memberID]);
  return (
    <>
      <div className="d-flex justify-content-between py-4" id="tools-flex">
        {/* <Route path="Memberdetail" element={<MemberDetail />} /> */}
        <MDBContainer className="xs:max-w-full sm:max-w-7xl pt-5">
          <MDBRow>
            {uploadfiles.slice(0, 3).map((member) => (
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

export default function MemberDetailimage() {
  return <Image />;
}
