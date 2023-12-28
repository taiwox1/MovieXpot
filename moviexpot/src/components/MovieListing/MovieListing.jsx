import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../../components/MovieCard/MovieCard";
import "./MovieListing.scss";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const MovieListing = () => {

   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 3
    };
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
          <Slider {...settings}>
            {renderMovies}
          </Slider>
          </div>
      </div>
          <div className="movie-list">
        <h2>Series</h2>
        <div className="movie-container">
         {renderSeries} 
        </div>  
      </div> 
    </div>
  );
};

export default MovieListing;
