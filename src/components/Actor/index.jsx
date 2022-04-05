import React from 'react';
import './style.css';


const Actor = ({name, as}) => {
  return (
    <div className="movie__actor">
      <span>{name} as {as} </span>
    </div>
  )
};

export default Actor;
