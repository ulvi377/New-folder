function MovieDetail({ movie }) {
  return (
    <div className="detail">
      <img src={movie.image} alt={movie.name} />

      <div className="info">
        <h2>{movie.name}</h2>

        <p><span>Genre:</span> {movie.genre}</p>
        <p><span>Director:</span> {movie.director}</p>
        <p><span>IMDb:</span> ⭐ {movie.imdb}</p>
        <p><span>Finance:</span> {movie.finance}</p>
        <p><span>Description:</span> {movie.description}</p>
      </div>
    </div>
  );
}

export default MovieDetail;