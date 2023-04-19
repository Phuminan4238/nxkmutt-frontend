import React from "react";
import { useState, useEffect, setIsLoaded } from "react";
import { MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";
import vr2 from "../Images/vr-2.png";

function Menu() {
  const [uploadfiles, setUploadfiles] = useState([]);

  useEffect(() => {
    fetch("https://10.35.29.186/api/tags?populate=id")
      .then((res) => res.json())
      .then((result) => {
        setUploadfiles(result.data);
      });
  });
  return (
    <>
      <div className="d-flex justify-content-between py-4" id="tools-flex">
        <MDBCard className="shadow-0">
          <MDBCard className="mb-4">
            <MDBCardBody
              className="square border border-2 border-danger rounded-2 bg-white"
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
            <MDBCardBody className="square border border-2 border-success rounded-2 bg-white">
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
            <MDBCardBody className="square border border-2 border-info rounded-2 bg-white">
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
            <MDBCardBody className="square border border-2 border-warning rounded-2 bg-white">
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
      <Menu />
    </>
  );
}
