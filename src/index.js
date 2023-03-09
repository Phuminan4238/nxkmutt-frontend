import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
// import InjectTailwind from "./InjectTailwind";

ReactDOM.render(
  <React.StrictMode>
    {/* <InjectTailwind> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </InjectTailwind> */}
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
