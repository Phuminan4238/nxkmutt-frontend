import React from "react";
/* Routes */
import { Link } from "react-router-dom";
import axios from "axios";
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
    let isMounted = true;

    const instance = axios.create({
      baseURL: "https://10.35.29.186/api/",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    async function fetchData() {
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
    }

    if (uploadfiles.length === 0) {
      fetchData();
    }

    return () => {
      isMounted = false;
    };
  }, [uploadfiles]);

  return (
    <>
      <div className="d-flex justify-content-between py-4" id="tools-flex">
        <MDBContainer className="xs:max-w-full sm:max-w-7xl">
          <MDBRow>
            {uploadfiles.map((member) => (
              <MDBCol md="4" key={member.id} className="pb-4 col-sm-8">
                <Link to={`/Member-Detail/${member.id}`} target="_blank">
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
                          className="fw-bold text-center mb-0 xs:text-xl md:text-2xl"
                          style={{ color: "#AE023E" }}
                        >
                          {member.attributes.name_en}
                          &nbsp;
                          {member.attributes.surname_en}
                        </p>
                      </MDBCardTitle>
                      <MDBCardText>
                        <p
                          className="fw-normal text-center mb-0 xs:text-xl md:text-2xl"
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

function Image2({}) {
  const [cognitiveimg, setCognitiveimg] = useState([]);
  useEffect(() => {
    fetch(
      "https://10.35.29.186/api/uploadfiles?populate=fileupload&filters[filename][$eq]=public_cognitive"
    )
      .then((res) => res.json())
      .then((result) => {
        setCognitiveimg(result.data);
      });
  }, []);

  const [humanfactorimg, setHumanfactorimg] = useState([]);
  useEffect(() => {
    fetch(
      "https://10.35.29.186/api/uploadfiles?populate=fileupload&filters[filename][$eq]=public_humanfactors"
    )
      .then((res) => res.json())
      .then((result) => {
        setHumanfactorimg(result.data);
      });
  }, []);

  const [neurodevimg, setNeurodevimg] = useState([]);
  useEffect(() => {
    fetch(
      "https://10.35.29.186/api/uploadfiles?populate=fileupload&filters[filename][$eq]=public_neurodevelopment"
    )
      .then((res) => res.json())
      .then((result) => {
        setNeurodevimg(result.data);
      });
  }, []);

  const [neuropharmaimg, setNeuropharmaimg] = useState([]);
  useEffect(() => {
    fetch(
      "https://10.35.29.186/api/uploadfiles?populate=fileupload&filters[filename][$eq]=public_neuropharmacology"
    )
      .then((res) => res.json())
      .then((result) => {
        setNeuropharmaimg(result.data);
      });
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between py-4" id="tools-flex">
        <MDBContainer className="xs:max-w-full sm:max-w-7xl">
          <MDBRow>
            {cognitiveimg.map((member) => (
              <MDBCol md="4" key={member.id} className="pb-4">
                {/* <Link to={`/Member Detail/${member.id}`} target="_blank"> */}
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
                      member.attributes.fileupload.data[0]?.attributes.url
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
                {/* </Link> */}
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
}

export default function Memberimage() {
  return (
    <>
      <Image />
      {/* <Image2 /> */}
    </>
  );
}
