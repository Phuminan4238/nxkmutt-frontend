import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, setIsLoaded, useContext } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import EastIcon from "@mui/icons-material/East";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useMediaQuery } from "react-responsive";
// Language
import { LanguageContext } from "./LanguageContext";

function ImageDesktop() {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    fetch("http://10.2.14.173/api/tags")
      .then((res) => res.json())
      .then((result) => {
        setTags(result.data.slice(0, 4));
      });
  }, []);

  const [contents, setContents] = useState([]);
  const topics = [
    "cognitive_clinical_and_computational_neuroscience",
    "human_factors_research_and_decision_neuroscience",
    "educational_neuroscience_and_neurodevelopment",
    "pharmaceutical_biology_and_neuropharmacology",
  ];

  useEffect(() => {
    const fetchContents = async () => {
      const promises = topics.map((topic) =>
        fetch(
          `http://10.2.14.173/api/contents?populate=*&filters[topic][$eq]=${topic}`
        ).then((res) => res.json())
      );
      const results = await Promise.all(promises);
      setContents(results);
    };

    fetchContents();
  }, []);

  const [cognitiveimg, setCognitiveimg] = useState([]);
  useEffect(() => {
    fetch(
      "http://10.2.14.173/api/uploadfiles?populate=fileupload&filters[filename][$eq]=public_cognitive"
    )
      .then((res) => res.json())
      .then((result) => {
        setCognitiveimg(result.data);
      });
  }, []);

  const [humanfactorimg, setHumanfactorimg] = useState([]);
  useEffect(() => {
    fetch(
      "http://10.2.14.173/api/uploadfiles?populate=fileupload&filters[filename][$eq]=public_humanfactors"
    )
      .then((res) => res.json())
      .then((result) => {
        setHumanfactorimg(result.data);
      });
  }, []);

  const [neurodevimg, setNeurodevimg] = useState([]);
  useEffect(() => {
    fetch(
      "http://10.2.14.173/api/uploadfiles?populate=fileupload&filters[filename][$eq]=public_neurodevelopment"
    )
      .then((res) => res.json())
      .then((result) => {
        setNeurodevimg(result.data);
      });
  }, []);

  const [neuropharmaimg, setNeuropharmaimg] = useState([]);
  useEffect(() => {
    fetch(
      "http://10.2.14.173/api/uploadfiles?populate=fileupload&filters[filename][$eq]=public_neuropharmacology"
    )
      .then((res) => res.json())
      .then((result) => {
        setNeuropharmaimg(result.data);
      });
  }, []);

  // Hovering icon
  const [iconStyle, setIconStyle] = useState({
    color: "#AE023E",
  });

  const handleMouseEnter = () => {
    setIconStyle({
      ...iconStyle,
      marginLeft: "12px",
      transition: "margin-left 0.3s ease-out",
    });
  };

  const handleMouseLeave = () => {
    setIconStyle({ color: "#AE023E" });
  };

  const [iconStyle3, setIconStyles] = useState(
    Array(tags.length).fill({
      // color: "#AE023E",
    })
  );

  const handleMouseEnter3 = (index) => {
    setIconStyles((prevState) => {
      const newState = [...prevState];
      newState[index] = {
        ...newState[index],
        marginLeft: "12px",
        transition: "margin-left 0.3s ease-out",
      };
      return newState;
    });
  };

  const handleMouseLeave3 = (index) => {
    setIconStyles((prevState) => {
      const newState = [...prevState];
      newState[index] = {
        transition: "0.3s ease-out",
        // color: "#AE023E",
      };
      return newState;
    });
  };

  // Add a state variable to track the open/closed state for each tag
  const [openStates, setOpenStates] = useState(Array(tags.length).fill(false));

  // Function to toggle the accordion for a specific tag
  const toggleAccordion = (index) => {
    setOpenStates((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const colors = ["#AE023E", "#009B62", "#008CB0", "#FEB832"];

  // Col Hovering
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter2 = () => {
    setIsHovered(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered(false);
  };

  const colStyle = {
    marginLeft: isHovered ? "12px" : "0px",
    transition: "margin-right 0.3s ease-out",
  };

  const getImage = (index) => {
    switch (index) {
      case 0:
        return (
          <>
            {/* <img src={clusterimg1} className="image-fluid" id="cluster-img" /> */}
            {cognitiveimg.map((member) => (
              <img
                className="image-fluid"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
                src={
                  "http://10.2.14.173" +
                  member.attributes.fileupload.data[0]?.attributes.url
                }
              />
            ))}
          </>
        );
      case 1:
        return (
          <>
            {humanfactorimg.map((member) => (
              <img
                className="image-fluid"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
                src={
                  "http://10.2.14.173" +
                  member.attributes.fileupload.data[0]?.attributes.url
                }
              />
            ))}
          </>
        );
      case 2:
        return (
          <>
            {neurodevimg.map((member) => (
              <img
                className="image-fluid"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
                src={
                  "http://10.2.14.173" +
                  member.attributes.fileupload.data[0]?.attributes.url
                }
              />
            ))}
          </>
        );
      case 3:
        return (
          <>
            {neuropharmaimg.map((member) => (
              <img
                className="image-fluid"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
                src={
                  "http://10.2.14.173" +
                  member.attributes.fileupload.data[0]?.attributes.url
                }
              />
            ))}
          </>
        );
      default:
        return null;
    }
  };

  const { selectedLanguage, handleLanguageSwitch } =
    useContext(LanguageContext);

  return (
    <>
      {contents.map((contentGroup, index) => (
        <React.Fragment key={index}>
          {contentGroup.data.map((contentData, innerIndex) => (
            <MDBContainer
              className="fluid p-0 px-0"
              id="cluster-container"
              key={innerIndex}
            >
              <MDBRow className="p-0" id="cluster-gutter">
                <MDBCol
                  md="8"
                  className={`d-flex p-0 xs:order-2 sm:order-1 ${
                    index === 1 || index === 3 ? "order-md-2" : ""
                  }`}
                >
                  {getImage(index)}
                </MDBCol>

                <MDBCol
                  md="4"
                  order="1"
                  className={"d-flex p-6"}
                  style={{ backgroundColor: colors[index] }}
                >
                  <div className="d-flex flex-column w-100">
                    <p
                      className="font-normal text-white xs:text-xl md:text-2xl"
                      style={{ fontFamily: "MyFont" }}
                    >
                      {selectedLanguage === "en"
                        ? contentData.attributes?.header_en || "Not found"
                        : contentData.attributes?.header_th || "ภาษาไทย"}
                    </p>
                    <div className="d-flex justify-content-between mt-auto">
                      <p
                        className="font-medium text-white mt-5 mb-0 xs:text-base md:text-lg cursor-pointer"
                        onClick={() => toggleAccordion(index)}
                        style={{
                          cursor: "pointer",
                          transition: "transform 0.3s",
                        }}
                      >
                        {openStates[index] ? (
                          <span style={{ float: "right" }}>
                            {" "}
                            {selectedLanguage === "en"
                              ? "Hide Info"
                              : "ซ่อนข้อมูล"}{" "}
                            <ExpandLessIcon />
                          </span>
                        ) : (
                          <span style={{ float: "right" }}>
                            <ExpandMoreIcon />
                            {selectedLanguage === "en"
                              ? "More Info"
                              : "ข้อมูลเพิ่มเติม"}
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                </MDBCol>
              </MDBRow>

              {openStates[index] && (
                <MDBRow
                  className="p-5"
                  style={{
                    ...colStyle,
                    opacity: openStates[index] ? 1 : 0,
                    transition: "opacity 0.3s",
                  }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <MDBCol>
                    <p className="text-black px-20">
                      {selectedLanguage === "en"
                        ? contentData.attributes?.content_en || "Not found"
                        : contentData.attributes?.content_th || "ภาษาไทย"}
                    </p>
                    <Link
                      to={`/Tags-Detail/${contentData.id}`}
                      style={{ color: colors[index], cursor: "pointer" }}
                      onClick={() => {
                        window.scrollTo(0, 0);
                        window.location.replace(
                          `/Tags-Detail/${contentData.id}`
                        );
                      }}
                    >
                      <p
                        className="fw-bold px-20 mt-5 text-end xs:text-base md:text-lg"
                        style={iconStyle3[index]}
                        onMouseEnter={() => handleMouseEnter3(index)}
                        onMouseLeave={() => handleMouseLeave3(index)}
                      >
                        {selectedLanguage === "en"
                          ? "More Detail"
                          : "รายละเอียดเพิ่มเติม"}
                        <EastIcon style={iconStyle3[index]}></EastIcon>
                      </p>
                    </Link>
                  </MDBCol>
                </MDBRow>
              )}
            </MDBContainer>
          ))}
        </React.Fragment>
      ))}
    </>
  );
}

function ImageMobile2() {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    fetch("http://10.2.14.173/api/tags")
      .then((res) => res.json())
      .then((result) => {
        setTags(result.data.slice(0, 4));
      });
  }, []);

  const [contents, setContents] = useState([]);

  const topics = [
    "cognitive_clinical_and_computational_neuroscience",
    "educational_neuroscience_and_neurodevelopment",
    "human_factors_research_and_decision_neuroscience",
    "pharmaceutical_biology_and_neuropharmacology",
  ];

  useEffect(() => {
    const fetchContents = async () => {
      const promises = topics.map((topic) =>
        fetch(
          `http://10.2.14.173/api/contents?populate=*&filters[topic][$eq]=${topic}`
        ).then((res) => res.json())
      );
      const results = await Promise.all(promises);
      setContents(results);
    };

    fetchContents();
  }, []);

  const [cognitiveimg, setCognitiveimg] = useState([]);
  useEffect(() => {
    fetch(
      "http://10.2.14.173/api/uploadfiles?populate=fileupload&filters[filename][$eq]=public_cognitive"
    )
      .then((res) => res.json())
      .then((result) => {
        setCognitiveimg(result.data);
      });
  }, []);

  const [humanfactorimg, setHumanfactorimg] = useState([]);
  useEffect(() => {
    fetch(
      "http://10.2.14.173/api/uploadfiles?populate=fileupload&filters[filename][$eq]=public_humanfactors"
    )
      .then((res) => res.json())
      .then((result) => {
        setHumanfactorimg(result.data);
      });
  }, []);

  const [neurodevimg, setNeurodevimg] = useState([]);
  useEffect(() => {
    fetch(
      "http://10.2.14.173/api/uploadfiles?populate=fileupload&filters[filename][$eq]=public_neurodevelopment"
    )
      .then((res) => res.json())
      .then((result) => {
        setNeurodevimg(result.data);
      });
  }, []);

  const [neuropharmaimg, setNeuropharmaimg] = useState([]);
  useEffect(() => {
    fetch(
      "http://10.2.14.173/api/uploadfiles?populate=fileupload&filters[filename][$eq]=public_neuropharmacology"
    )
      .then((res) => res.json())
      .then((result) => {
        setNeuropharmaimg(result.data);
      });
  }, []);

  // Hovering icon
  const [iconStyle, setIconStyle] = useState({
    color: "#AE023E",
  });

  const handleMouseEnter = () => {
    setIconStyle({
      ...iconStyle,
      marginLeft: "12px",
      transition: "margin-left 0.3s ease-out",
    });
  };

  const handleMouseLeave = () => {
    setIconStyle({ color: "#AE023E" });
  };

  const [iconStyle3, setIconStyles] = useState(
    Array(tags.length).fill({
      // color: "#AE023E",
    })
  );

  const handleMouseEnter3 = (index) => {
    setIconStyles((prevState) => {
      const newState = [...prevState];
      newState[index] = {
        ...newState[index],
        marginLeft: "12px",
        transition: "margin-left 0.3s ease-out",
      };
      return newState;
    });
  };

  const handleMouseLeave3 = (index) => {
    setIconStyles((prevState) => {
      const newState = [...prevState];
      newState[index] = {
        transition: "0.3s ease-out",
        // color: "#AE023E",
      };
      return newState;
    });
  };

  // Add a state variable to track the open/closed state for each tag
  const [openStates, setOpenStates] = useState(Array(tags.length).fill(false));

  // Function to toggle the accordion for a specific tag
  const toggleAccordion = (index) => {
    setOpenStates((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const colors = ["#AE023E", "#009B62", "#008CB0", "#FEB832"];

  // Col Hovering
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter2 = () => {
    setIsHovered(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered(false);
  };

  const colStyle = {
    marginLeft: isHovered ? "12px" : "0px",
    transition: "margin-right 0.3s ease-out",
  };

  const getImage = (index) => {
    switch (index) {
      case 0:
        return (
          <>
            {/* <img src={clusterimg1} className="image-fluid" id="cluster-img" /> */}
            {cognitiveimg.map((member) => (
              <img
                className="image-fluid"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
                src={
                  "http://10.2.14.173" +
                  member.attributes.fileupload.data[0]?.attributes.url
                }
              />
            ))}
          </>
        );
      case 1:
        return (
          <>
            {humanfactorimg.map((member) => (
              <img
                className="image-fluid"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
                src={
                  "http://10.2.14.173" +
                  member.attributes.fileupload.data[0]?.attributes.url
                }
              />
            ))}
          </>
        );
      case 2:
        return (
          <>
            {neurodevimg.map((member) => (
              <img
                className="image-fluid"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
                src={
                  "http://10.2.14.173" +
                  member.attributes.fileupload.data[0]?.attributes.url
                }
              />
            ))}
          </>
        );
      case 3:
        return (
          <>
            {neuropharmaimg.map((member) => (
              <img
                className="image-fluid"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
                src={
                  "http://10.2.14.173" +
                  member.attributes.fileupload.data[0]?.attributes.url
                }
              />
            ))}
          </>
        );
      default:
        return null;
    }
  };

  const { selectedLanguage, handleLanguageSwitch } =
    useContext(LanguageContext);

  return (
    <>
      {contents.map((contentGroup, index) => (
        <React.Fragment key={index}>
          {contentGroup.data.map((contentData, innerIndex) => (
            <MDBContainer
              className="fluid p-0 px-0"
              id="cluster-container"
              key={innerIndex}
            >
              <MDBRow className="p-0" id="cluster-gutter">
                {getImage(index)}
                <MDBCol
                  md="8"
                  className={`d-flex p-0 xs:order-2 sm:order-1 ${
                    index === 1 || index === 3 ? "order-md-2" : ""
                  }`}
                ></MDBCol>

                <MDBCol
                  md="4"
                  order="1"
                  className={"d-flex p-5"}
                  style={{ backgroundColor: colors[index] }}
                >
                  <div className="d-flex flex-column w-100">
                    <p
                      className="font-normal text-white xs:text-lg md:text-2xl"
                      style={{ fontFamily: "MyFont" }}
                    >
                      {selectedLanguage === "en"
                        ? contentData.attributes?.header_en || "Not found"
                        : contentData.attributes?.header_th || "ภาษาไทย"}
                    </p>
                    <div className="d-flex justify-content-between mt-auto">
                      <p
                        className="font-medium text-white mt-5 mb-0 xs:text-base md:text-lg cursor-pointer"
                        onClick={() => toggleAccordion(index)}
                        style={{
                          cursor: "pointer",
                          transition: "transform 0.3s",
                        }}
                      >
                        {openStates[index] ? (
                          <span style={{ float: "right" }}>
                            {" "}
                            Hide Info <ExpandLessIcon />
                          </span>
                        ) : (
                          <span style={{ float: "right" }}>
                            <ExpandMoreIcon /> More Info
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                </MDBCol>
              </MDBRow>

              {openStates[index] && (
                <MDBRow
                  className="p-5"
                  style={{
                    ...colStyle,
                    opacity: openStates[index] ? 1 : 0,
                    transition: "opacity 0.3s",
                  }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <MDBCol>
                    <p className="text-black ">
                      {contentData.attributes?.content_en || "-"}
                    </p>
                    <Link
                      to={`/Tags-Detail/${contentData.id}`}
                      style={{ color: colors[index], cursor: "pointer" }}
                      onClick={() => {
                        window.scrollTo(0, 0);
                        window.location.replace(
                          `/Tags-Detail/${contentData.id}`
                        );
                      }}
                    >
                      <p
                        className="fw-bold mt-5 text-start xs:text-base md:text-lg"
                        style={iconStyle3[index]}
                        sx={{
                          colors: "#AE023E",
                          "&:hover": {
                            marginLeft: "12px",
                            transition: "margin-left 0.3s ease-out",
                          },
                        }}
                        onMouseEnter={() => handleMouseEnter3(index)}
                        onMouseLeave={() => handleMouseLeave3(index)}
                      >
                        More Detail
                        <EastIcon
                          className="ms-4"
                          style={iconStyle3[index]}
                        ></EastIcon>
                      </p>
                    </Link>
                  </MDBCol>
                </MDBRow>
              )}
            </MDBContainer>
          ))}
        </React.Fragment>
      ))}
    </>
  );
}

function ImageMobile() {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    fetch("http://10.2.14.173/api/tags")
      .then((res) => res.json())
      .then((result) => {
        setTags(result.data.slice(0, 4));
      });
  }, []);

  const [cognitiveimg, setCognitiveimg] = useState([]);
  useEffect(() => {
    fetch(
      "http://10.2.14.173/api/uploadfiles?populate=fileupload&filters[filename][$eq]=public_cognitive"
    )
      .then((res) => res.json())
      .then((result) => {
        setCognitiveimg(result.data);
      });
  }, []);

  const [humanfactorimg, setHumanfactorimg] = useState([]);
  useEffect(() => {
    fetch(
      "http://10.2.14.173/api/uploadfiles?populate=fileupload&filters[filename][$eq]=public_humanfactors"
    )
      .then((res) => res.json())
      .then((result) => {
        setHumanfactorimg(result.data);
      });
  }, []);

  const [neurodevimg, setNeurodevimg] = useState([]);
  useEffect(() => {
    fetch(
      "http://10.2.14.173/api/uploadfiles?populate=fileupload&filters[filename][$eq]=public_neurodevelopment"
    )
      .then((res) => res.json())
      .then((result) => {
        setNeurodevimg(result.data);
      });
  }, []);

  const [neuropharmaimg, setNeuropharmaimg] = useState([]);
  useEffect(() => {
    fetch(
      "http://10.2.14.173/api/uploadfiles?populate=fileupload&filters[filename][$eq]=public_neuropharmacology"
    )
      .then((res) => res.json())
      .then((result) => {
        setNeuropharmaimg(result.data);
      });
  }, []);

  // Hovering icon
  const [iconStyle, setIconStyle] = useState({
    color: "#AE023E",
  });

  const handleMouseEnter = () => {
    setIconStyle({
      ...iconStyle,
      marginLeft: "12px",
      transition: "margin-left 0.3s ease-out",
    });
  };

  const handleMouseLeave = () => {
    setIconStyle({ color: "#AE023E" });
  };

  // Add a state variable to track the open/closed state for each tag
  const [openStates, setOpenStates] = useState(Array(tags.length).fill(false));

  // Function to toggle the accordion for a specific tag
  const toggleAccordion = (index) => {
    setOpenStates((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const colors = ["#AE023E", "#009B62", "#008CB0", "#FEB832"];

  // Col Hovering
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter2 = () => {
    setIsHovered(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered(false);
  };

  const colStyle = {
    marginLeft: isHovered ? "12px" : "0px",
    transition: "margin-right 0.3s ease-out",
  };

  const getImage = (index) => {
    switch (index) {
      case 0:
        return (
          <>
            {/* <img src={clusterimg1} className="image-fluid" id="cluster-img" /> */}
            {cognitiveimg.map((member) => (
              <img
                className="image-fluid"
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                }}
                src={
                  "http://10.2.14.173" +
                  member.attributes.fileupload.data[0]?.attributes.url
                }
              />
            ))}
          </>
        );
      case 1:
        return (
          <>
            {humanfactorimg.map((member) => (
              <img
                className="image-fluid"
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                }}
                src={
                  "http://10.2.14.173" +
                  member.attributes.fileupload.data[0]?.attributes.url
                }
              />
            ))}
          </>
        );
      case 2:
        return (
          <>
            {neurodevimg.map((member) => (
              <img
                className="image-fluid"
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                }}
                src={
                  "http://10.2.14.173" +
                  member.attributes.fileupload.data[0]?.attributes.url
                }
              />
            ))}
          </>
        );
      case 3:
        return (
          <>
            {neuropharmaimg.map((member) => (
              <img
                className="image-fluid"
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                }}
                src={
                  "http://10.2.14.173" +
                  member.attributes.fileupload.data[0]?.attributes.url
                }
              />
            ))}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {tags.map((tagsData, index) => (
        <MDBContainer
          className="fluid p-0 px-0"
          id="cluster-container"
          key={index}
        >
          <MDBRow className="p-0" id="cluster-gutter">
            {getImage(index)}
            <MDBCol
              md="8"
              className={`d-flex p-0 xs:order-2 sm:order-1 ${
                index === 1 || index === 3 ? "order-md-2" : ""
              }`}
            ></MDBCol>

            <MDBCol
              md="4"
              order="1"
              className={"d-flex p-6"}
              style={{ backgroundColor: colors[index] }}
            >
              <div className="d-flex flex-column w-100">
                <p
                  className="font-normal text-white xs:text-xl md:text-3xl"
                  style={{ fontFamily: "MyFont" }}
                >
                  {tagsData.attributes?.name_en || "-"}
                </p>
                <div className="d-flex justify-content-between mt-auto">
                  <p
                    className="font-medium text-white mt-5 mb-0 xs:text-base md:text-xl cursor-pointer"
                    onClick={() => toggleAccordion(index)} // Pass the index to toggleAccordion
                    style={{
                      cursor: "pointer",
                      transition: "transform 0.3s", // Add transition for transform property
                    }}
                  >
                    {openStates[index] ? (
                      <span style={{ float: "right" }}>
                        {" "}
                        Hide Info <ExpandLessIcon />
                      </span> // Move the arrow to the right
                    ) : (
                      <span style={{ float: "right" }}>
                        <ExpandMoreIcon /> More Info
                      </span> // Move the arrow to the right
                    )}
                  </p>
                </div>
              </div>
            </MDBCol>
          </MDBRow>
          {openStates[index] && (
            <MDBRow
              className="p-5"
              style={{
                ...colStyle,
                opacity: openStates[index] ? 1 : 0, // Set opacity based on open/closed state
                transition: "opacity 0.3s", // Add transition for opacity property
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <MDBCol>
                <p className="text-black">
                  {tagsData.attributes?.description_en || "-"}
                </p>
                <Link
                  to={`/Tags-Detail/${tagsData.id}`}
                  style={{ color: "#AE023E", cursor: "pointer" }}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    window.location.replace(`/Tags-Detail/${tagsData.id}`);
                  }}
                >
                  <p
                    className="fw-bold mt-5 text-start xs:text-base md:text-lg"
                    sx={{
                      colors: "#AE023E",
                      "&:hover": {
                        marginLeft: "12px",
                        transition: "margin-left 0.3s ease-out",
                      },
                    }}
                  >
                    More Detail
                    <EastIcon className="ms-4" style={iconStyle}></EastIcon>
                  </p>
                </Link>
              </MDBCol>
            </MDBRow>
          )}
        </MDBContainer>
      ))}
    </>
  );
}

export default function ClusterAccordion() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      {/* Mobile  */}
      {isMobile && <ImageMobile2 />}

      {/* Desktop  */}
      {!isMobile && <ImageDesktop />}
    </>
  );
}
