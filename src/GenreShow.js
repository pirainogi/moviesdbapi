import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate';

function GenreShow() {
  let { genreId } = useParams();
  const [movies, setMovies] = useState([])
  const [moviePage, setMoviePage] = useState(1)
  const [pageCount, setPageCount] = useState(0)

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=${genreId}&page=${moviePage}`)
    .then(res => res.json())
    .then(moviesData => {
      setMovies([...moviesData.results])
      setPageCount(moviesData.total_pages)
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

  const handlePageClick = (e) => {
    const selectedPage = e.selected
    setMoviePage(selectedPage + 1)
  }

  console.log(moviePage, movies, pageCount)

  return (
    <div className="genre-show">
      <p>{genreId}</p>
      <ul>
        {movies && movieList(movies)}
      </ul>
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}/>
      />
    </div>
  )
}

export default GenreShow;

// <button onClick={() => setMoviePage(moviePage + 1)}>Next</button>
// <button onClick={() => setMoviePage(moviePage >= 2 ? moviePage - 1 : 1)}>Previous</button>
