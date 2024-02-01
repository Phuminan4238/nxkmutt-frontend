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
function ImageDesktop() {
  const [memberfiles, setMemberfiles] = useState([]);

  useEffect(() => {
    fetch(
      "http://10.2.14.173/api/members?populate=uploadfiles.fileupload&populate=uploadfiles.image_original&populate=uploadfiles.image_square&populate=uploadfiles.image_medium&populate=uploadfiles.image_large&filters[usertype][$eq]=faculty_member&sort=sort"
    )
      .then((res) => res.json())
      .then((result) => {
        setMemberfiles(result.data);
      });
  }, []);

  const colors = ["#B34C66", "#F2B032", "#F2B032", "#119ED1"];

  const Column = ({ color, children }) => {
    return (
      <MDBCol
        className="align-content-center"
        style={{ backgroundColor: color }}
      >
        {children}
      </MDBCol>
    );
  };

  const GetColumns = (index) => {
    const member = memberfiles[index];
    const colorIndex = index % colors.length;
    const isFirstColumn = index % 2 === 0;
    const isFront = Math.floor(index / 2) % 2 === 0;
    const order1 = isFirstColumn ? (isFront ? 2 : 1) : isFront ? 1 : 2;
    const order2 = isFirstColumn ? (isFront ? 1 : 2) : isFront ? 2 : 1;

    const imgSrc =
      "http://10.2.14.173" +
      member.attributes.uploadfiles.data[0]?.attributes.image_original.data[0]
        ?.attributes.url;

    const { selectedLanguage, handleLanguageSwitch } =
      useContext(LanguageContext);

    return (
      <MDBContainer className="fluid p-0" id="cluster-container">
        <MDBRow
          key={member.id}
          id="cluster-gutter"
          className={`${index % 2 === 0 ? "flex-row-reverse" : ""}`}
        >
          <MDBCol
            md="6"
            className={`p-0 order-${order1}`}
            // style={{ maxWidth: "550px" }}
          >
            <Link
              to={`/Member-Detail/${member.id}`}
              onClick={() => {
                window.scrollTo(0, 0);
                window.location.replace(`/Member-Detail/${member.id}`);
              }}
            >
              <img
                src={imgSrc}
                className="image-fluid"
                id="cluster-img"
                style={{
                  objectFit: "cover",
                  borderRadius: "0px",
                  alignSelf: "center",
                  height: "320px",
                  // height: "100%",
                  width: "100%",
                  objectPosition: "top",
                }}
                alt={`Member ${index + 1} Image`}
              />
            </Link>
          </MDBCol>

          <MDBCol
            md="6"
            className={`p-0 d-flex order-${order2}`}
            style={{ backgroundColor: colors[colorIndex] }}
          >
            <Column>
              <div className="d-flex align-items-center justify-content-center flex-column w-100 h-100">
                <Link
                  to={`/Member-Detail/${member.id}`}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    window.location.replace(`/Member-Detail/${member.id}`);
                  }}
                >
                  <p
                    className="fw-bold text-white text-center mt-2 mb-2 xs:text-lg sm:text-xl md:text-xl"
                    style={{
                      fontFamily: "MyFont",
                    }}
                  >
                    {selectedLanguage === "en"
                      ? `${member.attributes.prefix_en} ${member.attributes.name_en} ${member.attributes.surname_en}`
                      : `${member.attributes.prefix_th} ${member.attributes.name_th} ${member.attributes.surname_th}`}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <hr
                        style={{
                          color: "white",
                          opacity: "1",
                          width: "40px",
                          height: "3px",
                          margin: "1rem 0",
                        }}
                      />
                      <img
                        src={membericon}
                        className="px-3"
                        style={{ height: "20px" }}
                      />
                      <hr
                        style={{
                          color: "white",
                          opacity: "1",
                          width: "40px",
                          height: "3px",
                          margin: "1rem 0",
                        }}
                      />
                    </div>
                  </p>

                  <p className="fw-normal text-white text-center xs:text-lg sm:text-lg">
                    {selectedLanguage === "en"
                      ? `${member.attributes.position_en} `
                      : `${member.attributes.position_th}`}
                  </p>
                </Link>
              </div>
            </Column>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  };

  return (
    <MDBContainer
      className="container-fluid pt-0 pb-4 grid grid-cols-2 "
      id="cluster-container"
    >
      {memberfiles.map((member, index) => GetColumns(index))}
    </MDBContainer>
  );
}

// Mobile
function ImageMobile({ members }) {
  const colors = ["#B34C66", "#F2B032", "#119ED1", "#F2B032"];
  const [uploadfiles, setUploadfilesMember] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const instance = axios.create({
      baseURL: "http://10.2.14.173/api/",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    async function fetchData() {
      try {
        const response = await instance.get(
          "members?populate=uploadfiles.fileupload&populate=uploadfiles.image_original&populate=uploadfiles.image_square&populate=uploadfiles.image_medium&populate=uploadfiles.image_large&filters[usertype][$eq]=faculty_member&sort=sort"
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
      <div className="d-flex justify-content-between py-4 px-0" id="tools-flex">
        <MDBContainer className="fluid p-0" id="cluster-container">
          <MDBRow className="p-0 w-fill" id="cluster-gutter">
            {uploadfiles.map((member, index) => (
              <React.Fragment key={member.id}>
                <MDBCol
                  md={Math.floor(12 / Math.min(uploadfiles.length, 5))}
                  key={member.id}
                  className="col-6 d-flex flex-column p-0 px-0" // Adjust styling as needed
                >
                  <MDBCard
                    className="h-100"
                    style={{
                      boxShadow: "unset",
                      borderRadius: "0px",
                      backgroundColor: colors[index % colors.length],
                    }}
                  >
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/Member-Detail/${member.id}`}
                      onClick={() => {
                        window.scrollTo(0, 0);
                        window.location.replace(`/Member-Detail/${member.id}`);
                      }}
                    >
                      <MDBCardImage
                        className="rounded-0"
                        src={
                          "http://10.2.14.173" +
                          member.attributes.uploadfiles.data[0]?.attributes
                            .image_square.data[0]?.attributes.url
                        }
                        position="top"
                        alt="..."
                        style={{
                          objectFit: "cover",
                          borderRadius: "0px",
                          alignSelf: "center",
                          // height: "300px",
                          // height: "50%",
                          objectPosition: "50% 15%",
                        }}
                      />
                      <MDBCardBody
                        className="h-50"
                        style={{ padding: "1.5rem" }}
                      >
                        <div className="d-flex align-items-center justify-content-center flex-column  h-100">
                          <p
                            className="text-white text-center mt-2 mb-2 xs:text-md sm:text-xl md:text-xl"
                            style={{
                              fontFamily: "FontMedium",
                            }}
                          >
                            <span>{member.attributes.prefix_en}</span>{" "}
                            {member.attributes.name_en}
                            <br></br>
                            {member.attributes.surname_en}
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <hr
                                style={{
                                  color: "white",
                                  opacity: "1",
                                  width: "30px",
                                  height: "3px",
                                  margin: "1rem 0",
                                }}
                              />
                            </div>
                          </p>

                          <p className="fw-normal text-white text-center xs:text-md">
                            {member.attributes.position_en}
                          </p>
                        </div>
                      </MDBCardBody>
                    </Link>
                  </MDBCard>
                </MDBCol>
                {/* {(index + 1) % 5 === 0 && index + 1 !== uploadfiles.length && (
                  <div className="w-100"></div>
                )} */}
              </React.Fragment>
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
      {isMobile && <ImageMobile />}

      {/* Desktop  */}
      {!isMobile && <ImageDesktop />}
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
//     fetch("http://10.2.14.173/api/members?populate=uploadfiles.fileupload")
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
//                 "http://10.2.14.173" +
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
//     fetch("http://10.2.14.173/api/members?populate=uploadfiles.fileupload")
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
//                 "http://10.2.14.173" +
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
