import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import VocationalUniversity from "./Components/Vocational/VocationalUniversity";
import Programs from "./Components/Programs/Programs";

const App = () => {
  return (
    <div>
      <Navbar />
      <VocationalUniversity />
      <Programs />
    </div>
  );
};

export default App;
