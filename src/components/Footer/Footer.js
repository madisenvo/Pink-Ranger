import React from "react";
import "./footer.css";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <div className="icons">
      <SocialIcon url="https://on.soundcloud.com/c8VVR" />
      <SocialIcon url="https://www.facebook.com/pinkrangermusic" />
      <SocialIcon url="https://instagram.com/pinkranger.x?igshid=MWI4MTIyMDE=" />
      <SocialIcon url="https://www.youtube.com/channel/UCa0ZML7l-CVcPRF_SFGt5rA" />
    </div>
  );
}
