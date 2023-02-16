import React from "react";
import "./footer.css";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <div className="icons">
      <SocialIcon url="https://github.com/madisenvo" />
      <SocialIcon url="https://www.linkedin.com/in/madisen-v-63814511a/" />
      <SocialIcon url="https://twitter.com/madisenmim" />
    </div>
  );
}
