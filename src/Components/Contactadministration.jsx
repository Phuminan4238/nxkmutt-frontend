import React from "react";
import { useState, useEffect, setIsLoaded, useContext } from "react";
import axios from "axios";
/* Routes */
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
/* MDBootstrap */
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
/* Components */
import Contactlab from "../Components/Contactlab";
import Contactsocial from "../Components/Contactsocial";
import Contactadministration from "../Components/Contactadministration";
// Lotties
import Lottie from "react-lottie-player";
import Animation from "../Components/Animation.json";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import Container from "@mui/material/Container";
import { useMediaQuery } from "react-responsive";
// Language
import { LanguageContext } from "../Components/LanguageContext";
import vr2 from "../Images/vr-2.png";

const CardList = ({ cards, staffData, selectedLanguage }) => {
  const visibleCards = cards.slice(0, 3); // Only display the first 3 cards

  return (
    <div className="row flex-column gy-4" id="contact-gutter">
      {staffData.map((member) => (
        <MDBCol key={member.id} className="col d-flex flex-column p-0 px-0">
          <Link
            to={`/Member-Detail/${member.id}`}
            onClick={() => {
              window.scrollTo(0, 0);
              window.location.replace(`/Member-Detail/${member.id}`);
            }}
          >
            <MDBCard
              className="flex-row w-50"
              style={{
                boxShadow: "unset",
                borderRadius: "0px",
                width: "auto",
                height: "100%",
              }}
            >
              <MDBCardImage
                className="rounded-4 w-25"
                src={
                  "https://10.2.14.173" +
                  member.attributes.uploadfiles.data[0]?.attributes.fileupload
                    .data[0]?.attributes.url
                }
                alt="..."
                style={{
                  objectFit: "contain",
                  borderRadius: "0px",
                  alignSelf: "center",
                }}
              />
              <Link
                to={`/Member-Detail/${member.id}`}
                onClick={() => {
                  window.scrollTo(0, 0);
                  window.location.replace(`/Member-Detail/${member.id}`);
                }}
              >
                <MDBCardBody>
                  <MDBCardTitle className="m-0">
                    <p
                      className="fw-bold text-start mb-0 xs:text-sm md:text-lg"
                      style={{ color: "black" }}
                    >
                      {selectedLanguage === "en"
                        ? `${member.attributes.name_en} ${member.attributes.surname_en}`
                        : `${member.attributes.name_th} ${member.attributes.surname_th}`}
                    </p>
                  </MDBCardTitle>
                  <MDBCardText className="mb-2">
                    <p
                      className=" text-start mb-0 text-xs md:text-lg pt-2"
                      style={{ color: "black" }}
                    >
                      {selectedLanguage === "en"
                        ? `${member.attributes.position_en} `
                        : `${member.attributes.position_th}`}
                    </p>
                  </MDBCardText>

                  <p
                    className="fw-normal text-start text-sm md:text-sm"
                    style={{ color: "#AE023E" }}
                  >
                    {selectedLanguage === "en"
                      ? member.attributes.email || "Not found"
                      : member.attributes.email || "ภาษาไทย"}
                  </p>
                  <p
                    className="fw-normal text-start text-sm md:text-sm"
                    style={{ color: "#AE023E" }}
                  >
                    {selectedLanguage === "en"
                      ? member.attributes.phone_number || ""
                      : member.attributes.phone_number || ""}
                  </p>
                </MDBCardBody>
              </Link>
            </MDBCard>
          </Link>
        </MDBCol>
      ))}
    </div>
  );
};

const CardListMobile = ({ cards, staffData, selectedLanguage }) => {
  const visibleCards = cards.slice(0, 3); // Only display the first 3 cards

  return (
    <div className="row flex-column gy-4" id="contact-gutter">
      {staffData.map((member) => (
        <MDBCol key={member.id} className="col d-flex flex-column p-0 px-0">
          <Link
            to={`/Member-Detail/${member.id}`}
            onClick={() => {
              window.scrollTo(0, 0);
              window.location.replace(`/Member-Detail/${member.id}`);
            }}
          >
            <MDBCard
              className="flex-row w-100"
              style={{
                boxShadow: "unset",
                borderRadius: "0px",
                width: "auto",
                height: "100%",
              }}
            >
              <MDBCardImage
                className="rounded-4 w-25"
                src={
                  "https://10.2.14.173" +
                  member.attributes.uploadfiles.data[0]?.attributes.fileupload
                    .data[0]?.attributes.url
                }
                alt="..."
                style={{
                  objectFit: "contain",
                  borderRadius: "0px",
                  alignSelf: "center",
                }}
              />
              <Link
                to={`/Member-Detail/${member.id}`}
                onClick={() => {
                  window.scrollTo(0, 0);
                  window.location.replace(`/Member-Detail/${member.id}`);
                }}
              >
                <MDBCardBody>
                  <MDBCardTitle className="m-0">
                    <p
                      className="fw-bold text-start mb-0 xs:text-sm md:text-lg"
                      style={{ color: "black" }}
                    >
                      {selectedLanguage === "en"
                        ? `${member.attributes.name_en} ${member.attributes.surname_en}`
                        : `${member.attributes.name_th} ${member.attributes.surname_th}`}
                    </p>
                  </MDBCardTitle>
                  <MDBCardText className="mb-2">
                    <p
                      className=" text-start mb-0 text-xs md:text-lg pt-2"
                      style={{ color: "black" }}
                    >
                      {selectedLanguage === "en"
                        ? `${member.attributes.position_en} `
                        : `${member.attributes.position_th}`}
                    </p>
                  </MDBCardText>

                  <p
                    className="fw-normal text-start text-sm md:text-sm"
                    style={{ color: "#AE023E" }}
                  >
                    {selectedLanguage === "en"
                      ? member.attributes.organization_en || "Not found"
                      : member.attributes.organization_th || "ภาษาไทย"}
                  </p>
                </MDBCardBody>
              </Link>
            </MDBCard>
          </Link>
        </MDBCol>
      ))}
    </div>
  );
};

export default function Student() {
  const [staffData, setStaffData] = useState([]);
  const [hasDataFetched, setHasDataFetched] = useState(false);

  useEffect(() => {
    if (!hasDataFetched) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://10.2.14.173/api/contacts?populate=admin_staff.uploadfiles.fileupload"
          );
          const data = response.data.data;
          if (data && data.length > 0) {
            // Filter data for the staffInfo based on the ID
            const staffInfo = data.find((item) => item.id === 4);

            setStaffData(
              staffInfo ? staffInfo.attributes.admin_staff.data : []
            );
          }
          setHasDataFetched(true);
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    }
  }, [hasDataFetched]);

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      {isMobile ? (
        <ImageMobile staffData={staffData} />
      ) : (
        <ImageDesktop staffData={staffData} />
      )}
    </>
  );
}

function ImageMobile({ staffData }) {
  const { selectedLanguage } = useContext(LanguageContext);

  return (
    <MDBContainer className="container px-0 mx-0">
      <CardListMobile
        cards={[]}
        staffData={staffData}
        selectedLanguage={selectedLanguage}
      />
    </MDBContainer>
  );
}

function ImageDesktop({ staffData }) {
  const { selectedLanguage } = useContext(LanguageContext);

  return (
    <MDBContainer className="container px-0 mx-0">
      <CardList
        cards={[]}
        staffData={staffData}
        selectedLanguage={selectedLanguage}
      />
    </MDBContainer>
  );
}
