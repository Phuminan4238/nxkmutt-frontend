import React from "react";
import { useState, useEffect, setIsLoaded } from "react";
import { Link } from "react-router-dom";
/* Routes */
import { Route, Routes, useParams } from "react-router";
/* Material UI */
import ArticleIcon from "@mui/icons-material/Article";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
/* MDBootstrap */
import { MDBCardImage, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
/* Images */
import vr2 from "../Images/vr-2.png";
import clusterimg1 from "../Images/cluster-1.png";

function PublicationsDetail({ title }) {
  let { id } = useParams();
  console.log(id);

  const [tags, setTags] = useState({});

  useEffect(() => {
    fetch(`https://10.35.29.186/api/publications/${id}?`)
      .then((res) => res.json())
      .then((result) => {
        setTags(result.data);
      });
  }, [id]);

  const [publicationfiles, setPuplicataionfiles] = useState([]);

  useEffect(() => {
    fetch("https://10.35.29.186/api/publications?populate=id")
      .then((res) => res.json())
      .then((result) => {
        setPuplicataionfiles(result.data);
      });
  }, []);

  return (
    <div className="App">
      <section style={{ borderTop: "1px solid black", marginTop: "1.5rem" }}>
        <MDBContainer className="xs:max-w-full sm:max-w-7xl pt-5">
          <MDBRow className="flex-sm-row flex-column pt-0 pb-0 xs:px-5 sm:px-5 md:px-0">
            <MDBCol className="col-1 text-uppercase fw-bold pb-4 sm:pb-0">
              {title}
            </MDBCol>
            <MDBCol className="col-md-6 col-12">
              <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
              <span
                className="text-uppercase fw-bold ps-4"
                style={{ fontFamily: "MyFont" }}
              >
                {tags.attributes?.title || "not found"}
              </span>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBContainer className="xs:max-w-full sm:max-w-7xl pt-5">
          <MDBRow className="pt-0 pb-0 xs:px-5 sm:px-5 md:px-0">
            <MDBCol className="d-flex pb-0 pe-5">
              <div className="d-flex flex-column w-100">
                <h1
                  className="fw-bolder"
                  style={{ color: "#AE023E", fontFamily: "MyFont" }}
                >
                  {tags.attributes?.title || "not found"}
                </h1>
              </div>
            </MDBCol>
            <MDBCol md="7" className="p-0" style={{ marginLeft: "auto" }}>
              <MDBCardImage
                className="rounded-0"
                src={clusterimg1}
                position="top"
                alt="..."
                style={{
                  height: "400px",
                  width: "-webkit-fit-content",
                  objectFit: "initial",
                  borderRadius: "0px",
                }}
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <section>
        <MDBContainer className="xs:max-w-full sm:max-w-7xl">
          <MDBRow className="pt-4 pb-0 xs:px-5 sm:px-5 md:px-0">
            {/* Current Affiliations */}
            <MDBRow className="pt-4">
              {tags.attributes?.description || "not found"}
            </MDBRow>

            {/*  Grants */}
            <MDBRow>
              <h5
                className="fw-bold text-uppercase ps-2 pt-4"
                style={{ color: "#A02040" }}
              >
                1. Early Detection and Prevention of Mild Cognitive Impairment
              </h5>
            </MDBRow>
            <MDBRow className="pt-0 pb-0 xs:px-5 sm:px-5 md:px-0">
              <MDBCardImage
                className="rounded-0"
                // src={
                //   "https://10.35.29.186" +
                //   uploadfiles.attributes?.uploadfiles.data[0]?.attributes
                //     .fileupload.data[0]?.attributes.url
                // }
                src={vr2}
                position="top"
                alt="..."
                style={{
                  //   height: "350px",
                  // width: "100%",
                  height: "400px",
                  objectFit: "initial",
                  borderRadius: "0px",
                  alignSelf: "center",
                  // objectFit: "contain",
                }}
              />
            </MDBRow>
            {/* Current Affiliations */}
            <MDBRow className="pt-4 ">
              <p>
                Mild cognitive impairment (MCI) is a condition characterized by
                early decline in memory and cognitive skills, experienced in
                approximately 20% of elderly population aged 60 and above.
                Research in this topic is geared towards developing tools for
                early detection of MCI, which can help prevent or significantly
                slow down the onset of more serious mental degenerative diseases
                such as Alzheimer’s. We successfully trained artificial neural
                networks (shown in photo) to recognize important neuromarker for
                MCI at the accuracy level superior to human scorers. As part of
                an ongoing research, we partner with MQDC (Magnolia Quality
                Development Corporation Limited) to develop intervention
                techniques (exercise, brain stimulation) that can slow down or
                prevent the onset of MCI symptoms.
              </p>
            </MDBRow>

            {/*  Awards */}
            <MDBRow>
              <p className="fw-bold text-uppercase text-black pt-4">
                Relevant PIs: Dr. Sirawaj Itthipuripat, Dr. Chaipat Chunharas
              </p>
            </MDBRow>

            {/*  Selected Publications */}
            <MDBRow>
              <p className="fw-bold text-uppercase text-black pt-4">
                Relevant publications
              </p>
            </MDBRow>
            {publicationfiles.map((member) => (
              <MDBRow className="pt-4">
                <MDBCol size="1">
                  <ArticleIcon color="primary" />
                </MDBCol>

                <MDBCol md="11" key={member.id}>
                  <p> {member.attributes.description}</p>
                </MDBCol>
              </MDBRow>
            ))}

            {/*   2. Web-based applications */}
            <MDBRow>
              <h5
                className="fw-bold text-uppercase ps-2 pt-4 pb-2"
                style={{ color: "#A02040" }}
              >
                2. Web-based applications for monitoring cognitive impairment in
                aging population
              </h5>
              <MDBCol md="6">
                {" "}
                <MDBCardImage
                  className="rounded-0"
                  // src={
                  //   "https://10.35.29.186" +
                  //   uploadfiles.attributes?.uploadfiles.data[0]?.attributes
                  //     .fileupload.data[0]?.attributes.url
                  // }
                  src={vr2}
                  position="top"
                  alt="..."
                  style={{
                    //   height: "350px",
                    // width: "100%",
                    height: "400px",
                    objectFit: "initial",
                    borderRadius: "0px",
                    alignSelf: "center",
                    // objectFit: "contain",
                  }}
                />
              </MDBCol>
              <MDBCol md="6" className="pt-4">
                Detail...
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <p className="fw-bold  text-black pt-4">
                Relevant PIs: Dr. Teerasit Termsaithong, Dr. Kajornvut Ounjai
              </p>
            </MDBRow>
            {/*  3. MRI and Parkinson Disease */}
            <MDBRow>
              <h5
                className="fw-bold text-uppercase ps-2 pt-4 pb-2"
                style={{ color: "#A02040" }}
              >
                3. MRI and Parkinson Disease
              </h5>
              <MDBCol md="6">
                {" "}
                <MDBCardImage
                  className="rounded-0"
                  // src={
                  //   "https://10.35.29.186" +
                  //   uploadfiles.attributes?.uploadfiles.data[0]?.attributes
                  //     .fileupload.data[0]?.attributes.url
                  // }
                  src={vr2}
                  position="top"
                  alt="..."
                  style={{
                    //   height: "350px",
                    // width: "100%",
                    height: "400px",
                    objectFit: "initial",
                    borderRadius: "0px",
                    alignSelf: "center",
                    // objectFit: "contain",
                  }}
                />
              </MDBCol>
              <MDBCol md="6" className="pt-4">
                Detail...
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <p className="fw-bold  text-black pt-4">
                Relevant PIs: Dr. Teerasit Termsaithong, Dr. Kajornvut Ounjai
              </p>
            </MDBRow>
            <MDBRow className="pt-4">
              <p>
                Collab: Japansese doctors PD. MRI from patients compared with
                normals. Analyze data. Transfer fMRI connectivity – parkinson
                and normals: what are the differences? Network – cluster size.
                Correlation matrix. Choose threshold – connection. Hypothesis:
                PD connections will reduce gradually because of brain damage.
                [but results contrary]. So will look at cluster size – cluster
                size. Whole brain. Diagnosis and prediction. A.Oh. Another
                doctor at Jakri
              </p>
            </MDBRow>
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
}

export default PublicationsDetail;
