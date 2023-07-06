import React from "react";
/* Routes */
import { Link } from "react-router-dom";
import axios from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useState, useEffect, setIsLoaded } from "react";
/* Images */
import vr2 from "../Images/vr-2.png";
import ArticleIcon from "@mui/icons-material/Article";
import styled from "styled-components";
import { blue, green, red } from "@mui/material/colors";

function Menu() {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    fetch("https://10.35.29.186/api/tags")
      .then((res) => res.json())
      .then((result) => {
        setTags(result.data.slice(0, 4));
      });
  }, []);

  // Define state variables for the selected tag and publications data
  const [selectedTag, setSelectedTag] = useState(null);
  const [publications, setPublications] = useState([]);
  const [allPublications, setAllPublications] = useState([]);
  const [activeTag, setActiveTag] = useState(-1);
  const [allTagsSelected, setAllTagsSelected] = useState(true);

  console.log("this is" + allTagsSelected);

  const handleCognitiveClick = () => {
    setSelectedTag("cognitive");
    setActiveTag("cognitive");
    setAllTagsSelected(false);
  };

  const handleNeuroscienceClick = () => {
    setSelectedTag("neuroscience");
    setActiveTag("neuroscience");
    setAllTagsSelected(false);
  };

  const handleEducationalClick = () => {
    setSelectedTag("educational");
    setActiveTag("educational");
    setAllTagsSelected(false);
  };

  const handlePharmaceuticalClick = () => {
    setSelectedTag("pharmaceutical");
    setActiveTag("pharmaceutical");
    setAllTagsSelected(false);
  };

  useEffect(() => {
    let endpoint = "";
    if (allTagsSelected) {
      endpoint = "https://10.35.29.186/api/publications";
    } else {
      switch (activeTag) {
        case 0:
          endpoint =
            "https://10.35.29.186/api/publications?filters[theme][key][$eq]=cognitive_clinical_and_computational_neuroscience";
          break;
        case 1:
          endpoint =
            "https://10.35.29.186/api/publications?populate=*&filters[theme][key][$eq]=human_factors_research_and_decision_neuroscience";
          break;
        case 2:
          endpoint =
            "https://10.35.29.186/api/publications?populate=*&filters[theme][key][$eq]=educational_neuroscience_and_neurodevelopment";
          break;
        case 3:
          endpoint =
            "https://10.35.29.186/api/publications?populate=*&filters[theme][key][$eq]=pharmaceutical_biology_and_neuropharmacology";
          break;
        default:
          endpoint = `https://10.35.29.186/api/publications?filters[theme][key][$eq]=${selectedTag}`;
          break;
      }
    }

    fetch(endpoint)
      .then((res) => res.json())
      .then((result) => {
        const filteredPublications = result.data.filter(
          (publication) =>
            new Date(publication.attributes.published_date) < new Date()
        );
        setPublications(filteredPublications.slice(0, 4));
        setAllPublications(filteredPublications);
      });
  }, [allTagsSelected, selectedTag]);

  const colors = ["#AE023E", "#009B62", "#119ED1", "#FEB832"];
  const tagColors = {
    cognitive: colors[0],
    neuroscience: colors[1],
    educational: colors[2],
    pharmaceutical: colors[3],
  };

  const tagColor = selectedTag !== null ? tagColors[selectedTag] : "#CCCCCC";

  const getTagColor = (tag) => tagColors[tag] || tagColors[selectedTag];

  const StyledArticleIcon = styled(ArticleIcon)`
    color: ${({ tag }) => getTagColor(tag)};
  `;

  // Define the function to determine the card style
  const getCardStyle = (
    allTagsSelected,
    selectedTag,
    tagColor,
    tagColors,
    index
  ) => {
    const backgroundColor =
      allTagsSelected || selectedTag === null
        ? tagColor
        : tagColors[selectedTag];

    const borderColor =
      allTagsSelected || selectedTag === null
        ? tagColor
        : tagColors[selectedTag];

    const textColor =
      allTagsSelected || selectedTag === index ? "#FFF" : "gray";

    return {
      backgroundColor,
      borderColor,
      color: textColor,
    };
  };

  const moredetailStyle = {
    fontSize: "smaller",
  };

  const moredetail = <span style={moredetailStyle}>"more detail"</span>;

  // Group publications by year
  const publicationsByYear = Object.entries(
    allPublications.reduce((acc, publication) => {
      const year = publication.attributes.published_date.substring(0, 4);
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(publication);
      return acc;
    }, {})
  )
    .sort(([yearA], [yearB]) => yearB - yearA)
    .map(([year, publications]) => (
      <MDBRow key={year}>
        <MDBCol size="1" className="xs:pe-4 sm:pe-0">
          <p className="fw-bold text-uppercase text-black xs:text-xl sm:text-2xl">
            {year}
          </p>
        </MDBCol>
        <MDBCol
          style={{
            borderBottom: "1px solid black",
            marginBottom: "1.4rem",
          }}
          className="xs:mx-4 sm:mx-0 xs:px-4 sm:px-0"
        ></MDBCol>
        {publications.map((publication) => (
          <>
            <Link
              to={publication.attributes.url}
              target="_blank"
              style={{ color: "black" }}
            >
              <MDBCol md="11" key={publication.id} className="pb-2">
                <p style={{ display: "inline-block" }}>
                  <StyledArticleIcon
                    tag={
                      allTagsSelected ? publication.attributes.tag : selectedTag
                    }
                    style={{ marginRight: "5px" }}
                  />
                  {publication.attributes.description_en}
                </p>
                {/* <p style={{ display: "inline-block", color: "red" }}>
                  TAG TEST
                  {publication.attributes.createdAt}
                </p> */}
              </MDBCol>
            </Link>
          </>
        ))}
      </MDBRow>
    ));

  return (
    <>
      <div
        className="d-flex justify-content-between pt-0 pb-4 xs:px-2 md:px-0"
        id="tools-flex"
      >
        <MDBContainer className="xs:max-w-full sm:max-w-7xl px-0">
          <MDBRow className="mb-4">
            {tags.map((tag, index) => (
              <MDBCol md="3" key={tag.id} className="py-4 col-sm-8">
                <MDBCardBody
                  className="p-3 break-all"
                  style={{
                    backgroundColor: `${
                      allTagsSelected
                        ? "#fff"
                        : activeTag === index
                        ? colors[index]
                        : "white"
                    }`,
                    border: `2px solid ${
                      allTagsSelected
                        ? colors[index]
                        : activeTag === index
                        ? colors[index]
                        : "#ccc"
                    }`,
                    borderRadius: "0.25rem",
                    color: `${
                      allTagsSelected
                        ? colors[index]
                        : activeTag === index
                        ? "#fff"
                        : "gray"
                    }`,
                  }}
                  onClick={() => {
                    if (activeTag === index) {
                      setActiveTag(null);
                      setAllTagsSelected(true);
                    } else {
                      switch (index) {
                        case 0:
                          handleCognitiveClick();
                          break;
                        case 1:
                          handleNeuroscienceClick();
                          break;
                        case 2:
                          handleEducationalClick();
                          break;
                        case 3:
                          handlePharmaceuticalClick();
                          break;
                        default:
                          return;
                      }
                      setActiveTag(index);
                      setAllTagsSelected(false);
                    }
                  }}
                >
                  {/* Tags  */}
                  <p
                    className="fw-bold text-start mb-0"
                    style={{
                      fontFamily: "MyFont",
                      color:
                        allTagsSelected || selectedTag === null
                          ? colors[index]
                          : activeTag === index
                          ? "#FFF"
                          : "gray",
                    }}
                  >
                    {tag.attributes.name_en}
                  </p>
                </MDBCardBody>
              </MDBCol>
            ))}
          </MDBRow>

          {publicationsByYear}
        </MDBContainer>
      </div>
    </>
  );
}

export default function Publicationimage() {
  return (
    <>
      <Menu />
    </>
  );
}

// // Second
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardImage,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
// } from "mdb-react-ui-kit";
// import ArticleIcon from "@mui/icons-material/Article";
// import styled from "styled-components";
// import { blue, green, red } from "@mui/material/colors";

// function Menu() {
//   const [tags, setTags] = useState([]);

//   useEffect(() => {
//     fetch("https://10.35.29.186/api/tags")
//       .then((res) => res.json())
//       .then((result) => {
//         setTags(result.data.slice(0, 4));
//       });
//   }, []);

//   const [selectedTag, setSelectedTag] = useState("cognitive");
//   const [publications, setPublications] = useState([]);
//   const [allPublications, setAllPublications] = useState([]);
//   const [activeTag, setActiveTag] = useState(0);

//   const tagColors = {
//     cognitive: "#AE023E",
//     humanfactor: "#009B62",
//     neuroscience: "#119ED1",
//     pharmaceutical: "#FEB832",
//   };

//   useEffect(() => {
//     const fetchPublications = async () => {
//       let endpoint = "";

//       if (activeTag === -1) {
//         endpoint = "https://10.35.29.186/api/publications";
//       } else {
//         switch (activeTag) {
//           case 0:
//             endpoint =
//               "https://10.35.29.186/api/publications?filters[theme][key][$eq]=cognitive_clinical_and_computational_neuroscience";
//             break;
//           case 1:
//             endpoint =
//               "https://10.35.29.186/api/publications?populate=*&filters[theme][key][$eq]=human_factors_research_and_decision_neuroscience";
//             break;
//           case 2:
//             endpoint =
//               "https://10.35.29.186/api/publications?populate=*&filters[theme][key][$eq]=educational_neuroscience_and_neurodevelopment";
//             break;
//           case 3:
//             endpoint =
//               "https://10.35.29.186/api/publications?populate=*&filters[theme][key][$eq]=pharmaceutical_biology_and_neuropharmacology";
//             break;
//           default:
//             endpoint = `https://10.35.29.186/api/publications?filters[theme][key][$eq]=${selectedTag}`;
//             break;
//         }
//       }

//       const res = await fetch(endpoint);
//       const result = await res.json();
//       const filteredPublications = result.data.filter(
//         (publication) =>
//           new Date(publication.attributes.published_date) < new Date()
//       );
//       setPublications(filteredPublications.slice(0, 4));
//       setAllPublications(filteredPublications);
//     };

//     fetchPublications();
//   }, [selectedTag, activeTag]);

//   const colors = ["#AE023E", "#009B62", "#119ED1", "#FEB832"];

//   const handleTagClick = (tag, index) => {
//     setSelectedTag(tag);
//     setActiveTag(index);
//   };

//   const StyledArticleIcon = styled(ArticleIcon)`
//     color: ${({ tag }) => tagColors[tag] || colors[0]};
//   `;

//   // Define the function to determine the card style
//   const getCardStyle = (
//     allTagsSelected,
//     selectedTag,
//     tagColor,
//     tagColors,
//     index
//   ) => {
//     const backgroundColor =
//       allTagsSelected || selectedTag === null
//         ? tagColor
//         : tagColors[selectedTag];

//     const borderColor =
//       allTagsSelected || selectedTag === null
//         ? tagColor
//         : tagColors[selectedTag];

//     const textColor =
//       allTagsSelected || selectedTag === index ? "#FFF" : "gray";

//     return {
//       backgroundColor,
//       borderColor,
//       color: textColor,
//     };
//   };

//   const moredetailStyle = {
//     fontSize: "smaller",
//   };

//   const moredetail = <span style={moredetailStyle}>"more detail"</span>;

//   // Group publications by year
//   const publicationsByYear = Object.entries(
//     allPublications.reduce((acc, publication) => {
//       const year = publication.attributes.published_date.substring(0, 4);
//       if (!acc[year]) {
//         acc[year] = [];
//       }
//       acc[year].push(publication);
//       return acc;
//     }, {})
//   )
//     .sort(([yearA], [yearB]) => yearB - yearA)
//     .map(([year, publications]) => (
//       <MDBRow key={year}>
//         <MDBCol size="1">
//           <p className="text-2xl fw-bold text-uppercase text-black">{year}</p>
//         </MDBCol>
//         <MDBCol
//           style={{
//             borderBottom: "1px solid black",
//             marginBottom: "1.4rem",
//           }}
//         ></MDBCol>
//         {publications.map((publication) => (
//           <Link
//             to={publication.attributes.url}
//             target="_blank"
//             style={{ color: "black" }}
//             key={publication.id}
//           >
//             <MDBCol md="11" className="pb-2">
//               <p style={{ display: "inline-block" }}>
//                 <StyledArticleIcon
//                   color={tagColors[selectedTag]}
//                   style={{ marginRight: "5px" }}
//                 />
//                 {publication.attributes.description_en}
//               </p>
//             </MDBCol>
//           </Link>
//         ))}
//       </MDBRow>
//     ));

//   return (
//     <div
//       className="d-flex justify-content-between pt-0 pb-4 px-0"
//       id="tools-flex"
//     >
//       <MDBContainer className="xs:max-w-full sm:max-w-7xl">
//         <MDBRow>
//           {tags.map((tag, index) => (
//             <MDBCol md="3" key={tag.id} className="pb-4 col-sm-8">
//               <MDBCardBody
//                 className="p-3 break-all"
//                 style={{
//                   backgroundColor:
//                     activeTag === -1 || activeTag === index
//                       ? colors[index]
//                       : "#ccc",
//                   border: `2px solid ${
//                     activeTag === -1 || activeTag === index
//                       ? colors[index]
//                       : "#ccc"
//                   }`,
//                   borderRadius: "0.25rem",
//                   color:
//                     activeTag === -1 || activeTag === index ? "#FFF" : "gray",
//                 }}
//                 onClick={() => handleTagClick(tag.attributes.name_en, index)}
//               >
//                 <p
//                   className="fw-bold text-start mb-0"
//                   style={{
//                     fontFamily: "MyFont",
//                     color:
//                       activeTag === -1 || activeTag === index ? "#FFF" : "gray",
//                   }}
//                 >
//                   {tag.attributes.name_en}
//                 </p>
//               </MDBCardBody>
//             </MDBCol>
//           ))}
//         </MDBRow>
//         {publicationsByYear}
//       </MDBContainer>
//     </div>
//   );
// }
// export default function PublicationImage() {
//   return <Menu />;
// }

// Third

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardImage,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
// } from "mdb-react-ui-kit";
// import ArticleIcon from "@mui/icons-material/Article";
// import styled from "styled-components";
// import { blue, green, red } from "@mui/material/colors";

// function Menu() {
//   const [tags, setTags] = useState([]);

//   useEffect(() => {
//     fetch("https://10.35.29.186/api/tags")
//       .then((res) => res.json())
//       .then((result) => {
//         setTags(result.data.slice(0, 4));
//       });
//   }, []);

//   const [selectedTag, setSelectedTag] = useState("cognitive");
//   const [publications, setPublications] = useState([]);
//   const [allPublications, setAllPublications] = useState([]);
//   const [activeTag, setActiveTag] = useState(0);

//   const tagColors = {
//     cognitive: "#AE023E",
//     humanfactor: "#009B62",
//     neuroscience: "#119ED1",
//     pharmaceutical: "#FEB832",
//   };

//   useEffect(() => {
//     const fetchPublications = async () => {
//       let endpoint = "";

//       if (activeTag === -1) {
//         endpoint = "https://10.35.29.186/api/publications";
//       } else {
//         switch (activeTag) {
//           case 0:
//             endpoint =
//               "https://10.35.29.186/api/publications?filters[theme][key][$eq]=cognitive_clinical_and_computational_neuroscience";
//             break;
//           case 1:
//             endpoint =
//               "https://10.35.29.186/api/publications?populate=*&filters[theme][key][$eq]=human_factors_research_and_decision_neuroscience";
//             break;
//           case 2:
//             endpoint =
//               "https://10.35.29.186/api/publications?populate=*&filters[theme][key][$eq]=educational_neuroscience_and_neurodevelopment";
//             break;
//           case 3:
//             endpoint =
//               "https://10.35.29.186/api/publications?populate=*&filters[theme][key][$eq]=pharmaceutical_biology_and_neuropharmacology";
//             break;
//           default:
//             endpoint = `https://10.35.29.186/api/publications?filters[theme][key][$eq]=${selectedTag}`;
//             break;
//         }
//       }

//       const res = await fetch(endpoint);
//       const result = await res.json();
//       const filteredPublications = result.data.filter(
//         (publication) =>
//           new Date(publication.attributes.published_date) < new Date()
//       );
//       setPublications(filteredPublications.slice(0, 4));
//       setAllPublications(filteredPublications);
//     };

//     fetchPublications();
//   }, [selectedTag, activeTag]);

//   const colors = ["#AE023E", "#009B62", "#119ED1", "#FEB832"];

//   const tagColor = selectedTag !== null ? tagColors[selectedTag] : "#CCCCCC";

//   const getTagColor = (tag) => {
//     const tagColors = {
//       cognitive: "#AE023E",
//       humanfactor: "#009B62",
//       neuroscience: "#119ED1",
//       pharmaceutical: "#FEB832",
//     };

//     return tagColors[tag] || "#CCCCCC";
//   };

//   const StyledArticleIcon = styled(ArticleIcon)`
//     color: ${({ tag }) => getTagColor(tag)};
//   `;

//   const handleTagClick = (tag, index) => {
//     setSelectedTag(tag);
//     setActiveTag(index);
//   };

//   const publicationsByYear = Object.entries(
//     allPublications.reduce((acc, publication) => {
//       const year = publication.attributes.published_date.substring(0, 4);
//       if (!acc[year]) {
//         acc[year] = [];
//       }
//       acc[year].push(publication);
//       return acc;
//     }, {})
//   )
//     .sort(([yearA], [yearB]) => yearB - yearA)
//     .map(([year, publications]) => (
//       <MDBRow key={year}>
//         <MDBCol size="1">
//           <p className="text-2xl fw-bold text-uppercase text-black">{year}</p>
//         </MDBCol>
//         <MDBCol
//           style={{
//             borderBottom: "1px solid black",
//             marginBottom: "1.4rem",
//           }}
//         ></MDBCol>
//         {publications.map((publication) => (
//           <Link
//             to={publication.attributes.url}
//             target="_blank"
//             style={{ color: "black" }}
//             key={publication.id}
//           >
//             <MDBCol md="11" className="pb-2">
//               <p style={{ display: "inline-block" }}>
//                 <StyledArticleIcon
//                   tag={selectedTag}
//                   style={{ marginRight: "5px" }}
//                 />

//                 {publication.attributes.description_en}
//               </p>
//             </MDBCol>
//           </Link>
//         ))}
//       </MDBRow>
//     ));

//   return (
//     <div
//       className="d-flex justify-content-between pt-0 pb-4 px-0"
//       id="tools-flex"
//     >
//       <MDBContainer className="xs:max-w-full sm:max-w-7xl">
//         <MDBRow>
//           {tags.map((tag, index) => (
//             <MDBCol md="3" key={tag.id} className="pb-4 col-sm-8">
//               <MDBCardBody
//                 className="p-3 break-all"
//                 style={{
//                   backgroundColor:
//                     activeTag === -1 || activeTag === index
//                       ? colors[index]
//                       : "#ccc",
//                   border: `2px solid ${
//                     activeTag === -1 || activeTag === index
//                       ? colors[index]
//                       : "#ccc"
//                   }`,
//                   borderRadius: "0.25rem",
//                   color:
//                     activeTag === -1 || activeTag === index ? "#FFF" : "gray",
//                 }}
//                 onClick={() => handleTagClick(tag.attributes.name_en, index)}
//               >
//                 <p
//                   className="fw-bold text-start mb-0"
//                   style={{
//                     fontFamily: "MyFont",
//                     color:
//                       activeTag === -1 || activeTag === index ? "#FFF" : "gray",
//                   }}
//                 >
//                   {tag.attributes.name_en}
//                 </p>
//               </MDBCardBody>
//             </MDBCol>
//           ))}
//         </MDBRow>
//         {publicationsByYear}
//       </MDBContainer>
//     </div>
//   );
// }

// export default function PublicationImage() {
//   return <Menu />;
// }
