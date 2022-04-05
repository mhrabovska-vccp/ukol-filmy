import React from 'react';
import './style.css';

import Actor from "../Actor";

const Movie = ({title, poster, year, rating, director, genre, cast}) => {
  return (
    <>
    <div className="movie">
        <img className="poster" src={`/assets/${poster}`} />
        <div className="content">
          <h2 className='title'>{title}</h2>
          <h3 className="year">{year}</h3>
          <p className="genre">Genre: {genre}</p>
          <p className="director">Director: {director}</p>
          <p className="rating">Rating: {rating}</p>
          <span>
              {
                cast.map(item => 
                  <Actor 
                  key={item.name}
                  name={item.name}
                  as={item.as}
                  />
                )
              }
          </span>
        </div>
      </div>
    </>
  )
};

export default Movie;
