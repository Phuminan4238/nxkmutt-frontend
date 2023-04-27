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
  return (
    <div className="row row-cols-md-5 row-cols-2">
      {cards.map((card, index) => (
        <MDBCol key={index}>
          <MDBCard style={{ boxShadow: "unset", borderRadius: "0px" }}>
            <MDBCardImage
              className="rounded-2"
              src={card.img}
              position="top"
              alt="..."
              style={{ height: "150px", objectFit: "contain" }}
            />
            <MDBCardBody>
              <p className="fw-normal text-center text-black xs:text-base md:text-lg ">
                {card.title}
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      ))}
    </div>
  );
};

export default function App() {
  return (
    <div className="container px-0 mx-0">
      <CardList cards={cards} />
    </div>
  );
}
