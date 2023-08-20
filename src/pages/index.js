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
      </div>
      <main>
        <h1>Het lukt alleen met logistiek</h1>
        <p>De website is onderweg, we gaan 28 augustus live!</p>
      </main>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Het lukt alleen met logistiek</title>;
