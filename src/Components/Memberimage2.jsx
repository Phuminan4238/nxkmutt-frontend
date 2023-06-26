import React from "react";
/* Routes */
import {
  MDBCardTitle,
  MDBCardText,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
/* Images */

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

  const arr = [1, 2, 3, 4, 5, 6];

  const oddMappedArr = arr.map((value, index) => {
    if (index % 2 === 0) {
      return value;
    } else {
      return value * 2;
    }
  });

  const evenMappedArr = arr.map((value, index) => {
    if (index % 2 === 0) {
      return value * 2;
    } else {
      return value;
    }
  });

  console.log(oddMappedArr); // [1, 4, 3, 8, 5, 12]
  console.log(evenMappedArr);

  return (
    <>
      {/* <div className="d-flex justify-content-between py-4" id="tools-flex"> */}
      {/* <Route path="Memberdetail" element={<MemberDetail />} /> */}
      <MDBContainer className="fluid p-0 xs:hidden sm:contents">
        {uploadfiles.map((member) => (
          <MDBRow className="p-0 ">
            <MDBCol md="3" className="p-0">
              <img
                className="rounded-0"
                src={
                  "https://10.35.29.186" +
                  member.attributes.uploadfiles.data[0]?.attributes.fileupload
                    .data[0]?.attributes.url
                }
                position="top"
                alt="..."
                style={{
                  height: "400px",
                  width: "340px",
                  // width: "100%",
                  // height: "100%",
                  objectFit: "cover",
                  borderRadius: "0px",
                  alignSelf: "center",
                  // objectFit: "contain",
                }}
              />
            </MDBCol>
            <MDBCol
              md="3"
              className="d-flex align-content-center flex-wrap p-5 bg-danger"
            >
              <div className="d-flex align-content-center flex-column w-100">
                <h4
                  className="fw-bold text-center"
                  style={{ color: "#AE023E" }}
                >
                  {member.attributes.name_en}
                  {member.attributes.surname_en}
                </h4>
                <h6
                  className="fw-light text-center"
                  style={{ color: "#AE023E", paddingTop: "1rem" }}
                >
                  {member.attributes.position_en}
                </h6>
                <p
                  className="fw-light text-center"
                  style={{ color: "#AE023E" }}
                >
                  Main Interest, Main <br></br> Interest, Main Interest
                </p>
              </div>
            </MDBCol>

            <MDBCol md="3" className="p-0">
              <img
                className="rounded-0"
                src={
                  "https://10.35.29.186" +
                  member.attributes.uploadfiles.data[0]?.attributes.fileupload
                    .data[0]?.attributes.url
                }
                position="top"
                alt="..."
                style={{
                  // height: "400px",
                  // width: "340px",
                  // width: "100%",
                  // height: "100%",
                  objectFit: "cover",
                  borderRadius: "0px",
                  alignSelf: "center",
                  // objectFit: "contain",
                }}
              />
            </MDBCol>
            <MDBCol
              md="3"
              className="d-flex align-content-center flex-wrap p-5 bg-danger"
            >
              <div className="d-flex align-content-center flex-column w-100">
                <h4
                  className="fw-bold text-center"
                  style={{ color: "#AE023E" }}
                >
                  {member.attributes.name_en}
                  {member.attributes.surname_en}
                </h4>
                <h6
                  className="fw-light text-center"
                  style={{ color: "#AE023E", paddingTop: "1rem" }}
                >
                  {member.attributes.position_en}
                </h6>
                <p
                  className="fw-light text-center"
                  style={{ color: "#AE023E" }}
                >
                  Main Interest, Main <br></br> Interest, Main Interest
                </p>
              </div>
            </MDBCol>
          </MDBRow>
        ))}
      </MDBContainer>

      <MDBContainer>
        {uploadfiles.map((member) => (
          <MDBRow md="4" className="pb-4">
            <div class="col-4">
              <img
                className="rounded-0"
                src={
                  "https://10.35.29.186" +
                  member.attributes.uploadfiles.data[0]?.attributes.fileupload
                    .data[0]?.attributes.url
                }
                position="top"
                alt="..."
                style={{
                  height: "400px",
                  width: "340px",
                  // width: "100%",
                  // height: "100%",
                  objectFit: "cover",
                  borderRadius: "0px",
                  alignSelf: "center",
                  // objectFit: "contain",
                }}
              />
            </div>
            <div class="col-4">
              <h4 className="fw-bold text-center" style={{ color: "#AE023E" }}>
                {member.attributes.name_en}
                {member.attributes.surname_en}
              </h4>
              <h6
                className="fw-light text-center"
                style={{ color: "#AE023E", paddingTop: "1rem" }}
              >
                {member.attributes.position_en}
              </h6>
              <p className="fw-light text-center" style={{ color: "#AE023E" }}>
                Main Interest, Main <br></br> Interest, Main Interest
              </p>
            </div>
          </MDBRow>
        ))}

        {uploadfiles.map((member) => (
          <MDBCol md="4" key={member.id} className="pb-4">
            <img
              className="rounded-0"
              src={
                "https://10.35.29.186" +
                member.attributes.uploadfiles.data[0]?.attributes.fileupload
                  .data[0]?.attributes.url
              }
              position="top"
              alt="..."
              style={{
                height: "400px",
                width: "340px",
                // width: "100%",
                // height: "100%",
                objectFit: "cover",
                borderRadius: "0px",
                alignSelf: "center",
                // objectFit: "contain",
              }}
            />

            <MDBCardTitle>
              <h4 className="fw-bold text-center" style={{ color: "#AE023E" }}>
                {member.attributes.name_en}
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
              <p className="fw-light text-center" style={{ color: "#AE023E" }}>
                Main Interest, Main <br></br> Interest, Main Interest
              </p>
            </MDBCardText>
          </MDBCol>
        ))}
        {/* </MDBRow> */}
      </MDBContainer>
    </>
  );
}

export default function Memberimage2() {
  return <Image />;
}
