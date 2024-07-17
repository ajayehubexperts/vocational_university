import React from "react";
// import "./VideoPlayer.css";

const VideoPlayer = () => {
  return (
    <div className="video-player">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/H8Lyj2D_cWo?si=fD545blh3bGNsE7u"
        title="YouTube video player"
        // frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
