import React from "react";
/* Routes */
import { useParams } from "react-router-dom";
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
      <div
        className="d-flex justify-content-between pt-3 pb-4 sm:px-5 md:px-0"
        id="tools-flex"
      >
        {/* <Route path="Memberdetail" element={<MemberDetail />} /> */}
        <MDBContainer className="xs:max-w-full sm:max-w-7xl sm:px-5 md:px-0 ">
          <MDBRow>
            {uploadfiles.slice(0, 3).map((member) => (
              <MDBCol md="4" key={member.id} className="pb-4">
                {/* <Link to={`/Member Detail/${member.id}`} target="_blank"> */}
                <Link to={`/Member-Detail/${member.id}`} target="_blank">
                  <MDBCard
                    className="pt-4"
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
                        // height: "310px",
                        objectFit: "cover",
                        borderRadius: "0px",
                        alignSelf: "center",
                        height: "300px",
                        objectPosition: "top",
                      }}
                    />
                    <MDBCardBody>
                      <MDBCardTitle className="m-0 pt-2">
                        <p
                          className="fw-bold text-center mb-0 xs:text-xl md:text-xl"
                          style={{ color: "black", fontFamily: "MyFont" }}
                        >
                          {member.attributes.name_en}

                          {member.attributes.surname_en}
                        </p>
                      </MDBCardTitle>
                      <MDBCardText>
                        <p
                          className="fw-normal text-center mb-0 xs:text-xl md:text-xl"
                          style={{ color: "black" }}
                        >
                          {member.attributes.position_en}
                        </p>
                      </MDBCardText>
                      {/* <MDBCardText
                        // className="md:text-lg"
                        key={member.attributes}
                      > */}
                      <p
                        className="fw-normal text-center text-sm md:text-lg"
                        style={{ color: "#AE023E" }}
                      >
                        Main Interest, Main <br></br> Interest, Main Interest
                      </p>
                      {/* </MDBCardText> */}
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

export default function MemberDetailimage() {
  return <Image />;
}
