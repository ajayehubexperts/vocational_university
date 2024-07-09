import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import VocationalUniversity from "./Components/Vocational/VocationalUniversity";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";

const App = () => {
  return (
    <div>
      <Navbar />
      <VocationalUniversity />
      <div className="container">
        <Title subTitle="Our Program" title="What We Offer" />
        <Programs />
      </div>
    </div>
  );
};

export default App;
