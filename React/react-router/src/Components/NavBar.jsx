import { Link } from "react-router-dom";
import React from "react";

export const NavBar = () => {
  return (
    <div>
      <div class="wrapper row1">
        <header id="header" class="clear">
          <div id="hgroup">
            <h1>
              <a href="#">Basic 88</a>
            </h1>
            <h2>Free HTML5 Website Template</h2>
          </div>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>              
              <li>
                <a href="/footer">Footer</a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
};
