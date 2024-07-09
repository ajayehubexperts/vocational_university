import React from "react";
import "./VocationalUniversity.css";
import dark_arrow from "../../assets/dark-arrow.png";

const VocationalUniversity = () => {
  return (
    <div className="vocational container">
      <div className="vocational-text">
        <h1>We Ensure education for a better</h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic
          field of education
        </p>
        <button className="btn">
          Explore More <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default VocationalUniversity;
