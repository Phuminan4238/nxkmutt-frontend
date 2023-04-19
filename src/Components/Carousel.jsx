import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import carouselimg2 from "../Images/cluster-1.png";
import carouselimg3 from "../Images/cluster-2.png";
import carouselimg4 from "../Images/cluster-3.png";

function Image() {
  return (
    <MDBCarousel showIndicators fade id="carousel-nav">
      <MDBCarouselItem
        className="w-100 d-block xs:h-fit md:h-full "
        itemId={1}
        src={carouselimg4}
        alt="..."
      ></MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block xs:h-fit md:h-full"
        itemId={2}
        src={carouselimg2}
        alt="..."
      ></MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block xs:h-fit md:h-full"
        // style={{ height: 600 }}
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
