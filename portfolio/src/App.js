import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import NavTabs from "./components/NavTabs";
//import Home from "./components/pages/Home";
import About from "./components/pages/About";
//import Blog from "./components/pages/Blog";
//import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/pages/Portfolio";

function App() {
  return (
    <Router>
      <div className="main-container">
        <div>
          <NavTabs />
          <Header />
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
