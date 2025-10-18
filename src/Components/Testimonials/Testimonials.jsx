import React, { useRef, useState } from "react";
import "./Testimonials.css";
import nextIcon from "../../assets/next-icon.png";
import backIcon from "../../assets/back-icon.png";
import user1 from "../../assets/user-1.png";
import user2 from "../../assets/user-2.png";
import user3 from "../../assets/user-3.png";
import user4 from "../../assets/user-4.png";

const testimonialsData = [
  {
    img: user1,
    name: "Ankansha Tripathi",
    location: "Conestoga College, CANADA",
    message:
      "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
  },
  {
    img: user2,
    name: "Sahil Kapadiya",
    location: "Vocational, INDIA",
    message:
      "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
  },
  {
    img: user3,
    name: "Rylan Renner",
    location: "Windsor, CANADA",
    message:
      "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
  },
  {
    img: user4,
    name: "William Jackson",
    location: "Vocational, INDIA",
    message:
      "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
  },
];

const Testimonials = () => {
  const sliderRef = useRef();
  const [translateX, setTranslateX] = useState(0);

  const slideForward = () => {
    if (translateX > -(testimonialsData.length - 1) * 25) {
      const newTranslate = translateX - 25;
      setTranslateX(newTranslate);
      sliderRef.current.style.transform = `translateX(${newTranslate}%)`;
    }
  };

  const slideBackward = () => {
    if (translateX < 0) {
      const newTranslate = translateX + 25;
      setTranslateX(newTranslate);
      sliderRef.current.style.transform = `translateX(${newTranslate}%)`;
    }
  };

  return (
    <div className="testimonials">
      <img
        src={nextIcon}
        alt="Next Slide"
        className="next-btn"
        onClick={slideForward}
      />
      <img
        src={backIcon}
        alt="Previous Slide"
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={sliderRef}>
          {testimonialsData.map((user, index) => (
            <li key={index}>
              <div className="slide">
                <div className="user-info">
                  <img src={user.img} alt={`Profile of ${user.name}`} />
                  <div>
                    <h3>{user.name}</h3>
                    <span>{user.location}</span>
                    <p>{user.message}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
