import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import NavBar from "./Components/NavBar";

const App = () => (
    <Router>
      <div>
        <NavBar />
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
      </div>
    </Router>
  );

export default App;