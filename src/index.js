import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../node_modules/bootswatch/dist/united/bootstrap.min.css";
import registerServiceWorker from "./registerServiceWorker";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import GitHubApp from "./components/GitHubApp/GitHubApp";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<LandingPage/>}/>
          <Route path="/githubapp" element={<GitHubApp/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    <App />
  </React.StrictMode>
);
registerServiceWorker();
