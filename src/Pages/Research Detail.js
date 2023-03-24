import React from "react";
import { useState, useEffect, setIsLoaded } from "react";
/* Routes */
import { Route, Routes } from "react-router";
/* Material UI */
import { Container } from "@mui/system";
import ArticleIcon from "@mui/icons-material/Article";
/* MDBootstrap */
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
import PeopleIcon from "@mui/icons-material/People";
import SchoolIcon from "@mui/icons-material/School";
import BuildIcon from "@mui/icons-material/Build";
import RedeemIcon from "@mui/icons-material/Redeem";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DescriptionIcon from "@mui/icons-material/Description";
import clusterimg1 from "../Images/cluster-1.png";
import clusterimg2 from "../Images/cluster-2.png";
import clusterimg3 from "../Images/cluster-3.png";
import clusterimg4 from "../Images/cluster-4.png";
/* Components */
import Publicationimage from "../Components/Publicationimage";
import Publicationreport from "../Components/Publicationreport";
import Toolsimage from "../Components/Tools";
import Participateimage from "../Components/Participateimage";
import MemberDetailimage from "../Components/MemberDetailimage";

const Researchdetail = () => {
  const [uploadfiles, setUploadfiles] = useState({});

  useEffect(() => {
    fetch("https://10.35.29.186/api/members/1?populate=uploadfiles.fileupload")
      .then((res) => res.json())
      .then((result) => {
        setUploadfiles(result.data);
      });
  });

  const [publicationfiles, setPuplicataionfiles] = useState([]);

  useEffect(() => {
    fetch("https://10.35.29.186/api/publications?populate=id")
      .then((res) => res.json())
      .then((result) => {
        setPuplicataionfiles(result.data);
      });
  });
  return (
    <div className="App" style={{ borderTop: "1px solid black" }}>
      <section>
        <MDBContainer className="pt-5">
          <MDBRow>
            <MDBCol
              size="2"
              className="text-uppercase fw-bold"
              style={{ width: "13.33%" }}
            >
              Research
            </MDBCol>
            <MDBCol size="6">
              <span> > </span>
              <span className="text-uppercase fw-bold ps-4">
                {/* {uploadfiles.attributes?.prefix_en || "not found"}
                {uploadfiles.attributes?.nickname_en || "not found"} */}
                Cognitive, Clinical & Computational Neuroscience
              </span>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBContainer className="pt-5">
          {/* {uploadfiles.map((member) => ( */}
          <MDBRow className="pt-0 pb-5">
            <MDBCol className="d-flex pb-0 pe-5">
              <div className="d-flex flex-column w-100">
                <h1 className="fw-bolder" style={{ color: "#AE023E" }}>
                  {/* {uploadfiles.attributes?.prefix_en}{" "}
                  {uploadfiles.attributes?.name_en} */}
                  {/* <span>&nbsp</span> */}
                  Cognitive, Clinical &
                </h1>
                <h1 className="fw-bold" style={{ color: "#AE023E" }}>
                  Computational
                </h1>
                <h1 className="fw-bolder" style={{ color: "#AE023E" }}>
                  Neuroscience
                </h1>
              </div>
            </MDBCol>
            <MDBCol md="7" className="p-0">
              <MDBCardImage
                className="rounded-0"
                // src={
                //   "https://10.35.29.186" +
                //   uploadfiles.attributes?.uploadfiles.data[0]?.attributes
                //     .fileupload.data[0]?.attributes.url
                // }
                src={clusterimg1}
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
          </MDBRow>
          <MDBCol>
            {/* Current Affiliations */}
            <MDBRow>
              <p>
                The Cognitive, Clinical and Computational neuroscience cluster
                focuses on investigating neural mechanisms that support human
                perception, attention, memory, and affective systems across
                healthy and clinical populations. We employ multiple
                neuroscience techniques (e.g., EEG, fMRI, and fNIR) as well as
                non-invasive brain stimulation to study these cognitive
                functions and come up with new ways to treat and slow the
                progress of neurodegenerative disorders in aging society like
                Mild Cognitive Impairment, Alzhiemer’s and Parkinson’s diseases
                (PD). In addition, we use computational modeling and machine
                learning methods to map neural activity to brain functions and
                to develop brain-based diagnostic tools for neurological and
                psychiatric disorders.
              </p>
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
            <MDBRow>
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
            <MDBRow className="pt-4">
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
            <MDBRow
              style={{
                borderBottom: "1px solid black",
                paddingTop: "1.5rem",
              }}
            ></MDBRow>
          </MDBCol>
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
              normals. Analyze data. Transfer fMRI connectivity – parkinson and
              normals: what are the differences? Network – cluster size.
              Correlation matrix. Choose threshold – connection. Hypothesis: PD
              connections will reduce gradually because of brain damage. [but
              results contrary]. So will look at cluster size – cluster size.
              Whole brain. Diagnosis and prediction. A.Oh. Another doctor at
              Jakri
            </p>
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
};

export default Researchdetail;
