// import React from "react";
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardImage,
//   MDBBtn,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
// } from "mdb-react-ui-kit";
// import { useState, useEffect, setIsLoaded } from "react";

// const CallImage = () => {
//   const [uploadfiles, setUploadfiles] = useState([]);

//   useEffect(() => {
//     fetch("http://10.35.29.186:1337/api/uploadfiles?populate=fileupload ")
//       .then((res) => res.json())
//       .then((result) => {
//         setUploadfiles(result.data);
//       });
//   });

//   //   http://10.35.29.186:1337/api/members/

//   return (
//     <div className="App" style={{ borderTop: "1px solid black" }}>
//       <MDBContainer>
//         <MDBRow>
//           {uploadfiles.map((uploadfile) => (
//             <MDBCol key={uploadfile.id}>
//               <MDBCard style={{ width: "18rem" }}>
//                 <MDBCardImage
//                   variant="top"
//                   src={
//                     "http://10.35.29.186:1337" +
//                     uploadfile.attributes.fileupload.data[0].attributes.url
//                     // uploadfile.attributes.filetype
//                   }
//                 />
//                 <MDBCardBody>
//                   <MDBCardTitle key={uploadfile.attributes.filename}>
//                     {uploadfile.attributes.filetype}
//                   </MDBCardTitle>
//                   <MDBCardText key={uploadfile.attributes}>
//                     Paragraph
//                   </MDBCardText>
//                   <MDBBtn variant="primary">Btn</MDBBtn>
//                 </MDBCardBody>
//               </MDBCard>
//             </MDBCol>
//           ))}
//         </MDBRow>
//       </MDBContainer>

//       <MDBContainer className="fluid p-0 xs:hidden sm:contents">
//         {uploadfiles.map((uploadfile) => (
//           <MDBRow className="p-0 ">
//             {/* /* Image */}
//             <MDBCol md="3" className="p-0" key={uploadfile.id}>
//               <MDBCardImage
//                 class="image-fluid"
//                 id="cluster-img"
//                 src={
//                   "http://10.35.29.186:1337" +
//                   uploadfile.attributes.fileupload.data[0].attributes.url
//                 }
//               />
//             </MDBCol>
//             {/* Text */}
//             <MDBCol
//               md="3"
//               className="d-flex align-content-center flex-wrap p-5 bg-danger"
//             >
//               <div className="d-flex align-content-center flex-column w-100">
//                 <h3
//                   key={uploadfile.attributes.name_en}
//                   className="text-white text-center "
//                 >
//                   {uploadfile.attributes.surename_en}
//                 </h3>
//                 <h5
//                   className="text-white fw-light text-center"
//                   key={uploadfile.attributes.filetype}
//                 >
//                   {uploadfile.attributes.filetype}
//                 </h5>
//               </div>
//             </MDBCol>
//           </MDBRow>
//         ))}
//       </MDBContainer>
//     </div>
//   );
// };

// export default CallImage;

import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useState, useEffect, setIsLoaded } from "react";

const Tags = () => {
  const [uploadfiles, setUploadfiles] = useState([]);
  useEffect(() => {
    fetch("https://10.35.29.186/api/members?populate=id ")
      .then((res) => res.json())
      .then((result) => {
        setUploadfiles(result.data);
      });
  });

  const [uploadfiles2, setUploadfiles2] = useState([]);
  useEffect(() => {
    fetch("https://10.35.29.186/api/uploadfiles?populate=fileupload ")
      .then((res) => res.json())
      .then((result) => {
        setUploadfiles2(result.data);
      });
  });

  // useEffect(() => {
  //   fetch("http://10.35.29.186:1337/api/memberss?populate=id ")
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setUploadfiles(result.data);
  //     });
  // });

  //   http://10.35.29.186:1337/api/members/

  return (
    <div className="App" style={{ borderTop: "1px solid black" }}>
      {/* <MDBContainer>
        <MDBRow>
          {uploadfiles.map((uploadfile) => (
            <MDBCol key={uploadfile.id}>
              <MDBCard style={{ width: "18rem" }}>
                <MDBCardImage
                  variant="top"
                  // src={
                  //   "http://10.35.29.186:1337" +
                  //   uploadfile.attributes.fileupload.data[0].attributes.url
                  //   // uploadfile.attributes.filetype
                  // }
                />
                <MDBCardBody>
                  <MDBCardTitle key={uploadfile.attributes.name_en}>
                    {uploadfile.attributes.filetype}
                  </MDBCardTitle>
                  <MDBCardText key={uploadfile.category}>Paragraph</MDBCardText>
                  <MDBBtn variant="primary">Btn</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer> */}

      <MDBContainer className="fluid p-0 xs:hidden sm:contents">
        <MDBRow className="p-0 ">
          {/* /* Image */}
          {uploadfiles2.map((uploadfile) => (
            <MDBCol md="3" className="p-0" key={uploadfile.id}>
              <MDBCardImage
                class="image-fluid"
                id="cluster-img"
                src={
                  "https://10.35.29.186" +
                  uploadfile.attributes.fileupload.data[0].attributes.url
                }
              />
            </MDBCol>
          ))}
          {/* Text */}
          {uploadfiles.map((uploadfile) => (
            <MDBCol
              md="3"
              className="d-flex align-content-center flex-wrap p-5 bg-danger"
            >
              <div className="d-flex align-content-center flex-column w-100">
                <h3
                  key={uploadfile.attributes.name_en}
                  className="text-white text-center "
                >
                  {uploadfile.attributes.name_th}
                </h3>
                <h5
                  className="text-white fw-light text-center"
                  key={uploadfile.attributes.createdAt}
                >
                  {uploadfile.attributes.updatedAt}
                </h5>
              </div>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>

      <MDBContainer>
        <MDBRow>
          {uploadfiles2.map((uploadfile) => (
            <MDBCol key={uploadfile.id}>
              <MDBCard style={{ width: "18rem" }}>
                <MDBCardImage
                  variant="top"
                  src={
                    "https://10.35.29.186" +
                    uploadfile.attributes.fileupload.data[0].attributes.url
                    // uploadfile.attributes.filetype
                  }
                />
                {uploadfiles.map((uploadfile) => (
                  <MDBCardBody>
                    <h3 key={uploadfile.attributes.email}>
                      {uploadfile.attributes.email}
                    </h3>
                    <MDBCardTitle>{uploadfile.attributes.email}</MDBCardTitle>
                    <MDBCardText>{uploadfile.attributes.updatedAt}</MDBCardText>
                  </MDBCardBody>
                ))}
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Tags;
