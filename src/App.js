import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import GenreContainer from './GenreContainer';
import GenreShow from './GenreShow'
import MovieShow from './MovieShow'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        tmdb api app
        </header>
        <Link to="/genres">Genres</Link>
        <Switch>
          <Route path="/genres/:genreId">
            <GenreShow/>
          </Route>
          <Route path="/genres">
            <GenreContainer/>
          </Route>
          <Route path="/movies/:movieId">
            <MovieShow/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
