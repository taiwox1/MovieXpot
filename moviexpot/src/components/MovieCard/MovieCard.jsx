import React from "react";
import "./MovieCard.scss"
const MovieCard = (props) => {
  const data  = props.movie;

  
  return (
    <div className="card-item">
    {  <div className="card-inner">
        <div className="card-top">
          <img src={data.Poster} alt={data.Title} />
        
        </div>
        <div className="card-bottom">
          
          <div className="card-info">
            <h4>{data.Title}
            <p>{ data.Year}</p>
            </h4>
            
          </div>
        </div>
      </div> }


    </div>
  );
};

export default MovieCard;
