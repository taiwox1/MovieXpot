import React, {  useEffect } from "react";
import { useDispatch } from "react-redux";

import MovieListing from "../../components/MovieListing/MovieListing";
import {
  fetchAsynMovies,
  fetchAsynShows,
 
} from "../../features/movies/movieSlice";


const defaultList = [
    "Harry",
    "Mad",
    "friend",
    "State",
    "Holiday",
    "Boss",
    "super",
    "superman"
  ]


   const value = defaultList[Math.floor(Math.random() * defaultList.length)];
  
function Home() {


  const dispatch = useDispatch();
 
  
 console.log(value)
  useEffect(() => {

   
    dispatch(fetchAsynShows(value));
    dispatch(fetchAsynMovies(value));
   
 
  }, [dispatch]);

  
  return (
    <div   >
      {
        
    }
      <h1>
        <MovieListing />
      </h1>
    </div>
  );
}

export default Home;
