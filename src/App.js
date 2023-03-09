import React from "react";
/* Routes */
import { Route, Routes } from "react-router";
import { useLocation } from "react-router";
/* Material UI */
import { Container } from "@mui/system";
/* Components */
import Footer from "./Components/Footer";
import ResponsiveAppBar from "./Components/AllNav";
/* Pages */
import Home from "./Pages/Home";
import Member from "./Pages/Team Member";
import Memberdetail from "./Pages/Memberdetail";
import Research from "./Pages/Research";
import Publications from "./Pages/Publications";
import Toolservice from "./Pages/Tools Service";
import Newsactivities from "./Pages/News Activities";
import Contactus from "./Pages/Contact Us";
import HomeNav from "./Components/HomeNav";
import AllNav from "./Components/AllNav";
import CallImage from "./Pages/Uploadfile";

function App() {
  // return (
  // <div className="app ">
  // <Container>
  //   <Row>
  //     <Col sm={8}>sm=8</Col>
  //     <Col sm={4}>sm=4</Col>
  //   </Row>
  //   <Row>
  //     <Col sm>smtrue</Col>
  //     <Col sm>smtrue</Col>
  //   </Row>
  // </Container>
  // </div>

  const location = useLocation();

  return (
    <div className="app ">
      {location.pathname === "/" ? <HomeNav /> : <AllNav />}
      <React.Fragment>
        {/* <Navbar1 /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Team Member" element={<Member />} />
          <Route path="/Research" element={<Research />} />
          <Route path="/Publications" element={<Publications />} />
          <Route path="/Tools service" element={<Toolservice />} />
          <Route path="/News Activities" element={<Newsactivities />} />
          <Route path="/Contact Us" element={<Contactus />} />
          {/* <Route path="/Memberdetail" element={<Memberdetail />} /> */}
        </Routes>

        <Footer></Footer>
      </React.Fragment>
    </div>
    // );
  );
}

export default App;
