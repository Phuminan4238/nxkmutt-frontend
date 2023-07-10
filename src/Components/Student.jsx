import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import teamimg5 from "../Images/team-5.png";
import { useMediaQuery } from "react-responsive";

const TeamMemberImage = ({ src, index, total, memberId }) => {
  const isFirstImage = index === 0;
  const isLastImage = index === total - 1;

  const columnClass = `col-md-1 p-1 bg-white ${isFirstImage ? "ps-0" : ""} ${
    isLastImage ? "pe-0" : ""
  }`;

  return (
    <MDBCol md="1" className={columnClass}>
      <Link
        to={`/Student-Detail/${memberId}`}
        onClick={() => {
          window.scrollTo(0, 0);
          window.location.replace(`/Student-Detail/${memberId}`);
        }}
        className="image-link"
      >
        <div
          className="image-container"
          style={{ width: "-webkit-fill-available" }}
        >
          <img
            src={src}
            style={{ width: "inherit", height: "100px", objectFit: "cover" }}
            alt="Team Member"
          />
          <div className="overlay"></div>
        </div>
      </Link>
    </MDBCol>
  );
};

// Desktop
const ImageDesktop = () => {
  const [uploadfiles, setUploadfiles] = useState([]);
  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://10.35.29.186/api/members?populate=uploadfiles.fileupload&filters[usertype][$eq]=research_assistance"
        );
        if (isMounted) {
          setUploadfiles(response.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (uploadfiles.length === 0) {
      fetchData();
    }

    return () => {
      isMounted = false;
    };
  }, [uploadfiles]);

  return (
    <MDBContainer fluid className="p-0" id="cluster-container">
      <MDBRow className="p-0 w-100" id="student-row" style={{ margin: 0 }}>
        {uploadfiles.map((member, index) => (
          <TeamMemberImage
            key={index}
            src={`https://10.35.29.186${member.attributes.uploadfiles.data[0]?.attributes.fileupload.data[0]?.attributes.url}`}
            index={index}
            total={uploadfiles.length}
            memberId={member.id} // Pass the member ID as a prop
          />
        ))}
      </MDBRow>
    </MDBContainer>
  );
};

const TeamMemberImage2 = ({ src, index, total, memberId }) => {
  const isFirstImage = index === 0;
  const isLastImage = index === total - 1;

  const columnClass = `col-md-1 p-1 bg-white ${isFirstImage ? "pl-0" : ""} ${
    isLastImage ? "pr-0" : ""
  }`;

  return (
    <MDBCol md="auto" className={columnClass}>
      <Link
        to={`/Student-Detail/${memberId}`}
        onClick={() => {
          window.scrollTo(0, 0);
          window.location.replace(`/Student-Detail/${memberId}`);
        }}
        className="image-link"
      >
        <div
          className="image-container"
          style={{ width: "120px", height: "120px" }}
        >
          <img
            src={src}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="Team Member"
          />
          <div className="overlay"></div>
        </div>
      </Link>
    </MDBCol>
  );
};

// Mobile
const ImageMobile = () => {
  const [uploadfiles, setUploadfiles] = useState([]);
  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://10.35.29.186/api/members?populate=uploadfiles.fileupload&filters[usertype][$eq]=research_assistance"
        );
        if (isMounted) {
          setUploadfiles(response.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (uploadfiles.length === 0) {
      fetchData();
    }

    return () => {
      isMounted = false;
    };
  }, [uploadfiles]);

  return (
    <MDBContainer fluid className="p-0 d-flex flex-wrap" id="cluster-container">
      {uploadfiles.map((member, index) => (
        <TeamMemberImage2
          key={index}
          src={`https://10.35.29.186${member.attributes.uploadfiles.data[0]?.attributes.fileupload.data[0]?.attributes.url}`}
          index={index}
          total={uploadfiles.length}
          memberId={member.id} // Pass the member ID as a prop
        />
      ))}
    </MDBContainer>
  );
};

export default function Student() {
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

// import React from "react";
// import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
// import { useState, useEffect, setIsLoaded } from "react";
// import axios from "axios";
// import teamimg5 from "../Images/team-5.png";

// const TeamMemberImage = ({ src, index, total }) => {
//   const isFirstImage = index === 0;
//   const isLastImage = index === total - 1;

//   const columnClass = `col-md-1 p-1 bg-white ${isFirstImage ? "pl-0" : ""} ${
//     isLastImage ? "pr-0" : ""
//   }`;

//   const [uploadfiles, setUploadfiles] = useState([]);

//   useEffect(() => {
//     let isMounted = true;

//     const instance = axios.create({
//       baseURL: "https://10.35.29.186/api/",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//     });

//     async function fetchData() {
//       try {
//         const response = await instance.get(
//           "members?populate=uploadfiles.fileupload&filters[usertype][$eq]=research_assistance"
//         );
//         if (isMounted) {
//           setUploadfiles(response.data.data);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     }

//     if (uploadfiles.length === 0) {
//       fetchData();
//     }

//     return () => {
//       isMounted = false;
//     };
//   }, [uploadfiles]);

//   return (
//     <MDBCol md="1" className={columnClass}>
//       <div className="image-container">
//         <img src={src} className="w-100" alt="Team Member" />
//         <div className="overlay"></div>
//       </div>
//     </MDBCol>
//   );
// };

// const Team = () => {
//   const teamImages = Array(12).fill(teamimg5); // Assuming `teamimg5` is the image source

//   return (
//     <MDBContainer fluid className="p-0" id="cluster-container">
//       <MDBRow className="p-0 w-100" id="student-row" style={{ margin: 0 }}>
//         {teamImages.map((src, index) => (
//           <TeamMemberImage
//             key={index}
//             src={src}
//             index={index}
//             total={teamImages.length}
//           />
//         ))}
//       </MDBRow>
//     </MDBContainer>
//   );
// };

// export default function Student() {
//   return (
//     <>
//       <Team />
//     </>
//   );
// }
