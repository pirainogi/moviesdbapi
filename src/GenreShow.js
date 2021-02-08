import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'

function GenreShow() {
  let { genreId } = useParams();
  const [movies, setMovies] = useState([])
  const [moviePage, setMoviePage] = useState(1)

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=${genreId}&page=${moviePage}`)
    .then(res => res.json())
    .then(moviesData => {
      setMovies([...movies, ...moviesData.results])
    })
  }, [genreId, moviePage])

  const movieList = (movieArr) => {
    return movieArr.map(movie => {
      return (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      )
    })
  }

  console.log(moviePage, movies)

  return (
    <div className="genre-show">
      <p>{genreId}</p>
      <ul>
        {movies && movieList(movies)}
      </ul>
      <button onClick={() => setMoviePage(moviePage + 1)}>Load More</button>
    </div>
  )
}

export default GenreShow;
