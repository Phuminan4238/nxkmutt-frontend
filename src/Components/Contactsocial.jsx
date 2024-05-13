import React, { useState, useEffect } from "react";
import axios from "axios";
import { LanguageContext } from "./LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const ContactInfo = () => {
  const [socialMediaData, setSocialMediaData] = useState([]);
  const [hasDataFetched, setHasDataFetched] = useState(false);

  useEffect(() => {
    if (!hasDataFetched) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "http://10.2.14.173/api/contacts?populate=admin_staff.uploadfiles.fileupload"
          );
          const data = response.data.data;
          setSocialMediaData(data);
          setHasDataFetched(true);
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    }
  }, [hasDataFetched]);

  const cards = [
    {
      id: 6,
      title: "Facebook",
      icon: faFacebook,
      color: "#0370e6",
    },
    {
      id: 7,
      title: "YouTube",
      icon: faYoutube,
      color: "red",
    },
    {
      id: 8,
      title: "Twitter",
      icon: faTwitter,
      color: "#1DA1F2",
    },
  ];

  return (
    <div className="container m-0">
      <div className="row">
        {cards.map((card, index) => {
          const socialData = socialMediaData.find(
            (item) => item.id === card.id
          );
          return (
            <div className="col" key={index}>
              <div className="image-container d-flex align-items-center">
                <FontAwesomeIcon
                  icon={card.icon}
                  size="3x"
                  style={{ color: card.color }}
                />
                <p className="ps-4 text-center align-middle">{card.title}</p>
                {socialData && <p>{socialData.content_en}</p>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactInfo;
