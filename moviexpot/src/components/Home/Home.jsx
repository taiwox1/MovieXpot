import React, { useEffect } from 'react';
import movieApi from '../../common/apis/movieApi';
import { APIkey } from '../../common/apis/movieApiKey';
import { useDispatch } from 'react-redux';
import { addmovies } from '../../features/movies/movieSlice';/* 
import movieListing from '../../components/MovieListing/MovieListing' */
function Home() {
    const dispatch = useDispatch();
    const movieText = "Harry";

  useEffect(() => {

    
    const fetchMovie = async () => {
      const response = await movieApi.get(`?apikey=${APIkey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log("Err", err);
        });
      dispatch(addmovies(response.data));
      console.log(response.data)
    };

    fetchMovie();
    
  }, [dispatch]);
  return (
    <div><h1>HEllo</h1> </div>
  )
}

export default Home;