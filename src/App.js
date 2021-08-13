import React from "react";
import "./App.css";
import Clicker from "./Components/Clicker";
import Todo from "./Components/Todo";
import LifeCycle from "./Components/LifeCycle";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/contact" exact component={Contact} />
    </Router>
  );
}

export default App;
