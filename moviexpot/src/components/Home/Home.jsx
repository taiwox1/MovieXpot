import React, { useEffect, useState } from "react";
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
   
  console.log(value)
   
   
function Home() {
  const dispatch = useDispatch();
  const [defaultValue, SetDefaultValue] = useState("");
  console.log(defaultValue)
  
  useEffect(() => {
    SetDefaultValue(value) 
    dispatch(fetchAsynShows(defaultValue));
    dispatch(fetchAsynMovies(defaultValue));
   
 
  }, [dispatch, defaultValue]);
  return (
    <div  onLoad= {() => SetDefaultValue(value)} >
      {
        
    }
      <h1>
        <MovieListing />
      </h1>
    </div>
  );
}

export default Home;
