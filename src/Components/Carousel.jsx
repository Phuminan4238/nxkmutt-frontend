import React from "react";
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
import carouselimg1 from "../Images/carousel-1.png";
import carouselimg2 from "../Images/cluster-1.png";
import carouselimg3 from "../Images/cluster-2.png";

function Image() {
  return (
    <MDBCarousel showIndicators fade id="carousel-nav">
      <MDBCarouselItem
        className="w-100 d-block"
        style={{ height: 500 }}
        itemId={1}
        src={carouselimg1}
        alt="..."
      ></MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block"
        style={{ height: 500 }}
        itemId={2}
        src={carouselimg2}
        alt="..."
      ></MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block"
        style={{ height: 500 }}
        itemId={3}
        src={carouselimg3}
        alt="..."
      ></MDBCarouselItem>
    </MDBCarousel>
  );
}

export default function Carousel() {
  return <Image />;
}
