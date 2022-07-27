import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <FontAwesomeIcon icon={faHouse} className="house" />
      <h1 className="title">SYNC</h1>
      <FontAwesomeIcon icon={faArrowRightFromBracket} className="exit" />
      <nav>
        <ul className="nav">
          <Link to="/"><li>All</li></Link>
          <Link to="/sceduled"><li>Scheduled</li></Link>
        </ul>
      </nav>
      <hr className="rule" />
    </div>
  );
};

export default Header;
