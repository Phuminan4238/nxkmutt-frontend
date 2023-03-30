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
import Research from "./Pages/Research";
import Publications from "./Pages/Publications";
import Toolservice from "./Pages/Tools Service";
import Newsactivities from "./Pages/News Activities";
import Contactus from "./Pages/Contact Us";
import HomeNav from "./Components/HomeNav";
import AllNav from "./Components/AllNav";
import CallImage from "./Pages/Uploadfile";
import Participate from "./Pages/Participate Donate";
import Memberdetail from "./Pages/Member Detail";
import ResearchCognitive from "./Pages/Research Cognitive";
import ResearchEducation from "./Pages/Research Education";

function App() {
  const location = useLocation();

  const nav = location.pathname === "/" ? <HomeNav /> : <AllNav />;

  return (
    <div className="app">
      {nav}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Team Member" element={<Member />} />
        <Route path="/Research" element={<Research />} />
        <Route path="/Publications" element={<Publications />} />
        <Route path="/Tools Service" element={<Toolservice />} />
        <Route path="/News Activities" element={<Newsactivities />} />
        <Route path="/Contact Us" element={<Contactus />} />
        <Route path="/Participate Donate" element={<Participate />} />
        <Route
          path="/Member Detail"
          element={<Memberdetail title="TEAM MEMBER" />}
        />
        <Route path="/Research Cognitive" element={<ResearchCognitive />} />
        <Route path="/Research Education" element={<ResearchEducation />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
