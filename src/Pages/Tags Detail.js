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
// Lotties
import Lottie from "react-lottie-player";
import Animation from "../Components/Animation.json";

function TagsDetail({ title }) {
  let { id } = useParams();
  console.log(id);

  const [tags, setTags] = useState({});
  useEffect(() => {
    fetch(`https://10.35.29.186/api/tags/${id}?`)
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

  const handleLogoClick = () => {
    window.location.reload();
  };

  // Lotties
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000); // Set the delay in milliseconds (3 seconds in this example)
    return () => clearTimeout(timer);
  }, []);

  const isDesktopWidth = window.innerWidth > 1600;
  const isMobileWidth = window.innerWidth < 420;

  return (
    <div className={`App ${isDesktopWidth || isMobileWidth ? "" : "px-5"}`}>
      {!loaded && (
        <div
          className="loading-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "white",
            zIndex: 9999,
          }}
        >
          <Lottie
            loop
            animationData={Animation}
            play
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            speed={1.5} // Adjust the animation speed as needed
            onEvent={() => setLoaded(true)} // Set the loaded state when the animation ends
            eventListeners={[
              {
                eventName: "complete",
                callback: () => setLoaded(true),
              },
            ]}
          />
        </div>
      )}
      <section style={{ borderTop: "1px solid black", marginTop: "1.5rem" }}>
        <MDBContainer className="pt-5 xs:max-w-full sm:max-w-7xl sm:px-5 md:px-0 ">
          {/* Title */}
          <MDBRow className="pt-0 pb-0 xs:px-5 sm:px-5 md:px-0">
            <MDBCol
              className="col-2 text-uppercase fw-bold pt-2 sm:pb-0"
              style={{
                width: "-webkit-max-content",
                fontFamily: "FontMedium",
                // fontSize: "1.3rem",
              }}
            >
              {/* color: "#AE023E", */}
              <Link to="/">
                <a
                  style={{ color: "#AE023E" }}
                  className="xs:text-lg sm:text-xl"
                >
                  {title}
                </a>
              </Link>
            </MDBCol>
            <MDBCol className="col-1 p-0 me-3" style={{ width: "3.33%" }}>
              <span>
                <KeyboardArrowRightIcon
                  style={{
                    width: "2em",
                    height: "2em",
                    color: "#2F3437 !important",
                  }}
                ></KeyboardArrowRightIcon>
              </span>
            </MDBCol>
            <MDBCol className="col-md-8 col-12 xs:ps-4 sm:ps-0 pt-2">
              <span
                className="text-uppercase fw-bold xs:text-lg sm:text-xl"
                style={{ fontFamily: "FontMedium" }}
              >
                {tags.attributes?.name_en || "-"}
              </span>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        {/* Container  */}
        <MDBContainer className="xs:max-w-full sm:max-w-7xl pt-5 xs:px-5 sm:px-1">
          <MDBRow className="pt-0 pb-0 xs:px-5 sm:px-1">
            <MDBCol className="d-flex ps-0 pb-0 pe-5">
              <div className="d-flex flex-column w-100">
                <p
                  className="fw-bolder pt-4 xs:text-xl sm:text-4xl"
                  style={{
                    color: "#AE023E",
                    fontFamily: "MyFont",
                    lineHeight: "1.6",
                  }}
                >
                  {tags.attributes?.name_en || "-"}
                </p>
              </div>
            </MDBCol>
            <MDBCol md="7" className="p-0">
              <MDBCardImage
                className="rounded-0"
                src={clusterimg1}
                position="top"
                alt="..."
                // style={{
                //   height: "380px",
                //   width: "-webkit-fit-content",
                //   objectFit: "initial",
                //   borderRadius: "0px",
                //   alignSelf: "center",
                // }}
                style={{
                  //   height: "350px",
                  // width: "100%",
                  // height: "400px",
                  objectFit: "fill",
                  // height: "500px",
                  borderRadius: "0px",
                  alignSelf: "center",
                  // objectFit: "contain",
                }}
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <section>
        <MDBContainer className="xs:max-w-full sm:max-w-7xl pt-5 xs:px-5 sm:px-1">
          <MDBRow className="pt-0 pb-0 xs:px-5 sm:px-1">
            {/* Current Affiliations */}
            <MDBRow className="pt-4 px-0">
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
                className="fw-bold text-capitalize ps-0 pt-4"
                style={{ color: "#A02040", fontFamily: "FontMedium" }}
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
                  height: "300px",
                  objectFit: "initial",
                  borderRadius: "0px",
                  alignSelf: "center",
                  // objectFit: "contain",
                }}
              />
            </MDBRow>
            {/* Current Affiliations */}
            <MDBRow className="pt-4 ps-0">
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
              <p
                className="fw-bold text-initial text-black ps-0 pt-4"
                style={{ fontFamily: "FontMedium" }}
              >
                Relevant PIs: Dr. Sirawaj Itthipuripat, Dr. Chaipat Chunharas
              </p>
            </MDBRow>

            {/*  Selected Publications */}
            <MDBRow>
              <p
                className="fw-bold text-initial text-black ps-0 pt-4"
                style={{ fontFamily: "FontMedium" }}
              >
                Relevant publications
              </p>
            </MDBRow>
            <MDBRow className="pt-2">
              {publicationfiles.map((member) => (
                <>
                  <Link
                    to={member.attributes.url}
                    target="_blank"
                    style={{ color: "black" }}
                  >
                    <MDBCol md="11" key={member.id} className="pb-2 ">
                      <p style={{ display: "inline-block" }}>
                        <ArticleIcon
                          color="primary"
                          style={{ marginRight: "1rem" }}
                        />
                        {member.attributes.description_en}
                      </p>
                    </MDBCol>
                  </Link>
                </>
              ))}
            </MDBRow>

            {/*   2. Web-based applications */}
            <MDBRow>
              <h5
                className="fw-bold text-capitalize ps-2 pt-4"
                style={{ color: "#A02040", fontFamily: "FontMedium" }}
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
              <p
                className="fw-bold  text-black pt-4"
                style={{ fontFamily: "FontMedium" }}
              >
                Relevant PIs: Dr. Teerasit Termsaithong, Dr. Kajornvut Ounjai
              </p>
            </MDBRow>
            {/*  3. MRI and Parkinson Disease */}
            <MDBRow>
              <h5
                className="fw-bold text-capitalize ps-2 pt-4"
                style={{ color: "#A02040", fontFamily: "FontMedium" }}
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
              <p
                className="fw-bold  text-black pt-4"
                style={{ fontFamily: "FontMedium" }}
              >
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

export default TagsDetail;
