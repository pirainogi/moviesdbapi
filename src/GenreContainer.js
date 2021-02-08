import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function GenreContainer() {
  const [genres, setGenres] = useState(null)

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`)
    .then(res => res.json())
    .then(genres => setGenres(genres.genres))
  }, [])

  const genreList = (genreArr) => {
    return genreArr.map(genre => {
      return (
        <li key={genre.id}>
          <Link to={`/genres/${genre.id}`}>{genre.name}</Link>
        </li>
      )
    })
  }

  return (
    <div className="genre-container">
      <h1>List of Genres</h1>
      <ul className="genre-list">
        {genres && genreList(genres)}
      </ul>
    </div>
  )
}

export default GenreContainer;
