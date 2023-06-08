import React from "react";
/* Routes */
import { Route, Routes } from "react-router";
/* MDBootstrap */
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
/* Components */
import Contactlab from "../Components/Contactlab";
import Contactsocial from "../Components/Contactsocial";

const Contactus = () => {
  return (
    <div className="App">
      <section style={{ borderTop: "1px solid black", marginTop: "1.5rem" }}>
        <MDBContainer className="xs:max-w-full sm:max-w-7xl 2xl:max-w-screen-2xl">
          <MDBRow className="pt-0 pb-5 xs:px-5 sm:px-5 md:px-0">
            <MDBCol className="d-flex pt-5 pb-0 pe-5">
              <div className="d-flex flex-column w-100">
                <p
                  className="font-black text-uppercase text-black xs:text-3xl md:text-5xl"
                  style={{ fontFamily: "MyFont" }}
                >
                  Contact Us
                </p>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBContainer className="xs:max-w-full sm:max-w-7xl">
          <MDBRow className="pt-0 pb-5 xs:px-5 sm:px-5 md:px-0">
            <MDBCol md="6" className="p-0">
              <iframe
                class="image-fluid"
                id="cluster-img"
                style={{ height: "350px" }}
                src="https://maps.google.com/maps?q=nxkmutt&t=&z=13&ie=UTF8&iwloc=&output=embed"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
            </MDBCol>
            <MDBCol className="d-flex pb-0 pe-5">
              <div className="d-flex flex-column w-100 xs:px-0 sm:px-5">
                <MDBRow>
                  <h4
                    className="xs:pt-5 sm:pt-0 fw-bold text-black xs:text-xl md:text-2xl"
                    style={{ fontFamily: "FontMedium" }}
                  >
                    E-mail
                  </h4>
                  <p
                    className="text-black pt-2 xs:text-base md:text-lg"
                    style={{ fontFamily: "FontLight" }}
                  >
                    nx.kmutt.@gmail.com
                  </p>
                </MDBRow>
                <MDBRow className="pt-4">
                  <h4
                    className="fw-bold text-black xs:text-xl md:text-2xl"
                    style={{ fontFamily: "FontMedium" }}
                  >
                    Phone
                  </h4>

                  <p
                    className="text-black pt-2 xs:text-base md:text-lg"
                    style={{ fontFamily: "FontLight" }}
                  >
                    0123456789
                  </p>
                </MDBRow>
                <MDBRow className="pt-4">
                  <h4
                    className="fw-bold text-black"
                    style={{ fontFamily: "FontMedium" }}
                  >
                    Location
                  </h4>
                  <p
                    className=" text-black pe-5 pt-2 xs:text-base md:text-lg"
                    style={{ fontFamily: "FontLight" }}
                  >
                    Neuroscience Center for Research and Innovation (NX),
                    Learning Institute King Mongkut's University of Technology
                    Thonburi (KMUTT) 126 Pracha Uthit Rd,
                    <br></br> Bang Mot, Thung Khru, Bangkok, Thailand
                  </p>
                </MDBRow>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <section>
        <MDBContainer className="xs:max-w-full sm:max-w-7xl">
          <MDBRow className="pt-2 py-4 xs:px-5 sm:px-5 md:px-0">
            <div className="d-inline-flex p-2">
              <p
                className="font-black  xs:text-xl md:text-3xl"
                style={{ fontFamily: "FontMedium" }}
              >
                Social Media
              </p>
            </div>
            <div className="pt-2 py-4 mx-0 md:px-0 ">
              <Contactsocial></Contactsocial>
            </div>
            <div className="d-inline-flex p-2 pt-5">
              <p
                className="fw-bold text-black xs:text-xl md:text-3xl"
                style={{ fontFamily: "FontMedium" }}
              >
                Lab Portal
              </p>
            </div>
            <div className="pt-2 py-4 mx-0 md:px-0 ">
              <Contactlab></Contactlab>
            </div>
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
};

export default Contactus;
