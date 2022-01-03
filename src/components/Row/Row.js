import React, { useState, useEffect } from 'react'
import axios from '../../axios';
import './Row.css';

const base_url = 'https://image.tmdb.org/t/p/original/';

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

useEffect(() => {
  // if [], run once when Row loads, don't run again
  async function fetchData() {
    const request = await axios.get(fetchUrl);
    setMovies(request.data.results);
    return request;
  }
  fetchData();
}, [fetchUrl])

console.log(movies);

  return (
    <div className='row'>
      <h2>{title}</h2>

      {/* container with posters */}
      <div className='row__posters'>
        {/** several row__posters(s) */}
        {movies.map(movie => (
          <img 
            className='row__poster'
            src={`${base_url}${movie.poster_path}`} 
            alt={movie.name} />
        ))}
      </div>

    </div>
  )
}

export default Row
