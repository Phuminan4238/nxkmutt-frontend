import React from "react";
import { useState, useEffect, setIsLoaded } from "react";
/* Routes */
import { Route, Routes, useParams } from "react-router";
/* Material UI */
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
/* MDBootstrap */
import { MDBCardImage, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
/* Images */
import vr2 from "../Images/vr-2.png";
import news1 from "../Images/new-1.png";
import { Link } from "react-router-dom";

function TagsDetail({ title }) {
  let { id } = useParams();

  const [tags, setTags] = useState({});

  useEffect(() => {
    fetch(`https://10.35.29.186/api/events/${id}?`)
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

  return (
    <div className="App">
      <section style={{ borderTop: "1px solid black", marginTop: "1.5rem" }}>
        <MDBContainer className="xs:max-w-full sm:max-w-7xl pt-5">
          <MDBRow className="flex-sm-row flex-column pt-0 pb-0 xs:px-5 sm:px-5 md:px-0">
            {/* <MDBCol className="col-1 text-uppercase fw-bold pb-4 sm:pb-0">
              {title}
            </MDBCol>
            <MDBCol className="col-md-6 col-12">
              <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
              <span className="text-uppercase fw-bold ps-4">
                {tags.attributes?.name_en || "not found"}
              </span>
            </MDBCol> */}
            <MDBCol
              className="col-2 text-uppercase fw-bold pt-2 sm:pb-0"
              style={{
                width: "-webkit-max-content",
                fontFamily: "FontMedium",
                fontSize: "1.3rem",
              }}
            >
              <Link to="/" onClick={handleLogoClick}>
                <a style={{ color: "#AE023E" }}>{title}</a>
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
            <MDBCol className="col-md-8 col-12 ps-0 pt-2">
              <span
                className="text-uppercase fw-bold "
                style={{ fontFamily: "FontMedium", fontSize: "1.3rem" }}
              >
                {tags.attributes?.name_en || "not found"}
              </span>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBContainer className="xs:max-w-full sm:max-w-7xl pt-5">
          <MDBRow className="pt-0 pb-0 xs:px-5 sm:px-5 md:px-0">
            <MDBCol className="d-flex pb-0 pe-5">
              <div className="d-flex flex-column w-100">
                <h1 className="fw-bolder" style={{ color: "#AE023E" }}>
                  {tags.attributes?.name_en || "not found"}
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
                src={news1}
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
        </MDBContainer>
      </section>
      <section>
        <MDBContainer className="xs:max-w-full sm:max-w-7xl">
          <MDBRow className="pt-4 pb-0 xs:px-5 sm:px-5 md:px-0">
            {/* Current Affiliations */}
            <MDBRow className="pt-4">
              <p>More news detail....</p>
            </MDBRow>

            {/*  Grants */}
            <MDBRow>
              <h5
                className="fw-bold text-uppercase ps-2 pt-4"
                style={{ color: "#A02040" }}
              >
                More news detail....
              </h5>
            </MDBRow>
            <MDBRow className="pt-0 pb-0">
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
              <p>More news detail....</p>
            </MDBRow>
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
}

export default TagsDetail;
