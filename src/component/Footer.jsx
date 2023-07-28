import React from "react";
import { Link } from "react-router-dom";
import TenzinAvatar from "../images/tenzin-avatar.svg";

export default function Footer() {
  return (
    <footer className="a11y-footer">
      <div className="container text-center">
        <div>
          <img src={TenzinAvatar} alt="TenzinAvatar" />
          <span>
            Designed & Developed by{" "}
            <Link to="https://tenzinwoz.github.io/wozzer/" target="_blank">
              Tenzin Woeser
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
