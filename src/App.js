import React from "react";
/* Routes */
import { Route, Routes } from "react-router";
/* Material UI */
import { Container } from "@mui/system";
/* Components */
import Footer from "./Components/Footer";
import ResponsiveAppBar from "./Components/Nav";
/* Pages */
import Home from "./Pages/Home";
import Member from "./Pages/Team Member";
import Research from "./Pages/Research";
import Publications from "./Pages/Publications";
import Memberdetail from "./Pages/Memberdetail";

function App() {
  return (
    <div className="app ">
      <React.Fragment>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Team Member" element={<Member />} />
          <Route path="/Research" element={<Research />} />
          <Route path="/Publications" element={<Publications />} />
          {/* <Route path="/Memberdetail" element={<Memberdetail />} /> */}
        </Routes>
        <Footer></Footer>
      </React.Fragment>
    </div>
  );
}

export default App;
