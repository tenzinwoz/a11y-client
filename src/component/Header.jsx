import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="a11y-header">
      <div className="container d-flex justify-content-between">
        <h1>
          <Link to="/">A11y Checker</Link>
        </h1>
        <div className="links">
          <Link to="/results">Scan Results</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    </header>
  );
}
