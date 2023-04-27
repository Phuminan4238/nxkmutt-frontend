import React from "react";
import { useState, useEffect, setIsLoaded } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import clusterimg1 from "../Images/cluster-1.png";
import clusterimg3 from "../Images/cluster-3.png";
import clusterimg4 from "../Images/cluster-4.png";

const cluster1 = {
  name: " Cognitive, Clinical",
};

function Image() {
  const [uploadfiles, setUploadfiles] = useState({});

  useEffect(() => {
    fetch("https://10.35.29.186/api/tags/1")
      .then((res) => res.json())
      .then((result) => {
        setUploadfiles(result.data);
      });
  }, []); // empty dependency array

  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MDBContainer className="fluid p-0" id="cluster-container">
      <MDBRow className="p-0 ">
        <MDBCol md="8" className="p-0 xs:order-2 sm:order-1">
          <img src={clusterimg1} class="image-fluid" id="cluster-img" />
        </MDBCol>
        <MDBCol
          order="1"
          className="d-flex p-5"
          style={{ background: "#AE023E" }}
        >
          <div className="d-flex flex-column w-100">
            <p className="fw-bold text-white xs:text-xl md:text-3xl">
              {uploadfiles.attributes?.name_en || "not found"}
            </p>
            <div className="d-flex justify-content-between mt-auto align-items-end">
              <p
                className="fw-normal text-white mt-5 xs:text-base md:text-lg cursor-pointer"
                onClick={toggleAccordion}
              >
                {isOpen ? (
                  <span>&#x25B2; Hide Info</span>
                ) : (
                  <span>&#x25BC; More Info</span>
                )}
              </p>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
      {isOpen && (
        <MDBRow className="p-5" style={{ background: "#F5F5F5" }}>
          <MDBCol>
            <p className="text-black px-20">
              The Cognitive, Clinical and Computational neuroscience cluster
              focuses on investigating neural mechanisms that support human
              perception, attention, memory, and affective systems across
              healthy and clinical populations. We employ multiple neuroscience
              techniques (e.g., EEG, fMRI, and fNIR) as well as non-invasive
              brain stimulation to study these cognitive functions and come up
              with new ways to treat and slow the progress of neurodegenerative
              disorders in aging society like Mild Cognitive Impairment,
              Alzhiemer’s and Parkinson’s diseases (PD). In addition, we use
              computational modeling and machine learning methods to map neural
              activity to brain functions and to develop brain-based diagnostic
              tools for neurological and psychiatric disorders.
            </p>
          </MDBCol>
        </MDBRow>
      )}
    </MDBContainer>
  );
}

function ReverseImage() {
  const [uploadfiles, setUploadfiles] = useState({});

  useEffect(() => {
    fetch("https://10.35.29.186/api/tags/2")
      .then((res) => res.json())
      .then((result) => {
        setUploadfiles(result.data);
      });
  }, []); // empty dependency array

  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MDBContainer className="fluid p-0" id="cluster-container">
      <MDBRow className="p-0 ">
        <MDBCol order="1" className="d-flex p-5 bg-success">
          <div className="d-flex flex-column w-100">
            <p className="fw-bold text-white xs:text-xl md:text-3xl">
              {uploadfiles.attributes?.name_en || "not found"}
            </p>
            <div className="d-flex justify-content-between mt-auto align-items-end">
              <p
                className="fw-normal text-white mt-5 xs:text-base md:text-lg cursor-pointer"
                onClick={toggleAccordion}
              >
                {isOpen ? (
                  <span>&#x25B2; Hide Info</span>
                ) : (
                  <span>&#x25BC; More Info</span>
                )}
              </p>
            </div>
          </div>
        </MDBCol>
        <MDBCol md="8" className="p-0 xs:order-2 sm:order-1">
          <img src={clusterimg1} class="image-fluid" id="cluster-img" />
        </MDBCol>
      </MDBRow>
      {isOpen && (
        <MDBRow className="p-5" style={{ background: "#F5F5F5" }}>
          <MDBCol>
            <p className="text-black px-20">
              The Cognitive, Clinical and Computational neuroscience cluster
              focuses on investigating neural mechanisms that support human
              perception, attention, memory, and affective systems across
              healthy and clinical populations. We employ multiple neuroscience
              techniques (e.g., EEG, fMRI, and fNIR) as well as non-invasive
              brain stimulation to study these cognitive functions and come up
              with new ways to treat and slow the progress of neurodegenerative
              disorders in aging society like Mild Cognitive Impairment,
              Alzhiemer’s and Parkinson’s diseases (PD). In addition, we use
              computational modeling and machine learning methods to map neural
              activity to brain functions and to develop brain-based diagnostic
              tools for neurological and psychiatric disorders.
            </p>
          </MDBCol>
        </MDBRow>
      )}
    </MDBContainer>
  );
}

function Image2() {
  const [uploadfiles, setUploadfiles] = useState({});

  useEffect(() => {
    fetch("https://10.35.29.186/api/tags/3")
      .then((res) => res.json())
      .then((result) => {
        setUploadfiles(result.data);
      });
  }, []); // empty dependency array

  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MDBContainer className="fluid p-0" id="cluster-container">
      <MDBRow className="p-0 ">
        <MDBCol md="8" className="p-0 xs:order-2 sm:order-1">
          <img src={clusterimg3} class="image-fluid" id="cluster-img" />
        </MDBCol>
        <MDBCol order="1" className="d-flex p-5 bg-primary">
          <div className="d-flex flex-column w-100">
            <p className="fw-bold text-white xs:text-xl md:text-3xl">
              {uploadfiles.attributes?.name_en || "not found"}
            </p>
            <div className="d-flex justify-content-between mt-auto align-items-end">
              <p
                className="fw-normal text-white mt-5 xs:text-base md:text-lg cursor-pointer"
                onClick={toggleAccordion}
              >
                {isOpen ? (
                  <span>&#x25B2; Hide Info</span>
                ) : (
                  <span>&#x25BC; More Info</span>
                )}
              </p>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
      {isOpen && (
        <MDBRow className="p-5" style={{ background: "#F5F5F5" }}>
          <MDBCol>
            <p className="text-black px-20">
              The Cognitive, Clinical and Computational neuroscience cluster
              focuses on investigating neural mechanisms that support human
              perception, attention, memory, and affective systems across
              healthy and clinical populations. We employ multiple neuroscience
              techniques (e.g., EEG, fMRI, and fNIR) as well as non-invasive
              brain stimulation to study these cognitive functions and come up
              with new ways to treat and slow the progress of neurodegenerative
              disorders in aging society like Mild Cognitive Impairment,
              Alzhiemer’s and Parkinson’s diseases (PD). In addition, we use
              computational modeling and machine learning methods to map neural
              activity to brain functions and to develop brain-based diagnostic
              tools for neurological and psychiatric disorders.
            </p>
          </MDBCol>
        </MDBRow>
      )}
    </MDBContainer>
  );
}

function ReverseImage2() {
  const [uploadfiles, setUploadfiles] = useState({});

  useEffect(() => {
    fetch("https://10.35.29.186/api/tags/4")
      .then((res) => res.json())
      .then((result) => {
        setUploadfiles(result.data);
      });
  }, []); // empty dependency array

  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MDBContainer className="fluid p-0" id="cluster-container">
      <MDBRow className="p-0 ">
        <MDBCol className="d-flex p-5 bg-warning">
          <div className="d-flex flex-column w-100">
            <p className="fw-bold text-white xs:text-xl md:text-3xl">
              {uploadfiles.attributes?.name_en || "not found"}
            </p>
            <div className="d-flex justify-content-between mt-auto align-items-end">
              <p
                className="fw-normal text-white mt-5 xs:text-base md:text-lg cursor-pointer"
                onClick={toggleAccordion}
              >
                {isOpen ? (
                  <span>&#x25B2; Hide Info</span>
                ) : (
                  <span>&#x25BC; More Info</span>
                )}
              </p>
            </div>
          </div>
        </MDBCol>
        <MDBCol md="8" className="p-0">
          <img src={clusterimg4} class="image-fluid" id="cluster-img" />
        </MDBCol>
      </MDBRow>
      {isOpen && (
        <MDBRow className="p-5" style={{ background: "#F5F5F5" }}>
          <MDBCol>
            <p className="text-black px-20">
              The Cognitive, Clinical and Computational neuroscience cluster
              focuses on investigating neural mechanisms that support human
              perception, attention, memory, and affective systems across
              healthy and clinical populations. We employ multiple neuroscience
              techniques (e.g., EEG, fMRI, and fNIR) as well as non-invasive
              brain stimulation to study these cognitive functions and come up
              with new ways to treat and slow the progress of neurodegenerative
              disorders in aging society like Mild Cognitive Impairment,
              Alzhiemer’s and Parkinson’s diseases (PD). In addition, we use
              computational modeling and machine learning methods to map neural
              activity to brain functions and to develop brain-based diagnostic
              tools for neurological and psychiatric disorders.
            </p>
          </MDBCol>
        </MDBRow>
      )}
    </MDBContainer>
  );
}

export default function ClusterAccordion() {
  return (
    <>
      <Image />
      <ReverseImage />
      <Image2 />
      <ReverseImage2 />
    </>
  );
}

{
  /* <MDBContainer className='mw-100 p-0'>
      <MDBRow className='p-0 ' > 
        <MDBCol md='8' className='p-0'>
        <img src='https://picsum.photos/900/400' class='image-fluid mw-100' />
        </MDBCol>
        <MDBCol md='4' className='p-4 bg-danger'>
        <h4 className='text-white align-self-end'>
            Cognitive, Clinical & Computational
            Neuroscience 
          </h4>
          <p className="text-white d-flex flex-column mt-4">
            More Info
          </p>
      </MDBCol>
      </MDBRow>
    </MDBContainer> */
}
{
  /*   

    <MDBContainer className='mw-100 p-0' style={{height: 300}}>
      <MDBRow class="d-flex flex-row">
        <MDBCol md='8' className='p-0'  style={{height: 300}}>
        <div className='bg-image hover-overlay' style={{padding: 0}}>
          <img src='https://mdbootstrap.com/img/new/standard/city/053.webp' class='image-fluid w-100' />
          <div
            className='mask'
            style={{
              background: 'linear-gradient(45deg, rgba(29, 236, 197, 0.5), rgba(91, 14, 214, 0.5) 100%)',
            }}
          ></div>
        </div>
        </MDBCol>
        <MDBCol md='4' className='p-4 bg-danger'>
          <h4 className='text-white align-self-start'>
            Cognitive, Clinical & Computational
            Neuroscience 
          </h4>
          <p className="text-white d-flex flex-column mt-4">
            More Info
          </p>
      </MDBCol>
      </MDBRow>
    </MDBContainer> */
}
