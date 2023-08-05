import React, { useEffect, useState } from 'react';
import fetchMovieData from '../movieServices';

const MovieWebsite = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMovieData();
        setMovies(data.d); // The movie list is inside the 'd' property of the data object
      } catch (error) {
        console.error('Error fetching movie:', error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <div>
      <h1>Movie List</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.ID}>{movie.l}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieWebsite;
