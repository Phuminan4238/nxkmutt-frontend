import React from "react";
import { MDBCol, MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";
import vr2 from "../Images/vr-2.png";

const cards = [
  {
    title: "Facebook",
    img: vr2,
  },
  {
    title: "Youtube",
    img: vr2,
  },
  {
    title: "Instagram",
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
              <h5 className="fw-normal text-center text-black">{card.title}</h5>
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
