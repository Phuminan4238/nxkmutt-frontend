import React from "react";
/* Routes */
import { Route, Routes } from "react-router";
import { useLocation } from "react-router";
/* Material UI */
import { Container } from "@mui/system";
import { useState } from "react";
/* Components */
import Footer from "./Components/Footer";
import ResponsiveAppBar from "./Components/AllNav";
import LanguageContext from "./Components/LanguageContext";
import { LanguageProvider } from "./Components/LanguageContext";
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
import DataDocument from "./Pages/Data Document";
import Memberdetail from "./Pages/Member Detail";
import Studentdetail from "./Pages/Student Detail";
import TagsDetail from "./Pages/Tags Detail";
import NewsDetail from "./Pages/News Detail";
import ToolsDetail from "./Pages/Tools Detail";
import PublicationsDetail from "./Pages/Publication Detail";
import Search from "./Pages/Search";
import Searchresult from "./Pages/Search";
import ParticipateDetail from "./Pages/Participate Detail";

function App() {
  const location = useLocation();
  const nav = location.pathname === "/" ? <HomeNav /> : <AllNav />;
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLanguageSwitch = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <LanguageProvider
      selectedLanguage={selectedLanguage}
      handleLanguageSwitch={handleLanguageSwitch}
    >
      <LanguageContext.Provider
        value={{ selectedLanguage, handleLanguageSwitch }}
      >
        <Container
          maxWidth="xl"
          disableGutters={true}
          style={{ boxShadow: "0px 5px 15px 0px rgba(0, 0, 0, 0.10)" }}
        >
          <div className="app">
            {nav}
            <Routes>
              <Route path="/Search" element={<Searchresult />} />
              <Route path="/Search/:term" element={<Searchresult />} />
              <Route path="/" element={<Home />} />
              <Route
                path="/Team-Member"
                title="TEAM MEMBER"
                element={<Member />}
              />
              <Route path="/Research" element={<Research />} />
              <Route path="/Publications" element={<Publications />} />
              {/* <Route path="/Tools-Service" element={<Toolservice />} /> */}
              <Route path="/Tools-and-Service" element={<Toolservice />} />
              <Route path="/News-and-Activities" element={<Newsactivities />} />
              <Route path="/Contact-Us" element={<Contactus />} />
              <Route path="/Participate-and-Donate" element={<Participate />} />
              <Route path="/Data-Document" element={<DataDocument />} />
              <Route
                path="/Member-Detail/:id"
                element={<Memberdetail title="TEAM MEMBER" />}
              />
              <Route
                path="/Student-Detail/:id"
                element={<Studentdetail title="STUDENT MEMBER" />}
              />
              <Route
                path="/Tags-Detail/:id"
                element={<TagsDetail title="RESEARCH" />}
              />
              <Route
                path="/Publications-Detail/:id"
                element={<PublicationsDetail title="PUBLICATION" />}
              />
              <Route
                path="/Participate-Detail/"
                element={<ParticipateDetail title="PARTICIPATE" />}
              />
              <Route
                path="/News-Detail/:id"
                element={<NewsDetail title="NEWS" />}
              />
              <Route
                path="/Tools-Detail/:id"
                element={<ToolsDetail title="TOOLS" />}
              />
            </Routes>
            <Footer />
          </div>
        </Container>
      </LanguageContext.Provider>
    </LanguageProvider>
  );
}

export default App;
