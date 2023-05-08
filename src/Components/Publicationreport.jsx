import React from "react";
import { useState, useEffect, setIsLoaded } from "react";
import { Link } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";

import ArticleIcon from "@mui/icons-material/Article";

function Report1() {
  const [uploadfiles, setUploadfiles] = useState([]);

  useEffect(() => {
    fetch("https://10.35.29.186/api/publications?populate=id")
      .then((res) => res.json())
      .then((result) => {
        setUploadfiles(result.data);
      });
  }, []); // empty dependency array added

  const [publications, setPublications] = useState([]);

  useEffect(() => {
    fetch("https://10.35.29.186/api/publications?populate=id")
      .then((res) => res.json())
      .then((result) => {
        setPublications(result.data);
      });
  }, []);

  return (
    <MDBContainer>
      <MDBRow>
        {publications.map((publication) => (
          <MDBCol md="3" key={publication.id} className="pb-4 col-sm-8">
            <Link to={`/Publications-Detail/${publication.id}`} target="_blank">
              <MDBCard className="shadow-0">
                <MDBCardBody
                  className="rounded-0"

                  // style={{ backgroundColor: "#AE023E" }}
                >
                  <MDBCardTitle className="m-0">
                    <p className="fw-bold text-start mb-0 xs:text-xl md:text-lg">
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
      </MDBRow>
      /* row */
      <MDBRow className="pt-5 py-4">
        <MDBCol size="1">
          <h4 className="fw-bold text-uppercase text-black">
            {" "}
            2022<br></br>
          </h4>
        </MDBCol>
        <MDBCol
          style={{ borderBottom: "1px solid black", marginBottom: "1.4rem" }}
        ></MDBCol>
      </MDBRow>
      {uploadfiles.map((member) => (
        <MDBRow>
          <MDBCol size="1">
            <ArticleIcon color="primary" />
          </MDBCol>

          <MDBCol md="11" key={member.id} className="pb-4">
            <p> {member.attributes.description}</p>
          </MDBCol>
        </MDBRow>
      ))}
      {/* <MDBRow>
        <MDBCol size="1">
          <ArticleIcon color="danger" />
        </MDBCol>
        <MDBCol>
          <p>
            Ruengchaijatuporn et al., An Explainable Self-Attention Deep Neural
            Network for Detecting Mild Cognitive Impairment Using Multi-input
            Digital Drawing Tasks. Alzheimer's Research & Therapy (in press)
          </p>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol size="1">
          <ArticleIcon color="success" />
        </MDBCol>
        <MDBCol>
          <p>
            Ruengchaijatuporn et al., An Explainable Self-Attention Deep Neural
            Network for Detecting Mild Cognitive Impairment Using Multi-input
            Digital Drawing Tasks. Alzheimer's Research & Therapy (in press)
          </p>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol size="1">
          <ArticleIcon color="warning" />
        </MDBCol>
        <MDBCol>
          <p>
            Ruengchaijatuporn et al., An Explainable Self-Attention Deep Neural
            Network for Detecting Mild Cognitive Impairment Using Multi-input
            Digital Drawing Tasks. Alzheimer's Research & Therapy (in press)
          </p>
        </MDBCol>
      </MDBRow> */}
    </MDBContainer>
  );
}

function Report2() {
  const [uploadfiles, setUploadfiles] = useState([]);

  useEffect(() => {
    fetch("https://10.35.29.186/api/publications?populate=id")
      .then((res) => res.json())
      .then((result) => {
        setUploadfiles(result.data);
      });
  }, []); // empty dependency array added
  return (
    <MDBContainer>
      <MDBRow className="pt-5 py-4">
        <h4 className="fw-bold text-uppercase text-black">
          {" "}
          2021<br></br>
        </h4>
      </MDBRow>
      {uploadfiles.map((member) => (
        <MDBRow>
          <MDBCol size="1">
            <ArticleIcon color="primary" />
          </MDBCol>
          <MDBCol md="11" key={member.id} className="pb-4">
            <p> {member.attributes.description}</p>
          </MDBCol>
        </MDBRow>
      ))}
    </MDBContainer>
  );
}

// function Report3() {
//   return (
//     <MDBContainer>
//       <MDBRow className="pt-5 py-4">
//         <h4 className="fw-bold text-uppercase text-black">
//           {" "}
//           2020<br></br>
//         </h4>
//       </MDBRow>
//       <MDBRow>
//         <MDBCol size="1">
//           <ArticleIcon color="primary" />
//         </MDBCol>
//         <MDBCol>
//           <p>
//             Ruengchaijatuporn et al., An Explainable Self-Attention Deep Neural
//             Network for Detecting Mild Cognitive Impairment Using Multi-input
//             Digital Drawing Tasks. Alzheimer's Research & Therapy (in press)
//           </p>
//         </MDBCol>
//       </MDBRow>
//       <MDBRow>
//         <MDBCol size="1">
//           <ArticleIcon color="danger" />
//         </MDBCol>
//         <MDBCol>
//           <p>
//             Ruengchaijatuporn et al., An Explainable Self-Attention Deep Neural
//             Network for Detecting Mild Cognitive Impairment Using Multi-input
//             Digital Drawing Tasks. Alzheimer's Research & Therapy (in press)
//           </p>
//         </MDBCol>
//       </MDBRow>
//       <MDBRow>
//         <MDBCol size="1">
//           <ArticleIcon color="success" />
//         </MDBCol>
//         <MDBCol>
//           <p>
//             Ruengchaijatuporn et al., An Explainable Self-Attention Deep Neural
//             Network for Detecting Mild Cognitive Impairment Using Multi-input
//             Digital Drawing Tasks. Alzheimer's Research & Therapy (in press)
//           </p>
//         </MDBCol>
//       </MDBRow>
//       <MDBRow>
//         <MDBCol size="1">
//           <ArticleIcon color="warning" />
//         </MDBCol>
//         <MDBCol>
//           <p>
//             Ruengchaijatuporn et al., An Explainable Self-Attention Deep Neural
//             Network for Detecting Mild Cognitive Impairment Using Multi-input
//             Digital Drawing Tasks. Alzheimer's Research & Therapy (in press)
//           </p>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// }

export default function Publicationreport() {
  return (
    <>
      <Report1 />
      <Report2 />
      {/* <Report3 /> */}
    </>
  );
}
