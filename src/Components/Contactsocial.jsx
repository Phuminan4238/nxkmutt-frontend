import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const ContactInfo = () => {
  const [facebookData, setFacebookData] = useState(null);
  const [youtubeData, setYoutubeData] = useState(null);
  const [instagramData, setInstagramData] = useState(null);
  const [hasDataFetched, setHasDataFetched] = useState(false);

  useEffect(() => {
    if (!hasDataFetched) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "http://10.2.14.173/api/contacts?populate=uploadfiles.fileupload"
          );
          const data = response.data.data;
          if (data && data.length > 0) {
            const facebookInfo = data.find((item) => item.id === 6);
            const youtubeInfo = data.find((item) => item.id === 7);
            const instagramInfo = data.find((item) => item.id === 8);

            setFacebookData(facebookInfo ? facebookInfo.attributes : null);
            setYoutubeData(youtubeInfo ? youtubeInfo.attributes : null);
            setInstagramData(instagramInfo ? instagramInfo.attributes : null);
          }
          setHasDataFetched(true);
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    }
  }, [hasDataFetched]);

  return (
    <div className="container m-0">
      <div className="row">
        <div className="col-sm-12 col-md-3 mb-3">
          {facebookData && (
            <Link
              to={facebookData.content_en[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center m-0 text-black text-decoration-none"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                size="2x"
                className="pr-3"
                style={{ color: "blue" }}
              />
              <p className={`font-medium m-0 xs:text-sm md:text-lg`}>
                {facebookData.header_en}
              </p>
            </Link>
          )}
        </div>
        <div className="col-sm-12 col-md-3 mb-3">
          {youtubeData && (
            <Link
              to={youtubeData.content_en[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-black text-decoration-none"
            >
              <FontAwesomeIcon
                icon={faYoutube}
                size="2x"
                className="pr-3"
                style={{ color: "red" }}
              />
              <p className={`font-medium m-0 xs:text-sm md:text-lg`}>
                {youtubeData.header_en}
              </p>
            </Link>
          )}
        </div>
        <div className="col-sm-12 col-md-3 mb-3">
          {instagramData && (
            <Link
              to={instagramData.content_en[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-black text-decoration-none"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                size="2x"
                className="pr-3"
                style={{ color: "blue" }}
              />
              <p className={`font-medium m-0 xs:text-sm md:text-lg`}>
                {instagramData.header_en}
              </p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
