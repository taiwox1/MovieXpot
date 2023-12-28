import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsynMovies_Shows_Details, getAllPlot, /* removeSelectedmovieOrShow */} from '../../features/movies/movieSlice';
import "./MovieDetail.scss";


function MovieDetail() {

  const {imdbID} = useParams();
  const dispatch = useDispatch();
  const plot = useSelector(getAllPlot)
  console.log(plot.status)
  console.log(plot.data)
  console.log(plot.data.Actors)
  
  useEffect(() => {
    dispatch(fetchAsynMovies_Shows_Details(imdbID))
  /*   return () => {
      dispatch(removeSelectedmovieOrShow())
    } */
    
  }, [dispatch, imdbID])

   if (plot.status === "loading") {
    return (
      <div className="movie-status">
        <h2>Loading... </h2>
      </div>
    );
  }

  if (plot.status === "failed") {
    return (
      <div className="movie-status">
        <h2>Error: {plot.error} </h2>
      </div>
    );
  }

  return (
    <div className='movie-section'>

      {
        Object.keys(plot.data).length === 0 ? ( <div>Loading......</div>):(
        
     <>
     
    <div className='section-left'>
        <div className='movie-title'> {plot.data.Title}</div>
        <div className='movie-rating'>
          <span>IMDB Rating: <i className='fa fa-star'></i> {plot.data.imdbRating}</span>
          <span>IMDB Votes <i className='fa fa-thumps-up'></i> {plot.data.imdbVotes}</span>
          <span>Runtime: <i className='fa fa-file'></i> {plot.data.Runtime}</span>
          <span>Year: <i className='fa fa-calender'></i> { plot.data.Year}</span>
        </div>
        <div className='movie-plot'>{plot.data.Plot}</div>
        <div className='movie-info'>
          <div>
            <span>Director: </span>
            <span>{plot.data.Director}</span>
          </div>
           <div>
            <span>Stars: </span>
            <span>{plot.data.Actors}</span>
          </div>
           <div>
            <span>Languages: </span>
            <span>{plot.data.Language}</span>
          </div>
           <div>
            <span>Awards: </span>
            <span>{plot.data.Awards}</span>
          </div>
        </div>
       
      </div> <div className='session-right'>
          <img src={plot.data.Poster} alt={plot.data.Title } />
  </div> </>
        )
} 
    </div>
  )
}

export default MovieDetail