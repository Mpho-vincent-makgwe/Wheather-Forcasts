import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div>
      <div className="movie-card">
        <img src={movie.i.imageUrl} alt={movie.l} />
        <h2>{movie.l}</h2>
        <p>{movie.q}</p>
        {/* Add more movie information here as needed */}
      </div>
    </div>
  );
};

export default MovieCard;
