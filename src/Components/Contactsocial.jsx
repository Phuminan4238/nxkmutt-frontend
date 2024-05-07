import React from "react";
import { useState, useEffect, setIsLoaded, useContext } from "react";
import axios from "axios";
/* Routes */
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
/* MDBootstrap */
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import vr2 from "../Images/vr-2.png";

const CardList = ({ cards, socialMediaData }) => {
  const visibleCards = cards.slice(0, 3); // Only display the first 3 cards
  const { selectedLanguage, handleLanguageSwitch } =
    useContext(LanguageContext);

  return (
    <div className="row" id="contact-gutter">
      {visibleCards.map((card, index) => (
        <div className="col" key={index}>
          <div className="image-container d-flex align-items-center">
            {card.icon && (
              <FontAwesomeIcon
                icon={card.icon}
                size="3x"
                style={{ color: card.color }}
              />
            )}
            {card.title && (
              <p className="fw-normal ps-4 text-center text-black xs:text-base md:text-md mt-3 card-description">
                {selectedLanguage === "en"
                  ? `${socialMediaData?.content_en || ""}`
                  : `${socialMediaData?.content_th || ""}`}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default function App() {
  const [socialMediaData, setSocialMediaData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://10.2.14.173/api/contacts?populate=admin_staff.uploadfiles.fileupload"
        );
        const data = response.data.data;
        const socialMediaInfo = data.find((item) => item.id === 5); // Assuming social media ID is 5, adjust as needed
        setSocialMediaData(socialMediaInfo ? socialMediaInfo.attributes : null);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const cards = [
    {
      title: "Facebook",
      icon: faFacebook,
      color: "#0370e6",
    },
    {
      title: "Youtube",
      icon: faYoutube,
      color: "red",
    },
    {
      title: "Twitter",
      icon: faTwitter,
      color: "#37bcf8",
    },
  ];

  return (
    <div className="container px-2 mx-0">
      <CardList cards={cards} socialMediaData={socialMediaData} />
    </div>
  );
}
