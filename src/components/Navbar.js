import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="outcontainer">
        <img
          src={
            new URL(
              "https://tse1.mm.bing.net/th?id=OIP.ncgNroxhBhBVy9DES99AsQAAAA&pid=Api&P=0&h=180"
            )
          }
          height={150}
          width={150}
          className="logo-1"
          alt="ggiffudddtydtyddiii"
        />
        <p className="para">ARDIK </p>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/languages">Languages</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
