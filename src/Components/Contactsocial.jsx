import React from "react";
import { MDBCol, MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import vr2 from "../Images/vr-2.png";

const CardList = ({ cards }) => {
  const visibleCards = cards.slice(0, 3); // Only display the first 3 cards

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
                {card.title}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default function App() {
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
      <CardList cards={cards} />
    </div>
  );
}
