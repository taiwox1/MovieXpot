import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../../components/MovieCard/MovieCard";
import "./MovieListing.scss";

import { Settings } from "../../common/setting";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const MovieListing = () => {

  const movie = useSelector(getAllMovies);
  const series = useSelector(getAllShows);
  let renderMovies, renderSeries = "";


  if (movie.status === "loading") {
    return (
      <div className="movie-status">
        <h2>Loading... </h2>
      </div>
    );

  }
  
   if (movie.data.Error) {
    return (
      <div className="movie-status">
        <h2>Something went wrong ,
          <br /> Check your Network<br />  </h2>
      </div>
    );
  } 
   
  if (movie.status === "failed") {
    return (
      <div className="movie-status">
        <h2>Error: {movie.error} </h2>
      </div>
    );
  }

  renderMovies =
    movie.data.Response === "True" ? (
      movie.data.Search.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))
    ) : (
      <div>
        {" "}
        <h3>{movie.Error}</h3>
      </div>
    );
  
  renderSeries =
    series.data.Response === "True" ? (
      series.data.Search.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))
    ) : (
      <div>
        {" "}
        <h3>{series.Error}</h3>
      </div>
    );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          <Slider {...Settings}>
            {renderMovies}
          </Slider>
          </div>
      </div>
          <div className="movie-list">
        <h2>Series</h2>
        <div className="movie-container">
          <Slider {...Settings}>
            {renderSeries}
          </Slider>
          
        </div>  
      </div> 
    </div>
  );
};

export default MovieListing;
