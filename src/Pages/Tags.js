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
    fetch("http://10.35.29.186:1337/api/tags?populate=id ")
      .then((res) => res.json())
      .then((result) => {
        setUploadfiles(result.data);
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
      <MDBContainer>
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
      </MDBContainer>

      <MDBContainer className="fluid p-0 xs:hidden sm:contents">
        {uploadfiles.map((uploadfile) => (
          <MDBRow className="p-0 ">
            {/* /* Image */}
            <MDBCol md="3" className="p-0" key={uploadfile.id}>
              <MDBCardImage
                class="image-fluid"
                id="cluster-img"
                // src={
                //   "http://10.35.29.186:1337" +
                //   uploadfile.attributes.fileupload.data[0].attributes.url
                // }
              />
            </MDBCol>
            {/* Text */}
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
          </MDBRow>
        ))}
      </MDBContainer>
    </div>
  );
};

export default Tags;
