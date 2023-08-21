import * as React from "react";
import "../sass/index.scss";
import backgroundVideo from "../videos/hlaml-video.mp4";

const IndexPage = () => {
  return (
    <div>
      <div className="backgroundvideo">
        <video className="video" playsInline loop autoPlay muted>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="logo"></div>
      </div>
      <h1>De website is onderweg, we gaan 28 augustus live!</h1>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Het lukt alleen met logistiek</title>;
