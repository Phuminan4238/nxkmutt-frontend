import React from "react";
/* Routes */
import { Route, Routes } from "react-router";
/* Material UI */
import { Container } from "@mui/system";
/* MDBootstrap */
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
/* Images */
import vr2 from "../Images/vr-2.png";
import PeopleIcon from "@mui/icons-material/People";
import SchoolIcon from "@mui/icons-material/School";
import BuildIcon from "@mui/icons-material/Build";
import RedeemIcon from "@mui/icons-material/Redeem";
/* Components */
import Publicationimage from "../Components/Publicationimage";
import Publicationreport from "../Components/Publicationreport";
import Toolsimage from "../Components/Tools";
import News from "../Components/News";

const Newsactivities = () => {
  return (
    <div className="App">
      <section>
        <MDBContainer>
          <MDBRow className="pt-0 pb-5">
            <MDBCol className="d-flex pt-5 pb-0 pe-5">
              <div className="d-flex flex-column w-100">
                <h1 className="fw-bold text-uppercase text-black">News</h1>
                <h1 className="fw-bold text-uppercase text-black">
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
                </h1>
                <div
                  className="d-flex justify-content-between mt-auto"
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
          <News></News>
          <News></News>
        </MDBContainer>
      </section>
    </div>
  );
};

export default Newsactivities;
