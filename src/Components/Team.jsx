import React from "react";
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
import teamimg1 from "../Images/team-1.png";
import teamimg2 from "../Images/team-2.png";
import teamimg3 from "../Images/team-3.png";
import teamimg4 from "../Images/team-4.png";
import { useState } from "react";

function Profile() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <MDBContainer className="fluid p-0 xs:hidden sm:contents">
      <MDBRow className="p-0 ">
        <MDBCol md="3" className="p-0">
          <img src={teamimg1} class="image-fluid" id="cluster-img" />
        </MDBCol>

        <MDBCol
          md="3"
          className="d-flex align-content-center flex-wrap p-5 bg-danger"
        >
          <div className="d-flex align-content-center flex-column w-100">
            <h3 className="text-white text-center ">Sirawaj Itthipuripat</h3>
            <h5 className="text-white fw-light text-center">
              Research director
            </h5>
          </div>
        </MDBCol>

        <MDBCol md="3" className="p-0">
          <img src={teamimg2} class="image-fluid" id="cluster-img" />
        </MDBCol>
        <MDBCol
          md="3"
          className="d-flex align-content-center flex-wrap p-5 bg-warning"
        >
          <div className="d-flex align-content-center flex-column w-100">
            <h3 className="text-white text-center ">Kanda Lertladaluck</h3>
            <h5 className="text-white fw-light text-center">Researcher</h5>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

function Profile2() {
  return (
    <MDBContainer
      className="fluid p-0 xs:contents sm:contents"
      id="cluster-container"
    >
      <MDBRow className="p-0 ">
        <MDBCol
          md="3"
          className="d-flex align-content-center flex-wrap p-5 bg-warning"
        >
          <div className="d-flex align-content-center flex-column w-100">
            <h3 className="text-white text-center">
              Thitaporn Chaisilprungraung
            </h3>
            <h5 className="text-white fw-light text-center">
              Research scientist
            </h5>
          </div>
        </MDBCol>
        <MDBCol md="3" className="p-0">
          <img src={teamimg3} class="image-fluid" id="cluster-img" />
        </MDBCol>
        <MDBCol
          md="3"
          className="d-flex align-content-center flex-wrap p-5 bg-info"
        >
          <div className="d-flex align-content-center flex-column w-100">
            <h3 className="text-white text-center ">Kejkaew Thanasuan</h3>
            <h5 className="text-white fw-light text-center">
              Assistant Professor
            </h5>
          </div>
        </MDBCol>
        <MDBCol md="3" className="p-0">
          <img src={teamimg4} class="image-fluid" id="cluster-img" />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default function Team() {
  return (
    <>
      <Profile />
      <Profile2 />
    </>
  );
}

// import React from "react";
// import { useState, useEffect, setIsLoaded } from "react";
// import {
//   MDBContainer,
//   MDBCarousel,
//   MDBCarouselItem,
//   MDBRow,
//   MDBCol,
//   MDBRipple,
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardImage,
//   MDBBtn,
// } from "mdb-react-ui-kit";
// import new1 from "../Images/new-1.png";
// import new2 from "../Images/new-2.png";
// import EastIcon from "@mui/icons-material/East";
// import teamimg1 from "../Images/team-1.png";
// import teamimg2 from "../Images/team-2.png";
// import teamimg3 from "../Images/team-3.png";
// import teamimg4 from "../Images/team-4.png";

// function Post() {
//   const [memberfiles, setMemberfiles] = useState([]);

//   useEffect(() => {
//     fetch("https://10.35.29.186/api/members?populate=uploadfiles.fileupload")
//       .then((res) => res.json())
//       .then((result) => {
//         setMemberfiles(result.data);
//       });
//   });

//   const colors = ["#B34C66", "#F2B032", "#F2B032", "#88BFD2"];
//   const Column = ({ color, children }) => {
//     return (
//       <MDBCol
//         className="p-5 align-content-center"
//         style={{ backgroundColor: color }}
//       >
//         {children}
//       </MDBCol>
//     );
//   };

//   return (
//     <MDBContainer
//       className="container-fluid py-4 grid grid-cols-2 "
//       id="cluster-container"
//     >
//       {memberfiles.map((member, index) => (
//         <MDBRow>
//           <MDBCol md="6" className="p-0">
//             <img
//               src={
//                 "https://10.35.29.186" +
//                 member.attributes.uploadfiles.data[0]?.attributes.fileupload
//                   .data[0]?.attributes.url
//               }
//               className="image-fluid"
//               id="cluster-img"
//               style={{
//                 height: "350px",
//                 // width: "100%",
//                 // height: "100%",
//                 objectFit: "cover",
//               }}
//             />
//           </MDBCol>
//           <MDBCol md="6" className="p-0  d-flex">
//             <Column
//               color={colors[index % colors.length]}
//               className="align-content-center p-5"
//             >
//               <div className="p-5 align-content-center">
//                 <h4 className="fw-bold text-white text-center xs:text-lg sm:text-2xl">
//                   {member.attributes.name_en}
//                   &nbsp;
//                   {member.attributes.surname_en}
//                 </h4>
//                 <p className="fw-bold text-white text-center xs:text-lg sm:text-2xl">
//                   {member.attributes.position_en}
//                 </p>
//               </div>
//             </Column>
//           </MDBCol>
//         </MDBRow>
//       ))}
//     </MDBContainer>
//   );
// }

// export default function Team() {
//   return (
//     <>
//       <Post />
//     </>
//   );
// }

// import React from "react";
// import { useState, useEffect, setIsLoaded } from "react";
// import {
//   MDBContainer,
//   MDBCarousel,
//   MDBCarouselItem,
//   MDBRow,
//   MDBCol,
//   MDBRipple,
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardImage,
//   MDBBtn,
// } from "mdb-react-ui-kit";
// import new1 from "../Images/new-1.png";
// import new2 from "../Images/new-2.png";
// import EastIcon from "@mui/icons-material/East";
// import teamimg1 from "../Images/team-1.png";
// import teamimg2 from "../Images/team-2.png";
// import teamimg3 from "../Images/team-3.png";
// import teamimg4 from "../Images/team-4.png";

// function Post() {
//   const [memberfiles, setMemberfiles] = useState([]);

//   useEffect(() => {
//     fetch("https://10.35.29.186/api/members?populate=uploadfiles.fileupload")
//       .then((res) => res.json())
//       .then((result) => {
//         setMemberfiles(result.data);
//       });
//   }, []);

//   const colors = ["#B34C66", "#F2B032", "#F2B032", "#88BFD2"];

//   const Column = ({ color, children }) => {
//     return (
//       <MDBCol
//         className="p-5 align-content-center"
//         style={{ backgroundColor: color }}
//       >
//         {children}
//       </MDBCol>
//     );
//   };

//   return (
//     <MDBContainer className="container-fluid py-4" id="cluster-container">
//       {memberfiles.map((member, index) => (
//         <MDBRow>
//           <MDBCol
//             md="6"
//             className={`p-0 ${
//               index % 4 === 0 || index % 4 === 1 ? "order-1" : "order-2"
//             }`}
//           >
//             <img
//               src={
//                 "https://10.35.29.186" +
//                 member.attributes.uploadfiles.data[0]?.attributes.fileupload
//                   .data[0]?.attributes.url
//               }
//               className="image-fluid"
//               id="cluster-img"
//               style={{
//                 height: "350px",
//                 objectFit: "cover",
//               }}
//             />
//           </MDBCol>
//           <MDBCol
//             md="6"
//             className={`p-0  d-flex ${
//               index % 4 === 0 || index % 4 === 3 ? "order-2" : "order-1"
//             }`}
//           >
//             <Column
//               color={colors[index % colors.length]}
//               className="align-content-center p-5"
//             >
//               <div className="p-5 align-content-center">
//                 <h4 className="fw-bold text-white text-center xs:text-lg sm:text-2xl">
//                   {member.attributes.name_en}
//                   &nbsp;
//                   {member.attributes.surname_en}
//                 </h4>
//                 <p className="fw-bold text-white text-center xs:text-lg sm:text-2xl">
//                   {member.attributes.position_en}
//                 </p>
//               </div>
//             </Column>
//           </MDBCol>
//         </MDBRow>
//       ))}
//     </MDBContainer>
//   );
// }

// export default function Team() {
//   return (
//     <>
//       <Post />
//     </>
//   );
// }

// import React, { useState, useEffect } from "react";
// import {
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardImage,
// } from "mdb-react-ui-kit";
// import EastIcon from "@mui/icons-material/East";
// import teamimg1 from "../Images/team-1.png";
// import teamimg2 from "../Images/team-2.png";
// import teamimg3 from "../Images/team-3.png";
// import teamimg4 from "../Images/team-4.png";

// function Post() {
//   const [memberfiles, setMemberfiles] = useState([]);

//   useEffect(() => {
//     fetch("https://10.35.29.186/api/members?populate=uploadfiles.fileupload")
//       .then((res) => res.json())
//       .then((result) => {
//         setMemberfiles(result.data);
//       });
//   }, []);

//   const colors = ["#B34C66", "#F2B032", "#F2B032", "#88BFD2"];

//   const Column = ({ color, children }) => {
//     return (
//       <MDBCol
//         className="p-5 align-content-center"
//         style={{ backgroundColor: color }}
//       >
//         {children}
//       </MDBCol>
//     );
//   };

//   const getColumns = (index) => {
//     const member = memberfiles[index];
//     const colorIndex = index % colors.length;
//     const isFirstColumn = index % 2 === 0;
//     const isFront = Math.floor(index / 2) % 2 === 0;
//     const imgSrc =
//       "https://10.35.29.186" +
//       member.attributes.uploadfiles.data[0]?.attributes.fileupload.data[0]
//         ?.attributes.url;
//     return (
//       <MDBRow key={member.id}>
//         <MDBCol
//           md="6"
//           className={`p-0 ${isFirstColumn !== isFront ? "order-1" : "order-2"}`}
//         >
//           <img
//             src={imgSrc}
//             className="image-fluid"
//             id="cluster-img"
//             style={{
//               height: "350px",
//               // objectFit: "cover",
//             }}
//             alt={`Member ${index + 1} Image`}
//           />
//         </MDBCol>
//         <MDBCol
//           md="6"
//           className={`p-0 d-flex ${
//             isFirstColumn === isFront ? "order-2" : "order-1"
//           }`}
//         >
//           <Column
//             color={colors[colorIndex]}
//             className="align-content-center p-5"
//           >
//             <div className="p-5 align-content-center">
//               <h4 className="fw-bold text-white text-center xs:text-lg sm:text-2xl">
//                 {member.attributes.name_en}&nbsp;
//                 {member.attributes.surname_en}
//               </h4>
//               <p className="fw-bold text-white text-center xs:text-lg sm:text-2xl">
//                 {member.attributes.position_en}
//               </p>
//             </div>
//           </Column>
//         </MDBCol>
//       </MDBRow>
//     );
//   };

//   return (
//     <MDBContainer
//       className="container-fluid py-4 grid grid-cols-2 "
//       id="cluster-container"
//     >
//       {memberfiles.map((member, index) => getColumns(index))}
//     </MDBContainer>
//   );
// }

// export default function Team() {
//   return (
//     <>
//       <Post />
//     </>
//   );
// }
