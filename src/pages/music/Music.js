import React from "react";
import "./music.css";
import { Link } from 'react-router-dom';
import tired from '../music/tired.png';
import fun from '../music/fun.png'



export default function Music() {
  return (
    <div className="music">
      <div>
        <h1 className="music-header">Music</h1>
        <div className="albumart">
        <Link to="https://soundcloud.com/user-639286315/im-tired-demo/s-RCcpom7QyxI?si=74bea2bfdae34713bebe8f5770457f7b&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
        <img src={tired} alt="tired" />
        </Link>
        <Link to="https://soundcloud.com/user-639286315/are-u-having-fun-demo/s-x6c8Toh3H8X?si=74bea2bfdae34713bebe8f5770457f7b&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
        <img src={fun} alt="tired" />
        </Link>


        </div>
        
      </div>
    </div>
  );
}