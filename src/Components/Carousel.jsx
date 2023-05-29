import React from "react";
import { useEffect, useState } from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import axios from "axios";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Image() {
  const [coverImages, setCoverImages] = useState([]);

  useEffect(() => {
    async function fetchCoverImages() {
      try {
        const response = await axios.get(
          "https://10.35.29.186/api/uploadfiles?populate=fileupload&filters[filename][$eq]=website_slider_cover_images"
        );
        setCoverImages(response.data.data[0]?.attributes.fileupload.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchCoverImages();
  }, []);

  // console.log(coverImages);

  return (
    <>
      {coverImages.length > 0 && (
        <Carousel
          showIndicators={true}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          swipeable={false}
          stopOnHover={false}
          emulateTouch={false}
        >
          {coverImages.map((image) => (
            <div
              key={image.id}
              className="w-100 d-block xs:h-fit md:h-full"
              id="carousel-nav"
            >
              <img
                src={`https://10.35.29.186${image.attributes.url}`}
                alt={`Cover Image ${image.id}`}
                className="w-100 d-block xs:h-4/5 md:h-full object-fill"
              />
            </div>
          ))}
        </Carousel>
      )}
    </>
  );
}

export default function Carousel2() {
  return <Image />;
}

{
  /* <MDBCarousel showIndicators fade id="carousel-nav">
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
</MDBCarousel> */
}
