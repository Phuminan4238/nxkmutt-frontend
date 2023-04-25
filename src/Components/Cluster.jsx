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

  const [cognitiveimg, setCognitiveimg] = useState([]);
  useEffect(() => {
    fetch(
      "https://10.35.29.186/api/uploadfiles?populate=fileupload&filters[filename][$eq]=public_cognitive"
    )
      .then((res) => res.json())
      .then((result) => {
        setCognitiveimg(result.data);
      });
  }, []);

  const [humanfactorimg, setHumanfactorimg] = useState([]);
  useEffect(() => {
    fetch(
      "https://10.35.29.186/api/uploadfiles?populate=fileupload&filters[filename][$eq]=public_humanfactors"
    )
      .then((res) => res.json())
      .then((result) => {
        setHumanfactorimg(result.data);
      });
  }, []);

  const [neurodevimg, setNeurodevimg] = useState([]);
  useEffect(() => {
    fetch(
      "https://10.35.29.186/api/uploadfiles?populate=fileupload&filters[filename][$eq]=public_neurodevelopment"
    )
      .then((res) => res.json())
      .then((result) => {
        setNeurodevimg(result.data);
      });
  }, []);

  const [neuropharmaimg, setNeuropharmaimg] = useState([]);
  useEffect(() => {
    fetch(
      "https://10.35.29.186/api/uploadfiles?populate=fileupload&filters[filename][$eq]=public_neuropharmacology"
    )
      .then((res) => res.json())
      .then((result) => {
        setNeuropharmaimg(result.data);
      });
  }, []);

  const colors = ["#AE023E", "#00D26D", "#119ED1", "#FEB832"];

  const getImage = (index) => {
    switch (index) {
      case 0:
        return (
          <>
            {/* <img src={clusterimg1} className="image-fluid" id="cluster-img" /> */}
            {cognitiveimg.map((member) => (
              <img
                className="image-fluid"
                style={{
                  width: "-webkit-fill-available",
                  height: "-webkit-fit-content",
                }}
                src={
                  "https://10.35.29.186" +
                  member.attributes.fileupload.data[0]?.attributes.url
                }
              />
            ))}
          </>
        );
      case 1:
        return (
          <>
            {humanfactorimg.map((member) => (
              <img
                className="image-fluid"
                style={{
                  width: "-webkit-fill-available",
                  height: "-webkit-fit-content",
                }}
                src={
                  "https://10.35.29.186" +
                  member.attributes.fileupload.data[0]?.attributes.url
                }
              />
            ))}
          </>
        );
      case 2:
        return (
          <>
            {neurodevimg.map((member) => (
              <img
                className="image-fluid"
                style={{
                  width: "-webkit-fill-available",
                  height: "-webkit-fit-content",
                }}
                src={
                  "https://10.35.29.186" +
                  member.attributes.fileupload.data[0]?.attributes.url
                }
              />
            ))}
          </>
        );
      case 3:
        return (
          <>
            {neuropharmaimg.map((member) => (
              <img
                className="image-fluid"
                style={{
                  width: "-webkit-fill-available",
                  height: "-webkit-fit-content",
                }}
                src={
                  "https://10.35.29.186" +
                  member.attributes.fileupload.data[0]?.attributes.url
                }
              />
            ))}
          </>
        );
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
                  <Link to={`/Tags-Detail/${tagsData.id}`} target="_blank">
                    <p
                      className="fw-normal text-white mt-5 xs:text-base md:text-lg"
                      sx={{
                        "&:hover": {
                          paddingLeft: "12px",
                        },
                      }}
                    >
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

// function Reuse() {
//   const [tags, setTags] = useState([]);
//   useEffect(() => {
//     fetch("https://10.35.29.186/api/tags")
//       .then((res) => res.json())
//       .then((result) => {
//         setTags(result.data.slice(0, 4));
//       });
//   }, []);

//   const [cognitiveimg, setCognitiveimg] = useState([]);
//   useEffect(() => {
//     fetch(
//       "https://10.35.29.186/api/uploadfiles?populate=fileupload&filters[filename][$eq]=public_cognitive"
//     )
//       .then((res) => res.json())
//       .then((result) => {
//         setCognitiveimg(result.data);
//       });
//   }, []);

//   const [humanfactorimg, setHumanfactorimg] = useState([]);
//   useEffect(() => {
//     fetch(
//       "https://10.35.29.186/api/uploadfiles?populate=fileupload&filters[filename][$eq]=public_humanfactors"
//     )
//       .then((res) => res.json())
//       .then((result) => {
//         setHumanfactorimg(result.data);
//       });
//   }, []);

//   const [neurodevimg, setNeurodevimg] = useState([]);
//   useEffect(() => {
//     fetch(
//       "https://10.35.29.186/api/uploadfiles?populate=fileupload&filters[filename][$eq]=public_neurodevelopment"
//     )
//       .then((res) => res.json())
//       .then((result) => {
//         setNeurodevimg(result.data);
//       });
//   }, []);

//   const [neuropharmaimg, setNeuropharmaimg] = useState([]);
//   useEffect(() => {
//     fetch(
//       "https://10.35.29.186/api/uploadfiles?populate=fileupload&filters[filename][$eq]=public_neuropharmacology"
//     )
//       .then((res) => res.json())
//       .then((result) => {
//         setNeuropharmaimg(result.data);
//       });
//   }, []);

//   const colors = ["#AE023E", "#00D26D", "#119ED1", "#FEB832"];

//   const getImage = (index) => {
//     switch (index) {
//       case 0:
//         return <img src={clusterimg1} class="image-fluid" id="cluster-img" />;
//       case 1:
//         return <img src={clusterimg2} class="image-fluid" id="cluster-img" />;
//       case 2:
//         return <img src={clusterimg3} class="image-fluid" id="cluster-img" />;
//       case 3:
//         return <img src={clusterimg4} class="image-fluid" id="cluster-img" />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <>
//       {tags.map((tagsData, index) => (
//         <MDBContainer className="fluid p-0" id="cluster-container">
//           <MDBRow className="p-0 ">
//             <MDBCol
//               md="8"
//               className={`d-flex p-0 xs:order-2 sm:order-1 ${
//                 index === 1 || index === 3 ? "order-md-2" : ""
//               }`}
//             >
//               {getImage(index)}
//             </MDBCol>

//             <MDBCol
//               md="4"
//               order="1"
//               className={`d-flex p-5`}
//               style={{ backgroundColor: colors[index] }}
//               key={index}
//             >
//               <div className="d-flex flex-column w-100">
//                 <p className="fw-bold text-white xs:text-xl md:text-3xl">
//                   {tagsData.attributes?.name_en || "not found"}
//                 </p>
//                 <div className="d-flex justify-content-between mt-auto">
//                   <Link to={`/Tags Detail/${tagsData.id}`} target="_blank">
//                     <p className="fw-normal text-white mt-5 xs:text-base md:text-lg">
//                       More Info
//                     </p>
//                   </Link>
//                 </div>
//               </div>
//             </MDBCol>
//           </MDBRow>
//         </MDBContainer>
//       ))}
//     </>
//   );
// }

// export default function Clusterimage() {
//   return (
//     <>
//       <Reuse></Reuse>
//     </>
//   );
// }
