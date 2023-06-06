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
import axios from "axios";

function Image({ members }) {
  const [uploadfiles, setUploadfiles] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const instance = axios.create({
      baseURL: "https://10.35.29.186/api/",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const fetchData = async () => {
      try {
        const response = await instance.get(
          "members?populate=uploadfiles.fileupload"
        );
        if (isMounted) {
          setUploadfiles(response.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

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
                      <h5
                        className="fw-bold text-center"
                        style={{ color: "#AE023E", fontFamily: "MyFont" }}
                      >
                        {member.attributes.name_en}
                        &nbsp;
                        {member.attributes.surname_en}
                      </h5>
                      {/* </Link> */}
                    </MDBCardTitle>
                    <MDBCardText>
                      <h6
                        className="fw-light text-center"
                        style={{ color: "#AE023E", paddingTop: "1rem" }}
                      >
                        {/* {member.attributes.position_en}
                         */}
                        Organization
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
