import React from "react";
import { MDBCol, MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";
import vr2 from "../Images/vr-2.png";

const cards = [
  {
    title: "Institution",
    img: vr2,
  },
  {
    title: "Institution",
    img: vr2,
  },
  {
    title: "Institution",
    img: vr2,
  },
  {
    title: "Institution",
    img: vr2,
  },
  {
    title: "Institution",
    img: vr2,
  },
];

const CardList = ({ cards }) => {
  const visibleCards = cards.slice(0, 5); // Only displa
  return (
    <div className="row">
      {visibleCards.map((card, index) => (
        <div className="col" key={index}>
          <div className="image-container">
            {card.img && (
              <img
                className="rounded-2"
                src={card.img}
                alt="..."
                style={{ height: "150px", objectFit: "contain" }}
              />
            )}
            {card.title && (
              <p className="fw-normal text-center text-black xs:text-sm md:text-lg mt-3 card-description">
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
      title: "Institution",
      img: vr2,
    },
    {
      title: "Institution",
      img: vr2,
    },
    {
      title: "Institution",
      img: vr2,
    },
    {
      title: "Institution",
      img: vr2,
    },
    {
      title: "Institution",
      img: vr2,
    },
  ];

  return (
    <div className="container px-0 mx-0">
      <CardList cards={cards} />
    </div>
  );
}
