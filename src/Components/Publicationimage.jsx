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
  // const [uploadfiles, setUploadfiles] = useState([]);

  // useEffect(() => {
  //   let isMounted = true;

  //   const instance = axios.create({
  //     baseURL: "https://10.35.29.186/api/",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   });

  //   async function fetchData() {
  //     try {
  //       const response = await instance.get(
  //         "members?populate=uploadfiles.fileupload"
  //       );
  //       if (isMounted) {
  //         setUploadfiles(response.data.data);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //   if (uploadfiles.length === 0) {
  //     fetchData();
  //   }

  //   return () => {
  //     isMounted = false;
  //   };
  // }, [uploadfiles]);

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

  console.log(allTagsSelected);

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
    // let endpoint = "";

    // if (allTagsSelected) {
    //   endpoint = "https://10.35.29.186/api/publications";
    // } else {
    //   switch (selectedTag) {
    //     case "cognitive":
    //       endpoint =
    //         "https://10.35.29.186/api/publications?filters[theme][key][$eq]=pharmaceutical_biology_and_neuropharmacology";
    //       break;
    //     case "neuroscience":
    //       endpoint =
    //         "https://10.35.29.186/api/publications?populate=*&filters[theme][key][$eq]=human_factors_research_and_decision_neuroscience";
    //       break;
    //     case "educational":
    //       endpoint =
    //         "https://10.35.29.186/api/publications?populate=*&filters[theme][key][$eq]=educational_neuroscience_and_neurodevelopment";
    //       break;
    //     case "pharmaceutical":
    //       endpoint =
    //         "https://10.35.29.186/api/publications?populate=*&filters[theme][key][$eq]=pharmaceutical_biology_and_neuropharmacology";
    //       break;
    //     default:
    //       return;
    //   }
    // }
    // Update the endpoint based on the state of allTagsSelected, selectedTag and activeTag
    let endpoint = "";
    if (allTagsSelected) {
      endpoint = "https://10.35.29.186/api/publications";
    } else {
      switch (activeTag) {
        case 0:
          endpoint =
            "https://10.35.29.186/api/publications?filters[theme][key][$eq]=pharmaceutical_biology_and_neuropharmacology";
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

  const colors = ["#AE023E", "#00D26D", "#119ED1", "#FEB832"];
  const tagColors = {
    cognitive: colors[0],
    neuroscience: colors[1],
    educational: colors[2],
    pharmaceutical: colors[3],
  };

  const tagColor = selectedTag !== null ? tagColors[selectedTag] : "#CCCCCC";

  const getTagColor = (tag) => tagColors[tag] || "#CCCCCC";

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
        <MDBCol size="1">
          <p className="text-2xl fw-bold text-uppercase text-black">{year}</p>
        </MDBCol>
        <MDBCol
          style={{
            borderBottom: "1px solid black",
            marginBottom: "1.4rem",
          }}
        ></MDBCol>
        {publications.map((publication) => (
          <>
            <Link
              to={publication.attributes.url}
              target="_blank"
              style={{ color: "black" }}
            >
              <MDBCol md="11" key={publication.id} className="pb-4">
                <p>
                  <StyledArticleIcon
                    tag={
                      allTagsSelected ? publication.attributes.tag : selectedTag
                    }
                  />
                  {publication.attributes.description_en}
                </p>
              </MDBCol>
            </Link>
          </>
        ))}
      </MDBRow>
    ));

  return (
    <>
      <div className="d-flex justify-content-between py-4" id="tools-flex">
        <MDBContainer className="xs:max-w-full sm:max-w-7xl">
          <MDBRow>
            {tags.map((tag, index) => (
              <MDBCol md="3" key={tag.id} className="pb-4 col-sm-8">
                <MDBCardBody
                  style={{
                    backgroundColor: `${
                      allTagsSelected
                        ? "#fff"
                        : activeTag === index
                        ? colors[index]
                        : "#ccc"
                    }`,
                    border: `2px solid ${
                      allTagsSelected
                        ? colors[index]
                        : activeTag === index
                        ? colors[index]
                        : "#ccc"
                    }`,
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
                  <p
                    className="fw-bold text-start mb-0"
                    style={{
                      color:
                        allTagsSelected || selectedTag === null
                          ? colors[index]
                          : activeTag === index
                          ? "#FFF"
                          : "gray",
                    }}
                    // allTagsSelected || selectedTag === null
                    // ? tagColor
                    // : tagColors[selectedTag];
                  >
                    {tag.attributes.name_en}
                  </p>
                </MDBCardBody>
              </MDBCol>
            ))}
          </MDBRow>

          {/* <MDBRow>
            {publications.map((publication) => (
              <MDBCol md="3" key={publication.id} className="pb-4 col-sm-8">
                <Link
                  to={`/Publications-Detail/${publication.id}`}
                  target="_blank"
                >
                  <MDBCard className="shadow-0">
                    <MDBCardBody
                      className="rounded-0"
                      style={{
                        backgroundColor:
                          allTagsSelected || selectedTag === null
                            ? tagColor
                            : tagColors[selectedTag],
                        borderColor:
                          allTagsSelected || selectedTag === null
                            ? tagColor
                            : tagColors[selectedTag],
                      }}
                    >
                      <MDBCardTitle className="m-0">
                        <p
                          className="fw-bold text-start mb-0 xs:text-xl md:text-lg"
                          style={{ color: "#fff" }}
                        >
                          {publication.attributes.title
                            ? publication.attributes.title.slice(0, 60) +
                              (publication.attributes.title.length > 50
                                ? "..."
                                : "")
                            : "not found"}
                        </p>
                      </MDBCardTitle>
                    </MDBCardBody>
                  </MDBCard>{" "}
                </Link>
              </MDBCol>
            ))}
          </MDBRow> */}

          <MDBRow>
            {publications.map((publication, index) => (
              <MDBCol md="3" key={publication.id} className="pb-4 col-sm-8">
                {publication.attributes.url ? (
                  <Link
                    to={
                      publication.attributes.url
                        ? publication.attributes.url
                        : "/not-found"
                    }
                    target="_blank"
                  >
                    <MDBCard className="shadow-0">
                      <MDBCardBody
                        className="rounded-0"
                        style={{
                          backgroundColor: allTagsSelected
                            ? colors[index]
                            : tagColors[selectedTag],
                        }}
                      >
                        <MDBCardTitle className="m-0">
                          <p
                            className="fw-bold text-start mb-0 xs:text-xl md:text-lg"
                            style={{ color: "#fff" }}
                          >
                            {publication.attributes.title_en
                              ? publication.attributes.title_en.slice(0, 60) +
                                (publication.attributes.title_en.length > 50
                                  ? "..."
                                  : "")
                              : "not found"}
                          </p>
                        </MDBCardTitle>
                      </MDBCardBody>
                    </MDBCard>
                  </Link>
                ) : (
                  <p>Sorry, there is no url for this publication</p>
                )}
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

// "data": [
//   {
//       "id": 1,
//       "theme": {
//         "data": {
//             "id": 1,
//             "attributes": {
//                 "name_en": "Cognitive, Clinical & Computational Neuroscience",

//                 "key": "cognitive_clinical_and_computational_neuroscience"
//             }
//      }
// },
// "id": 2,
// "theme": {
//   "data": {
//       "id": 2,
//       "attributes": {
//           "name_th": "Educational Neuroscience & Neurodevelopment  ",

//           "key": "educational_neuroscience_and_neurodevelopment"
//       }
//   }
// },

//   }
// ]

// if key =  "key": "pharmaceutical_biology_and_neuropharmacology"
// the color is red

// if key = "key": "human_factors_research_and_decision_neuroscience"
// the color is green

// if key =  "key": "educational_neuroscience_and_neurodevelopment"
// the color is blue
