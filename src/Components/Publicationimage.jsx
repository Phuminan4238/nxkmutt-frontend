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
import vr1 from "../Images/vr-1.png";
import vr2 from "../Images/vr-2.png";
import teamimg1 from "../Images/team-1.png";
import teamimg2 from "../Images/team-2.png";
import teamimg3 from "../Images/team-3.png";
import teamimg4 from "../Images/team-4.png";
import { border } from "@mui/system";

// function Menu() {
//   return (
//     <>
//       <div className="d-flex justify-content-between py-4" id="tools-flex">
//         <h4 className="fw-normal text-uppercase text-black">Filters</h4>
//         <MDBCard>
//           <MDBCardBody className="square border border-danger bg-white">
//             <p className="text-danger fw-bold text-center ">
//               Cognitive, Clinical &<br></br> Computational Neuroscience
//             </p>
//           </MDBCardBody>
//         </MDBCard>{" "}
//         <MDBCard>
//           <MDBCardBody className="square border border-success bg-white">
//             <p className="text-success fw-bold text-center ">
//               Human Factors & Decision Neuroscience
//             </p>
//           </MDBCardBody>
//         </MDBCard>{" "}
//         <MDBCard>
//           <MDBCardBody className="square border border-success bg-white">
//             <p className="text-success fw-bold text-center ">
//               Human Factors & Decision Neuroscience
//             </p>
//           </MDBCardBody>
//         </MDBCard>{" "}
//         <MDBCard>
//           <MDBCardBody className="square border border-success bg-white">
//             <p className="text-success fw-bold text-center ">
//               Human Factors & Decision Neuroscience
//             </p>
//           </MDBCardBody>
//         </MDBCard>{" "}
//       </div>
//     </>
//   );
// }

function Image() {
  return (
    <>
      <div className="d-flex justify-content-between py-4" id="tools-flex">
        <MDBCard className="shadow-0">
          <MDBCard className="mb-4">
            <MDBCardBody
              className="square border border-2 border-danger rounded-0 bg-white"
              style={{ borderColor: "#AE023E" }}
            >
              <p
                className="fw-bold text-start mb-0"
                style={{ color: "#AE023E" }}
              >
                Cognitive, Clinical &<br></br> Computational Neuroscience
              </p>
            </MDBCardBody>
          </MDBCard>{" "}
          <MDBCardImage
            src={vr2}
            position="top"
            alt="..."
            style={{ height: "250px", borderRadius: "0px" }}
          />
          <MDBCardBody
            className="rounded-0"
            style={{ backgroundColor: "#AE023E" }}
          >
            <p className="text-white fw-bold text-start ">
              Fluctuations in instantaneous frequency predict alpha
            </p>
            <p className="text-white fw-light text-start">
              Dr. Sirawaj Itthipuripat
            </p>
          </MDBCardBody>
        </MDBCard>{" "}
        <MDBCard className="shadow-0">
          <MDBCard className="mb-4">
            <MDBCardBody className="square border border-2 border-success rounded-0 bg-white">
              <p className="fw-bold text-start text-success mb-0">
                Human Factors &<br></br> Decision Neuroscience
              </p>
            </MDBCardBody>
          </MDBCard>{" "}
          <MDBCardImage
            src={vr2}
            position="top"
            alt="..."
            style={{ height: "250px", borderRadius: "0px" }}
          />
          <MDBCardBody className="rounded-0 bg-success">
            <p className="text-white fw-bold text-start ">
              Fluctuations in instantaneous frequency predict alpha
            </p>
            <p className="text-white fw-light text-start">
              Dr. Sirawaj Itthipuripat
            </p>
          </MDBCardBody>
        </MDBCard>{" "}
        <MDBCard className="shadow-0">
          <MDBCard className="mb-4">
            <MDBCardBody className="square border border-2 border-info rounded-0 bg-white">
              <p className="fw-bold text-start mb-0 text-info">
                Neurodevelopment & <br></br> Educational Neuroscience
              </p>
            </MDBCardBody>
          </MDBCard>{" "}
          <MDBCardImage
            src={vr2}
            position="top"
            alt="..."
            style={{ height: "250px", borderRadius: "0px" }}
          />
          <MDBCardBody className="rounded-0 bg-info">
            <p className="text-white fw-bold text-start ">
              Fluctuations in instantaneous frequency predict alpha
            </p>
            <p className="text-white fw-light text-start">
              Dr. Sirawaj Itthipuripat
            </p>
          </MDBCardBody>
        </MDBCard>{" "}
        <MDBCard className="shadow-0">
          <MDBCard className="mb-4">
            <MDBCardBody className="square border border-2 border-warning rounded-0 bg-white">
              <p className="fw-bold text-start mb-0 text-warning">
                Neuropharmacology & <br></br> Pharmaceutical Biology
              </p>
            </MDBCardBody>
          </MDBCard>{" "}
          <MDBCardImage
            src={vr2}
            position="top"
            alt="..."
            style={{ height: "250px", borderRadius: "0px" }}
          />
          <MDBCardBody className="rounded-0 bg-warning">
            <p className="text-white fw-bold text-start ">
              Fluctuations in instantaneous frequency predict alpha
            </p>
            <p className="text-white fw-light text-start">
              Dr. Sirawaj Itthipuripat
            </p>
          </MDBCardBody>
        </MDBCard>{" "}
      </div>
    </>
  );
}

export default function Publicationimage() {
  return (
    <>
      {/* <Menu /> */}
      <Image />
    </>
  );
}
