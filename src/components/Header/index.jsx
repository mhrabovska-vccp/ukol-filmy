import React from 'react';
import './style.css';

import camera from "../../assets/camera.svg";

const Header = ({title, poster, year, rating, director, genre, cast}) => {
  return (
    <>
     <div className="header">
      <h1>
        <img className="logo" src={camera} alt="Logo" />
          V našem kině právě uvádíme
      </h1>
    </div>
    </>
  )
};

export default Header;
