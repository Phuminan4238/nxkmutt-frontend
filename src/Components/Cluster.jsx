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
    fetch("https://10.35.29.186/api/tags")
      .then((res) => res.json())
      .then((result) => {
        setTags(result.data.slice(0, 4));
      });
  }, []);

  const [cognitiveimg, setCognitiveimg] = useState([]);
  useEffect(() => {
    fetch(
      "https://10.35.29.186/api/uploadfiles?populate=fileupload&filters[filename][$eq]=public_cognitive"
    )
      .then((res) => res.json())
      .then((result) => {
        setCognitiveimg(result.data);
      });
  }, []);

  const [humanfactorimg, setHumanfactorimg] = useState([]);
  useEffect(() => {
    fetch(
      "https://10.35.29.186/api/uploadfiles?populate=fileupload&filters[filename][$eq]=public_humanfactors"
    )
      .then((res) => res.json())
      .then((result) => {
        setHumanfactorimg(result.data);
      });
  }, []);

  const [neurodevimg, setNeurodevimg] = useState([]);
  useEffect(() => {
    fetch(
      "https://10.35.29.186/api/uploadfiles?populate=fileupload&filters[filename][$eq]=public_neurodevelopment"
    )
      .then((res) => res.json())
      .then((result) => {
        setNeurodevimg(result.data);
      });
  }, []);

  const [neuropharmaimg, setNeuropharmaimg] = useState([]);
  useEffect(() => {
    fetch(
      "https://10.35.29.186/api/uploadfiles?populate=fileupload&filters[filename][$eq]=public_neuropharmacology"
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
                  "https://10.35.29.186" +
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
                  "https://10.35.29.186" +
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
                  "https://10.35.29.186" +
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
                  "https://10.35.29.186" +
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
      {tags.map((tagsData, index) => (
        <MDBContainer className="fluid p-0" id="cluster-container" key={index}>
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
                  {/* {tagsData.attributes?.name_en || "-"} */}
                  {selectedLanguage === "en"
                    ? tagsData.attributes?.name_en || "Not found"
                    : tagsData.attributes?.name_th2 || "ภาษาไทย"}
                </p>
                <div className="d-flex justify-content-between mt-auto">
                  <p
                    className="font-medium text-white mt-5 mb-0 xs:text-base md:text-lg cursor-pointer"
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
                <p className="text-black px-20">
                  {tagsData.attributes?.description_en || "-"}
                </p>
                <Link
                  to={`/Tags-Detail/${tagsData.id}`}
                  style={{ color: colors[index], cursor: "pointer" }}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    window.location.replace(`/Tags-Detail/${tagsData.id}`);
                  }}
                >
                  {/* <p
                    className="fw-bold px-20 mt-5 text-end xs:text-base md:text-lg"
                    sx={{
                      color: colors[index], // Map the color based on the index
                      "&:hover": {
                        marginLeft: "12px",
                        transition: "margin-left 0.3s ease-out",
                      },
                    }}
                  >
                    More Detail
                    <EastIcon style={iconStyle}></EastIcon>
                  </p> */}
                  <p
                    className="fw-bold px-20 mt-5 text-end xs:text-base md:text-lg"
                    style={iconStyle3[index]} // Use iconStyles[index] for the specific index
                    onMouseEnter={() => handleMouseEnter3(index)} // Pass the index to handleMouseEnter2
                    onMouseLeave={() => handleMouseLeave3(index)} // Pass the index to handleMouseLeave2
                  >
                    More Detail
                    <EastIcon style={iconStyle3[index]}></EastIcon>
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

function ImageMobile() {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    fetch("https://10.35.29.186/api/tags")
      .then((res) => res.json())
      .then((result) => {
        setTags(result.data.slice(0, 4));
      });
  }, []);

  const [cognitiveimg, setCognitiveimg] = useState([]);
  useEffect(() => {
    fetch(
      "https://10.35.29.186/api/uploadfiles?populate=fileupload&filters[filename][$eq]=public_cognitive"
    )
      .then((res) => res.json())
      .then((result) => {
        setCognitiveimg(result.data);
      });
  }, []);

  const [humanfactorimg, setHumanfactorimg] = useState([]);
  useEffect(() => {
    fetch(
      "https://10.35.29.186/api/uploadfiles?populate=fileupload&filters[filename][$eq]=public_humanfactors"
    )
      .then((res) => res.json())
      .then((result) => {
        setHumanfactorimg(result.data);
      });
  }, []);

  const [neurodevimg, setNeurodevimg] = useState([]);
  useEffect(() => {
    fetch(
      "https://10.35.29.186/api/uploadfiles?populate=fileupload&filters[filename][$eq]=public_neurodevelopment"
    )
      .then((res) => res.json())
      .then((result) => {
        setNeurodevimg(result.data);
      });
  }, []);

  const [neuropharmaimg, setNeuropharmaimg] = useState([]);
  useEffect(() => {
    fetch(
      "https://10.35.29.186/api/uploadfiles?populate=fileupload&filters[filename][$eq]=public_neuropharmacology"
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
                  "https://10.35.29.186" +
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
                  "https://10.35.29.186" +
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
                  "https://10.35.29.186" +
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
                  "https://10.35.29.186" +
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
        <MDBContainer className="fluid p-0" id="cluster-container" key={index}>
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
                    <EastIcon style={iconStyle}></EastIcon>
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

export default function Clusterimage() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      {/* Mobile  */}
      {isMobile && <ImageMobile />}

      {/* Desktop  */}
      {!isMobile && <ImageDesktop />}
    </>
  );
}

// function Reuse() {
//   const [tags, setTags] = useState([]);
//   useEffect(() => {
//     fetch("https://10.35.29.186/api/tags")
//       .then((res) => res.json())
//       .then((result) => {
//         setTags(result.data.slice(0, 4));
//       });
//   }, []);

//   const [cognitiveimg, setCognitiveimg] = useState([]);
//   useEffect(() => {
//     fetch(
//       "https://10.35.29.186/api/uploadfiles?populate=fileupload&filters[filename][$eq]=public_cognitive"
//     )
//       .then((res) => res.json())
//       .then((result) => {
//         setCognitiveimg(result.data);
//       });
//   }, []);

//   const [humanfactorimg, setHumanfactorimg] = useState([]);
//   useEffect(() => {
//     fetch(
//       "https://10.35.29.186/api/uploadfiles?populate=fileupload&filters[filename][$eq]=public_humanfactors"
//     )
//       .then((res) => res.json())
//       .then((result) => {
//         setHumanfactorimg(result.data);
//       });
//   }, []);

//   const [neurodevimg, setNeurodevimg] = useState([]);
//   useEffect(() => {
//     fetch(
//       "https://10.35.29.186/api/uploadfiles?populate=fileupload&filters[filename][$eq]=public_neurodevelopment"
//     )
//       .then((res) => res.json())
//       .then((result) => {
//         setNeurodevimg(result.data);
//       });
//   }, []);

//   const [neuropharmaimg, setNeuropharmaimg] = useState([]);
//   useEffect(() => {
//     fetch(
//       "https://10.35.29.186/api/uploadfiles?populate=fileupload&filters[filename][$eq]=public_neuropharmacology"
//     )
//       .then((res) => res.json())
//       .then((result) => {
//         setNeuropharmaimg(result.data);
//       });
//   }, []);

//   const colors = ["#AE023E", "#00D26D", "#119ED1", "#FEB832"];

//   const getImage = (index) => {
//     switch (index) {
//       case 0:
//         return <img src={clusterimg1} class="image-fluid" id="cluster-img" />;
//       case 1:
//         return <img src={clusterimg2} class="image-fluid" id="cluster-img" />;
//       case 2:
//         return <img src={clusterimg3} class="image-fluid" id="cluster-img" />;
//       case 3:
//         return <img src={clusterimg4} class="image-fluid" id="cluster-img" />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <>
//       {tags.map((tagsData, index) => (
//         <MDBContainer className="fluid p-0" id="cluster-container">
//           <MDBRow className="p-0 ">
//             <MDBCol
//               md="8"
//               className={`d-flex p-0 xs:order-2 sm:order-1 ${
//                 index === 1 || index === 3 ? "order-md-2" : ""
//               }`}
//             >
//               {getImage(index)}
//             </MDBCol>

//             <MDBCol
//               md="4"
//               order="1"
//               className={`d-flex p-5`}
//               style={{ backgroundColor: colors[index] }}
//               key={index}
//             >
//               <div className="d-flex flex-column w-100">
//                 <p className="fw-bold text-white xs:text-xl md:text-3xl">
//                   {tagsData.attributes?.name_en || "-"}
//                 </p>
//                 <div className="d-flex justify-content-between mt-auto">
//                   <Link to={`/Tags Detail/${tagsData.id}`} target="_blank">
//                     <p className="fw-normal text-white mt-5 xs:text-base md:text-lg">
//                       More Info
//                     </p>
//                   </Link>
//                 </div>
//               </div>
//             </MDBCol>
//           </MDBRow>
//         </MDBContainer>
//       ))}
//     </>
//   );
// }

// export default function Clusterimage() {
//   return (
//     <>
//       <Reuse></Reuse>
//     </>
//   );
// }
