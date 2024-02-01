import React, { useState, useEffect } from "react";
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

const TeamMemberImage = ({ src, index, total, memberId }) => {
  const isFirstImage = index === 0;
  const isLastImage = index === total - 1;

  const columnClass = `col-md-1 p-1 bg-white ${isFirstImage ? "pl-0" : ""} ${
    isLastImage ? "pr-0" : ""
  }`;

  return (
    <MDBCol md="1" className={columnClass} style={{ width: "13.333333%" }}>
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
            style={{ width: "inherit", height: "140px", objectFit: "cover" }}
            alt="Team Member"
          />
          <div className="overlay"></div>
        </div>
      </Link>
    </MDBCol>
  );
};

// Desktop
const Team = () => {
  const [uploadfiles, setUploadfiles] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://10.2.14.173/api/members?populate=uploadfiles.fileupload&populate=uploadfiles.imagesquare&populate=uploadfiles.image_medium&populate=uploadfiles.image_large&&filters[usertype][$eq]=research_assistance&sort=sort"
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
            src={`http://10.2.14.173${member.attributes.uploadfiles.data[0]?.attributes.fileupload.data[0]?.attributes.url}`}
            index={index}
            total={uploadfiles.length}
            memberId={member.id} // Pass the member ID as a prop
          />
        ))}
      </MDBRow>
    </MDBContainer>
  );
};

// "members?populate=uploadfiles.fileupload&filters[usertype][$eq]=research_assistance"

// Mobile
function Image({ members, memberId }) {
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
          "members?populate=uploadfiles.fileupload&filters[usertype][$eq]=research_assistance"
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
      <div
        className="d-flex justify-content-between xs:py-2 py-4"
        id="tools-flex"
      >
        <MDBContainer className="xs:max-w-full sm:max-w-7xl px-0">
          <MDBRow>
            {uploadfiles.map((member) => (
              <MDBCol
                key={member.id}
                className="col-6 d-flex flex-column p-0 px-0"
              >
                <Link
                  to={`/Student-Detail/${member.id}`}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    window.location.replace(`/Student-Detail/${member.id}`);
                  }}
                  className="image-link"
                >
                  <MDBCard
                    style={{
                      boxShadow: "unset",
                      borderRadius: "0px",
                    }}
                  >
                    <MDBCardImage
                      className="rounded-4 w-75 sm:w-100"
                      src={
                        "http://10.2.14.173" +
                        member.attributes.uploadfiles.data[0]?.attributes
                          .fileupload.data[0]?.attributes.url
                      }
                      position="top"
                      alt="..."
                      style={{
                        // height: "350px",
                        objectFit: "contain",
                        alignSelf: "center",
                      }}
                    />
                    <Link
                      to={`/Student-Detail/${member.id}`}
                      onClick={() => {
                        window.scrollTo(0, 0);
                        window.location.replace(`/Student-Detail/${member.id}`);
                      }}
                    >
                      <MDBCardBody>
                        <MDBCardTitle className="m-0">
                          <p
                            className="fw-bold text-center mb-0 xs:text-xs md:text-2xl"
                            style={{ color: "black" }}
                          >
                            {member.attributes.name_en}
                            <br></br>
                            {member.attributes.surname_en}
                          </p>
                        </MDBCardTitle>
                        <MDBCardText className="mb-2">
                          <p
                            className="fw-normal text-center mb-0 xs:text-xs md:text-2xl"
                            style={{ color: "black" }}
                          >
                            {member.attributes.position_en}
                          </p>
                        </MDBCardText>
                        <MDBCardText key={member.attributes}>
                          <p
                            className="fw-normal text-center text-xs md:text-lg"
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

export default function MemberCol() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      {/* Render the Image component when on mobile */}
      {isMobile && <Image />}

      {/* Hide the Post component when on mobile */}
      {!isMobile && <Team />}
    </>
  );
}
