import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
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
import membericon from "../Images/member-icon.png";
// Language
import { LanguageContext } from "./LanguageContext";

// Desktop
function Post() {
  const [uploadfiles, setUploadfiles] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const instance = axios.create({
      baseURL: "https://10.2.14.173/api/",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    async function fetchData() {
      try {
        const response = await instance.get(
          "members?populate=uploadfiles.fileupload&filters[usertype][$eq]=advisor_and_collaborator"
        );
        if (isMounted) {
          setUploadfiles(response.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    if (uploadfiles.length === 0) {
      fetchData();
    }

    return () => {
      isMounted = false;
    };
  }, [uploadfiles]);

  const { selectedLanguage, handleLanguageSwitch } =
    useContext(LanguageContext);

  return (
    <div className="d-flex justify-content-between pb-4" id="tools-flex">
      <MDBContainer className="xs:max-w-full sm:max-w-7xl px-0">
        <MDBRow>
          {uploadfiles.map((member, index) => (
            <React.Fragment key={member.id}>
              <MDBCol
                md={Math.floor(12 / Math.min(uploadfiles.length, 5))}
                key={member.id}
                className="col-md-2 d-flex flex-column grow "
              >
                <MDBCard
                  className="pt-4"
                  style={{
                    boxShadow: "unset",
                    borderRadius: "0px",
                  }}
                >
                  <MDBCardImage
                    className="rounded-4"
                    src={
                      "https://10.2.14.173" +
                      member.attributes.uploadfiles.data[0]?.attributes
                        .fileupload.data[0]?.attributes.url
                    }
                    position="top"
                    alt="..."
                    style={{
                      // height: "340px",
                      objectFit: "cover",
                      borderRadius: "0px",
                      alignSelf: "center",
                      // height: "250px",
                      objectPosition: "50% 15%",
                      // objectPosition: "top",
                    }}
                  />
                  <MDBCardBody className="px-0">
                    <MDBCardTitle className="m-0 pt-2 xs:text-md md:text-md">
                      <p
                        className="fw-bold text-center mb-0 xs:text-md md:text-md"
                        style={{ color: "black", fontFamily: "MyFont" }}
                      >
                        {selectedLanguage === "en"
                          ? `${member.attributes.prefix_en} ${member.attributes.name_en} ${member.attributes.surname_en}`
                          : `${member.attributes.prefix_th} ${member.attributes.name_th} ${member.attributes.surname_th}`}
                      </p>
                    </MDBCardTitle>
                    <MDBCardText>
                      <h6
                        className="fw-light text-center"
                        style={{ color: "#AE023E", paddingTop: "1rem" }}
                      >
                        {selectedLanguage === "en"
                          ? `${member.attributes.position_en} `
                          : `${member.attributes.position_th}`}
                      </h6>
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              {(index + 1) % 5 === 0 && index + 1 !== uploadfiles.length && (
                <div className="w-100"></div>
              )}
            </React.Fragment>
          ))}
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

// Mobile
function Image({ members }) {
  const [uploadfiles, setUploadfiles] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const instance = axios.create({
      baseURL: "https://10.2.14.173/api/",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    async function fetchData() {
      try {
        const response = await instance.get(
          "members?populate=uploadfiles.fileupload&filters[usertype][$eq]=advisor_and_collaborator"
        );
        if (isMounted) {
          setUploadfiles(response.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    if (uploadfiles.length === 0) {
      fetchData();
    }

    return () => {
      isMounted = false;
    };
  }, [uploadfiles]);

  const { selectedLanguage, handleLanguageSwitch } =
    useContext(LanguageContext);

  return (
    <>
      <div
        className="d-flex justify-content-between xs:py-2 sm:py-4"
        id="tools-flex"
      >
        <MDBContainer className="xs:max-w-full sm:max-w-7xl px-0">
          <MDBRow>
            {uploadfiles.map((member) => (
              <MDBCol
                md="4"
                key={member.id}
                className="col-6 d-flex flex-column p-0 px-0"
              >
                <MDBCard
                  style={{
                    // borderBottom: "1px solid black",
                    boxShadow: "unset",
                    borderRadius: "0px",
                  }}
                >
                  <MDBCardImage
                    className="rounded-4 w-75 sm:w-100"
                    src={
                      "https://10.2.14.173" +
                      member.attributes.uploadfiles.data[0]?.attributes
                        .fileupload.data[0]?.attributes.url
                    }
                    position="top"
                    alt="..."
                    style={{
                      // height: "350px",
                      objectFit: "contain",
                      // borderRadius: "0px",
                      alignSelf: "center",
                    }}
                  />

                  <MDBCardBody>
                    <MDBCardTitle className="m-0">
                      <p
                        className="fw-bold text-center mb-0 xs:text-sm md:text-xl"
                        style={{ color: "black" }}
                      >
                        {selectedLanguage === "en"
                          ? `${member.attributes.prefix_en} ${member.attributes.name_en} ${member.attributes.surname_en}`
                          : `${member.attributes.prefix_th} ${member.attributes.name_th} ${member.attributes.surname_th}`}
                      </p>
                    </MDBCardTitle>
                    <MDBCardText className="mb-2">
                      <p
                        className="fw-normal text-center mb-0 xs:text-xs md:text-2xl pt-2"
                        style={{ color: "black" }}
                      >
                        {selectedLanguage === "en"
                          ? `${member.attributes.position_en} `
                          : `${member.attributes.position_th}`}
                      </p>
                    </MDBCardText>
                    <MDBCardText key={member.attributes} cl>
                      <p
                        className="fw-normal text-center text-xs md:text-lg"
                        style={{ color: "#AE023E" }}
                      >
                        Main Interest, Main <br></br> Interest, Main Interest
                      </p>
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
}

export default function Team() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      {/* Mobile  */}
      {isMobile && <Image />}

      {/* Desktop  */}
      {!isMobile && <Post />}
    </>
  );
}

// import React from "react";
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
// import teamimg1 from "../Images/team-1.png";
// import teamimg2 from "../Images/team-2.png";
// import teamimg3 from "../Images/team-3.png";
// import teamimg4 from "../Images/team-4.png";
// import { useState } from "react";

// function Profile() {
//   const [isHovering, setIsHovering] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovering(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovering(false);
//   };
//   return (
//     <MDBContainer className="fluid p-0 xs:hidden sm:contents">
//       <MDBRow className="p-0 ">
//         <MDBCol md="3" className="p-0 d-flex">
//           <img src={teamimg1} class="image-fluid" id="cluster-img" />
//         </MDBCol>

//         <MDBCol
//           md="3"
//           className="d-flex align-content-center flex-wrap p-5 bg-danger"
//         >
//           <div className="d-flex align-content-center flex-column w-100">
//             <h3 className="text-white text-center ">Sirawaj Itthipuripat</h3>
//             <h5 className="text-white fw-light text-center">
//               Research director
//             </h5>
//           </div>
//         </MDBCol>

//         <MDBCol md="3" className="p-0 d-flex">
//           <img src={teamimg2} class="image-fluid" id="cluster-img" />
//         </MDBCol>
//         <MDBCol
//           md="3"
//           className="d-flex align-content-center flex-wrap p-5 bg-warning"
//         >
//           <div className="d-flex align-content-center flex-column w-100">
//             <h3 className="text-white text-center ">Kanda Lertladaluck</h3>
//             <h5 className="text-white fw-light text-center">Researcher</h5>
//           </div>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// }

// function Profile2() {
//   return (
//     <MDBContainer
//       className="fluid p-0 xs:contents sm:contents"
//       id="cluster-container"
//     >
//       <MDBRow className="p-0 ">
//         <MDBCol
//           md="3"
//           className="d-flex align-content-center flex-wrap p-5 bg-warning"
//         >
//           <div className="d-flex align-content-center flex-column w-100">
//             <h3 className="text-white text-center">
//               Thitaporn Chaisilprungraung
//             </h3>
//             <h5 className="text-white fw-light text-center">
//               Research scientist
//             </h5>
//           </div>
//         </MDBCol>
//         <MDBCol md="3" className="p-0 d-flex">
//           <img src={teamimg3} class="image-fluid" id="cluster-img" />
//         </MDBCol>
//         <MDBCol
//           md="3"
//           className="d-flex align-content-center flex-wrap p-5 bg-info"
//         >
//           <div className="d-flex align-content-center flex-column w-100">
//             <h3 className="text-white text-center ">Kejkaew Thanasuan</h3>
//             <h5 className="text-white fw-light text-center">
//               Assistant Professor
//             </h5>
//           </div>
//         </MDBCol>
//         <MDBCol md="3" className="p-0 d-flex">
//           <img src={teamimg4} class="image-fluid" id="cluster-img" />
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// }

// export default function Team() {
//   return (
//     <>
//       <Profile />
//       <Profile2 />
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
//     fetch("https://10.2.14.173/api/members?populate=uploadfiles.fileupload")
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
//                 "https://10.2.14.173" +
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
//     fetch("https://10.2.14.173/api/members?populate=uploadfiles.fileupload")
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
//                 "https://10.2.14.173" +
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
