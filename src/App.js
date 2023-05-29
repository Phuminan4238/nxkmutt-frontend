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
import Participate from "./Pages/Participate Donate";
import Memberdetail from "./Pages/Member Detail";
import TagsDetail from "./Pages/Tags Detail";
import NewsDetail from "./Pages/News Detail";
import ToolsDetail from "./Pages/Tools Detail";
import PublicationsDetail from "./Pages/Publication Detail";
import Search from "./Pages/Search";
import Searchresult from "./Pages/Search";

function App() {
  const location = useLocation();

  const nav = location.pathname === "/" ? <HomeNav /> : <AllNav />;

  return (
    <div className="app">
      {nav}
      <Routes>
        <Route path="/Search" element={<Searchresult />} />
        <Route path="/Search/:term" element={<Searchresult />} />
        <Route path="/" element={<Home />} />
        <Route path="/Team-Member" title="TEAM MEMBER" element={<Member />} />
        <Route path="/Research" element={<Research />} />
        <Route path="/Publications" element={<Publications />} />
        {/* <Route path="/Tools-Service" element={<Toolservice />} /> */}
        <Route path="/Tools-and-Service" element={<Toolservice />} />
        <Route path="/News-and-Activities" element={<Newsactivities />} />
        <Route path="/Contact-Us" element={<Contactus />} />
        <Route path="/Participate-and-Donate" element={<Participate />} />
        <Route
          path="/Member-Detail/:id"
          element={<Memberdetail title="TEAM MEMBER" />}
        />
        <Route
          path="/Tags-Detail/:id"
          element={<TagsDetail title="RESEARCH" />}
        />
        <Route
          path="/Publications-Detail/:id"
          element={<PublicationsDetail title="PUBLICATION" />}
        />
        <Route path="/News-Detail/:id" element={<NewsDetail title="NEWS" />} />
        <Route
          path="/Tools-Detail/:id"
          element={<ToolsDetail title="TOOLS" />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
