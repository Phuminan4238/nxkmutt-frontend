import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBRipple } from "mdb-react-ui-kit";
import new1 from "../Images/new-1.png";
import EastIcon from "@mui/icons-material/East";
import ReactPaginate from "react-paginate";

function Post({ member }) {
  const [iconStyle, setIconStyle] = useState({
    color: "#AE023E",
    marginLeft: 0,
  });

  const handleMouseEnter = () => {
    setIconStyle((prevState) => ({
      ...prevState,
      marginLeft: "12px",
    }));
  };

  const handleMouseLeave = () => {
    setIconStyle((prevState) => ({
      ...prevState,
      marginLeft: 0,
    }));
  };

  const textStyle = {
    color: "#AE023E",
  };

  // const [isHovered, setIsHovered] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };

  // const colStyle = {
  //   marginLeft: isHovered ? "12px" : "0px",
  //   transition: "margin-left 0.3s ease-out",
  // };

  // const textStyle = { color: "#AE023E" };

  // const iconStyle = { color: "#AE023E" };

  return (
    <Link
      to={`/News-Detail/${member.id}`}
      style={{ color: "inherit" }}
      rel="noopener noreferrer"
      onClick={() => {
        window.scrollTo(0, 0);
        window.location.replace(`/News-Detail/${member.id}`);
      }}
    >
      <MDBRow className="pb-2">
        <MDBCol md="4">
          <MDBRipple
            className="bg-image hover-overlay shadow-1-strong rounded"
            rippleTag="div"
            rippleColor="light"
          >
            {" "}
            <img src={new1} className="w-100" alt="" />
            <a href="#!">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
              ></div>
            </a>
          </MDBRipple>
        </MDBCol>
        {/* <MDBCol className="d-flex ps-4 xs:pt-4 sm:pt-2">
          <div className="d-flex flex-column w-100">
            <h4 className="fw-bold xs:text-lg sm:text-2xl">
              {member.attributes.name_en}
            </h4>
            <p className="mt-2 xs:text-sm sm:text-lg">
              {member.attributes.name_th}
            </p>
            <div
              className="d-flex justify-content-between mt-auto xs:text-base sm:text-lg pt-2" // pt-1
              id="news-underline"
            >
              <p> {member.attributes.createdAt}</p>
              <p className="mb-0">Content Master</p>
            </div>

            <div className="d-inline-flex py-4 text-red">
              <p href="#" className="pe-4 xs:text-base" style={textStyle}>
                Read more
              </p>

              <EastIcon
                style={iconStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </div>
          </div>
        </MDBCol> */}
        <MDBCol
          className="d-flex p-4 xs:pt-4 "
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          // style={colStyle}
        >
          <div className="d-flex flex-column w-100">
            <p
              className="font-bold xs:pt-4 md:pt-0 xs:text-xl md:text-2xl"
              style={{ fontFamily: "MyFont" }}
            >
              {member.attributes.name_en}
            </p>
            <p
              className="font-light mt-2 xs:text-sm sm:text-lg"
              style={{ fontFamily: "FontLight" }}
            >
              {member.attributes.name_th}
            </p>

            <div
              className="d-flex justify-content-between mt-auto xs:text-base sm:text-lg pt-2"
              id="news-underline"
            >
              <p> {member.attributes.createdAt}</p>
              <p className="mb-0">Content Master</p>
            </div>

            <div className="d-inline-flex pt-2 text-red">
              <p href="#" className="pe-4 xs:text-base" style={textStyle}>
                Read more
              </p>

              <EastIcon style={iconStyle} />
            </div>
          </div>
        </MDBCol>
        {/* <MDBCol
      className="d-flex ps-4 xs:pt-4 sm:pt-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={colStyle}
    >
      <div className="d-flex flex-column w-100">
        <h4 className="fw-bold xs:text-lg sm:text-2xl">
          {member.attributes.name_en}
        </h4>
        <p className="mt-2 xs:text-sm sm:text-lg">
          {member.attributes.name_th}
        </p>
        <div
          className="d-flex justify-content-between mt-auto xs:text-base sm:text-lg pt-2"
          id="news-underline"
        >
          <p> {member.attributes.createdAt}</p>
          <p className="mb-0">Content Master</p>
        </div>

        <div className="d-inline-flex py-4 text-red">
          <p href="#" className="pe-4 xs:text-base" style={textStyle}>
            Read more
          </p>

          <EastIcon style={iconStyle} />
        </div>
      </div>
    </MDBCol> */}
      </MDBRow>
    </Link>
  );
}

export default function News() {
  const [uploadfiles, setUploadfiles] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const [iconStyle, setIconStyle] = useState({ color: "#AE023E" });

  const handleMouseEnter = () => {
    setIconStyle({ ...iconStyle, marginLeft: "12px" });
  };

  const handleMouseLeave = () => {
    setIconStyle({ color: "#AE023E" });
  };

  const PER_PAGE = 2;
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(uploadfiles.length / PER_PAGE);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  useEffect(() => {
    fetch("https://10.35.29.186/api/events?populate=id")
      .then((res) => res.json())
      .then((result) => {
        setUploadfiles(result.data);
      });
  }, []);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  if (isHomePage) {
    // Don't render pagination on the home page
    return (
      <MDBContainer className="pt-0 py-4">
        {/* {uploadfiles.slice(offset, offset + PER_PAGE).map((member) => (
        <Post key={member.id} member={member} />
      ))} */}
        {uploadfiles
          .slice(currentPage * PER_PAGE, (currentPage + 1) * PER_PAGE)
          .map((member) => (
            <Post key={member.id} member={member} />
          ))}
        <MDBRow onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Link
            to={`/news-and-activities`}
            style={{ color: "inherit" }}
            onClick={() => {
              window.scrollTo(0, 0);
              window.location.replace(`/news-and-activities`);
            }}
          >
            <div className="d-inline-flex text-red py-2 md:py-4">
              <h5 href="#" className="pe-4" style={{ color: "#AE023E" }}>
                More News & Activity
              </h5>
              <EastIcon style={iconStyle}></EastIcon>
            </div>
          </Link>
        </MDBRow>
      </MDBContainer>
    );
  }

  return (
    <>
      <MDBContainer className="py-4">
        {/* {uploadfiles.slice(offset, offset + PER_PAGE).map((member) => (
          <Post key={member.id} member={member} />
        ))} */}
        {uploadfiles
          .slice(currentPage * PER_PAGE, (currentPage + 1) * PER_PAGE)
          .map((member) => (
            <Post key={member.id} member={member} />
          ))}
      </MDBContainer>

      <MDBRow onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="d-inline-flex justify-center py-4 text-red">
          <ReactPaginate
            previousLabel={"Prev"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            disabledClassName={"disabled"}
            activeClassName={"active"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            breakClassName={"page-item disabled"}
            breakLinkClassName={"page-link"}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
          />
        </div>
      </MDBRow>
    </>
  );
}

//   const [uploadfiles, setUploadfiles] = useState([]);

//   const [iconStyle, setIconStyle] = useState({ color: "#AE023E" });

//   const handleMouseEnter = () => {
//     setIconStyle({ ...iconStyle, marginLeft: "12px" });
//   };

//   const handleMouseLeave = () => {
//     setIconStyle({ color: "#AE023E" });
//   };

//   useEffect(() => {
//     fetch("https://10.35.29.186/api/events?populate=id")
//       .then((res) => res.json())
//       .then((result) => {
//         setUploadfiles(result.data);
//       });
//   }, []);

//   return (
//     <>
//       <MDBContainer className="py-4">
//         {uploadfiles.map((member) => (
//           <Post key={member.id} member={member} />
//         ))}
//       </MDBContainer>
//       <MDBRow onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//         <Link
//           to={`/News Activities/`}
//           target="_blank"
//           style={{ color: "inherit" }}
//         >
//           <div className="d-inline-flex py-4 text-red">
//             <h5 href="#" className="pe-4 " style={{ color: "#AE023E" }}>
//               More News & Activity
//             </h5>
//             <EastIcon style={iconStyle}></EastIcon>
//           </div>
//         </Link>
//       </MDBRow>
//     </>
//   );
// }
