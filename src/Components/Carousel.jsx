import React from "react";
import { useEffect, useState } from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useMediaQuery } from "react-responsive";

// Desktop
function ImageDesktop() {
  const [coverImages, setCoverImages] = useState([]);
  useEffect(() => {
    async function fetchCoverImages() {
      try {
        const response = await axios.get(
          "http://10.2.14.173/api/uploadfiles?populate=fileupload&filters[filename][$eq]=website_slider_cover_images"
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
      <div
        className="slider-container"
        style={{ marginTop: "-113px", zIndex: "-1" }}
      >
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
            renderIndicator={(onClickHandler, isSelected, index) => (
              <button
                onClick={onClickHandler}
                className="my-0"
                style={{
                  background: isSelected ? "#AE023E" : "gray", // Set the selected indicator to red and others to gray
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  border: "none",
                  margin: "0 4px",
                  padding: 0,
                  cursor: "pointer",
                  // top: "98%",
                }}
                key={index}
              />
            )}
          >
            {coverImages.map((image) => (
              <div
                key={image.id}
                className="w-100 d-block  md:h-full"
                id="carousel-nav"
              >
                <img
                  src={`http://10.2.14.173${image.attributes.url}`}
                  alt={`Cover Image ${image.id}`}
                  className="w-100 d-block xs:h-4/5 md:h-full object-cover"
                  // style={{ objectPosition: "50% -300%" }}
                />
              </div>
            ))}
          </Carousel>
        )}
      </div>
    </>
  );
}

// Mobile
function ImageMobile({ members }) {
  const [coverImages, setCoverImages] = useState([]);

  useEffect(() => {
    async function fetchCoverImages() {
      try {
        const response = await axios.get(
          "http://10.2.14.173/api/uploadfiles?populate=fileupload&filters[filename][$eq]=website_slider_cover_images"
        );
        setCoverImages(response.data.data[0]?.attributes.fileupload.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchCoverImages();
  }, []);

  return (
    <>
      <div className="slider-container">
        {coverImages.length > 0 && (
          <div className="carousel-wrapper">
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
              renderIndicator={(onClickHandler, isSelected, index) => (
                <button
                  onClick={onClickHandler}
                  style={{
                    background: isSelected ? "#AE023E" : "gray", // Set the selected indicator to red and others to gray
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    border: "none",
                    margin: "0 4px",
                    padding: 0,
                    cursor: "pointer",
                    top: "260px",
                  }}
                  key={index}
                />
              )}
            >
              {coverImages.map((image) => (
                <div key={image.id} className="w-100 d-block pb-5 md:h-100">
                  <img
                    src={`http://10.2.14.173${image.attributes.url}`}
                    alt={`Cover Image ${image.id}`}
                    className="w-100 d-block object-cover"
                    style={{ height: "250px" }}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        )}
      </div>
    </>
  );
}

export default function Carousel2() {
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
