import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import teamimg5 from "../Images/team-5.png";

const TeamMemberImage = ({ src, index, total, memberId }) => {
  const isFirstImage = index === 0;
  const isLastImage = index === total - 1;

  const columnClass = `col-md-1 p-1 bg-white ${isFirstImage ? "pl-0" : ""} ${
    isLastImage ? "pr-0" : ""
  }`;

  return (
    <MDBCol md="1" className={columnClass} style={{ width: "13.333333%" }}>
      <Link
        to={`/Member-Detail/${memberId}`}
        onClick={() => {
          window.scrollTo(0, 0);
          window.location.replace(`/Member-Detail/${memberId}`);
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

const Team = () => {
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

export default function MemberCol() {
  return (
    <>
      <Team />
    </>
  );
}
