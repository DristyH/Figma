import React from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Brand from "./components/Brand";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Content />
      <Brand />
      <About />
    </div>
  );
}

export default App;
