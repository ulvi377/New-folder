import { useState } from "react";


import Navbar from "./components/Navbar";
import MovieCard from "./components/MovieCard";
import MovieDetail from "./components/MovieDetail";
import CinemaInfo from "./components/CinemaInfo";
import Feedback from "./components/Feedback";
import ButtonGroup from "./components/ButtonGroup";

import movies from "./movies";

function App() {
  const [search, setSearch] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);

  const filteredMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <><div className="movie-list">
      {filteredMovies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onClick={() => setSelectedMovie(movie)} />
      ))}
    </div><ButtonGroup movie={selectedMovie} /><div className="content">
        <MovieDetail movie={selectedMovie} />
        <CinemaInfo cinema={selectedMovie.cinema} />
      </div></>
  );
}

export default App;