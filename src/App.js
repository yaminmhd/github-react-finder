import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import GitHubApp from './components/GitHubApp/GitHubApp';
import LandingPage from './components/LandingPage/LandingPage';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/githubapp" component={GitHubApp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
