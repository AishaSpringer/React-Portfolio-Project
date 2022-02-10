import React from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import { portfolio } from "./PortfolioPage";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  About,
  Contact
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/portfoliopage"  />
      <Route path="/about"  />
      <Route path="/contact" />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

function columns(containerWidth) {
  let columns = 1;
  if (containerWidth >= 500) columns = 2;
  if (containerWidth >= 900) columns = 3;
  if (containerWidth >= 1500) columns = 4;
  return columns;
}

const App = () => {
  return (
    <div>
      <Gallery portfolio={portfolio} columns={columns} direction="column" />
    </div>
  );
};

render(<App />, document.getElementById("app"));