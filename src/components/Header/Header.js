import React from "react";
import "./header.css";

export default function Header() {
  return (
      <div class="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label class="menu__btn" for="menu__toggle">
          <span></span>
        </label>

        <ul class="menu__box">
          <li>
            <a class="menu__item" href="/">
              Home
            </a>
          </li>
          <li>
            <a class="menu__item" href="/About">
              About
            </a>
          </li>
          <li>
            <a class="menu__item" href="/Music">
              Music
            </a>
          </li>
          <li>
            <a class="menu__item" href="/Contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
  );
}
