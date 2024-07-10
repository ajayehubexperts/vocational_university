import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import VocationalUniversity from "./Components/Vocational/VocationalUniversity";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";

const App = () => {
  return (
    <div>
      <Navbar />
      <VocationalUniversity />
      <div className="container">
        <Title subTitle="Our Program" title="What We Offer" />
        <Programs />
        <About />
      </div>
    </div>
  );
};

export default App;
