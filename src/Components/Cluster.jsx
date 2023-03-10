import React from "react";
import { useState, useEffect, setIsLoaded } from "react";
import {
  MDBContainer,
  MDBCarousel,
  MDBCarouselItem,
  MDBRow,
  MDBCol,
  MDBRipple,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import clusterimg1 from "../Images/cluster-1.png";
import clusterimg2 from "../Images/cluster-2.png";
import clusterimg3 from "../Images/cluster-3.png";
import clusterimg4 from "../Images/cluster-4.png";

const cluster1 = {
  name: " Cognitive, Clinical",
};

function Image() {
  const [uploadfiles, setUploadfiles] = useState([]);

  useEffect(() => {
    fetch("https://10.35.29.186/api/tags?populate=id")
      .then((res) => res.json())
      .then((result) => {
        setUploadfiles(result.data);
      });
  });
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
          {/* In progress */}
          {/* {uploadfiles.map((member) => ( */}
          <div className="d-flex flex-column w-100">
            <h3 className="text-white fw-bold">
              Cognitive, Clinical &<br></br>
              Computational
              {/* {member.attributes.name_en} */}
              <br></br>
              Neuroscience
            </h3>
            <div className="d-flex justify-content-between mt-auto">
              <h5 className="text-white fw-normal mt-5">More Info</h5>
            </div>
          </div>
          {/* ))} */}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

function ReverseImage() {
  return (
    <MDBContainer className="fluid p-0" id="cluster-container">
      <MDBRow className="p-0 ">
        <MDBCol className="d-flex p-5 bg-success">
          <div className="d-flex flex-column w-100">
            <h3 className="text-white fw-bold">
              Educational &<br></br>
              Neuroscience &<br></br>
              Neurodevelopment
            </h3>
            <div className="d-flex justify-content-between mt-auto">
              <h5 className="text-white fw-normal mt-5">More Info</h5>
            </div>
          </div>
        </MDBCol>
        <MDBCol md="8" className="p-0">
          <img src={clusterimg2} class="image-fluid" id="cluster-img" />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

function Image2() {
  return (
    // <MDBContainer className="fluid p-0" id="cluster-container">
    //   <MDBRow className="p-0 ">
    //     <MDBCol md="8" className="p-0 xs:order-2 sm:order-1">
    //       <img src={clusterimg3} class="image-fluid" id="cluster-img" />
    //     </MDBCol>
    //     <MDBCol className="d-flex p-5 bg-primary">
    //       <div className="d-flex flex-column w-100">
    //         <h3 className="text-white fw-bold">
    //           Human Factors<br></br>
    //           Research & Decision &<br></br>
    //           Neuroscience
    //         </h3>
    //         <div className="d-flex justify-content-between mt-auto">
    //           <h5 className="text-white fw-normal mt-5">More Info</h5>
    //         </div>
    //       </div>
    //     </MDBCol>
    //   </MDBRow>
    // </MDBContainer>

    <MDBContainer className="fluid p-0" id="cluster-container">
      <MDBRow className="p-0 ">
        <MDBCol md="8" className="p-0 xs:order-2 sm:order-1">
          <img src={clusterimg3} class="image-fluid" id="cluster-img" />
        </MDBCol>
        <MDBCol order="1" className="d-flex p-5 bg-primary">
          <div className="d-flex flex-column w-100">
            <h3 className="text-white fw-bold">
              Human Factors<br></br>
              Research & Decision &<br></br>
              Neuroscience
            </h3>
            <div className="d-flex justify-content-between mt-auto">
              <h5 className="text-white fw-normal mt-5">More Info</h5>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

function ReverseImage2() {
  return (
    <MDBContainer className="fluid p-0" id="cluster-container">
      <MDBRow className="p-0 ">
        <MDBCol className="d-flex p-5 bg-warning">
          <div className="d-flex flex-column w-100">
            <h3 className="text-white fw-bold">
              Pharmaceutical<br></br>
              Biology & <br></br>
              Neuropharmacology
            </h3>
            <div className="d-flex justify-content-between mt-auto">
              <h5 className="text-white fw-normal mt-5">More Info</h5>
            </div>
          </div>
        </MDBCol>
        <MDBCol md="8" className="p-0">
          <img src={clusterimg4} class="image-fluid" id="cluster-img" />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default function Clusterimage() {
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
