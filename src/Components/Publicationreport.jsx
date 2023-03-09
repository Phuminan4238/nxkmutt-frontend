import React from "react";
import { useState, useEffect, setIsLoaded } from "react";
import {
  MDBContainer,
  MDBCarousel,
  MDBCarouselItem,
  MDBRow,
  MDBCol,
  MDBRipple,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import vr1 from "../Images/vr-1.png";
import vr2 from "../Images/vr-2.png";
import teamimg1 from "../Images/team-1.png";
import teamimg2 from "../Images/team-2.png";
import teamimg3 from "../Images/team-3.png";
import teamimg4 from "../Images/team-4.png";
import ArticleIcon from "@mui/icons-material/Article";
import HomeIcon from "@mui/icons-material/Article";
import Article from "@mui/icons-material/Article";

function Report1() {
  const [uploadfiles, setUploadfiles] = useState([]);

  useEffect(() => {
    fetch("https://10.35.29.186/api/publications?populate=id")
      .then((res) => res.json())
      .then((result) => {
        setUploadfiles(result.data);
      });
  });
  return (
    <MDBContainer>
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
  });
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
