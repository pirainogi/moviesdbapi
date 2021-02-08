import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'

function MovieShow() {
  let { movieId } = useParams();
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`)
    .then(res => res.json())
    .then(movie => setMovie(movie))
  }, [movieId])

  const movieData = (movie) => {
    return (
      <div>
        <p>Title: {movie.title}</p>
        <p>Genres:</p>
        <ul>{movie.genres.map(genre => {
          return (
            <li key={genre.id}>
            <Link to={`/genres/${genre.id}`}>{genre.name}</Link>
            </li>
          )
        })}</ul>
        <p>Tagline: {movie.tagline}</p>
        <p>Release Date: {movie.release_date}</p>
      </div>
    )
  }

  return (
    <div className="genre-show">
      {movie && movieData(movie)}
    </div>
  )
}

export default MovieShow;
