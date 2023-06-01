import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import teamimg5 from "../Images/team-5.png";

const TeamMemberImage = ({ src, index, total }) => {
  const isFirstImage = index === 0;
  const isLastImage = index === total - 1;

  const columnClass = `col-md-1 p-1 bg-white ${isFirstImage ? "pl-0" : ""} ${
    isLastImage ? "pr-0" : ""
  }`;

  return (
    <MDBCol md="1" className={columnClass}>
      <div className="image-container">
        <img src={src} className="w-100" alt="Team Member" />
        <div className="overlay"></div>
      </div>
    </MDBCol>
  );
};

const Team = () => {
  const teamImages = Array(12).fill(teamimg5); // Assuming `teamimg5` is the image source

  return (
    <MDBContainer fluid className="p-0" id="cluster-container">
      <MDBRow className="p-0 w-100" id="student-row" style={{ margin: 0 }}>
        {teamImages.map((src, index) => (
          <TeamMemberImage
            key={index}
            src={src}
            index={index}
            total={teamImages.length}
          />
        ))}
      </MDBRow>
    </MDBContainer>
  );
};

export default function Student() {
  return (
    <>
      <Team />
      <Team />
    </>
  );
}
