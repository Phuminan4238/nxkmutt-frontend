import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, setIsLoaded } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import clusterimg1 from "../Images/cluster-1.png";
import clusterimg2 from "../Images/cluster-2.png";
import clusterimg3 from "../Images/cluster-3.png";
import clusterimg4 from "../Images/cluster-4.png";

function Reuse() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetch("https://10.35.29.186/api/tags")
      .then((res) => res.json())
      .then((result) => {
        setTags(result.data.slice(0, 4));
      });
  }, []);

  const colors = ["#AE023E", "#00D26D", "#119ED1", "#FEB832"];

  const getImage = (index) => {
    switch (index) {
      case 0:
        return <img src={clusterimg1} class="image-fluid" id="cluster-img" />;
      case 1:
        return <img src={clusterimg2} class="image-fluid" id="cluster-img" />;
      case 2:
        return <img src={clusterimg3} class="image-fluid" id="cluster-img" />;
      case 3:
        return <img src={clusterimg4} class="image-fluid" id="cluster-img" />;
      default:
        return null;
    }
  };

  return (
    <>
      {tags.map((tagsData, index) => (
        <MDBContainer className="fluid p-0" id="cluster-container">
          <MDBRow className="p-0 ">
            <MDBCol
              md="8"
              className={`d-flex p-0 xs:order-2 sm:order-1 ${
                index === 1 || index === 3 ? "order-md-2" : ""
              }`}
            >
              {getImage(index)}
            </MDBCol>

            <MDBCol
              md="4"
              order="1"
              className={`d-flex p-5`}
              style={{ backgroundColor: colors[index] }}
              key={index}
            >
              <div className="d-flex flex-column w-100">
                <p className="fw-bold text-white xs:text-xl md:text-3xl">
                  {tagsData.attributes?.name_en || "not found"}
                </p>
                <div className="d-flex justify-content-between mt-auto">
                  <Link to={`/Tags Detail/${tagsData.id}`} target="_blank">
                    <p className="fw-normal text-white mt-5 xs:text-base md:text-lg">
                      More Info
                    </p>
                  </Link>
                </div>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      ))}
    </>
  );
}

export default function Clusterimage() {
  return (
    <>
      <Reuse></Reuse>
    </>
  );
}

// const cluster1 = {
//   name: " Cognitive, Clinical",
// };

// function Image() {
//   const [tags1, setTags1] = useState({});

//   useEffect(() => {
//     fetch("https://10.35.29.186/api/tags/1")
//       .then((res) => res.json())
//       .then((result) => {
//         setTags1(result.data);
//       });
//   });

//   return (
//     <MDBContainer className="fluid p-0" id="cluster-container">
//       <MDBRow className="p-0 ">
//         <MDBCol md="8" className="d-flex p-0 xs:order-2 sm:order-1">
//           <img src={clusterimg1} class="image-fluid" id="cluster-img" />
//         </MDBCol>
//         <MDBCol
//           md="4"
//           order="1"
//           className="d-flex p-5"
//           style={{ background: "#AE023E" }}
//         >
//           {/* In progress */}

//           <div className="d-flex flex-column w-100">
//             <p className="fw-bold text-white xs:text-xl md:text-3xl">
//               {tags1.attributes?.name_en || "not found"}
//             </p>
//             <div className="d-flex justify-content-between mt-auto">
//               <Link to="/Research Cognitive" target={"_blank"}>
//                 <p className="fw-normal text-white mt-5 xs:text-base md:text-lg">
//                   More Info
//                 </p>
//               </Link>
//             </div>
//           </div>
//           {/* ))} */}
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// }

// function ReverseImage() {
//   const [tags2, setTags2] = useState({});

//   useEffect(() => {
//     fetch("https://10.35.29.186/api/tags/3")
//       .then((res) => res.json())
//       .then((result) => {
//         setTags2(result.data);
//       });
//   });

//   const nameEn = tags2.attributes?.name_en || "not found";
//   const words = nameEn.split(" ");
//   const formattedText =
//     words.slice(0, 3).join(" ") + "\n" + words.slice(3).join(" ");

//   return (
//     <MDBContainer className="fluid p-0" id="cluster-container">
//       <MDBRow className="p-0 ">
//         <MDBCol md="4" className="d-flex p-5 bg-success">
//           <div className="d-flex flex-column w-100">
//             <p className="fw-bold text-white xs:text-xl md:text-3xl">
//               {formattedText}
//             </p>
//             <div className="d-flex justify-content-between mt-auto">
//               <h5 className="text-white fw-normal mt-5">
//                 {" "}
//                 <Link to="/Research Pharma" target={"_blank"}>
//                   <p className="fw-normal text-white mt-5 xs:text-base md:text-lg">
//                     More Info
//                   </p>
//                 </Link>
//               </h5>
//             </div>
//           </div>
//         </MDBCol>

//         <MDBCol md="8" className="d-flex p-0 xs:order-2 sm:order-1">
//           <img src={clusterimg2} class="image-fluid" id="cluster-img" />
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// }

// function Image2() {
//   const [tags3, setTags3] = useState({});

//   useEffect(() => {
//     fetch("https://10.35.29.186/api/tags/2")
//       .then((res) => res.json())
//       .then((result) => {
//         setTags3(result.data);
//       });
//   });
//   return (
//     <MDBContainer className="fluid p-0" id="cluster-container">
//       <MDBRow className="p-0 ">
//         <MDBCol md="8" className="d-flex p-0 xs:order-2 sm:order-1">
//           <img src={clusterimg3} class="image-fluid" id="cluster-img" />
//         </MDBCol>
//         <MDBCol md="4" order="1" className="d-flex p-5 bg-primary">
//           <div className="d-flex flex-column w-100">
//             <p className="fw-bold text-white xs:text-xl md:text-3xl">
//               {tags3.attributes?.name_en || "not found"}
//             </p>
//             <div className="d-flex justify-content-between mt-auto">
//               <Link to="/Research Human" target={"_blank"}>
//                 <p className="fw-normal text-white mt-5 xs:text-base md:text-lg">
//                   More Info
//                 </p>
//               </Link>
//             </div>
//           </div>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// }

// function ReverseImage2() {
//   return (
//     <MDBContainer className="fluid p-0" id="cluster-container">
//       <MDBRow className="p-0 ">
//         <MDBCol md="4" className="d-flex p-5 bg-warning">
//           <div className="d-flex flex-column w-100">
//             <p className="fw-bold text-white xs:text-xl md:text-3xl">
//               Pharmaceutical<br></br>
//               Biology & <br></br>
//               Neuropharmacology
//             </p>
//             <div className="d-flex justify-content-between mt-auto">
//               <h5 className="text-white fw-normal mt-5">
//                 {" "}
//                 <Link to="/Research Pharma" target={"_blank"}>
//                   <p className="fw-normal text-white mt-5 xs:text-base md:text-lg">
//                     More Info
//                   </p>
//                 </Link>
//               </h5>
//             </div>
//           </div>
//         </MDBCol>
//         <MDBCol md="8" className="d-flex p-0">
//           <img src={clusterimg4} class="image-fluid" id="cluster-img" />
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// }
