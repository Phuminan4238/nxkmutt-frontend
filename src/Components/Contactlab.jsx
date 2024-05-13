import React, { useState, useEffect } from "react";
import axios from "axios";
import { MDBCardImage } from "mdb-react-ui-kit";

const CardList = ({ cards }) => {
  return (
    <div className="row">
      {cards.map((card, index) => (
        <div className="col" key={index}>
          <div className="image-container">
            {card.img && (
              <MDBCardImage
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
  const [labData, setLabData] = useState([]);
  const [hasDataFetched, setHasDataFetched] = useState(false);

  useEffect(() => {
    if (!hasDataFetched) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "http://10.2.14.173/api/labs?populate=uploadfiles.fileupload"
          );
          const data = response.data.data;
          setLabData(data);
          setHasDataFetched(true);
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    }
  }, [hasDataFetched]);

  const cards = labData.map((lab) => ({
    title: lab.attributes.name,
    img:
      "http://10.2.14.173" +
      lab.attributes.uploadfiles.data[0]?.attributes.fileupload.data[0]
        ?.attributes.url,
  }));

  return (
    <div className="container px-0 mx-0">
      <CardList cards={cards} />
    </div>
  );
}
