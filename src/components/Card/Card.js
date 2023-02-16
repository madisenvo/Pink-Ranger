import React from "react";
import styled from "styled-components";
import "./card.css";

const CardContainer = styled.div`
  dislay: flex;
  max-height: 50rem;
  justify-content: center;
`;

const CardBody = styled.div`
  width: 30rem;
  justify-content: center;
  aligh-items: center;
`;

export default function Card({ img, name, github, deployed }) {
  return (
    <CardContainer>
      <CardBody>
        <img className="card-img" src={img} alt="screenshot of project"/>
        <h1 className="card-title">{name}</h1>
        <a href={github} className="card-btn">
          Github Repo
        </a>
        <a href={deployed} className="card-btn">
          Deployed Site
        </a>
      </CardBody>
    </CardContainer>
  );
}
