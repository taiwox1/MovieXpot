import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";
import MovieCard from "../../components/MovieCard/MovieCard";
 import "./MovieListing.scss";

const MovieListing = () => {
  const { data, status, error } = useSelector( getAllMovies);

  if (status === "loading") {
    return (
      <div className="movie-list">
        {" "}
        <h2>Loading... </h2>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="movie-list">
        
        <h2>Error: {error} </h2>
      </div>
    );
  }
   
  const renderMovies = data.Response === "True" ?
    (  
      data.Search.map(( movie, index) => (  
        <MovieCard key={index}  movie={movie} />
    )) 
   ) : (
    <div> <h3>{data.Error }</h3></div>
  );  

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
         {renderMovies} 
        </div>  
      </div>
    </div>
  );
};

export default MovieListing;
