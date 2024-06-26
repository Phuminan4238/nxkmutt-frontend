import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
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
import membericon from "../Images/member-icon.png";
import teamimg5 from "../Images/team-5.png";
// Language
import { LanguageContext } from "./LanguageContext";

// Desktop
function ImageDesktop() {
  const [uploadfiles, setUploadfiles] = useState([]);

  const { selectedLanguage, handleLanguageSwitch } =
    useContext(LanguageContext);

  useEffect(() => {
    let isMounted = true;

    const instance = axios.create({
      baseURL: "http://10.2.14.173/api/",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    async function fetchData() {
      try {
        const response = await instance.get(
          "members?populate=uploadfiles.fileupload&filters[usertype][$eq]=advisor_and_collaborator&sort=sort"
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

  const colors = ["#E0B054", "#88BFD2"];

  const renderMemberColumn = (member, index) => (
    <MDBCol
      md={Math.floor(12 / Math.min(uploadfiles.length, 5))}
      key={member.id}
      className="col-md-2 d-flex flex-column grow sm:p-0 "
    >
      <MDBCard
        className=""
        style={{
          boxShadow: "unset",
          borderRadius: "0px",
          backgroundColor: colors[index % colors.length],
          height: "425px", // Set a fixed height for the entire card
        }}
      >
        <MDBCardImage
          className="rounded-0"
          src={
            "http://10.2.14.173" +
            member.attributes.uploadfiles.data[0]?.attributes.fileupload.data[0]
              ?.attributes.url
          }
          position="top"
          alt="..."
          style={{
            objectFit: "cover",
            borderRadius: "0px",
            alignSelf: "center",
            height: "50%", // Adjust this value based on your preference
            width: "100%", // Ensure the image takes the full width
            objectPosition: "50% 15%",
          }}
        />

        <MDBCardBody
          style={{
            padding: "0px",
            height: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div className="d-flex align-items-center justify-content-center flex-column w-100 h-100">
            <p
              className="text-white text-center mt-2 mb-2 xs:text-md sm:text-md"
              style={{
                fontFamily: "FontMedium",
              }}
            >
              {selectedLanguage === "en"
                ? `${member.attributes.prefix_en} ${member.attributes.name_en} ${member.attributes.surname_en}`
                : `${member.attributes.prefix_th} ${member.attributes.name_th} ${member.attributes.surname_th}`}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <hr
                  style={{
                    color: "white",
                    opacity: "1",
                    width: "30px",
                    height: "3px",
                    margin: "1rem 0",
                  }}
                />
              </div>
            </p>

            <p className="fw-normal text-white text-center px-4 xs:text-sm">
              {selectedLanguage === "en"
                ? `${member.attributes.position_en || ""}`
                : `${member.attributes.position_th || ""}`}
            </p>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );

  const renderEmptyColumn = (index) => (
    <MDBCol
      md={Math.floor(12 / Math.min(uploadfiles.length, 5))}
      key={`empty_${index}`}
      className="col-md-2 d-flex flex-column grow sm:p-0 "
    >
      {/* Render your empty column UI here */}
    </MDBCol>
  );

  const renderRow = (startIndex, endIndex) => (
    <MDBRow
      key={`row_${startIndex}`}
      className="p-0 w-fill"
      id="cluster-gutter"
    >
      {Array.from({ length: 5 }, (_, colIndex) => {
        const memberIndex = startIndex + colIndex;
        const member = uploadfiles[memberIndex];
        return member
          ? renderMemberColumn(member, memberIndex)
          : renderEmptyColumn(colIndex);
      })}
    </MDBRow>
  );

  const renderRows = () => {
    const totalMembers = uploadfiles.length;
    const rows = Math.ceil(totalMembers / 5);

    return Array.from({ length: rows }, (_, rowIndex) => {
      const startIndex = rowIndex * 5;
      const endIndex = Math.min(startIndex + 5, totalMembers) - 1;
      return renderRow(startIndex, endIndex);
    });
  };

  return (
    <MDBContainer className="fluid p-0" id="cluster-container">
      {renderRows()}
    </MDBContainer>
  );
}

// Mobile
function ImageMobile({ members }) {
  const [uploadfiles, setUploadfiles] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const instance = axios.create({
      baseURL: "http://10.2.14.173/api/",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    async function fetchData() {
      try {
        const response = await instance.get(
          "members?populate=uploadfiles.fileupload&filters[usertype][$eq]=advisor_and_collaborator&sort=sort"
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

  const { selectedLanguage, handleLanguageSwitch } =
    useContext(LanguageContext);

  return (
    <>
      <div className="d-flex justify-content-between py-0" id="tools-flex">
        <MDBContainer className="xs:max-w-full sm:max-w-7xl">
          <MDBRow>
            {uploadfiles.map((member) => (
              <MDBCol
                md="4"
                key={member.id}
                className="col-6 d-flex flex-column p-0 px-0"
              >
                <MDBCard
                  style={{
                    // borderBottom: "1px solid black",
                    boxShadow: "unset",
                    borderRadius: "0px",
                  }}
                >
                  <MDBCardImage
                    className="rounded-4 w-75 sm:w-100"
                    src={
                      "http://10.2.14.173" +
                      member.attributes.uploadfiles.data[0]?.attributes
                        .fileupload.data[0]?.attributes.url
                    }
                    position="top"
                    alt="..."
                    style={{
                      // height: "350px",
                      objectFit: "contain",
                      // borderRadius: "0px",
                      alignSelf: "center",
                    }}
                  />

                  <MDBCardBody>
                    <MDBCardTitle className="m-0">
                      <p
                        className="fw-bold text-center mb-0 xs:text-sm md:text-2xl"
                        style={{ color: "black" }}
                      >
                        {selectedLanguage === "en"
                          ? `${member.attributes.prefix_en} ${member.attributes.name_en} ${member.attributes.surname_en}`
                          : `${member.attributes.prefix_th} ${member.attributes.name_th} ${member.attributes.surname_th}`}
                      </p>
                    </MDBCardTitle>
                    <MDBCardText className="mb-2">
                      <p
                        className="fw-normal text-center mb-0 xs:text-xs md:text-2xl pt-2"
                        style={{ color: "black" }}
                      >
                        {selectedLanguage === "en"
                          ? `${member.attributes.position_en || ""} `
                          : `${member.attributes.position_th || ""}`}
                      </p>
                    </MDBCardText>
                    {/* <MDBCardText key={member.attributes}>
                      <p
                        className="fw-normal text-center text-xs md:text-lg"
                        style={{ color: "#AE023E" }}
                      >
                        Main Interest, Main <br></br> Interest, Main Interest
                      </p>
                    </MDBCardText> */}
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
}

export default function Collaborator() {
  const isMobile = useMediaQuery({ query: "(max-width: 760px)" });

  return (
    <>
      {/* Mobile  */}
      {isMobile && <ImageMobile />}

      {/* Desktop  */}
      {!isMobile && <ImageDesktop />}
    </>
  );
}
