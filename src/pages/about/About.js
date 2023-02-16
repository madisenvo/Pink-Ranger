import React from "react";
import MyFace from "./MyFace.png";
import "./about.css";

export default function About() {
  return (
    <section className="container">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-sm">
          <img src={MyFace} className='img-fluid' alt="my face" />
        </div>
        <div className="col-sm about">
          <p>
            <br/>
            <br/>
            Hi, I'm Madisen. 
            <br/>
            <br/>
            Pink Ranger is a dynamic three piece rock band hailing from Denver, CO. With an eclectic mix of influences ranging from pop to punk to alternative, their sound is both fresh and familiar.
            <br/>
            <br/>
            This talented trio has been captivating audiences with their high-energy performances and catchy tunes, leaving fans eager for more. And they won't have to wait much longer, as Pink Ranger is set to release their highly anticipated EP in the fall of 2023. Get ready for a wild ride filled with driving beats, soaring guitars, and irresistible hooks, as Pink Ranger proves that rock and roll is alive and well.
          </p>
        </div>
      </div>
    </section>
  );
}
