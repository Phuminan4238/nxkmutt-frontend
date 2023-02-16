import React from "react";
import {
  MDBContainer,
  MDBCarousel,
  MDBCarouselItem,
  MDBRow,
  MDBCol,
  MDBRipple,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import clusterimg1 from "../Images/cluster-1.png";
import clusterimg2 from "../Images/cluster-2.png";
import clusterimg3 from "../Images/cluster-3.png";
import clusterimg4 from "../Images/cluster-4.png";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const cluster1 = {
  name: " Cognitive, Clinical",
};

function Image() {
  return (
    <MDBContainer className="fluid p-0" id="cluster-container">
      <MDBRow className="p-0 ">
        <MDBCol md="8" className="p-0">
          <img src={clusterimg1} class="image-fluid" id="cluster-img" />
        </MDBCol>
        <MDBCol className="d-flex p-5 bg-danger">
          <div className="d-flex flex-column w-100">
            <h3 className="text-white">
              Cognitive, Clinical &<br></br>
              Computational
              <br></br>
              Neuroscience
            </h3>
            <div className="d-flex justify-content-between mt-auto">
              <h5 className="text-white fw-normal mt-5">More Info</h5>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {/* <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Accordion
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MDBContainer className="fluid p-0" id="cluster-container">
            <MDBRow className="p-0 ">
              <MDBCol md="8" className="p-0">
                <img src={clusterimg1} class="image-fluid" id="cluster-img" />
              </MDBCol>
              <MDBCol className="d-flex p-5 bg-danger">
                <div className="d-flex flex-column w-100">
                  <h3 className="text-white">
                    Cognitive, Clinical &<br></br>
                    Computational
                    <br></br>
                    Neuroscience
                  </h3>
                  <div className="d-flex justify-content-between mt-auto">
                    <h5 className="text-white fw-normal mt-5">More Info</h5>
                  </div>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </AccordionDetails>
      </Accordion> */}
    </div>
  );
}

export default function Researchaccordion() {
  return (
    <>
      <ControlledAccordions />
    </>
  );
}
