import React, { useState, useEffect } from "react";
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
import ArticleIcon from "@mui/icons-material/Article";
import styled from "styled-components";
import { blue, green, red } from "@mui/material/colors";

function Menu() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetch("https://10.2.14.173/api/tags")
      .then((res) => res.json())
      .then((result) => {
        setTags(result.data.slice(0, 4));
      });
  }, []);

  const [selectedTag, setSelectedTag] = useState("cognitive");
  const [publications, setPublications] = useState([]);
  const [allPublications, setAllPublications] = useState([]);
  const [activeTag, setActiveTag] = useState(0);

  const tagColors = {
    cognitive: "#AE023E",
    humanfactor: "#009B62",
    neuroscience: "#119ED1",
    pharmaceutical: "#FEB832",
  };

  useEffect(() => {
    const fetchPublications = async () => {
      let endpoint = "";

      if (activeTag === -1) {
        endpoint = "https://10.2.14.173/api/publications";
      } else {
        switch (activeTag) {
          case 0:
            endpoint =
              "https://10.2.14.173/api/publications?filters[theme][key][$eq]=cognitive_clinical_and_computational_neuroscience";
            break;
          case 1:
            endpoint =
              "https://10.2.14.173/api/publications?populate=*&filters[theme][key][$eq]=human_factors_research_and_decision_neuroscience";
            break;
          case 2:
            endpoint =
              "https://10.2.14.173/api/publications?populate=*&filters[theme][key][$eq]=educational_neuroscience_and_neurodevelopment";
            break;
          case 3:
            endpoint =
              "https://10.2.14.173/api/publications?populate=*&filters[theme][key][$eq]=pharmaceutical_biology_and_neuropharmacology";
            break;
          default:
            endpoint = `https://10.2.14.173/api/publications?filters[theme][key][$eq]=${selectedTag}`;
            break;
        }
      }
      const res = await fetch(endpoint);
      const result = await res.json();
      const filteredPublications = result.data.filter(
        (publication) =>
          new Date(publication.attributes.published_date) < new Date()
      );
      setPublications(filteredPublications.slice(0, 4));
      setAllPublications(filteredPublications);
    };
    fetchPublications();
  }, [selectedTag, activeTag]);

  const colors = ["#AE023E", "#009B62", "#119ED1", "#FEB832"];

  const handleTagClick = (tag, index) => {
    setSelectedTag(tag);
    setActiveTag(index);
  };

  const StyledArticleIcon = styled(ArticleIcon)`
    color: ${({ tag }) => tagColors[tag] || colors[0]};
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
          <Link
            to={publication.attributes.url}
            target="_blank"
            style={{ color: "black" }}
            key={publication.id}
          >
            <MDBCol md="11" className="pb-2">
              <p style={{ display: "inline-block" }}>
                <StyledArticleIcon
                  color={tagColors[selectedTag]}
                  style={{ marginRight: "5px" }}
                />
                {publication.attributes.description_en}
              </p>
            </MDBCol>
          </Link>
        ))}
      </MDBRow>
    ));

  return (
    <div
      className="d-flex justify-content-between pt-0 pb-4 px-0"
      id="tools-flex"
    >
      <MDBContainer className="xs:max-w-full sm:max-w-7xl">
        <MDBRow>
          {tags.map((tag, index) => (
            <MDBCol md="3" key={tag.id} className="pb-4 col-sm-8">
              <MDBCardBody
                className="p-3 break-all"
                style={{
                  backgroundColor:
                    activeTag === -1 || activeTag === index
                      ? colors[index]
                      : "#ccc",
                  border: `2px solid ${
                    activeTag === -1 || activeTag === index
                      ? colors[index]
                      : "#ccc"
                  }`,
                  borderRadius: "0.25rem",
                  color:
                    activeTag === -1 || activeTag === index ? "#FFF" : "gray",
                }}
                onClick={() => handleTagClick(tag.attributes.name_en, index)}
              >
                <p
                  className="fw-bold text-start mb-0"
                  style={{
                    fontFamily: "MyFont",
                    color:
                      activeTag === -1 || activeTag === index ? "#FFF" : "gray",
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
  );
}

export default function PublicationImage() {
  return <Menu />;
}
