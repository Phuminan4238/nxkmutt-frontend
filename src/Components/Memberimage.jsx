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
import { LanguageContext } from "./LanguageContext";

// Desktop
function Post() {
  const [uploadfiles, setUploadfiles] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const instance = axios.create({
      baseURL: "https://10.35.29.186/api/",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    async function fetchData() {
      try {
        const response = await instance.get(
          "members?populate=uploadfiles.fileupload"
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

  const [uploadfilesMember, setUploadfilesMember] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const instance = axios.create({
      baseURL: "https://10.35.29.186/api/",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    async function fetchData() {
      try {
        const response = await instance.get(
          "members?populate=tags&populate=uploadfiles.fileupload&populate=uploadfiles.image_original&populate=uploadfiles.image_square&populate=uploadfiles.image_medium&populate=uploadfiles.image_large&filters[usertype][$eq]=faculty_member&sort=sort"
        );
        if (isMounted) {
          setUploadfilesMember(response.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    if (uploadfilesMember.length === 0) {
      fetchData();
    }

    return () => {
      isMounted = false;
    };
  }, [uploadfilesMember]);

  const { selectedLanguage, handleLanguageSwitch } =
    useContext(LanguageContext);

  return (
    <div className="d-flex justify-content-between pb-4" id="tools-flex">
      <MDBContainer className="xs:max-w-full sm:max-w-7xl px-0">
        <MDBRow>
          {uploadfilesMember.map((member) => (
            <MDBCol md="4" key={member.id} className="pb-4 col-sm-8">
              <Link
                to={`/Member-Detail/${member.id}`}
                onClick={() => {
                  window.scrollTo(0, 0);
                  window.location.replace(`/Member-Detail/${member.id}`);
                }}
              >
                <MDBCard
                  className="pt-4"
                  style={{
                    borderBottom: "1px solid black",
                    boxShadow: "unset",
                    borderRadius: "0px",
                  }}
                >
                  {/* image_mediium  */}
                  <MDBCardImage
                    className="rounded-4"
                    src={
                      "https://10.35.29.186" +
                      member.attributes.uploadfiles.data[0]?.attributes
                        .image_original.data[0]?.attributes.url
                    }
                    position="top"
                    alt="..."
                    style={{
                      // height: "340px",
                      objectFit: "cover",
                      borderRadius: "1rem",
                      alignSelf: "center",
                      height: "300px",
                      objectPosition: "50% 15%",
                      // objectPosition: "top",
                    }}
                  />
                  <MDBCardBody>
                    <MDBCardTitle className="m-0 pt-2">
                      <p
                        className="fw-bold text-center mb-0 xs:text-xl md:text-xl"
                        style={{
                          color: "black",
                          fontFamily: "MyFont",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {/* {member.attributes.name_en}

                        {member.attributes.surname_en} */}
                        {selectedLanguage === "en"
                          ? `${member.attributes.name_en} ${member.attributes.surname_en}`
                          : `${member.attributes.name_th} ${member.attributes.surname_th}`}
                      </p>
                    </MDBCardTitle>
                    <MDBCardText>
                      <p
                        className="fw-normal text-center mb-0 xs:text-md md:text-lg"
                        style={{ color: "black" }}
                      >
                        {selectedLanguage === "en"
                          ? `${member.attributes.position_en} `
                          : `${member.attributes.position_th}`}
                      </p>
                    </MDBCardText>

                    <p
                      className="fw-normal text-center text-sm md:text-sm"
                      style={{ color: "#AE023E" }}
                    >
                      {/* Handle  */}
                      {member.attributes.tags?.data.map((tag, index) => (
                        <li key={index}>
                          {selectedLanguage === "en"
                            ? tag.attributes.name_en
                            : tag.attributes.name_th}
                        </li>
                      ))}
                    </p>

                    {/* </MDBCardText> */}
                  </MDBCardBody>
                </MDBCard>
              </Link>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

// Mobile
function Image({ members }) {
  const [uploadfiles, setUploadfilesMember] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const instance = axios.create({
      baseURL: "https://10.35.29.186/api/",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    async function fetchData() {
      try {
        const response = await instance.get(
          "members?populate=uploadfiles.fileupload&populate=uploadfiles.image_square&populate=uploadfiles.image_medium&populate=uploadfiles.image_large&filters[usertype][$eq]=faculty_member&sort=sort"
        );
        if (isMounted) {
          setUploadfilesMember(response.data.data);
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

  return (
    <>
      <div className="d-flex justify-content-between py-4" id="tools-flex">
        <MDBContainer className="xs:max-w-full sm:max-w-7xl">
          <MDBRow>
            {uploadfiles.map((member) => (
              <MDBCol md="4" key={member.id} className="pb-4 col-sm-8">
                <Link
                  to={`/Member-Detail/${member.id}`}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    window.location.replace(`/Member-Detail/${member.id}`);
                  }}
                >
                  <MDBCard
                    style={{
                      borderBottom: "1px solid black",
                      boxShadow: "unset",
                      borderRadius: "0px",
                    }}
                  >
                    <MDBCardImage
                      className="rounded-4 w-75 sm:w-100"
                      src={
                        "https://10.35.29.186" +
                        member.attributes.uploadfiles.data[0]?.attributes
                          .image_square.data[0]?.attributes.url
                      }
                      position="top"
                      alt="..."
                      style={{
                        // height: "350px",
                        objectFit: "contain",
                        borderRadius: "0px",
                        alignSelf: "center",
                      }}
                    />
                    <Link
                      to={`/Member-Detail/${member.id}`}
                      onClick={() => {
                        window.scrollTo(0, 0);
                        window.location.replace(`/Member-Detail/${member.id}`);
                      }}
                    >
                      <MDBCardBody>
                        <MDBCardTitle className="m-0">
                          <p
                            className="fw-bold text-center mb-0 xs:text-xl md:text-2xl"
                            style={{ color: "#AE023E" }}
                          >
                            {member.attributes.name_en}
                            <br></br>
                            {member.attributes.surname_en}
                          </p>
                        </MDBCardTitle>
                        <MDBCardText>
                          <p
                            className="fw-normal text-center mb-0 xs:text-xl md:text-2xl"
                            style={{ color: "#AE023E" }}
                          >
                            {member.attributes.position_en}
                          </p>
                        </MDBCardText>
                        <MDBCardText key={member.attributes}>
                          <p
                            className="fw-normal text-center text-sm md:text-lg"
                            style={{ color: "#AE023E" }}
                          >
                            Main Interest, Main <br></br> Interest, Main
                            Interest
                          </p>
                        </MDBCardText>
                      </MDBCardBody>
                    </Link>
                  </MDBCard>
                </Link>
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
      {/* Render the Image component when on mobile */}
      {isMobile && <Image />}

      {/* Hide the Post component when on mobile */}
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
