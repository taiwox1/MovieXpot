import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import MovieListing from "../../components/MovieListing/MovieListing";
import {
  fetchAsynMovies,
  fetchAsynShows,
 
} from "../../features/movies/movieSlice";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsynShows());
    dispatch(fetchAsynMovies());
   
  }, [dispatch]);
  return (
    <div>
      <h1>
        <MovieListing />
      </h1>
    </div>
  );
}

export default Home;
