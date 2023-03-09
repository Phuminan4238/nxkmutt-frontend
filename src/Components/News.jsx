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
import new1 from "../Images/new-1.png";
import new2 from "../Images/new-2.png";

function Post() {
  const [uploadfiles, setUploadfiles] = useState([]);

  useEffect(() => {
    fetch("http://10.35.29.186:1337/api/events?populate=id")
      .then((res) => res.json())
      .then((result) => {
        setUploadfiles(result.data);
      });
  });
  return (
    <MDBContainer className="py-4">
      {uploadfiles.map((member) => (
        <MDBRow className="pb-4">
          <MDBCol md="4">
            <MDBRipple
              className="bg-image hover-overlay shadow-1-strong rounded"
              rippleTag="div"
              rippleColor="light"
            >
              <img src={new1} className="w-100" />
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                ></div>
              </a>
            </MDBRipple>
          </MDBCol>
          <MDBCol className="d-flex ps-4 xs:pt-4 sm:pt-2">
            <div className="d-flex flex-column w-100">
              <h4 className="fw-bold xs:text-lg sm:text-2xl">
                {member.attributes.name_en}
              </h4>
              <p className="mt-2 xs:text-sm sm:text-lg">
                {member.attributes.name_th}
              </p>
              <div
                className="d-flex justify-content-between mt-auto xs:text-base pt-1 sm:text-lg pt-2"
                id="news-underline"
              >
                <p> {member.attributes.createdAt}</p>
                <p className="mb-0">Content Master</p>
              </div>
              <p href="#" className="pt-2 fw-bold" style={{ color: "#AE023E" }}>
                Read more
              </p>
            </div>
          </MDBCol>
        </MDBRow>
      ))}
    </MDBContainer>
  );
}

export default function News() {
  return (
    <>
      <Post />
    </>
  );
}
