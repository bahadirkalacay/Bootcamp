import "./App.css";
import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Contactus from "./Contactus";
import Services from "./Services";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route path="/home" component={Home} exact />
        <Route path="/contactus" component={Contactus} exact />
        <Route path="/services" component={Services} exact />
      </BrowserRouter>
    </div>
  );
}

export default App;
