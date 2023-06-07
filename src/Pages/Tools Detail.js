import React from "react";
import { useState, useEffect, setIsLoaded } from "react";
import axios from "axios";
/* Routes */
import { Route, Routes, useParams } from "react-router";
/* Material UI */
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
/* MDBootstrap */
import { MDBCardImage, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
/* Images */
import vr2 from "../Images/vr-2.png";
import news1 from "../Images/new-1.png";

function ToolsDetail({ title }) {
  let { id } = useParams();
  const [uploadfiles, setUploadfiles] = useState({});
  const [publicationfiles, setPublicationfiles] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://10.35.29.186/api/tools/${id}?populate=uploadfiles.fileupload`
      )
      .then((response) => {
        setUploadfiles(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get("https://10.35.29.186/api/publications?populate=id")
      .then((response) => {
        setPublicationfiles(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [memberCover, setMembercover] = useState([]);
  useEffect(() => {
    fetch(
      "https://10.35.29.186/api/uploadfiles?populate=fileupload&filters[filename][$eq]=tools_cover_image"
    )
      .then((res) => res.json())
      .then((result) => {
        setMembercover(result.data);
      });
  }, []);

  return (
    <div className="App">
      <section style={{ borderTop: "1px solid black", marginTop: "1.5rem" }}>
        <MDBContainer className="pt-5 xs:max-w-full sm:max-w-7xl sm:px-5 md:px-0 ">
          <MDBRow className="pt-0 pb-0 xs:px-5 sm:px-5 md:px-0">
            <MDBCol
              className="col-2 text-uppercase fw-bold pt-2 sm:pb-0"
              style={{
                width: "-webkit-max-content",
                fontFamily: "FontMedium",
                fontSize: "1.3rem",
              }}
            >
              {/* Team member */}
              {title}
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
                {uploadfiles.attributes?.name_en || "not found"}
              </span>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBContainer className="xs:max-w-full sm:max-w-7xl pt-5">
          <MDBRow className="pt-0 pb-0 xs:px-5 sm:px-5 md:px-0">
            <MDBCol className="d-flex ps-0 pb-0 pe-5">
              <div className="d-flex flex-column w-100">
                <h1
                  className="fw-bolder pt-4"
                  style={{ color: "#AE023E", fontFamily: "MyFont" }}
                >
                  {uploadfiles.attributes?.name_en || "not found"}
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
                src={
                  "https://10.35.29.186" +
                    uploadfiles.attributes?.uploadfiles.data[0]?.attributes
                      .fileupload.data[0]?.attributes.url || "not found"
                }
                position="top"
                alt="..."
                style={{
                  //   height: "350px",
                  // width: "100%",
                  height: "380px",
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
            <MDBRow className="pt-4 text-initial">
              <p>More tools detail....</p>
            </MDBRow>

            {/*  Grants */}
            <MDBRow>
              <h5
                className="fw-bold text-uppercase ps-2 pt-4"
                style={{ color: "#A02040", fontFamily: "MyFont" }}
              >
                More tools detail....
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
              <p>More tools detail....</p>
            </MDBRow>
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
}

export default ToolsDetail;
