import React from "react";
import { useState, useEffect, setIsLoaded } from "react";
import axios from "axios";
/* MDBootstrap */
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
/* Images */
import vr2 from "../Images/vr-2.png";
/* Components */
import News from "../Components/News";

const Newsactivities = () => {
  const [uploadfiles, setUploadfiles] = useState([]);

  useEffect(() => {
    axios
      .get("https://10.35.29.186/api/contents?populate=id")
      .then((res) => {
        setUploadfiles(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App" style={{ borderTop: "1px solid black" }}>
      <section>
        <MDBContainer className="xs:max-w-full sm:max-w-7xl">
          <MDBRow className="pt-0 pb-5 xs:px-5 sm:px-5 md:px-0">
            <MDBCol className="d-flex pt-5 pb-0 pe-5">
              <div className="d-flex flex-column w-100">
                <p className="font-black text-uppercase text-black xs:text-2xl md:text-5xl">
                  News
                </p>
                <p className="font-black text-uppercase pt-2 xs:text-2xl md:text-5xl">
                  <span
                    style={{
                      fontSize: "4rem",
                      color: "#AE023E",
                      fontWeight: "normal",
                    }}
                  >
                    &
                  </span>{" "}
                  Activities
                </p>
                <div
                  className="d-flex justify-content-between mt-auto xs:px-0 xs:pb-5 xs:pt-5 sm:pt-5 md:p-0"
                  style={{ width: "80%" }}
                >
                  <div class="input-group rounded">
                    <span class="input-group-text border-0" id="search-addon">
                      <i class="fas fa-search"></i>
                    </span>
                    <input
                      type="search"
                      class="form-control rounded"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="search-addon"
                    />
                  </div>
                </div>
              </div>
            </MDBCol>
            <MDBCol md="4" className="p-0">
              <img
                src={vr2}
                class="image-fluid"
                id="cluster-img"
                style={{ height: "350px" }}
              />
            </MDBCol>
          </MDBRow>
          <MDBRow className="pt-0 pb-5 xs:px-5 sm:px-5 md:px-0">
            <News></News>
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
};

export default Newsactivities;
